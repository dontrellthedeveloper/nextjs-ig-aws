# Authentication System Architecture Guide

## 🎯 What is Authentication?

Authentication is the process of **verifying who a user is**, while authorization determines **what they can access**. Our app uses a modern, secure authentication system built on AWS Cognito with React Context for state management.

### Key Components:
- **AWS Cognito**: Identity provider and user management
- **React Context**: Client-side state management
- **JWT Tokens**: Secure session management
- **Protected Routes**: Route-level security
- **Profile Sync**: Database integration

---

## 🏗️ System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React App     │    │   AWS Cognito    │    │   DynamoDB      │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ AuthContext │◄┼────┼►│ User Pool    │ │    │ │ User Profile│ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │  Components │ │    │ │ OAuth (Google│ │    │ │  User Data  │ │
│ └─────────────┘ │    │ │  Facebook)   │ │    │ └─────────────┘ │
└─────────────────┘    └──────────────────┘    └─────────────────┘
        │                        │                        │
        └────────── JWT Tokens ──────────── GraphQL ──────┘
```

---

## 🔐 AWS Cognito Deep Dive

### User Pools vs Identity Pools

**User Pool** (What we use):
- User directory service
- Authentication (sign up, sign in)
- User management
- Password policies
- MFA support

**Identity Pool** (For AWS resource access):
- Authorization for AWS services
- Temporary credentials
- Role-based access

### Our Cognito Configuration
```json
{
  "aws_user_pools_id": "us-west-1_jnT5usNnO",
  "aws_user_pools_web_client_id": "3997amosekoinpvpibk7d6tbn6",
  "aws_cognito_username_attributes": ["EMAIL"],
  "aws_cognito_signup_attributes": ["EMAIL"],
  "aws_cognito_verification_mechanisms": ["EMAIL"],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": []
  }
}
```

**Key Settings:**
- **Email as Username**: Users sign in with email
- **Email Verification**: Required for account activation
- **Password Policy**: Minimum 8 characters
- **OAuth Providers**: Ready for Google/Facebook

---

## 🔄 Authentication Flow Diagrams

### 1. Sign Up Flow
```
User Input          Cognito              Database             UI
    │                  │                    │                  │
    │ ── Email/Pass ──► │                    │                  │
    │                  │ ── Create User ──► │                  │
    │                  │ ◄── User ID ────── │                  │
    │ ◄─ Need Email ─── │                    │                  │
    │    Verification   │                    │                  │
    │                  │                    │                  │
    │ ── Enter Code ──► │                    │                  │
    │                  │ ── Verify ───────► │                  │
    │                  │ ◄── Success ────── │                  │
    │ ◄─── Success ──── │                    │                  │
    │                  │                    │ ── Create ─────► │
    │                  │                    │    Profile       │
```

### 2. Sign In Flow
```
User Input          Cognito              Database             UI State
    │                  │                    │                  │
    │ ── Email/Pass ──► │                    │                  │
    │                  │ ── Authenticate ─► │                  │
    │                  │ ◄── JWT Token ──── │                  │
    │ ◄─── Success ──── │                    │                  │
    │                  │                    │ ── Fetch ──────► │
    │                  │                    │    Profile       │
    │                  │                    │ ◄── Profile ──── │
    │ ◄───────────── Update Auth State ──────────────────────── │
```

### 3. Token Refresh Flow
```
App Request         Cognito              AuthContext
    │                  │                    │
    │ ── API Call ────► │                    │
    │ ◄─ 401 Error ──── │                    │
    │                  │ ◄── Check Token ─── │
    │                  │ ── Refresh ──────► │
    │                  │ ◄── New Token ───── │
    │ ── Retry with ──► │                    │
    │    New Token     │                    │
```

---

## 🧩 Code Architecture

### 1. AuthContext Structure
```typescript
interface User {
  userId: string;           // Cognito user ID
  username: string;         // Cognito username
  email: string;           // User email
  emailVerified: boolean;  // Email verification status
  profile?: UserProfile;   // Database profile data
  attributes: {            // Cognito attributes
    email: string;
    preferred_username: string;
    sub: string;           // Cognito subject ID
    [key: string]: any;
  };
}

interface AuthContextType {
  user: User | null;                    // Current user
  loading: boolean;                     // Auth state loading
  signUp: (email, password, username) => Promise<any>;
  signIn: (email, password) => Promise<any>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  confirmSignUp: (email, code) => Promise<any>;
  resendConfirmationCode: (email) => Promise<any>;
  isAuthenticated: boolean;             // Helper property
}
```

### 2. Authentication Methods

#### Email/Password Sign Up
```typescript
const handleSignUp = async (email: string, password: string, username: string) => {
  try {
    const { nextStep } = await signUp({
      username: email,        // Use email as Cognito username
      password,
      options: {
        userAttributes: {
          email,
          preferred_username: username,  // Store chosen username
        },
      },
    });
    
    // Handle verification step
    return { success: true, nextStep };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

#### Email Verification
```typescript
const handleConfirmSignUp = async (email: string, code: string) => {
  try {
    const { nextStep } = await confirmSignUp({
      username: email,
      confirmationCode: code,
    });
    
    return { success: true, nextStep };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

#### Google OAuth
```typescript
const handleSignInWithGoogle = async () => {
  try {
    await signInWithRedirect({
      provider: 'Google',
    });
    // Cognito handles the redirect flow
  } catch (error) {
    throw new Error(error.message);
  }
};
```

### 3. Session Management

#### Token Storage
```typescript
// Amplify automatically handles:
- Access Token (1 hour expiry)
- ID Token (user info)
- Refresh Token (30 days)

// Stored securely in:
- Web: localStorage/sessionStorage
- Mobile: Secure keychain
```

#### Automatic Refresh
```typescript
// Amplify handles token refresh automatically
const session = await fetchAuthSession();
if (session.tokens?.accessToken) {
  // Token is valid, proceed with request
} else {
  // Token expired, Amplify refreshes automatically
}
```

---

## 🛡️ Security Features

### 1. JWT Token Security
```json
{
  "header": {
    "alg": "RS256",          // RSA signature
    "typ": "JWT"
  },
  "payload": {
    "sub": "user-id",        // Subject (user ID)
    "email": "user@email.com",
    "iat": 1640995200,       // Issued at
    "exp": 1641081600,       // Expires at
    "aud": "client-id",      // Audience
    "iss": "cognito-issuer"  // Issuer
  }
}
```

### 2. Password Security
- **Minimum Length**: 8 characters
- **Encryption**: bcrypt with salt
- **Storage**: Never stored in plaintext
- **Transmission**: HTTPS only

### 3. Session Security
- **HttpOnly Cookies**: XSS protection
- **Secure Flag**: HTTPS only
- **SameSite**: CSRF protection
- **Automatic Expiry**: Limited session lifetime

---

## 🔗 Database Integration

### User Profile Synchronization
```typescript
const createOrSyncUserProfile = async (cognitoUser) => {
  // 1. Check if profile exists
  let profile = await getUserProfileByCognitoId(cognitoUser.userId);
  
  if (!profile) {
    // 2. Create new profile
    profile = await createUserProfile({
      cognitoId: cognitoUser.userId,
      username: cognitoUser.attributes.preferred_username,
      email: cognitoUser.email,
    });
  }
  
  return profile;
};
```

### Authentication → Database Flow
```
Cognito Authentication ──┐
                        │
                        ▼
                 ┌──────────────┐
                 │ User Signs In │
                 └──────────────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Fetch Cognito│
                 │ Attributes   │
                 └──────────────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Check Database│
                 │ Profile      │
                 └──────────────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Create/Update│
                 │ Profile      │
                 └──────────────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Update React │
                 │ Context      │
                 └──────────────┘
```

---

## 🛣️ Route Protection

### Protected Route Component
```typescript
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');  // Redirect to login
    }
  }, [user, loading, router]);

  if (loading) return <LoadingSpinner />;
  if (!user) return <AuthRequired />;
  
  return <>{children}</>;
}
```

### Usage in Pages
```typescript
// Protected page
export default function HomePage() {
  return (
    <ProtectedRoute>
      <MainApp />
    </ProtectedRoute>
  );
}

// Public page (auth not required)
export default function AuthPage() {
  return <LoginForm />;
}
```

---

## 🔧 Event Handling

### Authentication Events
```typescript
useEffect(() => {
  const hubListener = (data: any) => {
    switch (data.payload.event) {
      case 'signedIn':
        console.log('User signed in');
        checkAuthState();        // Refresh user data
        break;
        
      case 'signedOut':
        console.log('User signed out');
        setUser(null);          // Clear user state
        break;
        
      case 'tokenRefresh':
        console.log('Token refreshed');
        // No action needed, Amplify handles it
        break;
        
      case 'tokenRefresh_failure':
        console.log('Token refresh failed');
        setUser(null);          // Force re-authentication
        break;
    }
  };

  return Hub.listen('auth', hubListener);
}, []);
```

---

## 🚨 Error Handling

### Common Authentication Errors
```typescript
const authErrors = {
  'UserNotConfirmedException': 'Please verify your email address',
  'NotAuthorizedException': 'Invalid email or password',
  'UserNotFoundException': 'No account found with this email',
  'UsernameExistsException': 'An account with this email already exists',
  'InvalidPasswordException': 'Password does not meet requirements',
  'LimitExceededException': 'Too many attempts, please try again later',
  'ExpiredCodeException': 'Verification code has expired',
  'CodeMismatchException': 'Invalid verification code',
};

const handleAuthError = (error: any) => {
  const message = authErrors[error.name] || error.message || 'An error occurred';
  setError(message);
};
```

---

## 📱 Multi-Platform Considerations

### Web Browser
- **Storage**: localStorage for tokens
- **Security**: HttpOnly cookies preferred
- **Refresh**: Automatic background refresh

### Mobile App (React Native)
- **Storage**: Secure keychain/keystore
- **Biometrics**: Face ID/Touch ID integration
- **Background**: Handle app backgrounding

### Server-Side Rendering (SSR)
- **Token Validation**: Server-side verification
- **Hydration**: Client-side state sync
- **Security**: No token exposure in HTML

---

## 📊 Performance Optimizations

### 1. Token Caching
```typescript
// Cache tokens in memory
let cachedTokens: CognitoTokens | null = null;

const getTokens = async () => {
  if (cachedTokens && !isExpired(cachedTokens)) {
    return cachedTokens;
  }
  
  cachedTokens = await fetchAuthSession();
  return cachedTokens;
};
```

### 2. Lazy Authentication
```typescript
// Only check auth when needed
const useAuthRequired = () => {
  const { user, loading } = useAuth();
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    if (!loading) {
      setChecked(true);
    }
  }, [loading]);
  
  return { user, loading: !checked };
};
```

### 3. Profile Caching
```typescript
// Cache user profile to avoid database calls
const [profileCache, setProfileCache] = useState<Map<string, UserProfile>>(new Map());

const getUserProfile = async (userId: string) => {
  if (profileCache.has(userId)) {
    return profileCache.get(userId);
  }
  
  const profile = await fetchUserProfile(userId);
  profileCache.set(userId, profile);
  return profile;
};
```

---

## 🧪 Testing Strategies

### Unit Tests
```typescript
describe('AuthContext', () => {
  test('signs in user successfully', async () => {
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.signIn('test@email.com', 'password');
    });
    
    expect(result.current.user).toBeTruthy();
    expect(result.current.isAuthenticated).toBe(true);
  });
});
```

### Integration Tests
```typescript
test('protected route redirects unauthenticated users', () => {
  render(
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
  
  expect(mockRouter.push).toHaveBeenCalledWith('/auth');
});
```

---

## 📚 Interview Key Points

### Authentication vs Authorization
- **Authentication**: "Who are you?" (Login process)
- **Authorization**: "What can you access?" (Permissions)

### JWT Benefits
- **Stateless**: No server-side session storage
- **Scalable**: Works across multiple servers
- **Secure**: Cryptographically signed
- **Standard**: Industry-wide adoption

### Security Best Practices
- **HTTPS Only**: Encrypt all communication
- **Token Expiry**: Limit session lifetime
- **Refresh Tokens**: Secure token renewal
- **Input Validation**: Prevent injection attacks

### AWS Cognito Advantages
- **Managed Service**: No infrastructure management
- **Scalable**: Handles millions of users
- **Compliant**: SOC, PCI, HIPAA certified
- **Integrated**: Works with other AWS services

This authentication system provides enterprise-grade security with a smooth user experience, making it perfect for production applications and technical interviews.