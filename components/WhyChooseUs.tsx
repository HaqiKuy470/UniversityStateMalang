'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Building2, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Akreditasi Institusi',
    value: 'UNGGUL',
    desc: 'Diakui secara nasional dengan kualitas pendidikan terbaik.',
    icon: <Trophy size={32} />,
    color: 'bg-yellow-500'
  },
  {
    id: 2,
    label: 'Peringkat Nasional',
    value: 'Top 15',
    desc: 'Salah satu universitas terbaik di Indonesia versi Webometrics.',
    icon: <Globe size={32} />,
    color: 'bg-blue-500'
  },
  {
    id: 3,
    label: 'Program Studi',
    value: '110+',
    desc: 'Pilihan jurusan beragam dari jenjang Diploma hingga Doktoral.',
    icon: <BookOpen size={32} />,
    color: 'bg-green-500'
  },
  {
    id: 4,
    label: 'Mahasiswa Aktif',
    value: '38.000+',
    desc: 'Komunitas mahasiswa yang besar, aktif, dan berprestasi.',
    icon: <Users size={32} />,
    color: 'bg-indigo-500'
  },
];

import { BookOpen } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">


        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Kenapa Harus <span className="text-blue-600">UM?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Kami berkomitmen mencetak generasi unggul melalui inovasi pembelajaran dan fasilitas berstandar internasional.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}>
                {stat.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-blue-900 font-bold mb-3">{stat.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}