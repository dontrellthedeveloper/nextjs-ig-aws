'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';

const sidebarItems = [
  { id: 'edit-profile', path: '/settings/edit-profile', label: 'Edit Profile', icon: '👤' },
  { id: 'privacy', path: '/settings/privacy', label: 'Privacy', icon: '🔒' },
  { id: 'security', path: '/settings/security', label: 'Security', icon: '🛡️' },
  { id: 'notifications', path: '/settings/notifications', label: 'Notifications', icon: '🔔' },
  { id: 'content', path: '/settings/content', label: 'Content Preferences', icon: '📱' },
  { id: 'help', path: '/settings/help', label: 'Help', icon: '❓' },
  { id: 'about', path: '/settings/about', label: 'About', icon: 'ℹ️' },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <AmplifyConfigCheck />
      <Navbar />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 flex justify-center px-4 md:px-0">
          <div className="py-8 w-full max-w-6xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="flex">
                {/* Settings Sidebar */}
                <div className="w-80 border-r border-gray-200">
                  <div className="p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
                    <p className="text-sm text-gray-600">Manage your account settings and preferences</p>
                  </div>
                  <nav className="pb-6">
                    {sidebarItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.path}
                        className={`flex items-center gap-3 px-8 py-3 transition-colors ${
                          pathname === item.path
                            ? 'bg-gray-100 border-l-4 border-blue-600 text-gray-900'
                            : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Settings Content */}
                <div className="flex-1 p-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}