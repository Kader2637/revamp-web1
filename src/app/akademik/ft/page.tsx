'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const prodi = [
  { nama: 'S1 Teknik Sipil', icon: '🏗️', focus: 'Struktur, Transportasi, Geoteknik', akreditasi: 'A' },
  { nama: 'S1 Teknik Mesin', icon: '⚙️', focus: 'Manufaktur, Termodinamika, Material', akreditasi: 'A' },
  { nama: 'S1 Teknik Elektro', icon: '⚡', focus: 'Tenaga Listrik, Elektronika, Kontrol', akreditasi: 'B' },
  { nama: 'S1 Teknik Industri', icon: '🏭', focus: 'Manajemen Produksi, Ergonomi, Supply Chain', akreditasi: 'B' },
];

const mitra = ['PT. Pembangunan Perumahan (PP)', 'PT. Waskita Karya', 'PT. PLN (Persero)', 'PT. Astra International', 'PT. Sido Muncul', 'CV. Surya Mas Engineering'];

export default function FTPage() {
  return (
    <div>
      <PageHeader title="Fakultas Teknik" accent="Teknik"
        subtitle="Membentuk insinyur berkarakter yang mampu merancang, membangun, dan berinovasi untuk kemajuan bangsa dan peradaban."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik/ft' }, { name: 'Fakultas Teknik', href: '/akademik/ft' }]} />

      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prodi.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-[#FFD700] hover:shadow-xl transition-all group space-y-5 text-center">
                <div className="text-5xl group-hover:scale-125 transition-transform">{p.icon}</div>
                <h3 className="font-black text-[#001D4A]">{p.nama}</h3>
                <p className="text-slate-500 text-sm">{p.focus}</p>
                <span className="inline-block px-3 py-1 bg-[#FFD700]/20 text-[#001D4A] rounded-full text-xs font-black">Akreditasi {p.akreditasi}</span>
              </motion.div>
            ))}
          </div>

          <div className="p-10 bg-[#001D4A] rounded-3xl">
            <h2 className="text-3xl font-serif font-black text-[#FFD700] mb-8">Mitra Industri & Perusahaan Rekrutmen</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mitra.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-4 bg-white/10 rounded-2xl text-white font-bold text-sm text-center hover:bg-[#FFD700] hover:text-[#001D4A] transition-all cursor-default">
                  {m}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/pmb/reguler" className="inline-flex items-center gap-3 px-12 py-6 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-xl hover:bg-[#001D4A] hover:text-white transition-all group">
              Daftar di Fakultas Teknik <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
