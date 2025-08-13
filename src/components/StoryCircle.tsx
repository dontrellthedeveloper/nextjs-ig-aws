import React, { FC } from 'react';
import type { Story } from '../lib/types';

const StoryCircle: FC<{ story: Story }> = ({ story }) => {
  return (
    <div className="flex flex-col items-center space-y-2 cursor-pointer flex-shrink-0 group/story">
      <div className="relative">
        {/* Gradient ring for unseen stories */}
        <div 
          className={`relative rounded-full p-0.5 transition-all duration-300 ${
            story.isSeen 
              ? 'bg-gray-300 group-hover/story:bg-gray-400' 
              : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 group-hover/story:scale-105'
          }`}
        >
          {/* White border */}
          <div className="bg-white p-0.5 rounded-full">
            <img 
              src={story.avatar} 
              alt={story.username} 
              className="w-16 h-16 rounded-full object-cover transition-transform duration-300 group-hover/story:scale-105" 
            />
          </div>
        </div>
        
        {/* Online indicator for some users */}
        {!story.isSeen && [1, 4, 7, 9].includes(story.id) && (
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        )}
      </div>
      
      {/* Username */}
      <span 
        className={`text-xs font-medium max-w-16 truncate transition-colors duration-200 ${
          story.isSeen 
            ? 'text-gray-500' 
            : 'text-gray-800 group-hover/story:text-gray-900'
        }`}
      >
        {story.username.length > 8 ? `${story.username.slice(0, 8)}...` : story.username}
      </span>
    </div>
  );
};

export default StoryCircle;
