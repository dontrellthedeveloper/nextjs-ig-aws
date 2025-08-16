'use client';

import React from 'react';

export default function HelpPage() {
  const helpTopics = [
    { title: 'Getting Started', description: 'Learn the basics of using Social', icon: '🚀' },
    { title: 'Account Management', description: 'Manage your profile and account settings', icon: '👤' },
    { title: 'Privacy & Security', description: 'Keep your account safe and secure', icon: '🔒' },
    { title: 'Troubleshooting', description: 'Fix common issues and problems', icon: '🔧' },
    { title: 'Community Guidelines', description: 'Understand our rules and policies', icon: '📜' },
    { title: 'Report a Problem', description: 'Let us know about bugs or issues', icon: '🐛' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Help Center</h2>
        
        <div className="space-y-4">
          {helpTopics.map((topic, index) => (
            <button
              key={index}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{topic.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 mt-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Need more help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}