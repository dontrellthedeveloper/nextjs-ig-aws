'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/auth/LoginForm';
import SignupForm from '../../components/auth/SignupForm';
import EmailVerification from '../../components/auth/EmailVerification';

type AuthStep = 'login' | 'signup' | 'verify';

export default function AuthPage() {
  const [currentStep, setCurrentStep] = useState<AuthStep>('login');
  const [signupEmail, setSignupEmail] = useState('');
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push('/');
  };

  const handleSignupSuccess = (email: string) => {
    setSignupEmail(email);
    setCurrentStep('verify');
  };

  const handleVerificationSuccess = () => {
    setCurrentStep('login');
  };

  const handleSwitchToSignup = () => {
    setCurrentStep('signup');
  };

  const handleSwitchToLogin = () => {
    setCurrentStep('login');
  };

  const handleBackToSignup = () => {
    setCurrentStep('signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 'login' && (
            <LoginForm
              onSuccess={handleLoginSuccess}
              onSwitchToSignup={handleSwitchToSignup}
            />
          )}
          
          {currentStep === 'signup' && (
            <SignupForm
              onSuccess={handleSignupSuccess}
              onSwitchToLogin={handleSwitchToLogin}
            />
          )}
          
          {currentStep === 'verify' && (
            <EmailVerification
              email={signupEmail}
              onSuccess={handleVerificationSuccess}
              onBack={handleBackToSignup}
            />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            By signing up, you agree to our{' '}
            <a href="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}