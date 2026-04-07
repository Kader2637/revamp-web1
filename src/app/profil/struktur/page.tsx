'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users, ShieldCheck, Landmark, Briefcase, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const strukturData = [
  {
    tier: 0,
    label: 'Pimpinan Universitas',
    icon: ShieldCheck,
    items: [
      { 
        nama: 'Dr. Prihat Assih, SE., M.Si., Ak., CA.', 
        jabatan: 'Rektor', 
        inisial: 'PA', 
        warna: 'bg-[#FFD700]', 
        teksWarna: 'text-[#001D4A]' 
      }
    ],
  },
  {
    tier: 1,
    label: 'Wakil Rektor',
    icon: Users,
    items: [
      { nama: 'Dr. Eng. Ir. Dani Yunuar, ST., MT.', jabatan: 'Wakil Rektor I — Akademik', inisial: 'DY', warna: 'bg-[#001D4A]', teksWarna: 'text-white' },
      { nama: 'Dr. Syamsul Bahri, SE., M.Si.', jabatan: 'Wakil Rektor II — Keuangan & SDM', inisial: 'SB', warna: 'bg-[#001D4A]', teksWarna: 'text-white' },
      { nama: 'Dr. Ana Mariani, S.Sos., M.Si.', jabatan: 'Wakil Rektor III — Kemahasiswaan', inisial: 'AM', warna: 'bg-[#001D4A]', teksWarna: 'text-white' },
    ],
  },
  {
    tier: 2,
    label: 'Dekanat Fakultas',
    icon: Landmark,
    items: [
      { nama: 'Fakultas Ekonomi & Bisnis', jabatan: 'Dekan FEB', inisial: 'FEB', warna: 'bg-slate-800', teksWarna: 'text-white' },
      { nama: 'Fakultas Teknologi Informasi', jabatan: 'Dekan FTI', inisial: 'FTI', warna: 'bg-slate-800', teksWarna: 'text-white' },
      { nama: 'Fakultas Teknik', jabatan: 'Dekan FT', inisial: 'FT', warna: 'bg-slate-800', teksWarna: 'text-white' },
      { nama: 'Fakultas Hukum', jabatan: 'Dekan FH', inisial: 'FH', warna: 'bg-slate-800', teksWarna: 'text-white' },
      { nama: 'Fakultas Ilmu Sosial & Politik', jabatan: 'Dekan FISIP', inisial: 'SP', warna: 'bg-slate-800', teksWarna: 'text-white' },
      { nama: 'Fakultas Psikologi', jabatan: 'Dekan FPSI', inisial: 'PS', warna: 'bg-slate-800', teksWarna: 'text-white' },
    ],
  },
  {
    tier: 3,
    label: 'Lembaga & Biro Strategis',
    icon: Briefcase,
    items: [
      { nama: 'Lembaga Penelitian & Pengabdian Masyarakat', jabatan: 'LPPM', inisial: 'LP', warna: 'bg-white', teksWarna: 'text-slate-800' },
      { nama: 'Badan Penjaminan Mutu', jabatan: 'BPM', inisial: 'BM', warna: 'bg-white', teksWarna: 'text-slate-800' },
      { nama: 'Biro Administrasi Akademik', jabatan: 'BAA', inisial: 'BA', warna: 'bg-white', teksWarna: 'text-slate-800' },
      { nama: 'UPT Teknologi Informasi & Komunikasi', jabatan: 'UPT TIK', inisial: 'TI', warna: 'bg-white', teksWarna: 'text-slate-800' },
    ],
  },
];

export default function StrukturPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <PageHeader 
        title="Struktur " 
        accent="Organisasi"
        subtitle="Sinergi kepemimpinan Universitas Merdeka Malang dalam mewujudkan tata kelola kampus yang unggul dan transparan."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'Struktur Organisasi', href: '/profil/struktur' }]} 
      />

      <section className="py-24 relative">
        {/* Visual Connector Line (Desktop Only) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[90%] bg-gradient-to-b from-[#FFD700] via-slate-200 to-transparent hidden lg:block opacity-50" />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="space-y-32">
            {strukturData.map((tier, ti) => (
              <div key={ti} className="relative space-y-12">
                
                {/* Tier Label Section */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#001D4A] relative z-20 border border-slate-100"
                  >
                    <tier.icon className="w-7 h-7" />
                  </motion.div>
                  <div className="space-y-2">
                    <h2 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">{tier.label}</h2>
                    <div className="h-1 w-16 bg-[#FFD700] mx-auto rounded-full" />
                  </div>
                </div>

                {/* Grid Items */}
                <div className={`grid gap-6 md:gap-8 items-stretch justify-center ${
                  tier.items.length === 1 ? 'max-w-md mx-auto grid-cols-1' : 
                  tier.items.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'
                }`}>
                  {tier.items.map((person, pi) => (
                    <motion.div
                      key={pi}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pi * 0.05, duration: 0.5 }}
                      whileHover={{ y: -10 }}
                      className="group relative h-full"
                    >
                      {/* Card Content */}
                      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_25px_60px_-15px_rgba(0,29,74,0.12)] transition-all duration-500 relative z-10 overflow-hidden h-full flex flex-col justify-center border-b-4 border-b-transparent group-hover:border-b-[#FFD700]">
                        
                        {/* Decorative Background Inisial */}
                        <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                           <span className="text-9xl font-black select-none">{person.inisial}</span>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-6">
                          {/* Avatar/Badge */}
                          <div className={`w-20 h-20 rounded-[1.8rem] ${person.warna} ${person.teksWarna} flex items-center justify-center text-2xl font-black shadow-lg shadow-[#00000010] transform group-hover:rotate-12 transition-all duration-500`}>
                            {person.inisial}
                          </div>

                          <div className="space-y-3">
                            <div className="inline-block px-3 py-1 bg-slate-50 rounded-lg">
                               <p className="text-[10px] font-black text-[#F57C00] uppercase tracking-[0.2em]">{person.jabatan}</p>
                            </div>
                            <h3 className="text-lg font-bold text-[#001D4A] leading-tight px-2">
                              {person.nama}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Arrow Connector */}
                {ti < strukturData.length - 1 && (
                  <div className="flex justify-center pt-10">
                    <motion.div 
                      animate={{ y: [0, 8, 0] }} 
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="text-slate-300 flex flex-col items-center"
                    >
                      <ChevronDown className="w-8 h-8 opacity-50" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="mt-20 max-w-[90rem] mx-auto px-6">
        <div className="bg-gradient-to-r from-[#001D4A] to-[#003580] rounded-[3rem] p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 space-y-6">
            <GraduationCap className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-white">Membangun Masa Depan Berbasis <span className="text-[#FFD700]">Good Governance</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Struktur ini dirancang untuk memastikan setiap kebijakan pendidikan di UNMER Malang berjalan efektif, akuntabel, dan berorientasi pada kesuksesan mahasiswa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}