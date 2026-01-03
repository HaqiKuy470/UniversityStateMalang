'use client';

import React from 'react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    // UPDATE: bg-white diganti bg-gray-100 (Agak gelap sedikit)
    // pb-10 ditambahkan biar ada napas di bawah
    <footer className="bg-gray-100 border-t border-gray-200 pt-10 pb-10 mt-auto">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          
          {/* Bagian Kiri: Copyright */}
          <p className="text-center md:text-left">
            © {siteConfig.clientYear} <strong>{siteConfig.clientName}</strong>. 
            All rights reserved.
          </p>

          {/* Bagian Kanan: Watermark Tim */}
          <div className="flex items-center gap-1">
             <span className="text-gray-500">Powered by</span>
             <a 
               href={siteConfig.creator.website}
               className="font-bold text-blue-700 hover:text-blue-900 hover:underline transition-all"
             >
               {siteConfig.creator.name}
             </a>
          </div>

        </div>

        {/* Bagian "Made with love" sudah DIHAPUS dari sini.
           Footer jadi lebih bersih & profesional.
        */}

      </div>
    </footer>
  );
}