'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
        
        <div className="space-y-8">
          {/* App Info */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">App Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Version</span>
                <span className="font-medium text-gray-900">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Build</span>
                <span className="font-medium text-gray-900">2024.1.15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platform</span>
                <span className="font-medium text-gray-900">Web</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <div className="space-y-3">
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Terms of Service
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Privacy Policy
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Cookie Policy
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Community Guidelines
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <div className="space-y-3">
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                About Us
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Careers
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Press
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium block">
                Blog
              </button>
            </div>
          </div>

          {/* Credits */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Open Source Libraries</h3>
            <p className="text-sm text-gray-600 mb-3">
              This app is built with amazing open source technologies:
            </p>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="font-medium text-gray-900">React</span>
                <span className="text-gray-600 ml-2">UI Library</span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-900">Next.js</span>
                <span className="text-gray-600 ml-2">Framework</span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-900">Tailwind CSS</span>
                <span className="text-gray-600 ml-2">Styling</span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-900">AWS Amplify</span>
                <span className="text-gray-600 ml-2">Backend Services</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2024 Social. All rights reserved.
        </div>
      </div>
    </div>
  );
}