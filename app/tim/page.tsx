'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Instagram, GraduationCap, School, Building2 } from 'lucide-react';


interface Member {
  name: string;
  major: string;
  faculty: string;
  instagram: string;
  image: string;
}

interface AlumniBatch {
  year: string;
  title: string;
  batchName: string;
  batchLogo?: string;
  members: Member[];
}

const alumniData: AlumniBatch[] = [
  {
    year: "Angkatan 2024/2025",
    title: "The Founding Team",
    batchName: "ANKARMARTHA'",
    batchLogo: "/images/logo_angkatan.png",
    members: [
      {
        name: 'Moh Dhiyaulhaq (Haqi)',
        major: 'S1 Pendidikan Teknik Informatika',
        faculty: 'Fakultas Teknik - UM',
        instagram: 'https://instagram.com/haqikuy',
        image: '',
      },
      {
        name: 'Agus Nasikhul Ibad (Nasik)',
        major: 'S1 Pendidikan Jasmani, Kesehatan Dan Rekreasi',
        faculty: 'Fakultas Ilmu Keolahragaan - UM',
        instagram: 'https://instagram.com/nasikhulibadd',
        image: '',
      },
      {
        name: 'Farrel Favian (Farrel)',
        major: 'D4 Tata Boga',
        faculty: 'Fakultas Vokasi - UM',
        instagram: 'https://www.instagram.com/farrel.fvn1/',
        image: '',
      },
      {
        name: 'M Al-Ayubi (Yubi)',
        major: 'S1 Pendidikan Pancasila',
        faculty: 'Fakultas Ilmu Sosial - UM',
        instagram: 'https://www.instagram.com/mmd_yubbi3/',
        image: '',
      },
      {
        name: 'Lintang Hadistira (Lintang)',
        major: 'S1 Pendidikan Pancasila',
        faculty: 'Fakultas Ilmu Sosial - UM',
        instagram: 'https://www.instagram.com/#/',
        image: '',
      },
      {
        name: 'Hisyam Rizky Febrianto (Hisyam)',
        major: 'D4 Teknologi Rekayasa dan Pemeliharaan Bangunan Sipil',
        faculty: 'Fakultas Vokasi - UM',
        instagram: 'https://www.instagram.com/hisyamrizkyy/',
        image: '',
      },
      {
        name: 'Azizah Putri Raflesiana (Azizah)',
        major: 'S1 Pendidikan Bahasa Arab',
        faculty: 'Fakultas Sastra - UM',
        instagram: 'https://www.instagram.com/rflszah',
        image: '',
      },
      {
        name: 'Talitha Zahwa Atha Salsabila (Talitha)',
        major: 'S1 Ilmu Komunikasi',
        faculty: 'Fakultas Ilmu Sosial - UM',
        instagram: 'https://www.instagram.com/lithaaa.zhwa',
        image: '/images/team/Talitha.jpeg',
      },
      {
        name: 'Zeta Najwa Rahmania Fikrah (Zeta)',
        major: 'S1 Pendidikan guru pendidikan anak usia dini',
        faculty: 'Fakultas Ilmu Pendidikan - UM',
        instagram: 'https://www.instagram.com/ztnrf10_',
        image: '',
      }
    ]
  },
];

export default function TeamPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">


        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-bold text-sm mb-6 border border-blue-100">
            <GraduationCap size={18} />
            Hall of Fame
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Jejak Langkah <span className="text-blue-600">Alumni</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Terima kasih atas antusiasme seluruh pengunjung yang telah memeriahkan stand Universitas Negeri Malang. <span className="italic">-Panitia Stand UM</span>
          </p>
        </div>


        {alumniData.map((batch, idx) => (
          <div key={idx} className="mb-24 last:mb-0">


            <div className="flex flex-col items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-4 w-full justify-center">
                <div className="h-px bg-gray-200 w-16 md:w-32"></div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800">{batch.year}</h2>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                    {batch.title}
                  </span>
                </div>
                <div className="h-px bg-gray-200 w-16 md:w-32"></div>
              </div>

              {(batch.batchName || batch.batchLogo) && (
                <div className="mt-2 flex flex-col items-center animate-fade-in-up">
                  {batch.batchLogo && (
                    <div className="relative w-50 h-50 mb-3 drop-shadow-md hover:scale-110 transition-transform duration-300">
                      <Image
                        src={batch.batchLogo}
                        alt={batch.batchName || "Logo Angkatan"}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  {batch.batchName && (
                    <h3 className="font-serif italic text-xl text-gray-600 font-medium">
                      "{batch.batchName}"
                    </h3>
                  )}
                </div>
              )}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {batch.members.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col items-center text-center"
                >


                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-inner bg-gray-50 border-2 border-white ring-2 ring-gray-100 group-hover:ring-blue-400 transition-all">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <User size={40} />
                      </div>
                    )}
                  </div>


                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {member.name}
                  </h3>


                  <div className="w-full bg-blue-50/80 rounded-xl p-3 mb-6 border border-blue-100">

                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <School size={14} className="text-blue-600 flex-shrink-0" />
                      <p className="text-sm font-bold text-blue-800 leading-tight">
                        {member.major}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                      <Building2 size={12} className="text-blue-400 flex-shrink-0" />
                      <p className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                        {member.faculty}
                      </p>
                    </div>
                  </div>


                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-bold hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all"
                  >
                    <Instagram size={16} />
                    Follow IG
                  </a>

                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

      <Footer />
    </main>
  );
}