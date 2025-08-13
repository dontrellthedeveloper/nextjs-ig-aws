import React, { FC } from 'react';
import { HomeIcon, UploadIcon, ProfileIcon } from './icons';

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold font-serif text-gray-800">InstaClone</h1>
          <div className="hidden sm:block">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-1.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-gray-600"><HomeIcon /></button>
            <button className="text-gray-800 hover:text-gray-600"><UploadIcon /></button>
            <button>
              <ProfileIcon avatarUrl="https://placehold.co/150x150/1d3557/ffffff?text=Me" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
