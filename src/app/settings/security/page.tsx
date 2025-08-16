'use client';

import React, { useState } from 'react';

export default function SecurityPage() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [savedLogin, setSavedLogin] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
        
        <div className="space-y-8">
          {/* Password */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Password</h3>
            <button className="text-blue-600 font-medium hover:text-blue-700">
              Change password
            </button>
          </div>

          {/* Two-Factor Authentication */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Use Two-Factor Authentication</p>
                <p className="text-sm text-gray-600 mt-1">
                  We'll send you a security code when we need to confirm that it's you logging in.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={twoFactor}
                  onChange={(e) => setTwoFactor(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${twoFactor ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${twoFactor ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Login Activity */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Login Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">San Francisco, CA - Chrome</p>
                  <p className="text-sm text-gray-600">Active now</p>
                </div>
                <span className="text-sm text-green-600 font-medium">This device</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">New York, NY - Safari</p>
                  <p className="text-sm text-gray-600">Yesterday at 2:30 PM</p>
                </div>
                <button className="text-sm text-red-600 font-medium hover:text-red-700">
                  Log out
                </button>
              </div>
            </div>
          </div>

          {/* Login Alerts */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Login Alerts</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Get alerts about unrecognized logins</p>
                <p className="text-sm text-gray-600 mt-1">
                  We'll let you know if anyone logs into your account from a device or browser you don't usually use.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={loginAlerts}
                  onChange={(e) => setLoginAlerts(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${loginAlerts ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${loginAlerts ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Saved Login */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Login Information</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Save your login info</p>
                <p className="text-sm text-gray-600 mt-1">
                  We'll save your login info for you so you don't have to enter it when you log in again.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={savedLogin}
                  onChange={(e) => setSavedLogin(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${savedLogin ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${savedLogin ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}