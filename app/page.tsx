'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';


import SplashIntro from '@/components/SplashIntro';
import Navbar from '@/components/Navbar';
import FacultyGrid from '@/components/FacultyGrid';
import CampusGallery from '@/components/CampusGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

export default function Home() {

  const [showIntro, setShowIntro] = useState(true);

  return (
    <>

      <AnimatePresence>
        {showIntro && (
          <SplashIntro onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>


      <main className="min-h-screen bg-white relative overflow-hidden flex flex-col font-sans">


        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#003399 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>


        <Navbar />



        <section id="home" className="container mx-auto px-6 pt-32 pb-10 flex flex-col lg:flex-row items-center relative z-10 min-h-[90vh]">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
          >

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-semibold border border-blue-100 mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Official Expo Campus 2025
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Universitas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
                Negeri Malang
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 italic font-medium">
              "Excellence in Learning Innovation"
            </p>

            <p className="text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Temukan masa depanmu di sini. Jelajahi ragam fakultas unggulan dan fasilitas kelas dunia di Universitas Negeri Malang.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">


              <button
                onClick={() => document.getElementById('faculty')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 transition-all"
              >
                Lihat Jurusan
                <ArrowRight size={20} />
              </button>


              <a
                href="https://goo.gl/maps/xG5vXfX8qX52"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all cursor-pointer"
              >
                <MapPin size={20} />
                Lokasi Kampus
              </a>

            </div>
          </motion.div>


          <div className="lg:w-1/2 h-[400px] lg:h-[550px] w-full relative mt-12 lg:mt-0 flex items-center justify-center">


            <div className="absolute w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/cakra.png"
                alt="Maskot UM"
                fill
                className="object-contain animate-bounce-slow drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>

        </section>


        <WhyChooseUs />


        <CampusGallery />


        <div id="faculty">
          <FacultyGrid />
        </div>


        <Footer />

      </main>
    </>
  );
}