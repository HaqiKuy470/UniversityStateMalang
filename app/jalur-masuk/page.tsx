'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Trophy, PenTool, Star, Calendar, ExternalLink, CheckCircle2, Crown, Handshake, MonitorPlay, Ticket, Globe, FileText, AlertCircle } from 'lucide-react';

const admissionPaths = [
  {
    id: 1,
    title: 'SNBP',
    fullName: 'Seleksi Nasional Berdasarkan Prestasi',
    icon: <Trophy size={32} />,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    status: 'Jalur Nasional', // Ganti Timeline jadi Status/Kategori
    desc: 'Jalur undangan nasional (tanpa tes tulis). Penilaian utama berdasarkan nilai rapor semester 1-5, portofolio, dan prestasi akademik maupun non-akademik.',
    tips: 'Pastikan grafik nilai rapor stabil/naik. Sertifikat juara minimal tingkat Kabupaten/Kota sangat berpengaruh.'
  },
  {
    id: 2,
    title: 'SNBT',
    fullName: 'Seleksi Nasional Berdasarkan Tes',
    icon: <PenTool size={32} />,
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    status: 'Jalur Nasional',
    desc: 'Jalur seleksi nasional menggunakan skor hasil Ujian Tulis Berbasis Komputer (UTBK). Kuota penerimaan paling besar dibanding jalur lainnya.',
    tips: 'Fokus latihan soal Tes Potensi Skolastik (TPS), Literasi B.Indonesia/Inggris, dan Penalaran Matematika.'
  },
  {
    id: 3,
    title: 'Mandiri UM',
    fullName: 'Seleksi Internal Universitas',
    icon: <Star size={32} />,
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
    status: 'Jalur Universitas',
    desc: 'Jalur penerimaan yang dikelola langsung oleh UM. Memiliki jadwal yang variatif (Beberapa jalur buka lebih awal).',
    // DETAIL JALUR MANDIRI
    subPaths: [
      { 
        name: 'Prestasi & Golden Ticket', 
        // UPDATE INFO: Menekankan jadwal lebih awal
        info: 'Tanpa Tes. Biasanya dibuka LEBIH AWAL dari SNBP. Gunakan sertifikat Juara, Hafidz, atau Influencer.',
        ico: <Ticket size={16} className="text-yellow-600" /> 
      },
      { 
        name: 'Jalur Leadership', 
        info: 'Khusus bagi kamu yang pernah menjabat Ketua/Wakil OSIS di SMA/SMK.',
        ico: <Crown size={16} /> 
      },
      { 
        name: 'Jalur Skor UTBK-SNBT', 
        info: 'Cukup upload nilai UTBK 2025. Tidak perlu ikut ujian tulis lagi.',
        ico: <FileText size={16} /> 
      },
      { 
        name: 'Jalur TMBK', 
        info: 'Tes Masuk Berbasis Komputer. Ujian tulis lokal yang diadakan oleh UM (Malang & Jakarta).',
        ico: <MonitorPlay size={16} /> 
      },
      { 
        name: 'Jalur Kemitraan', 
        info: 'Kerjasama Institusi (MoU) & Kemitraan Umum (Mitra Asuh).',
        ico: <Handshake size={16} /> 
      },
      { 
        name: 'Kelas Internasional', 
        info: 'Perkuliahan pengantar Bahasa Inggris & kesempatan exposure global.',
        ico: <Globe size={16} /> 
      },
    ],
    tips: 'Wajib pantau website seleksi.um.ac.id secara berkala mulai awal tahun agar tidak ketinggalan Golden Ticket.'
  }
];

export default function JalurMasukPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-bold text-sm mb-6 border border-blue-100">
            <Calendar size={18} />
            Edisi Penerimaan 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            3 Pintu Masuk <span className="text-blue-600">Kampus UM</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kenali jalur seleksinya. Perhatikan jadwalnya karena jalur Mandiri (Golden Ticket) bisa dibuka lebih dulu!
          </p>
        </div>

        {/* Grid Jalur Masuk */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {admissionPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col relative overflow-hidden group"
            >
              {/* Garis Warna di Atas */}
              <div className={`absolute top-0 left-0 w-full h-2 ${path.color}`}></div>

              {/* Header Card */}
              <div className="flex items-start justify-between mb-6">
                <div className={`${path.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {path.icon}
                </div>
                {/* Badge Status (Pengganti Timeline Bulan) */}
                <div className={`${path.lightColor} px-3 py-1 rounded-full text-xs font-bold ${path.textColor} border border-white shadow-sm flex items-center gap-1`}>
                  <AlertCircle size={12} />
                  {path.status}
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-2">{path.title}</h2>
              <p className={`text-sm font-bold uppercase tracking-wider mb-6 ${path.textColor}`}>
                {path.fullName}
              </p>
              
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                {path.desc}
              </p>

              {/* LIST DETAIL JALUR MANDIRI */}
              {path.subPaths ? (
                <div className="flex-grow space-y-3 mb-6">
                  {path.subPaths.map((sub, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex gap-3 hover:bg-green-50 transition-colors group/item">
                      <div className="mt-1 text-gray-400 group-hover/item:text-green-600 transition-colors flex-shrink-0">
                        {sub.ico}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2 flex-wrap">
                          {sub.name}
                          {/* Label HOT untuk Golden Ticket */}
                          {sub.name.includes('Golden') && (
                            <span className="bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded border border-red-200 animate-pulse">
                              EARLY BIRD
                            </span>
                          )}
                        </h4>
                        <p className="text-xs text-gray-500 leading-snug mt-0.5">{sub.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-grow"></div>
              )}

              {/* Box Tips Strategi */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 text-xs block mb-1 uppercase tracking-wide">Strategi Lolos:</span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {path.tips}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cek Jadwal Resmi Sekarang!</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
              Jadwal seleksi bisa berubah sewaktu-waktu. Pastikan kamu selalu memantau website resmi agar tidak ketinggalan, terutama untuk jalur Mandiri Prestasi.
            </p>
            
            <a 
               href="https://seleksi.um.ac.id" 
               target="_blank"
               className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-1"
             >
               Buka Website Seleksi UM
               <ExternalLink size={20} />
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}