'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  MessageSquare,
  Download,
  Building2,
  Trophy,
  Bell,
  Sparkles,
  ExternalLink,
  CalendarDays
} from 'lucide-react';
import Link from 'next/link';

const StatsCounter = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-baseline gap-1">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-black text-[#001D4A] tracking-tighter"
      >
        {value.toLocaleString('id-ID')}
      </motion.span>
      <span className="text-3xl font-black text-[#F57C00]">+</span>
    </div>
    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">{label}</p>
  </div>
);

const AnnouncementItem = ({ date, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group flex items-start gap-5 p-6 hover:bg-[#F8FAFC] rounded-2xl transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center shrink-0 w-16 pt-1">
      <span className="text-xs font-mono text-slate-400">{date.split('/')[2]}</span>
      <span className="text-2xl font-black text-[#001D4A] leading-none">{date.split('/')[0]}</span>
      <span className="text-xs font-bold text-[#F57C00] uppercase tracking-wider">{date.split('/')[1]}</span>
    </div>
    <div className="space-y-2 flex-1">
      <h4 className="font-semibold text-slate-800 leading-relaxed group-hover:text-blue-700 transition-colors">
        {title}
      </h4>
      <div className="flex items-center gap-2 text-[#F57C00] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Buka Dokumen <ExternalLink className="w-3.5 h-3.5" />
      </div>
    </div>
  </motion.div>
);

const NewsCard = ({ image, category, title, date, views, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 group h-full flex flex-col"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-4 left-5 px-3 py-1 bg-[#FFD700] text-[#001D4A] text-[10px] font-black uppercase tracking-widest rounded-full">
        {category}
      </span>
    </div>
    <div className="p-8 flex flex-col flex-1 justify-between space-y-4">
      <h3 className="text-xl font-black text-[#001D4A] leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
        {title}
      </h3>
      <div className="flex items-center justify-between text-slate-400 text-xs pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 font-medium">
          <CalendarDays className="w-4 h-4 text-[#F57C00]" />
          {date}
        </div>
        <div className="font-medium">{views} views</div>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  const announcements = [
    { date: '04/Apr/2026', title: 'Laporan Hasil Survei Triwulan 4 Tahun 2025 - Tingkat Kepuasan Layanan LLDIKTI VII' },
    { date: '03/Mar/2026', title: 'Upaya Pengendalian Gratifikasi di Lingkungan Perguruan Tinggi Swasta Jawa Timur' },
    { date: '13/Feb/2026', title: 'Persyaratan Pembayaran Tunjangan Profesi Dosen Periode Tahun Anggaran 2026' },
    { date: '30/Jan/2026', title: 'Informasi kegiatan Pendataan Lengkap Triwulanan Perguruan Tinggi di Jawa Timur' },
  ];

  const news = [
    {
      image: 'https://images.unsplash.com/photo-1523050853063-9152af46b9f2?auto=format&fit=crop&q=80&w=2070',
      category: 'Kolaborasi',
      title: 'UNMER Malang Resmi Menjalin Kerjasama dengan Google Cloud untuk Pengembangan AI Center',
      date: '07 April 2026',
      views: '1.2k',
    },
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070',
      category: 'Akademik',
      title: 'Tips Memilih Program Studi yang Tepat untuk Karir Masa Depan di Era Digital 5.0',
      date: '05 April 2026',
      views: '3.4k',
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070',
      category: 'Inovasi',
      title: 'Transformasi Digital di Kampus: Bagaimana UNMER Mengadaptasi Kurikulum Berbasis Industri',
      date: '02 April 2026',
      views: '850',
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden bg-white text-slate-800 font-sans selection:bg-[#FFD700]/30">
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-900 section-loaded">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://media.quipper.com/media/W1siZiIsIjIwMjIvMTEvMjUvMDEvNDAvMzgvMTg5NjUzYWUtZDA1ZS00Y2YxLWE4NmYtNmNlNTE0NDU4NTgzLyJdLFsicCIsInRodW1iIiwiMTIwMHhcdTAwM2UiXSxbInAiLCJjb252ZXJ0IiwiLWNvbG9yc3BhY2Ugc1JHQiAtc3RyaXAiLHsiZm9ybWF0IjoianBnIn1dXQ.jpg"
            alt="Kampus UNMER Malang"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#001D4A] via-[#001D4A]/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-10 z-10" style={{ backgroundImage: 'radial-gradient(#white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-20 w-full max-w-[90rem] mx-auto px-6 md:px-12 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 text-[#FFD700] rounded-full font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-lg">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Kampus Unggul & Berkarakter
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.95] tracking-tighter">
                  Wujudkan Potensi.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-200 to-white">
                    Ukir Prestasi.
                  </span>
                </h1>

                <p className="max-w-2xl text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium">
                  Menjadi pusat pendidikan tinggi yang mencetak generasi pemimpin berdaya saing global sejak 1964.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-5 pt-6"
              >
                <Link
                  href="https://pmb.unmer.ac.id"
                  className="px-12 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-xl hover:bg-white transition-all duration-300 flex items-center justify-center group shadow-[0_20px_40px_-10px_rgba(255,215,0,0.3)] hover:shadow-white/20 active:scale-95"
                >
                  Daftar Sekarang
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="px-10 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg backdrop-blur-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#FFD700]" />
                  Profil Kampus
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 hidden lg:block relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] space-y-4 shadow-xl col-span-2">
                    <GraduationCap className="w-10 h-10 text-[#FFD700]" />
                    <p className="text-white font-black text-3xl tracking-tight">Terakreditasi A (Unggul)</p>
                    <p className="text-slate-300 text-lg">Jaminan kualitas pendidikan standar nasional</p>
                </div>
                <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] space-y-3 shadow-xl">
                    <Users className="w-8 h-8 text-white" />
                    <p className="text-white font-bold text-xl">54k Alumni</p>
                    <p className="text-slate-400 text-sm">Jejaring global</p>
                </div>
                <div className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] space-y-3 shadow-xl mt-8">
                    <BookOpen className="w-8 h-8 text-white" />
                    <p className="text-white font-bold text-xl">32 Prodi</p>
                    <p className="text-slate-400 text-sm">Sesuai Kebutuhan Industri</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-3 opacity-60"
        >
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
          </div>
        </motion.div>
      </section>

      <section className="relative py-40 overflow-hidden bg-[#F8FAFC] w-full">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#001D4A]/5 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F57C00]/5 rounded-full blur-[100px] -z-0" />

        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-100 rounded-full shadow-inner">
                  <Sparkles className="w-4 h-4 text-[#F57C00]" />
                  <span className="text-[#001D4A] font-extrabold uppercase tracking-widest text-[10px]">Dampak & Dedikasi</span>
                </div>

                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                  UN<span className="text-[#F57C00]">M</span>ER <br />
                  <span className="text-slate-400 font-light italic">Dalam Angka</span>
                </h2>
              </div>

              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Bukti nyata komitmen kami dalam mencetak generasi pemimpin berkarakter dan berdaya saing global selama lebih dari setengah abad.
              </p>

              <div className="pt-6">
                <Link href="/profil" className="inline-flex items-center gap-3 text-[#001D4A] font-black text-lg group">
                  <span className="relative">
                    Pelajari Jejak Kami
                    <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(0,29,74,0.15)" }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <StatsCounter value={11000} label="Mahasiswa Aktif" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-300 group md:mt-16"
              >
                <div className="w-16 h-16 bg-orange-50 text-[#F57C00] rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <StatsCounter value={54000} label="Alumni Tersebar" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
                  <Building2 className="w-8 h-8" />
                </div>
                <StatsCounter value={9} label="Fakultas Unggulan" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-300 group md:mt-16"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
                  <BookOpen className="w-8 h-8" />
                </div>
                <StatsCounter value={32} label="Program Studi" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-white w-full overflow-hidden">
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-100 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F57C00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F57C00]"></span>
                </span>
                <span className="text-[#001D4A] font-extrabold uppercase tracking-widest text-[10px]">Update Terkini</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[#001D4A] leading-tight tracking-tighter">
                Berita & <span className="text-slate-400 font-light italic">Lensa Kampus</span>
              </h2>
            </div>
            
            <Link href="/berita" className="group flex items-center gap-3 px-8 py-4 bg-slate-50 hover:bg-[#001D4A] rounded-2xl transition-colors duration-300">
              <span className="text-[#001D4A] group-hover:text-white font-bold transition-colors">Lihat Semua</span>
              <div className="w-10 h-10 rounded-full bg-white text-[#001D4A] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors">
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {news.map((item, idx) => (
              <NewsCard key={idx} {...item} delay={idx * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#F8FAFC] w-full relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#001D4A]/[0.02] rounded-l-[10rem] -z-0" />
        
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white shadow-sm border border-slate-100 rounded-xl">
                  <Bell className="w-5 h-5 text-[#F57C00] animate-bounce" />
                  <span className="text-[#001D4A] font-black uppercase tracking-widest text-[10px]">Papan Info Resmi</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] tracking-tighter">Pengumuman <span className="text-slate-400 font-light">Penting</span></h2>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] border border-white overflow-hidden">
                <div className="divide-y divide-slate-100">
                  {announcements.map((ann, idx) => (
                    <AnnouncementItem key={idx} {...ann} delay={idx * 0.1} />
                  ))}
                </div>
                <div className="p-6 bg-slate-50/50 border-t border-slate-100">
                  <button className="w-full py-5 bg-white border border-slate-200 rounded-xl text-center font-bold text-[#001D4A] hover:bg-[#001D4A] hover:text-white hover:border-[#001D4A] transition-all duration-300 uppercase tracking-widest text-xs shadow-sm">
                    Lihat Arsip Pengumuman
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#001D4A] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute -right-10 -bottom-10 opacity-10 text-white group-hover:scale-110 transition-transform duration-700">
                    <Trophy size={200} strokeWidth={1} />
                </div>
                
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                    <Trophy className="w-8 h-8 text-[#001D4A]" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tight">Prestasi <br/>Bhirawa Anoraga</h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-medium">
                      Tinta emas gemilang mahasiswa UNMER di kancah nasional dan internasional.
                    </p>
                  </div>
                  <Link href="/prestasi" className="inline-flex items-center gap-3 text-[#FFD700] font-black text-sm uppercase tracking-widest group/link">
                    Eksplorasi Galeri
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-xl text-center space-y-8 group"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-full mx-auto flex items-center justify-center text-[#001D4A] border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <Download className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#001D4A]">E-Brosur 2026</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Informasi lengkap pendaftaran & program studi dalam satu genggaman.</p>
                </div>
                <Link href="/brosur.pdf" className="flex items-center justify-center gap-3 bg-[#F57C00] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#001D4A] transition-all shadow-lg shadow-orange-500/30 hover:shadow-blue-900/20 active:scale-95">
                  UNDUH PDF
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 bg-white w-full relative overflow-hidden text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] z-0 select-none pointer-events-none">
            <h1 className="text-[30vw] font-black leading-none">UNMER</h1>
        </div>

        <div className="w-full max-w-[90rem] mx-auto px-6 relative z-10 space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-[#FFD700]/10 rounded-3xl mx-auto flex items-center justify-center rotate-12"
          >
            <GraduationCap className="w-12 h-12 text-[#F57C00]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-[#001D4A] leading-[0.95] tracking-tighter"
          >
            Mulailah Masa Depan <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F57C00] to-orange-400">Di Sini.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Bergabunglah bersama ribuan pemimpin masa depan yang telah menemukan potensi terbaiknya di Universitas Merdeka Malang.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10"
          >
            <Link href="https://pmb.unmer.ac.id" className="w-full sm:w-auto px-16 py-7 bg-[#001D4A] text-white rounded-full font-black text-xl shadow-[0_20px_40px_-10px_rgba(0,29,74,0.3)] hover:bg-[#F57C00] hover:shadow-orange-500/30 transition-all duration-300 active:scale-95">
              Daftar Sekarang
            </Link>
            <button className="w-full sm:w-auto px-12 py-7 bg-white border-2 border-slate-100 text-[#001D4A] rounded-full font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-4 group">
              <MessageSquare className="w-6 h-6 text-[#F57C00]" />
              Tanya Admin PMB
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}