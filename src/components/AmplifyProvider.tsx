'use client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ReactNode, useEffect } from 'react';

// Import the configuration
import amplifyconfig from '../amplifyconfiguration.json';

// Configure Amplify
Amplify.configure(amplifyconfig);

interface AmplifyProviderProps {
  children: ReactNode;
}

export default function AmplifyProvider({ children }: AmplifyProviderProps) {
  useEffect(() => {
    // Ensure Amplify is configured on the client side
    Amplify.configure(amplifyconfig);
  }, []);

  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  );
}

// Optional: Export a hook for easy access to auth state
export { useAuthenticator } from '@aws-amplify/ui-react';