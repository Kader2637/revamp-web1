'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, Lightbulb, Handshake, Target, HeartHandshake } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

// Data disesuaikan dengan nilai-nilai "Bhirawa Anoraga" & Visi Misi Asli UNMER Malang
const nilaiUtama = [
  { icon: Shield, title: 'Bhirawa Anoraga', desc: 'Perkasa, profesional, dan mumpuni secara keilmuan, namun senantiasa rendah hati.' },
  { icon: Target, title: 'Berjiwa Wirausaha', desc: 'Mencetak SDM mandiri yang kreatif, inovatif, dan adaptif menghadapi tantangan global.' },
  { icon: Scale, title: 'Kejujuran & Kebenaran', desc: 'Menjunjung tinggi integritas akademik, moral, dan etika dalam setiap tindakan.' },
  { icon: Handshake, title: 'Saling Percaya', desc: 'Membangun sinergi sivitas akademika melalui tata kelola yang transparan dan akuntabel.' },
  { icon: HeartHandshake, title: 'Saling Menghormati', desc: 'Menghargai keberagaman, menjunjung toleransi, dan menciptakan lingkungan kampus yang inklusif.' },
  { icon: Lightbulb, title: 'Profesionalisme', desc: 'Berkomitmen pada standar kualitas tertinggi, kedisiplinan, dan etos kerja yang kuat.' },
];

const misiPoin = [
  { 
    num: '01', 
    judul: 'Pendidikan & Kewirausahaan', 
    desc: 'Menyelenggarakan program pendidikan tinggi berkualitas untuk menghasilkan lulusan yang kompeten, berjiwa wirausaha, dan berdaya saing di tingkat nasional maupun internasional.' 
  },
  { 
    num: '02', 
    judul: 'Penelitian & Pengabdian', 
    desc: 'Melaksanakan penelitian dan pengabdian kepada masyarakat serta publikasi ilmiah untuk mendorong reputasi lembaga dan memberikan kontribusi nyata bagi bangsa.' 
  },
  { 
    num: '03', 
    judul: 'Tata Kelola Institusi (DSS)', 
    desc: 'Melaksanakan tata kelola universitas berbasis Sistem Informasi Manajemen sebagai Decision Support System (DSS) demi mewujudkan Good University Governance.' 
  },
  { 
    num: '04', 
    judul: 'Kemitraan Global', 
    desc: 'Menjalin kerjasama dan kemitraan strategis dengan institusi di dalam maupun di luar negeri berdasarkan prinsip kesetaraan untuk reputasi internasional.' 
  },
  { 
    num: '05', 
    judul: 'Pembinaan Karakter', 
    desc: 'Melakukan pengembangan kualitas SDM seutuhnya melalui pendidikan kebangsaan, nilai-nilai Pancasila, dan ketaqwaan kepada Tuhan Yang Maha Esa.' 
  },
];

export default function VisiMisiPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <PageHeader 
        title="Visi & " 
        accent="Misi"
        subtitle="Fondasi filosofis yang mengarahkan setiap langkah Universitas Merdeka Malang dalam mencetak generasi Bhirawa Anoraga."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'Visi & Misi', href: '/profil/visi-misi' }]} 
      />

      {/* VISI — Editorial Typography Style */}
      <section className="py-32 relative overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#001D4A]/5 border border-[#001D4A]/10 rounded-full">
              <span className="w-2 h-2 bg-[#F57C00] rounded-full animate-pulse" />
              <span className="text-[#001D4A] font-black uppercase tracking-[0.2em] text-xs">Visi Universitas</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#001D4A] leading-[1.2] md:leading-[1.2]">
              "Menjadi Universitas terkemuka dalam pengembangan <span className="text-[#F57C00] relative whitespace-nowrap">
                SDM seutuhnya
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD700]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> yang berjiwa wirausaha pada skala nasional dan internasional."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* MISI — Sleek Vertical Cards */}
      <section className="py-32 bg-[#001D4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#FFD700]/5 to-transparent pointer-events-none" />

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sticky Header Left */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-6">
              <h2 className="text-5xl font-black text-white leading-tight">Misi <br/><span className="text-[#FFD700]">Universitas</span></h2>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Langkah strategis UNMER Malang dalam mendedikasikan diri untuk kemajuan ilmu pengetahuan, karakter bangsa, dan ekosistem wirausaha.
              </p>
            </div>

            {/* Scrolling List Right */}
            <div className="lg:w-2/3 space-y-6">
              {misiPoin.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group bg-white/5 border border-white/10 hover:border-[#FFD700]/50 p-8 md:p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 flex flex-col md:flex-row gap-8 md:items-center"
                >
                  <div className="text-6xl font-black text-white/10 group-hover:text-[#FFD700] transition-colors duration-500 shrink-0">
                    {m.num}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFD700] transition-colors">{m.judul}</h3>
                    <p className="text-slate-400 text-base leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NILAI — Modern Minimalist Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#001D4A]">Nilai-Nilai <span className="text-[#F57C00]">Unmerian</span></h2>
            <p className="text-slate-500 text-lg font-medium">
              Sikap dan prinsip dasar yang terinspirasi dari semboyan agung "Bhirawa Anoraga", menjadi pedoman bagi seluruh sivitas akademika.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nilaiUtama.map((n, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-[#F8FAFC] border border-slate-200 rounded-[2rem] p-10 hover:shadow-[0_20px_40px_-15px_rgba(0,29,74,0.1)] hover:-translate-y-2 hover:border-[#FFD700] transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#001D4A] flex items-center justify-center mb-8 group-hover:bg-[#FFD700] group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <n.icon className="w-8 h-8 text-white group-hover:text-[#001D4A] transition-colors" />
                </div>
                <h3 className="font-black text-[#001D4A] text-2xl mb-4 group-hover:text-[#F57C00] transition-colors">{n.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {n.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}