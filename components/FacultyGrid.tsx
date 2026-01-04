'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Code, BookOpen, FlaskConical, Palette, Brain, HeartPulse, Scale, Briefcase, Stethoscope, Wrench } from 'lucide-react';

const faculties = [
  {
    id: 'ft',
    name: 'Fakultas Teknik',
    icon: <Code size={30} />,
    color: 'bg-orange-500',
    desc: 'Pusat rekayasa teknologi cerdas dan inovasi berkelanjutan.'
  },
  {
    id: 'fmipa',
    name: 'FMIPA',
    icon: <FlaskConical size={30} />,
    color: 'bg-blue-500',
    desc: 'Pengembangan sains murni, matematika, dan pembelajaran IPA modern.'
  },
  {
    id: 'fs',
    name: 'Fakultas Sastra',
    icon: <Palette size={30} />,
    color: 'bg-yellow-500',
    desc: 'Harmoni bahasa, pelestarian budaya, seni, dan desain kreatif digital.'
  },
  {
    id: 'feb',
    name: 'Fakultas Ekonomi',
    icon: <Briefcase size={30} />,
    color: 'bg-purple-500',
    desc: 'Mencetak pemimpin bisnis, ekonom handal, dan wirausahawan global.'
  },
  {
    id: 'fip',
    name: 'FIP',
    icon: <BookOpen size={30} />,
    color: 'bg-green-500',
    desc: 'Fakultas Ilmu Pendidikan, inovator pedagogi dan teknologi pembelajaran.'
  },
  {
    id: 'fik',
    name: 'FIK',
    icon: <HeartPulse size={30} />,
    color: 'bg-red-500',
    desc: 'Mengintegrasikan sains keolahragaan dan kesehatan masyarakat.'
  },
  {
    id: 'fis',
    name: 'FIS',
    icon: <Scale size={30} />,
    color: 'bg-indigo-500',
    desc: 'Kajian mendalam dinamika sosial, sejarah, hukum, dan kewarganegaraan.'
  },
  {
    id: 'fpsi',
    name: 'Psikologi',
    icon: <Brain size={30} />,
    color: 'bg-pink-500',
    desc: 'Eksplorasi perilaku manusia dan kesehatan mental secara holistik.'
  },
  {
    id: 'fk',
    name: 'Fakultas Kedokteran',
    icon: <Stethoscope size={30} />,
    color: 'bg-emerald-500',
    desc: 'Pendidikan kedokteran dan profesi kesehatan berstandar internasional.'
  },
  {
    id: 'vokasi',
    name: 'Vokasi',
    icon: <Wrench size={30} />,
    color: 'bg-slate-600',
    desc: 'Keahlian terapan industri dengan standar kompetensi kerja nyata.'
  },
];


const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};


const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

export default function FacultyGrid() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Jalur Masa Depanmu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Universitas Negeri Malang memiliki berbagai fakultas unggulan yang siap menunjang minat dan bakatmu.
          </p>
        </div>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {faculties.map((fac, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[280px] xl:w-[300px] flex-grow-0 flex-shrink-0"
            >

              <Link
                href={`/information?fac=${fac.id}`}
                className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group h-full"
              >

                <div className={`${fac.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform shadow-md`}>
                  {fac.icon}
                </div>


                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {fac.name}
                </h3>


                <p className="text-gray-500 text-sm leading-relaxed">
                  {fac.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}