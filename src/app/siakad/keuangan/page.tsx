"use client";

import React from "react";
import { motion } from "framer-motion";
import { Printer, CheckCircle, CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function KeuanganPage() {
  const keuanganData = [
    { periode: "Semester Genap 2025 - 2026", tagihan: "13-02-2026", jenis: "HER", status: "L", jumlah: 400000, potongan: 0, total: 400000 },
    { periode: "Semester Genap 2025 - 2026", tagihan: "13-02-2026", jenis: "DPP", status: "L", jumlah: 4500000, potongan: 1000000, total: 3500000 },
    { periode: "Semester Ganjil 2025 - 2026", tagihan: "14-08-2025", jenis: "HER", status: "L", jumlah: 400000, potongan: 0, total: 400000 },
    { periode: "Semester Ganjil 2025 - 2026", tagihan: "14-08-2025", jenis: "BPP", status: "L", jumlah: 4500000, potongan: 0, total: 4500000 },
    { periode: "Semester Genap 2024 - 2025", tagihan: "16-02-2025", jenis: "HER", status: "L", jumlah: 400000, potongan: 0, total: 400000 },
    { periode: "Semester Genap 2024 - 2025", tagihan: "14-02-2025", jenis: "BPP", status: "L", jumlah: 4500000, potongan: 0, total: 4500000 },
    { periode: "Semester Gasal 2024 - 2025", tagihan: "26-06-2024", jenis: "HER", status: "L", jumlah: 400000, potongan: 0, total: 400000 },
    { periode: "Semester Gasal 2024 - 2025", tagihan: "26-06-2024", jenis: "BPP", status: "L", jumlah: 4500000, potongan: 0, total: 4500000 },
  ];

  const formatRp = (num: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
  };

  const totalJumlah = keuanganData.reduce((acc, curr) => acc + curr.jumlah, 0);
  const totalPotongan = keuanganData.reduce((acc, curr) => acc + curr.potongan, 0);
  const grandTotal = keuanganData.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm">
         <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Detail Keuangan</h1>
            <p className="text-slate-500 font-medium">Riwayat tagihan dan pembayaran mahasiswa.</p>
         </div>
         <div className="flex gap-3">
            <Link href="/siakad/bayar-tagihan" className="flex justify-center items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-indigo-600/20 hover:-translate-y-0.5">
               <CreditCard size={18} /> Bayar Tagihan
            </Link>
            <button className="flex justify-center items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold border border-transparent transition-colors">
               <Printer size={18} /> Cetak
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
         <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:col-span-2"
         >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Informasi Mahasiswa</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-sm">
               <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 font-semibold">NIM</span>
                  <span className="text-slate-900 font-bold">24083000015</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 font-semibold">Nama</span>
                  <span className="text-slate-900 font-bold">ABDUL KADER</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 font-semibold">Program Studi</span>
                  <span className="text-slate-900 font-bold">S1 Sistem Informasi</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 font-semibold">Sem. Saat Ini</span>
                  <span className="text-slate-900 font-bold">Genap (4)</span>
               </div>
            </div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl shadow-lg shadow-indigo-600/20 p-8 flex flex-col justify-center text-white relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
                <CreditCard size={100} className="transform rotate-12" />
            </div>
            <div className="relative z-10">
               <h3 className="text-sm font-semibold text-indigo-100 uppercase tracking-wider mb-2">Total Telah Dibayar</h3>
               <p className="text-3xl lg:text-4xl font-extrabold tracking-tight">{formatRp(grandTotal)}</p>
               <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-4 py-2 rounded-xl w-fit shadow-sm border border-emerald-200">
                  <CheckCircle size={16} className="text-emerald-600" /> Tidak ada tunggakan
               </div>
            </div>
         </motion.div>
      </div>

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
                     <th className="px-6 py-5">Periode</th>
                     <th className="px-6 py-5">Tgl. Tagihan</th>
                     <th className="px-6 py-5 text-center">Jenis</th>
                     <th className="px-6 py-5 text-center">Status</th>
                     <th className="px-6 py-5 text-right">Jumlah</th>
                     <th className="px-6 py-5 text-right">Potongan</th>
                     <th className="px-6 py-5 text-right">Total</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {keuanganData.map((row, idx) => (
                     <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-900">{row.periode}</td>
                        <td className="px-6 py-5 text-slate-500 font-semibold">{row.tagihan}</td>
                        <td className="px-6 py-5 text-center">
                           <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">{row.jenis}</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                           <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-extrabold text-sm shadow-sm">
                              {row.status}
                           </span>
                        </td>
                        <td className="px-6 py-5 text-right tabular-nums font-semibold">{formatRp(row.jumlah)}</td>
                        <td className="px-6 py-5 text-right tabular-nums font-bold text-red-500">
                           {row.potongan > 0 ? `-${formatRp(row.potongan)}` : "Rp 0"}
                        </td>
                        <td className="px-6 py-5 text-right tabular-nums font-black text-indigo-600">{formatRp(row.total)}</td>
                     </tr>
                  ))}
               </tbody>
               <tfoot className="bg-slate-50 border-t border-slate-200">
                  <tr>
                     <td colSpan={4} className="px-6 py-6 text-right font-extrabold text-slate-800 uppercase tracking-widest text-xs">Total Pembayaran:</td>
                     <td className="px-6 py-6 text-right font-bold text-slate-800">{formatRp(totalJumlah)}</td>
                     <td className="px-6 py-6 text-right font-bold text-red-500">
                        {totalPotongan > 0 ? `-${formatRp(totalPotongan)}` : "Rp 0"}
                     </td>
                     <td className="px-6 py-6 text-right font-black text-indigo-600 text-xl">{formatRp(grandTotal)}</td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </motion.div>
    </div>
  );
}
