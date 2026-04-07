'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  ArrowRight, 
  AlertCircle, 
  Zap, 
  ShieldCheck, 
  UserPlus, 
  CreditCard, 
  Search, 
  Award,
  ChevronRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  { step: '01', title: 'Akses Portal PMB', desc: 'Daftar & buat akun di pmb.unmer.ac.id menggunakan email aktif Anda.', icon: UserPlus },
  { step: '02', title: 'Lengkapi Berkas', desc: 'Isi formulir data diri, pilih prodi, dan unggah syarat administrasi.', icon: FileText },
  { step: '03', title: 'Biaya Seleksi', desc: 'Lakukan pembayaran biaya pendaftaran via Virtual Account / Bank Partner.', icon: CreditCard },
  { step: '04', title: 'Ujian CBT Online', desc: 'Ikuti Computer Based Test (CBT) secara online dari mana saja.', icon: Zap },
  { step: '05', title: 'Lapor Diri', desc: 'Pengumuman kelulusan dan proses registrasi ulang mahasiswa baru.', icon: ShieldCheck },
];

const requirements = [
  { t: 'Ijazah / SKL', d: 'Legalisir Ijazah SMA/SMK/MA atau Surat Keterangan Lulus.' },
  { t: 'Rapor Terakhir', d: 'Fotokopi rapor Semester 1 sampai 5 bagi yang belum lulus.' },
  { t: 'Identitas Diri', d: 'Scan KTP (atau Akta Kelahiran) & Kartu Keluarga.' },
  { t: 'Pas Foto', d: 'Pas foto berwarna terbaru format JPG/PNG berkualitas tinggi.' },
  { t: 'Sertifikat Pendukung', d: 'Sertifikat prestasi akademik atau non-akademik (Opsional).' },
];

const waves = [
  { gelombang: 'Gelombang I', date: '1 Feb - 31 Mar 2026', announce: '10 Apr 2026', status: 'Selesai', color: 'slate' },
  { gelombang: 'Gelombang II', date: '1 Apr - 30 Jun 2026', announce: '10 Jul 2026', status: 'Aktif', color: 'orange' },
  { gelombang: 'Gelombang III', date: '1 Jul - 31 Agt 2026', announce: '10 Sep 2026', status: 'Soon', color: 'blue' },
];

export default function JalurRegulerPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader
        title="Jalur "
        accent="Reguler"
        subtitle="Dapatkan kursi Anda di salah satu universitas terbaik di Jawa Timur melalui jalur seleksi reguler berbasis raport dan ujian potensi akademik (CBT)."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb' }, { name: 'Jalur Reguler', href: '/pmb/reguler' }]}
      />

      {/* HERO / STATUS SECTION */}
      <section className="py-24 -mt-20 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-[#001D4A] rounded-[3.5rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-20" />
              <div className="space-y-6 relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full border border-[#FFD700]/30 text-[10px] font-black uppercase tracking-widest">
                    <Clock className="w-3 h-3" />
                    Status: Pendaftaran Dibuka
                 </div>
                 <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic leading-tight">Mulai Karirmu <br /> <span className="text-[#FFD700]">Bersama UNMER.</span></h2>
                 <p className="text-slate-300 text-lg max-w-xl font-medium leading-relaxed">
                    Jalur Reguler adalah akses utama bagi lulusan SMA/SMK/MA untuk bergabung dengan keluarga besar Universitas Merdeka Malang.
                 </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                 <Link href="https://pmb.unmer.ac.id" className="px-10 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-yellow-500/20 hover:scale-105 transition-all">
                    Daftar Sekarang
                 </Link>
                 <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all font-sans">
                    Unduh Panduan (PDF)
                 </button>
              </div>
           </div>

           <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-xl flex flex-col justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl mx-auto flex items-center justify-center text-[#F57C00]">
                 <AlertCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-2xl font-black text-[#001D4A]">Info Penting!</h3>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Gelombang II sedang berlangsung. Segera amankan kuota program studi pilihanmu sebelum 30 Juni 2026.
                 </p>
              </div>
              <div className="pt-4 space-y-3">
                 <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-widest">
                    <span>Sisa Kuota Gel II</span>
                    <span className="text-orange-600">32% Tersisa</span>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '68%' }} transition={{ duration: 1 }} className="h-full bg-orange-500 rounded-full" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
           <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-16">
              <ScrollReveal>
                 <div className="space-y-4">
                    <h3 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Workflow</h3>
                    <h4 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] italic leading-tight">Alur <span className="text-[#F57C00]">Pendaftaran.</span></h4>
                 </div>
              </ScrollReveal>
              <p className="text-slate-400 max-w-sm mt-8 md:mt-0 font-medium">Lakukan proses pendaftaran dengan mudah melalui 5 tahapan sistematis yang telah kami siapkan.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
              {steps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative group text-center space-y-8">
                     <div className="w-24 h-24 bg-[#F8FAFC] border-2 border-slate-100 rounded-[2.5rem] flex items-center justify-center mx-auto group-hover:bg-[#FFD700] group-hover:border-[#FFD700] transition-all duration-500 transform group-hover:rotate-12 translate-y-0 group-hover:-translate-y-4 shadow-sm group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                        <s.icon className="w-10 h-10 text-[#001D4A]" />
                        <span className="absolute -top-4 -right-4 w-10 h-10 bg-[#001D4A] text-[#FFD700] rounded-xl flex items-center justify-center font-black text-sm border-2 border-white">{s.step}</span>
                     </div>
                     <div className="space-y-3">
                        <h5 className="text-xl font-black text-[#001D4A] uppercase tracking-tight leading-tight">{s.title}</h5>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{s.desc}</p>
                     </div>
                  </div>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* REQUIREMENTS & WAVE SECTION */}
      <section className="py-32 bg-[#F8FAFC]">
         <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* REQUIREMENTS */}
            <ScrollReveal direction="right">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h3 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Checklist</h3>
                     <h4 className="text-4xl font-serif font-black text-[#001D4A] italic uppercase">Berkas <span className="text-[#F57C00]">Syarat.</span></h4>
                  </div>
                  
                  <div className="space-y-4">
                    {requirements.map((r, i) => (
                       <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 group hover:shadow-xl transition-all">
                          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                             <CheckCircle className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                             <h6 className="font-black text-[#001D4A] uppercase tracking-widest">{r.t}</h6>
                             <p className="text-slate-500 text-sm font-medium leading-relaxed">{r.d}</p>
                          </div>
                       </div>
                    ))}
                  </div>

                  <div className="bg-white/50 p-6 rounded-3xl border border-dotted border-slate-300 text-sm text-slate-500 italic">
                    *Persyaratan khusus mungkin berlaku untuk program studi tertentu (Contoh: Tidak buta warna untuk Teknik Elektro/Arsitektur).
                  </div>
               </div>
            </ScrollReveal>

            {/* WAVES / JADWAL */}
            <ScrollReveal direction="left">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h3 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Scheduling</h3>
                     <h4 className="text-4xl font-serif font-black text-[#001D4A] italic uppercase">Jadwal <span className="text-[#F57C00]">Gelombang.</span></h4>
                  </div>

                  <div className="space-y-6">
                    {waves.map((w, i) => (
                       <div key={i} className={`p-10 rounded-[3rem] border-2 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all ${
                          w.status === 'Aktif' ? 'bg-[#001D4A] border-[#FFD700] text-white shadow-2xl relative ring-8 ring-blue-50' : 'bg-white border-slate-100 text-slate-400'
                       }`}>
                          <div className="space-y-3">
                             <div className="flex items-center gap-3">
                                <h6 className={`text-2xl font-serif font-black ${w.status === 'Aktif' ? 'text-white' : 'text-[#001D4A]'}`}>{w.gelombang}</h6>
                                <span className={`px-4 py-1 text-[9px] font-black uppercase tracking-widest rounded-full ${
                                   w.status === 'Aktif' ? 'bg-[#FFD700] text-[#001D4A]' : 
                                   w.status === 'Selesai' ? 'bg-slate-50 text-slate-400' : 'bg-blue-50 text-blue-700'
                                }`}>
                                   {w.status === 'Aktif' ? 'Pendaftaran Dibuka' : w.status}
                                </span>
                             </div>
                             <div className="space-y-1">
                                <p className="text-sm font-medium flex items-center gap-2"><Clock className="w-4 h-4" /> {w.date}</p>
                                <p className={`text-xs font-black uppercase tracking-widest ${w.status === 'Aktif' ? 'opacity-60' : 'opacity-40'}`}>Pengumuman: {w.announce}</p>
                             </div>
                          </div>
                          
                          <Link href={w.status === 'Aktif' ? 'https://pmb.unmer.ac.id' : '#'} className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                             w.status === 'Aktif' ? 'bg-[#FFD700] text-[#001D4A] hover:bg-white active:scale-95' : 'bg-slate-50 text-slate-200 cursor-not-allowed'
                          }`}>
                             <ArrowRight className="w-6 h-6" />
                          </Link>
                       </div>
                    ))}
                  </div>

                  {/* FAQ PREVIEW */}
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
                     <h6 className="text-xl font-black text-[#001D4A] uppercase tracking-tight">Butuh Informasi <span className="text-[#F57C00]">UKT/SPI?</span></h6>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Cek rincian biaya pendidikan (UKT) dan Sumbangan Pengembangan Institusi (SPI) untuk semua program studi melalui direktori biaya kami.
                     </p>
                     <Link href="/pmb/biaya" className="inline-flex items-center gap-3 text-[#F57C00] text-xs font-black uppercase tracking-widest group">
                        Lihat Rincian Biaya <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                     </Link>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 bg-white text-center">
         <div className="max-w-4xl mx-auto px-6 space-y-12">
            <ScrollReveal>
               <h2 className="text-5xl md:text-7xl font-serif font-black text-[#001D4A] leading-tight italic">Be Part of <span className="text-[#F57C00]">Unmerian.</span></h2>
               <p className="text-slate-500 text-xl font-medium mt-8 leading-relaxed">
                 Bergabunglah dengan ribuan mahasiswa kreatif yang telah memilih jalur Reguler untuk mengawali masa depan gemilang di UNMER Malang.
               </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="https://pmb.unmer.ac.id" className="px-14 py-6 bg-[#001D4A] text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#F57C00] transition-all shadow-2xl shadow-blue-900/20">
                     Daftar Online Sekarang
                  </Link>
                  <Link href="/akademik" className="px-14 py-6 bg-white border-2 border-slate-100 text-[#001D4A] rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-slate-50 transition-all">
                     Eksplorasi Prodi
                  </Link>
               </div>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
