'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SplashProps {
  onFinish: () => void;
}

export default function SplashIntro({ onFinish }: SplashProps) {
  const [showButton, setShowButton] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">


        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >

          <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <Image
            src="/images/maskot.png"
            alt="Maskot Expo UM"
            fill
            className="object-contain drop-shadow-2xl z-10"
          />
        </motion.div>


        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 relative">

            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white transform rotate-45 border-l border-b border-blue-100 hidden md:block"></div>

            <h2 className="text-blue-900 font-bold text-lg mb-2">Halo, Calon Mahasiswa Baru! 👋</h2>

            <div className="text-gray-700 text-lg md:text-xl font-medium min-h-[80px]">
              <TypeAnimation
                sequence={[

                  'Halo Aku Cakra, Maskot Universitas Negeri Malang! 👋',
                  2000,
                  'Saya akan memandu kamu menjelajahi serunya Universitas Negeri Malang melalui website ini.',
                  1000,

                  'Klik pojok kiri bawah untuk menyalakan/mematikan musik',
                  1000,
                  'Selamat datang di Booth Universitas Negeri Malang, The Learning University.',
                  1500,

                  'Sudah siap untuk menjelajahi Universitas Negeri Malang?', 1000,
                  'Enjoy',
                  1000,
                  () => setShowButton(true),
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                repeat={0}
              />
            </div>
          </div>


          <div className="flex gap-4">
            {showButton ? (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={onFinish}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2"
              >
                Mulai Jelajah <ArrowRight size={20} />
              </motion.button>
            ) : (
              <button
                onClick={onFinish}
                className="text-gray-400 text-sm hover:text-blue-600 underline decoration-dotted"
              >
                Lewati Intro
              </button>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}