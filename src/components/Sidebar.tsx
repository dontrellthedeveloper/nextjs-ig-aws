import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  ExploreIcon,
  StreamsIcon,
  MapsIcon,
  EventsIcon,
  CommunityIcon,
  ShopIcon,
  MessagesIcon,
  NotificationsIcon,
  UploadIcon,
  BookmarksIcon,
  ProfileIcon
} from './icons';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  badge?: number;
  isNew?: boolean;
}

const NavItem: FC<NavItemProps> = ({ href, icon, label, isActive = false, badge, isNew = false }) => {
  return (
    <Link href={href} className="group relative">
      <div className={`flex items-center px-3 py-3 rounded-xl transition-all duration-300 group-hover:bg-gray-50 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 shadow-sm' 
          : 'hover:shadow-sm hover:scale-105'
      }`}>
        <div className={`relative flex-shrink-0 ${
          isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-900'
        }`}>
          {icon}
          {badge !== undefined && badge > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              {badge > 99 ? '99+' : badge}
            </span>
          )}
          {isNew && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          )}
        </div>
        <span className={`ml-4 font-medium transition-colors duration-200 ${
          isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
        }`}>
          {label}
        </span>
        {isNew && (
          <span className="ml-auto px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs rounded-full font-medium">
            New
          </span>
        )}
      </div>
    </Link>
  );
};

const Sidebar: FC = () => {
  const pathname = usePathname();

  const mainNavItems = [
    { id: 'home', href: '/', icon: <HomeIcon />, label: 'Home', isActive: pathname === '/' },
    { id: 'explore', href: '/explore', icon: <ExploreIcon />, label: 'Explore', isActive: pathname === '/explore' },
    { id: 'streams', href: '/streams', icon: <StreamsIcon />, label: 'Streams', badge: 3, isNew: true },
    { id: 'maps', href: '/maps', icon: <MapsIcon />, label: 'Maps' },
    { id: 'events', href: '/events', icon: <EventsIcon />, label: 'Events', badge: 12 },
    { id: 'community', href: '/community', icon: <CommunityIcon />, label: 'Community' },
  ];

  const secondaryNavItems = [
    { id: 'messages', href: '/messages', icon: <MessagesIcon />, label: 'Messages', badge: 5 },
    { id: 'notifications', href: '/notifications', icon: <NotificationsIcon />, label: 'Notifications', badge: 8 },
    { id: 'shop', href: '/shop', icon: <ShopIcon />, label: 'Shop', isNew: true },
    { id: 'bookmarks', href: '/bookmarks', icon: <BookmarksIcon />, label: 'Bookmarks' },
  ];

  return (
    <aside className="sticky top-20 h-screen bg-white/95 backdrop-blur-md border-r border-gray-100 w-72 p-6 overflow-y-auto hidden lg:block">
      {/* Logo Section */}
      <div className="mb-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Social</h1>
            <p className="text-xs text-gray-500 font-medium">Connect & Explore</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-2">
        <div className="pb-4">
          {mainNavItems.map((item) => (
            <div key={item.id} className="mb-1">
              <NavItem
                href={item.href}
                icon={item.icon}
                label={item.label}
                isActive={item.isActive}
                badge={item.badge}
                isNew={item.isNew}
              />
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
            Activity
          </h3>
          {secondaryNavItems.map((item) => (
            <div key={item.id} className="mb-1">
              <NavItem
                href={item.href}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                isNew={item.isNew}
              />
            </div>
          ))}
        </div>

        {/* Create Button */}
        <div className="border-t border-gray-100 pt-4">
          <Link href="/create" className="group">
            <div className="flex items-center px-3 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
              <UploadIcon />
              <span className="ml-4 font-semibold">Create Post</span>
              <svg className="ml-auto w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="border-t border-gray-100 pt-4">
          <Link href="/profile" className="group">
            <div className="flex items-center px-3 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
              <div className="relative">
                <ProfileIcon avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="ml-4 flex-1">
                <p className="font-semibold text-gray-900 text-sm">John Doe</p>
                <p className="text-xs text-gray-500">@johndoe</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
