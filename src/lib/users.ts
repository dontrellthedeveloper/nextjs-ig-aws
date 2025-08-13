import type { User } from './types';

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'elonmusk',
    avatar: 'https://placehold.co/150x150/fca311/14213d?text=EM',
    isFollowed: false,
  },
  {
    id: 2,
    username: 'jeffbezos',
    avatar: 'https://placehold.co/150x150/e63946/f1faee?text=JB',
    isFollowed: true,
  },
  {
    id: 3,
    username: 'billgates',
    avatar: 'https://placehold.co/150x150/a8dadc/457b9d?text=BG',
    isFollowed: false,
  },
  {
    id: 4,
    username: 'markzuckerberg',
    avatar: 'https://placehold.co/150x150/1d3557/ffffff?text=MZ',
    isFollowed: true,
  },
  {
    id: 5,
    username: 'timcook',
    avatar: 'https://placehold.co/150x150/219ebc/126782?text=TC',
    isFollowed: false,
  },
];
