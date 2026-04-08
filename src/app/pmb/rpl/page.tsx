'use client';

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Briefcase, 
  Download,
  HelpCircle,
  Zap,
  Repeat,
  ArrowUpRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

const rplData = [
  {
    title: 'Transfer Akademik',
    subtitle: 'Internal & Eksternal PT',
    icon: Repeat,
    description: 'Lanjutkan studi Anda tanpa harus mengulang dari nol. Kami menghargai setiap SKS yang telah Anda tempuh.',
    eligibility: ['Terdaftar di PD-DIKTI', 'IPK Minimal 2.75', 'Akreditasi prodi relevan', 'Bukan sanksi Drop Out'],
    highlight: 'Konversi transparan & akurat.'
  },
  {
    title: 'Rekognisi (RPL)',
    subtitle: 'Work Experience Pathway',
    icon: Briefcase,
    description: 'Ubah pengalaman kerja bertahun-tahun menjadi kredit akademik resmi. Pengalaman Anda adalah investasi.',
    eligibility: ['Min. Kerja 2 Tahun', 'Sertifikat Kompetensi', 'Portofolio Proyek', 'Lulus Asesmen Pakar'],
    highlight: 'Lulus lebih cepat & hemat biaya.'
  }
];

// Animasi Masuk (Entrance)
const fadelnUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 100 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

export default function RplPage() {
  const { scrollYProgress } = useScroll();
  // Efek parallax: saat scroll, kontainer akan sedikit bergeser
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen selection:bg-[#001D4A] selection:text-[#FFD700] overflow-x-hidden">
      <PageHeader
        title="Jalur"
        accent="RPL & Transfer"
        subtitle="Transformasikan pengalaman profesional dan studi terdahulu Anda menjadi gelar sarjana di UNMER Malang."
        breadcrumbs={[{ name: 'Penerimaan', href: '#' }, { name: 'RPL', href: '/rpl' }]}
      />

      {/* --- DUAL PATHWAY SECTION --- */}
      <section className="py-24 px-6 relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Animasi jalan terus tiap scroll
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {rplData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadelnUp}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group relative bg-white border border-slate-100 p-10 md:p-14 rounded-[4rem] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,29,74,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* Floating Icon Background */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 text-slate-50 opacity-10 group-hover:text-[#FFD700] group-hover:opacity-20 transition-all duration-700"
                >
                  <item.icon size={280} />
                </motion.div>

                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-20 h-20 bg-[#001D4A] text-[#FFD700] rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-blue-900/40">
                      <item.icon size={36} />
                    </div>
                    <Link href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#001D4A] hover:text-[#FFD700] transition-all">
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F57C00]">{item.subtitle}</span>
                    <h2 className="text-4xl font-black text-[#001D4A] tracking-tighter mt-2">{item.title}</h2>
                  </div>

                  <p className="text-slate-500 font-medium leading-relaxed max-w-md italic">
                    "{item.description}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {item.eligibility.map((list, lidx) => (
                      <motion.div 
                        key={lidx} 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 transition-all"
                      >
                        <CheckCircle2 size={16} className="text-[#001D4A] shrink-0" />
                        <span className="text-[11px] font-black text-slate-600 uppercase tracking-tighter">{list}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#001D4A] rounded-full text-white text-xs font-black italic tracking-widest shadow-lg group-hover:bg-[#F57C00] transition-colors">
                      <Zap size={16} className="text-[#FFD700] animate-pulse" />
                      {item.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- TIMELINE SECTION WITH SCROLL PARALLAX --- */}
      <section className="py-32 bg-[#001D4A] relative overflow-hidden">
        <motion.div style={{ y: yRange }} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter italic"
            >
              ALUR <span className="text-[#FFD700]">KONVERSI</span>
            </motion.h2>
            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-12 h-1 bg-[#FFD700]" 
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { id: '01', t: 'Evaluasi', d: 'Konsultasi awal dengan Prodi.' },
              { id: '02', t: 'Portal', d: 'Registrasi di pmb.unmer.ac.id' },
              { id: '03', t: 'Berkas', d: 'Upload bukti & transkrip nilai.' },
              { id: '04', t: 'Uji', d: 'Asesmen mandiri & wawancara.' },
              { id: '05', t: 'SK', d: 'Penerbitan SK Rekognisi SKS.' }
            ].map((s, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1, type: 'spring' }}
                className="group p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] hover:bg-white transition-all duration-500"
              >
                <span className="text-6xl font-black text-white/10 group-hover:text-[#001D4A]/10 transition-colors block mb-6">{s.id}</span>
                <h3 className="text-white group-hover:text-[#001D4A] font-black text-lg uppercase tracking-widest mb-2">{s.t}</h3>
                <p className="text-slate-400 group-hover:text-slate-500 text-xs leading-relaxed font-medium">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- CHECKLIST SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="lg:col-span-8 space-y-12"
            >
              <h3 className="text-4xl font-black text-[#001D4A] tracking-tighter uppercase flex items-center gap-4">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#001D4A]">
                  <FileText size={20} />
                </div>
                Administrasi Dokumen
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Transkrip Nilai (Legalized)',
                  'Surat Pindah Resmi & SK Keluar',
                  'Print-out Profil PD-DIKTI',
                  'Sertifikat Kompetensi (RPL)',
                  'Portfolio & CV Profesional',
                  'Ijazah & SKHUN Terakhir',
                  'KTP & Kartu Keluarga',
                  'Pas Foto Digital (Red Background)'
                ].map((doc, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
                  >
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="text-xs font-black text-[#001D4A] uppercase tracking-wide">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* --- SIDEBAR --- */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32 space-y-6">
                <div className="bg-[#001D4A] p-10 rounded-[3rem] text-white space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                    <HelpCircle size={100} />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight leading-tight relative z-10">
                    Punya Kendala <br/> Konversi?
                  </h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">
                    Tim Akademik kami siap bantu hitung estimasi SKS gratis.
                  </p>
                  <Link href="#" className="flex items-center justify-center gap-3 w-full py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-500/20 relative z-10">
                    Chat Admin PMB <ArrowRight size={16} />
                  </Link>
                </div>

                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="p-8 border-2 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center gap-4 group cursor-pointer"
                >
                   <Download size={28} className="text-slate-300 group-hover:text-[#F57C00] transition-colors" />
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Pedoman RPL 2026.pdf</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}