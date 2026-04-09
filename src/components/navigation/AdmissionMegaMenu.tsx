'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ChevronRight, 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  CreditCard,
  GraduationCap,
  Calendar,
  FileText,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

interface AdmissionMegaMenuProps {
  isOpen: boolean;
}

const AdmissionMegaMenu = ({ isOpen }: AdmissionMegaMenuProps) => {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  
  const admissionLinks = [
    { title: "Jalur Reguler", href: "/pmb/reguler", icon: <Zap className="w-4 h-4" />, desc: "Pendaftaran umum gelombang 1-3" },
    { title: "Jalur Prestasi", href: "/pmb/prestasi", icon: <Sparkles className="w-4 h-4" />, desc: "Bebas tes untuk siswa berprestasi" },
    { title: "Jalur Beasiswa", href: "/pmb/beasiswa", icon: <GraduationCap className="w-4 h-4" />, desc: "Potongan biaya hingga 100%" },
    { title: "Pindahan & RPL", href: "/pmb/rpl", icon: <CreditCard className="w-4 h-4" />, desc: "Rekognisi Pembelajaran Lampau" },
  ];

  const infoMabaLinks = [
    { title: "Biaya Pendidikan (UKT)", href: "/pmb/biaya", icon: <CreditCard className="w-4 h-4" />, desc: "Informasi rincian biaya semester" },
    { title: "Kalkulator Biaya", href: "/kalkulator-biaya", icon: <Calculator className="w-4 h-4" />, desc: "Simulasi biaya pendidikan" },
    { title: "Jadwal Pendaftaran", href: "/pmb/jadwal", icon: <Calendar className="w-4 h-4" />, desc: "Timeline penting pendaftaran" },
    { title: "Persyaratan Umum", href: "/pmb/syarat", icon: <FileText className="w-4 h-4" />, desc: "Dokumen yang harus disiapkan" },
    { title: "Prosedur Daftar", href: "/pmb/prosedur", icon: <Zap className="w-4 h-4" />, desc: "Alur pendaftaran step-by-step" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 w-[95vw] max-w-6xl"
        >
          <div className="bg-white/98 backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-200/60 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Sisi Kiri: Jalur Pendaftaran */}
              <div className="lg:col-span-4 col-span-12 p-8 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/30">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-[#F57C00] rounded-full" />
                  <h4 className="text-[#001D4A] font-black text-[11px] uppercase tracking-[0.2em]">
                    Jalur Pendaftaran
                  </h4>
                </div>
                
                <ul className="space-y-4">
                  {admissionLinks.map((link, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className="group flex items-start gap-4 p-4 -mx-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#F57C00] transition-colors shrink-0">
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-[#001D4A] font-bold group-hover:text-[#F57C00] transition-colors">
                            {link.title}
                          </p>
                          <p className="text-slate-400 text-[11px] font-medium mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-200 group-hover:text-[#F57C00] mt-1" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-5 bg-[#001D4A] rounded-2xl text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#FFD700]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Countdown PMB</span>
                  </div>
                  <p className="text-xs font-bold">Gelombang 1 berakhir:</p>
                  <p className="text-xl font-black text-[#FFD700] mt-0.5">14 Hari : 08 Jam</p>
                  <Link href="/pmb/jadwal" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest mt-3 text-white/60 hover:text-white transition-colors">
                    Lihat Jadwal <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Sisi Kedua: Informasi Calon Maba */}
              <div className="lg:col-span-4 col-span-12 p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-[#001D4A] rounded-full" />
                  <h4 className="text-[#001D4A] font-black text-[11px] uppercase tracking-[0.2em]">
                    Informasi Calon Maba
                  </h4>
                </div>
                
                <ul className="space-y-4">
                  {infoMabaLinks.map((link, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className="group flex items-start gap-4 p-4 -mx-4 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#001D4A]/10 group-hover:text-[#001D4A] transition-colors shrink-0">
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-[#001D4A] font-bold group-hover:text-[#F57C00] transition-colors text-xs">
                            {link.title}
                          </p>
                          <p className="text-slate-400 text-[10px] font-medium mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>



              {/* Sisi Ketiga: CTA Highlight */}
              <div className="lg:col-span-4 col-span-12 bg-gradient-to-br from-[#F57C00] to-[#E65100] p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col h-full text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] font-black rounded-full uppercase tracking-widest mb-6 w-fit">
                    <Sparkles className="w-3 h-3" />
                    Join Now 2026
                  </div>
                  
                  <h4 className="text-3xl font-black leading-[1.1] mb-6">
                    Siap Jadi <br />
                    <span className="text-[#001D4A]">Merdeka</span> <br />
                    Muda?
                  </h4>
                  
                  <p className="text-white/80 text-sm font-medium leading-relaxed mb-auto">
                    Dapatkan kesempatan emas berkarir dan berkembang bersama ribuan mahasiswa lainnya di UNMER Malang.
                  </p>

                  <Link 
                    href="https://pmb.unmer.ac.id"
                    className="mt-8 group flex items-center justify-center gap-3 py-4 bg-[#001D4A] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#001D4A] transition-all transform hover:scale-[1.02] shadow-2xl shadow-orange-900/40"
                  >
                    Daftar Sekarang
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionMegaMenu;
