'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  ExternalLink, 
  BookOpen, 
  Library, 
  Mail, 
  LogOut, 
  Settings,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

const StudentQuickAccess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const studentLinks = [
    { title: "SIAKAD Unmer", href: "https://siakad.unmer.ac.id", icon: <Settings className="w-4 h-4" />, color: "bg-blue-500" },
    { title: "LMS Unmer", href: "https://lms.unmer.ac.id", icon: <BookOpen className="w-4 h-4" />, color: "bg-orange-500" },
    { title: "Digital Library", href: "https://digilib.unmer.ac.id", icon: <Library className="w-4 h-4" />, color: "bg-emerald-500" },
    { title: "Institutional Email", href: "https://mail.unmer.ac.id", icon: <Mail className="w-4 h-4" />, color: "bg-purple-500" },
  ];

  return (
    <div className="relative">
      {/* Avatar Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => !isOpen && setIsOpen(true)}
        className="flex items-center gap-3 p-1.5 md:p-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-[#FFD700]/30 transition-all group"
        whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#F57C00] flex items-center justify-center text-[#001D4A] shadow-lg group-hover:rotate-12 transition-transform">
          <User className="w-5 h-5" />
        </div>
        <div className="hidden xl:block text-left pr-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]/70 leading-none">Portal</p>
          <p className="text-sm font-bold text-white mt-1 leading-none">Quick Access</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Transparent Backdrop to close on click outside (optional, simplified) */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-4 z-50 w-72 bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden"
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-50">
                   <div className="w-12 h-12 rounded-[1.25rem] bg-slate-100 flex items-center justify-center text-slate-400">
                      <User className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-sm font-black text-[#001D4A]">Halo, Merdeka Muda!</p>
                   </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 mb-3 px-2">Academic Portal</p>
                  {studentLinks.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href}
                      target="_blank"
                      className="group flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${link.color} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                          {link.icon}
                        </div>
                        <span className="text-sm font-bold text-slate-600 group-hover:text-[#001D4A]">{link.title}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#001D4A] opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentQuickAccess;
