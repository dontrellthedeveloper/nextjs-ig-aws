'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  signUp, 
  signIn, 
  signOut, 
  getCurrentUser,
  confirmSignUp,
  resendSignUpCode,
  signInWithRedirect,
  fetchAuthSession,
  fetchUserAttributes
} from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

export interface User {
  userId: string;
  username: string;
  email: string;
  emailVerified: boolean;
  attributes: {
    email: string;
    email_verified: boolean;
    sub: string;
    [key: string]: any;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, username: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  confirmSignUp: (email: string, code: string) => Promise<any>;
  resendConfirmationCode: (email: string) => Promise<any>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthState();
  }, []);

  // Listen for authentication events
  useEffect(() => {
    const hubListener = (data: any) => {
      const { payload } = data;
      
      switch (payload.event) {
        case 'signedIn':
          console.log('User signed in');
          checkAuthState();
          break;
        case 'signedOut':
          console.log('User signed out');
          setUser(null);
          break;
        case 'tokenRefresh':
          console.log('Token refreshed');
          break;
        case 'tokenRefresh_failure':
          console.log('Token refresh failed');
          setUser(null);
          break;
        case 'signInWithRedirect':
          console.log('OAuth sign in completed');
          checkAuthState();
          break;
        case 'signInWithRedirect_failure':
          console.log('OAuth sign in failed');
          break;
      }
    };

    const unsubscribe = Hub.listen('auth', hubListener);
    return unsubscribe;
  }, []);

  const checkAuthState = async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();
      const session = await fetchAuthSession();
      
      if (currentUser && session) {
        // Fetch user attributes to get preferred_username and other details
        const userAttributes = await fetchUserAttributes();
        
        const userData: User = {
          userId: currentUser.userId,
          username: currentUser.username,
          email: userAttributes.email || currentUser.signInDetails?.loginId || '',
          emailVerified: userAttributes.email_verified === 'true',
          attributes: {
            email: userAttributes.email || '',
            email_verified: userAttributes.email_verified === 'true',
            sub: currentUser.userId,
            preferred_username: userAttributes.preferred_username,
            given_name: userAttributes.given_name,
            family_name: userAttributes.family_name,
            ...userAttributes
          }
        };
        
        console.log('User data:', userData); // Debug log
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log('Not authenticated:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (email: string, password: string, username: string) => {
    try {
      const { nextStep } = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            preferred_username: username,
          },
        },
      });
      
      return { 
        success: true, 
        nextStep,
        message: 'Account created successfully! Please check your email for verification code.' 
      };
    } catch (error: any) {
      console.error('Sign up error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to create account' 
      };
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      const { nextStep } = await signIn({
        username: email,
        password,
      });

      if (nextStep.signInStep === 'DONE') {
        await checkAuthState();
        return { 
          success: true, 
          message: 'Signed in successfully!' 
        };
      } else {
        return { 
          success: false, 
          nextStep,
          message: 'Additional steps required' 
        };
      }
    } catch (error: any) {
      console.error('Sign in error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to sign in' 
      };
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithRedirect({
        provider: 'Google',
      });
    } catch (error: any) {
      console.error('Google sign in error:', error);
      throw new Error(error.message || 'Failed to sign in with Google');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error: any) {
      console.error('Sign out error:', error);
      throw new Error(error.message || 'Failed to sign out');
    }
  };

  const handleConfirmSignUp = async (email: string, code: string) => {
    try {
      const { nextStep } = await confirmSignUp({
        username: email,
        confirmationCode: code,
      });

      if (nextStep.signUpStep === 'DONE') {
        return { 
          success: true, 
          message: 'Email verified successfully! You can now sign in.' 
        };
      } else {
        return { 
          success: false, 
          nextStep,
          message: 'Additional steps required' 
        };
      }
    } catch (error: any) {
      console.error('Confirm sign up error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to verify email' 
      };
    }
  };

  const handleResendConfirmationCode = async (email: string) => {
    try {
      await resendSignUpCode({
        username: email,
      });
      return { 
        success: true, 
        message: 'Verification code sent to your email' 
      };
    } catch (error: any) {
      console.error('Resend code error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to resend verification code' 
      };
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signInWithGoogle: handleSignInWithGoogle,
    signOut: handleSignOut,
    confirmSignUp: handleConfirmSignUp,
    resendConfirmationCode: handleResendConfirmationCode,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}