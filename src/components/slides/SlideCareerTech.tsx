import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Brain, Terminal, Server } from 'lucide-react';

interface SlideCareerTechProps {
    t: any;
}

const SlideCareerTech: React.FC<SlideCareerTechProps> = ({ t }) => {
    return (
        <motion.div
            key="career-tech"
            className="w-full h-full flex flex-col items-center justify-center p-8"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-5xl font-black mb-16 text-center">{t.techTitle3}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Next.js 16", desc: t.whyNext3, icon: <Monitor />, color: "black" },
                        { title: "Groq Llama 3.1", desc: t.whyGroq3, icon: <Brain />, color: "orange" },
                        { title: "Puppeteer", desc: t.whyPuppeteer3, icon: <Terminal />, color: "green" },
                        { title: "Render (Docker)", desc: t.whyRender3, icon: <Server />, color: "blue" }
                    ].map((tech, i) => (
                        <div key={i} className="flex gap-6 bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 hover:bg-slate-900/80 transition group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                                {tech.icon}
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">{tech.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">{tech.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCareerTech;
