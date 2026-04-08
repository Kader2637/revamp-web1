'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Cpu, Scale, Users, Brain, HardHat, 
  Briefcase, Building2, CheckCircle2, 
  Wifi, Zap, MapPin, Search, 
  LucideIcon // Penting: Import tipe ini untuk TypeScript
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

// 1. Definisikan struktur data agar TypeScript tidak bingung
interface DetailFasilitas {
  nama: string;
  desc: string;
}

interface Fakultas {
  id: string;
  nama: string;
  alias: string;
  icon: LucideIcon; // Menggunakan tipe LucideIcon
  color: string;
  desc: string;
  detailFasilitas: DetailFasilitas[];
}

const fakultasData: Fakultas[] = [
  {
    id: 'unmer',
    nama: 'Fasilitas Terpadu UNMER',
    alias: 'Kampus Pusat',
    icon: Building2,
    color: 'from-blue-600 to-indigo-700',
    desc: 'Infrastruktur utama yang melayani seluruh sivitas akademika UNMER Malang.',
    detailFasilitas: [
      { nama: 'Graha Merdeka', desc: 'Auditorium megah berkapasitas 2.500 orang untuk wisuda dan event besar.' },
      { nama: 'Perpustakaan Pusat', desc: '4 Lantai dengan koleksi digital lengkap dan akses jurnal internasional.' },
      { nama: 'Sport Center', desc: 'Gedung olahraga indoor untuk basket, voli, dan bulu tangkis.' },
      { nama: 'Masjid Al-Hikmah', desc: 'Pusat kegiatan religi mahasiswa yang luas dan nyaman.' }
    ]
  },
  {
    id: 'fti',
    nama: 'Fakultas Teknologi Informasi',
    alias: 'FTI',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-600',
    desc: 'Pusat riset teknologi digital, keamanan siber, dan inovasi perangkat lunak.',
    detailFasilitas: [
      { nama: 'Cyber Security Lab', desc: 'Lab khusus pengujian penetrasi dan keamanan jaringan standar industri.' },
      { nama: 'Smart City & IoT Hub', desc: 'Pusat pengembangan perangkat keras dan sensor pintar.' },
      { nama: 'Mac Lab Multimedia', desc: 'Studio desain dan editing video dengan perangkat Apple terbaru.' },
      { nama: 'AI & Data Science Center', desc: 'Ruang riset pengolahan data besar dan kecerdasan buatan.' }
    ]
  },
  {
    id: 'fh',
    nama: 'Fakultas Hukum',
    alias: 'FH',
    icon: Scale,
    color: 'from-red-700 to-red-900',
    desc: 'Fasilitas simulasi hukum untuk mencetak praktisi hukum yang profesional.',
    detailFasilitas: [
      { nama: 'Ruang Peradilan Semu', desc: 'Replika ruang sidang asli untuk praktik simulasi persidangan.' },
      { nama: 'Legal Aid Center', desc: 'Pusat bantuan hukum bagi masyarakat sekaligus wadah praktik mahasiswa.' },
      { nama: 'Law Library', desc: 'Koleksi lengkap kitab undang-undang dan dokumen putusan hukum.' }
    ]
  },
  {
    id: 'fisip',
    nama: 'Fakultas Ilmu Sosial & Politik',
    alias: 'FISIP',
    icon: Users,
    color: 'from-orange-500 to-red-600',
    desc: 'Laboratorium komunikasi dan sosial untuk pengembangan soft skill mahasiswa.',
    detailFasilitas: [
      { nama: 'Radio Streaming Studio', desc: 'Studio siaran modern untuk praktik broadcast mahasiswa Ilmu Komunikasi.' },
      { nama: 'TV & Photography Lab', desc: 'Lengkap dengan green screen, kamera cinema, dan lighting set.' },
      { nama: 'Public Relations Room', desc: 'Ruang simulasi krisis dan manajemen hubungan masyarakat.' }
    ]
  },
  {
    id: 'ft',
    nama: 'Fakultas Teknik',
    alias: 'FT',
    icon: HardHat,
    color: 'from-yellow-500 to-orange-600',
    desc: 'Laboratorium teknik berskala besar untuk simulasi konstruksi dan manufaktur.',
    detailFasilitas: [
      { nama: 'Lab Beton & Struktur', desc: 'Fasilitas pengujian material konstruksi dan ketahanan bangunan.' },
      { nama: 'Studio Arsitektur', desc: 'Ruang gambar luas dengan dukungan software BIM terbaru.' },
      { nama: 'Lab Elektro & Mesin', desc: 'Pusat praktik perakitan sistem kontrol dan mesin industri.' }
    ]
  },
  {
    id: 'feb',
    nama: 'Fakultas Ekonomi & Bisnis',
    alias: 'FEB',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-700',
    desc: 'Infrastruktur penunjang ekonomi digital dan simulasi pasar modal.',
    detailFasilitas: [
      { nama: 'Galeri Investasi (IDX)', desc: 'Pusat edukasi dan transaksi saham real-time bekerja sama dengan BEI.' },
      { nama: 'Mini Bank', desc: 'Laboratorium praktik perbankan dengan sistem teller dan customer service.' },
      { nama: 'Accounting Lab', desc: 'Ruang praktik akuntansi berbasis software ERP dan Accurate.' }
    ]
  },
  {
    id: 'psikologi',
    nama: 'Fakultas Psikologi',
    alias: 'Psi',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600',
    desc: 'Laboratorium observasi dan konseling untuk pengembangan potensi manusia.',
    detailFasilitas: [
      { nama: 'Lab Observasi Anak', desc: 'Dilengkapi dengan one-way mirror untuk pengamatan perilaku.' },
      { nama: 'Ruang Konseling Individual', desc: 'Ruang privat standar klinis untuk praktik psikoterapi.' },
      { nama: 'Lab Psikodiagnostik', desc: 'Pusat administrasi dan scoring alat tes psikologi.' }
    ]
  }
];

export default function FasilitasPage() {
  // 2. Berikan tipe Generics <Fakultas | null> agar state bisa menerima objek
  const [selectedFakultas, setSelectedFakultas] = useState<Fakultas | null>(null);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <PageHeader 
        title="Fasilitas" 
        accent="Fakultas"
        subtitle="Eksplorasi infrastruktur penunjang akademik dan riset di setiap fakultas Universitas Merdeka Malang."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'Fasilitas', href: '/fasilitas' }]} 
      />

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-30">
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#001D4A] rounded-2xl flex items-center justify-center text-[#FFD700]">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[#001D4A] font-black leading-tight">Pilih Fakultas</p>
              <p className="text-slate-400 text-xs font-medium">Klik kartu untuk detail fasilitas</p>
            </div>
          </div>
          <div className="flex gap-2">
            {['Lab Terintegrasi', 'Wi-Fi 6', 'Modern Studio'].map((t) => (
              <span key={t} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fakultasData.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedFakultas(f)}
              className="cursor-pointer group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} opacity-5 rounded-bl-[5rem] group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10 space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg`}>
                  <f.icon className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-[10px] font-black text-[#F57C00] uppercase tracking-[0.3em] mb-2">{f.alias}</h3>
                  <h4 className="text-2xl font-black text-[#001D4A] leading-tight group-hover:text-blue-700 transition-colors">{f.nama}</h4>
                </div>

                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">
                  {f.desc}
                </p>

                <div className="pt-4 flex items-center text-[#001D4A] text-xs font-black uppercase tracking-widest gap-2">
                  <span>Lihat Fasilitas</span>
                  <div className="w-6 h-px bg-[#FFD700] group-hover:w-12 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFakultas && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFakultas(null)}
              className="absolute inset-0 bg-[#001D4A]/80 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className={`h-4 bg-gradient-to-r ${selectedFakultas.color}`} />
              
              <button 
                onClick={() => setSelectedFakultas(null)}
                className="absolute top-8 right-8 p-2 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-600 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                  <div className={`w-20 h-20 shrink-0 rounded-[1.5rem] bg-gradient-to-br ${selectedFakultas.color} flex items-center justify-center text-white shadow-xl`}>
                    <selectedFakultas.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#001D4A] tracking-tight mb-2">
                      {selectedFakultas.nama}
                    </h2>
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <Wifi className="w-4 h-4 text-green-500" /> Wi-Fi Connected
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <Zap className="w-4 h-4 text-yellow-500" /> Smart System Ready
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedFakultas.detailFasilitas.map((fasilitas, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-1" />
                      <div>
                        <h5 className="font-black text-[#001D4A] text-sm mb-1 group-hover:text-blue-700 transition-colors">
                          {fasilitas.nama}
                        </h5>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                          {fasilitas.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Malang, Indonesia</span>
                  </div>
                  <button 
                    onClick={() => setSelectedFakultas(null)}
                    className="px-8 py-3 bg-[#001D4A] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-colors"
                  >
                    Tutup Detail
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}