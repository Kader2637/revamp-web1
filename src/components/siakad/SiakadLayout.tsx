"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  User,
  BookOpen,
  FileText,
  Calendar,
  CreditCard,
  Menu,
  X,
  LogOut,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { icon: LayoutDashboard, label: "Beranda", href: "/siakad" },
  { icon: User, label: "Biodata", href: "/siakad/biodata" },
  { icon: FileText, label: "Tugas", href: "/siakad/tugas" },
  { icon: BookOpen, label: "Materi", href: "/siakad/materi" },
  { icon: Calendar, label: "Jadwal Kuliah", href: "/siakad/jadwal" },
  { icon: FileText, label: "KRS", href: "/siakad/krs" },
  { icon: CreditCard, label: "Keuangan", href: "/siakad/keuangan" },
  { icon: CreditCard, label: "Bayar Tagihan", href: "/siakad/bayar-tagihan" },
];

export default function SiakadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 font-sans flex font-inter overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 shadow-sm flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-6 border-b border-slate-100 shrink-0">
          <Link href="/siakad" className="flex items-center gap-3">
             <div className="relative w-10 h-10">
                <Image src="/logounmer.png" alt="UNMER Logo" fill className="object-contain" />
             </div>
            <div className="flex flex-col">
               <span className="text-xl font-bold tracking-tight text-slate-800 leading-none">
                 SIAKAD
               </span>
               <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">UNMER MALANG</span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 -mr-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 custom-scrollbar">
          <div className="px-4 py-4 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-white relative">
              <Image src="/user.png" alt="Profile" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 uppercase">ABDUL KADER</p>
              <p className="text-xs text-indigo-600 font-medium">24083000015</p>
            </div>
          </div>

          <nav className="space-y-1.5">
            <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Menu Utama</p>
            {menuItems.map((item) => {
              const isActive = item.href === '/siakad' 
                ? pathname === '/siakad' 
                : (pathname === item.href || pathname.startsWith(item.href + '/'));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                     <Icon size={20} className={isActive ? "text-white" : "text-slate-400 group-hover:text-indigo-600 transition-colors"} />
                     <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                  {!isActive && (
                     <ChevronRight size={16} className="text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-slate-600 font-medium text-sm hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors group"
          >
            <LogOut size={20} className="text-slate-400 group-hover:text-red-500 transition-colors" />
            <span>Kembali ke Portal</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Component */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 shrink-0 z-30 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500 font-medium">
               <span>Siakad</span>
               <ChevronRight size={14} />
               <span className="text-slate-800">
                  {menuItems.find((m) => pathname === m.href || pathname.startsWith(m.href + '/'))?.label || "Dashboard"}
               </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 border border-slate-200 rounded-full transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2.5 w-2 h-2 border border-white bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <button className="p-2.5 text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 border border-slate-200 rounded-full transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8 w-full relative">
           <div className="absolute top-0 left-0 w-full h-64 bg-indigo-50/50 pointer-events-none -mr-4" />
           <div className="max-w-7xl mx-auto relative z-10 pb-12">
             {children}
           </div>
        </main>
      </div>

    </div>
  );
}
