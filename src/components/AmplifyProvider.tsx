'use client';

import { Amplify } from 'aws-amplify';
import { ReactNode, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

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
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}