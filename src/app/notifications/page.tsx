'use client';

import type { NextPage } from 'next';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';
import Notifications from '../../components/Notifications';
import AmplifyConfigCheck from '../../components/AmplifyConfigCheck';

const NotificationsPage: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <AmplifyConfigCheck />
      <Navbar />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 flex justify-center px-4 md:px-0">
          <div className="py-8 w-full max-w-5xl">
            <Notifications />
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default NotificationsPage;