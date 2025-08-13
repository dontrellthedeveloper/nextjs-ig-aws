import React, { FC, useState } from 'react';
import Link from 'next/link';
import { mockUsers } from '../lib/users';
import type { User } from '../lib/types';

interface SuggestedUser extends User {
  mutualFriends?: number;
  reason?: string;
}

interface TrendingTopic {
  id: number;
  hashtag: string;
  posts: number;
  growth: number;
}

interface Activity {
  id: number;
  type: 'like' | 'comment' | 'follow' | 'mention';
  user: string;
  avatar: string;
  content: string;
  time: string;
}

const RightSidebar: FC = () => {
  const [users, setUsers] = useState<SuggestedUser[]>(
    mockUsers.map(user => ({
      ...user,
      mutualFriends: Math.floor(Math.random() * 15) + 1,
      reason: ['Suggested for you', 'Popular', 'Followed by friends', 'New to Social'][Math.floor(Math.random() * 4)]
    }))
  );

  const [trendingTopics] = useState<TrendingTopic[]>([
    { id: 1, hashtag: '#TechTrends2024', posts: 12500, growth: 15.2 },
    { id: 2, hashtag: '#SocialGood', posts: 8900, growth: 23.1 },
    { id: 3, hashtag: '#DigitalArt', posts: 15200, growth: 8.7 },
    { id: 4, hashtag: '#Innovation', posts: 22100, growth: 12.4 },
    { id: 5, hashtag: '#Community', posts: 6700, growth: 31.8 },
  ]);

  const [recentActivity] = useState<Activity[]>([
    {
      id: 1,
      type: 'like',
      user: 'sarah_design',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d25b52?w=150&h=150&fit=crop&crop=face',
      content: 'liked your post about modern design trends',
      time: '2m'
    },
    {
      id: 2,
      type: 'follow',
      user: 'alex_dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'started following you',
      time: '5m'
    },
    {
      id: 3,
      type: 'comment',
      user: 'jenny_photo',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'commented: "Amazing shot! Love the composition"',
      time: '12m'
    },
    {
      id: 4,
      type: 'mention',
      user: 'mike_travel',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'mentioned you in a story',
      time: '1h'
    }
  ]);

  const handleFollowToggle = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isFollowed: !user.isFollowed } : user
    ));
  };

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'like':
        return (
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        );
      case 'comment':
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        );
      case 'follow':
        return (
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        );
      case 'mention':
        return (
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        );
    }
  };

  return (
    <aside className="sticky top-20 h-screen bg-white/95 backdrop-blur-md w-80 p-6 overflow-y-auto border-l border-gray-100 hidden xl:block">
      {/* Suggested Users Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-gray-900 text-lg">Suggested for you</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            See All
          </button>
        </div>
        
        <div className="space-y-3">
          {users.slice(0, 4).map(user => (
            <div key={user.id} className="group p-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
              <div className="flex items-center justify-between">
                <Link href={`/users/${user.username}`} className="flex items-center flex-1 min-w-0">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + user.id}?w=150&h=150&fit=crop&crop=face`}
                      alt={user.username} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-gray-200 transition-all duration-200" 
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{user.username}</p>
                    <p className="text-xs text-gray-500 truncate">{user.reason}</p>
                    <p className="text-xs text-gray-400">{user.mutualFriends} mutual friends</p>
                  </div>
                </Link>
                <button 
                  onClick={() => handleFollowToggle(user.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    user.isFollowed 
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-sm'
                  }`}
                >
                  {user.isFollowed ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-gray-900 text-lg">Trending Now</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            Explore
          </button>
        </div>
        
        <div className="space-y-3">
          {trendingTopics.slice(0, 5).map(topic => (
            <Link key={topic.id} href={`/hashtag/${topic.hashtag.slice(1)}`} className="group block">
              <div className="p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border border-transparent hover:border-blue-100">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {topic.hashtag}
                    </p>
                    <p className="text-xs text-gray-500">
                      {topic.posts.toLocaleString()} posts
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      topic.growth > 20 
                        ? 'bg-green-100 text-green-700' 
                        : topic.growth > 10 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      +{topic.growth}%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-gray-900 text-lg">Recent Activity</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            View All
          </button>
        </div>
        
        <div className="space-y-3">
          {recentActivity.map(activity => (
            <div key={activity.id} className="group p-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <img 
                    src={activity.avatar} 
                    alt={activity.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">{activity.user}</span>
                    {' '}
                    <span className="text-gray-600">{activity.content}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time} ago</p>
                </div>
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="text-xs text-gray-400 space-y-2">
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/help" className="hover:text-gray-600 transition-colors">Help</Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
          </div>
          <p>© 2024 Social. All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;