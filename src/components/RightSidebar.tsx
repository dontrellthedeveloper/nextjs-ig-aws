import React, { FC, useState } from 'react';
import { mockUsers } from '../lib/users';
import type { User } from '../lib/types';

const RightSidebar: FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const handleFollowToggle = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isFollowed: !user.isFollowed } : user
    ));
  };

  return (
    <aside className="sticky top-16 h-screen bg-gray-50 w-80 p-4 border-l border-gray-200">
      <h2 className="font-semibold text-gray-600 mb-4">Suggestions For You</h2>
      <div>
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full object-cover" />
              <span className="ml-3 font-semibold text-sm text-gray-800">{user.username}</span>
            </div>
            <button 
              onClick={() => handleFollowToggle(user.id)}
              className={`text-xs font-semibold ${user.isFollowed ? 'text-gray-500' : 'text-blue-500'}`}>
              {user.isFollowed ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
