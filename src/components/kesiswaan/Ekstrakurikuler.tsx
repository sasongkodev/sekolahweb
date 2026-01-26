import { motion } from "motion/react";
import {
  Palette,
  Music,
  Tent, // Camping/Pramuka
  Activity, // Sports general
  Code, // ICT
  BookOpen, // Literature
  Globe, // English
  Heart, // PMR/Rohani
  Users,
  Trophy,
  ArrowRight,
  Flag
} from "lucide-react";

const extracurriculars = [
  {
    category: "Kepemimpinan & Karakter",
    color: "bg-blue-100 text-blue-600",
    items: [
      { name: "Pramuka", icon: Tent, desc: "Membangun karakter mandiri, disiplin, dan cinta alam." },
      { name: "Paskibra", icon: Flag, desc: "Melatih kedisiplinan dan semangat nasionalisme." },
      { name: "PMR", icon: Heart, desc: "Keterampilan pertolongan pertama dan kepedulian sosial." },
      { name: "Rohis/Rohkris", icon: BookOpen, desc: "Pendalaman nilai spiritual dan keagamaan." },
    ],
  },
  {
    category: "Olahraga & Kesehatan",
    color: "bg-emerald-100 text-emerald-600",
    items: [
      { name: "Futsal", icon: Activity, desc: "Melatih kerjasama tim dan ketahanan fisik." },
      { name: "Basket", icon: Activity, desc: "Strategi permainan dan mental juara." },
      { name: "Bulu Tangkis", icon: Activity, desc: "Ketangkasan dan kecepatan reaksi." },
    ],
  },
  {
    category: "Seni & Kreativitas",
    color: "bg-amber-100 text-amber-600",
    items: [
      { name: "Seni Musik", icon: Music, desc: "Pengembangan bakat bermusik dan vokal." },
      { name: "Seni Tari", icon: Palette, desc: "Pelestarian budaya melalui gerak tari." },
      { name: "Teater", icon: Users, desc: "Ekspresi peran dan seni panggung." },
    ],
  },
  {
    category: "Sains & Teknologi",
    color: "bg-purple-100 text-purple-600",
    items: [
      { name: "KIR", icon: BookOpen, desc: "Penelitian dan inovasi ilmiah remaja." },
      { name: "ICT Club", icon: Code, desc: "Coding, desain grafis, dan multimedia." },
      { name: "English Club", icon: Globe, desc: "Public speaking dan debat bahasa Inggris." },
    ],
  },
];

const Ekstrakurikuler = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white overflow-hidden py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-medium mb-6 backdrop-blur-md">
              ⚡ Minat & Bakat
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Ekstrakurikuler
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 leading-relaxed font-light">
              Wadah pengembangan potensi diri di luar akademik untuk mencetak siswa yang kreatif, terampil, dan berkarakter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Kenapa Gabung Ekstrakurikuler?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Kegiatan ekstrakurikuler di SMA Insan Cendekia didesain untuk menyeimbangkan kecerdasan intelektual (IQ), emosional (EQ), dan spiritual (SQ). Temukan passion-mu dan berprestasi bersama kami.
          </p>
        </motion.div>
      </section>

      {/* Category Sections */}
      <div className="container mx-auto px-6 py-20 space-y-20">
        {extracurriculars.map((cat, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-4 mb-10">
              <div className={`w-2 h-10 rounded-full ${cat.color.replace('text-', 'bg-').split(' ')[0]}`}></div>
              <h3 className="text-3xl font-bold text-slate-900">{cat.category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIdx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${cat.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-500 transition-colors">
                    Lihat Kegiatan <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Menjadi Juara?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">Bergabunglah dengan ekstrakurikuler pilihanmu dan ukir prestasi gemilang bersama teman-teman seperjuangan.</p>
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30">
            Daftar Ekstrakurikuler
          </button>
        </div>
      </section>
    </main>
  );
};

export default Ekstrakurikuler;
