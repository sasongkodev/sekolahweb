import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Bagaimana cara menghubungi pihak sekolah?",
            answer: "Anda dapat menghubungi kami melalui telepon di (021) 123-4567, WhatsApp di 0812-3456-7890, atau mengirim email ke info@insancendekia.sch.id. Kami juga menyediakan formulir kontak di halaman ini yang dapat Anda isi kapan saja."
        },
        {
            question: "Apa jam operasional kantor sekolah?",
            answer: "Kantor sekolah buka pada hari Senin hingga Jumat pukul 07:00 - 16:00 WIB, dan hari Sabtu pukul 07:00 - 12:00 WIB. Untuk kunjungan langsung, kami sarankan untuk membuat janji terlebih dahulu."
        },
        {
            question: "Bagaimana prosedur kunjungan ke sekolah?",
            answer: "Untuk kunjungan ke sekolah, silakan hubungi kami terlebih dahulu untuk membuat janji. Anda dapat menghubungi bagian humas melalui telepon atau WhatsApp. Kami akan dengan senang hati menyambut Anda dan memberikan tur fasilitas sekolah."
        },
        {
            question: "Berapa lama waktu respons untuk pertanyaan melalui email?",
            answer: "Kami berkomitmen untuk merespons setiap email dalam waktu 1x24 jam kerja. Untuk pertanyaan mendesak, kami sarankan untuk menghubungi kami melalui telepon atau WhatsApp untuk respons yang lebih cepat."
        },
        {
            question: "Apakah tersedia layanan informasi online?",
            answer: "Ya, kami menyediakan berbagai layanan informasi online termasuk website resmi, media sosial aktif (Instagram, YouTube, Facebook), dan layanan WhatsApp untuk kemudahan komunikasi Anda dengan pihak sekolah."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-600 mb-6">
                            <HelpCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">FAQ</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Pertanyaan yang <br />
                            <span className="text-blue-600">Sering Ditanyakan</span>
                        </h2>

                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Temukan jawaban untuk pertanyaan umum seputar cara menghubungi
                            dan berkomunikasi dengan pihak sekolah.
                        </p>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold">Masih punya pertanyaan?</h4>
                            </div>
                            <p className="text-blue-100 text-sm mb-4">
                                Tim kami siap membantu menjawab pertanyaan Anda yang belum tercantum di atas.
                            </p>
                            <a
                                href="#contact-form"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                            >
                                Kirim Pertanyaan
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - FAQ Items */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === idx
                                        ? 'bg-white border-blue-200 shadow-lg shadow-blue-100/50'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                    className="w-full p-6 flex items-center justify-between text-left"
                                >
                                    <span className={`font-semibold pr-4 transition-colors ${activeIndex === idx ? 'text-blue-600' : 'text-slate-900'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === idx
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'bg-slate-100 text-slate-400'
                                            }`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="h-px bg-slate-100 mb-4"></div>
                                                <p className="text-slate-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
