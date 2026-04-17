"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Download, FileText, Presentation, FileVideo, ChevronRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function MateriDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  
  const matkulName = id === "83W19" ? "ANALIS DAN DESAIN SISTEM" : 
                     id === "83W16" ? "ETIKA PROFESI" : "MATA KULIAH";

                     
  const materiData = [
     {
        id: 1,
        pertemuan: "Pertemuan 1",
        title: "Pengantar Analisis Sistem",
        date: "04 Feb 2026",
        desc: "Konsep dasar sistem, karakteristik sistem, dan siklus hidup pengembangan sistem (SDLC).",
        fileType: "pdf",
        fileName: "Materi_1_Pengantar_SDLC.pdf",
        size: "2.4 MB"
     },
     {
        id: 2,
        pertemuan: "Pertemuan 2",
        title: "Requirement Gathering",
        date: "11 Feb 2026",
        desc: "Teknik wawancara, observasi, dan kuesioner dalam mengumpulkan kebutuhan sistem.",
        fileType: "ppt",
        fileName: "Materi_2_Req_Gathering.pptx",
        size: "5.1 MB"
     },
     {
        id: 3,
        pertemuan: "Pertemuan 3",
        title: "Alat Pemodelan Proses",
        date: "18 Feb 2026",
        desc: "Pengenalan Data Flow Diagram (DFD) dan Flowchart.",
        fileType: "video",
        fileName: "Rekaman_Zoom_Pertemuan3.mp4",
        size: "124 MB"
     },
     {
        id: 4,
        pertemuan: "Pertemuan 4",
        title: "Latihan DFD Context Diagram",
        date: "25 Feb 2026",
        desc: "Modul praktikum mandiri pembuatan diagram konteks.",
        fileType: "pdf",
        fileName: "Modul_Praktikum_DFD.pdf",
        size: "1.2 MB"
     }
  ];

  const getFileIcon = (type: string) => {
     switch(type) {
        case 'pdf': return <FileText size={24} className="text-rose-500" />;
        case 'ppt': return <Presentation size={24} className="text-orange-500" />;
        case 'video': return <FileVideo size={24} className="text-indigo-500" />;
        default: return <FileText size={24} className="text-slate-500" />;
     }
  }

  const getFileBg = (type: string) => {
     switch(type) {
        case 'pdf': return "bg-rose-50";
        case 'ppt': return "bg-orange-50";
        case 'video': return "bg-indigo-50";
        default: return "bg-slate-50";
     }
  }

  return (
    <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <BookOpen size={160} className="-translate-y-8 translate-x-8 text-indigo-600" />
         </div>
         <div className="relative z-10">
            <Link href="/siakad/materi" className="inline-flex items-center gap-2 text-sm text-indigo-600 font-bold mb-4 hover:translate-x-1 transition-transform w-fit bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
               <ArrowLeft size={16} /> Kembali
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">{matkulName}</h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">{id}</p>
         </div>
      </div>

      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         className="space-y-4"
      >
         {materiData.map((materi, idx) => (
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               key={materi.id}
               className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row gap-6 lg:gap-8 group"
            >
               <div className="md:w-1/3 shrink-0">
                  <span className="inline-block px-3 py-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-widest rounded-lg mb-3">
                     {materi.pertemuan}
                  </span>
                  <p className="text-sm font-semibold text-slate-400 mb-2">{materi.date}</p>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{materi.title}</h3>
               </div>
               
               <div className="flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                     {materi.desc}
                  </p>
                  <div className="mt-auto border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 group-hover:border-indigo-200 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white ${getFileBg(materi.fileType)}`}>
                           {getFileIcon(materi.fileType)}
                        </div>
                        <div>
                           <p className="font-bold text-slate-800 text-sm sm:text-base line-clamp-1">{materi.fileName}</p>
                           <p className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">{materi.fileType} • {materi.size}</p>
                        </div>
                     </div>
                     <button className="flex justify-center items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 rounded-xl text-sm font-bold text-slate-700 transition-all shadow-sm group/btn shrink-0 w-full sm:w-auto">
                        <Download size={16} className="group-hover/btn:-translate-y-0.5 transition-transform" /> Unduh
                     </button>
                  </div>
               </div>
            </motion.div>
         ))}
      </motion.div>
    </div>
  );
}
