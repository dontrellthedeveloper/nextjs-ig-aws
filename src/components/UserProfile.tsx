import { mockPosts } from '@/lib/data';
import { mockUsers as users } from '@/lib/users';
import Image from 'next/image';

const UserProfile = ({ username }: { username: string }) => {
  const user = users.find((user) => user.username === username);
  const posts = mockPosts.filter((post) => post.username === username);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center mb-8">
        <div className="w-32 h-32 relative mr-8">
          <Image
            src={user.avatar}
            alt={user.username}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-gray-600">{user.username}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="aspect-square relative">
            <Image
              src={post.imageUrl}
              alt={post.caption}
              layout="fill"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
