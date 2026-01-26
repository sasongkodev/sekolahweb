import React from 'react';
import heroImage from '../../assets/hero.jpg';

const ProfilSekolah = () => {
    return (
        <main className="bg-white font-sans text-slate-800">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage.src}
                        alt="Profil SMA Insan Cendekia"
                        className="w-full h-full object-cover animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#123C69]/90 to-[#123C69]/70" />
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-4 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wider uppercase mb-2">
                        Tentang Kami
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Profil Sekolah
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-blue-100 text-lg md:text-xl font-light leading-relaxed">
                        Membangun generasi unggul melalui pendidikan berkualitas,
                        berkarakter, dan berlandaskan nilai moral.
                    </p>
                </div>
            </section>

            {/* Tentang Sekolah - Clean Layout with Drop Cap */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold text-[#123C69] relative inline-block">
                                    Sekapur Sirih
                                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    <span className="text-5xl float-left mr-3 mt-[-6px] font-serif text-blue-500 font-bold">S</span>
                                    MA Insan Cendekia adalah lembaga pendidikan menengah atas yang
                                    berkomitmen untuk mencetak peserta didik berprestasi secara akademik
                                    serta memiliki karakter yang kuat dan berintegritas. Kami percaya
                                    bahwa pendidikan bukan hanya tentang transfer ilmu, tetapi juga
                                    tentang pembibitan akhlak mulia.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Sekolah ini mengedepankan keseimbangan antara penguasaan ilmu
                                    pengetahuan, pembentukan sikap, serta pengembangan potensi dan
                                    bakat siswa melalui kurikulum terintegrasi.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-[#123C69] p-1 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-all duration-500">
                                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center flex-col p-6 text-center">
                                        <div className="text-5xl font-bold text-[#123C69] mb-2">20+</div>
                                        <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Tahun Mengabdi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi - Split Layout */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Visi */}
                        <div className="space-y-6 sticky top-24">
                            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-wide uppercase">
                                <span className="w-8 h-[2px] bg-blue-600"></span>
                                Visi Kami
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#123C69] leading-tight">
                                Menjadi Sekolah <br />
                                <span className="text-blue-500">Rujukan Utama</span> <br />
                                Dalam Membentuk Generasi Emas.
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                "Menjadi sekolah menengah atas unggulan yang menghasilkan lulusan
                                berprestasi, berkarakter, berdaya saing global, serta berlandaskan
                                nilai moral dan kebangsaan."
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10 space-y-8">
                            <h3 className="text-2xl font-bold text-[#123C69] flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </span>
                                Misi Sekolah
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Menyelenggarakan pendidikan berkualitas berbasis kurikulum nasional dan pengembangan karakter.",
                                    "Mendorong prestasi akademik dan non-akademik secara berkelanjutan.",
                                    "Mengembangkan potensi siswa melalui kegiatan intra dan ekstrakurikuler.",
                                    "Menanamkan nilai disiplin, tanggung jawab, dan kepedulian sosial dalam kehidupan sehari-hari."
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-4 group">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center mt-0.5 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nilai Unggulan - Interactive Cards */}
            <section className="py-24 bg-[#123C69] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Nilai Unggulan
                        </h3>
                        <p className="text-blue-100/80 text-lg">
                            Fondasi utama dalam setiap langkah pendidikan dan pembinaan siswa di SMA Insan Cendekia.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Card 1 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 20 7.5 20s3.332-.477 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 20 16.5 20a4.5 4.5 0 01-1.5-.253m0 0l-4.5 1.5m-4.5-1.5L12 20" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-[#123C69] mb-3 group-hover:text-blue-600 transition-colors">
                                Akademik Unggul
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Fokus pada pencapaian akademik tertinggi melalui metode pembelajaran yang efektif, terukur, dan adaptif terhadap perkembangan teknologi.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-bl-full -mr-10 -mt-10 group-hover:bg-yellow-400/20 transition-colors"></div>
                            <div className="w-14 h-14 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-[#123C69] mb-3 group-hover:text-blue-600 transition-colors">
                                Karakter & Moral
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Menanamkan nilai-nilai etika, disiplin, kejujuran, dan tanggung jawab sebagai fondasi utama dalam pembentukan kepribadian siswa.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-[#123C69] mb-3 group-hover:text-blue-600 transition-colors">
                                Pengembangan Potensi
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Memberikan ruang seluas-luasnya bagi siswa untuk mengeksplorasi dan mengembangkan minat serta bakat mereka dalam berbagai bidang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sejarah Section */}
            <section className="py-20 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Perjalanan Kami</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#123C69] mt-2">
                            Sejarah Sekolah
                        </h3>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="border-l-2 border-blue-200 ml-4 md:ml-6 space-y-12">
                            {[
                                { year: "1994", title: "Gagasan Awal", desc: "Pendirian sekolah digagas oleh Bapak. B.J. Habibie melalui BPPT." },
                                { year: "1996", title: "Resmi Berdiri", desc: "SMA Insan Cendekia mulai beroperasi dan menerima angkatan pertama." },
                                { year: "2000", title: "Pelimpahan ke Kemenag", desc: "Pengelolaan sekolah dialihkan ke Kementerian Agama RI, menjadi MAN Insan Cendekia." },
                                { year: "2015", title: "Ekspansi Nasional", desc: "Model pendidikan Insan Cendekia direplikasi ke berbagai provinsi di Indonesia." },
                                { year: "2024", title: "Go International", desc: "Meraih berbagai medali emas dalam olimpiade sains tingkat internasional." }
                            ].map((item, i) => (
                                <div key={i} className="relative pl-8 md:pl-12 group">
                                    <div className="absolute -left-[5px] top-1 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-50 group-hover:scale-125 transition-transform duration-300"></div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                                        <span className="text-blue-600 font-bold text-lg block mb-1">{item.year}</span>
                                        <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProfilSekolah;
