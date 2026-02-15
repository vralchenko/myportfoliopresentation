import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

interface SlideBizLingoFlowProps {
    t: any;
}

const SlideBizLingoFlow: React.FC<SlideBizLingoFlowProps> = ({ t }) => {
    return (
        <motion.div
            key="biz-flow"
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-5xl w-full">
                <h2 className="text-4xl md:text-6xl font-black mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {t.feat3Title2}
                </h2>
                <div className="flex flex-col items-center gap-6 md:gap-8 pb-20 md:pb-0">
                    <div className="flex items-center gap-4 md:gap-6 bg-slate-800/40 p-6 md:p-10 rounded-3xl border border-white/10 w-full">
                        <div className="p-4 md:p-6 rounded-2xl bg-blue-500/20 text-blue-400">
                            <Volume2 size={32} className="md:w-[48px] md:h-[48px]" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{t.feat3Title2}</h3>
                            <p className="text-gray-400 text-lg md:text-xl">{t.feat3Desc2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoFlow;
