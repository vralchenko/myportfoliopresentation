import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Brain, Volume2, Hash } from 'lucide-react';

interface SlideBizLingoTechProps {
    t: any;
}

const SlideBizLingoTech: React.FC<SlideBizLingoTechProps> = ({ t }) => {
    return (
        <motion.div
            key="biz-tech"
            className="w-full h-full flex flex-col items-center justify-center p-8"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-5xl font-bold mb-16 text-center">{t.techTitle2}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Flutter", desc: t.whyFlutter2, icon: <Smartphone />, color: "blue" },
                        { title: "Groq AI", desc: t.whyGroq2, icon: <Brain />, color: "purple" },
                        { title: "Flutter TTS", desc: t.whyTTS2, icon: <Volume2 />, color: "yellow" },
                        { title: "SharedPreferences", desc: t.whySharedPrefs2, icon: <Hash />, color: "green" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 transition">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoTech;
