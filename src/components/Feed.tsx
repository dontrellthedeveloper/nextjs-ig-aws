import React, { FC, useState, useEffect, useRef } from 'react';
import { mockPosts } from '../lib/data';
import PhotoCard from './PhotoCard';
import PromptCard from './PromptCard';
import type { Post } from '../lib/types';
import Spinner from './Spinner';

const POSTS_PER_PAGE = 3;

const Feed: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement>(null);

  const fetchMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newPosts = mockPosts.slice(0, nextPage * POSTS_PER_PAGE);
      setPosts(newPosts);
      setPage(nextPage);
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  useEffect(() => {
    fetchMorePosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && posts.length < mockPosts.length) {
          fetchMorePosts();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, loading, posts]);

  return (
    <div className="w-full">
      <div className="space-y-6">
        {posts.map(post => {
          if (post.type === 'photo') {
            return <PhotoCard key={post.id} post={post} />;
          } else if (post.type === 'prompt') {
            return <PromptCard key={post.id} post={post} />;
          }
          return null;
        })}
      </div>
      <div ref={loader} className="h-4" />
      {loading && (
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Feed;
