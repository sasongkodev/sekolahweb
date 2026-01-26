import { motion } from "motion/react";
import { BookOpen, CheckCircle, Globe, Award, Layers, Target, Users, Zap } from "lucide-react";
import { useState } from "react";

const PRINCIPLES = [
    {
        title: "Berbasis Kompetensi",
        desc: "Mengembangkan kompetensi peserta didik sesuai standar nasional pendidikan.",
        icon: Award,
        color: "bg-blue-600"
    },
    {
        title: "Penguatan Karakter",
        desc: "Menanamkan nilai disiplin, tanggung jawab, dan etika dalam pembelajaran.",
        icon: Users,
        color: "bg-emerald-600"
    },
    {
        title: "Kontekstual & Relevan",
        desc: "Materi pembelajaran disesuaikan dengan kebutuhan nyata dan perkembangan global.",
        icon: Globe,
        color: "bg-amber-600"
    },
    {
        title: "Pembelajaran Aktif",
        desc: "Mendorong siswa untuk berpikir kritis, kreatif, dan kolaboratif.",
        icon: Zap,
        color: "bg-rose-600"
    }
];

const CURRICULUM_STRUCTURE = [
    {
        category: "Mata Pelajaran Wajib",
        description: "Mata pelajaran inti yang wajib diikuti oleh seluruh peserta didik untuk membentuk dasar pengetahuan dan karakter.",
        items: [
            "Pendidikan Agama dan Budi Pekerti",
            "Pendidikan Pancasila dan Kewarganegaraan",
            "Bahasa Indonesia",
            "Matematika",
            "Sejarah Indonesia",
            "Bahasa Inggris"
        ]
    },
    {
        category: "Peminatan MIPA",
        description: "Kelompok mata pelajaran peminatan Matematika dan Ilmu Pengetahuan Alam bagi siswa yang ingin mendalami sains.",
        items: [
            "Matematika Peminatan",
            "Biologi",
            "Fisika",
            "Kimia"
        ]
    },
    {
        category: "Peminatan IPS",
        description: "Kelompok mata pelajaran peminatan Ilmu Pengetahuan Sosial bagi siswa yang tertarik pada studi sosial dan kemanusiaan.",
        items: [
            "Geografi",
            "Sejarah Peminatan",
            "Sosiologi",
            "Ekonomi"
        ]
    },
    {
        category: "Lintas Minat & Mulok",
        description: "Mata pelajaran pilihan lintas minat dan muatan lokal untuk memperkaya wawasan dan keterampilan.",
        items: [
            "Bahasa & Sastra Inggris (Lintas Minat)",
            "Bahasa Sunda (Mulok)",
            "Informatika / TIK",
            "Prakarya dan Kewirausahaan"
        ]
    }
];

export default function Kurikulum() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-[#123C69] pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-4">
                            <BookOpen size={16} />
                            <span>Akademik</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Kurikulum Sekolah
                        </h1>
                        <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
                            Kurikulum SMA Insan Cendekia dirancang adaptif dan holistik untuk membentuk peserta didik
                            yang unggul secara akademik, berkarakter mulia, dan siap menghadapi tantangan global.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                {/* Principles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {PRINCIPLES.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Curriculum Structure */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sidebar / Tabs */}
                    <div className="w-full lg:w-1/3 sticky top-24">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2">
                            <h3 className="px-4 py-3 text-lg font-bold text-slate-800 border-b border-slate-100 mb-2">
                                Struktur Kurikulum
                            </h3>
                            <div className="flex flex-col gap-1">
                                {CURRICULUM_STRUCTURE.map((section, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${activeTab === idx
                                                ? "bg-blue-50 text-blue-700 font-semibold"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                            }`}
                                    >
                                        <span>{section.category}</span>
                                        {activeTab === idx && (
                                            <motion.div layoutId="activeCheck" className="text-blue-600">
                                                <Target size={18} />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">
                                        {CURRICULUM_STRUCTURE[activeTab].category}
                                    </h2>
                                    <p className="text-slate-500 text-sm">Kelompok Mata Pelajaran</p>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                {CURRICULUM_STRUCTURE[activeTab].description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {CURRICULUM_STRUCTURE[activeTab].items.map((subject, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                                    >
                                        <CheckCircle className="text-blue-500 w-5 h-5 shrink-0" />
                                        <span className="font-medium text-slate-700">{subject}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Additional Info / Footer Quote */}
                <div className="mt-20 text-center max-w-4xl mx-auto">
                    <div className="relative py-12 px-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl text-white overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Siap untuk Masa Depan?</h3>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Kurikulum kami terus berevolusi untuk memastikan setiap siswa mendapatkan pendidikan terbaik
                                yang relevan dengan tantangan zaman.
                            </p>
                            <div className="flex justify-center gap-4">
                                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium">
                                    Kurikulum Merdeka
                                </div>
                                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium">
                                    Project Based Learning
                                </div>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
