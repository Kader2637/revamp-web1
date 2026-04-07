'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Star, Award, CheckCircle, ArrowRight } from 'lucide-react';

const jenisPrestasi = [
  { icon: '🏆', title: 'Olimpiade Sains Nasional (OSN)', jalur: 'Finalis / Medalis tingkat Kab/Kota, Provinsi, Nasional' },
  { icon: '🎨', title: 'Prestasi Seni & Budaya', jalur: 'Juara 1-3 tingkat Provinsi atau Nasional' },
  { icon: '⚽', title: 'Prestasi Olahraga', jalur: 'Medalis PON, POPNAS, atau Kejuaraan Nasional' },
  { icon: '📚', title: 'Prestasi Akademik', jalur: 'Nilai rapor rata-rata ≥ 8.5 selama 5 semester' },
  { icon: '🚀', title: 'Lomba Karya Ilmiah', jalur: 'Juara 1-3 LKTI tingkat Nasional' },
];

const benefits = [
  'Pengurangan UKT hingga 50% untuk 2 semester pertama',
  'Prioritas mendapatkan beasiswa lanjutan dari universitas',
  'Tidak perlu mengikuti ujian seleksi akademik',
  'Ditangani langsung oleh Tim PMB Universitas',
  'Konsultasi program studi dengan dosen senior',
];

export default function JalurPrestasiPage() {
  return (
    <div>
      <PageHeader
        title="Jalur Prestasi"
        accent="Prestasi"
        subtitle="Apresiasi bagi siswa berprestasi di bidang akademik, olahraga, seni, dan sains. Raih tempat istimewa di UNMER Malang."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb/reguler' }, { name: 'Jalur Prestasi', href: '/pmb/prestasi' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-4xl font-serif font-black text-[#001D4A]">Kriteria <span className="text-[#F57C00]">Prestasi</span> yang Diterima</h2>
              <div className="space-y-4">
                {jenisPrestasi.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#FFD700] hover:shadow-lg transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-sm">{item.icon}</div>
                    <div>
                      <h3 className="font-black text-[#001D4A] text-lg">{item.title}</h3>
                      <p className="text-slate-500 mt-1 font-medium">{item.jalur}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-[#001D4A] rounded-3xl text-white space-y-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#001D4A]" />
                </div>
                <h3 className="text-2xl font-serif font-black">Keuntungan Jalur Prestasi</h3>
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                      <CheckCircle className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="https://pmb.unmer.ac.id" className="block w-full text-center px-8 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black text-lg hover:bg-[#F57C00] hover:text-white transition-all group">
                Ajukan Jalur Prestasi <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
