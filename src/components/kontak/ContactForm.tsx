import { motion } from "motion/react";
import { Send, User, Mail, MessageSquare, Phone, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate submission
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }, 2000);
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[80px] opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6 border border-blue-100 shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Kirim Pesan</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Sampaikan Pertanyaan <br />
                            <span className="text-blue-600">Anda Kepada Kami</span>
                        </h2>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Kami sangat senang mendengar dari Anda. Silakan isi formulir di samping
                            dengan pertanyaan, saran, atau kritik yang membangun. Tim kami akan
                            merespons dalam waktu 1x24 jam.
                        </p>

                        {/* Response time cards */}
                        <div className="space-y-4">
                            {[
                                { title: "Respons Cepat", desc: "Balasan dalam 1x24 jam kerja", color: "blue" },
                                { title: "Tim Profesional", desc: "Staf terlatih & ramah", color: "indigo" },
                                { title: "Informasi Lengkap", desc: "Jawaban detail & jelas", color: "cyan" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <div className={`w-3 h-3 rounded-full bg-${item.color}-500 shadow-[0_0_10px_2px_rgba(var(--${item.color}-500),0.3)]`}></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-lg">{item.title}</h4>
                                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-10 relative overflow-hidden">

                            {/* Success Overlay */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                    animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                                    className="absolute inset-0 z-20 bg-white/90 flex flex-col items-center justify-center text-center p-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", duration: 0.6 }}
                                        className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100"
                                    >
                                        <CheckCircle className="w-10 h-10" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Pesan Terkirim!</h3>
                                        <p className="text-slate-600 mb-8 max-w-xs mx-auto">Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                                        >
                                            Kirim Pesan Lain
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 ml-1">Nama Lengkap</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Contoh: Budi Santoso"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-slate-700 ml-1">Email</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="nama@email.com"
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-slate-700 ml-1">No. Telepon</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="081234567890"
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 ml-1">Subjek</label>
                                        <div className="relative group">
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none text-slate-600 focus:text-slate-900"
                                                required
                                            >
                                                <option value="">Pilih subjek pesan</option>
                                                <option value="informasi-umum">Informasi Umum</option>
                                                <option value="ppdb">Pendaftaran (PPDB)</option>
                                                <option value="akademik">Akademik</option>
                                                <option value="kesiswaan">Kesiswaan</option>
                                                <option value="kerjasama">Kerjasama</option>
                                                <option value="lainnya">Lainnya</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700 ml-1">Pesan</label>
                                        <div className="relative group">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tuliskan pesan lengkap Anda disini..."
                                                rows={5}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none placeholder:text-slate-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] mt-2 group"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Mengirim...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                <span>Kirim Pesan</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
