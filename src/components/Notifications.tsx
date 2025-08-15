import React, { FC, useState } from 'react';
import Link from 'next/link';

interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'reply' | 'share' | 'story' | 'live' | 'tag' | 'request';
  user: {
    username: string;
    fullName: string;
    avatar: string;
    isVerified?: boolean;
  };
  content: string;
  postImage?: string;
  timestamp: string;
  isRead: boolean;
  actionRequired?: boolean;
  additionalUsers?: number;
  groupName?: string;
}

interface NotificationGroup {
  date: string;
  notifications: Notification[];
}

const Notifications: FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'mentions' | 'verified'>('all');
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([]);

  const notificationGroups: NotificationGroup[] = [
    {
      date: 'Today',
      notifications: [
        {
          id: 1,
          type: 'follow',
          user: {
            username: 'emma_wilson',
            fullName: 'Emma Wilson',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d25b52?w=150&h=150&fit=crop&crop=face',
            isVerified: true
          },
          content: 'started following you',
          timestamp: '2m ago',
          isRead: false,
          actionRequired: true
        },
        {
          id: 2,
          type: 'like',
          user: {
            username: 'alex_chen',
            fullName: 'Alex Chen',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
          },
          content: 'liked your photo',
          postImage: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=150&h=150&fit=crop',
          timestamp: '5m ago',
          isRead: false,
          additionalUsers: 3
        },
        {
          id: 3,
          type: 'comment',
          user: {
            username: 'sarah_jones',
            fullName: 'Sarah Jones',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
          },
          content: 'commented: "This is absolutely stunning! Love the composition 📸"',
          postImage: 'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=150&h=150&fit=crop',
          timestamp: '15m ago',
          isRead: false
        },
        {
          id: 4,
          type: 'mention',
          user: {
            username: 'mike_photo',
            fullName: 'Mike Anderson',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            isVerified: true
          },
          content: 'mentioned you in a comment: "@you check this out!"',
          timestamp: '30m ago',
          isRead: false
        },
        {
          id: 5,
          type: 'live',
          user: {
            username: 'jenny_streams',
            fullName: 'Jenny Williams',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
          },
          content: 'is live now: "Morning Yoga Session 🧘‍♀️"',
          timestamp: '45m ago',
          isRead: true,
          actionRequired: true
        },
        {
          id: 6,
          type: 'story',
          user: {
            username: 'david_travel',
            fullName: 'David Kim',
            avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face'
          },
          content: 'added to their story for the first time in a while',
          timestamp: '1h ago',
          isRead: true
        }
      ]
    },
    {
      date: 'Yesterday',
      notifications: [
        {
          id: 7,
          type: 'request',
          user: {
            username: 'lisa_art',
            fullName: 'Lisa Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face'
          },
          content: 'requested to follow you',
          timestamp: '1d ago',
          isRead: true,
          actionRequired: true
        },
        {
          id: 8,
          type: 'tag',
          user: {
            username: 'james_design',
            fullName: 'James Miller',
            avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face'
          },
          content: 'tagged you in a photo',
          postImage: 'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=150&h=150&fit=crop',
          timestamp: '1d ago',
          isRead: true,
          additionalUsers: 2
        },
        {
          id: 9,
          type: 'share',
          user: {
            username: 'anna_creative',
            fullName: 'Anna Thompson',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
          },
          content: 'shared your post to their story',
          postImage: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=150&h=150&fit=crop',
          timestamp: '1d ago',
          isRead: true
        },
        {
          id: 10,
          type: 'reply',
          user: {
            username: 'tom_developer',
            fullName: 'Tom Wilson',
            avatar: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150&h=150&fit=crop&crop=face',
            isVerified: true
          },
          content: 'replied to your story: "Great work! 🔥"',
          timestamp: '1d ago',
          isRead: true
        }
      ]
    },
    {
      date: 'This Week',
      notifications: [
        {
          id: 11,
          type: 'follow',
          user: {
            username: 'group_follow',
            fullName: 'Photography Club',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face'
          },
          content: 'and 15 others started following you',
          timestamp: '2d ago',
          isRead: true,
          additionalUsers: 15
        },
        {
          id: 12,
          type: 'like',
          user: {
            username: 'trending_post',
            fullName: 'Rachel Green',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
          },
          content: 'and 234 others liked your post',
          postImage: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=150&h=150&fit=crop',
          timestamp: '3d ago',
          isRead: true,
          additionalUsers: 234
        },
        {
          id: 13,
          type: 'comment',
          user: {
            username: 'food_lover',
            fullName: 'Michael Scott',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
          },
          content: 'and 12 others commented on your post',
          postImage: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?w=150&h=150&fit=crop',
          timestamp: '4d ago',
          isRead: true,
          additionalUsers: 12
        },
        {
          id: 14,
          type: 'mention',
          user: {
            username: 'team_social',
            fullName: 'Social Team',
            avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face',
            isVerified: true
          },
          content: 'mentioned you in their post about top creators',
          timestamp: '5d ago',
          isRead: true
        }
      ]
    }
  ];

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'like':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        );
      case 'comment':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        );
      case 'follow':
      case 'request':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        );
      case 'mention':
      case 'tag':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        );
      case 'share':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a3 3 0 10-4.026-4.026m4.026 4.026a3 3 0 00-4.026-4.026" />
            </svg>
          </div>
        );
      case 'story':
      case 'reply':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        );
      case 'live':
        return (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const filteredNotifications = () => {
    const allNotifications = notificationGroups.flatMap(group => group.notifications);
    switch (activeFilter) {
      case 'unread':
        return allNotifications.filter(n => !n.isRead);
      case 'mentions':
        return allNotifications.filter(n => n.type === 'mention' || n.type === 'tag');
      case 'verified':
        return allNotifications.filter(n => n.user.isVerified);
      default:
        return allNotifications;
    }
  };

  const handleMarkAsRead = (notificationId: number) => {
    // In a real app, this would update the notification status
    console.log('Marking as read:', notificationId);
  };

  const handleMarkAllAsRead = () => {
    // In a real app, this would mark all notifications as read
    console.log('Marking all as read');
  };

  const unreadCount = notificationGroups.reduce(
    (sum, group) => sum + group.notifications.filter(n => !n.isRead).length,
    0
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <p className="text-sm text-gray-500 mt-1">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleMarkAllAsRead}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Mark all as read
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {[
            { id: 'all', label: 'All', count: null },
            { id: 'unread', label: 'Unread', count: unreadCount },
            { id: 'mentions', label: 'Mentions', count: null },
            { id: 'verified', label: 'Verified', count: null }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
              {filter.count !== null && filter.count > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {filter.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notificationGroups.map((group) => (
          <div key={group.date} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-600">{group.date}</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {group.notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-colors ${
                    !notification.isRead ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Avatar with icon */}
                    <div className="relative flex-shrink-0">
                      <Link href={`/users/${notification.user.username}`}>
                        <img
                          src={notification.user.avatar}
                          alt={notification.user.fullName}
                          className="w-12 h-12 rounded-full object-cover hover:ring-2 hover:ring-blue-500 transition-all"
                        />
                      </Link>
                      {getNotificationIcon(notification.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <Link 
                          href={`/users/${notification.user.username}`}
                          className="font-semibold hover:underline"
                        >
                          {notification.user.fullName}
                        </Link>
                        {notification.user.isVerified && (
                          <svg className="inline-block w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        )}
                        {notification.additionalUsers && notification.additionalUsers > 0 && (
                          <span className="font-normal"> and {notification.additionalUsers} others</span>
                        )}
                        <span className="font-normal"> {notification.content}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>

                      {/* Action buttons for follow requests */}
                      {notification.actionRequired && notification.type === 'request' && (
                        <div className="flex items-center gap-2 mt-3">
                          <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            Confirm
                          </button>
                          <button className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                            Delete
                          </button>
                        </div>
                      )}

                      {/* Action button for new follows */}
                      {notification.actionRequired && notification.type === 'follow' && (
                        <div className="mt-3">
                          <button className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                            Follow back
                          </button>
                        </div>
                      )}

                      {/* Join button for live notifications */}
                      {notification.actionRequired && notification.type === 'live' && (
                        <div className="mt-3">
                          <button className="px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors animate-pulse">
                            Join Live
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Post image if exists */}
                    {notification.postImage && (
                      <Link href={`/post/${notification.id}`} className="flex-shrink-0">
                        <img
                          src={notification.postImage}
                          alt="Post"
                          className="w-12 h-12 rounded-lg object-cover hover:ring-2 hover:ring-blue-500 transition-all"
                        />
                      </Link>
                    )}

                    {/* More options */}
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => handleMarkAsRead(notification.id)}
                        className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          Load Earlier Notifications
        </button>
      </div>
    </div>
  );
};

export default Notifications;