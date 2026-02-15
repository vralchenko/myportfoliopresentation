import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Volume2, Languages } from 'lucide-react';

interface SlideCapabilitiesProps {
    t: any;
}

const SlideCapabilities: React.FC<SlideCapabilitiesProps> = ({ t }) => {
    return (
        <motion.div
            key="project-capabilities"
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-5xl w-full">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-tighter leading-tight py-2">
                    {t.capTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-20 md:pb-0">
                    {[
                        { title: t.capAnalysis, sub: "Powered by Groq Llama-4", icon: <Brain />, color: "purple" },
                        { title: t.capPdf, sub: "High-quality vector rendering", icon: <FileText />, color: "blue" },
                        { title: t.capAudio, sub: "Interactive Speech Synthesis", icon: <Volume2 />, color: "green" },
                        { title: t.capLangs, sub: "Fully localized experience", icon: <Languages />, color: "yellow" }
                    ].map((cap, i) => (
                        <div key={i} className="flex items-center gap-4 md:gap-6 bg-slate-800/40 p-6 md:p-8 rounded-3xl border border-white/10">
                            <div className={`p-4 md:p-5 rounded-2xl bg-white/5 text-white`}>
                                {cap.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{cap.title}</h3>
                                <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-widest">{cap.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCapabilities;
