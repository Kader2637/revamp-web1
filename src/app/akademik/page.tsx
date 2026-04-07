'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  Scale, 
  Building2, 
  Users, 
  Brain, 
  Globe2, 
  Plane,
  Microscope,
  Briefcase
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const faculties = [
  {
    name: 'Ekonomi & Bisnis',
    abbr: 'FEB',
    href: '/akademik/feb',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-700',
    count: '6 Program Studi',
    desc: 'Mencetak profesional akuntansi, manajemen, dan ekonomi pembangunan berjiwa wirausaha.'
  },
  {
    name: 'Teknologi Informasi',
    abbr: 'FTI',
    href: '/akademik/fti',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-700',
    count: '2 Program Studi',
    desc: 'Pusat inovasi sistem informasi dan transformasi digital masa depan.'
  },
  {
    name: 'Teknik',
    abbr: 'FT',
    href: '/akademik/teknik',
    icon: Building2,
    color: 'from-orange-500 to-red-700',
    count: '5 Program Studi',
    desc: 'Membangun infrastruktur dan teknologi dengan keahlian teknik sipil, elektro, dan mesin.'
  },
  {
    name: 'Hukum',
    abbr: 'FH',
    href: '/akademik/hukum',
    icon: Scale,
    color: 'from-rose-700 to-red-900',
    count: '1 Program Studi',
    desc: 'Pusat keunggulan hukum nasional yang menjunjung tinggi keadilan dan integritas.'
  },
  {
    name: 'Ilmu Sosial & Politik',
    abbr: 'FISIP',
    href: '/akademik/fisip',
    icon: Users,
    color: 'from-purple-500 to-violet-800',
    count: '4 Program Studi',
    desc: 'Menguasai dinamika komunikasi, administrasi publik, dan hubungan sosial.'
  },
  {
    name: 'Psikologi',
    abbr: 'PSPsi',
    href: '/akademik/psikologi',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    count: '1 Program Studi',
    desc: 'Memahami perilaku manusia dan kesehatan mental melalui pendekatan saintifik.'
  },
  {
    name: 'Pascasarjana',
    abbr: 'PPS',
    href: '/akademik/pascasarjana',
    icon: Microscope,
    color: 'from-slate-700 to-slate-900',
    count: '7 Program Lanjut',
    desc: 'Pusat riset lanjutan untuk jenjang Magister (S2) dan Doktor (S3).'
  },
  {
    name: 'Kepariwisataan',
    abbr: 'KAPAR',
    href: '/akademik/pariwisata',
    icon: Plane,
    color: 'from-amber-400 to-orange-600',
    count: '3 Program Vokasi',
    desc: 'Keahlian perhotelan dan destinasi wisata standar internasional.'
  }
];

export default function AcademicsPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <PageHeader 
        title="Pusat " 
        accent="Akademik"
        subtitle="Eksplorasi ragam disiplin ilmu di Universitas Merdeka Malang. Kami menawarkan pendidikan berkualitas yang relevan dengan kebutuhan industri global."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik' }]} 
      />

      {/* HIGHLIGHT STATS */}
      <section className="py-20 -mt-10 relative z-30">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: '32 Program Studi', sub: 'Sarjana, Diploma, Pascasarjana' },
              { icon: Globe2, label: 'Akreditasi Unggul', sub: 'Standar Nasional & Internasional' },
              { icon: Users, label: '11.000+ Mahasiswa', sub: 'Komunitas Akademik Aktif' },
              { icon: Plane, label: 'Global Network', sub: '30+ Mitra Universitas Dunia' },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex items-start gap-6 border-b-4 border-b-[#FFD700]"
              >
                <div className="w-14 h-14 bg-[#001D4A] rounded-2xl flex items-center justify-center text-[#FFD700] shrink-0">
                  <s.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xl font-black text-[#001D4A] leading-tight">{s.label}</p>
                  <p className="text-slate-400 text-sm font-medium mt-1">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY DIRECTORY */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-[120px] -mr-40 -mt-40" />
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-sm font-black text-[#F57C00] uppercase tracking-[0.4em]">Fakultas & Program</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-black text-[#001D4A] leading-tight">
                  Pilih Jalur <span className="text-[#F57C00] italic">Kesuksesanmu.</span>
                </h3>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-500 max-w-md font-medium text-lg leading-relaxed">
                Jelajahi berbagai fakultas kami yang memiliki fasilitas kelas dunia dan kurikulum berbasis kompetensi yang adaptif.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculties.map((f, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                width="100%"
              >
                <Link href={f.href} className="group block h-full">
                  <div className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-100 h-full flex flex-col justify-between hover:bg-white hover:shadow-[0_30px_60px_rgba(0,29,74,0.12)] hover:border-transparent transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
                    {/* Animated Glow Overlay */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl`} />
                    
                    <div className="space-y-6 relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg shadow-blue-900/10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <f.icon className="w-8 h-8" />
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-[#F57C00] font-black text-[10px] uppercase tracking-[0.2em]">{f.abbr}</p>
                        <h4 className="text-2xl font-black text-[#001D4A] leading-tight group-hover:text-blue-700 transition-colors uppercase">{f.name}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mt-4">
                          {f.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-slate-200/60 flex items-center justify-between relative z-10 transition-all">
                      <span className="text-xs font-black text-slate-400 group-hover:text-[#001D4A] transition-colors">{f.count}</span>
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#001D4A] group-hover:bg-[#FFD700] group-hover:border-transparent transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-[#001D4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/30 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">
              Mulai Masa Depanmu <br /> <span className="text-[#FFD700]">Hari Ini.</span>
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto font-medium">
              Pendaftaran mahasiswa baru semester gasal telah dibuka. Dapatkan informasi lengkap mengenai jalur seleksi dan beasiswa.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/pmb/reguler" className="px-14 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-yellow-500/20">
              Daftar Sekarang
            </Link>
            <Link href="/kontak" className="px-14 py-6 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
              Hubungi Konselor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
