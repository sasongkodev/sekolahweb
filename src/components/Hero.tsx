import React from 'react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#123C69]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImage.src}
                    alt="SMA Insan Cendekia Campus"
                    className="h-full w-full object-cover object-center animate-slow-zoom"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start">
                <div className="max-w-3xl space-y-8 animate-fade-in-up">

                    {/* Badge/Tagline */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Selamat Datang di Website Resmi
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                        SMA Insan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                            Cendekia
                        </span>
                    </h1>

                    {/* H2 Subheading */}
                    <p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl border-l-4 border-blue-500 pl-6">
                        Membentuk Generasi <span className="font-semibold text-white">Berilmu</span>,{' '}
                        <span className="font-semibold text-white">Berkarakter</span>, dan{' '}
                        <span className="font-semibold text-white">Berprestasi</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="/profil"
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                        >
                            <span className="relative z-10">Profil Sekolah</span>
                            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>

                        <a
                            href="/ppdb"
                            className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span>PPDB</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10 w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
