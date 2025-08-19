'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';
import ProtectedRoute from '../../components/ProtectedRoute';

interface Stream {
  id: string;
  title: string;
  streamerName: string;
  streamerAvatar: string;
  thumbnail: string;
  category: string;
  viewers: number;
  duration: string;
  tags: string[];
  isLive: boolean;
  isVerified?: boolean;
  isPremium?: boolean;
  scheduledTime?: string;
  description?: string;
}

interface StreamCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export default function StreamsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [filterType, setFilterType] = useState<'all' | 'live' | 'upcoming'>('all');

  const categories: StreamCategory[] = [
    { id: 'all', name: 'All Streams', icon: '🎬', color: 'bg-gray-500', count: 156 },
    { id: 'gaming', name: 'Gaming', icon: '🎮', color: 'bg-purple-500', count: 45 },
    { id: 'music', name: 'Music', icon: '🎵', color: 'bg-pink-500', count: 23 },
    { id: 'talk', name: 'Talk Shows', icon: '🎙️', color: 'bg-blue-500', count: 18 },
    { id: 'creative', name: 'Creative', icon: '🎨', color: 'bg-green-500', count: 12 },
    { id: 'cooking', name: 'Cooking', icon: '🍳', color: 'bg-orange-500', count: 8 },
    { id: 'fitness', name: 'Fitness', icon: '💪', color: 'bg-red-500', count: 15 },
    { id: 'education', name: 'Education', icon: '📚', color: 'bg-indigo-500', count: 11 },
    { id: 'tech', name: 'Technology', icon: '💻', color: 'bg-cyan-500', count: 24 },
  ];

  const liveStreams: Stream[] = [
    {
      id: '1',
      title: 'Building a React App from Scratch - Day 3',
      streamerName: 'CodeWithSarah',
      streamerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
      category: 'tech',
      viewers: 1234,
      duration: '2:45:30',
      tags: ['react', 'javascript', 'webdev'],
      isLive: true,
      isVerified: true,
      isPremium: false,
      description: 'Join me as we continue building our social media app with React and TypeScript!'
    },
    {
      id: '2',
      title: '🔴 LIVE: Ranked Valorant Grind to Radiant',
      streamerName: 'ProGamerX',
      streamerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
      category: 'gaming',
      viewers: 5678,
      duration: '4:12:45',
      tags: ['valorant', 'fps', 'competitive'],
      isLive: true,
      isVerified: true,
      isPremium: true,
    },
    {
      id: '3',
      title: 'Acoustic Session - Taking Song Requests!',
      streamerName: 'MelodyMaker',
      streamerAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
      category: 'music',
      viewers: 892,
      duration: '1:15:20',
      tags: ['acoustic', 'guitar', 'requests'],
      isLive: true,
      isVerified: false,
      isPremium: false,
    },
    {
      id: '4',
      title: 'Morning Yoga Flow - All Levels Welcome',
      streamerName: 'YogaWithEmma',
      streamerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop',
      category: 'fitness',
      viewers: 456,
      duration: '0:45:15',
      tags: ['yoga', 'wellness', 'morning'],
      isLive: true,
      isVerified: true,
      isPremium: false,
    },
    {
      id: '5',
      title: 'Digital Art Commission Stream - Working on Client Projects',
      streamerName: 'ArtistAlley',
      streamerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=450&fit=crop',
      category: 'creative',
      viewers: 234,
      duration: '3:22:10',
      tags: ['digitalart', 'commission', 'photoshop'],
      isLive: true,
      isVerified: false,
      isPremium: true,
    },
  ];

  const upcomingStreams: Stream[] = [
    {
      id: '6',
      title: 'Cooking Italian Pasta from Scratch',
      streamerName: 'ChefMario',
      streamerAvatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=450&fit=crop',
      category: 'cooking',
      viewers: 0,
      duration: '',
      tags: ['italian', 'pasta', 'cooking'],
      isLive: false,
      isVerified: true,
      scheduledTime: 'Today at 6:00 PM',
    },
    {
      id: '7',
      title: 'Q&A: Career in Software Development',
      streamerName: 'TechTalks',
      streamerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3c20b9c5295?w=800&h=450&fit=crop',
      category: 'talk',
      viewers: 0,
      duration: '',
      tags: ['career', 'tech', 'qa'],
      isLive: false,
      isVerified: true,
      scheduledTime: 'Tomorrow at 2:00 PM',
    },
  ];

  const allStreams = [...liveStreams, ...upcomingStreams];

  const filteredStreams = allStreams.filter(stream => {
    const matchesCategory = selectedCategory === 'all' || stream.category === selectedCategory;
    const matchesSearch = stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stream.streamerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stream.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterType === 'all' || 
                          (filterType === 'live' && stream.isLive) ||
                          (filterType === 'upcoming' && !stream.isLive);
    return matchesCategory && matchesSearch && matchesFilter;
  });

  const formatViewers = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const topStreamers = [
    { name: 'ProGamerX', viewers: 5678, category: 'Gaming', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
    { name: 'CodeWithSarah', viewers: 1234, category: 'Tech', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'MelodyMaker', viewers: 892, category: 'Music', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop' },
    { name: 'YogaWithEmma', viewers: 456, category: 'Fitness', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  ];

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
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Live Streams</h1>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Go Live
                  </button>
                </div>
                <p className="text-gray-600">Watch live content from creators around the world</p>
              </div>

              {/* Featured Stream Banner */}
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl overflow-hidden mb-6 h-64">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop" 
                  alt="Featured Stream"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative h-full flex items-center px-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded animate-pulse">
                        LIVE
                      </span>
                      <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                        FEATURED
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Championship Finals - Day 2</h2>
                    <p className="text-white/90 mb-4">Watch the best teams compete for the grand prize of $100,000</p>
                    <div className="flex items-center gap-6">
                      <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Watch Now
                      </button>
                      <div className="flex items-center gap-4 text-white">
                        <span className="flex items-center gap-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                          25.4K watching
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          ProGamerX
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop" 
                      alt="Streamer"
                      className="w-32 h-32 rounded-full border-4 border-white"
                    />
                  </div>
                </div>
              </div>

              {/* Filters and Search */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search streams..."
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
                    <select 
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value as any)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="all">All Streams</option>
                      <option value="live">Live Now</option>
                      <option value="upcoming">Upcoming</option>
                    </select>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('compact')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'compact' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-md transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                      <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content - Streams */}
                <div className="lg:col-span-2">
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredStreams.map(stream => (
                        <div key={stream.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                          <div className="relative">
                            <img
                              src={stream.thumbnail}
                              alt={stream.title}
                              className="w-full h-48 object-cover"
                            />
                            {stream.isLive ? (
                              <div className="absolute top-3 left-3 flex items-center gap-2">
                                <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded animate-pulse">
                                  LIVE
                                </span>
                                <span className="px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
                                  {formatViewers(stream.viewers)} viewers
                                </span>
                              </div>
                            ) : (
                              <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                                  {stream.scheduledTime}
                                </span>
                              </div>
                            )}
                            {stream.isPremium && (
                              <div className="absolute top-3 right-3">
                                <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                                  PREMIUM
                                </span>
                              </div>
                            )}
                            {stream.duration && (
                              <div className="absolute bottom-3 right-3">
                                <span className="px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
                                  {stream.duration}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-start gap-3 mb-3">
                              <img
                                src={stream.streamerAvatar}
                                alt={stream.streamerName}
                                className="w-10 h-10 rounded-full"
                              />
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 line-clamp-1">{stream.title}</h3>
                                <div className="flex items-center gap-1 mt-1">
                                  <p className="text-sm text-gray-600">{stream.streamerName}</p>
                                  {stream.isVerified && (
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  {categories.find(c => c.id === stream.category)?.name}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {stream.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredStreams.map(stream => (
                        <div key={stream.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-center gap-4">
                            <img
                              src={stream.thumbnail}
                              alt={stream.title}
                              className="w-32 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-gray-900">{stream.title}</h3>
                                  <div className="flex items-center gap-2 mt-1">
                                    <div className="flex items-center gap-1">
                                      <img
                                        src={stream.streamerAvatar}
                                        alt={stream.streamerName}
                                        className="w-5 h-5 rounded-full"
                                      />
                                      <p className="text-sm text-gray-600">{stream.streamerName}</p>
                                      {stream.isVerified && (
                                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                        </svg>
                                      )}
                                    </div>
                                    <span className="text-sm text-gray-500">•</span>
                                    <span className="text-sm text-gray-500">
                                      {categories.find(c => c.id === stream.category)?.name}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                                    {stream.isLive ? (
                                      <>
                                        <span className="flex items-center gap-1">
                                          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                          {formatViewers(stream.viewers)} watching
                                        </span>
                                        <span>{stream.duration}</span>
                                      </>
                                    ) : (
                                      <span>{stream.scheduledTime}</span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  {stream.isLive ? (
                                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                                      LIVE
                                    </span>
                                  ) : (
                                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                                      UPCOMING
                                    </span>
                                  )}
                                  {stream.isPremium && (
                                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                                      PREMIUM
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Live Stats */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Platform Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                          <span className="text-sm text-gray-600">Live Now</span>
                        </div>
                        <span className="font-semibold text-gray-900">45 streams</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                          <span className="text-sm text-gray-600">Total Viewers</span>
                        </div>
                        <span className="font-semibold text-gray-900">128.5K</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <span className="text-sm text-gray-600">Peak Today</span>
                        </div>
                        <span className="font-semibold text-gray-900">256.3K</span>
                      </div>
                    </div>
                  </div>

                  {/* Top Streamers */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Top Live Streamers</h3>
                    <div className="space-y-3">
                      {topStreamers.map((streamer, index) => (
                        <button key={streamer.name} className="w-full flex items-center gap-3 p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="text-lg font-bold text-gray-400 w-6">#{index + 1}</span>
                          <img
                            src={streamer.avatar}
                            alt={streamer.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1 text-left">
                            <p className="font-semibold text-gray-900">{streamer.name}</p>
                            <p className="text-xs text-gray-600">{streamer.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{formatViewers(streamer.viewers)}</p>
                            <p className="text-xs text-gray-600">viewers</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Schedule</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-16 bg-blue-600 rounded-full"></div>
                        <div>
                          <p className="text-xs text-gray-500">Today, 6:00 PM</p>
                          <p className="font-medium text-gray-900">Italian Cooking Class</p>
                          <p className="text-sm text-gray-600">ChefMario</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-16 bg-purple-600 rounded-full"></div>
                        <div>
                          <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
                          <p className="font-medium text-gray-900">Tech Career Q&A</p>
                          <p className="text-sm text-gray-600">TechTalks</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-16 bg-green-600 rounded-full"></div>
                        <div>
                          <p className="text-xs text-gray-500">Friday, 8:00 PM</p>
                          <p className="font-medium text-gray-900">Music Festival Stream</p>
                          <p className="text-sm text-gray-600">LiveMusic</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Start Streaming CTA */}
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-lg font-bold">Start Streaming</h3>
                    </div>
                    <p className="text-sm mb-4 text-white/90">
                      Share your passion with the world and grow your audience.
                    </p>
                    <button className="w-full bg-white text-red-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Set Up Stream
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