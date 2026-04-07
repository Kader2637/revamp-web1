'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Monitor, 
  CreditCard, 
  FileEdit, 
  UploadCloud, 
  Printer, 
  Laptop,
  Landmark,
  Headphones
} from 'lucide-react';

const steps = [
  { 
    num: '01', 
    title: 'Registrasi Akun PMB', 
    desc: 'Kunjungi pmb.unmer.ac.id. Buat akun menggunakan email aktif dan nomor WhatsApp untuk mendapatkan kode OTP/Verifikasi.', 
    icon: Monitor 
  },
  { 
    num: '02', 
    title: 'Pembayaran Formulir', 
    desc: 'Bayar biaya pendaftaran (Rp 300.000) menggunakan Virtual Account (VA) yang di-generate sistem ke bank mitra.', 
    icon: CreditCard 
  },
  { 
    num: '03', 
    title: 'Pengisian Biodata', 
    desc: 'Login kembali, lengkapi data diri, asal sekolah, nama orang tua, serta pilih maksimal 2 program studi tujuan.', 
    icon: FileEdit 
  },
  { 
    num: '04', 
    title: 'Unggah Dokumen', 
    desc: 'Upload scan dokumen asli: Ijazah/SKL, Transkrip Nilai/Rapor, KTP, KK, dan Pas Foto berlatar merah.', 
    icon: UploadCloud 
  },
  { 
    num: '05', 
    title: 'Finalisasi & Cetak Kartu', 
    desc: 'Periksa kembali data Anda. Lakukan finalisasi, lalu unduh dan cetak Kartu Peserta Ujian/Pendaftaran.', 
    icon: Printer 
  },
  { 
    num: '06', 
    title: 'Ujian CBT & Hasil', 
    desc: 'Ikuti Computer Based Test (CBT) secara online atau offline sesuai jadwal. Pantau pengumuman kelulusan di dashboard.', 
    icon: Laptop 
  },
];

const bankMitra = [
  { bank: 'Bank Jatim', tipe: 'Virtual Account', status: 'Available' },
  { bank: 'Bank Mandiri', tipe: 'Virtual Account', status: 'Available' },
  { bank: 'Bank BNI', tipe: 'Virtual Account', status: 'Available' },
  { bank: 'Bank BRI', tipe: 'BRIVA', status: 'Available' },
];

export default function ProsedurPage() {
  return (
    <div className="bg-[#FCFCFD] min-h-screen font-sans">
      <PageHeader
        title="Prosedur"
        accent="Pendaftaran"
        subtitle="Sistem Penerimaan Mahasiswa Baru UNMER Malang menggunakan metode One-Day Service. Ikuti panduan teknis berikut untuk kelancaran registrasi Anda."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb' }, { name: 'Prosedur Daftar', href: '/pmb/prosedur' }]}
      />

      <section className="py-24 px-6 border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto">
          
          <div className="mb-16">
            <h2 className="text-sm font-black tracking-[0.4em] text-[#F57C00] uppercase mb-4">Registration Flow</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#001D4A] tracking-tighter">
              ALUR PENDAFTARAN <br /> <span className="text-transparent stroke-text-blue">ONLINE 2026</span>
            </h3>
          </div>

          {/* STRICT GRID / BLUEPRINT STYLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 bg-white">
            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-10 border-b border-r border-slate-200 hover:bg-[#001D4A] transition-colors duration-300 flex flex-col justify-between min-h-[320px]"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-50 border border-slate-200 text-[#001D4A] group-hover:bg-[#FFD700] group-hover:border-[#FFD700] transition-colors">
                    <s.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-5xl font-black text-slate-100 group-hover:text-white/10 transition-colors">
                    {s.num}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-black text-xl text-[#001D4A] group-hover:text-white mb-3 tracking-tight transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNICAL SUPPORT & PAYMENT GATEWAY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* PAYMENT GATEWAY */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="border border-slate-200 p-10 lg:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <Landmark className="text-[#001D4A] w-8 h-8" />
              <h3 className="text-2xl font-black text-[#001D4A] uppercase tracking-tight">Kanal Pembayaran</h3>
            </div>
            <p className="text-sm text-slate-500 font-medium mb-8">
              Pembayaran formulir dan herregistrasi menggunakan sistem Virtual Account (VA) yang terintegrasi secara *real-time* dengan portal PMB.
            </p>
            
            <div className="flex flex-col border-t border-l border-slate-200">
              {bankMitra.map((b, i) => (
                <div key={i} className="flex justify-between items-center p-5 border-b border-r border-slate-200 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-black text-[#001D4A]">{b.bank}</p>
                    <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mt-1">{b.tipe}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-mono text-xs font-bold text-slate-600">{b.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* HELPDESK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="bg-[#001D4A] text-white p-10 lg:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Headphones className="text-[#FFD700] w-8 h-8" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Admission Support</h3>
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed mb-10 max-w-md">
                Mengalami kendala saat login, gagal mendapatkan PIN VA, atau kesulitan mengunggah dokumen? Hubungi tim IT & PMB kami.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hotline / WhatsApp</span>
                  <span className="font-mono text-lg font-bold text-[#FFD700]">0811-3780-089</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Akademik</span>
                  <span className="font-mono text-lg font-bold">pmb@unmer.ac.id</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Jam Operasional</span>
                  <span className="font-mono text-sm font-bold text-slate-300">SENIN — JUMAT (08:00 - 15:30 WIB)</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link href="https://pmb.unmer.ac.id" target="_blank" className="flex items-center justify-between w-full bg-[#FFD700] text-[#001D4A] p-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-colors group">
                <span>Akses Portal PMB</span>
                <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      <style jsx>{`
        .stroke-text-blue {
          -webkit-text-stroke: 1px rgba(0, 29, 74, 0.3);
        }
      `}</style>
    </div>
  );
}