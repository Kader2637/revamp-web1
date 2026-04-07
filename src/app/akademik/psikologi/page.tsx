'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  TrendingUp,
  Search,
  Briefcase
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function PsikologiPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Fakultas " 
        accent="Psikologi"
        subtitle="Mengeksplorasi potensi kemanusiaan, memahami perilaku, dan meningkatkan kualitas kesehatan mental melalui pendidikan psikologi yang saintifik dan aplikatif."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Psikologi', href: '/akademik/psikologi' }]} 
      />

      {/* HERO SECTION */}
      <section className="py-24 -mt-24 relative z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-[0_30px_80px_rgba(0,29,74,0.08)] border border-slate-100 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -mr-40 -mt-40" />
            
            <div className="lg:w-1/2 space-y-8 relative z-10">
               <div className="space-y-4">
                  <h3 className="text-xs font-black text-cyan-600 uppercase tracking-[0.5em]">Human Behavior Study</h3>
                  <h4 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight">Memahami <br /> <span className="text-cyan-700 italic">Lebih Dalam.</span></h4>
               </div>
               <p className="text-slate-500 text-lg lg:text-xl font-medium leading-relaxed">
                  Psikologi UNMER Malang membekali mahasiswa dengan kompetensi analisis perilaku, diagnostik, dan konseling untuk menjawab tantangan kesehatan mental dan produktivitas di era modern.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-6">
                  {[
                    { l: 'Akreditasi', v: 'A' },
                    { l: 'Lab Praktik', v: '6+' },
                  ].map((s, i) => (
                    <div key={i} className="space-y-2">
                       <p className="text-4xl font-black text-cyan-800 tracking-tight">{s.v}</p>
                       <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{s.l}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10 w-full">
               {[
                 { icon: Brain, t: 'Neuroscience', d: 'Kajian saraf & otak.' },
                 { icon: Users, t: 'Social Psych', d: 'Interaksi & kelompok.' },
                 { icon: TrendingUp, t: 'Industrial', d: 'Psikologi kerja.' },
                 { icon: Search, t: 'Research', d: 'Metodologi saintifik.' },
               ].map((c, i) => (
                 <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:shadow-xl hover:border-cyan-100 transition-all group flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-inner flex items-center justify-center text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white transition-all transform group-hover:rotate-12">
                       <c.icon className="w-6 h-6" />
                    </div>
                    <h5 className="font-black text-[#001D4A] uppercase text-[10px] tracking-widest">{c.t}</h5>
                    <p className="text-slate-400 text-[10px] font-medium">{c.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
             <div className="space-y-4">
                <h4 className="text-xs font-black text-cyan-600 uppercase tracking-[0.4em]">Program Unggulan</h4>
                <h5 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A]">S1 <span className="text-cyan-700 italic">Psikologi.</span></h5>
             </div>
             <div className="max-w-md text-slate-500 font-medium leading-relaxed italic border-l-4 border-cyan-100 pl-6">
               "Satu-satunya jalan untuk mengenal diri sendiri adalah dengan memahami orang lain." Kurikulum kami berbasis pada standar asosiasi psikologi nasional.
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: HeartHandshake, t: 'Konseling & Klinis', d: 'Fokus pada kesehatan mental individual dan penanganan kasus klinis dasar.' },
               { icon: Briefcase, t: 'Psikologi Industri', d: 'Analisis perilaku organisasi, rekrutmen, dan pengembangan SDM perusahaan.' },
               { icon: Award, t: 'Psikologi Pendidikan', d: 'Pengembangan potensi anak dan strategi belajar yang efektif di sekolah.' },
             ].map((f, i) => (
               <ScrollReveal key={i} delay={i * 0.1} width="100%">
                 <div className="group p-12 h-full bg-[#F8FAFC] rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-cyan-700 mb-10 group-hover:bg-cyan-700 group-hover:text-white transition-all">
                       <f.icon className="w-8 h-8" />
                    </div>
                    <h6 className="text-2xl font-black text-[#001D4A] mb-4">{f.t}</h6>
                    <p className="text-slate-500 font-medium leading-relaxed">{f.d}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h5 className="text-[11px] font-black text-cyan-600 uppercase tracking-[0.4em]">Psychology Lab</h5>
                  <h6 className="text-4xl font-black text-[#001D4A]">Fasilitas Praktik <span className="text-cyan-700 italic">Humanis.</span></h6>
               </div>
               <div className="space-y-6">
                  {[
                    { t: 'Lab Observasi Anak', d: 'Dilengkapi dengan one-way mirror untuk praktikum psikologi perkembangan.' },
                    { t: 'Unit Layanan Psikologi (ULP)', d: 'Wadah praktik konseling riil di bawah pengawasan psikolog senior.' },
                    { t: 'Lab Psikodiagnostik', d: 'Koleksi lengkap alat tes psikologi standar nasional dan internasional.' },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                       <ShieldCheck className="w-6 h-6 text-[#FFD700] shrink-0 mt-1" />
                       <div>
                          <p className="text-xl font-black text-[#001D4A] mb-1">{f.t}</p>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{f.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative rounded-[5rem] overflow-hidden bg-[#001D4A] shadow-2xl group aspect-square lg:aspect-auto h-full min-h-[500px]">
               <div className="absolute inset-0 bg-cyan-900/40 mix-blend-multiply opacity-50 transition-opacity group-hover:opacity-30" />
               <div className="absolute inset-0 flex items-center justify-center p-20 text-center">
                  <div className="space-y-8">
                     <Brain className="w-32 h-32 text-[#FFD700] mx-auto opacity-20" />
                     <p className="text-white text-3xl font-black font-serif italic">"Understanding the human mind is the greatest frontier of our time."</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative overflow-hidden bg-cyan-50 p-24 rounded-[4.5rem] border border-cyan-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight tracking-tight">
               Siap Mengabdi untuk <br /> <span className="text-cyan-700 italic">Kesehatan Mental?</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg lg:text-xl max-w-2xl mx-auto">
               Asah empatimu dan perdalam ilmumu di Fakultas Psikologi UNMER Malang. Jadilah solusi di tengah masyarakat yang kompleks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
               <Link href="/pmb/reguler" className="px-14 py-6 bg-cyan-700 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#001D4A] transition-all shadow-xl shadow-cyan-900/10 active:scale-95">
                  Daftar Sekarang
               </Link>
               <Link href="/kontak" className="px-14 py-6 bg-white text-cyan-700 border-2 border-cyan-100 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-cyan-100 transition-all">
                  Chat Konselor
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
