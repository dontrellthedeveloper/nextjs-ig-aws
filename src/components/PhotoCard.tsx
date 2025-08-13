import Link from 'next/link';
import React, { useState, FC } from 'react';
import type { Post } from '../lib/types';
import { HeartIcon, CommentIcon, ShareIcon } from './icons';

// Props for PhotoCard are now typed with the Post interface
const PhotoCard: FC<{ post: Post }> = ({ post }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(post.likes);

  const handleLike = (): void => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 mb-8 overflow-hidden backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={post.avatar} 
              alt={post.username} 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500 ring-offset-2 transition-transform hover:scale-105" 
            />
          </div>
          <div className="flex flex-col">
            <Link href={`/users/${post.username}`}>
              <span className="font-semibold text-sm text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                {post.username}
              </span>
            </Link>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative group max-h-[70vh] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt="User post" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Actions and Content */}
      <div className="p-4 space-y-3">
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike}
              className="group flex items-center space-x-1 hover:scale-110 transition-transform duration-200"
            >
              <HeartIcon isLiked={isLiked} />
            </button>
            <button className="hover:scale-110 transition-transform duration-200">
              <CommentIcon />
            </button>
            <button className="hover:scale-110 transition-transform duration-200">
              <ShareIcon />
            </button>
          </div>
          <button className="hover:scale-110 transition-transform duration-200">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {/* Likes Count */}
        <div className="font-semibold text-sm text-gray-900">
          {likes.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm leading-relaxed">
          <Link href={`/users/${post.username}`}>
            <span className="font-semibold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer mr-2">
              {post.username}
            </span>
          </Link>
          <span className="text-gray-800">{post.caption}</span>
        </div>

        {/* Comments */}
        <div className="space-y-1">
          {post.comments.length > 1 && (
            <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors font-medium">
              View all {post.comments.length} comments
            </button>
          )}
          {post.comments.slice(0, 2).map((comment, index) => (
            <div key={index} className="text-sm leading-relaxed">
              <Link href={`/users/${comment.username}`}>
                <span className="font-semibold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer mr-2">
                  {comment.username}
                </span>
              </Link>
              <span className="text-gray-700">{comment.text}</span>
            </div>
          ))}
        </div>

        {/* Timestamp */}
        <div className="text-xs text-gray-400 font-medium tracking-wide">
          {post.timestamp.toUpperCase()}
        </div>
      </div>

      {/* Comment Input */}
      <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/50">
        <div className="flex items-center space-x-3">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 focus:placeholder-gray-300 transition-colors"
          />
          <button className="text-blue-500 font-semibold text-sm hover:text-blue-600 transition-colors disabled:text-gray-300">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
