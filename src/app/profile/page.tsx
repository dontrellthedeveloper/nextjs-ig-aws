'use client';

import type { NextPage } from 'next';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Profile from '../../components/Profile';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';

const ProfilePage: NextPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <AmplifyConfigCheck />
      <Navbar />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 flex justify-center">
          <Profile />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;