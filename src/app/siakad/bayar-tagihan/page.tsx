"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Wallet, Building2, CheckCircle2, ChevronRight, ScanLine, Receipt, ShieldCheck, Search, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BayarTagihanPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const pendingBills = [
    { id: "INV-2026-08-01", desc: "Tagihan BPP", semester: "Semester Ganjil 2026/2027", amount: 4500000 },
    { id: "INV-2026-08-02", desc: "Tagihan HER Registrasi", semester: "Semester Ganjil 2026/2027", amount: 400000 },
  ];

  const totalAmount = pendingBills.reduce((acc, curr) => acc + curr.amount, 0);

  const paymentMethods = [
    { id: "va-bca", title: "BCA Virtual Account", desc: "Bayar otomatis", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
    { id: "va-bni", title: "BNI Virtual Account", desc: "Cek otomatis 10 menit", icon: Building2, color: "text-orange-500", bg: "bg-orange-50" },
    { id: "va-bri", title: "BRIVA", desc: "Cek otomatis 10 menit", icon: Building2, color: "text-blue-800", bg: "bg-blue-100" },
    { id: "wallet-gopay", title: "GoPay", desc: "Bebas biaya admin", icon: Wallet, color: "text-green-500", bg: "bg-green-50" },
    { id: "wallet-qris", title: "QRIS", desc: "Scan dari semua e-wallet", icon: ScanLine, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const formatRp = (num: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="space-y-6 lg:space-y-8 max-w-6xl mx-auto pb-10">
      <div className="flex items-center gap-2 text-sm text-slate-500 font-bold mb-4">
         <Link href="/siakad/keuangan" className="hover:text-indigo-600 transition-colors">Keuangan</Link>
         <ChevronRight size={14} />
         <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">Pusat Pembayaran</span>
      </div>

      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-sm mb-2">
         <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Metode Pembayaran</h1>
            <p className="text-slate-500 text-sm font-medium">Pilih metode yang tersedia untuk pelunasan tagihan.</p>
         </div>
         <div className="flex gap-3">
             <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari metode..." 
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium min-w-[200px]" 
                />
             </div>
             <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-colors">
               <Filter size={18} />
             </button>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
         
         {/* KIRI: Metode Pembayaran */}
         <div className="w-full md:w-2/3 space-y-6 lg:space-y-8">
            <motion.div
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-8"
            >
               <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Metode Pembayaran</h2>
               <p className="text-sm font-semibold text-slate-500 mb-8 border-b border-slate-100 pb-6">
                  Pilih metode pembayaran yang paling nyaman untuk Anda. Transaksi diproses seketika.
               </p>

               <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Virtual Account Bank</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                     {paymentMethods.filter(m => m.id.startsWith('va')).map((method) => {
                        const isSelected = selectedMethod === method.id;
                        return (
                           <button
                              key={method.id}
                              onClick={() => setSelectedMethod(method.id)}
                              className={`text-left p-5 rounded-2xl border-2 flex items-center gap-4 transition-all relative overflow-hidden group ${
                                 isSelected 
                                 ? "border-indigo-600 bg-indigo-50 shadow-md shadow-indigo-100" 
                                 : "border-slate-100 hover:border-slate-300 bg-white"
                              }`}
                           >
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${isSelected ? method.bg + ' ' + method.color : "bg-slate-50 text-slate-400 group-hover:scale-110"}`}>
                                 <method.icon size={24} />
                              </div>
                              <div className="flex-1 relative z-10">
                                 <h4 className={`font-extrabold text-base leading-tight mb-1 ${isSelected ? "text-indigo-900" : "text-slate-800"}`}>{method.title}</h4>
                                 <p className="text-xs font-bold text-slate-400">{method.desc}</p>
                              </div>
                              {isSelected && (
                                 <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                                       <CheckCircle2 size={16} />
                                    </div>
                                 </div>
                              )}
                           </button>
                        )
                     })}
                  </div>

                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 pt-2">E-Wallet & QRIS</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {paymentMethods.filter(m => m.id.startsWith('wallet')).map((method) => {
                        const isSelected = selectedMethod === method.id;
                        return (
                           <button
                              key={method.id}
                              onClick={() => setSelectedMethod(method.id)}
                              className={`text-left p-5 rounded-2xl border-2 flex items-center gap-4 transition-all relative overflow-hidden group ${
                                 isSelected 
                                 ? "border-indigo-600 bg-indigo-50 shadow-md shadow-indigo-100" 
                                 : "border-slate-100 hover:border-slate-300 bg-white"
                              }`}
                           >
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${isSelected ? method.bg + ' ' + method.color : "bg-slate-50 text-slate-400 group-hover:scale-110"}`}>
                                 <method.icon size={24} />
                              </div>
                              <div className="flex-1 relative z-10">
                                 <h4 className={`font-extrabold text-base leading-tight mb-1 ${isSelected ? "text-indigo-900" : "text-slate-800"}`}>{method.title}</h4>
                                 <p className="text-xs font-bold text-slate-400">{method.desc}</p>
                              </div>
                              {isSelected && (
                                 <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                                       <CheckCircle2 size={16} />
                                    </div>
                                 </div>
                              )}
                           </button>
                        )
                     })}
                  </div>
               </div>
            </motion.div>

            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest py-4">
               <ShieldCheck size={16} /> Diproses dengan aman & terenkripsi
            </div>
         </div>

         {/* KANAN: Struk Tagihan */}
         <div className="w-full md:w-1/3 sticky top-28">
            {/* The Receipt */}
            <motion.div
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white rounded-t-3xl rounded-b-lg border-x border-t border-slate-200 shadow-xl shadow-slate-200/50 relative"
            >
               <div className="p-8 pb-4">
                  <div className="flex items-center justify-center gap-3 mb-8">
                     <div className="w-12 h-12 bg-slate-900 rounded-full flex flex-col items-center justify-center text-white">
                        <Receipt size={24} />
                     </div>
                  </div>
                  <h3 className="text-center font-extrabold text-2xl text-slate-900 tracking-tight mb-1">Rincian Tagihan</h3>
                  <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Sistem Informasi Akademik</p>

                  <div className="space-y-4 text-sm mt-4">
                     {pendingBills.map((bill, idx) => (
                        <div key={idx} className="flex justify-between items-start gap-4">
                           <div className="flex-1">
                              <p className="font-bold text-slate-800 leading-snug">{bill.desc}</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">{bill.semester}</p>
                           </div>
                           <p className="font-bold text-slate-900 shrink-0">{formatRp(bill.amount)}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Receipt Zig Zag Divider */}
               <div className="relative h-6 w-full overflow-hidden flex items-center mt-4 border-y border-dashed border-slate-300">
                   <div className="absolute -left-3 w-6 h-6 bg-slate-50 rounded-full border border-slate-200"></div>
                   <div className="absolute -right-3 w-6 h-6 bg-slate-50 rounded-full border border-slate-200"></div>
               </div>

               <div className="p-8 pt-6">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Bayar</span>
                     <span className="text-2xl font-black text-indigo-600">{formatRp(totalAmount)}</span>
                  </div>

                  <button 
                     disabled={!selectedMethod || totalAmount === 0}
                     className="w-full py-4 bg-indigo-600 hover:bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 text-white font-extrabold text-base rounded-2xl transition-all shadow-lg shadow-indigo-600/30 active:scale-[0.98] focus:ring-4 focus:ring-indigo-500/20 disabled:shadow-none flex items-center justify-center gap-2 group"
                  >
                     Bayar Sekarang <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </motion.div>
         </div>

      </div>
    </div>
  );
}
