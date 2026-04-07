'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Landmark, 
  BarChart3, 
  Globe2,
  ArrowRight 
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const programs = [
  {
    level: 'Program Diploma (D3)',
    color: 'border-emerald-500',
    items: [
      { name: 'Perbankan & Keuangan', acc: 'A', icon: Landmark },
      { name: 'Akuntansi & Perpajakan', acc: 'A', icon: BarChart3 },
    ]
  },
  {
    level: 'Program Sarjana (S1)',
    color: 'border-blue-500',
    items: [
      { name: 'Akuntansi', acc: 'Unggul', icon: BarChart3 },
      { name: 'Manajemen', acc: 'Unggul', icon: TrendingUp },
      { name: 'Ekonomi Pembangunan', acc: 'A', icon: Globe2 },
      { name: 'Ekonomi Perbankan Syariah', acc: 'B', icon: ShieldCheck },
    ]
  },
  {
    level: 'Program Pascasarjana (S2 & S3)',
    color: 'border-purple-600',
    items: [
      { name: 'Magister Manajemen (S2)', acc: 'A', icon: Award },
      { name: 'Magister Akuntansi (S2)', acc: 'A', icon: Award },
      { name: 'Doktor Ilmu Ekonomi (S3)', acc: 'A', icon: Award },
    ]
  }
];

const stats = [
  { label: 'Mahasiswa Aktif', value: '4.200+' },
  { label: 'Alumni Sukses', value: '18.000+' },
  { label: 'Mitra Industri', value: '250+' },
  { label: 'Dosen Expert', value: '85+' },
];

export default function FEBPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Fakultas " 
        accent="Ekonomi & Bisnis"
        subtitle="Mencetak pemimpin bisnis dan ekonom masa depan yang berdaya saing global, berjiwa wirausaha, dan menjunjung tinggi integritas."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Ekonomi & Bisnis', href: '/akademik/feb' }]} 
      />

      {/* OVERVIEW STATS */}
      <section className="py-20 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-[#001D4A] rounded-[3rem] p-12 shadow-2xl flex flex-wrap justify-around items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-black text-[#FFD700] tracking-tight">{s.value}</p>
                <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM DIRECTORY */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Studi Akuntansi & Manajemen</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A]">Program <span className="text-[#F57C00] italic">Unggulan.</span></h3>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed">
              Pilih program studi yang sesuai dengan passion dan aspirasi karirmu. Semua program telah terakreditasi nasional dan berafiliasi industri.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((group, gi) => (
              <div key={gi} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`h-1.5 w-16 bg-gradient-to-r ${gi === 0 ? 'from-emerald-500 to-teal-500' : gi === 1 ? 'from-blue-500 to-indigo-500' : 'from-purple-500 to-violet-600'} rounded-full`} />
                  <h4 className="text-xl font-black text-[#001D4A] uppercase tracking-widest">{group.level}</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {group.items.map((item, ii) => (
                    <ScrollReveal
                      key={ii}
                      delay={ii * 0.1}
                      width="100%"
                    >
                      <div className={`bg-[#F8FAFC] p-8 rounded-[2.5rem] border-2 border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group`}>
                        <div className="space-y-6">
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#001D4A] group-hover:bg-[#FFD700] transition-colors">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h5 className="text-lg font-black text-[#001D4A] leading-tight mb-2 group-hover:text-blue-700 transition-colors uppercase">{item.name}</h5>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg">
                              <ShieldCheck className="w-3 h-3" />
                              <span className="text-[10px] font-black uppercase tracking-widest">Akreditasi {item.acc}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / FACILITIES */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -ml-32 -mt-32" />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Fasilitas & Keunggulan</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight">Membangun Ekosistem <br /> <span className="text-[#F57C00] italic">Bisnis Riil.</span></h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Galeri Investasi (IDX)', desc: 'Pusat edukasi pasar modal bekerjasama dengan Bursa Efek Indonesia.' },
                { title: 'Entrepreneur Hub', desc: 'Inkubator bisnis untuk mendampingi startup mahasiswa dari ide hingga profit.' },
                { title: 'Mini Bank Lab', desc: 'Simulasi operasional perbankan modern dengan sistem perbankan riil.' },
                { title: 'Sertifikasi Kompetensi', desc: 'Lulusan dibekali sertifikasi BNSP, Pajak (Brevet), dan Manajemen Risiko.' },
              ].map((h, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                    <h5 className="font-black text-[#001D4A] uppercase text-xs tracking-widest">{h.title}</h5>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/fasilitas" className="inline-flex items-center gap-4 text-[#001D4A] font-black uppercase tracking-widest text-sm hover:gap-6 transition-all">
              Jelajahi Fasilitas <ArrowRight className="w-5 h-5 text-[#F57C00]" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-[#001D4A] rounded-[3rem] overflow-hidden relative shadow-2xl group">
               {/* Visual Placeholder for Campus / Lab Photo */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-[#FFD700] opacity-20" />
               </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs space-y-2">
               <p className="text-3xl font-black text-[#001D4A]">A+</p>
               <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Kualitas Pendidikan Nasional</p>
               <p className="text-slate-500 text-xs font-medium italic">"FEB UNMER Malang secara konsisten mencetak lulusan yang siap memimpin di dunia korporasi."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ENROLL */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 bg-[#F8FAFC] p-20 rounded-[4rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-bl-full" />
          <h2 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight">
            Bergabung Bersama <br /> <span className="text-[#F57C00]">Keluarga Besar FEB.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Daftarkan dirimu sekarang melalui jalur seleksi PMB Reguler atau Prestasi. Jadilah bagian dari ekonomi masa depan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pmb/reguler" className="px-10 py-5 bg-[#001D4A] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
              Mulai Pendaftaran
            </Link>
            <Link href="https://wa.me/6281230001964" className="px-10 py-5 bg-white text-[#001D4A] border-2 border-slate-100 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
              Hubungi Admin Proyek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
