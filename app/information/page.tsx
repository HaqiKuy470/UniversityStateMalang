'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProdiList from '@/components/ProdiList';
export default function InformationPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* 1. Navbar tetap ada biar bisa balik ke Home */}
      <Navbar />

      {/* 2. Konten Utama */}
      {/* pt-28 memberi jarak agar tidak tertutup Navbar */}
      <div className="flex-grow pt-28">
        <ProdiList />
      </div>
      <Footer />
    </main>
  );
}