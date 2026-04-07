'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Music, 
  Dumbbell, 
  Microscope, 
  Heart, 
  ArrowRight, 
  Star, 
  ShieldCheck,
  Globe,
  Zap,
  ChevronRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

const ukmList = [
  { 
    kategori: 'Seni, Budaya & Komunikasi', 
    icon: Music,
    units: [
      { nama: 'Marching Band Wisnuwardhana', anggota: 120, prestasi: 'Grand Prix Marching Band Nasional', desc: 'Salah satu marching band tertua dan paling berprestasi di Jawa Timur.' },
      { nama: 'PSM Harmonia', anggota: 85, prestasi: 'Gold Medal International Choir Festival', desc: 'Paduan suara mahasiswa dengan spesialisasi harmoni vokal klasik dan modern.' },
      { nama: 'UKM Teater Lakon', anggota: 55, prestasi: 'Penampil Terbaik Festival Teater', desc: 'Eksplorasi seni peran, tata panggung, dan penulisan naskah kontemporer.' },
      { nama: 'UKM Musik Merdeka', anggota: 100, prestasi: 'Penyelenggara Konser Kampus', desc: 'Wadah bagi pemusik, band, dan teknisi audio visual mahasiswa.' },
    ]
  },
  { 
    kategori: 'Olahraga & Bela Diri', 
    icon: Dumbbell,
    units: [
      { nama: 'UKM Futsal & Sepak Bola', anggota: 150, prestasi: 'Juara 1 Liga Mahasiswa Malang', desc: 'Tim elite dengan fasilitas latihan standar nasional.' },
      { nama: 'UKM Basket', anggota: 95, prestasi: 'Finalis LIMA Regional', desc: 'Komunitas basket yang aktif dalam berbagai turnamen antar kampus.' },
      { nama: 'UKM Karate / Silat', anggota: 70, prestasi: 'Emas Kejurnas Mahasiswa', desc: 'Pembinaan disiplin tinggi dan prestasi dalam seni bela diri.' },
      { nama: 'UKM Voli', anggota: 80, prestasi: 'Juara Umum Turnamen Regional', desc: 'Wadah bagi atlet voli dengan program latihan intensif.' },
    ]
  },
  { 
    kategori: 'Penalaran & Pengembangan Diri', 
    icon: Microscope,
    units: [
      { nama: 'UKM Penalaran Ilmiah (KIR)', anggota: 115, prestasi: 'Finalis PIMNAS', desc: 'Pusat riset, karya tulis ilmiah, dan inovasi teknologi mahasiswa.' },
      { nama: 'UKM Robotika', anggota: 65, prestasi: 'Top 5 Kontes Robot Indonesia', desc: 'Fokus pada pengembangan otomasi, AI, dan hardware engineering.' },
      { nama: 'UKM Kewirausahaan (Kopma)', anggota: 250, prestasi: 'Koperasi Mahasiswa Terbaik', desc: 'Inkubator bisnis riil bagi mahasiswa yang ingin menjadi pengusaha.' },
      { nama: 'UKM Debat & Bahasa', anggota: 60, prestasi: 'Juara NUDC Regional', desc: 'Asah kemampuan berpikir kritis dan public speaking internasional.' },
    ]
  },
  { 
    kategori: 'Khusus & Pengabdian Masyarakat', 
    icon: ShieldCheck,
    units: [
      { nama: 'Resimen Mahasiswa (Menwa)', anggota: 110, prestasi: 'Bakti NKRI', desc: 'Unit kedisiplinan dan bela negara yang membentuk karakter kepemimpinan.' },
      { nama: 'UKM Mapala Puncak', anggota: 90, prestasi: 'Ekspedisi 7 Summits Indonesia', desc: 'Pecinta alam yang berfokus pada pendakian, konservasi, dan SAR.' },
      { nama: 'KSR-PMI Unit UNMER', anggota: 130, prestasi: 'Relawan Kemanusiaan Terbaik', desc: 'Garda terdepan dalam pelayanan kesehatan dan bantuan bencana.' },
      { nama: 'UKM Pers Mahasiswa', anggota: 75, prestasi: 'Media Kampus Paling Kreatif', desc: 'Laboratorium jurnalisme, desain grafis, dan opini mahasiswa.' },
    ]
  }
];

export default function UkmPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <PageHeader 
        title="Unit Kegiatan" 
        accent="Mahasiswa"
        subtitle="Membangun karakter Bhirawa Anoraga melalui komunitas yang dinamis, berprestasi, dan inovatif."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'UKM', href: '/ukm' }]} 
      />

      {/* DASHBOARD STATS - Clean & Modern */}
      <section className="py-12 -mt-16 relative z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,29,74,0.1)] border border-white flex flex-wrap justify-around gap-12">
            {[
              { num: '28', label: 'Unit UKM', icon: Zap, sub: 'Aktif & Berizin' },
              { num: '3.500', label: 'Mahasiswa', icon: Users, sub: 'Total Partisipasi' },
              { num: '65', label: 'Prestasi', icon: Trophy, sub: 'Tahun Terakhir' },
              { num: '0', label: 'Biaya', icon: Globe, sub: 'Pendaftaran Gratis' },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-4xl font-black text-[#001D4A] mb-1">{s.num}</p>
                <p className="text-[#F57C00] text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</p>
                <p className="text-slate-400 text-[10px] mt-1 font-medium">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-32">
          {ukmList.map((kat, ki) => (
            <div key={ki} className="space-y-12">
              {/* Category Header */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#001D4A] flex items-center justify-center text-[#FFD700] shadow-lg">
                  <kat.icon className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-black text-[#001D4A] tracking-tight">{kat.kategori}</h2>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-[#FFD700] rounded-full" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Community</span>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {kat.units.map((ukm, ui) => (
                  <motion.div
                    key={ui}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ui * 0.05 }}
                    className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,29,74,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="flex-1 space-y-5">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:bg-[#001D4A] group-hover:text-white transition-colors">
                          <Users className="w-4 h-4" />
                        </div>
                        {ukm.prestasi && (
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-100">
                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                            <span className="text-[8px] font-black text-amber-700 uppercase tracking-tighter">Top Rank</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-black text-[#001D4A] text-xl leading-tight group-hover:text-blue-700 transition-colors">
                          {ukm.nama}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                          {ukm.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 flex flex-col gap-4">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-slate-400 uppercase">Anggota</span>
                        <span className="text-[#001D4A]">{ukm.anggota} Mahasiswa</span>
                      </div>
                      {ukm.prestasi && (
                        <div className="flex items-start gap-2 bg-[#F57C00]/5 p-3 rounded-xl border border-[#F57C00]/10">
                          <Trophy className="w-3 h-3 text-[#F57C00] shrink-0 mt-0.5" />
                          <span className="text-[9px] font-bold text-[#F57C00] leading-tight uppercase tracking-tight">{ukm.prestasi}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION - Premium Dark Design */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#001D4A] rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden group">
          {/* Subtle Glow & Patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left space-y-6 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Jadilah Bagian dari <br />
                <span className="text-[#FFD700]">Generasi Berprestasi</span>
              </h2>
              <p className="text-slate-300 font-medium text-lg leading-relaxed">
                Pendaftaran Unit Kegiatan Mahasiswa dibuka setiap awal semester gasal. Pilih komunitasmu dan asah potensimu sekarang.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/kontak" className="px-10 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3">
                Hubungi Kami <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                Unduh Katalog <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}