"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, ChevronRight, FolderArchive, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function MateriPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const materiList = [
    {
      id: "83W19",
      matkul: "ANALIS DAN DESAIN SISTEM",
      materi: 5,
      lastUpdate: "10 Apr 2026",
    },
    {
      id: "83W21",
      matkul: "ARSITEKTUR ENTERPRISE",
      materi: 3,
      lastUpdate: "8 Apr 2026",
    },
    {
      id: "83U08",
      matkul: "BAHASA INGGRIS 2",
      materi: 4,
      lastUpdate: "7 Apr 2026",
    },
    {
      id: "83W22",
      matkul: "PEMROGRAMAN WEB",
      materi: 6,
      lastUpdate: "12 Apr 2026",
    },
    {
      id: "83W16",
      matkul: "ETIKA PROFESI",
      materi: 2,
      lastUpdate: "1 Apr 2026",
    },
  ];

  const filteredList = materiList.filter(item => 
    item.matkul.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm">
         <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Materi Kuliah</h1>
            <p className="text-slate-500 font-medium max-w-xl">Akses dan unduh materi pembelajaran yang bagikan oleh dosen Anda.</p>
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
            <FolderArchive size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tidak ditemukan</h3>
            <p className="text-slate-500 font-medium">Materi kelas "{searchQuery}" tidak tersedia.</p>
         </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredList.map((item, idx) => (
          <Link href={`/siakad/materi/${item.id}`} key={item.id}>
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               className="bg-white border text-center sm:text-left border-slate-200 hover:border-indigo-300 rounded-3xl p-6 lg:p-8 transition-all group flex flex-col shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden h-full"
             >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mb-6 mx-auto sm:mx-0 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                   <FolderArchive size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-tight flex-1">
                   {item.matkul}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-6 w-full">Kode: {item.id}</p>
                
                <div className="mt-auto flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 w-full justify-center sm:justify-start">
                       <div className="flex flex-col text-center sm:text-left">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total File</span>
                          <span className="text-sm font-extrabold text-slate-700 flex items-center justify-center sm:justify-start gap-1.5">
                             <FileText size={16} className="text-emerald-500" /> {item.materi} Dokumen
                          </span>
                       </div>
                    </div>
                    <div className="hidden sm:flex w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-600 group-hover:border-indigo-600 items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
                       <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
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
