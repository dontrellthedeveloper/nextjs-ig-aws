'use client';

import { useEffect, useState } from 'react';
import { isAmplifyConfigured } from '../lib/amplify';

export default function AmplifyConfigCheck() {
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    const checkConfig = () => {
      const configured = isAmplifyConfigured();
      setIsConfigured(configured);
      
      if (configured) {
        console.log('✅ Amplify is properly configured');
      } else {
        console.warn('⚠️ Amplify configuration may be incomplete');
      }
    };

    // Check after a short delay to ensure Amplify is loaded
    const timer = setTimeout(checkConfig, 100);
    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything visible
  // It's just for configuration checking
  return null;
}