import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, ArrowRight, Tag, Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";

interface BeritaProps {
    posts: {
        slug: string;
        data: {
            title: string;
            description: string;
            pubDate: Date;
            author: string;
            image?: string;
            tags?: string[];
        };
    }[];
}

const Berita = ({ posts }: BeritaProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("Semua");

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(post => post.data.tags?.forEach(tag => tags.add(tag)));
        return ["Semua", ...Array.from(tags)];
    }, [posts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchSearch = post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.data.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchTag = selectedTag === "Semua" || post.data.tags?.includes(selectedTag);
            return matchSearch && matchTag;
        });
    }, [posts, searchQuery, selectedTag]);

    const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const regularPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
                            Kabar Terkini
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 tracking-tight">
                            Jendela Informasi Sekolah
                        </h1>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Cari berita, artikel, atau pengumuman..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-4 pl-12 pr-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-indigo-300/70 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-lg"
                            />
                        </div>

                        {/* Tags Filter */}
                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedTag === tag
                                            ? "bg-white text-blue-900 shadow-md"
                                            : "bg-white/10 text-blue-100 hover:bg-white/20"
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-6 py-16 -mt-8 relative z-20">
                <AnimatePresence>
                    {filteredPosts.length > 0 ? (
                        <>
                            {/* Featured Post (Only show if filtering "Semua" or if search yields results) */}
                            {featuredPost && (
                                <motion.a
                                    href={`/berita/${featuredPost.slug}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="block mb-12 group"
                                >
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 md:grid md:grid-cols-2 hover:shadow-2xl transition-all duration-500">
                                        <div className="h-64 md:h-full bg-slate-200 relative overflow-hidden">
                                            {featuredPost.data.image && (
                                                <img
                                                    src={featuredPost.data.image}
                                                    alt={featuredPost.data.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            )}
                                            <div className="absolute top-6 left-6">
                                                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                                                    Featured
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(featuredPost.data.pubDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </span>
                                                {featuredPost.data.tags?.[0] && (
                                                    <span className="flex items-center gap-1.5 text-blue-600 font-medium">
                                                        <Tag className="w-3.5 h-3.5" />
                                                        {featuredPost.data.tags[0]}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                                {featuredPost.data.title}
                                            </h2>
                                            <p className="text-slate-600 text-lg leading-relaxed mb-8 line-clamp-3">
                                                {featuredPost.data.description}
                                            </p>
                                            <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                                                Baca Artikel Lengkap <ArrowRight className="w-5 h-5 ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            )}

                            {/* Regular Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {regularPosts.map((post, index) => (
                                    <motion.a
                                        key={post.slug}
                                        href={`/berita/${post.slug}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1"
                                    >
                                        <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                                            {post.data.image && (
                                                <img
                                                    src={post.data.image}
                                                    alt={post.data.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.data.pubDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                </span>
                                                {post.data.tags?.[0] && (
                                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md font-medium">
                                                        {post.data.tags[0]}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {post.data.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                                                {post.data.description}
                                            </p>
                                            <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                                <span className="text-xs font-semibold text-slate-400">By {post.data.author}</span>
                                                <ArrowRight className="w-4 h-4 text-blue-600 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Tidak ditemukan</h3>
                            <p className="text-slate-500">Coba kata kunci lain atau ubah filter kategori.</p>
                        </div>
                    )}
                </AnimatePresence>
            </section>
        </main>
    );
};

export default Berita;
