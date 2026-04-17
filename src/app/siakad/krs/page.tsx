"use client";

import React from "react";
import { motion } from "framer-motion";
import { Printer, CheckCircle } from "lucide-react";

export default function KRSPage() {
  const krsData = [
    { no: 1, kode: "83U08", nama: "BAHASA INGGRIS 2", kelas: "4A", sks: 2, waktu: "Selasa, 09:10-10:50", ruang: "(B02)\nPerkuliahan Pasca", dosen: "PRELLA LUKIS WEDIYANTORO, S.Pd., M.Pd." },
    { no: 2, kode: "83U09", nama: "ENTREPRENEURSHIP (KEWIRAUSAHAAN)", kelas: "4A", sks: 2, waktu: "Rabu, 12:30-14:10", ruang: "(B02)\nPerkuliahan Pasca", dosen: "HUDAN EKA ROSYADI, S.Kom., M.Kom." },
    { no: 3, kode: "83W16", nama: "ETIKA PROFESI", kelas: "4A", sks: 2, waktu: "Kamis, 12:30-14:10", ruang: "(B02)\nPerkuliahan Pasca", dosen: "DEVIKA MAULINA PUTRI, A.Md., S.ST., M.Pd." },
    { no: 4, kode: "83W17", nama: "PERANCANGAN UI/UX", kelas: "4A", sks: 3, waktu: "Selasa, 07:30-09:10", ruang: "(FTI LAB-D)\nRuang Praktikum", dosen: "VIKY PUSPANING RAMADHAN, A.Md.Li., S.Kom., M.Kom." },
    { no: 5, kode: "83W18", nama: "E-BISNIS", kelas: "4A", sks: 3, waktu: "Kamis, 10:50-12:30", ruang: "(FTI LAB-F)\nRuang Praktikum", dosen: "HARIS SATRIYAWAN, S.Pt., S.Si., M.M." },
    { no: 6, kode: "83W19", nama: "ANALIS DAN DESAIN SISTEM", kelas: "4A", sks: 3, waktu: "Jumat, 09:10-10:50", ruang: "(FTI LAB-B)\nRuang Praktikum", dosen: "FANDI YULIAN PAMUJI, S.Kom., M.Kom." },
    { no: 7, kode: "83W20", nama: "DATA WAREHOUSE", kelas: "4A", sks: 3, waktu: "Senin, 10:50-12:30", ruang: "(FTI LAB-C)\nRuang Praktikum", dosen: "Drs. ANIS ZUBAIR, M.Kom." },
    { no: 8, kode: "83W21", nama: "ARSITEKTUR ENTERPRISE", kelas: "4A", sks: 2, waktu: "Senin, 09:10-10:50", ruang: "(B02)\nPerkuliahan Pasca", dosen: "LISTANTO TRI UTOMO, S.Kom., M.M." },
    { no: 9, kode: "83W22", nama: "PEMROGRAMAN WEB", kelas: "4A", sks: 3, waktu: "Senin, 14:10-15:50", ruang: "(FTI LAB-D)\nRuang Praktikum", dosen: "ARIF SAIVUL AFFANDI, S.Kom., M.M\nFANDI YULIAN PAMUJI, S.Kom., M.Kom." },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm">
         <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Kartu Rencana Studi (KRS)</h1>
            <p className="text-slate-500 font-medium">Semester Genap 2025/2026</p>
         </div>
         <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 rounded-xl font-bold transition-colors">
            <Printer size={18} /> Cetak KRS
         </button>
      </div>

      {/* Info Card */}
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8"
      >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="space-y-4">
               <div className="grid grid-cols-[140px_10px_1fr] text-sm">
                  <span className="text-slate-500 font-semibold">Mahasiswa</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-900 font-bold">24083000015 - ABDUL KADER</span>
               </div>
               <div className="grid grid-cols-[140px_10px_1fr] text-sm">
                  <span className="text-slate-500 font-semibold">Program Studi</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-900 font-bold">Prodi S1 Sistem Informasi</span>
               </div>
               <div className="grid grid-cols-[140px_10px_1fr] text-sm">
                  <span className="text-slate-500 font-semibold">Kur/Smt/SKS</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-900 font-bold">2024 / 4 / 63</span>
               </div>
            </div>
            <div className="space-y-4">
               <div className="grid grid-cols-[140px_10px_1fr] text-sm">
                  <span className="text-slate-500 font-semibold">Dosen Wali</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-indigo-600 font-bold">LISTANTO TRI UTOMO, S.Kom., M.M.</span>
               </div>
               <div className="grid grid-cols-[140px_10px_1fr] text-sm">
                  <span className="text-slate-500 font-semibold">Batas SKS</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-slate-900 font-bold">24</span>
               </div>
            </div>
         </div>
      </motion.div>

      {/* Status Banner */}
      <motion.div
         initial={{ opacity: 0, scale: 0.98 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.1 }}
         className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-3xl shadow-sm"
      >
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
               <CheckCircle size={24} className="text-emerald-500" />
            </div>
            <div>
               <p className="font-extrabold text-lg tracking-tight">KRS telah disetujui</p>
               <p className="text-sm font-medium text-emerald-600/80 mt-0.5">Apabila terdapat kendala terkait KRS, silakan menghubungi BAAK Prodi.</p>
            </div>
         </div>
      </motion.div>

      {/* Modern Table */}
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2 }}
         className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
      >
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
               <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-xs">
                  <tr>
                     <th className="px-6 py-5 w-16 text-center">No</th>
                     <th className="px-6 py-5 w-28">Kode</th>
                     <th className="px-6 py-5">Nama Matakuliah</th>
                     <th className="px-6 py-5 text-center w-24">Kelas</th>
                     <th className="px-6 py-5 text-center w-24">SKS</th>
                     <th className="px-6 py-5">Waktu & Ruang</th>
                     <th className="px-6 py-5">Dosen Pengajar</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {krsData.map((row, idx) => (
                     <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-6 py-5 text-center text-slate-400 font-semibold">{row.no}</td>
                        <td className="px-6 py-5 font-bold text-slate-500">{row.kode}</td>
                        <td className="px-6 py-5 font-bold text-slate-900">{row.nama}</td>
                        <td className="px-6 py-5 text-center font-semibold text-slate-600">{row.kelas}</td>
                        <td className="px-6 py-5 text-center font-bold text-indigo-600">{row.sks}</td>
                        <td className="px-6 py-5">
                           <div className="text-slate-800 font-bold flex items-center gap-1.5 mb-1.5">
                              {row.waktu.split(", ")[0]} <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md text-xs">{row.waktu.split(", ")[1]}</span>
                           </div>
                           <div className="text-xs font-semibold text-slate-500 whitespace-pre-line leading-relaxed">{row.ruang}</div>
                        </td>
                        <td className="px-6 py-5 text-xs font-semibold text-slate-600 leading-relaxed whitespace-pre-line">
                           {row.dosen}
                        </td>
                     </tr>
                  ))}
               </tbody>
               <tfoot className="bg-slate-50 border-t border-slate-200">
                  <tr>
                     <td colSpan={4} className="px-6 py-6 text-right font-extrabold text-slate-800 uppercase tracking-widest text-xs">Total SKS</td>
                     <td className="px-6 py-6 text-center font-black text-indigo-600 text-xl">23</td>
                     <td colSpan={2}></td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </motion.div>
    </div>
  );
}
