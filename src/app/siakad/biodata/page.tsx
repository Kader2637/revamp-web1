"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, MapPin, Phone, Mail, Award, BookOpen, Fingerprint, 
  Calendar as CalendarIcon, Briefcase, ChevronRight, Contact, 
  Building2, Map, Layers, GraduationCap, 
  Users, Heart, ClipboardCheck, Camera, CheckCircle2
} from "lucide-react";
import Image from "next/image";

export default function BiodataPage() {
  const [activeTab, setActiveTab] = useState("pribadi");

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

              <div className="shrink-0 hidden xl:block border-l border-white/10 pl-8">
                 <div className="w-20 h-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-80 invert rounded-lg"></div>
                 <p className="text-[10px] text-center text-white/50 mt-2 font-bold uppercase tracking-widest">Digital ID</p>
              </div>
           </div>
        </div>
        
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
