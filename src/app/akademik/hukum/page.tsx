'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  History, 
  Award, 
  ArrowRight,
  Landmark,
  Briefcase
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function HukumPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Fakultas " 
        accent="Hukum"
        subtitle="Melahirkan praktisi hukum yang berintegritas, kritis, dan profesional dalam menjunjung tinggi keadilan di tingkat nasional maupun internasional."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Hukum', href: '/akademik/hukum' }]} 
      />

      {/* HERO / OVERVIEW */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#450A0A] rounded-[3.5rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/10 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
            
            <div className="lg:w-3/5 space-y-8 relative z-10 text-center lg:text-left">
               <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/20 text-red-200 rounded-full border border-red-500/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">Center of Excellence</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight italic">Fiat Justitia <br /> <span className="text-[#FFD700]">Et Pereat Mundus.</span></h2>
               <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                  Fakultas Hukum UNMER Malang adalah salah satu pilar tertua yang konsisten mencetak hakim, jaksa, pengacara, dan birokrat ulung berintegritas tinggi.
               </p>
               <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                  {[
                    { l: 'Akreditasi', v: 'Unggul' },
                    { l: 'Total Alumni', v: '12.000+' },
                    { l: 'Partner KAI', v: 'Strategic' },
                  ].map((s, i) => (
                    <div key={i} className="space-y-1">
                       <p className="text-3xl font-black text-[#FFD700]">{s.v}</p>
                       <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{s.l}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:w-2/5 relative z-10 hidden lg:block">
               <div className="w-full aspect-[4/5] bg-red-900/40 rounded-[3rem] border border-red-500/20 flex items-center justify-center">
                  <Gavel className="w-32 h-32 text-[#FFD700] opacity-20 transform -rotate-12" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROGRAM */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
             <div className="space-y-4">
                <h3 className="text-xs font-black text-red-700 uppercase tracking-[0.4em]">Studi Sarjana Utama</h3>
                <h4 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A]">S1 Ilmu <span className="text-red-800 italic">Hukum.</span></h4>
             </div>
             <p className="text-slate-500 max-w-sm font-medium leading-relaxed italic">
               "Keadilan harus ditegakkan, walau esok langit akan runtuh." Kurikulum kami mengintegrasikan teori hukum klasik dengan praktik hukum modern.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
             {[
               { icon: Landmark, t: 'Pidana & Perdata', d: 'Mempelajari dasar hukum formil dan materiil nasional.' },
               { icon: Briefcase, t: 'Hukum Bisnis', d: 'Fokus pada hukum korporasi, kontrak, dan investasi global.' },
               { icon: History, t: 'Hukum Tata Negara', d: 'Kajian administrasi negara dan konstitusi Indonesia.' },
             ].map((f, i) => (
               <ScrollReveal key={i} delay={i * 0.1} width="100%">
                 <div className="p-10 bg-slate-50 h-full rounded-[3rem] border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-2xl transition-all group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-red-900 mb-8 transform group-hover:scale-110 transition-all">
                       <f.icon className="w-7 h-7" />
                    </div>
                    <h5 className="text-2xl font-black text-[#001D4A] mb-4 group-hover:text-red-800 transition-colors">{f.t}</h5>
                    <p className="text-slate-500 font-medium leading-relaxed">{f.d}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* FACILITIES / MOOT COURT */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="aspect-video bg-[#001D4A] rounded-[3.5rem] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-red-900/30 opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                     <div className="space-y-4">
                        <Scale className="w-16 h-16 text-[#FFD700] mx-auto" />
                        <h5 className="text-2xl font-black text-white italic">"Simul Justitia"</h5>
                        <p className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Ruang Peradilan Semu FH UNMER</p>
                     </div>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
                  <Award className="w-10 h-10 text-red-700" />
               </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
               <div className="space-y-4">
                  <h3 className="text-xs font-black text-red-700 uppercase tracking-[0.4em]">Laboratorium Hukum</h3>
                  <h4 className="text-4xl font-black text-[#001D4A]">Praktik Peradilan <span className="text-red-800 italic">Nyata.</span></h4>
               </div>
               <div className="space-y-6">
                  {[
                    { t: 'Moot Court (Peradilan Semu)', d: 'Replika ruang sidang asli untuk simulasi perkara pidana dan perdata.' },
                    { t: 'Lembaga Bantuan Hukum (LBH)', d: 'Wadah pengabdian sekaligus praktik nyata litigasi dan non-litigasi.' },
                    { t: 'Klinik Hukum Strategis', d: 'Konsultasi hukum gratis bagi masyarakat kurang mampu.' },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                       <ShieldCheck className="w-6 h-6 text-[#FFD700] shrink-0 mt-1" />
                       <div className="space-y-1">
                          <p className="text-xl font-black text-[#001D4A]">{f.t}</p>
                          <p className="text-slate-500 font-medium leading-relaxed">{f.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
         <div className="max-w-5xl mx-auto px-6 text-center space-y-12 bg-red-950 p-24 rounded-[4.5rem] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight tracking-tight">
               Siap Mengawal <br /> <span className="text-[#FFD700] italic">Keadilan Bangsa?</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto font-medium text-lg lg:text-xl">
               Daftarkan dirimu di Fakultas Hukum UNMER Malang dan jadilah garda terdepan penegakan hukum di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
               <Link href="/pmb/reguler" className="px-14 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl shadow-black/40">
                  Daftar Sekarang
               </Link>
               <Link href="/kontak" className="px-14 py-6 bg-white/5 border-2 border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                  Hubungi Admin
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
