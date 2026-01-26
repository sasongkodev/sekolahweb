import { motion } from "motion/react";
import { ClipboardList, UserCheck, FileText, School } from "lucide-react";

const steps = [
    {
        icon: ClipboardList,
        title: "Pengisian Formulir",
        desc: "Calon siswa mengisi formulir pendaftaran secara online atau datang langsung ke sekolah."
    },
    {
        icon: FileText,
        title: "Verifikasi Berkas",
        desc: "Menyerahkan berkas persyaratan ke panitia PPDB untuk diverifikasi kelengkapannya."
    },
    {
        icon: UserCheck,
        title: "Seleksi & Wawancara",
        desc: "Mengikuti tes seleksi akademik dan wawancara bersama orang tua/wali."
    },
    {
        icon: School,
        title: "Daftar Ulang",
        desc: "Bagi yang dinyatakan diterima, wajib melakukan daftar ulang sesuai jadwal."
    }
];

const Flow = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
                    >
                        Alur Pendaftaran
                    </motion.h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ikuti tahapan berikut untuk menjadi bagian dari keluarga besar kami.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 md:border-none md:bg-transparent text-center md:text-left group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                                    <step.icon className="w-8 h-8" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;
