'use client';

import React, { Suspense } from 'react'; // <--- 1. Wajib Import Suspense
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProdiList from '@/components/ProdiList';

export default function InformationPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-28">
        {/* 2. BUNGKUS DENGAN SUSPENSE */}
        {/* Ini memberi tahu Next.js: "Kalau data belum siap, tampilkan Loading dulu, jangan bikin Error" */}
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }>
          <ProdiList />
        </Suspense>
      </div>
      
      <Footer />
    </main>
  );
}