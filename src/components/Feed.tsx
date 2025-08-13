import React, { FC } from 'react';
import { mockPosts } from '../lib/data';
import PhotoCard from './PhotoCard';

const Feed: FC = () => {
  return (
    <div className="w-full max-w-md">
      {mockPosts.map(post => (
        <PhotoCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
