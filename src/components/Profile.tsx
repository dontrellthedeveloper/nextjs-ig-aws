import React, { FC, useState } from 'react';
import Link from 'next/link';

interface ProfilePost {
  id: number;
  imageUrl: string;
  videoUrl?: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
  isReel?: boolean;
  isPinned?: boolean;
  multipleImages?: boolean;
  imageCount?: number;
}

interface ProfileHighlight {
  id: number;
  title: string;
  coverImage: string;
  isLive?: boolean;
}

interface ProfileStats {
  posts: number;
  followers: number;
  following: number;
}

interface ProfileData {
  username: string;
  fullName: string;
  bio: string;
  website: string;
  avatar: string;
  isVerified: boolean;
  stats: ProfileStats;
  highlights: ProfileHighlight[];
  posts: ProfilePost[];
}

const Profile: FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'saved' | 'tagged'>('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const profileData: ProfileData = {
    username: 'johndoe',
    fullName: 'John Doe',
    bio: '📸 Photography enthusiast\n🌍 Travel lover | 27 countries\n💻 Digital creator\n📍 San Francisco, CA\n📧 john@example.com',
    website: 'www.johndoe.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face',
    isVerified: true,
    stats: {
      posts: 342,
      followers: 15234,
      following: 892
    },
    highlights: [
      { id: 1, title: 'Travel', coverImage: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=200&fit=crop' },
      { id: 2, title: 'Food', coverImage: 'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=200&h=200&fit=crop' },
      { id: 3, title: 'Work', coverImage: 'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=200&h=200&fit=crop' },
      { id: 4, title: 'Fitness', coverImage: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=200&h=200&fit=crop' },
      { id: 5, title: 'Art', coverImage: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=200&h=200&fit=crop' },
      { id: 6, title: 'Music', coverImage: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?w=200&h=200&fit=crop' },
    ],
    posts: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1682687982107-14492010e05e?w=800&h=800&fit=crop',
        likes: 1234,
        comments: 56,
        isPinned: true,
        multipleImages: true,
        imageCount: 3
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&h=800&fit=crop',
        likes: 2341,
        comments: 89,
        isVideo: true
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=800&h=800&fit=crop',
        likes: 3456,
        comments: 123,
        isPinned: true
      },
      {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800&h=800&fit=crop',
        likes: 987,
        comments: 34,
        isReel: true
      },
      {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=800&fit=crop',
        likes: 4567,
        comments: 234
      },
      {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1682687982468-4584ff11f88a?w=800&h=800&fit=crop',
        likes: 5678,
        comments: 345,
        multipleImages: true,
        imageCount: 5
      },
      {
        id: 7,
        imageUrl: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?w=800&h=800&fit=crop',
        likes: 6789,
        comments: 456
      },
      {
        id: 8,
        imageUrl: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=800&h=800&fit=crop',
        likes: 7890,
        comments: 567,
        isVideo: true
      },
      {
        id: 9,
        imageUrl: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=800&h=800&fit=crop',
        likes: 8901,
        comments: 678
      },
      {
        id: 10,
        imageUrl: 'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=800&h=800&fit=crop',
        likes: 9012,
        comments: 789,
        isReel: true
      },
      {
        id: 11,
        imageUrl: 'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=800&h=800&fit=crop',
        likes: 1234,
        comments: 890
      },
      {
        id: 12,
        imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop',
        likes: 2345,
        comments: 901,
        multipleImages: true,
        imageCount: 2
      }
    ]
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getFilteredPosts = () => {
    switch (activeTab) {
      case 'reels':
        return profileData.posts.filter(post => post.isReel);
      case 'saved':
        // In a real app, this would be saved posts
        return profileData.posts.slice(0, 6);
      case 'tagged':
        // In a real app, this would be tagged posts
        return profileData.posts.slice(3, 9);
      default:
        return profileData.posts;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[3px]">
                <img
                  src={profileData.avatar}
                  alt={profileData.fullName}
                  className="w-full h-full rounded-full object-cover bg-white p-[2px]"
                />
              </div>
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            {/* Username and Actions */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-normal">{profileData.username}</h1>
                {profileData.isVerified && (
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <button className="px-8 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-sm transition-colors">
                  Edit profile
                </button>
                <button className="px-8 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-sm transition-colors">
                  View archive
                </button>
                <Link href="/settings" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-6">
              <div>
                <span className="font-semibold">{profileData.stats.posts.toLocaleString()}</span>
                <span className="text-gray-900 ml-1">posts</span>
              </div>
              <button 
                onClick={() => setShowFollowers(true)}
                className="hover:opacity-75 transition-opacity"
              >
                <span className="font-semibold">{formatNumber(profileData.stats.followers)}</span>
                <span className="text-gray-900 ml-1">followers</span>
              </button>
              <button 
                onClick={() => setShowFollowing(true)}
                className="hover:opacity-75 transition-opacity"
              >
                <span className="font-semibold">{profileData.stats.following.toLocaleString()}</span>
                <span className="text-gray-900 ml-1">following</span>
              </button>
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <h2 className="font-semibold">{profileData.fullName}</h2>
              <div className="whitespace-pre-line text-sm">{profileData.bio}</div>
              <a 
                href={`https://${profileData.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-900 font-semibold hover:underline inline-block"
              >
                {profileData.website}
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {/* Add Story */}
            <button className="flex-shrink-0">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-xs font-medium">New</span>
              </div>
            </button>

            {/* Highlights */}
            {profileData.highlights.map((highlight) => (
              <button key={highlight.id} className="flex-shrink-0">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white p-[3px]">
                      <img
                        src={highlight.coverImage}
                        alt={highlight.title}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium">{highlight.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex items-center justify-center gap-12">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 py-3 px-1 border-b transition-colors ${
              activeTab === 'posts' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">Posts</span>
          </button>
          
          <button
            onClick={() => setActiveTab('reels')}
            className={`flex items-center gap-2 py-3 px-1 border-b transition-colors ${
              activeTab === 'reels' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">Reels</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 py-3 px-1 border-b transition-colors ${
              activeTab === 'saved' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">Saved</span>
          </button>

          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex items-center gap-2 py-3 px-1 border-b transition-colors ${
              activeTab === 'tagged' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">Tagged</span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {getFilteredPosts().map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="relative aspect-square group cursor-pointer overflow-hidden bg-gray-100"
          >
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className="font-bold">{formatNumber(post.likes)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                  <span className="font-bold">{formatNumber(post.comments)}</span>
                </div>
              </div>
            </div>

            {/* Pinned indicator */}
            {post.isPinned && (
              <div className="absolute top-2 left-2 z-10">
                <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                </svg>
              </div>
            )}

            {/* Video/Reel indicator */}
            {(post.isVideo || post.isReel) && (
              <div className="absolute top-2 right-2 z-10">
                <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  {post.isReel ? (
                    <path d="M7.5,2A5.5,5.5 0 0,0 2,7.5A5.5,5.5 0 0,0 7.5,13A5.5,5.5 0 0,0 13,7.5A5.5,5.5 0 0,0 7.5,2M7.5,11A3.5,3.5 0 0,1 4,7.5A3.5,3.5 0 0,1 7.5,4A3.5,3.5 0 0,1 11,7.5A3.5,3.5 0 0,1 7.5,11M16.5,2A5.5,5.5 0 0,0 11,7.5A5.5,5.5 0 0,0 16.5,13A5.5,5.5 0 0,0 22,7.5A5.5,5.5 0 0,0 16.5,2M16.5,11A3.5,3.5 0 0,1 13,7.5A3.5,3.5 0 0,1 16.5,4A3.5,3.5 0 0,1 20,7.5A3.5,3.5 0 0,1 16.5,11M7.5,11A5.5,5.5 0 0,0 2,16.5A5.5,5.5 0 0,0 7.5,22A5.5,5.5 0 0,0 13,16.5A5.5,5.5 0 0,0 7.5,11M7.5,20A3.5,3.5 0 0,1 4,16.5A3.5,3.5 0 0,1 7.5,13A3.5,3.5 0 0,1 11,16.5A3.5,3.5 0 0,1 7.5,20M16.5,11A5.5,5.5 0 0,0 11,16.5A5.5,5.5 0 0,0 16.5,22A5.5,5.5 0 0,0 22,16.5A5.5,5.5 0 0,0 16.5,11M16.5,20A3.5,3.5 0 0,1 13,16.5A3.5,3.5 0 0,1 16.5,13A3.5,3.5 0 0,1 20,16.5A3.5,3.5 0 0,1 16.5,20Z" />
                  ) : (
                    <path d="M8 5v14l11-7z"/>
                  )}
                </svg>
              </div>
            )}

            {/* Multiple images indicator */}
            {post.multipleImages && (
              <div className="absolute top-2 right-2 z-10">
                <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Empty State for tabs with no content */}
      {getFilteredPosts().length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 border-3 border-gray-900 rounded-full flex items-center justify-center mb-4">
            {activeTab === 'reels' && (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
              </svg>
            )}
            {activeTab === 'saved' && (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            )}
            {activeTab === 'tagged' && (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>
          <h3 className="text-2xl font-light mb-2">No {activeTab} Yet</h3>
        </div>
      )}
    </div>
  );
};

export default Profile;