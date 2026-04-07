'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Users2, 
  Briefcase, 
  GraduationCap,
  Download,
  HelpCircle
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

const rplData = [
  {
    title: 'Transfer Mahasiswa (Pindahan)',
    subtitle: 'Internal & Eksternal PT',
    icon: Users2,
    description: 'Jalur khusus bagi mahasiswa yang ingin melanjutkan studi di UNMER Malang dari Perguruan Tinggi asal.',
    eligibility: [
      'Terdaftar di PD-DIKTI perguruan tinggi asal',
      'IPK Minimal 2.75 (Skala 4.00)',
      'Akreditasi prodi asal minimal sama dengan prodi tujuan',
      'Bukan karena putus studi (Drop Out) sanksi disiplin',
      'Maksimal konversi SKS ditentukan oleh Kaprodi'
    ],
    highlight: 'Proses konversi nilai transparan & cepat.'
  },
  {
    title: 'Rekognisi Pembelajaran Lampau',
    subtitle: 'Jalur Pengalaman Kerja / RPL',
    icon: Briefcase,
    description: 'Pengakuan atas capaian pembelajaran dari pendidikan formal, non-formal, atau pengalaman kerja menjadi SKS.',
    eligibility: [
      'Pengalaman kerja relevan minimal 2 - 5 tahun',
      'Lulusan SMA/K dengan sertifikat kompetensi',
      'Lulusan D1/D2/D3 yang ingin melanjutkan ke S1',
      'Memiliki portofolio bukti karya atau proyek',
      'Lulus asesmen mandiri dan wawancara tim ahli'
    ],
    highlight: 'Potensi lulus lebih cepat dengan klaim SKS.'
  }
];

const steps = [
  { id: '01', label: 'Konsultasi Pra-Daftar', detail: 'Menghubungi prodi tujuan untuk evaluasi awal berkas & SKS.' },
  { id: '02', label: 'Pendaftaran Online', detail: 'Melalui pmb.unmer.ac.id pilih kategori Pindahan/RPL.' },
  { id: '03', label: 'Upload Portofolio', detail: 'Mengunggah transkrip, surat pindah, atau bukti kerja.' },
  { id: '04', label: 'Uji Kompetensi', detail: 'Wawancara atau tes teknis oleh tim Asesor Prodi.' },
  { id: '05', label: 'Penetapan SKS', detail: 'Penerbitan SK Rekognisi & Penentuan mata kuliah sisa.' }
];

export default function RplPage() {
  return (
    <div className="bg-[#FCFCFD] min-h-screen font-sans">
      <PageHeader
        title="Jalur Transfer"
        accent="& Rekognisi (RPL)"
        subtitle="Transformasikan pengalaman kerja dan studi terdahulu Anda menjadi kredit akademik di Universitas Merdeka Malang."
        breadcrumbs={[{ name: 'Penerimaan', href: '#' }, { name: 'RPL & Pindahan', href: '/pmb/rpl' }]}
      />

      {/* DUAL PATHWAY SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {rplData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 p-10 relative overflow-hidden group hover:border-[#FFD700] transition-all duration-500 shadow-sm"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all">
                  <item.icon size={120} />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F57C00]">{item.subtitle}</p>
                    <h2 className="text-3xl font-black text-[#001D4A] tracking-tight">{item.title}</h2>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>

                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kriteria Kelayakan</p>
                    <div className="grid grid-cols-1 gap-3">
                      {item.eligibility.map((list, lidx) => (
                        <div key={lidx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{list}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-l-4 border-[#FFD700] flex items-center gap-4">
                    <AlertCircle size={18} className="text-[#F57C00]" />
                    <p className="text-xs font-bold text-[#001D4A] italic">{item.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS - MINIMALIST TIMELINE */}
      <section className="py-24 bg-[#001D4A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight leading-none">Alur Registrasi <br/> & <span className="text-[#FFD700]">Asesmen</span></h2>
              <p className="text-slate-400 max-w-sm text-sm">Prosedur standar pendaftaran untuk memastikan kualitas konversi SKS Anda.</p>
            </div>
            <Link href="https://pmb.unmer.ac.id" className="px-8 py-4 bg-white text-[#001D4A] font-black text-xs uppercase tracking-widest hover:bg-[#FFD700] transition-colors">
              Mulai Daftar Online
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {steps.map((s, idx) => (
              <div key={idx} className="p-8 space-y-6 hover:bg-white/5 transition-colors group">
                <span className="text-5xl font-black text-white/10 group-hover:text-[#FFD700]/20 transition-colors">{s.id}</span>
                <div className="space-y-2">
                  <h3 className="font-black text-sm uppercase tracking-wider">{s.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST & HELP */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-12">
              <h3 className="text-2xl font-black text-[#001D4A] flex items-center gap-3">
                <FileText className="text-[#F57C00]" /> Check-list Dokumen Wajib
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Transkrip Nilai Resmi (Legalized)',
                  'Surat Pindah & Keterangan Keluar PT asal',
                  'Print-out Profil Mahasiswa PD-DIKTI',
                  'Sertifikat Kompetensi (Khusus RPL)',
                  'Curriculum Vitae & Portofolio Karya',
                  'Ijazah Terakhir & SKHUN',
                  'KTP & Kartu Keluarga',
                  'Pas Foto Background Merah (Digital)'
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 border border-slate-100 hover:border-slate-300 transition-all">
                    <div className="w-2 h-2 bg-[#FFD700] shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 border border-slate-200 space-y-6">
                <div className="p-3 bg-white w-fit shadow-sm text-[#001D4A]">
                  <HelpCircle size={24} />
                </div>
                <h4 className="text-xl font-black text-[#001D4A]">Punya Kendala Konversi?</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Tim konsultan akademik kami siap membantu menghitung estimasi SKS yang bisa diakui sebelum Anda melakukan pembayaran formulir.
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Hotline Akademik</p>
                  <p className="text-sm font-black text-[#001D4A]">akademik.pusat@unmer.ac.id</p>
                  <p className="text-sm font-black text-[#001D4A]">(0341) 568395 — Ext 101</p>
                </div>
                <button className="w-full py-4 bg-[#001D4A] text-white font-black text-xs uppercase tracking-widest hover:bg-[#F57C00] transition-colors flex items-center justify-center gap-3">
                  Chat WhatsApp <ArrowRight size={14} />
                </button>
              </div>

              <div className="p-8 border-2 border-dashed border-slate-200 flex flex-col items-center text-center space-y-4">
                 <Download size={32} className="text-slate-300" />
                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Download Panduan</p>
                 <Link href="#" className="text-sm font-black text-[#001D4A] hover:text-[#F57C00] underline decoration-[#FFD700] decoration-2 underline-offset-4">
                   Pedoman RPL UNMER 2026.pdf
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}