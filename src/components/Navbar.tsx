import { useState, useEffect } from "react";

interface NavItem {
    label: string;
    path?: string;
    children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
    { label: "Beranda", path: "/" },
    {
        label: "Profil Sekolah",
        path: "/profil",
        children: [
            { label: "Visi & Misi", path: "/profil#visi-misi" },
            { label: "Tujuan Pendidikan", path: "/profil#tujuan" },
            { label: "Struktur Organisasi", path: "/profil/struktur" },
            { label: "Kepala Sekolah & Guru", path: "/profil/guru" },
        ],
    },
    {
        label: "Akademik",
        children: [
            { label: "Kurikulum", path: "/akademik/kurikulum" },
            { label: "Program Unggulan", path: "/akademik/program-unggulan" },
            { label: "Mata Pelajaran", path: "/akademik/mata-pelajaran" },
            { label: "Jadwal Akademik", path: "/akademik/akademik-jadwal" },
        ],
    },
    {
        label: "Kesiswaan",
        children: [
            { label: "OSIS", path: "/kesiswaan/osis" },
            { label: "Ekstrakurikuler", path: "/kesiswaan/ekstrakurikuler" },
            { label: "Tata Tertib", path: "/kesiswaan/tata-tertib" },
            { label: "Prestasi Siswa", path: "/kesiswaan/prestasi" },
        ],
    },
    { label: "Berita & Kegiatan", path: "/berita" },
    { label: "Galeri", path: "/galeri" },
    { label: "PPDB", path: "/ppdb" },
    { label: "Kontak", path: "/kontak" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#123C69] shadow-lg text-white"
                : "bg-[#123C69] text-white"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-10 h-10 object-contain drop-shadow-sm"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-white leading-tight">
                                SMA Insan Cendekia
                            </span>
                            <span className="text-[10px] font-medium tracking-wider text-blue-100 uppercase opacity-90">
                                Beriman & Berilmu
                            </span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.children ? (
                                    <>
                                        <div className="flex items-center">
                                            <a
                                                href={item.path || "#"}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1
                                                ${scrolled ? "hover:bg-white/10 text-white" : "hover:bg-white/10 text-white"}`}
                                            >
                                                {item.label}
                                            </a>
                                            <button
                                                className="p-1 -ml-2 text-white hover:bg-white/10 rounded-full"
                                                onClick={(e) => { e.preventDefault(); /* just toggle dropdown if clicked arrow? Actually hover handles it */ }}
                                            >
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div
                                            className={`absolute left-0 top-full pt-2 w-64 transform transition-all duration-200 origin-top-left
                                            ${activeDropdown === item.label ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                                        >
                                            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.path}
                                                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#123C69] hover:bg-blue-50 transition-colors"
                                                    >
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href={item.path}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                        ${scrolled ? "hover:bg-white/10 text-white" : "hover:bg-white/10 text-white"}`}
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}
                        <a href="/login" className={`ml-4 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg
                            ${scrolled ? "bg-white text-[#123C69] hover:bg-gray-100" : "bg-white text-[#123C69] hover:bg-blue-50"}`}>
                            Portal Siswa
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 rounded-full transition-all duration-300 bg-white ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 rounded-full transition-all duration-300 bg-white ${mobileOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 rounded-full transition-all duration-300 bg-white ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu Content */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="font-bold text-xl text-[#123C69]">Menu</div>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 text-slate-400 hover:text-slate-600"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-1">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="border-b border-slate-100 last:border-0">
                                {item.children ? (
                                    <>
                                        <div className="flex items-center justify-between py-3">
                                            <a
                                                href={item.path || '#'}
                                                className="font-medium text-slate-700 hover:text-[#123C69] flex-grow"
                                                onClick={() => !item.children && setMobileOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                            <button
                                                onClick={() => toggleDropdown(item.label)}
                                                className="p-2 text-slate-400"
                                            >
                                                <svg
                                                    className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180 text-[#123C69]' : ''}`}
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="flex flex-col pl-4 space-y-1 bg-slate-50 rounded-lg p-2">
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.path}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block px-4 py-2 text-sm text-slate-600 hover:text-[#123C69] rounded-md hover:bg-white"
                                                    >
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href={item.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-3 font-medium text-slate-700 hover:text-[#123C69]"
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}
                        <a href="/login" className="mt-6 block w-full py-3 text-center bg-[#123C69] text-white rounded-lg font-semibold shadow hover:bg-[#0e2e52] transition-colors">
                            Portal Siswa
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
