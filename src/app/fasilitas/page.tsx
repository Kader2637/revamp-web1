'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Trophy, Medal, Star, Target,
  Calendar, MapPin, Search, Filter,
  ArrowUpRight, Award
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface Prestasi {
  id: string;
  judul: string;
  kategori: string;
  tingkat: string;
  tahun: string;
  pemenang: string;
  deskripsi: string;
  image: string;
}

const prestasiData: Prestasi[] = [
  {
    id: '1',
    judul: 'Juara 1 National IT Competition',
    kategori: 'Teknologi',
    tingkat: 'Nasional',
    tahun: '2025',
    pemenang: 'Tim Inovasi FTI',
    deskripsi: 'Pengembangan sistem manajemen bencana berbasis AI yang berhasil mengungguli 50 universitas lain.',
    image: 'https://images.unsplash.com/photo-1523240715639-93f8bb0a0a08?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    judul: 'Gold Medal International Moot Court',
    kategori: 'Hukum',
    tingkat: 'Internasional',
    tahun: '2024',
    pemenang: 'Delegasi FH UNMER',
    deskripsi: 'Prestasi gemilang dalam simulasi peradilan internasional di Singapura terkait hukum maritim.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    judul: 'Best Economic Research Paper',
    kategori: 'Ekonomi',
    tingkat: 'Nasional',
    tahun: '2025',
    pemenang: 'Andini Putri (FEB)',
    deskripsi: 'Penelitian mendalam mengenai digitalisasi UMKM di Jawa Timur yang dipublikasikan secara nasional.',
    image: 'https://images.unsplash.com/photo-1454165833767-027eeea160d7?auto=format&fit=crop&q=80'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function PrestasiPage() {
  const [filter, setFilter] = useState('Semua');

  const filteredData = filter === 'Semua'
    ? prestasiData
    : prestasiData.filter(p => p.kategori === filter);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <PageHeader
        title="Prestasi"
        accent="Mahasiswa"
        subtitle="Daftar pencapaian gemilang civitas akademika Universitas Merdeka Malang di tingkat regional, nasional, hingga internasional."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'Prestasi', href: '/prestasi' }]}
      />

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-30">
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#001D4A] rounded-2xl flex items-center justify-center text-[#FFD700]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[#001D4A] font-black leading-tight">Wall of Fame</p>
              <p className="text-slate-400 text-xs font-medium">Kebanggaan Universitas Merdeka</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Semua', 'Teknologi', 'Hukum', 'Ekonomi', 'Sosial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                    ? 'bg-[#001D4A] text-white shadow-lg'
                    : 'bg-slate-50 text-slate-500 border border-slate-100 hover:bg-slate-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((p) => (
              <motion.div
                key={p.id}
                layout
                variants={itemVariants}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.judul}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 bg-[#FFD700] text-[#001D4A] text-[10px] font-black uppercase tracking-tighter rounded-lg mb-3 inline-block">
                      {p.tingkat}
                    </span>
                    <h3 className="text-white font-black text-xl leading-tight line-clamp-2">
                      {p.judul}
                    </h3>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#F57C00]" />
                      <span className="text-xs font-bold">{p.tahun}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#F57C00]" />
                      <span className="text-xs font-bold">{p.kategori}</span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                    {p.deskripsi}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#001D4A]">
                        <Medal className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-[#001D4A]">{p.pemenang}</span>
                    </div>
                    <button className="p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#001D4A] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 font-bold">Tidak ada data prestasi untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}