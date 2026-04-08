'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { 
  Trophy, 
  BookOpen, 
  Music, 
  Target, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Users
} from 'lucide-react';

const kriteriaUnmer = [
  { 
    icon: Target, 
    title: 'Prestasi Akademik', 
    detail: 'Peringkat 1-5 di sekolah atau nilai rata-rata rapor ≥ 85.00 pada semester 1-5.',
    badge: 'Jalur Rapor'
  },
  { 
    icon: Trophy, 
    title: 'Prestasi Olahraga', 
    detail: 'Juara 1, 2, atau 3 (Perorangan/Beregu) tingkat Kota, Provinsi, maupun Nasional.',
    badge: 'KONI / Dispora'
  },
  { 
    icon: Music, 
    title: 'Prestasi Seni & Budaya', 
    detail: 'Juara bidang vokal, tari, lukis, atau musik tingkat Regional hingga Internasional.',
    badge: 'Fls2n / Umum'
  },
  { 
    icon: Award, 
    title: 'Penalaran & Iptek', 
    detail: 'Pemenang LKTI, Olimpiade Sains, Debat, atau Inovasi Teknologi tingkat Nasional.',
    badge: 'Puspresnas'
  },
  { 
    icon: ShieldCheck, 
    title: 'Khusus Keagamaan', 
    detail: 'Hafidz Al-Qur’an (min. 5 Juz), Juara MTQ, atau prestasi organisasi keagamaan lainnya.',
    badge: 'Jalur Religi'
  },
];

const benefitList = [
  'Bebas Dana Pengembangan Pendidikan (DPP) sesuai kategori juara',
  'Potongan SPP (UKT) tetap selama masa studi normal',
  'Akses prioritas Beasiswa Internal (Beasiswa Bhirawa)',
  'Pembinaan khusus melalui Biro Kemahasiswaan',
  'Pengakuan Satuan Kredit Aktivitas Mahasiswa (SKPI) sejak awal',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } }
};

export default function JalurPrestasiPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen selection:bg-[#001D4A] selection:text-[#FFD700]">
      <PageHeader
        title="Penerimaan"
        accent="Jalur Prestasi"
        subtitle="Wadah apresiasi bagi calon mahasiswa baru yang memiliki keunggulan kompetitif. Bergabunglah bersama Universitas Merdeka Malang."
        breadcrumbs={[{ name: 'PMB', href: '#' }, { name: 'Jalur Prestasi', href: '/pmb/prestasi' }]}
      />

      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#001D4A]/[0.02] -skew-x-12 translate-x-32" />

        <div className="max-w-[85rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* --- KIRI: KRITERIA DATA --- */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#001D4A] text-[#FFD700] mb-4">
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Bhirawa Excellence</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#001D4A] leading-[0.9] tracking-tighter">
                  SYARAT & <span className="text-slate-400">KRITERIA</span>
                </h2>
                <p className="mt-4 text-slate-500 font-medium max-w-lg">
                  Terbuka untuk lulusan SMA/SMK/MA sederajat yang memiliki bukti fisik (Sertifikat/Piagam) dalam 3 tahun terakhir.
                </p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {kriteriaUnmer.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={cardVariants}
                    className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-[#001D4A] group-hover:bg-[#001D4A] group-hover:text-[#FFD700] transition-all duration-300">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-black text-[#001D4A] text-lg uppercase tracking-tight">{item.title}</h3>
                        <span className="px-2 py-0.5 rounded text-[9px] font-black bg-slate-100 text-slate-400 uppercase">{item.badge}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* --- KANAN: BENEFIT & ACTION --- */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] p-1 border border-slate-100 shadow-2xl overflow-hidden"
              >
                <div className="bg-[#001D4A] rounded-[2.3rem] p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <ShieldCheck className="text-[#001D4A]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-xl leading-none">Keuntungan</h3>
                      <p className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest mt-1">Reward & Scholarship</p>
                    </div>
                  </div>

                  <div className="space-y-5 mb-12">
                    {benefitList.map((text, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <CheckCircle2 className="text-[#FFD700] shrink-0 mt-1" size={18} />
                        <span className="text-slate-300 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Link 
                      href="https://pmb.unmer.ac.id" 
                      className="flex items-center justify-center gap-3 w-full py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black tracking-widest text-sm hover:bg-white transition-all group"
                    >
                      DAFTAR SEKARANG
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <Users className="text-slate-400" size={20} />
                      <div className="text-[10px]">
                        <p className="text-slate-300 font-bold uppercase">Butuh Konsultasi?</p>
                        <p className="text-slate-500">Hubungi Hotline PMB: 0812-xxxx-xxxx</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Info Tambahan */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Masa Pendaftaran</p>
                  <p className="text-[#001D4A] font-black text-xs">Januari - Agustus 2026</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Metode Seleksi</p>
                  <p className="text-[#001D4A] font-black text-xs">Portofolio & Wawancara</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}