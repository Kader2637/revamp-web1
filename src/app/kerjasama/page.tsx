'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  GraduationCap, 
  PlaneTakeoff, 
  Microscope, 
  Briefcase, 
  Users2, 
  Award,
  ExternalLink,
  MapPin,
  CalendarDays,
  Languages
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const programKerjasama = [
  { 
    icon: GraduationCap, 
    nama: 'Double Degree', 
    desc: 'Kurikulum terintegrasi yang memungkinkan mahasiswa meraih gelar dari UNMER dan universitas mitra luar negeri.',
    stats: '5 Program Studi'
  },
  { 
    icon: PlaneTakeoff, 
    nama: 'Student Exchange', 
    desc: 'Program pertukaran mahasiswa selama 1-2 semester untuk pengayaan budaya dan akademik global.',
    stats: '150+ Mahasiswa/Thn'
  },
  { 
    icon: Microscope, 
    nama: 'Joint Research', 
    desc: 'Kolaborasi riset internasional antar dosen dan peneliti untuk publikasi jurnal bereputasi global.',
    stats: '80+ Publikasi'
  },
  { 
    icon: Briefcase, 
    nama: 'Global Internship', 
    desc: 'Pengalaman kerja profesional di perusahaan atau institusi internasional di Asia dan Eropa.',
    stats: '20+ Mitra Industri'
  },
  { 
    icon: Languages, 
    nama: 'Summer Course', 
    desc: 'Program pendek intensif mengenai budaya, bahasa, dan keahlian khusus di negara mitra.',
    stats: 'Setiap Semester'
  },
  { 
    icon: Users2, 
    nama: 'Guest Lecture', 
    desc: 'Kuliah tamu oleh profesor kelas dunia untuk menghadirkan perspektif global di ruang kelas.',
    stats: 'Mingguan'
  },
];

const mitraInternasional = [
  { region: 'Asia Timur & Pasifik', items: [
    { nama: 'Tohoku University', negara: 'Jepang', program: 'Technology & Engineering Research', sejak: '2018' },
    { nama: 'Curtin University', negara: 'Australia', program: 'Joint Degree & Business Research', sejak: '2020' },
    { nama: 'Sungkyunkwan University', negara: 'Korea Selatan', program: 'Innovation Program', sejak: '2023' },
  ]},
  { region: 'Eropa', items: [
    { nama: 'Hochschule Hannover', negara: 'Jerman', program: 'Industrial Internship & Exchange', sejak: '2019' },
    { nama: 'Leiden University', negara: 'Belanda', program: 'Law & Social Science Collaboration', sejak: '2022' },
    { nama: 'University of Pecs', negara: 'Hungaria', program: 'Academic Mobility', sejak: '2021' },
  ]},
  { region: 'Asia Tenggara', items: [
    { nama: 'Universiti Malaya', negara: 'Malaysia', program: 'Staff & Student Mobility', sejak: '2017' },
    { nama: 'Chulalongkorn University', negara: 'Thailand', program: 'Cultural Exchange', sejak: '2021' },
    { nama: 'National University of Singapore', negara: 'Singapura', program: 'Business Management', sejak: '2022' },
  ]}
];

export default function KerjasamaPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <PageHeader 
        title="Kerjasama" 
        accent="Internasional"
        subtitle="Membangun jembatan global untuk mewujudkan visi UNMER Malang sebagai World Class University yang inklusif dan inovatif."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'Kerjasama', href: '/kerjasama' }]} 
      />

      {/* DASHBOARD STATS */}
      <section className="py-12 -mt-16 relative z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#001D4A] rounded-[3rem] p-10 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
              {[
                { num: '30+', label: 'Universitas Mitra', sub: 'Tersebar di 5 Benua' },
                { num: '15', label: 'Negara Aktif', sub: 'Kerjasama Bilateral' },
                { num: '250+', label: 'Student Exchange', sub: 'Per Tahun Akademik' },
                { num: 'A', label: 'Akreditasi', sub: 'Standar Internasional' },
              ].map((s, i) => (
                <div key={i} className="px-6 text-center lg:text-left first:pl-0 last:border-0 border-transparent">
                  <p className="text-4xl font-black text-[#FFD700] tracking-tight">{s.num}</p>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mt-2 leading-none">{s.label}</p>
                  <p className="text-slate-400 text-[10px] mt-1 font-medium">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[11px] font-black text-[#F57C00] uppercase tracking-[0.5em]">Global Programs</h2>
            <h3 className="text-4xl font-black text-[#001D4A]">Skema Kerjasama Strategis</h3>
            <div className="w-20 h-1.5 bg-[#FFD700] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programKerjasama.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-[#001D4A] flex items-center justify-center mb-8 group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all duration-500 shadow-inner">
                  <p.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-black text-[#F57C00] uppercase tracking-widest">
                    <span>Active Program</span>
                    <span className="px-2 py-0.5 bg-orange-50 rounded italic">{p.stats}</span>
                  </div>
                  <h4 className="text-2xl font-black text-[#001D4A] tracking-tight">{p.nama}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS DIRECTORY */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001D4A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-[#F57C00]" />
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Partner Institutions</span>
              </div>
              <h3 className="text-4xl font-black text-[#001D4A]">Jejaring Universitas Dunia</h3>
            </div>
            <button className="flex items-center gap-2 text-sm font-black text-[#001D4A] group">
              Lihat Semua Mitra <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-20">
            {mitraInternasional.map((reg, ri) => (
              <div key={ri} className="space-y-8">
                <div className="flex items-center gap-4">
                  <h4 className="text-sm font-black text-[#001D4A] uppercase tracking-[0.3em] whitespace-nowrap">{reg.region}</h4>
                  <div className="h-px w-full bg-slate-200" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reg.items.map((m, mi) => (
                    <motion.div 
                      key={mi}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-tighter">
                            <MapPin className="w-3 h-3" /> {m.negara}
                          </div>
                          <div className="flex items-center gap-1 text-slate-300">
                             <CalendarDays className="w-3 h-3" />
                             <span className="text-[9px] font-bold">Since {m.sejak}</span>
                          </div>
                        </div>
                        <h5 className="text-xl font-black text-[#001D4A] group-hover:text-blue-700 transition-colors leading-tight">
                          {m.nama}
                        </h5>
                        <div className="flex items-center gap-2 pt-2">
                           <div className="w-1 h-1 rounded-full bg-[#FFD700]" />
                           <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{m.program}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12 bg-white p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFD700]/5 rounded-br-full" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100 text-[#001D4A] font-black text-[10px] uppercase tracking-widest">
              <Award className="w-4 h-4 text-[#F57C00]" /> Global Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] leading-tight tracking-tight">
              Siap Melangkah Ke <br /> <span className="text-[#F57C00]">Panggung Dunia?</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
              Wujudkan impian studi internasional Anda. Tim Kantor Urusan Internasional (KUI) UNMER siap membantu proses aplikasi dan beasiswa Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-12 py-5 bg-[#001D4A] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:scale-105 transition-all">
              Hubungi Kantor Internasional
            </button>
            <button className="px-12 py-5 bg-white text-[#001D4A] border-2 border-slate-100 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
              Panduan Exchange
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}