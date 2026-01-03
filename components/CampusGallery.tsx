'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Ganti src dengan nama file foto fasilitas UM kamu yang asli
const photos = [
  { src: '/images/1.jpg', alt: 'Suasana Kampus UM 1' },
  { src: '/images/2.jpg', alt: 'Suasana Kampus UM 2' },
  { src: '/images/3.jpg', alt: 'Suasana Kampus UM 3' },
  { src: '/images/4.jpeg', alt: 'Suasana Kampus UM 4' },
  { src: '/images/5.jpg', alt: 'Suasana Kampus UM 5' },
  { src: '/images/6.jpg', alt: 'Suasana Kampus UM 6' },
];

export default function CampusGallery() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Life at <span className="text-blue-600">The Learning University</span>
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Fasilitas kelas dunia untuk menunjang kreativitasmu.
        </p>
      </div>

      {/* Container Marquee */}
      <div className="relative w-full flex overflow-hidden group">

        {/* Gradients di kiri kanan biar transisinya halus */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Wrapper Animasi (Kita duplikat list foto biar loopingnya mulus) */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          // Animasi jalan terus
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35, // Kecepatan (makin besar makin pelan)
            repeat: Infinity
          }}
          // Berhenti pas di-hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Render List Foto 2 Kali (Teknik Infinite Loop) */}
          {[...photos, ...photos].map((photo, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              {/* Placeholder warna kalau gambar belum ada */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>

              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback kalau gambar gak ketemu, ganti warna abu
                  e.currentTarget.style.display = 'none';
                }} />


            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}