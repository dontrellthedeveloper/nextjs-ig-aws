// --- TypeScript Interfaces ---
// Defines the shape of our data for type safety.

export interface Comment {
  username: string;
  text: string;
}

export interface Post {
  id: number;
  type: 'photo' | 'prompt';
  username: string;
  avatar: string;
  imageUrl?: string;
  caption?: string;
  content?: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface User {
  id: number;
  username: string;
  avatar: string;
  isFollowed: boolean;
}


export interface Story {
  id: number;
  username: string;
  avatar: string;
  isSeen: boolean;
}
