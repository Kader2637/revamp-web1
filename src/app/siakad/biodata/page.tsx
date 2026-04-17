"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, MapPin, Phone, Mail, Award, BookOpen, Fingerprint, 
  Calendar as CalendarIcon, Briefcase, ChevronRight, Contact, 
  Building2, Map, Layers, GraduationCap, 
  Users, Heart, ClipboardCheck, Camera, CheckCircle2,
  QrCode as ScanLine, Download, X
} from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function BiodataPage() {
  const [activeTab, setActiveTab] = useState("pribadi");
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const qrUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg";

  const downloadQr = async () => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "UNMER_Digital_ID_QR.svg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      window.open(qrUrl, "_blank");
    }
  };

  const tabs = [
    { id: "pribadi", label: "Biodata", icon: User },
    { id: "akademik", label: "Akademik", icon: GraduationCap },
    { id: "keluarga", label: "Keluarga", icon: Users },
    { id: "pendidikan", label: "Pendidikan", icon: BookOpen },
  ];

  const DataItem = ({ label, value, icon: Icon }: { label: string, value: string, icon?: any }) => (
    <div className="flex flex-col py-4 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-2 mb-1.5">
         {Icon && <Icon size={14} className="text-slate-400" />}
         <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{label}</span>
      </div>
      <span className="text-base font-bold text-slate-900">{value}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* 1. Integrated Header Card (Banner as Full Background) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Banner Section */}
        <div className="relative pt-20 pb-12 px-10 border-b border-slate-100">
           {/* Background Image */}
           <div className="absolute inset-0 overflow-hidden">
             <Image 
                src="/banner.png" 
                alt="Banner" 
                fill 
                className="object-cover opacity-90 blur-[2px] scale-105" 
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
           </div>

           {/* Profile Content (Z-Index 10) */}
           <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-end">
              <div className="relative group">
                <div className="w-36 h-36 rounded-3xl border-8 border-white/20 bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden relative">
                   <Image src="/user.png" alt="Profile" fill className="object-cover" />
                </div>
                <button className="absolute -bottom-2 -right-2 p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg border-4 border-white">
                   <Camera size={18} />
                </button>
              </div>

              <div className="flex-1 pb-2 text-center md:text-left">
                <h1 className="text-4xl font-black text-white tracking-tight leading-none mb-4 drop-shadow-md">
                   ABDUL KADER
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                   <span className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold border border-white/20 shadow-sm">
                     <Fingerprint size={14} className="text-white/60" /> 24083000015
                   </span>
                   <span className="flex items-center gap-2 text-amber-300 bg-amber-950/30 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-500/30 shadow-sm">
                     <Award size={14} className="text-amber-400" /> S1 Sistem Informasi
                   </span>
                   <span className="flex items-center gap-2 text-emerald-300 bg-emerald-950/30 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold border border-emerald-500/30 shadow-sm">
                     <CheckCircle2 size={14} className="text-emerald-400" /> Mahasiswa Aktif
                   </span>
                </div>
              </div>

              <button 
                onClick={() => setIsQrOpen(true)}
                className="shrink-0 flex flex-col items-center border-l border-white/10 pl-4 md:pl-8 group/qr cursor-pointer hover:opacity-100 transition-opacity"
              >
                 <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-1.5 rounded-2xl group-hover/qr:scale-110 transition-transform shadow-2xl relative overflow-hidden">
                    <img src={qrUrl} alt="QR Code" className="w-full h-full opacity-90" />
                    <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-2xl" />
                 </div>
                 <div className="text-[9px] md:text-[10px] text-center text-white/50 mt-2 font-bold uppercase tracking-[0.2em] group-hover/qr:text-white transition-colors flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> SCAN ID
                 </div>
              </button>
           </div>
        </div>

        {/* PREMIUM DIGITAL ID / SCANNER POPUP */}
        {mounted && createPortal(
          <AnimatePresence mode="wait">
            {isQrOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                {/* Darker backdrop for focus */}
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
                   onClick={() => setIsQrOpen(false)}
                />
                
                {/* ID Card Container */}
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0, y: 50 }}
                   animate={{ scale: 1, opacity: 1, y: 0 }}
                   exit={{ scale: 0.8, opacity: 0, y: 50 }}
                   className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative z-10 overflow-hidden flex flex-col items-center"
                   onClick={(e) => e.stopPropagation()}
                >
                   {/* Top Header Section (UNMER Identity) */}
                   <div className="w-full bg-slate-900 pt-10 pb-20 px-10 flex flex-col items-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/20 blur-[60px] -mr-20 -mt-20" />
                      <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500/10 blur-[60px] -ml-20 -mt-20" />
                      
                      <div className="relative w-16 h-16 mb-4">
                         <Image src="/logounmer.png" alt="UNMER Logo" fill className="object-contain" />
                      </div>
                      <h4 className="text-amber-400 font-black text-xs uppercase tracking-[0.4em] mb-1">Universitas Merdeka Malang</h4>
                      <h3 className="text-white font-bold text-sm opacity-50 uppercase tracking-widest">Digital Student Passport</h3>

                      <button 
                         onClick={() => setIsQrOpen(false)}
                         className="absolute top-6 right-6 p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all"
                      >
                         <X size={24} />
                      </button>
                   </div>

                   {/* Main ID Section (Floating Card Style) */}
                   <div className="w-full px-8 -mt-16 mb-10 z-20">
                      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 flex flex-col items-center">
                         {/* User Info inside Card */}
                         <div className="flex items-center gap-4 mb-8 w-full">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm relative shrink-0">
                               <Image src="/user.png" alt="User" fill className="object-cover" />
                            </div>
                            <div className="overflow-hidden">
                               <p className="text-lg font-black text-slate-900 leading-none truncate uppercase tracking-tight">ABDUL KADER</p>
                               <p className="text-xs font-bold text-indigo-600 mt-1 uppercase tracking-widest">24083000015</p>
                               <p className="text-[10px] font-bold text-slate-400 mt-0.5 truncate">S1 Sistem Informasi • Genap (4)</p>
                            </div>
                         </div>

                         {/* Scanner Area */}
                         <div className="w-full aspect-square bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 p-6 flex items-center justify-center relative overflow-hidden group">
                             {/* QR Code */}
                             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative z-10 transition-transform group-hover:scale-105 duration-500">
                                <img src={qrUrl} alt="QR Code" className="w-48 h-48 opacity-90" />
                             </div>
                             
                             {/* Corner Accents */}
                             <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-slate-300 rounded-tl-lg" />
                             <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-slate-300 rounded-tr-lg" />
                             <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-slate-300 rounded-bl-lg" />
                             <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-slate-300 rounded-br-lg" />
                         </div>
                      </div>
                   </div>

                   {/* Footer Actions */}
                   <div className="w-full px-10 pb-12 flex flex-col gap-4">
                      <button 
                         onClick={downloadQr}
                         className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-black text-base rounded-2xl transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-95 group"
                      >
                         <Download size={20} className="text-amber-400 group-hover:-translate-y-1 transition-transform" /> 
                         DOWNLOAD DIGITAL PASSPORT
                      </button>
                      <button 
                        onClick={() => setIsQrOpen(false)}
                        className="w-full py-2 text-slate-400 font-bold hover:text-slate-600 transition-colors uppercase text-[10px] tracking-[0.4em]"
                      >
                        Tutup ID
                      </button>
                   </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
        
        {/* Tabs & Content Section */}
        <div className="px-10 pb-10 flex-1 bg-white">
          {/* 2. Premium Tabs */}
          <div className="flex gap-8 border-b border-slate-100 mb-10 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-2 py-5 text-sm font-bold transition-all relative border-b-2 ${
                  activeTab === tab.id ? "text-indigo-600 border-indigo-600" : "text-slate-400 border-transparent hover:text-slate-600"
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3. Tab Content */}
          <div className="min-h-[400px]">
             <AnimatePresence mode="wait">
                <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2"
                >
                   {activeTab === "pribadi" && (
                   <>
                      <DataItem label="Nama Lengkap" value="ABDUL KADER" icon={User} />
                      <DataItem label="NIK (KTP)" value="3513170101060003" icon={Fingerprint} />
                      <DataItem label="Tempat Lahir" value="Malang" icon={MapPin} />
                      <DataItem label="Tanggal Lahir" value="12 Agustus 2004" icon={CalendarIcon} />
                      <DataItem label="Jenis Kelamin" value="Laki-Laki" icon={User} />
                      <DataItem label="Agama" value="Islam" icon={Heart} />
                      <DataItem label="Alamat Tetap" value="Jl. Raya Candi V No. 12, Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur 65146" icon={Map} />
                      <DataItem label="Email Student" value="24083000015@student.unmer.ac.id" icon={Mail} />
                      <DataItem label="No. Handphone" value="0812-3456-7890" icon={Phone} />
                   </>
                   )}

                   {activeTab === "akademik" && (
                   <>
                      <DataItem label="Fakultas" value="Fakultas Teknologi Informasi" icon={Building2} />
                      <DataItem label="Program Studi" value="S1 Sistem Informasi" icon={GraduationCap} />
                      <DataItem label="Tahun Angkatan" value="2024" icon={CalendarIcon} />
                      <DataItem label="Jenjang / Status" value="S1 / Reguler" icon={Award} />
                      <DataItem label="Dosen Wali" value="Listanto Tri Utomo, S.Kom., M.M." icon={Contact} />
                      <DataItem label="IPK Saat Ini" value="3.83" icon={Award} />
                      <DataItem label="SKS Lulus" value="63 SKS" icon={BookOpen} />
                      <DataItem label="Semester" value="4 (Genap)" icon={Layers} />
                      <DataItem label="Maksimum SKS" value="24 SKS" icon={ClipboardCheck} />
                   </>
                   )}

                   {activeTab === "keluarga" && (
                   <>
                      <div className="col-span-full mb-4">
                        <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Data Orang Tua</h4>
                      </div>
                      <DataItem label="Nama Ayah" value="SUPARNO" />
                      <DataItem label="NIK Ayah" value="351317XXXXXXXXXX" />
                      <DataItem label="Pekerjaan Ayah" value="Wirausaha" />
                      <DataItem label="Nama Ibu" value="SITI AMINAH" />
                      <DataItem label="NIK Ibu" value="351317XXXXXXXXXX" />
                      <DataItem label="Pekerjaan Ibu" value="Ibu Rumah Tangga" />
                   </>
                   )}

                   {activeTab === "pendidikan" && (
                   <>
                      <div className="col-span-full mb-4">
                        <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Riwayat Sekolah</h4>
                      </div>
                      <div className="col-span-full space-y-4">
                         {[
                            { level: "SMA / Sederajat", name: "SMAN 1 Kota Malang", year: "2021 - 2024" },
                            { level: "SMP / Sederajat", name: "SMPN 3 Kota Malang", year: "2018 - 2021" },
                         ].map((edu, i) => (
                           <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
                             <div>
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{edu.level}</p>
                               <p className="text-base font-bold text-slate-800">{edu.name}</p>
                             </div>
                             <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200">{edu.year}</span>
                           </div>
                         ))}
                      </div>
                   </>
                   )}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
