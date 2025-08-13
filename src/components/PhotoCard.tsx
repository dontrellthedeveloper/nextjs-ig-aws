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
    <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-hidden">
      <div className="flex items-center p-3">
        <img src={post.avatar} alt={post.username} className="w-9 h-9 rounded-full object-cover" />
        <Link href={`/users/${post.username}`}><span className="ml-3 font-semibold text-sm text-gray-800">{post.username}</span></Link>
      </div>
      <img src={post.imageUrl} alt="User post" className="w-full h-auto object-cover" />
      <div className="p-3">
        <div className="flex items-center space-x-4">
          <button onClick={handleLike}><HeartIcon isLiked={isLiked} /></button>
          <button><CommentIcon /></button>
          <button><ShareIcon /></button>
        </div>
        <p className="font-semibold text-sm mt-2">{likes.toLocaleString()} likes</p>
        <p className="text-sm mt-1">
          <Link href={`/users/${post.username}`}><span className="font-semibold mr-2">{post.username}</span></Link>
          {post.caption}
        </p>
        <div className="mt-2 text-sm text-gray-600">
          {post.comments.length > 1 && (
            <p className="cursor-pointer">View all {post.comments.length} comments</p>
          )}
          {post.comments.slice(0, 1).map((comment, index) => (
            <p key={index} className="mt-1">
              <Link href={`/users/${comment.username}`}><span className="font-semibold mr-2">{comment.username}</span></Link>
              {comment.text}
            </p>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2 uppercase">{post.timestamp}</p>
      </div>
      <div className="border-t border-gray-200 px-3 py-2">
        <input 
          type="text" 
          placeholder="Add a comment..." 
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
