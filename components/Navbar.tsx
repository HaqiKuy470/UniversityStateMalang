'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QrCode, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [showQr, setShowQr] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Informasi', href: '/information' },
        { name: 'Jalur Masuk', href: '/jalur-masuk' },
        { name: 'Alumni', href: '/tim' },
    ];

    return (
        <>

            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">


                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>


                        <div className="relative w-14 h-14 md:w-16 md:h-16">
                            <Image
                                src="/images/logo-um.png"
                                alt="Logo UM"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="hidden md:block">

                            <h1 className="text-blue-900 font-bold text-lg leading-tight">Universitas Negeri Malang</h1>
                            <p className="text-xs text-blue-600 font-medium tracking-wide">The Learning University</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-700 font-medium transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}


                        <button
                            onClick={() => setShowQr(true)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
                        >
                            <QrCode size={18} />
                            Join Us
                        </button>
                    </div>


                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu size={28} />
                    </button>
                </div>


                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-gray-700 font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => { setShowQr(true); setMobileMenuOpen(false); }}
                            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold"
                        >
                            <QrCode size={18} /> Join Group WA
                        </button>
                    </div>
                )}
            </nav>


            <AnimatePresence>
                {showQr && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setShowQr(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                onClick={() => setShowQr(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-gray-100 hover:bg-red-50 p-2 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-2xl font-bold text-blue-900 mb-2">Join Grup Maba!</h3>
                            <p className="text-gray-500 text-sm mb-6">Scan QR ini untuk bergabung ke grup WhatsApp resmi Expo.</p>

                            <div className="bg-white border-2 border-dashed border-blue-200 rounded-2xl p-4 mb-6 inline-block">

                                <div className="relative w-48 h-48 bg-gray-50 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/qr.jpeg"
                                        alt="QR Code WA"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">

                                <a
                                    href="https://chat.whatsapp.com/EGgnprPmIMXCVEqIHpOzrp"
                                    target="_blank"
                                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
                                >
                                    Buka WhatsApp Langsung
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}