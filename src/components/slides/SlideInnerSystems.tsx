import React from 'react';
import { motion } from 'framer-motion';

interface SlideInnerSystemsProps {
    t: any;
}

const SlideInnerSystems: React.FC<SlideInnerSystemsProps> = ({ t }) => {
    return (
        <motion.div
            key="project-systems"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 tracking-tighter leading-tight py-2">{t.systemsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-20 md:pb-0">
                    <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-amber-500/50 transition hover:bg-slate-900/60">
                        <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">{t.pythagorasTitle}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.pythagorasDesc}</p>
                    </div>
                    <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition hover:bg-slate-900/60">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">{t.westernTitle}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.westernDesc}</p>
                    </div>
                    <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-500/50 transition hover:bg-slate-900/60">
                        <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-4">{t.chineseTitle}</h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{t.chineseDesc}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideInnerSystems;
