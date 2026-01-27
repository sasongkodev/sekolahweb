import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

const ContactInfo = () => {
    const contactCards = [
        {
            icon: MapPin,
            title: "Alamat Sekolah",
            content: ["Jl. Pendidikan No. 123", "Kota Cendekia, Jawa Barat 12345"],
            color: "red",
            bgGradient: "from-red-500 to-rose-600"
        },
        {
            icon: Phone,
            title: "Telepon",
            content: ["(021) 123-4567", "0812-3456-7890 (WhatsApp)"],
            color: "blue",
            bgGradient: "from-blue-500 to-cyan-600"
        },
        {
            icon: Mail,
            title: "Email",
            content: ["info@insancendekia.sch.id", "humas@insancendekia.sch.id"],
            color: "indigo",
            bgGradient: "from-indigo-500 to-purple-600"
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            content: ["Senin - Jumat: 07:00 - 16:00", "Sabtu: 07:00 - 12:00"],
            color: "emerald",
            bgGradient: "from-emerald-500 to-teal-600"
        }
    ];

    const socialMedia = [
        { icon: Instagram, label: "Instagram", handle: "@smainsancendekia", href: "#", color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" },
        { icon: Youtube, label: "YouTube", handle: "SMA Insan Cendekia", href: "#", color: "bg-red-600" },
        { icon: Facebook, label: "Facebook", handle: "SMA Insan Cendekia", href: "#", color: "bg-blue-600" },
        { icon: MessageCircle, label: "WhatsApp", handle: "0812-3456-7890", href: "#", color: "bg-emerald-500" },
    ];

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">Informasi Kontak</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Temukan & Hubungi Kami
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Berbagai cara untuk menghubungi kami. Pilih yang paling nyaman untuk Anda.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 border border-slate-100 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Hover gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <card.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                            <div className="space-y-1">
                                {card.content.map((line, i) => (
                                    <p key={i} className="text-slate-600 text-sm">{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Media */}
                <motion.div
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            Ikuti Media Sosial Kami
                        </h3>
                        <p className="text-slate-500">
                            Dapatkan informasi terbaru seputar kegiatan sekolah
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {socialMedia.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group border border-transparent hover:border-slate-100"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                                    <social.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">{social.label}</p>
                                    <p className="font-semibold text-slate-900 text-sm">{social.handle}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfo;
