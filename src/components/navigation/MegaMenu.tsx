'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  BookOpen, 
  Award, 
  Users, 
  Globe, 
  Zap,
  Star
} from 'lucide-react';
import Link from 'next/link';

interface MegaMenuProps {
  isOpen: boolean;
  columns: {
    title: string;
    links: { title: string; href: string }[];
  }[];
  featuredCard?: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
  };
}

// Helper untuk kasih icon otomatis berdasarkan teks agar tidak sepi
const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('jalur') || t.includes('daftar')) return <Zap className="w-4 h-4" />;
  if (t.includes('beasiswa') || t.includes('prestasi')) return <Star className="w-4 h-4" />;
  if (t.includes('biaya') || t.includes('ukt')) return <Award className="w-4 h-4" />;
  if (t.includes('ekonomi') || t.includes('hukum')) return <BookOpen className="w-4 h-4" />;
  if (t.includes('kerjasama') || t.includes('alumni')) return <Globe className="w-4 h-4" />;
  if (t.includes('fasilitas') || t.includes('ukm')) return <Users className="w-4 h-4" />;
  return <Sparkles className="w-4 h-4" />;
};

const MegaMenu = ({ isOpen, columns, featuredCard }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 w-[950px]"
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-200/60 overflow-hidden flex">
            
            {/* Bagian Link Menu (Sisi Kiri) */}
            <div className="flex-1 p-12 grid grid-cols-2 gap-16">
              {columns.map((col, idx) => (
                <motion.div 
                  key={idx} 
                  className="space-y-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-[#F57C00] rounded-full" />
                    <h4 className="text-[#001D4A] font-black text-sm uppercase tracking-[0.2em]">
                      {col.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-1">
                    {col.links.map((link, lIdx) => (
                      <motion.li 
                        key={lIdx}
                        variants={{
                          hidden: { x: -10, opacity: 0 },
                          visible: { x: 0, opacity: 1 }
                        }}
                      >
                        <Link 
                          href={link.href}
                          className="flex items-center justify-between p-3 -mx-3 rounded-2xl group hover:bg-slate-50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#F57C00] transition-colors">
                              {getIcon(link.title)}
                            </div>
                            <span className="text-slate-600 font-bold group-hover:text-[#001D4A] transition-colors">
                              {link.title}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Bagian Featured Card (Sisi Kanan - Visual Highlight) */}
            {featuredCard && (
              <div className="w-[340px] bg-slate-50/50 p-10 flex flex-col border-l border-slate-100 relative overflow-hidden">
                {/* Dekorasi Background */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F57C00]/10 text-[#F57C00] text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
                    <Sparkles className="w-3 h-3" />
                    Pendaftaran Dibuka
                  </div>
                  
                  <h4 className="text-2xl font-black text-[#001D4A] leading-tight mb-4">
                    {featuredCard.title}
                  </h4>
                  
                  <p className="text-slate-500 font-medium leading-relaxed mb-auto">
                    {featuredCard.description}
                  </p>

                  <Link 
                    href={featuredCard.href}
                    className="mt-8 flex items-center justify-center gap-3 py-4 bg-[#001D4A] text-white rounded-2xl font-bold hover:bg-[#F57C00] hover:shadow-lg hover:shadow-orange-200 transition-all group"
                  >
                    {featuredCard.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;