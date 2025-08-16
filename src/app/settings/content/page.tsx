'use client';

import React, { useState } from 'react';

export default function ContentPage() {
  const [language, setLanguage] = useState('en');
  const [sensitive, setSensitive] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [dataUsage, setDataUsage] = useState('default');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Preferences</h2>
        
        <div className="space-y-8">
          {/* Language */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Language</h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>

          {/* Sensitive Content */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sensitive Content</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Show Sensitive Content</p>
                <p className="text-sm text-gray-600 mt-1">
                  Display media that may contain sensitive content.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={sensitive}
                  onChange={(e) => setSensitive(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${sensitive ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${sensitive ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Autoplay */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Videos</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Autoplay Videos</p>
                <p className="text-sm text-gray-600 mt-1">
                  Videos will automatically start playing as you scroll.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${autoplay ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${autoplay ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Data Usage */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Usage</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="default"
                  checked={dataUsage === 'default'}
                  onChange={(e) => setDataUsage(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Default</p>
                  <p className="text-sm text-gray-600">Load images and videos in standard quality</p>
                </div>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  value="high"
                  checked={dataUsage === 'high'}
                  onChange={(e) => setDataUsage(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">High Quality</p>
                  <p className="text-sm text-gray-600">Always load the highest quality images and videos</p>
                </div>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  value="low"
                  checked={dataUsage === 'low'}
                  onChange={(e) => setDataUsage(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Data Saver</p>
                  <p className="text-sm text-gray-600">Use less data and load content faster</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}