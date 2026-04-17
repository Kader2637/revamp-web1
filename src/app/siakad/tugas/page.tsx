"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, FileText, BookOpen, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function TugasPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const tugasList = [
    {
      id: "83W19",
      matkul: "ANALIS DAN DESAIN SISTEM",
      peserta: 25,
      tugasAktif: 1,
      totalTugas: 4,
      color: "indigo"
    },
    {
      id: "83W16",
      matkul: "ETIKA PROFESI",
      peserta: 30,
      tugasAktif: 1,
      totalTugas: 3,
      color: "rose"
    },
    {
       id: "83W21",
       matkul: "ARSITEKTUR ENTERPRISE",
       peserta: 25,
       tugasAktif: 0,
       totalTugas: 2,
       color: "indigo"
    },
    {
       id: "83U08",
       matkul: "BAHASA INGGRIS 2",
       peserta: 28,
       tugasAktif: 0,
       totalTugas: 1,
       color: "emerald"
    },
    {
       id: "83W20",
       matkul: "DATA WAREHOUSE",
       peserta: 28,
       tugasAktif: 0,
       totalTugas: 3,
       color: "purple"
    },
    {
       id: "83W18",
       matkul: "E-BISNIS",
       peserta: 27,
       tugasAktif: 0,
       totalTugas: 2,
       color: "orange"
    },
  ];

  const filteredList = tugasList.filter(item => 
    item.matkul.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm">
         <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Tugas Kuliah</h1>
            <p className="text-slate-500 font-medium max-w-xl">Pilih mata kuliah untuk melihat dan mengumpulkan tugas Anda pada semester aktif ini.</p>
         </div>
         <div className="flex gap-3 shrink-0">
             <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari kelas..." 
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium min-w-[220px]" 
                />
             </div>
             <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-colors">
               <Filter size={18} />
             </button>
         </div>
      </div>

      {filteredList.length === 0 ? (
         <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed">
            <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tidak ditemukan</h3>
            <p className="text-slate-500 font-medium">Mata kuliah "{searchQuery}" tidak tersedia di semester Anda.</p>
         </div>
      ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredList.map((item, idx) => (
              <Link href={`/siakad/tugas/${item.id}`} key={item.id}>
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.05 }}
                   className="bg-white border text-center sm:text-left border-slate-200 hover:border-indigo-300 rounded-3xl p-6 lg:p-8 transition-all group flex flex-col shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden h-full"
                 >
                    {item.tugasAktif > 0 && (
                       <div className="absolute top-0 right-0 p-4">
                          <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-rose-500 px-3 py-1.5 rounded-full shadow-sm">
                             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> {item.tugasAktif} Tugas Aktif
                          </span>
                       </div>
                    )}
                    
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mb-6 mx-auto sm:mx-0 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                       <BookOpen size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-tight">
                       {item.matkul}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-6 w-full">Kode: {item.id}</p>
                    
                    <div className="mt-auto flex items-center justify-between w-full">
                        <div className="flex items-center gap-6 w-full justify-center sm:justify-start">
                           <div className="flex flex-col text-center sm:text-left">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Peserta</span>
                              <span className="text-sm font-extrabold text-slate-700 flex items-center justify-center sm:justify-start gap-1">
                                 <Users size={16} className="text-slate-400" /> {item.peserta}
                              </span>
                           </div>
                           <div className="w-px h-8 bg-slate-200"></div>
                           <div className="flex flex-col text-center sm:text-left">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Total Tugas</span>
                              <span className="text-sm font-extrabold text-slate-700 flex items-center justify-center sm:justify-start gap-1">
                                 <FileText size={16} className="text-emerald-500" /> {item.totalTugas}
                              </span>
                           </div>
                        </div>
                    </div>
                 </motion.div>
              </Link>
            ))}
         </div>
      )}
    </div>
  );
}
