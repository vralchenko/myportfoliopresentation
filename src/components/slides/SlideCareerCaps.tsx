import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap } from 'lucide-react';

interface SlideCareerCapsProps {
    t: any;
}

const SlideCareerCaps: React.FC<SlideCareerCapsProps> = ({ t }) => {
    return (
        <motion.div
            key="career-caps"
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-5xl w-full text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 leading-tight tracking-tighter py-2">
                    {t.feat3Title3}
                </h2>
                <div className="bg-slate-800/20 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 group-hover:rotate-12 transition duration-500">
                        <FileText size={160} className="w-24 h-24 md:w-40 md:h-40" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-500/20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                            <Zap size={32} className="md:w-[48px] md:h-[48px]" />
                        </div>
                        <p className="text-xl md:text-3xl text-gray-200 font-light leading-snug max-w-2xl mb-6 md:mb-8">
                            {t.feat3Desc3}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 pb-12 md:pb-0">
                            <span className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-widest uppercase">{t.badgeSSE}</span>
                            <span className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-widest uppercase">{t.badgeBuffering}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCareerCaps;
