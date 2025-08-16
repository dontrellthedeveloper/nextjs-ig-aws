'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to edit-profile by default
    router.replace('/settings/edit-profile');
  }, [router]);

  return null;
}