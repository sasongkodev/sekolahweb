import React from "react";

interface Post {
    slug: string;
    data: {
        title: string;
        pubDate: Date;
        image?: string;
        author?: string;
        tags?: string[];
    };
    body?: string; // Optional since we might just use frontmatter
}

interface HomeBeritaProps {
    posts: Post[];
}

const HomeBerita: React.FC<HomeBeritaProps> = ({ posts }) => {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#123C69] text-sm font-semibold tracking-wide uppercase mb-4">
                            Berita & Kegiatan
                        </span>
                        <h2 className="text-4xl font-bold text-[#123C69] leading-tight">
                            Kabar Terbaru Sekolah
                        </h2>
                        <p className="text-slate-600 mt-4 text-lg">
                            Ikuti perkembangan terkini, prestasi siswa, dan agenda kegiatan di SMA Insan Cendekia.
                        </p>
                    </div>
                    <a
                        href="/berita"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-[#123C69] font-semibold rounded-full hover:bg-[#123C69] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        Lihat Semua Berita
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/berita/${post.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#123C69]/0 group-hover:bg-[#123C69]/10 transition-colors z-10 transition-duration-300"></div>
                                {post.data.image ? (
                                    <img
                                        src={post.data.image}
                                        alt={post.data.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}

                                {/* Date Badge */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm z-20 text-xs font-bold text-[#123C69] uppercase tracking-wider">
                                    {new Date(post.data.pubDate).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    {post.data.tags && post.data.tags.length > 0 && (
                                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                                            {post.data.tags[0]}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                                    {post.data.title}
                                </h3>
                                {/* Simple text truncation if we had description, but title + image is often enough for cards. 
                                    We can assume the user wants a clean look. */}
                                <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-medium text-slate-500">
                                            {post.data.author || "Admin"}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                        Baca
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBerita;
