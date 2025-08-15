'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import { ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export default function AuthWrapper({ children, requireAuth = false }: AuthWrapperProps) {
  if (requireAuth) {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            {children}
            {/* You can add a sign out button here if needed */}
            {/* <button onClick={signOut}>Sign out</button> */}
          </div>
        )}
      </Authenticator>
    );
  }

  // If auth is not required, just render children
  return <>{children}</>;
}

// Custom theme for Authenticator if you want to style it
export const amplifyUITheme = {
  name: 'social-theme',
  tokens: {
    components: {
      authenticator: {
        router: {
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
        form: {
          padding: '2rem',
        },
      },
      button: {
        primary: {
          backgroundColor: 'rgb(59 130 246)', // Blue-500
          _hover: {
            backgroundColor: 'rgb(29 78 216)', // Blue-700
          },
        },
      },
      fieldcontrol: {
        borderRadius: '8px',
        borderColor: 'rgb(209 213 219)', // Gray-300
        _focus: {
          borderColor: 'rgb(59 130 246)', // Blue-500
        },
      },
    },
  },
};