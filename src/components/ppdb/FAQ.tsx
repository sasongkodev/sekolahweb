import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Kapan pendaftaran dibuka?",
        answer: "Pendaftaran Gelombang 1 dibuka mulai 1 Januari - 31 Maret 2024. Gelombang 2 dibuka jika kuota masih tersedia."
    },
    {
        question: "Berapa biaya pendaftarannya?",
        answer: "Biaya formulir pendaftaran sebesar Rp 150.000 (seratus lima puluh ribu rupiah). Dapat dibayarkan tunai atau transfer."
    },
    {
        question: "Apakah ada beasiswa untuk siswa berprestasi?",
        answer: "Ya, kami menyediakan beasiswa potongan uang gedung hingga 100% bagi siswa yang memiliki prestasi akademik maupun non-akademik tingkat kota/provinsi/nasional."
    },
    {
        question: "Bagaimana jika saya berasal dari luar kota?",
        answer: "Kami menerima siswa dari luar kota. Kami juga dapat memberikan rekomendasi tempat tinggal (kos/asrama) terdekat yang aman dan nyaman."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6"
                    >
                        <HelpCircle className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Pertanyaan Umum
                    </h2>
                    <p className="text-slate-600">
                        Jawaban untuk pertanyaan yang sering diajukan oleh calon wali murid.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-800 text-lg pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
