'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Microscope, 
  Globe2, 
  ShieldCheck, 
  Scale, 
  Building2, 
  Users, 
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const masterPrograms = [
  { name: 'Magister Manajemen (S2)', icon: TrendingUp, acc: 'A', desc: 'Fokus pada strategi bisnis global dan inovasi manajemen.' },
  { name: 'Magister Hukum (S2)', icon: Scale, acc: 'A', desc: 'Pendalaman sistem hukum nasional dan internasional.' },
  { name: 'Magister Arsitektur (S2)', icon: Building2, acc: 'A', desc: 'Kajian desain arsitektur berkelanjutan dan tata kota.' },
  { name: 'Magister Akuntansi (S2)', icon: Award, acc: 'A', desc: 'Keahlian audit, perpajakan, dan pelaporan keuangan lanjut.' },
  { name: 'Magister Administrasi Publik (S2)', icon: Users, acc: 'A', desc: 'Tata kelola publik dan inovasi kebijakan pemerintah.' },
];

const doctoralPrograms = [
  { name: 'Doktor Ilmu Sosial (S3)', icon: Globe2, acc: 'A', desc: 'Riset mendalam mengenai dinamika sosial dan politik modern.' },
  { name: 'Doktor Ilmu Ekonomi (S3)', icon: Brain, acc: 'A', desc: 'Pengembangan teori ekonomi baru untuk pembangunan bangsa.' },
];

export default function PascasarjanaPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Program " 
        accent="Pascasarjana"
        subtitle="Pusat keunggulan riset dan pendidikan tingkat lanjut untuk menghasilkan pakar, ilmuwan, dan profesional yang inovatif di bidangnya."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Pascasarjana', href: '/akademik/pascasarjana' }]} 
      />

      {/* RESEARCH STATS */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -mr-40 -mt-40" />
            <div className="lg:w-2/3 space-y-8 relative z-10 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                  <Microscope className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">Research Excellence Hub</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">Membangun <span className="text-[#FFD700] italic">Intelektual Bangsa.</span></h2>
               <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                 Pascasarjana Universitas Merdeka Malang telah berpengalaman lebih dari tiga dekade dalam membimbing para pemimpin masa depan menuju puncak keilmuan tertinggi.
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 divide-x divide-white/10">
                  {[
                    { l: 'Jurnal Scopus', v: '850+' },
                    { l: 'Doktor Lulus', v: '2.400+' },
                    { l: 'Mitra Riset', v: '18+' },
                    { l: 'Dosen Profesor', v: '25+' },
                  ].map((s, i) => (
                    <div key={i} className="pl-6 first:pl-0 border-transparent">
                       <p className="text-3xl font-black text-white">{s.v}</p>
                       <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{s.l}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:w-1/3 relative z-10 hidden lg:block">
               <div className="w-full aspect-square bg-white/5 border border-white/10 rounded-[3rem] flex items-center justify-center p-12 text-center">
                  <div className="space-y-4">
                     <Award className="w-20 h-20 text-[#FFD700] mx-auto opacity-40 animate-pulse" />
                     <p className="text-white text-xl font-black uppercase tracking-tighter">Accredited A</p>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest border-t border-white/10 pt-4">BAN-PT Standard</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASTER PROGRAMS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
             <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Advanced Degrees</h3>
                <h4 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A]">Program <span className="text-[#F57C00] italic">Magister (S2).</span></h4>
             </div>
             <div className="flex gap-4">
                <div className="h-1.5 w-16 bg-[#FFD700] rounded-full" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterPrograms.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1} width="100%">
                <div className="p-12 h-full bg-[#F8FAFC] rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                       <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all transform group-hover:rotate-6">
                          <p.icon className="w-8 h-8" />
                       </div>
                       <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-green-100 italic">Accredited {p.acc}</span>
                    </div>
                    <div className="space-y-4">
                       <h5 className="text-2xl font-black text-[#001D4A] leading-tight group-hover:text-blue-700 transition-colors uppercase">{p.name}</h5>
                       <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-slate-200/50 flex items-center text-[10px] font-black uppercase tracking-widest text-[#001D4A] group-hover:gap-2 transition-all">
                     Info Pendaftaran <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORAL PROGRAMS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 -ml-32" />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20 relative z-10">
          <div className="text-center space-y-6">
             <h4 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.5em]">Highest Academic Prowess</h4>
             <h5 className="text-4xl md:text-6xl font-serif font-black text-[#001D4A]">Program <span className="text-[#F57C00]">Doktor (S3).</span></h5>
             <div className="w-20 h-1.5 bg-[#FFD700] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {doctoralPrograms.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-12 md:p-16 bg-white rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row items-center gap-12"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] shadow-inner flex items-center justify-center text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all transform group-hover:rotate-12 shrink-0">
                   <p.icon className="w-12 h-12" />
                </div>
                <div className="flex-1 space-y-6 text-center md:text-left">
                   <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <h6 className="text-3xl font-black text-[#001D4A]">{p.name}</h6>
                      <span className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100 w-fit mx-auto md:mx-0">Accredited {p.acc}</span>
                   </div>
                   <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                      {p.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-white">
         <div className="max-w-5xl mx-auto px-6 text-center space-y-12 bg-slate-900 p-24 rounded-[4.5rem] relative overflow-hidden group border border-slate-800">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
               Lanjutkan Riset & <br /> <span className="text-[#FFD700] italic">Wujudkan Inovasi.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg lg:text-xl">
               Siapkan dirimu untuk mencapai standar akademik tertinggi. Pendaftaran Program Pascasarjana UNMER Malang terbuka untuk profesional dan akademisi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
               <Link href="https://pmb.unmer.ac.id" className="px-14 py-6 bg-white text-[#001D4A] rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#FFD700] transition-all shadow-2xl">
                  Portal Pendaftaran
               </Link>
               <Link href="/kontak" className="px-14 py-6 bg-white/5 border-2 border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                  Konsultasi Program
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
