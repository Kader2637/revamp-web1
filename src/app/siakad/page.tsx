"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, BarChart2, Calendar, CreditCard, ChevronRight, 
  TrendingUp, Presentation, BookOpen, Clock, CheckCircle2, 
  AlertCircle, Download, MoreHorizontal, MousePointerClick
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SiakadDashboard() {
  const quickStats = [
    {
      title: "KRS Aktif",
      desc: "23 SKS Tempuh",
      icon: FileText,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      link: "/siakad/krs",
    },
    {
      title: "Indeks Prestasi",
      desc: "IPK: 3.83",
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      link: "#",
    },
    {
      title: "Jadwal Hari Ini",
      desc: "2 Mata Kuliah",
      icon: Calendar,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      link: "/siakad/jadwal",
    },
    {
      title: "Tugas Pending",
      desc: "2 Tugas Baru",
      icon: BookOpen,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      link: "/siakad/tugas",
    },
  ];

  const jadwalHariIni = [
    { matkul: "ANALIS DAN DESAIN SISTEM", ruang: "FTI LAB-B", waktu: "09:10 - 10:50", jenis: "Praktikum" },
    { matkul: "PERANCANGAN UI/UX", ruang: "FTI LAB-D", waktu: "13:00 - 15:30", jenis: "Teori" }
  ];

  const materiTerbaru = [
    { title: "Pertemuan 7: Prototyping High-Fidelity", course: "Perancangan UI/UX", type: "PDF", size: "4.2 MB", date: "Hari ini" },
    { title: "Pertemuan 6: Data Flow Diagram (DFD)", course: "Analis & Desain Sistem", type: "PPTX", size: "12.5 MB", date: "Kemarin" }
  ];

  const tugasSegeraBerakhir = [
    { title: "Final Project UI/UX: Design System", deadline: "2 hari lagi", priority: "High" },
    { title: "Laporan Praktikum Analis Sistem", deadline: "4 hari lagi", priority: "Medium" }
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Integrated Welcome Banner (Premium Light) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-40 pointer-events-none">
           <div className="w-96 h-96 rounded-full bg-indigo-50 blur-[100px] translate-x-32 -translate-y-32" />
           <div className="w-96 h-96 rounded-full bg-emerald-50 blur-[100px] translate-x-10 translate-y-20 opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100 text-indigo-600 text-sm font-bold">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 Sesi Anda Aktif: Semester Genap 2025/2026
              </div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
                Halo, <span className="text-indigo-600">Abdul Kader!</span> 👋
              </h2>
              <p className="text-slate-500 text-lg max-w-xl font-medium leading-relaxed">
                Anda memiliki kemajuan belajar yang sangat baik sejauh ini. Ada <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">2 tugas</span> menanti untuk diselesaikan minggu ini.
              </p>
              
              <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                 <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center gap-2">
                    <Download size={18} /> Download KRS
                 </button>
                 <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all flex items-center gap-2">
                    <BarChart2 size={18} /> Transkrip Nilai
                 </button>
              </div>
           </div>
           
           <div className="shrink-0 hidden lg:block">
              <div className="w-56 h-56 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 flex flex-col items-center justify-center text-center shadow-inner relative group">
                 <div className="relative z-10">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">Presensi</span>
                    <span className="text-5xl font-black text-slate-900 block mb-1">94%</span>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md">Sangat Baik</span>
                 </div>
                 {/* Decorative Circle Progress */}
                 <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#dee2e6" strokeWidth="8" />
                    <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#4f46e5" strokeWidth="8" strokeDasharray="264" strokeDashoffset="15" strokeLinecap="round" />
                 </svg>
              </div>
           </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* 2. Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => (
              <motion.a
                href={stat.link}
                key={stat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white border rounded-[2rem] p-6 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2 ${stat.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${stat.bg} ${stat.color} group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                >
                  <stat.icon size={26} />
                </div>
                <h3 className="text-slate-900 font-black text-base">{stat.title}</h3>
                <p className="text-slate-500 text-[11px] mt-1.5 font-bold uppercase tracking-widest">{stat.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* 3. Central Content: Progress & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* IPK Chart Widget */}
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8 flex flex-col h-full"
             >
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-xl font-black text-slate-900 tracking-tight">Indeks Prestasi</h3>
                   <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><TrendingUp size={20}/></span>
                </div>
                
                <div className="flex-1 flex flex-col justify-end mt-4">
                   <div className="relative h-48 w-full group">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                         {[0, 1, 2, 3].map(i => (
                            <div key={i} className="w-full h-px bg-slate-100" />
                         ))}
                      </div>

                      {/* Line Chart SVG */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                         <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2"/>
                               <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"/>
                            </linearGradient>
                         </defs>
                         
                         {/* Area Fill */}
                         <motion.path
                            initial={{ d: "M 0 192 L 0 192 L 110 192 L 220 192 L 340 192 L 340 192 Z" }}
                            animate={{ 
                               d: "M 0 192 L 0 50 L 110 75 L 220 35 L 340 25 L 340 192 Z" 
                            }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            fill="url(#lineGradient)"
                            stroke="none"
                         />

                         {/* The Line */}
                         <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            d="M 0 50 L 110 75 L 220 35 L 340 25"
                            fill="none"
                            stroke="#4f46e5"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                         />
                      </svg>

                      {/* Data Nodes & Labels */}
                      <div className="absolute inset-0 flex justify-between items-baseline px-0">
                         {[
                            { val: "3.75", smt: "Smt 1", top: "50px" },
                            { val: "3.60", smt: "Smt 2", top: "75px" },
                            { val: "3.83", smt: "Smt 3", top: "35px" },
                            { val: "3.88", smt: "Smt 4", top: "25px", live: true }
                         ].map((node, i) => (
                            <div key={i} className="flex flex-col items-center relative" style={{ width: "25%" }}>
                               {/* Node Dot */}
                               <motion.div 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 1 + (i * 0.2) }}
                                  className="absolute w-4 h-4 rounded-full bg-white border-4 border-indigo-600 shadow-md z-20 cursor-pointer hover:scale-150 transition-transform"
                                  style={{ top: `calc(${node.top} - 8px)` }}
                               />
                               
                               {/* Value Tooltip Style */}
                               <div className="absolute -top-6 text-[11px] font-black text-slate-800" style={{ top: `calc(${node.top} - 32px)` }}>
                                  {node.val}
                               </div>

                               {/* Live Badge */}
                               {node.live && (
                                  <div className="absolute bg-emerald-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded-full -top-4" style={{ top: `calc(${node.top} - 45px)` }}>
                                     LIVE
                                  </div>
                                )}

                               {/* Semester Label */}
                               <div className="absolute bottom-[-30px] text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                  {node.smt}
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900 leading-none">3.83</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">IPK Kumulatif</span>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                      <ChevronRight size={20} />
                   </button>
                </div>
             </motion.div>

             {/* Recent Materials */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8"
             >
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-xl font-black text-slate-900 tracking-tight">Materi Terbaru</h3>
                   <Link href="/siakad/materi" className="text-xs font-bold text-indigo-600 hover:underline">Lihat Semua</Link>
                </div>
                
                <div className="space-y-4">
                   {materiTerbaru.map((materi, idx) => (
                      <div key={idx} className="p-4 rounded-3xl bg-slate-50 border border-slate-100 flex items-center gap-4 group cursor-pointer hover:border-indigo-200 transition-all">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-bold text-xs ${materi.type === "PDF" ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-600"}`}>
                            {materi.type}
                         </div>
                         <div className="flex-1 overflow-hidden">
                            <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">{materi.title}</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase truncate mt-0.5">{materi.course} • {materi.size}</p>
                         </div>
                         <span className="text-[9px] font-black text-slate-400 uppercase bg-white px-2 py-1 rounded-lg border border-slate-100">{materi.date}</span>
                      </div>
                   ))}
                </div>
                
                <div className="mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 flex items-center gap-4">
                   <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shrink-0">
                      <AlertCircle size={20} />
                   </div>
                   <p className="text-[11px] font-semibold text-indigo-900 leading-snug">
                     Ada <strong>3 materi baru</strong> di modul Pemrograman Web yang belum Anda unduh.
                   </p>
                </div>
             </motion.div>
          </div>

          {/* 4. Timeline / Tugas Section */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8"
          >
             <div className="flex items-center justify-between mb-10">
                <div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Deadline Tugas</h3>
                   <p className="text-sm text-slate-500 font-medium mt-1 text-indigo-600">Prioritas pengumpulan minggu ini</p>
                </div>
                <button className="p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl text-slate-500 transition-colors">
                   <MoreHorizontal size={20} />
                </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tugasSegeraBerakhir.map((tugas, idx) => (
                   <div key={idx} className="relative p-6 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 blur-[40px] opacity-10 -mr-16 -mt-16 ${tugas.priority === "High" ? "bg-rose-600" : "bg-indigo-600"}`} />
                      <div className="relative z-10 flex flex-col gap-5">
                         <div className="flex justify-between items-start">
                            <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${tugas.priority === "High" ? "bg-rose-50 text-rose-600 border border-rose-100" : "bg-indigo-50 text-indigo-600 border border-indigo-100"}`}>
                               PRIORITY: {tugas.priority}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                               <Clock size={14} className="text-indigo-500" /> Deadline: {tugas.deadline}
                            </span>
                         </div>
                         <h4 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                            {tugas.title}
                         </h4>
                         <Link href="/siakad/tugas" className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest bg-indigo-50 w-fit px-4 py-2.5 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            Submit Sekarang <MousePointerClick size={14} />
                         </Link>
                      </div>
                   </div>
                ))}
             </div>
          </motion.div>
        </div>

        {/* 5. RIGHT COLUMN: Widgets */}
        <div className="space-y-8">
           
          {/* Today's Classes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8"
          >
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                 <Clock size={22} className="text-indigo-600" /> Kelas Hari Ini
               </h3>
               <Link href="/siakad/jadwal" className="p-2 bg-slate-100 text-slate-400 hover:text-indigo-600 rounded-xl transition-all">
                  <ChevronRight size={18} />
               </Link>
            </div>
            <div className="space-y-5">
               {jadwalHariIni.map((jadwal, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-indigo-100 group cursor-pointer py-1">
                     <div className="absolute left-[-5px] top-6 w-2 h-2 rounded-full bg-indigo-500 border-4 border-white shadow-[0_0_0_2px_#e0e7ff] group-hover:scale-150 transition-transform" />
                     <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.2em]">{jadwal.waktu}</span>
                        <h4 className="text-[15px] font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{jadwal.matkul}</h4>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                           <span className="flex items-center gap-1.5"><MapPin size={12} className="text-rose-500" /> {jadwal.ruang}</span>
                           <span className="flex items-center gap-1.5"><Layers size={12} className="text-amber-500" /> {jadwal.jenis}</span>
                        </div>
                     </div>
                  </div>
               ))}
               
               <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                     <CheckCircle2 className="text-emerald-500" size={20} />
                     <p className="text-[11px] font-bold text-emerald-800 leading-snug">Semua kelas hari ini selesai. Istirahatlah sejenak!</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Financial Summary */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.7 }}
             className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700">
                <CreditCard size={150} className="transform rotate-12 translate-x-8 -translate-y-8" />
             </div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                   <CreditCard size={24} />
                </div>
                <h3 className="text-indigo-200 text-xs font-bold uppercase tracking-[0.3em] mb-2">Status Pembayaran</h3>
                <p className="text-3xl font-black mb-1">Aman & Lunas</p>
                <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest opacity-80 mb-8">Semester Genap 2025/2026</p>
                
                <Link href="/siakad/keuangan" className="w-full py-4 bg-white text-indigo-900 font-black text-sm rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-50 transition-all active:scale-95 shadow-lg">
                   Check Detail Tagihan <ArrowRight size={18} />
                </Link>
             </div>
          </motion.div>

          {/* Announcements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white border border-slate-200 shadow-sm rounded-[2.5rem] p-8"
          >
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                 <AlertCircle size={22} className="text-amber-500" /> Informasi
               </h3>
            </div>
            <div className="space-y-8 relative pl-4 border-l-2 border-slate-50">
              {[
                { title: "Libur Nasional Idul Fitri 2026", date: "15 Apr", tag: "Penting", dot: "bg-rose-500" },
                { title: "Batas Akhir KRS Semester Genap", date: "10 Apr", tag: "Akademik", dot: "bg-indigo-500" },
                { title: "Pendaftaran Beasiswa Prestasi", date: "05 Apr", tag: "Beasiswa", dot: "bg-emerald-500" },
              ].map((news, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className={`absolute left-[-21px] top-1.5 w-3 h-3 rounded-full border-4 border-white shadow-sm transition-transform group-hover:scale-150 ${news.dot}`} />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">{news.tag} • {news.date}</span>
                  <h4 className="text-sm font-black text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                    {news.title}
                  </h4>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-[0.2em] rounded-2xl border border-slate-100 transition-all">
                Semua Pengumuman
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function MapPin({ size, className }: { size: number, className: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}

function Layers({ size, className }: { size: number, className: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.3a2 2 0 0 0 0 3.82l1.65.69"/><path d="m12 22.15 8.94-4.22a2 2 0 0 0 0-3.66l-1.65-.69"/><path d="m3.75 14.28 1.65-.69"/><path d="m7.1 11.27 3.24 1.36a2 2 0 0 0 1.66 0l10-4.22a2 2 0 0 0 0-3.66l-1.65-.69"/><path d="m7.1 17.27 3.24 1.36a2 2 0 0 0 1.66 0l1.65-.69"/><path d="M20.25 10.28 22 9.54"/></svg>;
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 5 7 7-7 7"/><path d="M5 12h14"/></svg>;
}
