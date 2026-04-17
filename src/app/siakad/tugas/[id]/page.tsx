"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, UploadCloud, FileText, CheckCircle2, Clock, ChevronDown, ChevronUp, AlertCircle, FileCheck2, Paperclip, X, Download, Filter, FileArchive } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function TugasDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [expandedHistory, setExpandedHistory] = useState<number | null>(null);
  const [filterActive, setFilterActive] = useState("Semua");

  const matkulName = id === "83W19" ? "ANALIS DAN DESAIN SISTEM" : 
                     id === "83W16" ? "ETIKA PROFESI" : "MATA KULIAH";

  const historyTugas = [
    {
       id: 1,
       title: "Tugas 2: Entity Relationship Diagram",
       deadline: "10 Mar 2026",
       submittedAt: "09 Mar 2026 14:20",
       fileName: "Tugas2_24083000015_AbdulKader.pdf",
       score: 85,
       status: "Selesai",
       feedback: "Struktur erd sudah cukup baik, namun perlu diperhatikan relasi many-to-many pada entitas transaksi."
    },
    {
       id: 2,
       title: "Tugas 1: Requirement Gathering",
       deadline: "24 Feb 2026",
       submittedAt: "24 Feb 2026 23:10",
       fileName: "Tugas1_Kader.docx",
       score: 90,
       status: "Selesai",
       feedback: "Sangat baik, analisis lengkap dan komprehensif."
    },
    {
       id: 3,
       title: "Kuis Pendahuluan",
       deadline: "10 Feb 2026",
       submittedAt: "-",
       fileName: "-",
       score: 0,
       status: "Belum",
       feedback: "Anda tidak mengumpulkan tugas ini."
    },
    {
       id: 4,
       title: "Latihan DFD",
       deadline: "15 Mar 2026",
       submittedAt: "16 Mar 2026 08:00",
       fileName: "DFD_Kader_Telat.pdf",
       score: 75,
       status: "Telat",
       feedback: "Tugas telat dari batas waktu. Nilai dipotong 10 poin."
    }
  ];

  const filteredHistory = filterActive === "Semua" ? historyTugas : historyTugas.filter(t => t.status === filterActive);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const toggleHistory = (hid: number) => {
     setExpandedHistory(prev => prev === hid ? null : hid);
  };

  const getStatusComponent = (status: string) => {
     switch(status) {
        case 'Selesai': return <span className="flex items-center gap-1 text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded"><CheckCircle2 size={12}/> Dikumpulkan</span>;
        case 'Belum': return <span className="flex items-center gap-1 text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded"><AlertCircle size={12}/> Tidak Kumpul</span>;
        case 'Telat': return <span className="flex items-center gap-1 text-xs font-bold bg-rose-100 text-rose-700 px-2 py-1 rounded"><Clock size={12}/> Terlambat</span>;
     }
  }

  return (
    <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto pb-10">
      <div className="flex flex-col gap-4 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
             <FileText size={160} className="-translate-y-8 translate-x-8 text-indigo-900" />
         </div>
         <div className="relative z-10">
            <Link href="/siakad/tugas" className="inline-flex items-center gap-2 text-sm text-indigo-600 font-bold mb-4 hover:translate-x-1 transition-transform w-fit bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
               <ArrowLeft size={16} /> Kembali
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">{matkulName}</h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">{id}</p>
         </div>
      </div>

      {/* TUGAS SAAT INI */}
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-8"
      >
         <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-slate-900">Tugas Saat Ini</h2>
         </div>

         <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-2xl p-6 lg:p-8 mb-8 relative overflow-hidden shadow-sm">
            <h3 className="text-xl font-extrabold text-rose-900 mb-2">Tugas 3: Wireframing Dashboard</h3>
            <div className="flex items-center gap-4 text-sm font-bold text-rose-700/80 mb-6 bg-white w-fit px-4 py-2 rounded-xl border border-rose-100 shadow-sm">
               <span className="flex items-center gap-1.5"><Clock size={16} /> Deadline: 18 April 2026, 23:59 WIB</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
               Silakan buat desain wireframe Lo-Fi (Low Fidelity) untuk studi kasus e-commerce menggunakan Figma atau draw.io. Kumpulkan dalam format PDF (maks. 5MB). Pastikan wireframe mencakup alur checkout.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white border border-rose-100 p-4 rounded-2xl shadow-sm">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                     <FileArchive size={24} />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-slate-900">Pedoman_Tugas3_Eksplorasi.pdf</p>
                     <p className="text-xs font-semibold text-slate-500 mt-0.5">PDF Document • 1.2 MB</p>
                  </div>
               </div>
               <button className="flex justify-center items-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 text-slate-700 font-bold rounded-xl transition-colors">
                  <Download size={16} /> Unduh Soal
               </button>
            </div>
         </div>

         <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest pl-1">Form Pengumpulan Tugas</h3>
            
            {/* Upload Area */}
            <div 
               className={`border-2 border-dashed rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center text-center transition-all bg-slate-50 relative ${
                  dragActive ? "border-indigo-500 bg-indigo-50 scale-[1.02]" : "border-slate-300 hover:border-slate-400"
               }`}
               onDragEnter={handleDrag}
               onDragLeave={handleDrag}
               onDragOver={handleDrag}
               onDrop={handleDrop}
            >
               {selectedFile ? (
                  <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                     <div className="w-20 h-20 bg-white border-4 border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <FileCheck2 size={40} />
                     </div>
                     <span className="font-extrabold text-slate-900 mb-1">{selectedFile.name}</span>
                     <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-6">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                     <button 
                        onClick={() => setSelectedFile(null)}
                        className="flex items-center gap-1 text-sm font-bold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors"
                     >
                        <X size={16} /> Batal / Ganti File
                     </button>
                  </div>
               ) : (
                  <>
                     <div className="w-20 h-20 bg-white text-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                        <UploadCloud size={40} />
                     </div>
                     <p className="font-extrabold text-slate-900 mb-2 text-lg">Tarik dan lepas file tugas Anda di sini</p>
                     <p className="text-sm font-medium text-slate-500 mb-8 max-w-sm">Dukung format PDF, DOCX, ZIP. Ukuran maksimal file adalah 5MB.</p>
                     <label className="cursor-pointer">
                        <input type="file" className="hidden" onChange={(e) => {
                           if(e.target.files && e.target.files[0]) setSelectedFile(e.target.files[0]);
                        }} />
                        <span className="px-8 py-3 bg-white border border-slate-200 hover:border-indigo-600 hover:text-indigo-700 text-slate-700 font-bold rounded-xl transition-all shadow-sm flex items-center gap-2">
                           <Paperclip size={18} /> Cari File...
                        </span>
                     </label>
                  </>
               )}
            </div>
            
            <div className="flex justify-end pt-6">
               <button 
                  disabled={!selectedFile}
                  className="w-full sm:w-auto px-10 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-95 disabled:shadow-none"
               >
                  Kumpul Tugas Sekarang
               </button>
            </div>
         </div>
      </motion.div>

      {/* HISTORY TUGAS */}
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.1 }}
         className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-8"
      >
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Clock size={20} className="text-indigo-600" /> Riwayat Penugasan</h2>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
               {["Semua", "Selesai", "Belum", "Telat"].map(filter => (
                  <button 
                     key={filter}
                     onClick={() => setFilterActive(filter)}
                     className={`px-4 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                        filterActive === filter 
                        ? "bg-slate-800 text-white shadow-sm" 
                        : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100"
                     }`}
                  >
                     {filter}
                  </button>
               ))}
            </div>
         </div>

         <div className="space-y-4">
            {filteredHistory.map((tugas) => {
               const isExpanded = expandedHistory === tugas.id;
               return (
                  <div key={tugas.id} className={`border rounded-2xl overflow-hidden transition-all bg-white sticky shadow-sm ${isExpanded ? 'border-indigo-300' : 'border-slate-200'}`}>
                     <button 
                        onClick={() => toggleHistory(tugas.id)}
                        className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors gap-4"
                     >
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                              <FileText size={24} />
                           </div>
                           <div>
                              <h4 className="font-bold text-slate-900 mb-1">{tugas.title}</h4>
                              {getStatusComponent(tugas.status)}
                           </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t sm:border-0 border-slate-100 pt-4 sm:pt-0">
                           <div className="flex flex-col text-left sm:text-right">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Nilai</span>
                              <span className={`text-lg font-black ${tugas.score > 0 ? 'text-indigo-600' : 'text-slate-400'}`}>{tugas.score > 0 ? tugas.score : '-'}/100</span>
                           </div>
                           <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                               {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                           </div>
                        </div>
                     </button>
                     
                     <AnimatePresence>
                        {isExpanded && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="border-t border-slate-100 bg-slate-50/80 p-5 sm:p-6"
                           >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">File Terkirim</h5>
                                    {tugas.status === 'Belum' ? (
                                       <span className="text-sm font-semibold text-slate-400 italic">Tidak ada file dikumpulkan</span>
                                    ) : (
                                       <div className="flex flex-col gap-4">
                                          <div className="flex items-center gap-3">
                                             <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                                <Paperclip size={18} />
                                             </div>
                                             <span className="text-sm font-bold text-slate-700 truncate">{tugas.fileName}</span>
                                          </div>
                                          <button className="flex items-center justify-center gap-2 w-full py-2 bg-slate-50 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 text-slate-600 text-xs font-bold rounded-lg transition-colors">
                                             <Download size={14} /> Download File Anda
                                          </button>
                                       </div>
                                    )}
                                 </div>
                                 <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm relative overflow-hidden">
                                     <div className={`absolute left-0 top-0 bottom-0 w-1 ${tugas.score > 70 ? 'bg-emerald-500' : tugas.score > 0 ? 'bg-indigo-500' : 'bg-slate-300'}`}></div>
                                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Feedback Dosen</h5>
                                    <p className="text-sm font-semibold text-slate-700 leading-relaxed italic">
                                       "{tugas.feedback}"
                                    </p>
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               )
            })}

            {filteredHistory.length === 0 && (
               <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50">
                  <Filter size={40} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 font-bold">Tidak ada tugas dengan status "{filterActive}".</p>
               </div>
            )}
         </div>
      </motion.div>
    </div>
  );
}
