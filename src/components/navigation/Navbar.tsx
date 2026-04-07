'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import MegaMenu from './MegaMenu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar berubah warna setelah scroll lebih dari 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    penerimaan: {
      columns: [
        {
          title: "Jalur Pendaftaran",
          links: [
            { title: "Jalur Reguler", href: "/pmb/reguler" },
            { title: "Jalur Prestasi", href: "/pmb/prestasi" },
            { title: "Jalur Beasiswa", href: "/pmb/beasiswa" },
            { title: "Pindahan & RPL", href: "/pmb/rpl" },
          ]
        },
        {
          title: "Informasi Calon Maba",
          links: [
            { title: "Biaya Pendidikan (UKT)", href: "/pmb/biaya" },
            { title: "Jadwal Pendaftaran", href: "/pmb/jadwal" },
            { title: "Persyaratan Umum", href: "/pmb/syarat" },
            { title: "Prosedur Daftar", href: "/pmb/prosedur" },
          ]
        }
      ],
      featured: {
        title: "Daftar Sekarang!",
        description: "Bergabunglah dengan Universitas Merdeka Malang dan wujudkan masa depan gemilang.",
        buttonText: "Portal PMB",
        href: "https://pmb.unmer.ac.id"
      }
    },
    akademik: {
      columns: [
        {
          title: "Fakultas Utama",
          links: [
            { title: "Ekonomi & Bisnis", href: "/akademik/feb" },
            { title: "Teknologi Informasi", href: "/akademik/fti" },
            { title: "Teknik", href: "/akademik/teknik" },
            { title: "Ilmu Sosial & Politik", href: "/akademik/fisip" },
          ]
        },
        {
          title: "Fakultas & Diploma",
          links: [
            { title: "Hukum", href: "/akademik/hukum" },
            { title: "Psikologi", href: "/akademik/psikologi" },
            { title: "Kepariwisataan", href: "/akademik/pariwisata" },
            { title: "Pascasarjana", href: "/akademik/pascasarjana" },
          ]
        }
      ],
      featured: {
        title: "Pusat Akademik",
        description: "Jelajahi seluruh program studi dan temukan jalur karir impianmu.",
        buttonText: "Lihat Semua",
        href: "/akademik"
      }
    },
    profil: {
      columns: [
        {
          title: "Tentang Universitas",
          links: [
            { title: "Sejarah UNMER", href: "/profil/sejarah" },
            { title: "Visi & Misi", href: "/profil/visi-misi" },
            { title: "Struktur Organisasi", href: "/profil/struktur" },
            { title: "Pimpinan Universitas", href: "/profil/pimpinan" },
          ]
        },
        {
          title: "Eksplorasi Kampus",
          links: [
            { title: "Fasilitas Kampus", href: "/fasilitas" },
            { title: "Unit Kegiatan Mahasiswa", href: "/ukm" },
            { title: "Kerjasama Internasional", href: "/kerjasama" },
            { title: "Hubungi Kami", href: "/kontak" },
          ]
        }
      ]
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#001D4A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand / Logo Section */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="flex items-center gap-2">
            <div className="relative h-12 w-12 md:h-14 md:w-14 transition-transform duration-500 group-hover:scale-110">
              <img 
                src="/logounmer.png" 
                alt="Logo UNMER Malang" 
                className="object-contain w-full h-full"
              />
            </div>
            <div className="relative h-23 w-23 md:h-14 md:w-14 transition-transform duration-500 group-hover:scale-110 lg:hidden">
              <img 
                src="/logoteksunmer.png" 
                alt="Logo Teknik UNMER" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col border-l border-white/20 pl-4 hidden sm:flex">
            <span className="font-bold text-xl md:text-2xl tracking-tight text-white transition-colors duration-500">
              U<span className="text-[#F57C00]">N</span>MER <span className="font-light italic">Malang</span>
            </span>
            <span className={`text-[9px] uppercase tracking-[0.2em] font-semibold transition-colors duration-500 ${isScrolled ? 'text-slate-300' : 'text-[#FFD700]'}`}>
              Pusat Pendidikan Berkarakter
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {Object.entries(menuItems).map(([key, value]) => (
            <div 
              key={key}
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
              className="relative py-2"
            >
              <button
                className={`flex items-center gap-1.5 font-semibold text-[14px] uppercase tracking-wider transition-all duration-300 ${
                  activeMenu === key 
                    ? 'text-[#FFD700]' 
                    : 'text-white/90 hover:text-[#FFD700]'
                }`}
              >
                {key}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
              </button>
              
              <MegaMenu 
                isOpen={activeMenu === key} 
                columns={value.columns} 
                featuredCard={(value as any).featured}
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2.5 rounded-full text-white hover:bg-white/10 transition-all duration-300">
            <Search className="w-5 h-5" />
          </button>
          
          <Link
            href="https://pmb.unmer.ac.id"
            className={`hidden md:block px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-lg ${
              isScrolled 
                ? 'bg-[#FFD700] text-[#001D4A] hover:bg-white' 
                : 'bg-[#FFD700] text-[#001D4A] hover:bg-white'
            }`}
          >
            PMB 2026
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-[#FFD700]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#001D4A] shadow-xl overflow-hidden border-t border-white/10 flex flex-col"
          >
             <div className="py-8 px-6 space-y-4 max-h-[80vh] overflow-y-auto">
                {Object.entries(menuItems).map(([key, value], i) => (
                  <motion.div
                    key={key}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-white/5"
                  >
                    <button 
                      onClick={() => setExpandedMobileMenu(expandedMobileMenu === key ? null : key)}
                      className="w-full flex items-center justify-between py-4 text-white font-bold text-xl uppercase tracking-widest"
                    >
                      {key}
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedMobileMenu === key ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedMobileMenu === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 space-y-6">
                            {value.columns.map((col, ci) => (
                              <div key={ci} className="space-y-3">
                                <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-widest pl-2">{col.title}</p>
                                <div className="grid grid-cols-1 gap-2">
                                  {col.links.map((link, li) => (
                                    <Link 
                                      key={li} 
                                      href={link.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-slate-300 hover:text-white py-2 pl-4 border-l border-white/10 text-sm font-medium"
                                    >
                                      {link.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="https://pmb.unmer.ac.id" className="block w-full bg-[#FFD700] text-[#001D4A] text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-yellow-500/20">
                    Daftar Sekarang
                  </Link>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;