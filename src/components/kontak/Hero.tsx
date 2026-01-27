import { motion } from "motion/react";
import { MessageSquare, Phone, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-28 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500 rounded-full blur-[120px] opacity-15"></div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-[100px] opacity-10"></div>
            </div>

            {/* Floating icons */}
            <motion.div
                className="absolute top-20 left-[10%] text-blue-400/20"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <MessageSquare size={80} />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-[15%] text-indigo-400/20"
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Phone size={60} />
            </motion.div>
            <motion.div
                className="absolute top-1/2 right-[5%] text-cyan-400/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Mail size={50} />
            </motion.div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 mb-8">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm font-medium">Kami Siap Membantu Anda</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                            Hubungi Kami
                        </span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Ada pertanyaan? Hubungi kami kapan saja. Tim kami siap memberikan informasi
                        terbaik untuk kebutuhan pendidikan putra-putri Anda.
                    </p>
                </motion.div>

                {/* Quick contact cards */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {[
                        { icon: Phone, label: "Telepon", value: "(021) 123-4567" },
                        { icon: Mail, label: "Email", value: "info@insancendekia.sch.id" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-blue-200">{item.label}</p>
                                <p className="text-sm font-semibold text-white">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 50L48 45.7C96 41.3 192 32.7 288 35.8C384 39 480 54 576 58.3C672 62.7 768 56.3 864 47.5C960 38.7 1056 27.3 1152 27.5C1248 27.7 1344 39.3 1392 45.2L1440 51V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
