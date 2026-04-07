'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Code2, 
  Globe2, 
  Lightbulb, 
  Binary,
  ArrowRight 
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const programs = [
  {
    level: 'Program Diploma (D3)',
    color: 'border-cyan-500',
    items: [
      { name: 'Sistem Informasi', acc: 'A', icon: Database },
    ]
  },
  {
    level: 'Program Sarjana (S1)',
    color: 'border-indigo-600',
    items: [
      { name: 'Sistem Informasi', acc: 'Unggul', icon: Terminal },
    ]
  }
];

const highlights = [
  { icon: ShieldCheck, title: 'Network Security', desc: 'Laboratorium khusus keamanan jaringan dan siber standar industri.' },
  { icon: Code2, title: 'Software Dev', desc: 'Fokus pada pengembangan aplikasi web dan mobile berskala besar.' },
  { icon: Binary, title: 'AI & Data Science', desc: 'Riset pengolahan data besar dan implementasi kecerdasan buatan.' },
  { icon: Globe2, title: 'Cloud Computing', desc: 'Infrastruktur server mandiri untuk praktik arsitektur cloud.' },
];

export default function FTIPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Fakultas " 
        accent="Teknologi Informasi"
        subtitle="Mendorong batasan inovasi digital melalui pendidikan teknologi informasi yang visioner, riset terapan, dan kemitraan teknologi global."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'Teknologi Informasi', href: '/akademik/fti' }]} 
      />

      {/* HERO SECTION DECORATION */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-[#001D4A] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
            
            <div className="lg:w-2/3 space-y-6 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                <Cpu className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Center of Excellence</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight">Digital Transformation <br /> <span className="text-[#FFD700]">Starts Here.</span></h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
                FTI UNMER Malang menyediakan lingkungan belajar berbasis teknologi terkini untuk mencetak arsitek digital yang siap menghadapi era Industrial 4.0.
              </p>
            </div>
            
            <div className="lg:w-1/3 grid grid-cols-2 gap-4 relative z-10">
              {[
                { n: '1.200+', l: 'Alumni' },
                { n: '15+', l: 'Lab Modern' },
                { n: '100%', l: 'Fiber Optic' },
                { n: '24/7', l: 'Access' },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                  <p className="text-2xl font-black text-[#FFD700]">{s.n}</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Kurikulum Berbasis Industri</h3>
                <h4 className="text-4xl font-serif font-black text-[#001D4A] leading-tight flex-row flex-wrap">Program <span className="text-[#F57C00] italic">Studi FTI.</span></h4>
              </div>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Kami merancang kurikulum yang selaras dengan kebutuhan pasar global, bermitra dengan raksasa teknologi dunia.
              </p>
              <div className="space-y-4 pt-10 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#001D4A]">Teknologi Partner</p>
                <div className="flex flex-wrap gap-6 grayscale opacity-40">
                  {/* Technology Placeholder Icons */}
                  <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center font-bold">AWS</div>
                  <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center font-bold">MS</div>
                  <div className="w-10 h-10 bg-slate-200 rounded flex items-center justify-center font-bold">CISCO</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((group, gi) => (
                <div key={gi} className="space-y-8">
                  <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest border-l-4 border-slate-300 pl-4">{group.level}</h5>
                  {group.items.map((item, ii) => (
                    <ScrollReveal
                      key={ii}
                      delay={ii * 0.1}
                      width="100%"
                    >
                      <div className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#001D4A] group-hover:bg-[#FFD700] transition-colors">
                            <item.icon className="w-7 h-7" />
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg">
                            <ShieldCheck className="w-3 h-3" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Accredited {item.acc}</span>
                          </div>
                        </div>
                        <h6 className="text-2xl font-black text-[#001D4A] leading-tight group-hover:text-blue-700 transition-colors uppercase">{item.name}</h6>
                        <p className="text-slate-500 text-sm font-medium mt-4 line-clamp-3">
                          Fokus pada analisis proses bisnis, manajemen basis data, dan arsitektur sistem informasi enterprise.
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Inovasi Tiada Henti</h3>
            <h4 className="text-4xl font-serif font-black text-[#001D4A]">Fasilitas & <span className="text-[#F57C00]">Inovasi</span></h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#001D4A] mb-8 group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all">
                  <h.icon className="w-7 h-7" />
                </div>
                <h5 className="font-black text-[#001D4A] text-xl mb-4">{h.title}</h5>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 bg-[#001D4A] p-24 rounded-[4rem] relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600" />
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Code Your <span className="text-[#FFD700] italic">Destiny.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Pendaftaran FTI UNMER Malang dibuka sepanjang tahun ajaran baru. Amankan kursimu di barisan depan revolusi digital.
          </p>
          <Link href="/pmb/reguler" className="inline-flex items-center gap-4 px-12 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/40">
            Daftar Sekarang <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
