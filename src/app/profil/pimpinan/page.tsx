'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Quote, ArrowUpRight, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const pimpinan = [
  { 
    nama: 'Dr. Prihat Assih, SE., M.Si., Ak., CA.', 
    jabatan: 'Rektor', 
    periode: '2023–2027', 
    spesialis: 'Akuntansi Sektor Publik & Tata Kelola Perguruan Tinggi', 
    bio: 'Berkomitmen membawa UNMER Malang menjadi "World Class University" dengan memperkuat ekosistem kewirausahaan dan digitalisasi kampus yang inklusif.', 
    inisial: 'PA', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_BVpT4fshEbAa06kky2toMGWf942hQ5O1g&s', 
    publikasi: 52, 
    mahasiswaBimbing: 24, 
    citasi: 1120, 
    featured: true 
  },
  { 
    nama: 'Dr. Eng. Ir. Dani Yunuar, ST., MT.', 
    jabatan: 'Wakil Rektor I — Bidang Akademik', 
    periode: '2023–2027', 
    spesialis: 'Rekayasa Teknologi & Inovasi Pembelajaran', 
    bio: 'Fokus pada pengembangan kurikulum adaptif MBKM dan peningkatan mutu akademik melalui sertifikasi internasional.', 
    inisial: 'DY', 
    image: '',
    publikasi: 38, 
    mahasiswaBimbing: 18, 
    citasi: 740, 
    featured: false 
  },
  { 
    nama: 'Dr. Syamsul Bahri, SE., M.Si.', 
    jabatan: 'Wakil Rektor II — Bidang Keuangan & SDM', 
    periode: '2023–2027', 
    spesialis: 'Manajemen Keuangan & Pengembangan Organisasi', 
    bio: 'Mengoptimalkan tata kelola keuangan yang transparan dan meningkatkan kompetensi SDM dosen serta tenaga kependidikan.', 
    inisial: 'SB', 
    image: '',
    publikasi: 29, 
    mahasiswaBimbing: 14, 
    citasi: 510, 
    featured: false 
  },
  { 
    nama: 'Dr. Ana Mariani, S.Sos., M.Si.', 
    jabatan: 'Wakil Rektor III — Bidang Kemahasiswaan', 
    periode: '2023–2027', 
    spesialis: 'Komunikasi Publik & Pengembangan Karakter', 
    bio: 'Mendorong prestasi mahasiswa di tingkat nasional dan internasional serta memperkuat jiwa wirausaha muda UNMER.', 
    inisial: 'AM', 
    image: '',
    publikasi: 25, 
    mahasiswaBimbing: 20, 
    citasi: 420, 
    featured: false 
  },
  { 
    nama: 'Prof. Dr. Grahita Chandrarin, M.Si., Ak., CA.', 
    jabatan: 'Direktur Pascasarjana', 
    periode: '2023–2027', 
    spesialis: 'Akuntansi & Keuangan Strategis', 
    bio: 'Mengarahkan riset tingkat lanjut dan pengembangan program doktor yang relevan dengan kebutuhan global.', 
    inisial: 'GC', 
    image: '',
    publikasi: 88, 
    mahasiswaBimbing: 35, 
    citasi: 2100, 
    featured: false 
  },
  { 
    nama: 'Dr. Pudjo Sugito, SE., M.Si.', 
    jabatan: 'Dekan FEB', 
    periode: '2023–2027', 
    spesialis: 'Manajemen Pemasaran & Strategi Bisnis', 
    bio: 'Memimpin fakultas ekonomi terbesar dengan fokus pada ekonomi kreatif dan inklusi digital bagi mahasiswa.', 
    inisial: 'PS', 
    image: '',
    publikasi: 41, 
    mahasiswaBimbing: 22, 
    citasi: 860, 
    featured: false 
  },
  { 
    nama: 'Dr. Teguh Maghendra, SH., MH.', 
    jabatan: 'Dekan Fakultas Hukum', 
    periode: '2023–2027', 
    spesialis: 'Hukum Pidana & Etika Hukum', 
    bio: 'Mewujudkan lulusan hukum yang berintegritas dan siap bersaing di era transformasi digital hukum.', 
    inisial: 'TM', 
    image: '',
    publikasi: 32, 
    mahasiswaBimbing: 15, 
    citasi: 480, 
    featured: false 
  },
  { 
    nama: 'Dr. Ir. Erna Winansih, ST., MT.', 
    jabatan: 'Dekan Fakultas Teknik', 
    periode: '2023–2027', 
    spesialis: 'Teknik Sipil & Tata Ruang', 
    bio: 'Mengintegrasikan inovasi teknologi teknik dengan kearifan lokal untuk pembangunan berkelanjutan.', 
    inisial: 'EW', 
    image: '',
    publikasi: 35, 
    mahasiswaBimbing: 19, 
    citasi: 590, 
    featured: false 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function PimpinanPage() {
  const rektor = pimpinan.find(p => p.featured)!;
  const lainnya = pimpinan.filter(p => !p.featured);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-32">
      <PageHeader 
        title="Pimpinan " 
        accent="Universitas"
        subtitle="Sinergi kepemimpinan Universitas Merdeka Malang dalam mencetak generasi Bhirawa Anoraga yang unggul."
        breadcrumbs={[{ name: 'Profil', href: '/profil/sejarah' }, { name: 'Pimpinan', href: '/profil/pimpinan' }]} 
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 -mt-10 relative z-20 space-y-24">
        
        {/* SECTION: REKTOR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,29,74,0.1)] border border-white flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden"
        >
          <div className="relative w-full lg:w-[400px] shrink-0">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#001D4A] relative shadow-2xl group">
              <img 
                src={rektor.image} 
                alt={rektor.nama} 
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/60 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -right-4 top-10 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-50 flex flex-col items-center">
              <span className="text-[10px] font-black text-[#F57C00] uppercase tracking-widest">Masa Bakti</span>
              <span className="font-bold text-[#001D4A] text-sm">{rektor.periode}</span>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#001D4A]/5 rounded-full">
                <GraduationCap className="w-4 h-4 text-[#001D4A]" />
                <span className="text-[#001D4A] font-black uppercase tracking-[0.2em] text-[10px]">{rektor.jabatan}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] leading-tight">{rektor.nama}</h2>
              <p className="text-xl text-[#F57C00] font-bold">{rektor.spesialis}</p>
            </div>

            <div className="relative">
              <Quote className="absolute -left-8 -top-8 w-16 h-16 text-slate-100 -z-10" />
              <p className="text-slate-600 text-lg leading-relaxed font-medium italic">"{rektor.bio}"</p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              {[
                { icon: BookOpen, num: rektor.publikasi, label: 'Publikasi' }, 
                { icon: ArrowUpRight, num: rektor.citasi, label: 'Citasi' }, 
                { icon: Users, num: rektor.mahasiswaBimbing, label: 'Bimbingan' }
              ].map((s, i) => (
                <div key={i} className="space-y-1 text-center md:text-left">
                  <p className="text-3xl font-black text-[#001D4A]">{s.num}</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SECTION: JAJARAN REKTORAT & DEKANAT */}
        <div className="space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-4xl font-black text-[#001D4A]">Jajaran <span className="text-[#F57C00]">Kepemimpinan</span></h2>
            <div className="h-1.5 w-24 bg-[#FFD700] rounded-full" />
            <p className="text-slate-500 max-w-2xl font-medium">Sinergi antara Wakil Rektor, Direktur Pascasarjana, dan Para Dekan dalam mengawal standar mutu pendidikan di Universitas Merdeka Malang.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {lainnya.map((p, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,29,74,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-[#001D4A] flex items-center justify-center text-white font-black text-xl mb-6 shadow-lg shadow-blue-900/10 group-hover:rotate-6 transition-transform">
                    {p.inisial}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="text-[#F57C00] font-black text-[9px] uppercase tracking-[0.2em] mb-1">{p.jabatan}</p>
                      <h3 className="font-black text-[#001D4A] text-lg leading-tight min-h-[3rem]">{p.nama}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 italic">"{p.bio}"</p>
                  </div>
                  
                  <div className="flex gap-6 pt-6 mt-6 border-t border-slate-50 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Publikasi</p>
                      <p className="text-sm font-black text-[#001D4A]">{p.publikasi}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Citasi</p>
                      <p className="text-sm font-black text-[#001D4A]">{p.citasi}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}