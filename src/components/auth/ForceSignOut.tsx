'use client';

import { useEffect } from 'react';
import { signOut } from 'aws-amplify/auth';

export default function ForceSignOut() {
  useEffect(() => {
    const forceSignOut = async () => {
      try {
        // Force global sign out
        await signOut({ global: true });
        
        // Clear all local storage
        if (typeof window !== 'undefined') {
          localStorage.clear();
          sessionStorage.clear();
          
          // Remove specific Amplify keys
          const keysToRemove = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.includes('aws') || key.includes('cognito') || key.includes('amplify'))) {
              keysToRemove.push(key);
            }
          }
          keysToRemove.forEach(key => localStorage.removeItem(key));
          
          // Reload the page to clear any cached state
          window.location.href = '/auth';
        }
      } catch (error) {
        console.error('Force sign out error:', error);
        // Even if sign out fails, clear everything
        if (typeof window !== 'undefined') {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = '/auth';
        }
      }
    };

    forceSignOut();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Signing out...</p>
      </div>
    </div>
  );
}