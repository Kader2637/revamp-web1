"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Calendar as CalendarIcon, User, Layers, Search, Filter, LayoutDashboard } from "lucide-react";

export default function JadwalPage() {
  const [activeDay, setActiveDay] = useState<string>("Senin");

  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  
  const jadwalData = [
    { hari: "Senin", matkul: "ARSITEKTUR ENTERPRISE", waktu: "09:10 - 10:50", ruang: "B02 (Perkuliahan Pasca)", dosen: "Listanto Tri Utomo", sks: 2, tipe: "Teori", color: "blue" },
    { hari: "Senin", matkul: "DATA WAREHOUSE", waktu: "10:50 - 12:30", ruang: "FTI LAB-C", dosen: "Drs. Anis Zubair", sks: 3, tipe: "Praktikum", color: "indigo" },
    { hari: "Senin", matkul: "PEMROGRAMAN WEB", waktu: "14:10 - 15:50", ruang: "FTI LAB-D", dosen: "Arif Saivul Affandi", sks: 3, tipe: "Praktikum", color: "emerald" },
    
    { hari: "Selasa", matkul: "PERANCANGAN UI/UX", waktu: "07:30 - 09:10", ruang: "FTI LAB-D", dosen: "Viky Puspaning Ramadhan", sks: 3, tipe: "Praktikum", color: "purple" },
    { hari: "Selasa", matkul: "BAHASA INGGRIS 2", waktu: "09:10 - 10:50", ruang: "B02 (Perkuliahan Pasca)", dosen: "Prella Lukis Wediyantoro", sks: 2, tipe: "Teori", color: "orange" },
    
    { hari: "Rabu", matkul: "ENTREPRENEURSHIP", waktu: "12:30 - 14:10", ruang: "B02 (Perkuliahan Pasca)", dosen: "Hudan Eka Rosyadi", sks: 2, tipe: "Teori", color: "rose" },
    
    { hari: "Kamis", matkul: "E-BISNIS", waktu: "10:50 - 12:30", ruang: "FTI LAB-F", dosen: "Haris Satriyawan", sks: 3, tipe: "Praktikum", color: "sky" },
    { hari: "Kamis", matkul: "ETIKA PROFESI", waktu: "12:30 - 14:10", ruang: "B02 (Perkuliahan Pasca)", dosen: "Devika Maulina Putri", sks: 2, tipe: "Teori", color: "amber" },
    
    { hari: "Jumat", matkul: "ANALIS DAN DESAIN SISTEM", waktu: "09:10 - 10:50", ruang: "FTI LAB-B", dosen: "Fandi Yulian Pamuji", sks: 3, tipe: "Praktikum", color: "teal" },
  ];

  const filteredJadwal = jadwalData.filter(j => j.hari === activeDay).sort((a,b) => a.waktu.localeCompare(b.waktu));

  // Helper styling func
  const getColorStyles = (color: string) => {
    const map: Record<string, string> = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      rose: "bg-rose-50 border-rose-200 text-rose-700",
      sky: "bg-sky-50 border-sky-200 text-sky-700",
      amber: "bg-amber-50 border-amber-200 text-amber-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700",
    };
    return map[color] || map.indigo;
  };

  const getBadgeStyles = (color: string) => {
    const map: Record<string, string> = {
      blue: "bg-blue-100 text-blue-800",
      indigo: "bg-indigo-100 text-indigo-800",
      emerald: "bg-emerald-100 text-emerald-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      rose: "bg-rose-100 text-rose-800",
      sky: "bg-sky-100 text-sky-800",
      amber: "bg-amber-100 text-amber-800",
      teal: "bg-teal-100 text-teal-800",
    };
    return map[color] || map.indigo;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
         <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Jadwal Kuliah</h1>
            <p className="text-slate-500 text-base max-w-lg">
               Kelola jadwal perkuliahan Anda. Selalu periksa ruangan sebelum kelas dimulai.
            </p>
         </div>
         <div className="flex gap-3">
             <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Cari matkul..." className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium min-w-[200px]" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors">
               <Filter size={18} /> Filter
             </button>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
         {/* Days Navigation Sidebar */}
         <div className="w-full lg:w-64 shrink-0 flex gap-2 lg:flex-col overflow-x-auto lg:overflow-hidden pb-4 lg:pb-0 sticky top-28 z-10 custom-scrollbar">
            {days.map((day) => {
               const isActive = activeDay === day;
               const count = jadwalData.filter(j => j.hari === day).length;
               return (
                  <button
                     key={day}
                     onClick={() => setActiveDay(day)}
                     className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all whitespace-nowrap min-w-[120px] lg:min-w-0 ${
                        isActive 
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 lg:scale-[1.02]" 
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                     }`}
                  >
                     <span className="text-base">{day}</span>
                     {count > 0 && (
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ml-3 ${
                           isActive ? "bg-white text-indigo-600" : "bg-slate-100 text-slate-500"
                        }`}>
                           {count}
                        </span>
                     )}
                  </button>
               )
            })}
         </div>

         {/* Timeline Content */}
         <div className="flex-1 w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-10 relative">
            
            {/* Timeline decorative line */}
            {filteredJadwal.length > 0 && (
               <div className="absolute left-[39px] sm:left-[55px] lg:left-[67px] top-10 bottom-10 w-0.5 bg-slate-100 hidden sm:block"></div>
            )}

            <AnimatePresence mode="wait">
               <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
               >
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
                     <CalendarIcon size={24} className="text-indigo-600" />
                     <h2 className="text-2xl font-bold text-slate-800">Jadwal hari {activeDay}</h2>
                  </div>

                  {filteredJadwal.length > 0 ? (
                     <div className="space-y-6 lg:space-y-8">
                        {filteredJadwal.map((kelas, idx) => (
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              key={idx} 
                              className="relative flex flex-col sm:flex-row gap-6 group"
                           >
                              {/* Connector dot */}
                              <div className="hidden sm:flex mt-6 w-8 h-8 rounded-full border-4 border-white bg-white shadow-sm items-center justify-center relative z-10 shrink-0">
                                 <div className={`w-3 h-3 rounded-full bg-${kelas.color}-500`}></div>
                              </div>

                              <div className={`flex-1 rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:shadow-md ${getColorStyles(kelas.color)}`}>
                                 <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-4">
                                    <div>
                                       <div className="flex flex-wrap items-center gap-2 mb-3">
                                          <span className={`px-2.5 py-1 text-xs font-bold rounded-lg ${getBadgeStyles(kelas.color)}`}>
                                             {kelas.waktu}
                                          </span>
                                          <span className="px-2.5 py-1 bg-white/60 text-slate-600 text-xs font-bold rounded-lg shadow-sm">
                                             {kelas.sks} SKS
                                          </span>
                                          <span className="px-2.5 py-1 bg-white/60 text-slate-600 text-xs font-bold rounded-lg shadow-sm">
                                             {kelas.tipe}
                                          </span>
                                       </div>
                                       <h3 className="text-xl font-black tracking-tight leading-tight mb-2">
                                          {kelas.matkul}
                                       </h3>
                                    </div>
                                    <div className="flex flex-row xl:flex-col gap-2 shrink-0">
                                       <button className="px-4 py-2 bg-white rounded-xl shadow-sm border border-transparent hover:border-slate-300 text-slate-700 text-sm font-semibold transition-all">Presensi</button>
                                       <button className="px-4 py-2 bg-white/50 rounded-xl hover:bg-white border border-transparent hover:border-slate-300 text-slate-700 text-sm font-semibold transition-all">Materi</button>
                                    </div>
                                 </div>
                                 
                                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 border-t border-slate-900/10">
                                    <div className="flex items-center gap-2.5">
                                       <div className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shrink-0">
                                          <MapPin size={16} className="opacity-70" />
                                       </div>
                                       <span className="text-sm font-bold opacity-90">{kelas.ruang}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                       <div className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shrink-0">
                                          <User size={16} className="opacity-70" />
                                       </div>
                                       <span className="text-sm font-bold opacity-90">{kelas.dosen}</span>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  ) : (
                     <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                           <LayoutDashboard size={48} className="text-slate-200" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Yeay! Tidak ada kelas</h3>
                        <p className="text-slate-500 max-w-sm">Anda tidak memiliki jadwal mata kuliah pada hari ini. Gunakan waktu luang untuk mengerjakan tugas atau beristirahat.</p>
                     </div>
                  )}

               </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
}
