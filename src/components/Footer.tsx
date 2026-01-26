import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0B2545] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 opacity-50"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1e4b8a] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1e4b8a] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* School Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/src/assets/logo.png"
                                alt="Logo SMA Insan Cendekia"
                                className="w-12 h-12 object-contain brightness-0 invert"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                                    SMA Insan Cendekia
                                </span>
                                <span className="text-[10px] font-medium tracking-wider text-blue-200 uppercase opacity-90">
                                    Beriman & Berilmu
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            Mewujudkan generasi unggul yang beriman, berilmu, dan berakhlak mulia. Berkomitmen mencetak pemimpin masa depan yang kompeten dan berintegritas.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "#" },
                                { Icon: Youtube, href: "#" },
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 text-blue-200 hover:text-white"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">
                            Profil Sekolah
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Visi & Misi", href: "/profil#visi-misi" },
                                { label: "Sejarah", href: "/profil#sejarah" },
                                { label: "Struktur Organisasi", href: "/profil/struktur" },
                                { label: "Tenaga Pendidik", href: "/profil/guru" },
                                { label: "Akreditasi", href: "/profil/akreditasi" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">
                            Informasi & Layanan
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: "PPDB Online", href: "/ppdb" },
                                { label: "Pengumuman", href: "/berita" },
                                { label: "Agenda Sekolah", href: "/akademik/akademik-jadwal" },
                                { label: "E-Perpustakaan", href: "/perpustakaan" },
                                { label: "Alumni", href: "/alumni" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-slate-300 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors shrink-0">
                                    <MapPin size={18} className="text-blue-300" />
                                </div>
                                <span>
                                    Jl. Pendidikan No. 123, Kota Cendekia,
                                    <br />Provinsi Jawa Barat, 12345
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors shrink-0">
                                    <Phone size={18} className="text-blue-300" />
                                </div>
                                <span>(021) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors shrink-0">
                                    <Mail size={18} className="text-blue-300" />
                                </div>
                                <span>info@imsancendekia.sch.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© {new Date().getFullYear()} SMA Insan Cendekia. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
