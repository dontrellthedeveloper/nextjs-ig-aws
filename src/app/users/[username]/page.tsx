import UserProfile from '@/components/UserProfile';

const UserProfilePage = ({ params }: { params: { username: string } }) => {
  return <UserProfile username={params.username} />;
};

export default UserProfilePage;
