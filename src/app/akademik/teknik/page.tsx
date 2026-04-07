'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Zap, 
  Cog, 
  Compass, 
  Factory, 
  ShieldCheck, 
  HardHat, 
  ArrowRight,
  Wrench
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const programs = [
  {
    level: 'Program Sarjana (S1)',
    color: 'border-orange-500',
    items: [
      { name: 'Teknik Sipil', acc: 'Unggul', icon: Building2, desc: 'Perencanaan dan konstruksi infrastruktur modern.' },
      { name: 'Teknik Elektro', acc: 'A', icon: Zap, desc: 'Sistem tenaga listrik, elektronika, dan kontrol.' },
      { name: 'Teknik Mesin', acc: 'B', icon: Cog, desc: 'Konversi energi dan manufaktur otomotif/alat berat.' },
      { name: 'Teknik Arsitektur', acc: 'A', icon: Compass, desc: 'Desain bangunan estetis dan berkelanjutan.' },
      { name: 'Teknik Industri', acc: 'B', icon: Factory, desc: 'Optimasi sistem produksi dan manajemen industri.' },
    ]
  }
];

export default function TeknikPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Fakultas " 
        accent="Teknik"
        subtitle="Membangun peradaban melalui inovasi teknologi teknik yang kuat, etis, dan berorientasi pada pembangunan berkelanjutan."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Teknik', href: '/akademik/teknik' }]} 
      />

      {/* STATS BORDER */}
      <section className="py-20 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-100">
             {[
               { label: 'Ratio Dosen:Mhs', v: '1:22' },
               { label: 'Lab Praktik', v: '24+' },
               { label: 'Lulusan Bekerja', v: '92%' },
               { label: 'Sertifikasi IPU', v: '80%' },
             ].map((s, i) => (
               <div key={i} className="text-center md:text-left md:pl-10 first:pl-0 border-transparent">
                  <p className="text-3xl font-black text-[#001D4A] tracking-tight">{s.v}</p>
                  <p className="text-[#F57C00] text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS LIST */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] -mr-40 -mt-40" />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
             <h3 className="text-[11px] font-black text-[#F57C00] uppercase tracking-[0.5em]">Engineering Excellence</h3>
             <h4 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A]">Membangun <span className="text-[#F57C00] italic">Masa Depan.</span></h4>
             <div className="w-16 h-1.5 bg-[#FFD700] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs[0].items.map((item, ii) => (
              <ScrollReveal
                key={ii}
                delay={ii * 0.1}
                width="100%"
              >
                <div className="group bg-[#F8FAFC] rounded-[3rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full">
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-white transition-all transform group-hover:rotate-6">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-200">
                        {item.acc}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-3xl font-black text-[#001D4A] leading-tight group-hover:text-[#F57C00] transition-colors">{item.name}</h5>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-200/50 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#001D4A] transition-all">
                     Lihat Kurikulum <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            {/* CTA CARD */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-[#001D4A] rounded-[3rem] p-10 text-white flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
               <HardHat className="w-16 h-16 text-[#FFD700]" />
               <h5 className="text-2xl font-black italic">"Engineering is the closest thing to magic that exists in the world."</h5>
               <p className="text-slate-400 text-sm font-medium">— Elon Musk</p>
               <Link href="/pmb/reguler" className="w-full py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                  Amankan Kursimu
               </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT FACILITIES */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h3 className="text-[11px] font-black text-[#F57C00] uppercase tracking-[0.5em]">Lab & Workshops</h3>
                  <h4 className="text-4xl font-black text-[#001D4A]">Fasilitas Berskala <span className="text-[#F57C00]">Industri.</span></h4>
               </div>
               
               <div className="space-y-6">
                  {[
                    { t: 'Studio Arsitektur Modern', d: 'Ruang gambar kolaboratif dengan dukungan software BIM terbaru.' },
                    { t: 'Lab Beton & Struktur', d: 'Fasilitas pengujian ketahanan material bersertifikasi nasional.' },
                    { t: 'Bengkel Teknik Mesin', d: 'Pusat perakitan dan perawatan mesin industri berat.' },
                    { t: 'Lab Arus Kuat & Lemah', d: 'Eksperimen kelistrikan terpadu dengan standar keselamatan tinggi.' },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                       <ShieldCheck className="w-6 h-6 text-[#FFD700] shrink-0 mt-1" />
                       <div>
                          <p className="text-lg font-black text-[#001D4A] mb-1">{f.t}</p>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{f.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative rounded-[4rem] overflow-hidden bg-[#001D4A] shadow-2xl group">
               <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center p-20 text-center">
                  <div className="space-y-6">
                     <p className="text-5xl md:text-7xl font-black text-[#FFD700]">A+</p>
                     <p className="text-white text-xl font-bold uppercase tracking-widest border-t-2 border-[#FFD700] pt-6 inline-block">Best Engineering Faculty</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
