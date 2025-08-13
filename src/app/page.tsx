'use client';

import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';

const HomePage: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <main className="pt-16 flex justify-center">
        <div className="py-8">
          <Feed />
        </div>
      </main>
    </div>
  );
};

export default HomePage;