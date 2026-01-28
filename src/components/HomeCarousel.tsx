import React, { useState, useEffect } from "react";
// Using the existing hero image for all slides for now, but with different overlays/text
// In a real scenario, we'd import 5 different images
const imagesGlob = import.meta.glob<{ default: ImageMetadata }>('../assets/*.{jpg,jpeg,png,webp}', { eager: true });

// Filter out logo and get image sources
const imageSources = Object.entries(imagesGlob)
    .filter(([path]) => !path.toLowerCase().includes('logo'))
    .map(([, module]) => module.default.src);

const SLIDES = [
    {
        id: 1,
        image: imageSources[0] || imageSources[0], // fallback
        title: "Selamat Datang di",
        highlight: "SMA Insan Cendekia",
        description: "Membentuk Generasi Berilmu, Berkarakter, dan Berprestasi",
        cta: "Profil Sekolah",
        ctaLink: "/profil",
        color: "blue"
    },
    {
        id: 2,
        image: imageSources[1] || imageSources[0],
        title: "Prestasi",
        highlight: "Tingkat Nasional",
        description: "Meraih Medali Emas Olimpiade Sains Nasional 2024",
        cta: "Lihat Prestasi",
        ctaLink: "/kesiswaan/prestasi",
        color: "yellow"
    },
    {
        id: 3,
        image: imageSources[2] || imageSources[0],
        title: "Lingkungan Belajar",
        highlight: "Modern & Nyaman",
        description: "Fasilitas lengkap mendukung pengembangan potensi siswa",
        cta: "Fasilitas",
        ctaLink: "/profil",
        color: "green"
    },
    {
        id: 4,
        image: imageSources[3] || imageSources[0],
        title: "Program Unggulan",
        highlight: "Tahfidz Al-Qur'an",
        description: "Mencetak generasi penghafal Al-Qur'an yang cerdas akademik",
        cta: "Program Unggulan",
        ctaLink: "/akademik/program-unggulan",
        color: "emerald"
    },
    {
        id: 5,
        image: imageSources[4] || imageSources[0],
        title: "Penerimaan Siswa Baru",
        highlight: "Tahun Ajaran 2025/2026",
        description: "Bergabunglah menjadi bagian dari keluarga besar Insan Cendekia",
        cta: "Daftar Sekarang",
        ctaLink: "/ppdb",
        color: "red"
    }
];

const HomeCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#123C69]">
            {/* Slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={slide.image}
                            alt={slide.highlight}
                            className={`h-full w-full object-cover object-center transform transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? "scale-110" : "scale-100"
                                }`}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#123C69]/90 via-[#123C69]/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-start">
                        <div className={`max-w-3xl space-y-6 transform transition-all duration-1000 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-2">
                                {/* Dynamic dot color based on slide */}
                                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${slide.color === "blue" ? "bg-blue-400" :
                                    slide.color === "yellow" ? "bg-yellow-400" :
                                        slide.color === "green" ? "bg-green-400" :
                                            slide.color === "emerald" ? "bg-emerald-400" : "bg-red-400"
                                    }`}></span>
                                {slide.title}
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                {slide.highlight}
                            </h2>

                            <p className="text-xl text-blue-100 font-light max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6">
                                {slide.description}
                            </p>

                            <div className="pt-4">
                                <a
                                    href={slide.ctaLink}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
                                >
                                    {slide.cta}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-white w-10"
                            : "bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Navigation (Hidden on small screens) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all hidden md:block"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all hidden md:block"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
};

export default HomeCarousel;
