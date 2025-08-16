'use client';

import React, { useState } from 'react';

export default function NotificationsPage() {
  const [emailLikes, setEmailLikes] = useState(true);
  const [emailComments, setEmailComments] = useState(true);
  const [emailFollowers, setEmailFollowers] = useState(true);
  const [emailMessages, setEmailMessages] = useState(false);
  const [pushLikes, setPushLikes] = useState(true);
  const [pushComments, setPushComments] = useState(true);
  const [pushFollowers, setPushFollowers] = useState(true);
  const [pushMessages, setPushMessages] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h2>
        
        <div className="space-y-8">
          {/* Push Notifications */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Likes</p>
                  <p className="text-sm text-gray-600">John Doe liked your photo</p>
                </div>
                <input
                  type="checkbox"
                  checked={pushLikes}
                  onChange={(e) => setPushLikes(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Comments</p>
                  <p className="text-sm text-gray-600">John Doe commented on your post</p>
                </div>
                <input
                  type="checkbox"
                  checked={pushComments}
                  onChange={(e) => setPushComments(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">New Followers</p>
                  <p className="text-sm text-gray-600">John Doe started following you</p>
                </div>
                <input
                  type="checkbox"
                  checked={pushFollowers}
                  onChange={(e) => setPushFollowers(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Direct Messages</p>
                  <p className="text-sm text-gray-600">John Doe sent you a message</p>
                </div>
                <input
                  type="checkbox"
                  checked={pushMessages}
                  onChange={(e) => setPushMessages(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Email Notifications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Product emails</p>
                  <p className="text-sm text-gray-600">Get emails about new features and updates</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailLikes}
                  onChange={(e) => setEmailLikes(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">News emails</p>
                  <p className="text-sm text-gray-600">Get emails about Social news and community updates</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailComments}
                  onChange={(e) => setEmailComments(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Reminder emails</p>
                  <p className="text-sm text-gray-600">Get emails about unread notifications</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailFollowers}
                  onChange={(e) => setEmailFollowers(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Support emails</p>
                  <p className="text-sm text-gray-600">Get emails about your support requests</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailMessages}
                  onChange={(e) => setEmailMessages(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}