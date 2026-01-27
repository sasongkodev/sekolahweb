import React from 'react';

const HomeAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full opacity-50 -z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-50 rounded-tr-full opacity-50 -z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image/Visual Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                            <div className="relative bg-white p-2 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                                <div className="aspect-[4/3] bg-gradient-to-br from-[#123C69] to-blue-800 rounded-xl overflow-hidden flex items-center justify-center text-white">
                                    {/* Placeholder for actual school image */}
                                    <div className="text-center p-8">
                                        <h3 className="text-3xl font-bold mb-2">SMA Insan Cendekia</h3>
                                        <p className="text-blue-200">School of Leaders</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs transform hover:scale-105 transition-transform cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 20 7.5 20s3.332-.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 20 16.5 20a4.5 4.5 0 01-1.5-.253m0 0l-4.5 1.5m-4.5-1.5L12 20" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-bold text-[#123C69]">A+</span>
                                        <span className="text-sm text-slate-500 font-medium">Akreditasi Unggul</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
                                Tentang Sekolah
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#123C69] leading-tight mb-6">
                                Membangun Masa Depan Gemilang
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                SMA Insan Cendekia hadir sebagai lembaga pendidikan yang mengintegrasikan kurikulum nasional dengan nilai-nilai keislaman dan pembentukan karakter kepemimpinan.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Kami berkomitmen mencetak generasi yang tidak hanya cerdas secara intelektual, tetapi juga memiliki kematangan emosional dan spiritual yang kuat untuk menghadapi tantangan global.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-[#123C69] mb-2 text-lg">Kurikulum Terpadu</h4>
                                <p className="text-sm text-slate-600">Integrasi sains, teknologi, dan nilai agama.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-[#123C69] mb-2 text-lg">Guru Profesional</h4>
                                <p className="text-sm text-slate-600">Pendidik berpengalaman dan bersertifikasi.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="/profil"
                                className="inline-flex items-center text-[#123C69] font-bold hover:text-blue-600 transition-colors group"
                            >
                                Selengkapnya tentang kami
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
