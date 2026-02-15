import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Zap, ShieldCheck, MonitorPlay } from 'lucide-react';

interface SlideTechStrategyProps {
    t: any;
}

const SlideTechStrategy: React.FC<SlideTechStrategyProps> = ({ t }) => {
    return (
        <motion.div
            key="tech-strategy"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tighter leading-tight py-2">{t.techTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-20 md:pb-0">
                    {[
                        { title: "React 18", desc: t.whyReact, icon: <Languages />, color: "blue" },
                        { title: "Vite", desc: t.whyVite, icon: <Zap />, color: "yellow" },
                        { title: "TypeScript", desc: t.whyTS, icon: <ShieldCheck />, color: "indigo" },
                        { title: "Material UI", desc: t.whyMUI, icon: <MonitorPlay />, color: "purple" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/20 transition group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-xl bg-white/5 text-purple-400 group-hover:scale-110 transition`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SlideTechStrategy;
