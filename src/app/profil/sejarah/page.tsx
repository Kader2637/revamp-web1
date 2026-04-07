'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const milestones = [
  { tahun: '1964', judul: 'Lahir dari Semangat Kemerdekaan', desc: 'UNMER Malang resmi berdiri pada 29 Januari 1964 — terinspirasi dari jiwa kemerdekaan Indonesia, berkomitmen menjadi jembatan ilmu bagi putra-putri bangsa.', color: 'bg-[#FFD700]', textDark: true },
  { tahun: '1970', judul: 'Dua Pilar Baru Berdiri', desc: 'Membuka Fakultas Hukum dan Fakultas Ekonomi — dua pilar akademik yang hingga kini masih menjadi kebanggaan dan tulang punggung universitas.', color: 'bg-white', textDark: true },
  { tahun: '1985', judul: 'Kampus Terpadu Modern', desc: 'Membangun kampus terpadu di Jl. Terusan Raya Dieng seluas 10.000 m² dengan laboratorium pertama, menandai era modernisasi fasilitas pendidikan.', color: 'bg-[#001D4A]', textDark: false },
  { tahun: '1995', judul: 'Pascasarjana Pertama di Malang', desc: 'Program Magister Manajemen dibuka — pertama di Malang Raya untuk jenjang S2 dari PTS. Menjawab kebutuhan nyata para profesional Jawa Timur.', color: 'bg-slate-900', textDark: false },
  { tahun: '2005', judul: 'Era Revolusi Digital', desc: 'Implementasi SIAKAD dan e-learning pertama. Kampus bergerak memeluk teknologi sebagai tulang punggung sistem akademik yang modern dan efisien.', color: 'bg-[#FFD700]', textDark: true },
  { tahun: '2015', judul: 'Akreditasi A — Unggul', desc: 'UNMER Malang meraih Akreditasi Institusi A (Unggul) dari BAN-PT. Pengakuan tertinggi atas dedikasi panjang dalam membangun standar pendidikan nasional.', color: 'bg-[#001D4A]', textDark: false },
  { tahun: '2020', judul: 'Kampus Merdeka Penuh', desc: 'Mengimplementasikan MBKM secara total. 200+ mitra industri bergabung membuka jalur magang, riset kolaboratif, dan inkubasi wirausaha mahasiswa.', color: 'bg-white', textDark: true },
  { tahun: '2024', judul: '60 Tahun — Kilas Balik & Harapan', desc: 'Merayakan enam dekade pengabdian. Dengan 54.000+ alumni, UNMER meneguhkan posisi sebagai institusi pendidikan yang matang dan terpercaya.', color: 'bg-slate-900', textDark: false },
  { tahun: '2025', judul: 'Pusat Riset & Inovasi Global', desc: 'Peresmian Integrated Research Center (IRC) yang berfokus pada AI dan Keberlanjutan. Memperluas jejaring ke 50+ universitas mitra di 4 benua.', color: 'bg-white', textDark: true },
  { tahun: '2026', judul: 'Visi Indonesia Emas 2045', desc: 'Meluncurkan Blueprint Transformasi Digital 2.0. Menghadapi era baru dengan fasilitas kampus ultra-modern dan kurikulum adaptif masa depan.', color: 'bg-[#001D4A]', textDark: false },
];

export default function SejarahPage() {
  return (
    <div>
      {/* HERO — Full bleed dark */}
      <section className="relative min-h-screen bg-[#001D4A] flex items-end overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)' }} />
        {/* Giant year */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
          <span className="text-[40vw] font-black text-white/[0.02] leading-none tracking-tighter">1964</span>
        </div>
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 pb-24 pt-40 w-full">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#FFD700]" />
              <span className="text-[#FFD700] font-black uppercase tracking-[0.4em] text-sm">Profil Universitas</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-serif font-black text-white leading-[0.9] tracking-tight">
              Sejarah<br/><span className="text-[#FFD700] italic">UNMER</span>
            </h1>
            <p className="text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl border-l-4 border-[#FFD700] pl-8">
              Enam dekade perjalanan tanpa henti — dari kampus kecil yang berdiri di atas semangat kemerdekaan, menuju universitas unggul bertaraf internasional.
            </p>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30">
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* STATS — Bold numbers */}
      <section className="py-0 bg-[#FFD700]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#001D4A]/20">
            {[{ num: '60', unit: '+', label: 'Tahun Berdiri' }, { num: '54.000', unit: '+', label: 'Total Alumni' }, { num: '32', unit: '', label: 'Program Studi' }, { num: '11.000', unit: '+', label: 'Mahasiswa Aktif' }].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="py-14 px-8 text-center">
                <p className="text-6xl md:text-7xl font-black text-[#001D4A]">{s.num}<span className="text-4xl">{s.unit}</span></p>
                <p className="text-[#001D4A]/60 font-black uppercase tracking-[0.2em] text-xs mt-3">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE — Magazine bento grid */}
      <section className="py-0 bg-white">
        <div className="max-w-[90rem] mx-auto">
          {milestones.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`relative ${m.color} border-b border-black/5`}
            >
              <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Giant year — left or right alternating */}
                <div className={`lg:col-span-4 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`text-[10rem] md:text-[12rem] font-black leading-none tracking-tighter ${m.textDark ? 'text-black/10' : 'text-white/10'}`}
                    style={{ lineHeight: '0.85' }}>
                    {m.tahun}
                  </div>
                </div>
                {/* Content */}
                <div className={`lg:col-span-8 space-y-6 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`inline-block px-5 py-2 rounded-full font-black text-sm ${m.textDark ? 'bg-black/10 text-black' : 'bg-white/10 text-white'}`}>
                    {m.tahun}
                  </div>
                  <h2 className={`text-4xl md:text-6xl font-serif font-black leading-tight ${m.textDark ? 'text-black' : 'text-white'}`}>
                    {m.judul}
                  </h2>
                  <p className={`text-xl leading-relaxed font-medium max-w-2xl ${m.textDark ? 'text-black/60' : 'text-white/70'}`}>
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-32 bg-[#FFD700] text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[30vw] font-black text-[#001D4A]/5">60</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-6xl md:text-8xl font-serif font-black text-[#001D4A] leading-tight">
            Jadilah Bagian<br/>dari Sejarah<br/><span className="italic">Berikutnya.</span>
          </h2>
          <Link href="https://pmb.unmer.ac.id"
            className="inline-flex items-center gap-4 px-14 py-7 bg-[#001D4A] text-white rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl group">
            Daftar Sekarang
            <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
