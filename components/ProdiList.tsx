'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Trophy, AlertCircle, Percent } from 'lucide-react';


const facultiesData = [
  {
    id: 'ft',
    name: 'Fakultas Teknik',
    short: 'FT',
    desc: 'Fakultas Teknik dengan 12 Program Studi S1.',
    prodi: [
      { name: 'S1 Teknik Informatika', quota: '110', rate: '3%', status: 'Sangat Ketat' },
      { name: 'S1 Teknik Industri', quota: '110', rate: '5%', status: 'Sangat Ketat' },
      { name: 'S1 Teknik Sipil', quota: '150', rate: '7%', status: 'Ketat' },
      { name: 'S1 Teknik Mesin', quota: '120', rate: '7%', status: 'Ketat' },
      { name: 'S1 Teknik Elektro', quota: '100', rate: '8%', status: 'Ketat' },
      { name: 'S1 Pend. Tata Boga', quota: '110', rate: '8%', status: 'Ketat' },
      { name: 'S1 Pend. Tata Busana', quota: '110', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. Teknik Informatika', quota: '110', rate: '11%', status: 'Ketat' },
      { name: 'S1 Pend. Teknik Otomotif', quota: '120', rate: '22%', status: 'Sedang' },
      { name: 'S1 Pend. Teknik Elektro', quota: '100', rate: '35%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Teknik Mesin', quota: '150', rate: '41%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Teknik Bangunan', quota: '140', rate: '42%', status: 'Peluang Besar' },
    ]
  },
  {
    id: 'feb',
    name: 'Ekonomi & Bisnis',
    short: 'FEB',
    desc: 'Fakultas Ekonomi dan Bisnis.',
    prodi: [
      { name: 'S1 Manajemen', quota: '310', rate: '5%', status: 'Sangat Ketat' },
      { name: 'S1 Akuntansi', quota: '260', rate: '8%', status: 'Ketat' },
      { name: 'S1 Ekonomi Pembangunan', quota: '170', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. Adm. Perkantoran', quota: '150', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. Tata Niaga', quota: '120', rate: '16%', status: 'Sedang' },
      { name: 'S1 Pend. Akuntansi', quota: '120', rate: '19%', status: 'Sedang' },
      { name: 'S1 Pend. Ekonomi', quota: '160', rate: '22%', status: 'Sedang' },
    ]
  },
  {
    id: 'fip',
    name: 'Ilmu Pendidikan',
    short: 'FIP',
    desc: 'Fakultas Ilmu Pendidikan.',
    prodi: [
      { name: 'S1 Bimbingan & Konseling', quota: '190', rate: '9%', status: 'Ketat' },
      { name: 'S1 PGSD', quota: '390', rate: '12%', status: 'Ketat' },
      { name: 'S1 PGPAUD', quota: '140', rate: '15%', status: 'Ketat' },
      { name: 'S1 Administrasi Pendidikan', quota: '190', rate: '16%', status: 'Sedang' },
      { name: 'S1 Teknologi Pendidikan', quota: '170', rate: '24%', status: 'Sedang' },
      { name: 'S1 Pend. Luar Biasa', quota: '140', rate: '26%', status: 'Sedang' },
      { name: 'S1 Pend. Luar Sekolah', quota: '180', rate: '33%', status: 'Peluang Besar' },
    ]
  },
  {
    id: 'fs',
    name: 'Sastra',
    short: 'FS',
    desc: 'Fakultas Sastra.',
    prodi: [
      { name: 'S1 Bahasa & Sastra Inggris', quota: '120', rate: '7%', status: 'Ketat' },
      { name: 'S1 Desain Komunikasi Visual', quota: '190', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. Bahasa Inggris', quota: '150', rate: '10%', status: 'Ketat' },
      { name: 'S1 Pend. Bhs Sastra Indo', quota: '170', rate: '11%', status: 'Ketat' },
      { name: 'S1 Bahasa & Sastra Indo', quota: '130', rate: '11%', status: 'Ketat' },
      { name: 'S1 Ilmu Perpustakaan', quota: '120', rate: '12%', status: 'Ketat' },
      { name: 'S1 Pend. Bahasa Arab', quota: '180', rate: '13%', status: 'Ketat' },
      { name: 'S1 Pend. Seni Rupa', quota: '140', rate: '32%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Bahasa Mandarin', quota: '90', rate: '33%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Seni Tari & Musik', quota: '140', rate: '42%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Bahasa Jerman', quota: '90', rate: '43%', status: 'Peluang Besar' },
    ]
  },
  {
    id: 'fmipa',
    name: 'MIPA',
    short: 'FMIPA',
    desc: 'Fakultas Matematika dan IPA.',
    prodi: [
      { name: 'S1 Gizi', quota: '80', rate: '3%', status: 'Sangat Ketat' },
      { name: 'S1 Bioteknologi', quota: '70', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. Biologi', quota: '130', rate: '17%', status: 'Sedang' },
      { name: 'S1 Pend. Matematika', quota: '220', rate: '18%', status: 'Sedang' },
      { name: 'S1 Pend. IPA', quota: '220', rate: '21%', status: 'Sedang' },
      { name: 'S1 Biologi', quota: '130', rate: '24%', status: 'Sedang' },
      { name: 'S1 Matematika', quota: '180', rate: '26%', status: 'Sedang' },
      { name: 'S1 Kimia', quota: '168', rate: '32%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Fisika', quota: '168', rate: '33%', status: 'Peluang Besar' },
      { name: 'S1 Pend. Kimia', quota: '168', rate: '35%', status: 'Peluang Besar' },
      { name: 'S1 Fisika', quota: '168', rate: '50%', status: 'Peluang Besar' },
    ]
  },
  {
    id: 'fik',
    name: 'Ilmu Keolahragaan',
    short: 'FIK',
    desc: 'Fakultas Ilmu Keolahragaan.',
    prodi: [
      { name: 'S1 Ilmu Kes. Masyarakat', quota: '380', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. Kepelatihan Or', quota: '190', rate: '21%', status: 'Sedang' },
      { name: 'S1 PJKR', quota: '270', rate: '22%', status: 'Sedang' },
      { name: 'S1 Ilmu Keolahragaan', quota: '180', rate: '28%', status: 'Sedang' },
    ]
  },
  {
    id: 'fis',
    name: 'Ilmu Sosial',
    short: 'FIS',
    desc: 'Fakultas Ilmu Sosial.',
    prodi: [
      { name: 'S1 Ilmu Komunikasi', quota: '150', rate: '3%', status: 'Sangat Ketat' },
      { name: 'S1 Ilmu Sejarah', quota: '70', rate: '9%', status: 'Ketat' },
      { name: 'S1 Pend. IPS', quota: '110', rate: '13%', status: 'Ketat' },
      { name: 'S1 Pend. Sosiologi', quota: '180', rate: '14%', status: 'Ketat' },
      { name: 'S1 PPKN', quota: '205', rate: '18%', status: 'Sedang' },
      { name: 'S1 Geografi', quota: '140', rate: '19%', status: 'Sedang' },
      { name: 'S1 Pend. Sejarah', quota: '190', rate: '22%', status: 'Sedang' },
      { name: 'S1 Pend. Geografi', quota: '190', rate: '23%', status: 'Sedang' },
    ]
  },
  {
    id: 'fpsi',
    name: 'Psikologi',
    short: 'FPsi',
    desc: 'Fakultas Psikologi.',
    prodi: [
      { name: 'S1 Psikologi', quota: '400', rate: '6%', status: 'Sangat Ketat' },
    ]
  },
  {
    id: 'fk',
    name: 'Kedokteran',
    short: 'FK',
    desc: 'Fakultas Kedokteran.',
    prodi: [
      { name: 'S1 Kedokteran', quota: '50', rate: '7%', status: 'Sangat Ketat' },
      { name: 'S1 Keperawatan', quota: '50', rate: '-', status: 'Baru' },
      { name: 'S1 Kebidanan', quota: '50', rate: '-', status: 'Baru' },
    ]
  },
  {
    id: 'vokasi',
    name: 'Vokasi',
    short: 'FV',
    desc: 'Fakultas Vokasi (Sarjana Terapan / D4).',
    prodi: [
      { name: 'D4 Tata Boga', quota: '80', rate: '6%', status: 'Sangat Ketat' },
      { name: 'D4 Manajemen Pemasaran', quota: '100', rate: '7%', status: 'Sangat Ketat' },
      { name: 'D4 Akuntansi', quota: '100', rate: '13%', status: 'Ketat' },
      { name: 'D4 Desain Mode', quota: '70', rate: '13%', status: 'Ketat' },
      { name: 'D4 Animasi', quota: '130', rate: '24%', status: 'Sedang' },
      { name: 'D4 Perpustakaan Digital', quota: '60', rate: '25%', status: 'Sedang' },
      { name: 'D4 TR Otomotif', quota: '80', rate: '31%', status: 'Peluang Besar' },
      { name: 'D4 TR Bangunan Sipil', quota: '90', rate: '34%', status: 'Peluang Besar' },
      { name: 'D4 TR Manufaktur', quota: '80', rate: '37%', status: 'Peluang Besar' },
      { name: 'D4 TR Sistem Elektronika', quota: '90', rate: '45%', status: 'Peluang Besar' },
      { name: 'D4 TR Pembangkit Energi', quota: '90', rate: '53%', status: 'Peluang Besar' },
    ]
  }
];

export default function ProdiList() {
  const [activeTab, setActiveTab] = useState(facultiesData[0].id);
  const searchParams = useSearchParams();


  useEffect(() => {
    const facFromUrl = searchParams.get('fac');
    if (facFromUrl) {

      const isValid = facultiesData.some(f => f.id === facFromUrl);
      if (isValid) setActiveTab(facFromUrl);
    }
  }, [searchParams]);


  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'Sangat Ketat': return 'bg-red-100 text-red-700 border-red-200';
      case 'Ketat': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Sedang': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Baru': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <section className="py-20 bg-white" id="prodi-info">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Keketatan & Daya Tampung</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Cek seberapa ketat persaingan di jurusan impianmu. Data berdasarkan
            <span className="font-bold text-blue-600"> Seleksi Tahun 2024</span>.
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-3 pb-6 mb-6">
          {facultiesData.map((fac) => (
            <button
              key={fac.id}
              onClick={() => setActiveTab(fac.id)}
              className={`
                px-6 py-3 rounded-full font-bold transition-all
                ${activeTab === fac.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'}
              `}
            >
              {fac.short}
            </button>
          ))}
        </div>


        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 min-h-[400px]">
          <AnimatePresence mode='wait'>
            {facultiesData.map((fac) => (
              activeTab === fac.id && (
                <motion.div
                  key={fac.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">{fac.name} ({fac.short})</h3>
                    <p className="text-gray-500">{fac.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fac.prodi.map((item, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group relative overflow-hidden flex flex-col">

                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-bold text-gray-800 text-lg w-3/4 leading-snug">{item.name}</h4>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full border uppercase tracking-wider ${getBadgeColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>

                        <div className="flex-grow"></div>

                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                            <div className="flex items-center gap-1 text-blue-600 mb-1">
                              <Percent size={14} />
                              <span className="text-xs font-bold">Keketatan</span>
                            </div>
                            <span className="text-xl font-extrabold text-blue-900">{item.rate}</span>
                          </div>

                          <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                            <div className="flex items-center gap-1 text-gray-500 mb-1">
                              <Users size={14} />
                              <span className="text-xs font-bold">Daya Tampung</span>
                            </div>
                            <span className="text-xl font-extrabold text-gray-700">{item.quota}</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-start gap-3 text-sm text-gray-500 bg-white p-4 rounded-xl border border-gray-100 shadow-sm max-w-3xl">
                    <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-800 mb-1">Cara Membaca Data:</p>
                      <ul className="list-disc ml-4 space-y-1">
                        <li><span className="font-bold text-blue-600">Keketatan (3%)</span>: Artinya dari 100 pendaftar, hanya 3 orang yang diterima.</li>
                        <li>Data Daya Tampung adalah total kuota (SNBP + SNBT + Mandiri).</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}