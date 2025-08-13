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
  },
  {
    id: 4,
    username: 'adventure_awaits',
    avatar: 'https://placehold.co/150x150/8ecae6/023047?text=AA',
    imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop',
    caption: 'Exploring the unknown. Every path leads to a new discovery.',
    likes: 301,
    comments: [
        { username: 'wanderlust', text: 'I want to go there!' },
    ],
    timestamp: '3 days ago',
  },
  {
    id: 5,
    username: 'pet_pals',
    avatar: 'https://placehold.co/150x150/ffb703/fb8500?text=PP',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop',
    caption: 'My furry friend enjoying the sun. Arent they the cutest?',
    likes: 589,
    comments: [
        { username: 'cat_lover', text: 'So adorable!' },
        { username: 'dog_person', text: 'Looks like my dog!' },
    ],
    timestamp: '4 days ago',
  },
  {
    id: 6,
    username: 'tech_geek',
    avatar: 'https://placehold.co/150x150/219ebc/126782?text=TG',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop',
    caption: 'My new setup is finally complete. Ready for some serious coding!',
    likes: 621,
    comments: [
        { username: 'coder_cat', text: 'Nice setup!' },
    ],
    timestamp: '5 days ago',
  },
  {
    id: 7,
    username: 'art_enthusiast',
    avatar: 'https://placehold.co/150x150/d62828/003049?text=AE',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1944&auto=format&fit=crop',
    caption: 'Art is not what you see, but what you make others see.',
    likes: 215,
    comments: [
        { username: 'creative_soul', text: 'So inspiring!' },
    ],
    timestamp: '6 days ago',
  },
  {
    id: 8,
    username: 'music_maven',
    avatar: 'https://placehold.co/150x150/f77f00/d62828?text=MM',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    caption: 'Music is the soundtrack of our lives. What are you listening to?',
    likes: 482,
    comments: [
        { username: 'dj_dave', text: 'Great shot!' },
    ],
    timestamp: '1 week ago',
  },
  {
    id: 9,
    username: 'fashion_forward',
    avatar: 'https://placehold.co/150x150/003049/f77f00?text=FF',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
    caption: 'Fashion is what you buy. Style is what you do with it.',
    likes: 721,
    comments: [
        { username: 'style_icon', text: 'Love this look!' },
    ],
    timestamp: '1 week ago',
  },
  {
    id: 10,
    username: 'bookworm',
    avatar: 'https://placehold.co/150x150/d62828/f77f00?text=BW',
    imageUrl: 'https://images.unsplash.com/photo-1524995767964-a9b2630f436f?q=80&w=2070&auto=format&fit=crop',
    caption: 'A reader lives a thousand lives before he dies.',
    likes: 356,
    comments: [
        { username: 'avid_reader', text: 'My favorite book!' },
    ],
    timestamp: '2 weeks ago',
  },
  {
    id: 11,
    username: 'fitness_fanatic',
    avatar: 'https://placehold.co/150x150/588157/3a5a40?text=FF',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop',
    caption: 'Sweat now, shine later. Pushing my limits every day!',
    likes: 834,
    comments: [
        { username: 'gym_rat', text: 'Beast mode!' },
        { username: 'health_nut', text: 'So motivating!' },
    ],
    timestamp: '2 weeks ago',
  },
  {
    id: 12,
    username: 'classic_cars',
    avatar: 'https://placehold.co/150x150/f4a261/e76f51?text=CC',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
    caption: 'They dont make them like they used to. A true classic.',
    likes: 972,
    comments: [
        { username: 'car_collector', text: 'A beauty!' },
    ],
    timestamp: '3 weeks ago',
  },
  {
    id: 13,
    username: 'minimal_design',
    avatar: 'https://placehold.co/150x150/e0e0e0/333333?text=MD',
    imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1887&auto=format&fit=crop',
    caption: 'Less is more. The beauty of simplicity in architecture.',
    likes: 499,
    comments: [
        { username: 'design_lover', text: 'So clean!' },
        { username: 'architect', text: 'Love the lines.' },
    ],
    timestamp: '3 weeks ago',
  }
];