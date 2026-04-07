'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  CreditCard, 
  ShieldCheck, 
  HelpCircle, 
  Download, 
  Landmark, 
  Percent, 
  Zap,
  Info,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const biayaProdi = [
  { 
    fakultas: 'Fakultas Ekonomi & Bisnis', 
    color: 'from-emerald-500 to-teal-700',
    prodi: [
      { nama: 'Manajemen', ukt: '5.500.000', spi: '10.000.000', akreditasi: 'Unggul' }, 
      { nama: 'Akuntansi', ukt: '5.500.000', spi: '10.000.000', akreditasi: 'Unggul' },
      { nama: 'Ekonomi Pembangunan', ukt: '4.800.000', spi: '7.500.000', akreditasi: 'A' }
    ] 
  },
  { 
    fakultas: 'Fakultas Teknologi Informasi', 
    color: 'from-blue-500 to-indigo-700',
    prodi: [
      { nama: 'Sistem Informasi (S1)', ukt: '6.000.000', spi: '12.500.000', akreditasi: 'A' }, 
      { nama: 'Sistem Informasi (D3)', ukt: '4.500.000', spi: '7.000.000', akreditasi: 'A' }
    ] 
  },
  { 
    fakultas: 'Fakultas Teknik', 
    color: 'from-orange-500 to-red-700',
    prodi: [
      { nama: 'Teknik Sipil', ukt: '6.000.000', spi: '12.000.000', akreditasi: 'A' }, 
      { nama: 'Teknik Mesin', ukt: '6.000.000', spi: '12.000.000', akreditasi: 'A' }, 
      { nama: 'Teknik Elektro', ukt: '6.500.000', spi: '12.000.000', akreditasi: 'B' },
      { nama: 'Arsitektur', ukt: '6.500.000', spi: '15.000.000', akreditasi: 'A' }
    ] 
  },
  { 
    fakultas: 'Fakultas Hukum', 
    color: 'from-rose-700 to-red-900',
    prodi: [
      { nama: 'Ilmu Hukum', ukt: '5.000.000', spi: '10.000.000', akreditasi: 'Unggul' }
    ] 
  },
  { 
    fakultas: 'Pascasarjana', 
    color: 'from-slate-700 to-slate-900',
    prodi: [
      { nama: 'Magister Manajemen (S2)', ukt: '7.500.000', spi: '0', akreditasi: 'A' }, 
      { nama: 'Doktor Ilmu Ekonomi (S3)', ukt: '12.000.000', spi: '0', akreditasi: 'A' }
    ] 
  },
];

export default function BiayaPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader
        title="Rincian "
        accent="Biaya Pendidikan"
        subtitle="Sistem pembiayaan transparan untuk jenjang vokasi, sarjana, hingga pascasarjana. Kami berkomitmen memberikan kualitas pendidikan terbaik dengan biaya investasi masa depan yang kompetitif."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb' }, { name: 'Biaya Pendidikan', href: '/pmb/biaya' }]}
      />

      {/* INVESTMENT INFO OVERVIEW */}
      <section className="py-24 -mt-24 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-[#001D4A] rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-20" />
              <div className="relative z-10 space-y-8">
                 <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                    Transparansi Finansial
                 </div>
                 <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic leading-tight uppercase">Investasi <br /> Masa <span className="text-[#FFD700]">Depanmu.</span></h2>
                 <p className="text-slate-400 text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                    UNMER Malang menerapkan sistem Uang Kuliah Tunggal (UKT) yang sudah mencakup seluruh biaya operasional pendidikan per semester.
                 </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                 <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center text-[#001D4A]">
                       <Percent className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-white font-black text-xs uppercase tracking-widest leading-none">Skema Cicilan</p>
                       <p className="text-slate-400 text-xs mt-1">Hingga 3x Pembayaran</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[4rem] p-12 border border-slate-100 shadow-xl flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                 <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#F57C00]">
                    <Info className="w-8 h-8" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-2xl font-black text-[#001D4A] uppercase tracking-tight">Apa itu SPI?</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                       Sumbangan Pengembangan Institusi (SPI) adalah sumbangan pembangunan yang dibayarkan satu kali saja selama masa studi pada tahun pertama.
                    </p>
                 </div>
              </div>
              <Link href="/kontak" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group hover:bg-[#FFD700] transition-all">
                 <span className="text-xs font-black text-[#001D4A] uppercase tracking-widest pl-2">Konsultasi Biaya</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>
      </section>

      {/* TUITION DIRECTORY */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-24">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
             <ScrollReveal>
                <h4 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Directory 2026/2027</h4>
                <h5 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] italic mt-4 uppercase">Katalog <span className="text-[#F57C00]">Biaya S1.</span></h5>
                <p className="text-slate-400 font-medium">Informasi resmi dana pendidikan untuk program studi jenjang Sarjana dan Diploma.</p>
             </ScrollReveal>
          </div>

          <div className="space-y-16">
            {biayaProdi.map((f, fi) => (
              <ScrollReveal key={fi} width="100%">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <div className={`h-1 w-12 bg-gradient-to-r ${f.color} rounded-full`} />
                     <h2 className="text-xl font-black text-[#001D4A] tracking-widest uppercase">{f.fakultas}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {f.prodi.map((p, pi) => (
                       <div key={pi} className="p-8 bg-[#F8FAFC] rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                          {/* Hover Accent */}
                          <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${f.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
                          
                          <div className="space-y-8">
                             <div className="flex justify-between items-start">
                                <h6 className="text-2xl font-black text-[#001D4A] group-hover:text-blue-700 transition-colors uppercase leading-tight">{p.nama}</h6>
                                <span className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[9px] font-black uppercase text-slate-400 group-hover:text-[#F57C00] transition-colors">{p.akreditasi}</span>
                             </div>

                             <div className="space-y-6">
                                <div className="space-y-1">
                                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">UKT / SEMESTER</p>
                                   <p className="text-3xl font-black text-[#001D4A] tracking-tighter italic">Rp {p.ukt}<span className="text-sm font-medium text-slate-400">,-</span></p>
                                </div>
                                
                                {p.spi !== '0' && (
                                   <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-center justify-between">
                                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">SPI (Lunas Sekali)</span>
                                      <span className="text-sm font-black text-[#F57C00]">Rp {p.spi}</span>
                                   </div>
                                )}
                             </div>
                          </div>

                          <div className="mt-10 flex items-center text-[9px] font-black uppercase tracking-[0.2em] text-[#001D4A]/30 group-hover:text-[#001D4A] transition-colors">
                             Lihat Detail Komponen <ChevronRight className="w-3 h-3 ml-2" />
                          </div>
                       </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="py-32 bg-[#F8FAFC]">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h5 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Payment Systems</h5>
                     <h6 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] italic leading-tight uppercase">Metode <br /> <span className="text-[#F57C00]">Pembayaran.</span></h6>
                  </div>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                     Lakukan pembayaran biaya pendidikan Anda dengan mudah melalui jaringan mitra perbankan resmi kami di seluruh Indonesia.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { name: 'Bank Jatim', icon: Landmark },
                       { name: 'Bank Mandiri', icon: Landmark },
                       { name: 'Bank BRI', icon: Landmark },
                       { name: 'BNI 46', icon: Landmark },
                     ].map((b, i) => (
                       <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 group hover:bg-[#001D4A] transition-all">
                          <b.icon className="w-5 h-5 text-slate-400 group-hover:text-[#FFD700]" />
                          <span className="text-sm font-black text-[#001D4A] group-hover:text-white uppercase tracking-tight">{b.name}</span>
                       </div>
                    ))}
                  </div>
               </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
               <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] p-8 rounded-bl-[4rem] flex items-center justify-center">
                     <TrendingUp className="w-8 h-8 text-[#001D4A]" />
                  </div>
                  <div className="space-y-10 relative z-10">
                     <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#001D4A] mb-8">
                        <CreditCard className="w-8 h-8" />
                     </div>
                     <h5 className="text-3xl font-serif font-black text-[#001D4A] leading-tight">Gunakan Sistem <br /> <span className="text-[#F57C00] italic">Virtual Account.</span></h5>
                     <p className="text-slate-500 font-medium leading-relaxed">
                        Kami mendukung sistem Virtual Account (VA) untuk proses identifikasi pembayaran yang lebih cepat, otomatis, dan terpercaya 24/7.
                     </p>
                     <div className="pt-8 border-t border-slate-100">
                        <button className="flex items-center gap-3 text-[#001D4A] font-black text-xs uppercase tracking-[0.3em] group/btn">
                           Unduh Panduan Bayar <Download className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                        </button>
                     </div>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* CTA SUPPORT SECTION */}
      <section className="py-32 bg-[#001D4A] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
         
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
            <ScrollReveal>
               <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight italic uppercase">Pendidikan <br /> <span className="text-[#FFD700]">Bagi Semua.</span></h2>
               <p className="text-slate-300 text-xl font-medium mt-8 leading-relaxed">
                 Butuh informasi simulasi biaya khusus atau jalur beasiswa? Tim konselor finansial kami siap menjawab pertanyaan Anda.
               </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="https://pmb.unmer.ac.id" className="px-14 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20">
                     Portal Tagihan PMB
                  </Link>
                  <Link href="/pmb/beasiswa" className="px-14 py-6 bg-white/5 border-2 border-white/20 text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                     <Award className="w-5 h-5" /> Info Beasiswa
                  </Link>
               </div>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
