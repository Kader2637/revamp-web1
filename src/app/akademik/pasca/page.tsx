'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const programPasca = [
  { nama: 'Magister Manajemen (MM)', konsentrasi: ['Manajemen Pemasaran', 'Manajemen Keuangan', 'Manajemen SDM', 'Manajemen Operasional'], sks: 42, durasi: '2 Tahun', akreditasi: 'A' },
  { nama: 'Magister Hukum (MH)', konsentrasi: ['Hukum Bisnis', 'Hukum Tata Negara', 'Hukum Pidana'], sks: 42, durasi: '2 Tahun', akreditasi: 'B' },
  { nama: 'Magister Teknik Informatika (MTI)', konsentrasi: ['Kecerdasan Buatan', 'Keamanan Siber', 'Sistem Terdistribusi'], sks: 44, durasi: '2 Tahun', akreditasi: 'B' },
];

export default function PascaPage() {
  return (
    <div>
      <PageHeader title="Program Pascasarjana" accent="Pascasarjana"
        subtitle="Tingkatkan kompetensi dan karir Anda ke level berikutnya dengan program magister UNMER Malang yang terakreditasi nasional."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik/pasca' }, { name: 'Pascasarjana', href: '/akademik/pasca' }]} />

      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-12">
          {programPasca.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 bg-white border-2 border-slate-100 rounded-3xl hover:border-[#FFD700] hover:shadow-2xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FFD700] transition-all">
                  <BookOpen className="w-8 h-8 text-[#F57C00] group-hover:text-[#001D4A] transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-[#001D4A]">{p.nama}</h3>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-black">Akreditasi {p.akreditasi}</span>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl text-center"><p className="text-xl font-black text-[#001D4A]">{p.sks}</p><p className="text-[10px] text-slate-400 uppercase font-bold">Total SKS</p></div>
                  <div className="p-3 bg-slate-50 rounded-xl text-center"><p className="text-xl font-black text-[#001D4A]">{p.durasi}</p><p className="text-[10px] text-slate-400 uppercase font-bold">Durasi</p></div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="font-black text-[#001D4A] mb-4 uppercase tracking-wider text-sm">Konsentrasi / Peminatan</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {p.konsentrasi.map((k, ki) => (
                    <div key={ki} className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full shrink-0" />
                      <span className="font-bold text-slate-700 text-sm">{k}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="text-center pt-8">
            <Link href="https://pmb.unmer.ac.id" className="inline-flex items-center gap-3 px-12 py-6 bg-[#001D4A] text-white rounded-2xl font-black text-xl hover:bg-[#F57C00] transition-all group">
              Daftar Pascasarjana <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
