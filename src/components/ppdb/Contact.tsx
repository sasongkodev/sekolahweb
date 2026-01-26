import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">

                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Bantuan?</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Tim panitia PPDB kami siap membantu menjawab pertanyaan Anda seputar pendaftaran, biaya, dan program sekolah.
                            </p>

                            <div className="space-y-4">
                                <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                                    <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-200">Telepon Kantor</p>
                                        <p className="font-semibold">(021) 1234-5678</p>
                                    </div>
                                </a>

                                <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-200">WhatsApp Admin</p>
                                        <p className="font-semibold">0812-3456-7890</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold mb-6">Lokasi Kampus</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium text-slate-900">Kampus Utama</p>
                                        <p className="text-slate-500 text-sm mt-1">Jl. Pendidikan No. 123, Kel. Cerdas, Kec. Pintar, Kota Pelajar, 12345</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium text-slate-900">Email Panitia</p>
                                        <p className="text-slate-500 text-sm mt-1">ppdb@sekolahhebat.sch.id</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors">
                                    Lihat di Google Maps
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
