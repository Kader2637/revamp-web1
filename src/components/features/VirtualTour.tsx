'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Compass, X, Map as MapIcon, Image as ImageIcon, ArrowUpRight } from 'lucide-react';

const VirtualTour = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 20px 40px rgba(245, 124, 0, 0.3)",
          y: -5
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 md:w-20 md:h-20 bg-[#F57C00] rounded-full flex items-center justify-center text-white shadow-[0_15px_30px_-5px_rgba(245,124,0,0.4)] transition-all duration-300 group"
        aria-label="Buka Virtual Tour"
      >
        <div className="absolute inset-0 rounded-full bg-[#F57C00] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        <Globe className="w-8 h-8 md:w-10 md:h-10 relative z-10" />
        
        {/* Label Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-[#001D4A] text-white text-xs font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
          Eksplorasi Kampus
        </div>
      </motion.button>

      {/* Glassmorphism Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl md:aspect-[16/10] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh] md:max-h-none"
            >
              {/* Header */}
              <div className="p-5 md:p-8 flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#FFD700] flex items-center justify-center text-[#001D4A]">
                    <Compass className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-black text-white leading-none">Virtual Campus</h2>
                    <p className="text-white/60 text-xs md:text-sm font-medium mt-1">Exploration Experience</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Content Grid - Scrollable on mobile */}
              <div className="flex-1 p-5 md:p-8 grid grid-cols-12 gap-5 md:gap-8 overflow-y-auto md:overflow-hidden custom-scrollbar">
                {/* Map Preview (Left) */}
                <div className="col-span-12 lg:col-span-8 bg-slate-900/50 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 relative overflow-hidden group min-h-[300px] md:min-h-0">
                  <img 
                    src="https://images.unsplash.com/photo-1523050853063-9136aa0fe40e?auto=format&fit=crop&q=80&w=2000" 
                    alt="Campus Map Preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[#FFD700] mb-2">
                        <MapIcon className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Interactive Map</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white">Main Campus Area</h3>
                      <p className="text-white/70 mt-2 max-w-md text-xs md:text-base">Jelajahi setiap sudut kampus Unmer Malang dengan peta interaktif terbaru kami.</p>
                    </div>
                    
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#001D4A] rounded-xl md:rounded-2xl font-black text-xs md:text-base hover:bg-[#FFD700] transition-colors flex items-center justify-center gap-2">
                      Start Tour
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>

                {/* Facilities Gallery (Right) */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 md:gap-6">
                  <div className="flex-1 bg-white/5 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 p-5 md:p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <ImageIcon className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Facilities Gallery</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white">Smart Laboratorium</h4>
                      <p className="text-white/60 text-xs md:text-sm">Lihat fasilitas laboratorium unggulan kami dengan teknologi terkini.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-4 md:mt-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square rounded-xl bg-slate-800 border border-white/5 overflow-hidden hover:border-[#FFD700]/50 transition-colors">
                          <img 
                            src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&sig=${i}`} 
                            alt={`Gallery ${i}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 md:p-6 bg-gradient-to-br from-[#F57C00] to-[#E65100] rounded-[1.5rem] md:rounded-[2rem] shadow-xl text-white">
                    <h4 className="font-black text-base md:text-lg">Gedung Rektorat 360°</h4>
                    <p className="text-white/80 text-xs md:text-sm mt-1">Rasakan pengalaman nyata seolah berada di lokasi.</p>
                    <button className="mt-4 w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs md:text-sm font-bold transition-colors uppercase tracking-widest">
                      Eksplor Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default VirtualTour;
