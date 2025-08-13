import type { Post } from './types';

// --- Helper Data ---

// Mock data now typed according to our interfaces
export const mockPosts: Post[] = [
  {
    id: 1,
    username: 'naturelover',
    avatar: 'https://placehold.co/150x150/a8dadc/457b9d?text=NL',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
    caption: 'Lost in the beauty of the rolling hills. Nature is the best artist!',
    likes: 124,
    comments: [
      { username: 'travelbug', text: 'Stunning view! Where is this?' },
      { username: 'photoguru', text: 'Great composition!' },
    ],
    timestamp: '3 hours ago',
  },
  {
    id: 2,
    username: 'cityscape_explorer',
    avatar: 'https://placehold.co/150x150/e63946/f1faee?text=CE',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop',
    caption: 'The city that never sleeps. So much energy and life!',
    likes: 256,
    comments: [
        { username: 'urbanite', text: 'My favorite city!' },
    ],
    timestamp: '1 day ago',
  },
  {
    id: 3,
    username: 'foodie_delight',
    avatar: 'https://placehold.co/150x150/fca311/14213d?text=FD',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop',
    caption: 'Brunch is always a good idea. Look at these colors!',
    likes: 432,
    comments: [
        { username: 'chefstable', text: 'Recipe please! ' },
        { username: 'hungry_hippo', text: 'Making me hungry!' },
        { username: 'gourmetgal', text: 'Looks delicious.' },
    ],
    timestamp: '2 days ago',
  }
];
