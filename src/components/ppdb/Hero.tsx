import { motion } from "motion/react";
import { ArrowRight, Download, GraduationCap } from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-1 bg-white rotate-45"></div>
                <div className="absolute bottom-10 right-10 w-64 h-1 bg-white -rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm font-medium">Tahun Ajaran 2024/2025</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Penerimaan Peserta<br /> Didik Baru (PPDB)
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Bergabunglah bersama kami untuk mewujudkan generasi yang cerdas, berkarakter, dan berprestasi. Daftarkan putra-putri Anda sekarang.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center justify-center gap-2 group">
                            Daftar Sekarang
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700">
                            <Download className="w-4 h-4" />
                            Unduh Brosur
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
