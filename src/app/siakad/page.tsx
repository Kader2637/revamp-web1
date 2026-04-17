"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, BarChart2, Calendar, CreditCard, ChevronRight, TrendingUp, Presentation, BookOpen, Clock } from "lucide-react";
import Link from "next/link";

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

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400 to-blue-300 blur-3xl translate-x-20 -translate-y-20" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Halo, Abdul Kader! 👋</h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Selamat datang di Dashboard Akademik. Jangan lupa ada <b>2 tugas</b> yang harus segera dikumpulkan minggu ini.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold flex items-center gap-2">
              <Presentation size={16} /> S1 Sistem Informasi
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold flex items-center gap-2">
              <Calendar size={16} /> Semester Genap 2025/2026
            </span>
            <span className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Status: Aktif
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => (
              <motion.a
                href={stat.link}
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white border rounded-2xl p-5 transition-all group shadow-sm hover:shadow-md hover:-translate-y-1 ${stat.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}
                >
                  <stat.icon size={24} />
                </div>
                <h3 className="text-slate-900 font-bold">{stat.title}</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">{stat.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Detailed Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                 <h3 className="text-xl font-bold text-slate-900">Kemajuan Belajar</h3>
                 <p className="text-sm text-slate-500 mt-1">Grafik Indeks Prestasi per semester.</p>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button className="px-5 py-2 text-sm font-semibold bg-white text-indigo-600 rounded-lg shadow-sm">
                  IPK
                </button>
                <button className="px-5 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors">
                  IPS
                </button>
              </div>
            </div>
            
            {/* Elegant Chart Visualization */}
            <div className="h-64 relative border-l border-b border-slate-200 mt-8 ml-6 font-sans">
               {/* Grid lines */}
               <div className="absolute w-full h-[1px] bg-slate-100 top-0"></div>
               <div className="absolute w-full h-[1px] bg-slate-100 top-1/4"></div>
               <div className="absolute w-full h-[1px] bg-slate-100 top-2/4"></div>
               <div className="absolute w-full h-[1px] bg-slate-100 top-3/4"></div>

               <div className="absolute -left-10 top-0 text-xs font-semibold text-slate-400">4.0</div>
               <div className="absolute -left-10 top-1/4 translate-y-[-50%] text-xs font-semibold text-slate-400">3.0</div>
               <div className="absolute -left-10 top-2/4 translate-y-[-50%] text-xs font-semibold text-slate-400">2.0</div>
               <div className="absolute -left-10 top-3/4 translate-y-[-50%] text-xs font-semibold text-slate-400">1.0</div>
               <div className="absolute -left-10 bottom-0 translate-y-[50%] text-xs font-semibold text-slate-400">0.0</div>

               {/* CSS Line Chart SVG */}
               <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                     <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"/>
                     </linearGradient>
                  </defs>
                  
                  <polyline
                     fill="url(#chartGradient)"
                     stroke="none"
                     points="50,250 50,40 200,60 350,30 500,45 500,250"
                  />
                  <polyline
                     fill="none"
                     stroke="#4f46e5"
                     strokeWidth="4"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     points="50,40 200,60 350,30 500,45"
                  />
               </svg>

               {/* Data points */}
               {[
                  {x: 50, y: 40, label: "Smt 1", val: "3.75"},
                  {x: 200, y: 60, label: "Smt 2", val: "3.60"},
                  {x: 350, y: 30, label: "Smt 3", val: "3.83"},
                  {x: 500, y: 45, label: "Smt 4", val: "3.88"}
               ].map((pt, i) => (
                  <div key={i}>
                     {/* Info Tooltip */}
                     <div className="absolute flex flex-col items-center group -translate-x-1/2 -translate-y-1/2" style={{ left: pt.x, top: pt.y }}>
                        <div className="w-4 h-4 bg-white border-4 border-indigo-600 rounded-full cursor-pointer hover:scale-150 transition-transform"></div>
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs font-bold py-1 px-3 rounded-lg shadow-lg pointer-events-none">
                           {pt.val}
                        </div>
                     </div>
                     <div className="absolute text-sm font-semibold text-slate-500 -translate-x-1/2 -bottom-8" style={{ left: pt.x }}>{pt.label}</div>
                  </div>
               ))}
            </div>
            
            <div className="mt-12 flex justify-center items-center gap-6">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                   <span className="text-slate-600 text-sm font-medium">Nilai IPK</span>
                 </div>
                 <div className="flex items-center gap-2 opacity-50">
                   <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                   <span className="text-slate-600 text-sm font-medium">Batas Minimum (2.0)</span>
                 </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
           
          {/* Jadwal Hari Ini Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                 <Clock size={20} className="text-indigo-500" /> Kelas Hari Ini
               </h3>
               <Link href="/siakad/jadwal" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Lihat Semua</Link>
            </div>
            <div className="space-y-4">
               {jadwalHariIni.map((jadwal, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start group hover:border-indigo-200 transition-colors cursor-pointer">
                     <div className="flex flex-col items-center bg-white border border-slate-200 rounded-xl px-2 py-1.5 shrink-0 mt-1">
                        <span className="text-xs font-bold text-slate-400 uppercase">Jam</span>
                        <span className="text-sm font-bold text-indigo-600">{jadwal.waktu.split(' - ')[0]}</span>
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors mb-1">{jadwal.matkul}</h4>
                        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                           <span className="flex items-center gap-1"><BookOpen size={12}/>{jadwal.jenis}</span>
                           <span className="flex items-center gap-1"><Presentation size={12}/>{jadwal.ruang}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </motion.div>

          {/* Keuangan Short Widget */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 }}
             className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg shadow-indigo-600/20 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <CreditCard size={120} className="transform rotate-12 translate-x-4 -translate-y-4" />
             </div>
             <div className="relative z-10">
                <h3 className="text-indigo-100 text-sm font-medium mb-1">Status Keuangan</h3>
                <p className="text-2xl font-bold mb-4">Aman & Lunas</p>
                <div className="flex items-center justify-between">
                   <span className="text-xs text-indigo-50 bg-black/20 px-3 py-1.5 rounded-lg backdrop-blur-md">T.A 2025/2026 Genap</span>
                   <Link href="/siakad/keuangan" className="w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:scale-110 transition-transform">
                      <ChevronRight size={18} />
                   </Link>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-blue-500" /> Pengumuman
            </h3>
            <div className="space-y-6">
              {[
                { title: "Libur Nasional & Cuti Bersama Idul Fitri 2026", date: "15 Apr 2026", label: "Penting" },
                { title: "Batas Akhir Pengisian KRS Semester Genap", date: "10 Apr 2026", label: "Akademik" },
                { title: "Pendaftaran Beasiswa Prestasi Djarum Plus", date: "5 Apr 2026", label: "Beasiswa" },
              ].map((news) => (
                <div key={news.title} className="group cursor-pointer flex gap-4">
                  <div className="w-1.5 rounded-full bg-indigo-500 shrink-0 group-hover:bg-indigo-600"></div>
                  <div>
                     <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-1">{news.label} • {news.date}</span>
                     <h4 className="text-slate-800 font-semibold group-hover:text-indigo-600 transition-colors text-sm leading-snug">
                       {news.title}
                     </h4>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors">Lihat Semua Berita</button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
