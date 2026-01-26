import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import {
  Trophy,
  Medal,
  Award,
  Search,
  Filter,
  Calendar,
  MapPin,
  Star
} from "lucide-react";

// Mock Data
const achievements = [
  { title: "Juara 1 Olimpiade Matematika", level: "Kabupaten", category: "Akademik", year: "2024", winner: "Ahmad Zaki", rank: 1 },
  { title: "Juara 1 Lomba Karya Ilmiah", level: "Provinsi", category: "Sains", year: "2023", winner: "Tim KIR", rank: 1 },
  { title: "Juara 2 Futsal Championship", level: "Regional", category: "Olahraga", year: "2024", winner: "Tim Futsal Putra", rank: 2 },
  { title: "Finalis Debat Bahasa Inggris", level: "Nasional", category: "Bahasa", year: "2023", winner: "Sarah Amalia", rank: 0 },
  { title: "Medali Emas OSN Fisika", level: "Nasional", category: "Akademik", year: "2023", winner: "Budi Santoso", rank: 1 },
  { title: "Juara Harapan 1 Puisi", level: "Kota", category: "Seni", year: "2024", winner: "Dinda Kirana", rank: 3 },
  { title: "Top 10 Coding Competition", level: "Internasional", category: "Teknologi", year: "2024", winner: "Rizky Ramadhan", rank: 0 },
];

const PrestasiSiswa = () => {
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Semua", "Akademik", "Olahraga", "Seni", "Bahasa", "Sains", "Teknologi"];

  const filteredData = useMemo(() => {
    return achievements.filter(item => {
      const matchCat = filterCategory === "Semua" || item.category === filterCategory;
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.winner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filterCategory, searchQuery]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <Award className="w-6 h-6 text-blue-500" />;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-50 border-yellow-200 text-yellow-700";
    if (rank === 2) return "bg-gray-50 border-gray-200 text-gray-700";
    if (rank === 3) return "bg-amber-50 border-amber-200 text-amber-800";
    return "bg-blue-50 border-blue-200 text-blue-700";
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 rotate-3"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hall of Fame</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Merekam jejak prestasi gemilang siswa-siswi SMA Insan Cendekia yang telah mengharumkan nama sekolah di kancah regional hingga internasional.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">25+</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Emas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-300">40+</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Perak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">30+</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Perunggu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between">

          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${filterCategory === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari prestasi atau nama siswa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 py-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                layout
                key={index} // Using index for mock data, ideally use unique ID
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl flex items-center justify-center ${getRankColor(item.rank)}`}>
                    {getRankIcon(item.rank)}
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-500">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-slate-700">{item.winner}</span>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Tingkat {item.level}
                  </div>
                  <div className="px-2 py-1 rounded bg-slate-50 border border-slate-100">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Tidak ada prestasi yang ditemukan.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default PrestasiSiswa;
