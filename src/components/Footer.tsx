'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, GraduationCap } from 'lucide-react';

// Inline social SVG icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const footerLinks = {
  penerimaan: {
    label: 'Penerimaan',
    links: [
      { name: 'Jalur Reguler', href: '/pmb/reguler' },
      { name: 'Jalur Prestasi', href: '/pmb/prestasi' },
      { name: 'Jalur Beasiswa', href: '/pmb/beasiswa' },
      { name: 'Biaya Pendidikan', href: '/pmb/biaya' },
      { name: 'Jadwal PMB', href: '/pmb/jadwal' },
    ],
  },
  akademik: {
    label: 'Akademik',
    links: [
      { name: 'Fak. Ekonomi & Bisnis', href: '/akademik/feb' },
      { name: 'Fak. Teknologi Informasi', href: '/akademik/fti' },
      { name: 'Fakultas Teknik', href: '/akademik/ft' },
      { name: 'Fakultas Hukum', href: '/akademik/fh' },
      { name: 'Pascasarjana', href: '/akademik/pasca' },
    ],
  },
  profil: {
    label: 'Profil',
    links: [
      { name: 'Sejarah UNMER', href: '/profil/sejarah' },
      { name: 'Visi & Misi', href: '/profil/visi-misi' },
      { name: 'Pimpinan Universitas', href: '/profil/pimpinan' },
      { name: 'Fasilitas Kampus', href: '/fasilitas' },
      { name: 'Kerjasama Internasional', href: '/kerjasama' },
    ],
  },
  layanan: {
    label: 'Layanan',
    links: [
      { name: 'Kalender Akademik', href: '/akademik/kalender' },
      { name: 'Unit Kegiatan Mhs.', href: '/ukm' },
      { name: 'Hubungi Kami', href: '/kontak' },
      { name: 'E-Learning', href: 'https://elearning.unmer.ac.id' },
      { name: 'Perpustakaan Digital', href: 'https://lib.unmer.ac.id' },
    ],
  },
};

const socials = [
  { Icon: InstagramIcon, href: 'https://instagram.com/unmermalang', label: 'Instagram' },
  { Icon: YoutubeIcon, href: 'https://youtube.com/unmermalang', label: 'YouTube' },
  { Icon: FacebookIcon, href: 'https://facebook.com/unmermalang', label: 'Facebook' },
  { Icon: TwitterIcon, href: 'https://twitter.com/unmermalang', label: 'Twitter/X' },
];

export default function Footer() {
  return (
    <footer className="bg-[#001D4A] text-white overflow-hidden">
      {/* Top CTA Strip */}
      <div className="border-b border-white/10 relative">
        {/* Dekorasi tipis agar tidak terlalu flat */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-ping"></span>
              <p className="text-[#FFD700] font-black uppercase tracking-[0.3em] text-[10px]">Penerimaan Mahasiswa Baru 2026</p>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">Mulai Masa Depanmu <span className="text-slate-400 font-light italic">Hari Ini.</span></h3>
          </div>
          <Link
            href="https://pmb.unmer.ac.id"
            className="flex-shrink-0 px-10 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-lg hover:bg-white transition-all duration-300 flex items-center gap-3 group shadow-[0_15px_40px_rgba(255,215,0,0.2)] active:scale-95"
          >
            DAFTAR SEKARANG
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            {/* Logo UNMER: Lambang + Teks */}
            <Link href="/" className="flex items-center gap-4 group w-fit">
              <Image 
                src="/logounmer.png" 
                alt="Lambang UNMER Malang" 
                width={80} 
                height={80} 
                className="w-auto h-16 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                priority
              />
              <Image 
                src="/logoteksunmer.png" 
                alt="Teks UNMER Malang" 
                width={200} 
                height={60} 
                className="w-auto h-12 object-contain group-hover:opacity-80 transition-opacity duration-300"
                priority
              />
            </Link>

            <p className="text-slate-400 leading-relaxed text-base font-medium max-w-sm">
              Mencetak generasi pemimpin berkarakter tangguh, inovatif, dan berdaya saing global sejak 1964.
            </p>

            {/* Socials */}
            <div className="space-y-4">
              <p className="text-white font-bold text-xs uppercase tracking-widest">Terhubung Dengan Kami</p>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-[#001D4A] flex items-center justify-center text-white transition-colors duration-300 shadow-sm"
                  >
                    <s.Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-5 pt-6 border-t border-white/10">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[#FFD700]" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pt-2">Jl. Terusan Raya Dieng No. 62-64, Pisang Candi, Kec. Sukun, Kota Malang, Jawa Timur 65146</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#FFD700]" />
                </div>
                <p className="text-slate-300 text-sm font-medium">(0341) 568395</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#FFD700]" />
                </div>
                <p className="text-slate-300 text-sm font-medium">info@unmer.ac.id</p>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 pt-4">
            {Object.values(footerLinks).map((section) => (
              <div key={section.label} className="space-y-8">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">
                  {section.label}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-[#FFD700] transition-colors text-sm font-medium group flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#FFD700] transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditation & Bottom Bar */}
      <div className="bg-[#001536] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-[#FFD700]/10 rounded-xl flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-xs uppercase tracking-widest">Terakreditasi Unggul</span>
            </div>
            <div className="px-3 py-2 bg-white/5 rounded-xl">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">BAN-PT</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-xs font-medium text-center">
            © {new Date().getFullYear()} Universitas Merdeka Malang. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="/privasi" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}