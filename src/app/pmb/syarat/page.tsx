'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { CheckCircle, ArrowRight, FileText } from 'lucide-react';

const syaratDokumen = [
  { kategori: 'Dokumen Utama', items: ['Fotokopi ijazah SMA/SMK/MA yang telah dilegalisir (2 lembar)', 'Fotokopi rapor kelas X, XI, dan XII semester 1-5', 'Surat Keterangan Lulus dari kepala sekolah (bagi yang belum wisuda)', 'Akta Kelahiran (fotokopi)'] },
  { kategori: 'Dokumen Identitas', items: ['Fotokopi KTP pemohon (bagi yang sudah 17 tahun)', 'Fotokopi Kartu Keluarga (KK)', 'Nomor Induk Siswa Nasional (NISN)'] },
  { kategori: 'Dokumen Foto', items: ['Pas foto berwarna terbaru ukuran 3×4 (4 lembar)', 'Pas foto berwarna terbaru ukuran 4×6 (2 lembar)', 'File foto digital format JPG/PNG, min 500KB'] },
  { kategori: 'Dokumen Pendukung (Jika Ada)', items: ['Sertifikat prestasi akademik/non-akademik', 'Surat rekomendasi dari kepala sekolah', 'Surat pernyataan tidak mampu secara ekonomi (untuk beasiswa)'] },
];

export default function SyaratPage() {
  return (
    <div>
      <PageHeader
        title="Persyaratan Pendaftaran"
        accent="Pendaftaran"
        subtitle="Pastikan seluruh dokumen persyaratan berikut telah Anda siapkan sebelum memulai proses pendaftaran online."
        breadcrumbs={[{ name: 'Penerimaan', href: '/pmb/reguler' }, { name: 'Persyaratan Umum', href: '/pmb/syarat' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {syaratDokumen.map((kat, ki) => (
              <motion.div key={ki} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ki * 0.1 }}
                className="p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-[#FFD700] hover:shadow-xl transition-all duration-300 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center"><FileText className="w-6 h-6 text-[#F57C00]" /></div>
                  <h3 className="text-xl font-black text-[#001D4A]">{kat.kategori}</h3>
                </div>
                <ul className="space-y-3">
                  {kat.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 p-8 bg-[#001D4A] rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-black text-[#FFD700] mb-2">Sudah Siap Semua Dokumen?</h3>
              <p className="text-slate-300 font-medium">Pastikan seluruh dokumen valid dan terbaca jelas sebelum diunggah ke portal.</p>
            </div>
            <Link href="https://pmb.unmer.ac.id" className="flex-shrink-0 px-10 py-5 bg-[#FFD700] text-[#001D4A] rounded-2xl font-black hover:bg-white transition-all flex items-center gap-3 group">
              Mulai Pendaftaran <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
