'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useMotionValue, useTransform, animate } from 'framer-motion';
import { Trophy, Medal, Award, Sparkles, Star, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

type Kategori = 'Semua' | 'Akademik' | 'Teknologi' | 'Olahraga' | 'Seni' | 'Wirausaha';

// Komponen Counter untuk Animasi Angka
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [value, count, duration, rounded]);

  return <span>{displayValue.toLocaleString()}</span>;
}

const prestasiData = [
  { judul: 'Medali Emas PIMNAS 38 Bidang PKM-KC', mahasiswa: 'Tim Robotika & AI UNMER', prodi: 'S1 Teknik Elektro, FT', tahun: '2025', tingkat: 'Nasional', penyelenggara: 'Kemendikbudristek', kategori: 'Teknologi' as Kategori, icon: Trophy, highlight: true },
  { judul: 'Juara 1 Debat Konstitusi Mahasiswa', mahasiswa: 'Tim Delegasi Fakultas Hukum', prodi: 'S1 Ilmu Hukum, FH', tahun: '2025', tingkat: 'Nasional', penyelenggara: 'Mahkamah Konstitusi RI', kategori: 'Akademik' as Kategori, icon: Medal, highlight: true },
  { judul: 'Best Eco-Startup - KMI Expo XV', mahasiswa: 'Bhirawa Inovasi Nusantara', prodi: 'S1 Manajemen, FEB', tahun: '2024', tingkat: 'Nasional', penyelenggara: 'Direktorat Belmawa', kategori: 'Wirausaha' as Kategori, icon: Star, highlight: true },
  { judul: 'Medali Perak Tarung Derajat POMNAS', mahasiswa: 'Dimas Aryo Pangestu', prodi: 'S1 Administrasi Publik, FISIP', tahun: '2025', tingkat: 'Nasional', penyelenggara: 'BAPOMI', kategori: 'Olahraga' as Kategori, icon: Medal, highlight: true },
  { judul: 'Gold Medal - International Choir Festival', mahasiswa: 'UKM Paduan Suara Mahasiswa', prodi: 'Berbagai Prodi', tahun: '2024', tingkat: 'Internasional', penyelenggara: 'SICF Singapore', kategori: 'Seni' as Kategori, icon: Trophy, highlight: true },
  { judul: 'Juara 2 Kontes Mobil Hemat Energi (KMHE)', mahasiswa: 'Tim Cakrawala UNMER', prodi: 'S1 Teknik Mesin, FT', tahun: '2025', tingkat: 'Nasional', penyelenggara: 'Puspresnas', kategori: 'Teknologi' as Kategori, icon: Medal, highlight: false },
  { judul: 'Best Paper Award - Economics Conference', mahasiswa: 'Nadia Salsabila', prodi: 'S1 Ekonomi Pembangunan', tahun: '2026', tingkat: 'Internasional', penyelenggara: 'ASEAN Econ Forum', kategori: 'Akademik' as Kategori, icon: Award, highlight: false },
  { judul: 'Juara 1 Lomba Fotografi PEKSIMINAS', mahasiswa: 'Arif Rahman Hakim', prodi: 'S1 Ilmu Komunikasi', tahun: '2024', tingkat: 'Nasional', penyelenggara: 'Kemendikbudristek', kategori: 'Seni' as Kategori, icon: Medal, highlight: false },
  { judul: 'Pendanaan P2MW Rp 20 Juta', mahasiswa: 'Tim Kopi Kosan', prodi: 'D3 Perbankan & Keuangan', tahun: '2025', tingkat: 'Nasional', penyelenggara: 'Kemendikbudristek', kategori: 'Wirausaha' as Kategori, icon: Award, highlight: false },
  { judul: 'Medali Perunggu Kempo Mahasiswa', mahasiswa: 'Citra Kirana', prodi: 'S1 Psikologi, FPsi', tahun: '2025', tingkat: 'Regional', penyelenggara: 'Pemprov Jatim', kategori: 'Olahraga' as Kategori, icon: Award, highlight: false },
];

const categories: Kategori[] = ['Semua', 'Akademik', 'Teknologi', 'Olahraga', 'Seni', 'Wirausaha'];

// Variants Fix (Explicitly typed as Variants to prevent Type Error)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function PrestasiPage() {
  const [aktif, setAktif] = useState<Kategori>('Semua');
  const filtered = aktif === 'Semua' ? prestasiData : prestasiData.filter(p => p.kategori === aktif);
  const highlights = prestasiData.filter(p => p.highlight);

  return (
    <div className="bg-[#FCFCFD] min-h-screen">
      <PageHeader 
        title="Galeri" 
        accent="Prestasi"
        subtitle="Merekam jejak keunggulan mahasiswa UNMER Malang di kancah nasional dan internasional. Bukti nyata kualitas Bhirawa Anoraga."
        breadcrumbs={[{ name: 'Profil', href: '#' }, { name: 'Prestasi Mahasiswa', href: '/prestasi' }]} 
      />

      {/* STATISTIK BANNER DENGAN COUNTER */}
      <section className="py-12 bg-[#FFD700] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
        <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10 relative z-10">
          {[
            { num: 250, suffix: '+', label: 'Total Penghargaan' }, 
            { num: 45, suffix: '+', label: 'Rekognisi Internasional' }, 
            { num: 12, suffix: '', label: 'Delegasi Negara' }, 
            { num: 850, suffix: '+', label: 'Mahasiswa Berprestasi' }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.5 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: false }} 
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="text-center px-4"
            >
              <p className="text-4xl md:text-6xl font-black text-[#001D4A] tracking-tighter">
                <Counter value={s.num} />{s.suffix}
              </p>
              <p className="font-bold text-[#001D4A] uppercase tracking-widest text-[10px] mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HALL OF FAME (HIGHLIGHTS) */}
      <section className="py-24 bg-[#001D4A] relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[20%] w-[1000px] h-[1000px] rounded-full border border-white/5 border-dashed"
        />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-[#FFD700] w-5 h-5" />
                <p className="text-[#FFD700] font-black uppercase tracking-[0.4em] text-xs">Hall of Fame</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Sorotan <span className="text-transparent stroke-text">Utama</span></h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {highlights.map((p, i) => {
              const isLarge = i === 0 || i === 3; 
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: false, margin: "-100px" }} 
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`${isLarge ? 'lg:col-span-3' : 'lg:col-span-2'} relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 group overflow-hidden flex flex-col justify-between min-h-[300px]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex justify-between items-start relative z-10 mb-12">
                    <div className="p-4 bg-white/10 rounded-2xl text-[#FFD700] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      <p.icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="px-4 py-2 rounded-full border border-white/20 text-xs font-black text-white uppercase tracking-widest bg-black/20 backdrop-blur-sm">
                      {p.tingkat}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className={`font-black text-white leading-tight mb-4 ${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                      {p.judul}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <p className="text-[#FFD700] font-bold">{p.mahasiswa}</p>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <p className="text-slate-400 font-medium">{p.prodi}</p>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <p className="text-white font-black">{p.tahun}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY FILTER SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] tracking-tight">Eksplorasi <span className="text-[#F57C00]">Prestasi</span></h2>
            <div className="inline-flex flex-wrap justify-center bg-slate-100 p-2 rounded-full relative">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setAktif(cat)}
                  className={`relative px-6 py-3 rounded-full text-sm font-black transition-colors z-10 ${aktif === cat ? 'text-white' : 'text-slate-500 hover:text-[#001D4A]'}`}
                >
                  {aktif === cat && (
                    <motion.div 
                      layoutId="activeTab" 
                      className="absolute inset-0 bg-[#001D4A] rounded-full -z-10 shadow-lg shadow-blue-900/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div 
                  key={p.judul} 
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  viewport={{ once: false }}
                  className="group bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-[#FFD700] hover:shadow-2xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between min-h-[280px]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-colors">
                        <p.icon size={24} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        {p.tahun}
                      </span>
                    </div>
                    <h3 className="font-black text-lg text-[#001D4A] leading-tight mb-3 group-hover:text-blue-700 transition-colors">{p.judul}</h3>
                    <p className="text-sm font-bold text-[#F57C00] mb-1">{p.mahasiswa}</p>
                    <p className="text-xs text-slate-500 font-medium">{p.prodi}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                     <p className="text-xs font-bold text-slate-400 truncate max-w-[150px]">{p.penyelenggara}</p>
                     <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#F57C00] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-slate-400 font-medium">
              Belum ada data prestasi untuk kategori ini.
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
}