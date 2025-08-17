'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';
import ProtectedRoute from '../../components/ProtectedRoute';

interface Community {
  id: string;
  name: string;
  category: string;
  description: string;
  memberCount: number;
  postCount: number;
  coverImage: string;
  avatar: string;
  isVerified?: boolean;
  isJoined?: boolean;
  tags: string[];
  activeNow?: number;
  growthRate?: string;
}

interface TrendingTopic {
  id: string;
  hashtag: string;
  postCount: number;
  trend: 'up' | 'down' | 'stable';
  trendPercentage?: number;
}

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Communities', icon: '🌍' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'art', name: 'Art & Design', icon: '🎨' },
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'food', name: 'Food & Cooking', icon: '🍳' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'fitness', name: 'Health & Fitness', icon: '💪' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'science', name: 'Science', icon: '🔬' },
  ];

  const featuredCommunities: Community[] = [
    {
      id: '1',
      name: 'Photography Masters',
      category: 'art',
      description: 'Share your best shots and learn from professional photographers worldwide.',
      memberCount: 125000,
      postCount: 45000,
      coverImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=400&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=200&h=200&fit=crop',
      isVerified: true,
      isJoined: false,
      tags: ['photography', 'landscape', 'portrait', 'editing'],
      activeNow: 1250,
      growthRate: '+12%'
    },
    {
      id: '2',
      name: 'Web Dev Hub',
      category: 'tech',
      description: 'Everything about web development, from HTML to the latest frameworks.',
      memberCount: 89000,
      postCount: 32000,
      coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop',
      isVerified: true,
      isJoined: true,
      tags: ['javascript', 'react', 'nodejs', 'css'],
      activeNow: 892,
      growthRate: '+8%'
    },
    {
      id: '3',
      name: 'Fitness Journey',
      category: 'fitness',
      description: 'Transform your body and mind with our supportive fitness community.',
      memberCount: 67000,
      postCount: 28000,
      coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop',
      isVerified: false,
      isJoined: false,
      tags: ['workout', 'nutrition', 'motivation', 'transformation'],
      activeNow: 543,
      growthRate: '+15%'
    },
  ];

  const trendingTopics: TrendingTopic[] = [
    { id: '1', hashtag: '#TechTrends2024', postCount: 15234, trend: 'up', trendPercentage: 125 },
    { id: '2', hashtag: '#MondayMotivation', postCount: 12456, trend: 'stable', trendPercentage: 3 },
    { id: '3', hashtag: '#CreativeDaily', postCount: 9876, trend: 'up', trendPercentage: 45 },
    { id: '4', hashtag: '#FitnessGoals', postCount: 8765, trend: 'down', trendPercentage: -12 },
    { id: '5', hashtag: '#StartupLife', postCount: 7654, trend: 'up', trendPercentage: 67 },
  ];

  const allCommunities: Community[] = [
    ...featuredCommunities,
    {
      id: '4',
      name: 'Startup Founders',
      category: 'business',
      description: 'Connect with entrepreneurs and share your startup journey.',
      memberCount: 45000,
      postCount: 18000,
      coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop',
      isVerified: true,
      isJoined: false,
      tags: ['startup', 'entrepreneur', 'business', 'venture'],
      activeNow: 423,
    },
    {
      id: '5',
      name: 'Digital Artists',
      category: 'art',
      description: 'Showcase your digital art and get feedback from fellow artists.',
      memberCount: 38000,
      postCount: 21000,
      coverImage: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=400&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?w=200&h=200&fit=crop',
      isVerified: false,
      isJoined: true,
      tags: ['digitalart', 'illustration', 'design', '3d'],
      activeNow: 312,
    },
    {
      id: '6',
      name: 'Foodie Paradise',
      category: 'food',
      description: 'Share recipes, restaurant reviews, and culinary adventures.',
      memberCount: 52000,
      postCount: 35000,
      coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=200&h=200&fit=crop',
      isVerified: true,
      isJoined: false,
      tags: ['recipes', 'cooking', 'restaurants', 'foodie'],
      activeNow: 678,
    },
  ];

  const [communities, setCommunities] = useState(allCommunities);

  const handleJoinCommunity = (communityId: string) => {
    setCommunities(communities.map(community => 
      community.id === communityId 
        ? { ...community, isJoined: !community.isJoined }
        : community
    ));
  };

  const filteredCommunities = communities.filter(community => {
    const matchesCategory = selectedCategory === 'all' || community.category === selectedCategory;
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <ProtectedRoute>
      <div className="bg-gray-50 min-h-screen font-sans">
        <AmplifyConfigCheck />
        <Navbar />
        <div className="flex pt-20">
          <Sidebar />
          <main className="flex-1 px-4 lg:px-8 pb-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Communities</h1>
                <p className="text-gray-600">Discover and join communities that match your interests</p>
              </div>

              {/* Search and Filters */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search communities..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      />
                      <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content - Communities */}
                <div className="lg:col-span-2">
                  {/* Featured Communities */}
                  {selectedCategory === 'all' && searchQuery === '' && (
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Communities</h2>
                      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        {featuredCommunities.map((community, index) => (
                          <div key={community.id} className={`${index !== 0 ? 'border-t border-gray-200' : ''}`}>
                            <div className="relative h-32 overflow-hidden">
                              <img
                                src={community.coverImage}
                                alt={community.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                <img
                                  src={community.avatar}
                                  alt={community.name}
                                  className="w-12 h-12 rounded-lg object-cover border-2 border-white"
                                />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="text-white font-semibold">{community.name}</h3>
                                    {community.isVerified && (
                                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                      </svg>
                                    )}
                                  </div>
                                  <p className="text-white/80 text-sm">{formatNumber(community.memberCount)} members</p>
                                </div>
                              </div>
                              {community.growthRate && (
                                <div className="absolute top-4 right-4 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                                  {community.growthRate} this week
                                </div>
                              )}
                            </div>
                            <div className="p-4">
                              <p className="text-gray-700 text-sm mb-3">{community.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex gap-4 text-sm text-gray-600">
                                  <span>{formatNumber(community.postCount)} posts</span>
                                  {community.activeNow && (
                                    <span className="flex items-center gap-1">
                                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                      {formatNumber(community.activeNow)} active
                                    </span>
                                  )}
                                </div>
                                <button
                                  onClick={() => handleJoinCommunity(community.id)}
                                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                    community.isJoined
                                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                      : 'bg-blue-600 text-white hover:bg-blue-700'
                                  }`}
                                >
                                  {community.isJoined ? 'Joined' : 'Join'}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All Communities */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {selectedCategory === 'all' ? 'All Communities' : categories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                    
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredCommunities.map(community => (
                          <div key={community.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative h-24">
                              <img
                                src={community.coverImage}
                                alt={community.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="p-4">
                              <div className="flex items-start gap-3 mb-3">
                                <img
                                  src={community.avatar}
                                  alt={community.name}
                                  className="w-10 h-10 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center gap-1">
                                    <h3 className="font-semibold text-gray-900">{community.name}</h3>
                                    {community.isVerified && (
                                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                      </svg>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600">{formatNumber(community.memberCount)} members</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-700 mb-3 line-clamp-2">{community.description}</p>
                              <div className="flex flex-wrap gap-1 mb-3">
                                {community.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <button
                                onClick={() => handleJoinCommunity(community.id)}
                                className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                                  community.isJoined
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                              >
                                {community.isJoined ? 'Joined' : 'Join Community'}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {filteredCommunities.map(community => (
                          <div key={community.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                              <img
                                src={community.avatar}
                                alt={community.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold text-gray-900">{community.name}</h3>
                                  {community.isVerified && (
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                  )}
                                </div>
                                <p className="text-sm text-gray-700 mb-2">{community.description}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span>{formatNumber(community.memberCount)} members</span>
                                  <span>{formatNumber(community.postCount)} posts</span>
                                  {community.activeNow && (
                                    <span className="flex items-center gap-1">
                                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                      {formatNumber(community.activeNow)} active
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => handleJoinCommunity(community.id)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  community.isJoined
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                              >
                                {community.isJoined ? 'Joined' : 'Join'}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Sidebar - Trending */}
                <div className="lg:col-span-1">
                  {/* Trending Topics */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h3>
                    <div className="space-y-3">
                      {trendingTopics.map((topic, index) => (
                        <button key={topic.id} className="w-full text-left hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-500">#{index + 1} Trending</span>
                            {topic.trend === 'up' && (
                              <span className="text-xs text-green-600 font-medium">↑ {topic.trendPercentage}%</span>
                            )}
                            {topic.trend === 'down' && (
                              <span className="text-xs text-red-600 font-medium">↓ {Math.abs(topic.trendPercentage || 0)}%</span>
                            )}
                            {topic.trend === 'stable' && (
                              <span className="text-xs text-gray-600 font-medium">→ Stable</span>
                            )}
                          </div>
                          <p className="font-semibold text-gray-900">{topic.hashtag}</p>
                          <p className="text-sm text-gray-600">{formatNumber(topic.postCount)} posts</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Community Stats */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Community Stats</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Total Communities</span>
                          <span className="font-semibold text-gray-900">2,456</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Active Members</span>
                          <span className="font-semibold text-gray-900">45.2K</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Posts Today</span>
                          <span className="font-semibold text-gray-900">12.8K</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Create Community CTA */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">Create Your Community</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Start your own community and connect with like-minded people.
                    </p>
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Create Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <RightSidebar />
        </div>
      </div>
    </ProtectedRoute>
  );
}