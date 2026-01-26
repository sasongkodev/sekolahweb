import { motion } from "motion/react";
import {
    ShieldCheck,
    Clock,
    UserCheck,
    Trash2,
    Ban,
    AlertTriangle,
    CheckCircle2,
    FileBadge
} from "lucide-react";

const rules = [
    {
        icon: Clock,
        title: "Kehadiran & Waktu",
        desc: "Siswa wajib hadir di sekolah sebelum pukul 07.00 WIB. Keterlambatan lebih dari 15 menit wajib melapor ke guru piket.",
        color: "text-blue-600 bg-blue-50 mb-4"
    },
    {
        icon: UserCheck,
        title: "Seragam & Penampilan",
        desc: "Wajib mengenakan seragam sesuai jadwal, rapi, dan sopan. Rambut putra pendek rapi (tidak gondrong/diwarnai).",
        color: "text-emerald-600 bg-emerald-50 mb-4"
    },
    {
        icon: ShieldCheck,
        title: "Etika & Perilaku",
        desc: "Menjunjung tinggi sopan santun kepada guru, karyawan, dan sesama siswa. Dilarang melakukan perundungan (bullying).",
        color: "text-indigo-600 bg-indigo-50 mb-4"
    },
    {
        icon: Trash2,
        title: "Kebersihan & Fasilitas",
        desc: "Wajib menjaga kebersihan kelas dan lingkungan sekolah. Dilarang merusak fasilitas sekolah (vandalisme).",
        color: "text-amber-600 bg-amber-50 mb-4"
    },
    {
        icon: Ban,
        title: "Larangan Keras",
        desc: "Dilarang keras membawa senjata tajam, narkoba, rokok, dan konten pornografi. Sanksi: dikeluarkan dari sekolah.",
        color: "text-red-600 bg-red-50 mb-4"
    },
];

const TataTertib = () => {
    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                {/* Abstract lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-1 bg-white rotate-45"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-1 bg-white -rotate-12"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <FileBadge className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tata Tertib Sekolah</h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Pedoman perilaku untuk menciptakan lingkungan belajar yang kondusif, aman, dan berkarakter.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Rules Grid */}
            <section className="container mx-auto px-6 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {rules.map((rule, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border-t-4 border-transparent hover:border-blue-500 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${rule.color} group-hover:scale-110 transition-transform`}>
                                <rule.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{rule.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {rule.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sanksi / Warning */}
            <section className="container mx-auto px-6 pb-24">
                <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-8 h-8 text-red-600 animate-pulse" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-red-800 mb-2">Penting untuk Diperhatikan</h3>
                        <p className="text-red-700/80 leading-relaxed">
                            Setiap pelanggaran tata tertib akan dicatat dalam buku saku siswa dan menjumlahkan poin pelanggaran. Akumulasi poin tertentu akan mendapatkan sanksi bertingkat mulai dari teguran lisan, tertulis, skorsing, hingga dikembalikan kepada orang tua.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TataTertib;
