'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';
import ProtectedRoute from '../../components/ProtectedRoute';

interface Event {
  id: string;
  title: string;
  description: string;
  organizer: string;
  organizerAvatar: string;
  coverImage: string;
  category: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  locationType: 'physical' | 'virtual' | 'hybrid';
  attendees: number;
  maxAttendees?: number;
  price: number;
  currency: string;
  tags: string[];
  isVerified?: boolean;
  isFeatured?: boolean;
  isRSVP?: boolean;
  isSoldOut?: boolean;
  interests?: number;
}

interface EventCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'calendar'>('grid');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month' | 'weekend'>('all');
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [locationFilter, setLocationFilter] = useState<'all' | 'physical' | 'virtual'>('all');

  const categories: EventCategory[] = [
    { id: 'all', name: 'All Events', icon: '📅', color: 'bg-gray-500' },
    { id: 'music', name: 'Music', icon: '🎵', color: 'bg-purple-500' },
    { id: 'tech', name: 'Technology', icon: '💻', color: 'bg-blue-500' },
    { id: 'business', name: 'Business', icon: '💼', color: 'bg-green-500' },
    { id: 'sports', name: 'Sports', icon: '⚽', color: 'bg-orange-500' },
    { id: 'arts', name: 'Arts & Culture', icon: '🎨', color: 'bg-pink-500' },
    { id: 'food', name: 'Food & Drink', icon: '🍽️', color: 'bg-red-500' },
    { id: 'health', name: 'Health & Wellness', icon: '🧘', color: 'bg-cyan-500' },
    { id: 'education', name: 'Education', icon: '📚', color: 'bg-indigo-500' },
    { id: 'networking', name: 'Networking', icon: '🤝', color: 'bg-yellow-500' },
  ];

  const featuredEvents: Event[] = [
    {
      id: '1',
      title: 'Tech Summit 2024 - The Future of AI',
      description: 'Join industry leaders for a deep dive into artificial intelligence, machine learning, and the future of technology.',
      organizer: 'TechWorld Conference',
      organizerAvatar: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
      category: 'tech',
      date: 'March 15, 2024',
      time: '9:00 AM',
      endTime: '6:00 PM',
      location: 'Moscone Center, San Francisco',
      locationType: 'hybrid',
      attendees: 2456,
      maxAttendees: 3000,
      price: 299,
      currency: 'USD',
      tags: ['AI', 'Technology', 'Innovation', 'Networking'],
      isVerified: true,
      isFeatured: true,
      isRSVP: false,
      interests: 5678,
    },
    {
      id: '2',
      title: 'Summer Music Festival 2024',
      description: 'Three days of non-stop music featuring top artists from around the world.',
      organizer: 'LiveNation',
      organizerAvatar: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop',
      category: 'music',
      date: 'July 20-22, 2024',
      time: '2:00 PM',
      location: 'Golden Gate Park',
      locationType: 'physical',
      attendees: 15000,
      maxAttendees: 20000,
      price: 450,
      currency: 'USD',
      tags: ['Music', 'Festival', 'Summer', 'Outdoor'],
      isVerified: true,
      isFeatured: true,
      isRSVP: true,
      interests: 25000,
    },
  ];

  const upcomingEvents: Event[] = [
    {
      id: '3',
      title: 'Startup Pitch Night',
      description: 'Watch 10 startups pitch to top VCs and angel investors. Network with founders and investors.',
      organizer: 'Startup Hub',
      organizerAvatar: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      category: 'business',
      date: 'March 10, 2024',
      time: '6:00 PM',
      endTime: '9:00 PM',
      location: 'WeWork Mission Bay',
      locationType: 'physical',
      attendees: 89,
      maxAttendees: 150,
      price: 0,
      currency: 'USD',
      tags: ['Startup', 'Pitch', 'Networking', 'Investment'],
      isVerified: true,
      isRSVP: false,
    },
    {
      id: '4',
      title: 'Yoga & Meditation Retreat',
      description: 'A weekend of wellness, mindfulness, and relaxation in beautiful Napa Valley.',
      organizer: 'Wellness Warriors',
      organizerAvatar: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=400&fit=crop',
      category: 'health',
      date: 'March 25-26, 2024',
      time: '8:00 AM',
      location: 'Napa Valley Retreat Center',
      locationType: 'physical',
      attendees: 34,
      maxAttendees: 50,
      price: 350,
      currency: 'USD',
      tags: ['Yoga', 'Meditation', 'Wellness', 'Retreat'],
      isVerified: false,
      isRSVP: true,
    },
    {
      id: '5',
      title: 'Virtual Reality Gaming Tournament',
      description: 'Compete in the biggest VR gaming tournament with a $10,000 prize pool.',
      organizer: 'VR Gamers League',
      organizerAvatar: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=400&fit=crop',
      category: 'sports',
      date: 'April 1, 2024',
      time: '12:00 PM',
      endTime: '8:00 PM',
      location: 'Online',
      locationType: 'virtual',
      attendees: 456,
      maxAttendees: 1000,
      price: 25,
      currency: 'USD',
      tags: ['Gaming', 'VR', 'Tournament', 'eSports'],
      isVerified: true,
      isRSVP: false,
    },
    {
      id: '6',
      title: 'Wine & Paint Night',
      description: 'Enjoy an evening of wine tasting while creating your own masterpiece with guided painting.',
      organizer: 'Art & Wine Studio',
      organizerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=400&fit=crop',
      category: 'arts',
      date: 'March 18, 2024',
      time: '7:00 PM',
      endTime: '10:00 PM',
      location: 'Downtown Art Studio',
      locationType: 'physical',
      attendees: 28,
      maxAttendees: 30,
      price: 65,
      currency: 'USD',
      tags: ['Art', 'Wine', 'Painting', 'Social'],
      isVerified: false,
      isRSVP: true,
      isSoldOut: true,
    },
  ];

  const allEvents = [...featuredEvents, ...upcomingEvents];

  const [events, setEvents] = useState(allEvents);

  const handleRSVP = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, isRSVP: !event.isRSVP, attendees: event.isRSVP ? event.attendees - 1 : event.attendees + 1 }
        : event
    ));
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'free' && event.price === 0) ||
                        (priceFilter === 'paid' && event.price > 0);
    const matchesLocation = locationFilter === 'all' || 
                           (locationFilter === 'physical' && event.locationType === 'physical') ||
                           (locationFilter === 'virtual' && event.locationType === 'virtual');
    return matchesCategory && matchesSearch && matchesPrice && matchesLocation;
  });

  const formatAttendees = (num: number): string => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const trendingEvents = [
    { title: 'Tech Summit 2024', attendees: 2456, trend: 'up', percentage: 45 },
    { title: 'Summer Music Festival', attendees: 15000, trend: 'up', percentage: 120 },
    { title: 'Startup Pitch Night', attendees: 89, trend: 'stable', percentage: 5 },
    { title: 'VR Gaming Tournament', attendees: 456, trend: 'up', percentage: 67 },
  ];

  const calendarDates = [
    { date: 10, hasEvent: true, count: 2 },
    { date: 15, hasEvent: true, count: 1 },
    { date: 18, hasEvent: true, count: 3 },
    { date: 20, hasEvent: false, count: 0 },
    { date: 22, hasEvent: true, count: 1 },
    { date: 25, hasEvent: true, count: 4 },
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
                  <h1 className="text-3xl font-bold text-gray-900">Events</h1>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Event
                  </button>
                </div>
                <p className="text-gray-600">Discover and join events happening around you</p>
              </div>

              {/* Featured Event Banner */}
              {filteredEvents.filter(e => e.isFeatured).length > 0 && (
                <div className="relative rounded-xl overflow-hidden mb-6 h-80">
                  <img 
                    src={filteredEvents.filter(e => e.isFeatured)[0].coverImage}
                    alt="Featured Event"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative h-full flex items-end p-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                          FEATURED
                        </span>
                        {filteredEvents.filter(e => e.isFeatured)[0].isVerified && (
                          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                            </svg>
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {filteredEvents.filter(e => e.isFeatured)[0].title}
                      </h2>
                      <p className="text-white/90 mb-4 text-lg">
                        {filteredEvents.filter(e => e.isFeatured)[0].description}
                      </p>
                      <div className="flex items-center gap-6 text-white">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {filteredEvents.filter(e => e.isFeatured)[0].date}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {filteredEvents.filter(e => e.isFeatured)[0].location}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          {formatAttendees(filteredEvents.filter(e => e.isFeatured)[0].attendees)} attending
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <button className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                          Get Tickets
                        </button>
                        <button className="px-6 py-2 bg-white/20 text-white border border-white/40 rounded-lg font-medium hover:bg-white/30 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Filters */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search events..."
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
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value as any)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="all">All Dates</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="weekend">This Weekend</option>
                      <option value="month">This Month</option>
                    </select>
                    <select 
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value as any)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="all">Any Price</option>
                      <option value="free">Free</option>
                      <option value="paid">Paid</option>
                    </select>
                    <select 
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value as any)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="all">All Locations</option>
                      <option value="physical">In-Person</option>
                      <option value="virtual">Virtual</option>
                    </select>
                    <div className="flex gap-1">
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
                      <button
                        onClick={() => setViewMode('calendar')}
                        className={`p-2 rounded-lg transition-colors ${viewMode === 'calendar' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
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
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                          <div className="relative h-48">
                            <img
                              src={event.coverImage}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                            {event.isSoldOut && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg">
                                  SOLD OUT
                                </span>
                              </div>
                            )}
                            {event.price === 0 && !event.isSoldOut && (
                              <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">
                                  FREE
                                </span>
                              </div>
                            )}
                            {event.locationType === 'virtual' && (
                              <div className="absolute top-3 right-3">
                                <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">
                                  VIRTUAL
                                </span>
                              </div>
                            )}
                            {event.locationType === 'hybrid' && (
                              <div className="absolute top-3 right-3">
                                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                                  HYBRID
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                              <span className="text-red-600 font-medium">{event.date}</span>
                              <span>•</span>
                              <span>{event.time}</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                            <div className="flex items-center gap-2 mb-3">
                              <img
                                src={event.organizerAvatar}
                                alt={event.organizer}
                                className="w-6 h-6 rounded-full"
                              />
                              <span className="text-sm text-gray-700">{event.organizer}</span>
                              {event.isVerified && (
                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {event.location.length > 20 ? event.location.substring(0, 20) + '...' : event.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                  {formatAttendees(event.attendees)}
                                </span>
                              </div>
                              {event.price > 0 && !event.isSoldOut && (
                                <span className="font-semibold text-gray-900">
                                  ${event.price}
                                </span>
                              )}
                            </div>
                            <div className="mt-4 flex gap-2">
                              <button
                                onClick={() => handleRSVP(event.id)}
                                disabled={event.isSoldOut}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  event.isSoldOut
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : event.isRSVP
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                              >
                                {event.isSoldOut ? 'Sold Out' : event.isRSVP ? 'Going ✓' : event.price > 0 ? 'Get Tickets' : 'RSVP'}
                              </button>
                              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {viewMode === 'list' && (
                    <div className="space-y-4">
                      {filteredEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex gap-4">
                            <img
                              src={event.coverImage}
                              alt={event.title}
                              className="w-40 h-32 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-red-600 font-medium text-sm">{event.date}</span>
                                    <span className="text-gray-600 text-sm">•</span>
                                    <span className="text-gray-600 text-sm">{event.time}</span>
                                    {event.price === 0 && (
                                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                                        FREE
                                      </span>
                                    )}
                                    {event.locationType === 'virtual' && (
                                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                                        VIRTUAL
                                      </span>
                                    )}
                                  </div>
                                  <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{event.description}</p>
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                      <img
                                        src={event.organizerAvatar}
                                        alt={event.organizer}
                                        className="w-5 h-5 rounded-full"
                                      />
                                      {event.organizer}
                                      {event.isVerified && (
                                        <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                        </svg>
                                      )}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                      </svg>
                                      {event.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                      </svg>
                                      {formatAttendees(event.attendees)} attending
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  {event.price > 0 && (
                                    <span className="text-xl font-semibold text-gray-900">
                                      ${event.price}
                                    </span>
                                  )}
                                  <button
                                    onClick={() => handleRSVP(event.id)}
                                    disabled={event.isSoldOut}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                      event.isSoldOut
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : event.isRSVP
                                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                                  >
                                    {event.isSoldOut ? 'Sold Out' : event.isRSVP ? 'Going ✓' : event.price > 0 ? 'Get Tickets' : 'RSVP'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {viewMode === 'calendar' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900">March 2024</h3>
                      </div>
                      <div className="grid grid-cols-7 gap-2 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 35 }, (_, i) => {
                          const date = i - 2; // Start from March 1st (Thursday)
                          const eventDate = calendarDates.find(d => d.date === date);
                          if (date < 1 || date > 31) return <div key={i} />;
                          
                          return (
                            <div
                              key={i}
                              className={`relative p-2 h-20 border rounded-lg cursor-pointer transition-colors ${
                                eventDate?.hasEvent 
                                  ? 'border-blue-300 bg-blue-50 hover:bg-blue-100' 
                                  : 'border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              <span className="text-sm text-gray-700">{date}</span>
                              {eventDate?.hasEvent && (
                                <div className="mt-1">
                                  <div className="text-xs font-medium text-blue-600">
                                    {eventDate.count} event{eventDate.count > 1 ? 's' : ''}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Trending Events */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Events</h3>
                    <div className="space-y-3">
                      {trendingEvents.map((event, index) => (
                        <button key={index} className="w-full text-left hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-500">#{index + 1}</span>
                            {event.trend === 'up' && (
                              <span className="text-xs text-green-600 font-medium">↑ {event.percentage}%</span>
                            )}
                            {event.trend === 'stable' && (
                              <span className="text-xs text-gray-600 font-medium">→ Stable</span>
                            )}
                          </div>
                          <p className="font-semibold text-gray-900 text-sm">{event.title}</p>
                          <p className="text-xs text-gray-600">{formatAttendees(event.attendees)} interested</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Your Events */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Your Events</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Events Attending</span>
                          <span className="font-semibold text-gray-900">
                            {events.filter(e => e.isRSVP).length}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Saved Events</span>
                          <span className="font-semibold text-gray-900">12</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Events Created</span>
                          <span className="font-semibold text-gray-900">3</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      View All Your Events
                    </button>
                  </div>

                  {/* Event Tips */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-3">Host Your Event</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Create and manage your own events. Reach thousands of attendees.
                    </p>
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Start Planning
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