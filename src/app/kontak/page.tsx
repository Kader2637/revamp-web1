'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  MessageSquare, 
  Globe,
  Headphones,
  Send
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const kontakUtama = [
  { 
    icon: Phone, 
    label: 'Sentral Telepon', 
    value: '(0341) 568395', 
    sub: 'Hunting: 6 Saluran Otomatis',
    action: 'tel:0341568395'
  },
  { 
    icon: MessageSquare, 
    label: 'Hotline PMB (WhatsApp)', 
    value: '0812-3000-1964', 
    sub: 'Informasi Pendaftaran Mahasiswa Baru',
    action: 'https://wa.me/6281230001964'
  },
  { 
    icon: Mail, 
    label: 'Korespondensi Email', 
    value: 'info@unmer.ac.id', 
    sub: 'Layanan Administrasi Umum',
    action: 'mailto:info@unmer.ac.id'
  },
];

const unitLayanan = [
  { unit: 'Biro Administrasi Akademik', ext: '101', email: 'baa@unmer.ac.id' },
  { unit: 'Biro Administrasi Keuangan', ext: '105', email: 'bak@unmer.ac.id' },
  { unit: 'Biro Kemahasiswaan & Alumni', ext: '108', email: 'bka@unmer.ac.id' },
  { unit: 'Kantor Urusan Internasional', ext: '112', email: 'kui@unmer.ac.id' },
  { unit: 'UPT Teknologi Informasi', ext: '201', email: 'tik@unmer.ac.id' },
  { unit: 'Lembaga Penelitian (LPPM)', ext: '302', email: 'lppm@unmer.ac.id' },
];

export default function KontakPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <PageHeader 
        title="Pusat" 
        accent="Layanan & Kontak"
        subtitle="Terhubung langsung dengan unit layanan kami untuk mendapatkan informasi akurat seputar akademik, pendaftaran, dan administrasi UNMER Malang."
        breadcrumbs={[{ name: 'Hubungi Kami', href: '/kontak' }]} 
      />

      {/* PRIMARY CONTACT CARDS */}
      <section className="py-12 -mt-16 relative z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kontakUtama.map((k, i) => (
              <motion.a
                href={k.action}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,29,74,0.05)] border border-slate-100 hover:border-[#FFD700] hover:shadow-[0_30px_60px_rgba(0,29,74,0.12)] transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all duration-500 mb-6">
                  <k.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{k.label}</p>
                  <p className="text-xl font-black text-[#001D4A] tracking-tight">{k.value}</p>
                  <p className="text-slate-500 text-xs font-medium">{k.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT: FORM SECTION */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-[#001D4A] font-black text-[10px] uppercase tracking-widest">
                  <Headphones className="w-3 h-3" /> Customer Service
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] leading-tight tracking-tight">
                  Ada Pertanyaan? <br /> <span className="text-[#F57C00]">Kirim Pesan Langsung</span>
                </h2>
                <p className="text-slate-500 font-medium text-lg max-w-md">
                  Isi formulir di bawah ini, dan tim representatif kami akan segera menghubungi Anda.
                </p>
              </div>

              <form className="space-y-6 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-sm font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Aktif</label>
                    <input type="email" placeholder="nama@email.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-sm font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Keperluan Informasi</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-sm font-bold appearance-none">
                    <option>Informasi Pendaftaran Mahasiswa (PMB)</option>
                    <option>Pertanyaan Seputar Beasiswa</option>
                    <option>Layanan Legalisir & Alumni</option>
                    <option>Kerjasama Institusi</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pesan Anda</label>
                  <textarea rows={4} placeholder="Tuliskan detail pertanyaan Anda..." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#FFD700] transition-all outline-none text-sm font-bold resize-none" />
                </div>
                <button className="w-full py-5 bg-[#001D4A] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#F57C00] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 group">
                  Kirim Sekarang <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* RIGHT: DIRECTORY & MAP */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Unit Directory Card */}
              <div className="bg-[#001D4A] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#FFD700]" /> Direktori Internal
                </h3>
                <div className="space-y-3">
                  {unitLayanan.map((u, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <div className="space-y-1">
                        <p className="text-xs font-black text-[#FFD700] uppercase tracking-wider">{u.unit}</p>
                        <p className="text-[10px] text-slate-400 font-medium">Email: {u.email}</p>
                      </div>
                      <div className="text-[10px] font-black text-white bg-white/10 px-3 py-1 rounded-lg mt-2 sm:mt-0">
                        EXT: {u.ext}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-slate-100 flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Clock className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Jam Operasional</p>
                    <p className="text-sm font-black text-[#001D4A]">Senin - Jumat</p>
                    <p className="text-xs font-medium text-slate-500">08:00 - 16:00 WIB</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-slate-100 flex items-start gap-4">
                  <div className="p-3 bg-red-50 rounded-xl text-red-600"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Lokasi Kampus</p>
                    <p className="text-sm font-black text-[#001D4A]">Malang, Jatim</p>
                    <p className="text-xs font-medium text-slate-500">Dieng No. 62-64</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm h-[300px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.181820613289!2d112.6133967757538!3d-7.980148592044815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882833075677b%3A0x6a16223b9d03c80e!2sUniversitas%20Merdeka%20Malang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Peta Lokasi UNMER"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}