import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Repeat } from 'lucide-react';

interface SlideChineseDeepProps {
    t: any;
}

const SlideChineseDeep: React.FC<SlideChineseDeepProps> = ({ t }) => {
    // Reordered to end with Horse (2026) in the bottom-right corner
    const animals = [
        { key: 'cGoat', emoji: '🐐' },
        { key: 'cMonkey', emoji: '🐒' },
        { key: 'cRooster', emoji: '🐓' },
        { key: 'cDog', emoji: '🐕' },
        { key: 'cPig', emoji: '🐖' },
        { key: 'cRat', emoji: '🐀' },
        { key: 'cOx', emoji: '🐂' },
        { key: 'cTiger', emoji: '🐅' },
        { key: 'cRabbit', emoji: '🐇' },
        { key: 'cDragon', emoji: '🐉' },
        { key: 'cSnake', emoji: '🐍' },
        { key: 'cHorse', emoji: '🐎' }
    ];

    return (
        <motion.div
            key="chinese-deep"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-24 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold uppercase tracking-widest">
                        <Repeat size={16} /> Eastern Philosophy
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                        {t.chineseDeepTitle}
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                                <Users size={20} />
                            </div>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {t.chineseDeepText1}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                                <Zap size={20} />
                            </div>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {t.chineseDeepText2}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-[500px] mx-auto w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 grid grid-cols-4 gap-2 w-full p-2">
                        {animals.map((a, i) => {
                            // Calculation adjusted: Horse (i=11) -> 2014 & 2026
                            const topYear = 2003 + i;
                            const bottomYear = topYear + 12;
                            return (
                                <motion.div
                                    key={a.key}
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="aspect-[4/5] bg-slate-900/60 border border-white/10 rounded-xl flex flex-col items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-all group relative shadow-lg p-1"
                                >
                                    <span className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform duration-500">
                                        {a.emoji}
                                    </span>
                                    <span className="text-xs md:text-sm font-black text-red-500 group-hover:text-red-400 transition-colors text-center leading-tight">
                                        {t[a.key]}
                                    </span>
                                    <div className="flex flex-col items-center mt-1">
                                        <span className="text-[10px] md:text-xs font-bold text-gray-500 group-hover:text-white/40 transition-colors">
                                            {topYear}
                                        </span>
                                        {bottomYear <= 2026 && (
                                            <span className="text-sm md:text-base font-black text-red-500/80 group-hover:text-red-400 transition-colors leading-none">
                                                {bottomYear}
                                            </span>
                                        )}
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/20 transition-all" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideChineseDeep;
