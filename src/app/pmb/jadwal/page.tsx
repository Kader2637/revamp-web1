'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react';

const jadwalPMB = [
  {
    gelombang: 'GELOMBANG I',
    status: 'closed',
    periode: 'FEB — MAR 2026',
    keterangan: 'Jalur Prestasi & Reguler Awal',
    timeline: [
      { label: 'Pembukaan Pendaftaran', date: '01 Feb 2026' },
      { label: 'Penutupan Pendaftaran', date: '31 Mar 2026' },
      { label: 'Pengumuman Hasil', date: '05 Apr 2026' },
    ]
  },
  {
    gelombang: 'GELOMBANG II',
    status: 'active',
    periode: 'APR — JUN 2026',
    keterangan: 'Jalur Reguler Utama',
    timeline: [
      { label: 'Pembukaan Pendaftaran', date: '06 Apr 2026' },
      { label: 'Penutupan Pendaftaran', date: '30 Jun 2026' },
      { label: 'Pengumuman Hasil', date: '05 Jul 2026' },
    ]
  },
  {
    gelombang: 'GELOMBANG III',
    status: 'upcoming',
    periode: 'JUL — AGU 2026',
    keterangan: 'Jalur Kuota Sisa & Transfer',
    timeline: [
      { label: 'Pembukaan Pendaftaran', date: '06 Jul 2026' },
      { label: 'Penutupan Pendaftaran', date: '25 Agu 2026' },
      { label: 'Pengumuman Hasil', date: '01 Sep 2026' },
    ]
  }
];

export default function JadwalPage() {
  return (
    <div className="bg-[#FCFCFD] min-h-screen font-sans">
      <PageHeader
        title="Admission"
        accent="Timeline 2026"
        subtitle="Jadwal resmi penerimaan mahasiswa baru UNMER Malang. Pastikan Anda tidak melewatkan tenggat waktu pendaftaran."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb' }, { name: 'Jadwal', href: '/pmb/jadwal' }]}
      />

      <section className="py-24 px-6 border-b border-black/5">
        <div className="max-w-[90rem] mx-auto">
          
          {/* HEADER STATUS */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-black/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] tracking-tighter mb-4">
                TAHUN AKADEMIK <br /> <span className="text-[#F57C00]">2026/2027</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-md">Sistem pendaftaran menggunakan metode One-Day Service untuk jalur tertentu. Cek status gelombang di bawah ini.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white border border-slate-200 p-4 shadow-sm">
               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
               <p className="font-mono text-sm font-bold text-[#001D4A] tracking-tight">STATUS: GELOMBANG II DIBUKA</p>
            </div>
          </div>

          {/* GRID GELOMBANG */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jadwalPMB.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative border flex flex-col justify-between transition-all duration-500 ${
                  item.status === 'active' 
                    ? 'border-[#001D4A] bg-[#001D4A] text-white shadow-2xl scale-100 lg:scale-105 z-10' 
                    : item.status === 'closed'
                    ? 'border-slate-200 bg-slate-50/50 text-slate-400 grayscale opacity-70'
                    : 'border-slate-200 bg-white text-[#001D4A] hover:border-[#FFD700]'
                }`}
              >
                {/* Bagian Atas Card */}
                <div className="p-8 md:p-10 border-b border-inherit/10">
                  <div className="flex justify-between items-center mb-12">
                    <span className="font-mono text-xs font-black tracking-[0.2em] opacity-60">
                      WAVE 0{idx + 1}
                    </span>
                    {item.status === 'active' && (
                      <span className="bg-[#FFD700] text-black px-3 py-1 text-[10px] font-black tracking-widest uppercase">Live Now</span>
                    )}
                    {item.status === 'closed' && (
                      <span className="border border-slate-300 px-3 py-1 text-[10px] font-black tracking-widest uppercase">Closed</span>
                    )}
                    {item.status === 'upcoming' && (
                      <span className="border border-slate-200 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-slate-400">Upcoming</span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
                    {item.gelombang}
                  </h3>
                  <p className={`text-sm font-bold tracking-widest uppercase ${item.status === 'active' ? 'text-[#FFD700]' : 'text-slate-500'}`}>
                    {item.periode}
                  </p>
                  <p className="mt-4 text-sm opacity-70 font-medium">{item.keterangan}</p>
                </div>

                {/* Bagian Bawah / List Tanggal */}
                <div className={`p-8 md:p-10 space-y-6 ${item.status === 'active' ? 'bg-white/5' : ''}`}>
                  {item.timeline.map((t, i) => (
                    <div key={i} className="flex flex-col gap-1 border-b border-inherit/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-50">
                        {t.label}
                      </span>
                      <span className="font-mono text-lg font-medium tracking-tight">
                        {t.date}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Tombol Action (Hanya muncul jika aktif) */}
                {item.status === 'active' && (
                  <div className="p-6 pt-0">
                    <Link href="https://pmb.unmer.ac.id" className="flex items-center justify-between w-full bg-[#FFD700] text-black p-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-colors group">
                      <span>Daftar Gelombang II</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER NOTE / ORIENTASI */}
      <section className="py-20 bg-white">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#001D4A] flex items-center justify-center shrink-0">
                <Calendar className="text-[#FFD700] w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#001D4A] uppercase tracking-tight">Orientasi Mahasiswa Baru (PKKMB)</h4>
                <p className="text-slate-500 font-medium text-sm mt-1">Wajib diikuti oleh seluruh mahasiswa baru Tahun Akademik 2026/2027.</p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="font-mono text-2xl font-black text-[#F57C00] tracking-tighter">15 — 20 SEP 2026</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Estimasi Jadwal</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}