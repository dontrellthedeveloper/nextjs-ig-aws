import React, { FC, useState } from 'react';
import Link from 'next/link';

interface ExplorePost {
  id: number;
  imageUrl: string;
  videoUrl?: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
  isCollection?: boolean;
  collectionSize?: number;
  category: string;
  username: string;
  userAvatar: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const Explore: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All', icon: '🔥' },
    { id: 'trending', name: 'Trending', icon: '📈' },
    { id: 'art', name: 'Art & Design', icon: '🎨' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'food', name: 'Food', icon: '🍔' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'nature', name: 'Nature', icon: '🌿' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
  ];

  const explorePosts: ExplorePost[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop',
      likes: 15420,
      comments: 342,
      category: 'nature',
      username: 'naturelover',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=800&h=1200&fit=crop',
      likes: 8934,
      comments: 156,
      category: 'travel',
      username: 'wanderlust',
      userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      isVideo: true
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=800&h=800&fit=crop',
      likes: 23100,
      comments: 892,
      category: 'art',
      username: 'artistry',
      userAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=800&h=800&fit=crop',
      likes: 45678,
      comments: 1234,
      category: 'food',
      username: 'foodie',
      userAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face',
      isCollection: true,
      collectionSize: 4
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=800&h=1200&fit=crop',
      likes: 12300,
      comments: 234,
      category: 'fashion',
      username: 'fashionista',
      userAvatar: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?w=800&h=800&fit=crop',
      likes: 9876,
      comments: 432,
      category: 'tech',
      username: 'techguru',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1682687982107-14492010e05e?w=800&h=800&fit=crop',
      likes: 34567,
      comments: 876,
      category: 'photography',
      username: 'shutterbug',
      userAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
      isVideo: true
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&h=1200&fit=crop',
      likes: 18900,
      comments: 543,
      category: 'sports',
      username: 'athlete',
      userAvatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=800&h=800&fit=crop',
      likes: 56789,
      comments: 2341,
      category: 'nature',
      username: 'explorer',
      userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b6d25b52?w=150&h=150&fit=crop&crop=face',
      isCollection: true,
      collectionSize: 6
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800&h=800&fit=crop',
      likes: 7654,
      comments: 123,
      category: 'art',
      username: 'creative',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=1200&fit=crop',
      likes: 29876,
      comments: 987,
      category: 'travel',
      username: 'nomad',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1682687982468-4584ff11f88a?w=800&h=800&fit=crop',
      likes: 41234,
      comments: 1567,
      category: 'food',
      username: 'chef',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      isVideo: true
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? explorePosts 
    : explorePosts.filter(post => post.category === selectedCategory);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getGridClass = (index: number): string => {
    // Create an interesting grid pattern
    const patterns = [
      'col-span-1 row-span-1',
      'col-span-2 row-span-2',
      'col-span-1 row-span-2',
      'col-span-1 row-span-1',
      'col-span-1 row-span-1',
      'col-span-2 row-span-1',
      'col-span-1 row-span-1',
      'col-span-1 row-span-2',
      'col-span-1 row-span-1',
      'col-span-1 row-span-1',
      'col-span-2 row-span-2',
      'col-span-1 row-span-1',
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full">
      {/* Categories Filter */}
      <div className="mb-6 sticky top-0 bg-white/95 backdrop-blur-md z-10 py-4 -mx-4 px-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-2 auto-rows-[200px] md:auto-rows-[250px]">
        {filteredPosts.map((post, index) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className={`${getGridClass(index)} relative group cursor-pointer overflow-hidden rounded-lg`}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
            
            {/* Image */}
            <img
              src={post.imageUrl}
              alt={`Post by ${post.username}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Video Indicator */}
            {post.isVideo && (
              <div className="absolute top-2 right-2 z-20">
                <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}

            {/* Collection Indicator */}
            {post.isCollection && (
              <div className="absolute top-2 right-2 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">{post.collectionSize}</span>
                </div>
              </div>
            )}

            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-black/60 z-20 flex items-center justify-center transition-opacity duration-300 ${
              hoveredPost === post.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <div className="text-white text-center">
                {/* User Info */}
                <div className="flex items-center justify-center mb-3">
                  <img 
                    src={post.userAvatar} 
                    alt={post.username}
                    className="w-10 h-10 rounded-full mr-2 border-2 border-white"
                  />
                  <span className="font-semibold">@{post.username}</span>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span className="font-bold">{formatNumber(post.likes)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-bold">{formatNumber(post.comments)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          Load More Content
        </button>
      </div>
    </div>
  );
};

export default Explore;