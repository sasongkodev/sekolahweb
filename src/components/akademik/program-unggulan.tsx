import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  BookOpen,
  Users,
  Trophy,
  Lightbulb,
  Palette,
  GraduationCap,
  ArrowRight,
  X,
  CheckCircle2
} from "lucide-react";

// Enhanced data with more details for the modal
const programs = [
  {
    title: "Program Akademik Intensif",
    desc: "Pendalaman materi inti dan pembinaan khusus untuk meningkatkan prestasi akademik siswa dan persiapan kompetisi.",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    details: [
      "Kelas tambahan untuk mata pelajaran UN dan SBMPTN",
      "Klinik akademik bagi siswa yang membutuhkan bimbingan",
      "Try out berkala dengan standar nasional",
      "Sistem pemantauan progres akademik real-time"
    ],
    benefits: "Meningkatkan peluang lolos PTN Favorit hingga 85%"
  },
  {
    title: "Penguatan Karakter",
    desc: "Pembentukan sikap disiplin, tanggung jawab, dan jiwa kepemimpinan Islam melalui kegiatan asrama terstruktur.",
    icon: Users,
    color: "bg-emerald-100 text-emerald-600",
    gradient: "from-emerald-500 to-emerald-600",
    details: [
      "Pembiasaan shalat berjamaah dan tahajud",
      "Program mentoring sebaya",
      "Latihan kepemimpinan tingkat dasar dan lanjut",
      "Kegiatan sosial kemasyarakatan"
    ],
    benefits: "Melahirkan pribadi yang beradab dan berintegritas"
  },
  {
    title: "Bina Prestasi & Olimpiade",
    desc: "Program bimbingan intensif bagi siswa berpotensi untuk menjuarai kompetisi tingkat nasional hingga internasional.",
    icon: Trophy,
    color: "bg-amber-100 text-amber-600",
    gradient: "from-amber-500 to-amber-600",
    details: [
      "Pelatihan intensif dengan pakar olimpiade",
      "Karantina persiapan kompetisi",
      "Fasilitas laboratorium riset lengkap",
      "Dukungan pendanaan penuh untuk kompetisi"
    ],
    benefits: "Meraih medali di OSN, KSM, dan olimpiade internasional"
  },
  {
    title: "Literasi & Riset",
    desc: "Mengembangkan budaya berpikir kritis dan analitis melalui program literasi dan penelitian ilmiah remaja.",
    icon: Lightbulb,
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-500 to-purple-600",
    details: [
      "Wajib kunjung perpustakaan dan review buku",
      "Kompetisi karya tulis ilmiah tahunan",
      "Workshop metodologi penelitian",
      "Publikasi jurnal ilmiah siswa"
    ],
    benefits: "Membangun kemampuan berpikir kritis dan analitis"
  },
  {
    title: "Seni & Olahraga",
    desc: "Wadah pengembangan minat dan bakat siswa di bidang non-akademik untuk keseimbangan fisik dan kreativitas.",
    icon: Palette,
    color: "bg-rose-100 text-rose-600",
    gradient: "from-rose-500 to-rose-600",
    details: [
      "Ekstrakurikuler futsal, basket, badminton",
      "Sanggar seni rupa dan musik",
      "Klub fotografi dan jurnalistik",
      "Pentas seni tahunan akbar"
    ],
    benefits: "Menyeimbangkan kecerdasan intelektual dan emosional"
  },
  {
    title: "Sukses Perguruan Tinggi",
    desc: "Pendampingan karir dan pemetaan minat bakat untuk memastikan lulusan diterima di PTN/S terbaik.",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-600",
    gradient: "from-indigo-500 to-indigo-600",
    details: [
      "Psikotes dan konseling karir rutin",
      "Kunjungan kampus (Campus Tour)",
      "Seminar orang tua dan siswa",
      "Bimbingan pendaftaran SNBP/SNBT"
    ],
    benefits: "Diterima di perguruan tinggi impian sesuai minat"
  },
];

const ProgramUnggulan = () => {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pb-32 pt-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px]"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-medium mb-6 backdrop-blur-md">
              ✨ Keunggulan Kami
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Unggulan</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Mewujudkan generasi unggul melalui ekosistem pendidikan komprehensif yang mengintegrasikan akademik, karakter, dan keterampilan masa depan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Grid - Overlapping the hero */}
      <section className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProgram(program)}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${program.gradient} opacity-5 rounded-bl-full group-hover:scale-110 transition-transform duration-500`}></div>

              <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                <program.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {program.desc}
              </p>

              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Lihat Detail</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats / CTA Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50 rounded-3xl p-10 md:p-16 text-center border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Siap Menjadi Bagian dari Kami?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
              Bergabunglah dengan ribuan siswa berprestasi lainnya dan mulai perjalanan akademik terbaikmu di sini.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Daftar Sekarang
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white text-slate-700 border border-slate-300 font-semibold hover:bg-slate-50 transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              layoutId={`card-${selectedProgram.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className={`relative p-8 text-white bg-gradient-to-r ${selectedProgram.gradient}`}>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <selectedProgram.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{selectedProgram.title}</h3>
                <p className="text-white/90 text-lg">{selectedProgram.desc}</p>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Manfaat Utama
                  </h4>
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-800 font-medium">
                    {selectedProgram.benefits}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Detail Kegiatan</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProgram.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                        <span className="text-slate-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProgramUnggulan;
