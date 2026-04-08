'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Award, 
  GraduationCap, 
  Users, 
  Sparkles,
  ChevronRight,
  HandHelping,
  Star,
  Zap
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const scholarshipData = [
  { 
    name: 'KIP Kuliah (Merdeka Belajar)', 
    cakupan: 'Bebas biaya pendidikan penuh & tunjangan biaya hidup.', 
    syarat: 'Lulusan SMA/SMK 2 tahun terakhir dengan kartu KIP/KKS.', 
    kategori: 'Pemerintah',
    icon: GraduationCap,
    accent: 'border-blue-500'
  },
  { 
    name: 'Beasiswa Peringkat Rapor', 
    cakupan: 'Potongan DPP hingga 50%.', 
    syarat: 'Peringkat 1-10 di kelas XII atau rata-rata nilai ≥ 85.00.', 
    kategori: 'Internal',
    icon: Award,
    accent: 'border-yellow-500'
  },
  { 
    name: 'Beasiswa Anak Alumni', 
    cakupan: 'Potongan DPP khusus bagi putra-putri alumni UNMER.', 
    syarat: 'Bukti KK dan fotokopi ijazah alumni orang tua.', 
    kategori: 'Keluarga Besar',
    icon: Users,
    accent: 'border-red-500'
  },
  { 
    name: 'Beasiswa Hafidz Quran', 
    cakupan: 'Bebas DPP & UKT berdasarkan jumlah hafalan.', 
    syarat: 'Minimal hafal 5 Juz dan lulus tes verifikasi internal.', 
    kategori: 'Unggulan',
    icon: Sparkles,
    accent: 'border-emerald-500'
  },
  { 
    name: 'Beasiswa Mitra Instansi', 
    cakupan: 'Potongan biaya sesuai kesepakatan MoU instansi.', 
    syarat: 'Putra/putri pegawai instansi mitra resmi UNMER.', 
    kategori: 'Kerjasama',
    icon: HandHelping,
    accent: 'border-purple-500'
  },
  { 
    name: 'Prestasi Non-Akademik', 
    cakupan: 'Potongan DPP untuk medali olahraga/seni.', 
    syarat: 'Sertifikat juara min. tingkat Kota dalam 3 tahun terakhir.', 
    kategori: 'Minat Bakat',
    icon: Zap,
    accent: 'border-orange-500'
  },
];

export default function BeasiswaPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Portal"
        accent="Beasiswa"
        subtitle="Membangun masa depan tanpa batas finansial di Universitas Merdeka Malang."
        breadcrumbs={[{ name: 'PMB', href: '#' }, { name: 'Beasiswa', href: '/beasiswa' }]}
      />

      {/* --- HERO HIGHLIGHT --- */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 lg:p-20 bg-[#001D4A] rounded-[3rem] text-white"
          >
            {/* Background Moving Pattern */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -right-40 w-96 h-96 border border-white/5 rounded-full"
            />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-block px-4 py-1 border border-[#FFD700] text-[#FFD700] text-[10px] font-black uppercase tracking-[0.3em] rounded-full"
                >
                  Scholarship Gateway 2026
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter italic">
                  KULIAH <span className="text-[#FFD700]">GRATIS</span> <br /> SAMPAI LULUS.
                </h2>
                <p className="text-slate-400 font-medium max-w-md mx-auto lg:mx-0">
                  Lebih dari 1.000 kuota beasiswa disediakan tahun ini untuk mencetak lulusan Bhirawa Anoraga yang unggul.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Total Beasiswa', val: '12+', icon: Star },
                  { label: 'Penerima Aktif', val: '3.5k', icon: Users }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                    className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem]"
                  >
                    <stat.icon className="text-[#FFD700] mb-4" size={24} />
                    <p className="text-3xl font-black">{stat.val}</p>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN GRID --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-[#001D4A] tracking-tighter">DIREKTORI PROGRAM</h3>
              <p className="text-slate-500 font-medium">Pilih jalur yang sesuai dengan kualifikasi Anda.</p>
            </div>
            <div className="h-px flex-1 bg-slate-200 hidden md:block mx-8 mb-4" />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ scale }}
          >
            {scholarshipData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-white p-8 rounded-[2.5rem] border-b-4 ${item.accent} shadow-sm hover:shadow-2xl transition-all duration-500`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-[#001D4A] text-[#FFD700] rounded-xl flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-500 group-hover:bg-[#FFD700] group-hover:text-[#001D4A] transition-colors">
                    {item.kategori}
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-black text-[#001D4A] leading-tight group-hover:translate-x-2 transition-transform">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.cakupan}
                  </p>
                  
                  <div className="pt-6 mt-6 border-t border-slate-50">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Requirement</p>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed italic">
                      "{item.syarat}"
                    </p>
                  </div>
                </div>

                <Link 
                  href="https://pmb.unmer.ac.id" 
                  className="mt-8 w-full py-4 bg-slate-50 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-white transition-all"
                >
                  Daftar Sekarang <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING CTA --- */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs md:max-w-md px-6"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 ml-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <p className="text-[10px] font-black text-[#001D4A] uppercase tracking-tighter">Portal Dibuka</p>
          </div>
          <Link href="https://pmb.unmer.ac.id" className="px-6 py-3 bg-[#001D4A] text-[#FFD700] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors">
            Apply Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}