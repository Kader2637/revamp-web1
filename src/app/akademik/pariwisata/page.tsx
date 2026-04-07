'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlaneTakeoff, 
  Hotel, 
  MapPin, 
  Award, 
  ChefHat, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  Utensils
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const programs = [
  {
    level: 'Program Diploma (D3)',
    color: 'border-amber-400',
    items: [
      { name: 'Perjalanan Wisata', acc: 'A', icon: PlaneTakeoff, desc: 'Manajemen tour & travel, ticketing, dan pemanduan wisata.' },
      { name: 'Perhotelan', acc: 'A', icon: Hotel, desc: 'Operasional front office, house keeping, dan food & beverage.' },
    ]
  },
  {
    level: 'Program Sarjana Terapan (D4)',
    color: 'border-orange-500',
    items: [
      { name: 'Destinasi Wisata', acc: 'B', icon: MapPin, desc: 'Perencanaan dan pengembangan kawasan wisata strategis.' },
    ]
  }
];

export default function PariwisataPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Diploma " 
        accent="Kepariwisataan"
        subtitle="Mencetak tenaga profesional di industri hospitality dan pariwisata yang memiliki etika layanan berkelas dunia dan jiwa wirausaha tinggi."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Pariwisata', href: '/akademik/pariwisata' }]} 
      />

      {/* HIGHLIGH STATS SECTION */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[4rem] p-12 lg:p-16 shadow-2xl border border-slate-100 flex flex-col md:flex-row justify-around items-center gap-12 text-center">
             <div className="space-y-2">
                <p className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Mitra Industri</p>
                <p className="text-4xl font-black text-[#001D4A]">50+ Hotel Bintang</p>
             </div>
             <div className="h-12 w-px bg-slate-100 hidden md:block" />
             <div className="space-y-2">
                <p className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Global Job Placement</p>
                <p className="text-4xl font-black text-[#001D4A]">85% Abroad</p>
             </div>
             <div className="h-12 w-px bg-slate-100 hidden md:block" />
             <div className="space-y-2">
                <p className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Kurikulum</p>
                <p className="text-4xl font-black text-[#001D4A]">Dual System</p>
             </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] -mr-40 -mt-20" />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 rounded-full border border-amber-100">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">World Class Hospitality Education</span>
             </div>
             <h3 className="text-4xl md:text-6xl font-serif font-black text-[#001D4A]"> Hospitality <span className="text-[#F57C00] italic">& Tourism Hub.</span></h3>
             <p className="text-slate-500 text-lg font-medium">
               Kurikulum Diploma Kepariwisataan UNMER Malang dirancang dengan standar internasional (ASEAN MRA-TP), membekali mahasiswa dengan kemampuan teknis dan manajerial yang unggul.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {programs.map((group, gi) => (
              <div key={gi} className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className={`h-1 w-12 bg-amber-400 rounded-full`} />
                   <h4 className="text-sm font-black text-[#001D4A] uppercase tracking-[0.4em]">{group.level}</h4>
                </div>
                <div className="grid grid-cols-1 gap-6">
                   {group.items.map((item, ii) => (
                     <ScrollReveal key={ii} delay={ii * 0.1} width="100%">
                       <div className="p-10 bg-[#F8FAFC] rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row items-center gap-8 h-full">
                         <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all transform group-hover:rotate-12 group-hover:scale-110">
                            <item.icon className="w-10 h-10" />
                         </div>
                         <div className="flex-1 space-y-3 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-3">
                               <h5 className="text-2xl font-black text-[#001D4A]">{item.name}</h5>
                               <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-green-100 h-fit">Accredited {item.acc}</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                         </div>
                         <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-amber-500 group-hover:translate-x-2 transition-all hidden md:block" />
                       </div>
                     </ScrollReveal>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h4 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Laboratorium Vokasi</h4>
                  <h5 className="text-4xl font-black text-[#001D4A]">Simulasi Kerja <span className="text-[#F57C00] italic">Standar Global.</span></h5>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Utensils, t: 'Dapur Komersial', d: 'Fasilitas praktik kuliner lengkap dengan peralatan standar chef internasional.' },
                    { icon: ChefHat, t: 'Laboratorium Pastry', d: 'Pusat pembuatan kue dan roti kualitas premium.' },
                    { icon: Hotel, t: 'Mock-up Room', d: 'Replika kamar hotel bintang 5 untuk praktik housekeeping dan tata graha.' },
                    { icon: Globe2, t: 'Biro Perjalanan', d: 'Simulasi ticketing dan reservasi menggunakan sistem biro perjalanan asli.' },
                  ].map((f, i) => (
                    <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                       <f.icon className="w-8 h-8 text-[#FFD700] mb-6 group-hover:text-[#001D4A] transition-colors" />
                       <p className="text-lg font-black text-[#001D4A] leading-tight mb-2 uppercase">{f.t}</p>
                       <p className="text-slate-500 text-xs font-medium leading-relaxed">{f.d}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative rounded-[4rem] overflow-hidden bg-[#001D4A] shadow-2xl h-[500px] flex items-center justify-center p-20 text-center group">
               <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply opacity-60 transition-opacity group-hover:opacity-40" />
               <div className="relative z-10 space-y-6">
                  <Globe2 className="w-24 h-24 text-[#FFD700] mx-auto opacity-30" />
                  <p className="text-3xl font-black text-white italic">"Hospitality is not just a job, it's a heart to serve the world."</p>
                  <p className="text-slate-300 font-bold uppercase tracking-widest text-xs border-t-2 border-[#FFD700] pt-6 inline-block">Diploma Kepariwisataan UNMER Malang</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-white">
         <div className="max-w-5xl mx-auto px-6 text-center space-y-12 bg-[#001D4A] p-24 rounded-[4.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40" />
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
               Siap Menjadi <span className="text-[#FFD700] italic">Warga Global?</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium text-lg lg:text-xl">
               Wujudkan karir internasionalmu di industri pariwisata bersama UNMER Malang. Amankan pendaftaranmu hari ini untuk masa depan gemilang.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/pmb/reguler" className="px-12 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/40">
                  Mulai Karir Pariwisata
               </Link>
               <Link href="/kontak" className="px-12 py-5 bg-white/5 border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                  Informasi Beasiswa
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
