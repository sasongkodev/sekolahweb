import { motion } from "motion/react";
import {
    Users,
    Target,
    Calendar,
    Award,
    Globe,
    Heart,
    Zap,
    ChevronRight,
    TrendingUp,
    MessageCircle,
    Shield
} from "lucide-react";

const pengurus = [
    { role: "Ketua OSIS", name: "Muhammad Rizky", class: "XI MIPA 1", image: "bg-blue-200" },
    { role: "Wakil Ketua", name: "Aisyah Putri", class: "XI IPS 2", image: "bg-pink-200" },
    { role: "Sekretaris I", name: "Dinda Kirana", class: "XI MIPA 3", image: "bg-purple-200" },
    { role: "Bendahara I", name: "Fajar Santoso", class: "XI MIPA 2", image: "bg-emerald-200" },
    { role: "Koord. Keimanan", name: "Ahmad Zaki", class: "X MIPA 1", image: "bg-amber-200" },
    { role: "Koord. Akademik", name: "Siti Nurhaliza", class: "X IPS 1", image: "bg-indigo-200" },
    { role: "Koord. Olahraga", name: "Budi Pratama", class: "X MIPA 4", image: "bg-red-200" },
    { role: "Koord. Seni", name: "Rina Melati", class: "X IPS 3", image: "bg-orange-200" },
];

const programs = [
    {
        title: "LDKS (Latihan Dasar Kepemimpinan)",
        desc: "Mencetak pemimpin masa depan yang berkarakter, tangguh, dan visioner melalui pelatihan intensif.",
        icon: Shield,
        color: "bg-blue-100 text-blue-600",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Bakti Sosial & Lingkungan",
        desc: "Aksi nyata kepedulian terhadap masyarakat dan pelestarian lingkungan hidup di sekitar sekolah.",
        icon: Heart,
        color: "bg-rose-100 text-rose-600",
        gradient: "from-rose-500 to-pink-500"
    },
    {
        title: "Gebyar Seni & Kreativitas",
        desc: "Panggung ekspresi bakat seni siswa dari musik, tari, teater hingga seni rupa.",
        icon: Zap,
        color: "bg-amber-100 text-amber-600",
        gradient: "from-amber-500 to-orange-500"
    },
    {
        title: "Class Meeting & Kompetisi",
        desc: "Ajang kompetisi olahraga dan akademik antar kelas untuk mempererat solidaritas.",
        icon: Award,
        color: "bg-purple-100 text-purple-600",
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        title: "Peringatan Hari Besar",
        desc: "Menyemarakkan hari besar nasional dan keagamaan dengan kegiatan positif dan edukatif.",
        icon: Calendar,
        color: "bg-emerald-100 text-emerald-600",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Forum Diskusi Siswa",
        desc: "Wadah aspirasi dan diskusi isu-isu terkini untuk melatih berpikir kritis.",
        icon: MessageCircle,
        color: "bg-sky-100 text-sky-600",
        gradient: "from-sky-500 to-blue-500"
    },
];

const OSIS = () => {
    return (
        <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900 text-white overflow-hidden py-32">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Animated Background Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] border border-white/10 rounded-full border-dashed opacity-30"
                ></motion.div>
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[500px] h-[500px] border border-white/10 rounded-full border-dashed opacity-30"
                ></motion.div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            <span className="text-blue-100 font-semibold text-sm tracking-wide uppercase">Organisasi Siswa Intra Sekolah</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            OSIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Cendekia</span>
                        </h1>

                        <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100/90 leading-relaxed font-light">
                            Wadah aspirasi, kreasi, dan kepemimpinan siswa untuk mewujudkan sekolah yang unggul dan berkarakter.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mt-10 flex flex-wrap justify-center gap-4"
                        >
                            <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-600/50 flex items-center gap-2 group">
                                Lihat Program
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-semibold hover:bg-white/20 transition-all backdrop-blur-md">
                                Struktur Organisasi
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Visi Misi Short / About */}
            <section className="container mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-10 scale-105"></div>
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative z-10 border border-slate-100">
                                <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Tentang OSIS</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    OSIS SMA Insan Cendekia bukan sekadar organisasi, melainkan laboratorium kepemimpinan. Di sini, kami belajar melayani, berkolaborasi, dan berinovasi untuk menciptakan lingkungan sekolah yang positif.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Kami menjunjung tinggi nilai <strong className="text-blue-900">Integritas</strong>, <strong className="text-blue-900">Kreativitas</strong>, dan <strong className="text-blue-900">Solidaritas</strong> dalam setiap langkah dan program kerja kami.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 grid grid-cols-2 gap-4"
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <Globe className="w-10 h-10 text-cyan-600 mb-4 bg-cyan-100 p-2 rounded-lg" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Berwawasan</h3>
                            <p className="text-slate-500 text-sm">Menjadi siswa yang melek global tanpa kehilangan jati diri.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow mt-8">
                            <Target className="w-10 h-10 text-blue-600 mb-4 bg-blue-100 p-2 rounded-lg" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Visioner</h3>
                            <p className="text-slate-500 text-sm">Berpikir jauh ke depan dan merencanakan masa depan matang.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <Users className="w-10 h-10 text-indigo-600 mb-4 bg-indigo-100 p-2 rounded-lg" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Kolaboratif</h3>
                            <p className="text-slate-500 text-sm">Sukses bersama melalui kerja sama tim yang solid.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow mt-8">
                            <Heart className="w-10 h-10 text-rose-600 mb-4 bg-rose-100 p-2 rounded-lg" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Peduli</h3>
                            <p className="text-slate-500 text-sm">Peka terhadap sesama dan lingkungan sekitar.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Struktur OSIS */}
            <section className="bg-slate-100 py-24 relative overflow-hidden">
                {/* Decorative BG */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Meet The Team</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Pengurus Inti OSIS</h2>
                        <p className="text-slate-600 text-lg">Wajah-wajah di balik layar yang siap melayani teman-teman sekalian.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {pengurus.map((person, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                                    {/* Placeholder for colorful abstract avatar if no image */}
                                    <div className={`absolute inset-0 ${person.image} opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                                        {/* Usually an Image goes here */}
                                        <Users className="w-20 h-20 opacity-20" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent pt-12">
                                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">{person.role}</p>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{person.name}</h3>
                                    <p className="text-slate-300 text-sm">{person.class}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Kerja */}
            <section className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Program Kerja Unggulan</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Inisiatif nyata untuk mengembangkan potensi siswa dan memajukan sekolah.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                                <program.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                                {program.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {program.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10"></div>
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/30 blur-[100px] rounded-full"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Punya Ide atau Masukan?</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                        OSIS selalu terbuka untuk mendengar aspirasi dari seluruh siswa. Mari bersama-sama membangun sekolah yang lebih baik.
                    </p>
                    <button className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-blue-50 transition-colors shadow-xl shadow-white/10">
                        Kotak Saran OSIS
                    </button>
                </div>
            </section>
        </main>
    );
};

export default OSIS;
