'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Languages, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Award,
  Settings
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const programs = [
  {
    level: 'Program Diploma (D3)',
    color: 'border-rose-400',
    items: [
      { name: 'Bahasa Inggris', acc: 'A', icon: Languages, desc: 'Keahlian komunikasi internasional dan translasi bisnis.' },
    ]
  },
  {
    level: 'Program Sarjana (S1)',
    color: 'border-purple-600',
    items: [
      { name: 'Administrasi Publik', acc: 'Unggul', icon: ShieldCheck, desc: 'Tata kelola pemerintahan dan kebijakan publik inovatif.' },
      { name: 'Ilmu Administrasi Bisnis', acc: 'A', icon: Briefcase, desc: 'Manajemen korporasi, kewirausahaan, dan strategi bisnis.' },
      { name: 'Ilmu Komunikasi', acc: 'Unggul', icon: MessageSquare, desc: 'Jurnalistik, broadcasting, dan public relations kreatif.' },
    ]
  }
];

export default function FISIPPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Fakultas " 
        accent="Ilmu Sosial & Politik"
        subtitle="Mengkaji dinamika sosial, komunikasi massa, dan tata kelola publik untuk membangun masyarakat yang lebih kritis dan demokratis."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }, { name: 'FISIP', href: '/akademik/fisip' }]} 
      />

      {/* OVERVIEW SECTION */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[3.5rem] p-12 lg:p-16 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-[11px] font-black text-[#F57C00] uppercase tracking-[0.4em]">Social Dynamics</h2>
                  <h3 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight">Pusat Kajian <span className="text-[#F57C00] italic">Sosial & Komunikasi.</span></h3>
               </div>
               <p className="text-slate-500 text-lg font-medium leading-relaxed">
                 FISIP UNMER Malang adalah rumah bagi pemikir kritis dan komunikator ulung. Dengan laboratorium broadcasting dan mini tv yang lengkap, kami siap mengawal karirmu di industri kreatif dan publik.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="space-y-1">
                     <p className="text-4xl font-black text-[#001D4A]">2.800+</p>
                     <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Mahasiswa Aktif</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-4xl font-black text-[#001D4A]">25+</p>
                     <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Tahun Pengabdian</p>
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
               {[
                 { icon: Globe2, t: 'Global Literacy', d: 'Kurikulum berbasis literasi global.' },
                 { icon: TrendingUp, t: 'Creative Hub', d: 'Fokus pada industri kreatif & media.' },
                 { icon: Users, t: 'Public Policy', d: 'Riset kebijakan publik yang kredibel.' },
                 { icon: Award, t: 'Prestige', d: 'Lulusan di berbagai posisi strategis.' },
               ].map((c, i) => (
                 <div key={i} className="p-8 bg-[#F8FAFC] rounded-[2.5rem] border border-slate-50 flex flex-col items-center text-center space-y-4 hover:bg-white hover:shadow-xl hover:border-slate-100 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#001D4A] group-hover:bg-[#FFD700] transition-all">
                       <c.icon className="w-6 h-6" />
                    </div>
                    <h5 className="font-black text-[#001D4A] uppercase text-[11px] tracking-widest">{c.t}</h5>
                    <p className="text-slate-500 text-xs font-medium leading-tight">{c.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS LISTING */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
             <div className="space-y-4">
                <h4 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Studi Sarjana & Vokasi</h4>
                <h5 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A]">Membangun <span className="text-[#F57C00] italic">Intelektualitas.</span></h5>
             </div>
             <div className="flex gap-4">
                <div className="w-4 h-4 rounded-full bg-rose-400" />
                <div className="w-4 h-4 rounded-full bg-purple-500" />
                <div className="w-4 h-4 rounded-full bg-orange-400" />
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((group, gi) => (
              <div key={gi} className="space-y-8">
                <div className="flex items-center gap-4">
                   <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Category</span>
                   <h6 className="text-[11px] font-black text-[#001D4A] uppercase tracking-[0.3em] inline-block px-4 py-1.5 bg-slate-50 rounded-full">{group.level}</h6>
                </div>
                <div className="space-y-6">
                   {group.items.map((item, ii) => (
                     <ScrollReveal
                       key={ii}
                       delay={ii * 0.1}
                       width="100%"
                     >
                       <div className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-center gap-8 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                         <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#001D4A] shadow-sm group-hover:bg-[#001D4A] group-hover:text-white transition-all transform group-hover:scale-110">
                            <item.icon className="w-8 h-8" />
                         </div>
                         <div className="flex-1 space-y-3 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-3">
                               <h6 className="text-2xl font-black text-[#001D4A]">{item.name}</h6>
                               <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-[9px] font-black uppercase tracking-widest border border-green-100 h-fit">Accredited {item.acc}</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                         </div>
                         <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-[#F57C00] group-hover:translate-x-2 transition-all hidden md:block" />
                       </div>
                     </ScrollReveal>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES / BRAGGING RIGHTS */}
      <section className="py-24 bg-[#001D4A] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
         
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
            <div className="lg:col-span-12 text-center space-y-6">
               <h4 className="text-sm font-black text-[#FFD700] uppercase tracking-[0.5em]">Modern Lab FISIP</h4>
               <h5 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">Mencetak Juara di <br /> <span className="text-[#FFD700] italic">Lini Terdepan.</span></h5>
            </div>

            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { t: 'Studio Radio Siaran', d: 'Fasilitas siaran modern dengan jangkauan digital luas untuk praktik broadcasting.' },
                 { t: 'Laboratorium Mini TV', d: 'Studio produksi video dengan standar industri penyiaran bagi mahasiswa Ilmu Komunikasi.' },
                 { t: 'Pusat Dokumentasi', d: 'Arsip kebijakan publik lengkap sebagai basis riset Administrasi Negara.' },
               ].map((f, i) => (
                 <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-4 hover:bg-white/10 transition-all text-center">
                    <p className="text-xl font-black text-[#FFD700]">{f.t}</p>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{f.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight">
               Jadilah Intelektual Muda <br /> <span className="text-[#F57C00]">Bhirawa Anoraga.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
               Ambil bagian dalam perjalanan pendidikan transformatif di FISIP UNMER Malang. Konsultasikan jalur pendaftaranmu hari ini.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/pmb/reguler" className="px-12 py-5 bg-[#001D4A] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-blue-900/10">
                  Daftar di FISIP
               </Link>
               <Link href="https://pmb.unmer.ac.id" className="px-12 py-5 bg-white text-[#001D4A] border-2 border-slate-100 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all">
                  Portal Mahasiswa
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
