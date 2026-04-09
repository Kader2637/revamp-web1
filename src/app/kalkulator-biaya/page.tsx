'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Zap,
  Info
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';

const faculties = [
  { 
    id: 'fti', 
    name: 'Teknologi Informasi', 
    fee: 6450000, 
    desc: 'Informatika, Sistem Informasi, D3 SI',
    features: ['Lab Komputer Standar Industri', 'Sertifikasi Keahlian Global', 'Cloud Computing Lab']
  },
  { 
    id: 'feb', 
    name: 'Ekonomi & Bisnis', 
    fee: 5250000, 
    desc: 'Akuntansi, Manajemen, Ekonomi Pembangunan',
    features: ['Pusat Pengembangan Bisnis', 'Digital Marketing Hub', 'Bursa Efek Galeri']
  },
  { 
    id: 'ft', 
    name: 'Teknik', 
    fee: 6150000, 
    desc: 'Sipil, Mesin, Elektro, Industri, Arsitektur',
    features: ['Studio Gambar Modern', 'Workshop Teknik Terpadu', 'Pusat Riset Konstruksi']
  },
  { 
    id: 'fisip', 
    name: 'Ilmu Sosial & Politik', 
    fee: 4150000, 
    desc: 'Adm Publik, Adm Bisnis, Komunikasi',
    features: ['Laboratorium Komunikasi', 'Pusat Kebijakan Publik', 'Media Center']
  },
  { 
    id: 'fh', 
    name: 'Hukum', 
    fee: 5450000, 
    desc: 'Ilmu Hukum',
    features: ['Ruang Peradilan Semu', 'Bantuan Hukum Center', 'Perpustakaan Hukum']
  },
  { 
    id: 'fpssi', 
    name: 'Psikologi', 
    fee: 5150000, 
    desc: 'Psikologi',
    features: ['Lab Psikodiagnostik', 'Counselling Room', 'Pusat Layanan Psikologi']
  },
];

const KalkulatorBiayaPage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  
  const selectedData = faculties.find(f => f.id === selectedFaculty);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#001D4A]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F57C00]/20 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.2em]">Estimasi Biaya Transparan</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter"
            >
              Kalkulator <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-orange-400">Biaya Pendidikan</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Dapatkan gambaran jelas mengenai investasi pendidikanmu di UNMER Malang. Hitung estimasi biaya per semester sesuai fakultas impianmu.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="relative -mt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Faculty Selection */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#001D4A]/5 flex items-center justify-center text-[#001D4A]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#001D4A] tracking-tight">Pilih Fakultas</h2>
                  <p className="text-slate-400 text-sm font-medium">Klik pada fakultas untuk melihat detail biaya</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faculties.map((faculty) => (
                  <button
                    key={faculty.id}
                    onClick={() => setSelectedFaculty(faculty.id)}
                    className={`group relative p-6 rounded-3xl border-2 text-left transition-all duration-300 ${
                      selectedFaculty === faculty.id 
                        ? 'border-[#F57C00] bg-[#F57C00]/5 shadow-lg shadow-orange-500/10' 
                        : 'border-slate-50 hover:border-slate-200 bg-slate-50/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-black text-lg transition-colors ${
                        selectedFaculty === faculty.id ? 'text-[#001D4A]' : 'text-slate-600'
                      }`}>
                        {faculty.name}
                      </h3>
                      {selectedFaculty === faculty.id && (
                        <CheckCircle2 className="w-6 h-6 text-[#F57C00]" />
                      )}
                    </div>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">
                      {faculty.desc}
                    </p>
                    <div className={`mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-opacity ${
                      selectedFaculty === faculty.id ? 'opacity-100 text-[#F57C00]' : 'opacity-0'
                    }`}>
                      Terpilih <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12 p-8 bg-[#001D4A] rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#FFD700] flex items-center justify-center text-[#001D4A] shrink-0 shadow-xl rotate-3">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-black mb-2">Beasiswa Potongan Hingga 100%</h4>
                    <p className="text-white/70 text-sm font-medium">Berbagai jalur beasiswa tersedia untuk meringankan biaya pendidikanmu. Cek persyaratan beasiswa sekarang!</p>
                  </div>
                  <Link href="/pmb/beasiswa" className="px-6 py-4 bg-white text-[#001D4A] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#FFD700] transition-colors whitespace-nowrap">
                    Info Beasiswa
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Results Display */}
            <div className="lg:col-span-5 sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="bg-gradient-to-br from-[#001D4A] to-blue-900 p-8 text-white relative">
                  <div className="absolute top-4 right-6 opacity-20">
                    <Calculator size={80} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-2">Hasil Estimasi</p>
                    <h3 className="text-2xl font-black">{selectedData ? selectedData.name : 'Pilih Fakultas'}</h3>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 space-y-8">
                  <div className="text-center md:text-left">
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Biaya Per Semester (UKT)</p>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={selectedFaculty || 'none'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-5xl md:text-6xl font-black text-[#001D4A] tracking-tighter"
                      >
                        {selectedData ? formatCurrency(selectedData.fee) : 'Rp -'}
                      </motion.p>
                    </AnimatePresence>
                    <p className="text-slate-400 text-[10px] italic mt-4 font-medium">
                      *Biaya di atas merupakan estimasi UKT semester 1 dan belum termasuk Dana Pengembangan (DPP) serta potongan beasiswa.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <h4 className="text-sm font-black text-[#001D4A] uppercase tracking-widest mb-6">Fasilitas Unggulan {selectedData?.name}</h4>
                    <div className="space-y-4">
                      {(selectedData?.features || ['Akses Lab 24/7', 'Career Center Tracking', 'E-Library Access']).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-slate-600 text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 flex flex-col gap-4">
                    <Link 
                      href="https://pmb.unmer.ac.id"
                      className="w-full py-6 bg-[#F57C00] text-white rounded-2xl font-black text-center text-sm uppercase tracking-widest hover:bg-[#001D4A] transition-all transform hover:scale-[1.02] shadow-xl shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-3"
                    >
                      Daftar Sekarang <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="/pmb/biaya"
                      className="w-full py-5 border-2 border-slate-100 text-[#001D4A] rounded-2xl font-black text-center text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" /> Rincian Biaya Full
                    </Link>
                  </div>
                </div>
              </motion.div>

              <div className="p-8 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-[2.5rem] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F57C00]/10 flex items-center justify-center text-[#F57C00] shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#001D4A] font-black text-[11px] uppercase tracking-widest mb-1">Butuh Bantuan?</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">Tim admin kami siap membantu menjelaskan detail biaya dan skema pembayaran yang paling sesuai untukmu.</p>
                  <button className="mt-4 text-[#F57C00] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all">
                    Hubungi Admin <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-[#001D4A] tracking-tight">Tanya Jawab <span className="text-slate-400 font-light italic">Biaya Kuliah</span></h2>
              <p className="text-slate-500 font-medium">Informasi tambahan mengenai skema pembiayaan di UNMER Malang.</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "Apakah biaya kuliah dapat diangsur?", a: "Ya, UNMER Malang memberikan kemudahan cicilan bagi mahasiswa agar tidak memberatkan dalam satu waktu." },
                { q: "Apakah ada biaya pendaftaran?", a: "Terdapat biaya pendaftaran yang kompetitif dan terkadang gratis pada promo jalur tertentu." },
                { q: "Apa itu Dana Pengembangan (DPP)?", a: "Dana yang dibayarkan sekali selama masa studi untuk pengembangan kualitas sarana dan prasarana kampus." },
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex gap-6 group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#F57C00] shrink-0 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black text-[#001D4A] tracking-tight">{faq.q}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like CTA */}
      <section className="py-20 bg-[#001D4A] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Siap Jadi Bagian dari <span className="text-[#FFD700]">UNMER Malang?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://pmb.unmer.ac.id" className="px-10 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl shadow-yellow-500/10">
              Daftar Sekarang
            </Link>
            <Link href="/" className="px-10 py-5 border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KalkulatorBiayaPage;
