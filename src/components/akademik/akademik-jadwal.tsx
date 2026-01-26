import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
    Calendar,
    Clock,
    CheckCircle2,
    GraduationCap,
    BookOpen,
    FileText,
    Award,
    ArrowRight,
    Download,
    Filter
} from "lucide-react";

const scheduleItems = [
    {
        month: "Juli",
        title: "Awal Tahun Ajaran Baru",
        description: "Kegiatan Belajar Mengajar (KBM) dimulai. Masa Pengenalan Lingkungan Sekolah (MPLS) bagi siswa baru.",
        icon: Calendar,
        color: "bg-blue-100 text-blue-600",
        date: "10 - 15 Juli",
        semester: 1
    },
    {
        month: "Agustus",
        title: "Peringatan HUT RI",
        description: "Upacara bendera dan berbagai lomba akademik maupun non-akademik untuk memeriahkan kemerdekaan.",
        icon: Award,
        color: "bg-red-100 text-red-600",
        date: "17 Agustus",
        semester: 1
    },
    {
        month: "September",
        title: "Penilaian Tengah Semester 1",
        description: "Evaluasi pembelajaran paruh semester ganjil untuk mengukur pemahaman siswa.",
        icon: FileText,
        color: "bg-amber-100 text-amber-600",
        date: "18 - 23 September",
        semester: 1
    },
    {
        month: "Desember",
        title: "Penilaian Akhir Semester 1",
        description: "Ujian akhir semester ganjil dan pembagian rapor hasil belajar.",
        icon: BookOpen,
        color: "bg-indigo-100 text-indigo-600",
        date: "4 - 12 Desember",
        semester: 1
    },
    {
        month: "Januari",
        title: "Awal Semester Genap",
        description: "Memulai kegiatan belajar mengajar di semester genap dengan semangat baru.",
        icon: Calendar,
        color: "bg-blue-100 text-blue-600",
        date: "02 Januari",
        semester: 2
    },
    {
        month: "Maret",
        title: "Penilaian Tengah Semester 2",
        description: "Evaluasi berjalan di pertengahan semester genap.",
        icon: FileText,
        color: "bg-amber-100 text-amber-600",
        date: "10 - 15 Maret",
        semester: 2
    },
    {
        month: "April",
        title: "Ujian Sekolah (Kelas XII)",
        description: "Pelaksanaan Ujian Sekolah bagi siswa tingkat akhir sebagai syarat kelulusan.",
        icon: GraduationCap,
        color: "bg-purple-100 text-purple-600",
        date: "05 - 12 April",
        semester: 2
    },
    {
        month: "Juni",
        title: "Penilaian Akhir Tahun",
        description: "Ujian kenaikan kelas, pembagian rapor semester genap, dan libur panjang.",
        icon: Award,
        color: "bg-emerald-100 text-emerald-600",
        date: "10 - 20 Juni",
        semester: 2
    },
];

const AkademikJadwal = () => {
    const [semesterFilter, setSemesterFilter] = useState<number | 'all'>('all');

    const filteredItems = semesterFilter === 'all'
        ? scheduleItems
        : scheduleItems.filter(item => item.semester === semesterFilter);

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white overflow-hidden py-24">
                {/* Background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
                            <Clock className="w-4 h-4" />
                            Agenda Akademik
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            Jadwal Akademik
                        </h1>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
                            Kalender kegiatan dan agenda penting SMA Insan Cendekia sepanjang tahun ajaran.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20">
                                <Download className="w-5 h-5" />
                                Unduh Kalender PDF
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Controls */}
            <div className="container mx-auto px-6 mt-12 mb-4 sticky top-4 z-30">
                <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-full p-2 flex justify-center w-max mx-auto shadow-sm">
                    <button
                        onClick={() => setSemesterFilter('all')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${semesterFilter === 'all' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Semua
                    </button>
                    <button
                        onClick={() => setSemesterFilter(1)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${semesterFilter === 1 ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Semester 1
                    </button>
                    <button
                        onClick={() => setSemesterFilter(2)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${semesterFilter === 2 ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Semester 2
                    </button>
                </div>
            </div>

            {/* Timeline Section */}
            <section className="container mx-auto px-6 pb-20 pt-8">
                <div className="max-w-4xl mx-auto relative">

                    {/* Vertical Line for Desktop */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 hidden md:block transform -translate-x-1/2 origin-top rounded-full"
                    ></motion.div>

                    {/* Mobile Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-200 md:hidden rounded-full"></div>

                    <AnimatePresence mode="wait">
                        {filteredItems.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <motion.div
                                    key={item.title} // Use title as key for animation continuity
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-8 ${isLeft ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Spacer for desktop alignment */}
                                    <div className="hidden md:block w-1/2"></div>

                                    {/* Center Dot */}
                                    <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-blue-500 shadow-md z-10 transform -translate-x-1/2 md:-translate-y-1/2 mt-1 md:mt-0">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                                        <div
                                            className={`group relative bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 ${isLeft ? "md:hover:-translate-x-2" : "md:hover:translate-x-2"
                                                }`}
                                        >
                                            <div className={`absolute top-6 ${isLeft ? "right-6 md:left-6 md:right-auto" : "right-6"} p-2 rounded-xl ${item.color} opacity-20 group-hover:opacity-100 transition-opacity`}>
                                                <item.icon className="w-6 h-6" />
                                            </div>

                                            <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase mb-3 tracking-wider ${item.color.replace('text-', 'bg-').replace('100', '50')} ${item.color}`}>
                                                {item.month}
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            <div className={`flex items-center text-sm font-medium text-gray-500  ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                                                <Clock className="w-4 h-4 mr-2" />
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
};

export default AkademikJadwal;
