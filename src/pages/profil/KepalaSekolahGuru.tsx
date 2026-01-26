import { motion } from "motion/react";
import { GraduationCap, BookOpen, User, Mail, Star, Quote } from "lucide-react";

interface Teacher {
    id: string;
    name: string;
    subject: string;
    image?: string;
    role?: string;
}

const PRINCIPAL = {
    name: "Drs. Ahmad Fauzi, M.Pd",
    role: "Kepala Sekolah",
    quote: "Pendidikan bukan hanya tentang mengisi wadah, tetapi menyalakan api keingintahuan dan membentuk karakter mulia.",
    image: null // Placeholder
};

const TEACHERS: Teacher[] = [
    { id: "1", name: "Budi Santoso, S.Pd", subject: "Matematika" },
    { id: "2", name: "Siti Aminah, S.Pd", subject: "Bahasa Indonesia" },
    { id: "3", name: "John Smith, B.Ed", subject: "Bahasa Inggris" },
    { id: "4", name: "Dr. Rina Damayanti", subject: "Fisika" },
    { id: "5", name: "Hendra Wijaya, S.Si", subject: "Kimia" },
    { id: "6", name: "Ratna Sari, S.Pd", subject: "Biologi" },
    { id: "7", name: "Dedi Kurniawan, S.Pd", subject: "Sejarah" },
    { id: "8", name: "Nurul Hidayah, S.Pd", subject: "Geografi" },
    { id: "9", name: "Agus Pratama, S.kom", subject: "TIK" },
    { id: "10", name: "Dewi Lestari, S.Pd", subject: "Seni Budaya" },
    { id: "11", name: "Ust. Abdullah", subject: "Pendidikan Agama Islam" },
    { id: "12", name: "Bambang Suherman", subject: "PJOK" },
];

export default function KepalaSekolahGuru() {
    return (
        <main className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-[#123C69] pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Tenaga Pendidik
                        </h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Mengenal sosok-sosok inspiratif yang berdedikasi membimbing dan mencerdaskan generasi penerus bangsa.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                {/* Principal Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 mb-20 border border-slate-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="relative shrink-0">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden relative z-10">
                                {PRINCIPAL.image ? (
                                    <img src={PRINCIPAL.image} alt={PRINCIPAL.name} className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-24 h-24 text-slate-300" />
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg z-20">
                                <Star fill="currentColor" className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h2 className="text-xl text-blue-600 font-bold uppercase tracking-wide mb-2">{PRINCIPAL.role}</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{PRINCIPAL.name}</h3>
                            <div className="relative bg-blue-50 p-6 rounded-xl rounded-tl-none">
                                <Quote className="absolute -top-4 -left-2 text-blue-200 w-10 h-10 transform scale-x-[-1]" />
                                <p className="text-slate-700 italic text-lg leading-relaxed relative z-10">
                                    "{PRINCIPAL.quote}"
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Teachers Grid */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Daftar Guru</h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full mt-2"></div>
                    </div>
                    {/* Optional: Filter UI could go here */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {TEACHERS.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group"
                        >
                            <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                                    <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md">
                                        <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                            <User className="w-10 h-10 text-slate-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-14 pb-6 px-4 text-center">
                                <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                                    {teacher.name}
                                </h3>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                                    <BookOpen className="w-3 h-3" />
                                    {teacher.subject}
                                </div>
                                <div className="mt-6 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
