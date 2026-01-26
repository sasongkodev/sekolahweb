import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import {
    Book,
    Atom,
    Globe,
    Calculator,
    Beaker,
    Dna,
    Landmark,
    Map,
    Users,
    ScrollText,
    Languages,
    BrainCircuit,
    PieChart,
    Search,
    Filter,
    ArrowRight
} from "lucide-react";

const categories = [
    {
        id: "all",
        label: "Semua",
        color: "bg-slate-100 text-slate-600",
        activeColor: "bg-slate-800 text-white"
    },
    {
        id: "wajib",
        label: "Wajib",
        color: "bg-blue-50 text-blue-600",
        activeColor: "bg-blue-600 text-white"
    },
    {
        id: "mipa",
        label: "Peminatan MIPA",
        color: "bg-emerald-50 text-emerald-600",
        activeColor: "bg-emerald-600 text-white"
    },
    {
        id: "ips",
        label: "Peminatan IPS",
        color: "bg-amber-50 text-amber-600",
        activeColor: "bg-amber-600 text-white"
    }
];

const subjects = [
    // Wajib
    { name: "Pendidikan Agama", category: "wajib", icon: Book, desc: "Membangun pondasi spiritual dan aklak mulia.", code: "PABP" },
    { name: "PPKn", category: "wajib", icon: Landmark, desc: "Kesadaran berbangsa dan bernegara.", code: "PPKN" },
    { name: "Bahasa Indonesia", category: "wajib", icon: Languages, desc: "Kemampuan komunikasi dan literasi nasional.", code: "BIN" },
    { name: "Matematika Wajib", category: "wajib", icon: Calculator, desc: "Logika matematika dasar dan terapan.", code: "MTK" },
    { name: "Sejarah Indonesia", category: "wajib", icon: ScrollText, desc: "Memahami perjalanan bangsa.", code: "SEJ" },
    { name: "Bahasa Inggris", category: "wajib", icon: Languages, desc: "Komunikasi global dan literasi asing.", code: "BIG" },

    // MIPA
    { name: "Fisika", category: "mipa", icon: Atom, desc: "Mempelajari fenomena alam dan hukum fisika.", code: "FIS" },
    { name: "Kimia", category: "mipa", icon: Beaker, desc: "Struktur, sifat, dan perubahan materi.", code: "KIM" },
    { name: "Biologi", category: "mipa", icon: Dna, desc: "Ilmu tentang makhluk hidup dan kehidupan.", code: "BIO" },
    { name: "Matematika Peminatan", category: "mipa", icon: BrainCircuit, desc: "Kalkulus, aljabar linier, dan analisis.", code: "MTKP" },

    // IPS
    { name: "Ekonomi", category: "ips", icon: PieChart, desc: "Prinsip ekonomi, akuntansi, dan pasar.", code: "EKO" },
    { name: "Geografi", category: "ips", icon: Map, desc: "Fenomena geospasial dan lingkungan.", code: "GEO" },
    { name: "Sosiologi", category: "ips", icon: Users, desc: "Interaksi sosial dan dinamika masyarakat.", code: "SOS" },
    { name: "Sejarah Peminatan", category: "ips", icon: ScrollText, desc: "Sejarah dunia dan peradaban manusia.", code: "SEJP" },
];

const MataPelajaran = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSubjects = useMemo(() => {
        return subjects.filter((subject) => {
            const matchesTab = activeTab === "all" || subject.category === activeTab;
            const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                subject.code.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTab && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white overflow-hidden py-24">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            Kurikulum & Mata Pelajaran
                        </h1>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
                            Struktur kurikulum yang komprehensif untuk mengembangkan potensi akademik, karakter, dan wawasan global siswa.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-indigo-300 group-focus-within:text-white transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari mata pelajaran..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-4 pl-12 pr-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-indigo-200 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Content */}
            <section className="container mx-auto px-6 py-12">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat.id
                                    ? `${cat.activeColor} shadow-md scale-105`
                                    : `${cat.color} hover:bg-slate-200`
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSubjects.length > 0 ? (
                            filteredSubjects.map((subject) => (
                                <motion.div
                                    layout
                                    key={subject.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${subject.category === 'wajib' ? 'bg-blue-100 text-blue-600' :
                                                subject.category === 'mipa' ? 'bg-emerald-100 text-emerald-600' :
                                                    'bg-amber-100 text-amber-600'
                                            }`}>
                                            <subject.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            {subject.code}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                        {subject.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                        {subject.desc}
                                    </p>
                                    <div className="flex items-center text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Lihat Silabus <ArrowRight className="w-3 h-3 ml-1" />
                                    </div>

                                    {/* Category pill at bottom right */}
                                    {/* <div className="absolute top-4 right-4">
                                        <span className={`w-2 h-2 rounded-full block ${
                                            subject.category === 'wajib' ? 'bg-blue-500' :
                                            subject.category === 'mipa' ? 'bg-emerald-500' :
                                            'bg-amber-500'
                                        }`}></span>
                                    </div> */}
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 text-slate-500"
                            >
                                <Filter className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                                <p className="text-lg font-medium">Tidak ada mata pelajaran yang ditemukan.</p>
                                <p className="text-sm">Coba kata kunci lain atau ganti kategori.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </main>
    );
};

export default MataPelajaran;
