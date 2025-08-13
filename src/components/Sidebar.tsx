import React, { FC } from 'react';
import {
  HomeIcon,
  SearchIcon,
  ExploreIcon,
  ReelsIcon,
  MessagesIcon,
  NotificationsIcon,
  UploadIcon,
  ProfileIcon
} from './icons';

const Sidebar: FC = () => {
  return (
    <aside className="sticky top-16 h-screen bg-white border-r border-gray-200 w-64 p-4">
      <div className="text-2xl font-bold font-serif text-gray-800 mb-8">InstaClone</div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg font-semibold text-gray-800 hover:text-gray-600">
              <HomeIcon />
              <span className="ml-4">Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <SearchIcon />
              <span className="ml-4">Search</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <ExploreIcon />
              <span className="ml-4">Explore</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <ReelsIcon />
              <span className="ml-4">Reels</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <MessagesIcon />
              <span className="ml-4">Messages</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <NotificationsIcon />
              <span className="ml-4">Notifications</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <UploadIcon />
              <span className="ml-4">Create</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600">
              <ProfileIcon avatarUrl="https://placehold.co/150x150/1d3557/ffffff?text=Me" />
              <span className="ml-4">Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
