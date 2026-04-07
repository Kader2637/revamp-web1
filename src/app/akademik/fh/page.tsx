'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';

const bidangKajian = [
  { icon: '⚖️', title: 'Hukum Perdata', desc: 'Kontrak, kepemilikan, keluarga, dan warisan.' },
  { icon: '🏛️', title: 'Hukum Pidana', desc: 'Sistem peradilan, kriminologi, dan pemasyarakatan.' },
  { icon: '🌐', title: 'Hukum Internasional', desc: 'Perjanjian internasional, HAM, dan hukum laut.' },
  { icon: '📋', title: 'Hukum Tata Negara', desc: 'Konstitusi, kelembagaan negara, dan otonomi daerah.' },
  { icon: '💼', title: 'Hukum Bisnis', desc: 'Perusahaan, persaingan usaha, dan pasar modal.' },
  { icon: '🌿', title: 'Hukum Lingkungan', desc: 'Regulasi lingkungan, AMDAL, dan sengketa lingkungan.' },
];

export default function FHPage() {
  return (
    <div>
      <PageHeader title="Fakultas Hukum" accent="Hukum"
        subtitle="Mencetak sarjana dan praktisi hukum yang berintegritas, profesional, dan berwawasan kebangsaan, siap menegakkan keadilan."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik/fh' }, { name: 'Fakultas Hukum', href: '/akademik/fh' }]} />

      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div className="w-20 h-20 bg-[#FFD700]/10 rounded-3xl flex items-center justify-center"><Scale className="w-10 h-10 text-[#F57C00]" /></div>
              <h2 className="text-4xl font-serif font-black text-[#001D4A]">Program Studi<br/><span className="text-[#F57C00]">S1 Ilmu Hukum</span></h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-4"><span className="w-3 h-3 bg-green-500 rounded-full"/><span className="font-bold text-green-700">Akreditasi A (Unggul)</span></div>
                <div className="p-4 bg-slate-50 rounded-2xl"><p className="text-sm text-slate-500 font-medium">Total 144 SKS | Masa Studi Normal 4 Tahun</p></div>
                <div className="p-4 bg-slate-50 rounded-2xl"><p className="text-sm text-slate-500 font-medium">2.100+ Mahasiswa Aktif | 45 Dosen Tetap</p></div>
              </div>
              <Link href="/pmb/reguler" className="flex items-center gap-3 px-8 py-5 bg-[#001D4A] text-white rounded-2xl font-black hover:bg-[#F57C00] transition-all group">
                Daftar di FH <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bidangKajian.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 bg-slate-50 rounded-2xl hover:bg-[#FFD700]/10 hover:shadow-md transition-all border border-slate-100 group space-y-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform inline-block">{b.icon}</span>
                  <h3 className="font-black text-[#001D4A]">{b.title}</h3>
                  <p className="text-slate-500 text-sm">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
