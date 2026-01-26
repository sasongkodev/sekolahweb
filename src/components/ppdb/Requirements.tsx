import { motion } from "motion/react";
import { CheckCircle2, FileText, User } from "lucide-react";

const requirements = [
    {
        category: "Dokumen Administrasi",
        icon: FileText,
        items: [
            "Fotokopi Akta Kelahiran (3 lembar)",
            "Fotokopi Kartu Keluarga (3 lembar)",
            "Fotokopi KTP Orang Tua/Wali (3 lembar)",
            "Pas foto 3x4 berwarna (4 lembar)",
            "Fotokopi Ijazah/SKL yang dilegalisir"
        ]
    },
    {
        category: "Syarat Awal",
        icon: User,
        items: [
            "Berusia maksimal 21 tahun",
            "Sehat jasmani dan rohani",
            "Tidak bertato dan tidak bertindik (bagi putra)",
            "Bersedia menaati tata tertib sekolah",
            "Lulus seleksi administrasi"
        ]
    }
];

const Requirements = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
                    >
                        Syarat Pendaftaran
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto"
                    >
                        Berikut adalah persyaratan yang harus dipenuhi oleh calon peserta didik baru.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {requirements.map((req, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <req.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{req.category}</h3>
                            </div>
                            <ul className="space-y-4">
                                {req.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Requirements;
