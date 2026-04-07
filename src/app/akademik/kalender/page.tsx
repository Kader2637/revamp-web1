'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

type EventItem = { tanggal: string; kegiatan: string; type: 'akademik' | 'libur' | 'ujian' | 'special' };

const kalenderSemesterGanjil: EventItem[] = [
  { tanggal: '1 September 2026', kegiatan: 'Awal Semester Ganjil 2026/2027', type: 'akademik' },
  { tanggal: '1–5 September 2026', kegiatan: 'Orientasi Mahasiswa Baru (OPSKM)', type: 'special' },
  { tanggal: '8 September 2026', kegiatan: 'Perkuliahan Efektif Dimulai', type: 'akademik' },
  { tanggal: '27 Oktober 2026', kegiatan: 'Hari Sumpah Pemuda (Libur)', type: 'libur' },
  { tanggal: '10 November 2026', kegiatan: 'Hari Pahlawan (Libur)', type: 'libur' },
  { tanggal: '3–7 November 2026', kegiatan: 'Ujian Tengah Semester (UTS)', type: 'ujian' },
  { tanggal: '25 Desember 2026', kegiatan: 'Hari Natal (Libur)', type: 'libur' },
  { tanggal: '26 Des 2026 – 3 Jan 2027', kegiatan: 'Libur Akhir Tahun', type: 'libur' },
  { tanggal: '11–15 Januari 2027', kegiatan: 'Ujian Akhir Semester (UAS)', type: 'ujian' },
  { tanggal: '25–31 Januari 2027', kegiatan: 'Pengisian KRS Semester Genap', type: 'akademik' },
];

const typeColor: Record<string, string> = {
  akademik: 'bg-blue-100 text-blue-700 border-blue-200',
  libur: 'bg-red-50 text-red-600 border-red-100',
  ujian: 'bg-orange-100 text-orange-700 border-orange-200',
  special: 'bg-[#FFD700]/20 text-[#001D4A] border-[#FFD700]/30',
};

const typeLabel: Record<string, string> = {
  akademik: 'Akademik', libur: 'Libur', ujian: 'Ujian', special: 'Kegiatan Khusus',
};

export default function KalenderPage() {
  return (
    <div>
      <PageHeader title="Kalender Akademik 2026/2027" accent="2026/2027"
        subtitle="Jadwal resmi kegiatan akademik, ujian, dan hari libur di lingkungan Universitas Merdeka Malang."
        breadcrumbs={[{ name: 'Akademik', href: '/akademik/feb' }, { name: 'Kalender Akademik', href: '/akademik/kalender' }]} />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(typeLabel).map(([key, label]) => (
              <div key={key} className={`px-4 py-2 rounded-full border font-bold text-sm ${typeColor[key]}`}>{label}</div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-serif font-black text-[#001D4A] mb-8">Semester <span className="text-[#F57C00]">Ganjil</span> 2026/2027</h2>
            <div className="space-y-4">
              {kalenderSemesterGanjil.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-12 gap-4 items-center p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-all group">
                  <div className="col-span-12 md:col-span-4">
                    <p className="font-black text-[#001D4A] text-sm">{item.tanggal}</p>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <p className="text-slate-700 font-medium">{item.kegiatan}</p>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex justify-start md:justify-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-black border ${typeColor[item.type]}`}>{typeLabel[item.type]}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              <strong className="text-slate-700">Catatan:</strong> Kalender akademik dapat berubah sewaktu-waktu sesuai kebijakan universitas dan ketentuan pemerintah. Mahasiswa diwajibkan memantau pengumuman resmi melalui portal SIAKAD atau papan pengumuman resmi universitas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
