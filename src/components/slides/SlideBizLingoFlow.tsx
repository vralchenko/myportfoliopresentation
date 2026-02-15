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
            className="w-full h-full flex flex-col items-center justify-center p-8"
        >
            <div className="max-w-5xl w-full">
                <h2 className="text-6xl font-black mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {t.feat3Title2}
                </h2>
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center gap-6 bg-slate-800/40 p-10 rounded-3xl border border-white/10 w-full">
                        <div className="p-6 rounded-2xl bg-blue-500/20 text-blue-400">
                            <Volume2 size={48} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{t.feat3Title2}</h3>
                            <p className="text-gray-400 text-xl">{t.feat3Desc2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoFlow;
