import { motion } from "motion/react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const MapSection = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                        <Navigation className="w-4 h-4" />
                        <span className="text-sm font-medium">Lokasi Kami</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Kunjungi Kampus Kami
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Temukan kami di lokasi strategis dengan fasilitas lengkap dan lingkungan yang asri
                    </p>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Info Card Overlay */}
                    <div className="absolute top-6 left-6 z-10 max-w-sm">
                        <motion.div
                            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-100"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shrink-0 shadow-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">SMA Insan Cendekia</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Jl. Pendidikan No. 123, Kel. Cerdas, Kec. Pintar, Kota Pelajar 12345
                                    </p>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Buka di Google Maps
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Embed Google Maps */}
                    <div className="aspect-[16/7] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.82610781541883!3d-6.194741362272809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f403e2e4a1e5%3A0x71d2f8c6d9f52ef8!2sMonas!5e0!3m2!1sen!2sid!4v1637155831820!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[20%] contrast-[1.1]"
                        />
                    </div>
                </motion.div>

                {/* Direction Cards */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {[
                        {
                            title: "Dari Stasiun",
                            desc: "15 menit dengan angkutan umum atau 10 menit dengan taksi",
                            icon: "🚉"
                        },
                        {
                            title: "Dari Bandara",
                            desc: "45 menit melalui tol dalam kota, tersedia parkir luas",
                            icon: "✈️"
                        },
                        {
                            title: "Transportasi Umum",
                            desc: "Dilalui rute bus kota dan angkot jurusan terminal",
                            icon: "🚌"
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="text-4xl bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1 text-lg group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MapSection;
