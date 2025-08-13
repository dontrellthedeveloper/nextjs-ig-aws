'use client';

import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const HomePage: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 flex justify-center">
          <div className="py-8">
            <Feed />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;