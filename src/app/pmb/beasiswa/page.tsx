'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Award, 
  Globe2, 
  Users, 
  BookOpen, 
  Heart, 
  Star,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronRight,
  MapPin
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const scholarshipOptions = [
  { 
    name: 'Bidikmisi / KIP-Kuliah', 
    cakupan: 'Bebas biaya kuliah penuh (UKT) + Biaya hidup Rp 700.000/bulan selama 8 semester.', 
    syarat: 'Lulusan SMA/SMK/MA 2 tahun terakhir dengan Kartu Indonesia Pintar (KIP) atau status keluarga tidak mampu yang terverifikasi.', 
    badge: 'PEMERINTAH',
    icon: Globe2,
    color: 'from-blue-600 to-indigo-800'
  },
  { 
    name: 'Beasiswa Prestasi UNMER', 
    cakupan: 'Potongan UKT 50% selama masa studi normal (4 tahun) untuk program sarjana.', 
    syarat: 'Rata-rata nilai rapor kelas XII ≥ 85.0 atau memiliki sertifikat juara minimal tingkat kota/nasional.', 
    badge: 'UNIVERSITAS',
    icon: Star,
    color: 'from-[#F57C00] to-red-600'
  },
  { 
    name: 'Beasiswa Hafidz Quran', 
    cakupan: 'Bebas UKT 100% tanpa batas semester selama masa studi normal.', 
    syarat: 'Hafal minimal 10 Juz Al-Quran yang dibuktikan dengan sertifikat dan lulus tes seleksi internal UNMER.', 
    badge: 'UNGGULAN',
    icon: Award,
    color: 'from-emerald-500 to-teal-700'
  },
  { 
    name: 'Beasiswa Anak Alumni', 
    cakupan: 'Potongan biaya pendaftaran 100% & Potongan UKT 25% selama satu tahun pertama.', 
    syarat: 'Anak kandung alumni Universitas Merdeka Malang yang terdaftar resmi dalam IKA UNMER.', 
    badge: 'ALUMNI',
    icon: Heart,
    color: 'from-purple-600 to-violet-900'
  },
  { 
    name: 'Beasiswa Mitra Daerah', 
    cakupan: 'Biaya kuliah penuh & fasilitas asrama mahasiswa bagi mahasiswa daerah 3T.', 
    syarat: 'Khusus bagi putra-putri daerah tertinggal yang telah memiliki kerjasama resmi dengan UNMER Malang.', 
    badge: 'KERJASAMA',
    icon: MapPin,
    color: 'from-slate-700 to-slate-900'
  },
  { 
    name: 'Beasiswa Atlet Nasional', 
    cakupan: 'Bebas biaya SPP & UKT variabel sesuai dengan tingkat capaian prestasi olahraga.', 
    syarat: 'Aktif sebagai atlet daerah/nasional dengan bukti medali resmi (Emas/Perak/Perunggu).', 
    badge: 'PRESTASI',
    icon: Zap,
    color: 'from-cyan-600 to-blue-700'
  },
];

export default function BeasiswaPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader
        title="Jalur "
        accent="Beasiswa"
        subtitle="Mewujudkan mimpi pendidikan tinggi tanpa kendala finansial. UNMER Malang menawarkan berbagai skema pendanaan bagi putra-putri terbaik bangsa."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb' }, { name: 'Beasiswa', href: '/pmb/beasiswa' }]}
      />

      {/* HERO / HIGHLIGHT SECTION */}
      <section className="py-24 -mt-24 relative z-30">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-[0_40px_100px_rgba(0,29,74,0.08)] border border-slate-100 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -mr-40 -mt-20" />
               
               <div className="lg:w-3/5 space-y-10 relative z-10">
                  <ScrollReveal>
                     <div className="inline-flex items-center gap-3 px-5 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-black uppercase tracking-widest">
                        <Sparkles className="w-4 h-4" />
                        Akses Pendidikan Inklusif
                     </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.1}>
                     <h2 className="text-4xl md:text-7xl font-serif font-black text-[#001D4A] leading-[1.1] italic uppercase">Wujudkan <br /> Kuliah <span className="text-emerald-600">Tanpa Biaya.</span></h2>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.2}>
                     <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                        Kami percaya bahwa batasan biaya tidak boleh memutus rantai cita-cita. Tahun 2026 ini, UNMER Malang berkomitmen mengalokasikan kuota bantuan dana pendidikan lebih dari 1.000 beasiswa.
                     </p>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    {[
                      { icon: ShieldCheck, t: 'Proses Transparan', d: 'Seleksi dilakukan secara terbuka & berbasis data objektif.' },
                      { icon: Users, t: 'Support Komunitas', d: 'Pendampingan khusus bagi penerima beasiswa KIP-Kuliah.' },
                    ].map((f, i) => (
                      <ScrollReveal key={i} delay={0.3 + (i * 0.1)}>
                        <div className="flex gap-4">
                           <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 shrink-0">
                              <f.icon className="w-5 h-5" />
                           </div>
                           <div className="space-y-1">
                              <h6 className="font-black text-[#001D4A] text-xs uppercase tracking-widest">{f.t}</h6>
                              <p className="text-slate-400 text-xs leading-relaxed">{f.d}</p>
                           </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
               </div>

               <div className="lg:w-2/5 relative z-10 hidden lg:block">
                  <div className="relative group">
                     {/* Decorative Elements */}
                     <div className="absolute -inset-4 bg-emerald-100/50 rounded-[4rem] group-hover:scale-105 transition-all duration-700 blur-2xl" />
                     <div className="relative w-full aspect-[4/5] bg-slate-900 rounded-[3.5rem] p-12 overflow-hidden flex flex-col justify-end text-white shadow-2xl">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                           <Award className="w-64 h-64 transform rotate-12" />
                        </div>
                        <div className="space-y-4 relative z-10">
                           <p className="text-[#FFD700] text-6xl font-black italic tracking-tighter">12+</p>
                           <p className="text-sm font-black uppercase tracking-[0.3em] opacity-60">Program Beasiswa Unggulan</p>
                           <p className="text-slate-400 text-xs font-medium leading-relaxed border-t border-white/10 pt-4 mt-8">
                             Portal pendaftaran tahun akademik 2026/2027 telah terintegrasi dengan sistem seleksi beasiswa nasional.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SCHOLARSHIP GRID */}
      <section className="py-32 bg-white">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-16">
               <ScrollReveal>
                  <div className="space-y-4 text-center md:text-left">
                     <h3 className="text-xs font-black text-[#F57C00] uppercase tracking-[0.4em]">Investment for Future</h3>
                     <h4 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] italic leading-tight">Direktori <span className="text-[#F57C00]">Beasiswa.</span></h4>
                  </div>
               </ScrollReveal>
               <p className="text-slate-400 max-w-sm mt-8 md:mt-0 font-medium text-center md:text-left">Silakan jelajahi opsi bantuan dana pendidikan yang paling sesuai dengan profil dan prestasi Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {scholarshipOptions.map((b, i) => (
                 <ScrollReveal key={i} delay={i * 0.1} width="100%">
                    <div className="p-12 bg-[#F8FAFC] rounded-[4rem] border border-slate-100 h-full flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group group overflow-hidden relative">
                       {/* Color accent background */}
                       <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-5 transition-opacity blur-3xl`} />
                       
                       <div className="space-y-8 relative z-10">
                          <div className="flex justify-between items-start">
                             <div className={`w-16 h-16 bg-white rounded-2xl shadow-sm text-slate-800 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <b.icon className="w-8 h-8" />
                             </div>
                             <span className="px-4 py-1.5 bg-white text-[9px] font-black uppercase tracking-widest text-[#001D4A] rounded-full border border-slate-200">
                                {b.badge}
                             </span>
                          </div>

                          <div className="space-y-4">
                             <h5 className="text-3xl font-black text-[#001D4A] leading-tight group-hover:text-emerald-700 transition-colors">{b.name}</h5>
                             <div className="flex gap-4">
                                <div className="w-1.5 h-12 bg-emerald-100 rounded-full shrink-0" />
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{b.cakupan}</p>
                             </div>
                             <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100 text-xs font-medium text-slate-400 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-all">
                                <span className="font-black text-slate-700 block mb-1">SYARAT UTAMA:</span>
                                {b.syarat}
                             </div>
                          </div>
                       </div>

                       <div className="mt-12 pt-8 border-t border-slate-200/50 flex items-center transition-all">
                          <Link href="https://pmb.unmer.ac.id" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#001D4A] hover:text-emerald-700 transition-colors group/btn">
                             Ajukan Sekarang <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                          </Link>
                       </div>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-[#001D4A] text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
         
         <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
            <ScrollReveal>
               <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight italic">Kuliah Bagus, <br /> <span className="text-[#FFD700]">Tak Perlu Mahal.</span></h2>
               <p className="text-slate-300 text-xl font-medium mt-8 leading-relaxed">
                 Hampir 30% mahasiswa kami berkuliah dengan sokongan beasiswa. Daftarkan diri Anda dan jadilah bagian dari Unmerian berprestasi selanjutnya.
               </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="https://pmb.unmer.ac.id" className="px-14 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20">
                     Pendaftaran Beasiswa
                  </Link>
                  <Link href="/pmb/reguler" className="px-14 py-6 bg-white/5 border-2 border-white/20 text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
                     Cek Jalur Reguler
                  </Link>
               </div>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
