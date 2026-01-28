import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, X } from "lucide-react";

// Dummy Data
const categories = ["Semua", "Kegiatan", "Fasilitas", "Prestasi", "Ekstrakurikuler"];

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
        title: "Upacara Bendera",
        category: "Kegiatan",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
        title: "Laboratorium Komputer",
        category: "Fasilitas",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop",
        title: "Juara Olimpiade Matematika",
        category: "Prestasi",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
        title: "Kegiatan Pramuka",
        category: "Ekstrakurikuler",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop",
        title: "Perpustakaan Sekolah",
        category: "Fasilitas",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
        title: "Pentas Seni",
        category: "Kegiatan",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop",
        title: "Tim Basket",
        category: "Ekstrakurikuler",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1427504743055-b72976e3d71d?q=80&w=1000&auto=format&fit=crop",
        title: "Suasana Kelas",
        category: "Fasilitas",
    },
];


const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = selectedCategory === "Semua"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <section className="py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-slate-900 mb-4"
                    >
                        Galeri Sekolah
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-2xl mx-auto"
                    >
                        Melihat lebih dekat aktivitas, fasilitas, dan prestasi siswa SMA Insan Cendekia.
                    </motion.p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                : "bg-white text-slate-600 hover:bg-blue-50"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedImage(image)}
                                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-[4/3]"
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-blue-300 text-xs font-medium bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit mb-2 border border-blue-500/30">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                    <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox / Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                                className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain max-h-[85vh] bg-black"
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                                    <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
                                    <p className="text-gray-300">{selectedImage.category}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
