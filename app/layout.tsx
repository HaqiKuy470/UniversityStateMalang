import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; 
import './globals.css'; 
import { siteConfig } from '@/lib/config'; 
// 1. Import sudah benar
import MusicPlayer from '@/components/MusicPlayer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.clientName || 'Expo Universitas Negeri Malang',
  description: 'Official Website Expo Campus 2025 - Informasi Jalur Masuk dan Program Studi.',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        
        {/* Render Halaman Utama */}
        {children}

        {/* 2. PASANG COMPONENT DISINI (Agar muncul di website) */}
        <MusicPlayer />

        {/* === WATERMARK CONSOLE (Hidden Signature) === */}
        <Script id="watermark-console" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              console.clear();
              console.log(
                '%c Built with ❤️ by ${siteConfig.creator.name} 🚀', 
                'background: #2563eb; color: white; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-size: 14px;'
              );
              console.log(
                '%c Ingin membuat website sekolah/kampus seperti ini? Hubungi kami di: ${siteConfig.creator.website} ', 
                'color: #4b5563; font-size: 12px; margin-top: 5px;'
              );
            }
          `}
        </Script>

      </body>
    </html>
  );
}