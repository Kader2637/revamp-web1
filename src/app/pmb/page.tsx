'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin, 
  Zap, 
  Star, 
  Award, 
  FileText, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const admissionPaths = [
  {
    title: 'Jalur Reguler',
    desc: 'Jalur pendaftaran umum menggunakan nilai rapor atau ujian seleksi mandiri.',
    href: '/pmb/reguler',
    icon: Zap,
    color: 'bg-blue-600',
    tags: ['S1/D3', 'UMUM']
  },
  {
    title: 'Jalur Prestasi',
    desc: 'Bebas biaya pendaftaran & tanpa tes bagi pemilik prestasi akademik/non-akademik.',
    href: '/pmb/prestasi',
    icon: Star,
    color: 'bg-amber-500',
    tags: ['BEBAS TES', 'UNMAPPED']
  },
  {
    title: 'Program Beasiswa',
    desc: 'Kesempatan kuliah gratis dengan KIP-Kuliah atau beasiswa internal Yayasan.',
    href: '/pmb/beasiswa',
    icon: Award,
    color: 'bg-emerald-600',
    tags: ['KIP-K', 'FREE']
  },
  {
    title: 'Pascasarjana',
    desc: 'Lanjutkan jenjang karir akademik Anda melalui program Magister & Doktor.',
    href: '/akademik/pascasarjana',
    icon: Sparkles,
    color: 'bg-slate-800',
    tags: ['S2/S3', 'RESEARCH']
  }
];

const timeline = [
  { phase: 'Gelombang I', date: 'Feb - Mar 2026', status: 'Soon', color: 'blue' },
  { phase: 'Gelombang II', date: 'Apr - Jun 2026', status: 'Main', color: 'amber' },
  { phase: 'Gelombang III', date: 'Jul - Aug 2026', status: 'Final', color: 'red' },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Penerimaan " 
        accent="Mahasiswa Baru"
        subtitle="Mulai perjalanan akademik Anda di Universitas Merdeka Malang. Bergabunglah dengan ribuan mahasiswa kreatif dan inovatif dari seluruh Indonesia."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb' }]} 
      />

      {/* CALL TO ACTION SECTION */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="bg-[#001D4A] rounded-[4rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -mr-40 -mt-40" />
            
            <div className="lg:w-1/2 space-y-10 relative z-10 text-center lg:text-left">
               <ScrollReveal>
                  <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-widest">
                     <Sparkles className="w-4 h-4 text-[#FFD700]" />
                     Pendaftaran 2026/2027 Dibuka
                  </div>
               </ScrollReveal>
               
               <ScrollReveal delay={0.1}>
                  <h2 className="text-4xl md:text-7xl font-serif font-black text-white leading-[1.1] italic">Wujudkan <br /> <span className="text-[#FFD700]">Impianmu.</span></h2>
               </ScrollReveal>
               
               <ScrollReveal delay={0.2}>
                  <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                     Pilih jalur seleksi yang paling sesuai dengan kompetensi Anda. Kami menyediakan berbagai kemudahan akses pendidikan bagi seluruh putra-putri terbaik bangsa.
                  </p>
               </ScrollReveal>

               <ScrollReveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
                     <Link href="https://pmb.unmer.ac.id" className="px-12 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-yellow-500/20 group">
                        Portal Pendaftaran <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                     </Link>
                  </div>
               </ScrollReveal>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
               {[
                 { label: 'Beasiswa Aktif', val: '12+', sub: 'Skema bantuan biaya' },
                 { label: 'Prodi Favorit', val: '32+', sub: 'Terakreditasi BAN-PT' },
                 { label: 'Alumni Sukses', val: '60K', sub: 'Tersebar di seluruh dunia' },
                 { label: 'Rating Fasilitas', val: '4.8/5', sub: 'Modern & Nyaman' },
               ].map((s, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] text-center space-y-2 group hover:bg-[#FFD700]/5 transition-all"
                 >
                    <p className="text-4xl font-black text-[#FFD700] group-hover:scale-110 transition-transform">{s.val}</p>
                    <p className="text-white font-black text-[10px] uppercase tracking-widest">{s.label}</p>
                    <p className="text-slate-500 text-[10px] italic">{s.sub}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PATHS (BENGRID) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
             <ScrollReveal>
                <h3 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.5em]">Langkah Awal Kesuksesan</h3>
                <h4 className="text-4xl md:text-6xl font-serif font-black text-[#001D4A] mt-4 italic">Pilih Jalur <span className="text-[#F57C00]">Seleksi.</span></h4>
             </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionPaths.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1} width="100%">
                 <Link href={p.href} className="group block h-full">
                    <div className="bg-[#F8FAFC] p-10 h-full rounded-[3.5rem] border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                       {/* Subtle Background Icon */}
                       <p.icon className="absolute -bottom-10 -right-10 w-40 h-40 text-slate-100 opacity-5 group-hover:scale-150 transition-all duration-700" />
                       
                       <div className="space-y-8 relative z-10">
                          <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-6 transition-all`}>
                             <p.icon className="w-8 h-8" />
                          </div>
                          
                          <div className="space-y-4">
                             <div className="flex flex-wrap gap-2">
                                {p.tags.map((t, ti) => (
                                   <span key={ti} className="px-3 py-1 bg-white text-[9px] font-black uppercase tracking-widest rounded-lg border border-slate-100">{t}</span>
                                ))}
                             </div>
                             <h5 className="text-3xl font-black text-[#001D4A] leading-tight group-hover:text-blue-700">{p.title}</h5>
                             <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                          </div>
                       </div>

                       <div className="mt-12 flex items-center justify-between relative z-10">
                          <span className="text-xs font-black text-slate-400 group-hover:text-[#001D4A]">SELENGKAPNYA</span>
                          <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:border-transparent transition-all">
                             <ChevronRight className="w-5 h-5" />
                          </div>
                       </div>
                    </div>
                 </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK STATS & TIMELINE */}
      <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h5 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Timeline Pendaftaran</h5>
                     <h6 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] italic leading-tight">Pantau Jadwal <br /> <span className="text-[#F57C00]">Penerimaan.</span></h6>
                  </div>
                  
                  <div className="space-y-4">
                    {timeline.map((t, i) => (
                       <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between group hover:-translate-x-2 transition-all">
                          <div className="space-y-1">
                             <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.phase}</p>
                             <p className="text-2xl font-black text-[#001D4A] tracking-tight">{t.date}</p>
                          </div>
                          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                             t.color === 'blue' ? 'bg-blue-50 text-blue-700' : 
                             t.color === 'amber' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                          }`}>
                            {t.status}
                          </div>
                       </div>
                    ))}
                  </div>

                  <p className="text-slate-500 font-medium bg-white/50 p-6 rounded-3xl border border-dotted border-slate-300">
                    *Jadwal di atas adalah estimasi untuk Tahun Akademik 2026/2027. Silakan cek secara berkala untuk update pengumuman resmi.
                  </p>
               </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
               <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#001D4A] opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="relative z-10 space-y-10">
                     <div className="w-20 h-20 bg-[#FFD700] rounded-3xl flex items-center justify-center text-[#001D4A] shadow-xl shadow-yellow-500/20 mb-12">
                        <Calendar className="w-10 h-10" />
                     </div>
                     <h5 className="text-4xl font-serif font-black text-[#001D4A] leading-tight">Ingin Konsultasi Gratis <br /> Mengenai <span className="text-[#F57C00] italic">Pendaftaran?</span></h5>
                     <p className="text-slate-500 text-lg font-medium">
                        Tim Admisi kami siap membantu Anda memilih program studi yang tepat dan memberikan panduan lengkap proses pendaftaran.
                     </p>
                     
                     <div className="space-y-4 pt-6">
                        <div className="flex items-center gap-4 text-[#001D4A]">
                           <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                           <span className="font-bold">Info Beasiswa KIP-Kuliah 2026</span>
                        </div>
                        <div className="flex items-center gap-4 text-[#001D4A]">
                           <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                           <span className="font-bold">Panduan Tes Potensi Akademik</span>
                        </div>
                        <div className="flex items-center gap-4 text-[#001D4A]">
                           <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                           <span className="font-bold">Simulasi Biaya UKT & SPI</span>
                        </div>
                     </div>

                     <Link href="/kontak" className="inline-flex items-center gap-3 text-[#F57C00] font-black text-sm uppercase tracking-[0.3em] group/btn">
                        Hubungi Kami Sekarang <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                     </Link>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* RECENT GUIDES SECTION */}
      <section className="py-32 bg-white">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
            <div className="flex items-end justify-between border-b border-slate-100 pb-12">
               <div className="space-y-4">
                  <h5 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Help & Support</h5>
                  <h6 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] italic leading-tight uppercase">Pusat <span className="text-[#F57C00]">Bantuan.</span></h6>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { icon: FileText, t: 'Brosur Digital', d: 'Download katalog program studi dan rincian biaya lengkap.', btn: 'Download (PDF)' },
                 { icon: ShieldCheck, t: 'Verifikasi Akun', d: 'Panduan lengkap cara aktivasi dan verifikasi akun pendaftaran.', btn: 'Lihat Panduan' },
                 { icon: Clock, t: 'FAQ Pendaftaran', d: 'Temukan jawaban cepat untuk pertanyaan umum calon pendaftar.', btn: 'Cek Bantuan' },
               ].map((h, i) => (
                 <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="space-y-6 group">
                       <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#F57C00] transition-all">
                          <h.icon className="w-7 h-7" />
                       </div>
                       <div className="space-y-2">
                          <h6 className="text-2xl font-black text-[#001D4A] uppercase tracking-tight">{h.t}</h6>
                          <p className="text-slate-500 font-medium leading-relaxed">{h.d}</p>
                       </div>
                       <button className="text-xs font-black text-[#001D4A] uppercase tracking-[0.2em] border-b-2 border-[#FFD700] pb-1 hover:text-[#F57C00] transition-colors">{h.btn}</button>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
