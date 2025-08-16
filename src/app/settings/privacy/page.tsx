'use client';

import React, { useState } from 'react';

export default function PrivacyPage() {
  const [privateAccount, setPrivateAccount] = useState(false);
  const [activityStatus, setActivityStatus] = useState(true);
  const [storySharing, setStorySharing] = useState(true);
  const [messageReplies, setMessageReplies] = useState('everyone');
  const [groupAdds, setGroupAdds] = useState('everyone');
  const [commentFilter, setCommentFilter] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Settings</h2>
        
        <div className="space-y-8">
          {/* Account Privacy */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Privacy</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Private Account</p>
                <p className="text-sm text-gray-600 mt-1">
                  When your account is private, only people you approve can see your photos and videos. Your existing followers won't be affected.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={privateAccount}
                  onChange={(e) => setPrivateAccount(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${privateAccount ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${privateAccount ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Activity Status */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Status</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Show Activity Status</p>
                <p className="text-sm text-gray-600 mt-1">
                  Allow accounts you follow and anyone you message to see when you were last active or are currently active.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={activityStatus}
                  onChange={(e) => setActivityStatus(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${activityStatus ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${activityStatus ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Story Settings */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Story</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Allow Sharing to Story</p>
                <p className="text-sm text-gray-600 mt-1">
                  Let people share your posts to their story.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={storySharing}
                  onChange={(e) => setStorySharing(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${storySharing ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${storySharing ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>

          {/* Messages */}
          <div className="pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Messages</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Allow Message Replies
                </label>
                <select
                  value={messageReplies}
                  onChange={(e) => setMessageReplies(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="everyone">Everyone</option>
                  <option value="followers">People You Follow</option>
                  <option value="off">Off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Who Can Add You to Groups
                </label>
                <select
                  value={groupAdds}
                  onChange={(e) => setGroupAdds(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="everyone">Everyone</option>
                  <option value="followers">People You Follow</option>
                </select>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Comments</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-medium text-gray-900">Hide Offensive Comments</p>
                <p className="text-sm text-gray-600 mt-1">
                  Hide comments that may be offensive from your posts.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={commentFilter}
                  onChange={(e) => setCommentFilter(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-colors ${commentFilter ? 'bg-blue-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${commentFilter ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}