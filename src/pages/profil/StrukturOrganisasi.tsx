import { motion } from "motion/react";
import { User, Users, GraduationCap, Building2, BookOpen, Trophy } from "lucide-react";

// Types for our organization nodes
interface OrgNode {
    id: string;
    name: string;
    role: string;
    icon: any;
    color: string;
    children?: OrgNode[];
}

// Component helper for Activity icon which might be missing in some lucide imports or distinct
const Activity = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);

const ORG_DATA: OrgNode = {
    id: "kepsek",
    name: "Drs. Ahmad Fauzi, M.Pd",
    role: "Kepala Sekolah",
    icon: GraduationCap,
    color: "bg-blue-600",
    children: [
        {
            id: "komite",
            name: "H. Budi Santoso",
            role: "Ketua Komite",
            icon: Users,
            color: "bg-emerald-600"
        },
        {
            id: "tata-usaha",
            name: "Siti Aminah, S.E",
            role: "Kepala Tata Usaha",
            icon: Building2,
            color: "bg-amber-600",
            children: [
                {
                    id: "staff-tu",
                    name: "Staff Administrasi",
                    role: "Staff TU",
                    icon: Users,
                    color: "bg-amber-500"
                }
            ]
        },
        {
            id: "waka-kurikulum",
            name: "Dr. Rina Damayanti",
            role: "Waka Kurikulum",
            icon: BookOpen,
            color: "bg-indigo-600",
            children: [
                {
                    id: "koor-mp",
                    name: "Para Guru Mapel",
                    role: "Koordinator Mata Pelajaran",
                    icon: Users,
                    color: "bg-indigo-500"
                }
            ]
        },
        {
            id: "waka-kesiswaan",
            name: "Bambang Wijaya, S.Pd",
            role: "Waka Kesiswaan",
            icon: Trophy,
            color: "bg-rose-600",
            children: [
                {
                    id: "pembina-osis",
                    name: "Dewi Sartika, S.Pd",
                    role: "Pembina OSIS",
                    icon: Users,
                    color: "bg-rose-500"
                },
                {
                    id: "koor-ekskul",
                    name: "Koordinator Ekskul",
                    role: "Koordinator Ekstrakurikuler",
                    icon: Activity,
                    color: "bg-rose-500"
                }
            ]
        }
    ]
};




const OrgCard = ({ node, isRoot = false }: { node: OrgNode; isRoot?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`
                relative flex flex-col items-center bg-white rounded-2xl p-6 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                transition-shadow duration-300 border border-slate-100
                min-w-[200px] max-w-[260px] mx-auto z-10
                ${isRoot ? "border-blue-200 ring-4 ring-blue-50/50" : ""}
            `}
        >
            <div className={`
                w-16 h-16 rounded-2xl ${node.color} flex items-center justify-center 
                shadow-lg shadow-blue-900/10 mb-4 transform -rotate-3 group-hover:rotate-0 transition-transform
            `}>
                <node.icon className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-slate-800 text-center mb-1">{node.name}</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center bg-slate-50 px-3 py-1 rounded-full">
                {node.role}
            </p>
        </motion.div>
    );
};

const TreeBranch = ({ children }: { children: React.ReactNode }) => (
    <div className="flex justify-center gap-8 pt-12 relative">
        {/* Vertical line from parent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-200"></div>
        {/* Horizontal connector line */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-slate-200 mx-auto w-[calc(100%-4rem)] rounded-full"></div>
        {children}
    </div>
);

const TreeNode = ({ node }: { node: OrgNode }) => {
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="flex flex-col items-center">
            <OrgCard node={node} />
            {hasChildren && (
                <div className="relative pt-12 w-full flex justify-center">
                    {/* Vertical Line from Node to Horizontal Bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-200"></div>

                    {/* Children Container */}
                    <div className="flex gap-8 md:gap-12 relative">
                        {/* Horizontal Bar connecting children */}
                        {node.children!.length > 1 && (
                            <div className="absolute top-0 left-[100px] right-[100px] h-0.5 bg-slate-200"></div>
                        )}

                        {node.children!.map((child, index) => (
                            <div key={child.id} className="relative flex flex-col items-center">
                                {/* Vertical Line to Child Top */}
                                {/* Only draw if there are multiple children or specific layout logic, 
                                     but simpler: just draw vertical line up from each child */}
                                {node.children!.length > 1 && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-200"></div>
                                )}

                                <TreeNode node={child} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// Simplified Recursive Renderer for Desktop Loop 
// Note: Building a perfect CSS-only tree with lines is complex. 
// A simpler robust approach for the "connecting lines" is needed.
// Let's use a cleaner Grid approach for the tree visualization.

export default function StrukturOrganisasi() {
    return (
        <main className="bg-slate-50 min-h-screen pb-20 overflow-x-hidden">
            {/* Header */}
            <div className="bg-[#123C69] pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Struktur Organisasi</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                            Mengenal lebih dekat jajaran pimpinan dan pengelola yang berdedikasi memajukan pendidikan di SMA Insan Cendekia.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Tree Container */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                {/* Mobile View: Stacked */}
                <div className="lg:hidden flex flex-col gap-6">
                    <OrgCard node={ORG_DATA} isRoot />
                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-200 ml-8 py-4">
                        {ORG_DATA.children?.map((child) => (
                            <div key={child.id} className="space-y-4">
                                <OrgCard node={child} />
                                {child.children && (
                                    <div className="pl-4 border-l-2 border-slate-200 ml-8 py-4 space-y-4">
                                        {child.children.map(grandChild => (
                                            <OrgCard key={grandChild.id} node={grandChild} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop View: Tree */}
                <div className="hidden lg:flex flex-col items-center w-full overflow-x-auto pb-12">
                    {/* Level 1: Root */}
                    <div className="relative z-10">
                        <OrgCard node={ORG_DATA} isRoot />
                        <div className="h-16 w-0.5 bg-slate-300 mx-auto"></div>
                    </div>

                    {/* Level 2: Children */}
                    <div className="relative flex justify-center gap-16">
                        {/* Connector Bar */}
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-[calc(100%-300px)] h-0.5 bg-slate-300"></div>

                        {ORG_DATA.children?.map((child, index) => (
                            <div key={child.id} className="flex flex-col items-center relative">
                                {/* Vertical Connector from bar */}
                                <div className="h-16 w-0.5 bg-slate-300 absolute -top-16 left-1/2 -translate-x-1/2"></div>

                                <OrgCard node={child} />

                                {/* Level 3: Grandchildren */}
                                {child.children && child.children.length > 0 && (
                                    <>
                                        <div className="h-12 w-0.5 bg-slate-300 mx-auto"></div>
                                        <div className="flex flex-col gap-8">
                                            {child.children.map((grandChild) => (
                                                <OrgCard key={grandChild.id} node={grandChild} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Komite Sekolah", desc: "Mitra strategis dalam pengembangan mutu pendidikan dan sarana prasarana sekolah.", icon: Users },
                        { title: "Tenaga Pendidik", desc: "Guru profesional yang bersertifikasi dan berdedikasi tinggi dalam mengajar.", icon: GraduationCap },
                        { title: "Staff Administrasi", desc: "Pengelola layanan administrasi yang responsif dan akuntabel.", icon: Building2 }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-100 group transition-colors">
                            <item.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
