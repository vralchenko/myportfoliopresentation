import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Compass, MapPin } from 'lucide-react';

interface SlideWesternDeepProps {
    t: any;
}

const SlideWesternDeep: React.FC<SlideWesternDeepProps> = ({ t }) => {
    const zodiacs = [
        { key: 'aries', emoji: '♈' },
        { key: 'taurus', emoji: '♉' },
        { key: 'gemini', emoji: '♊' },
        { key: 'cancer', emoji: '♋' },
        { key: 'leo', emoji: '♌' },
        { key: 'virgo', emoji: '♍' },
        { key: 'libra', emoji: '♎' },
        { key: 'scorpio', emoji: '♏' },
        { key: 'sagittarius', emoji: '♐' },
        { key: 'capricorn', emoji: '♑' },
        { key: 'aquarius', emoji: '♒' },
        { key: 'pisces', emoji: '♓' }
    ];

    return (
        <motion.div
            key="western-deep"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-32 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative aspect-square max-w-[450px] mx-auto w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />

                    <div className="relative w-full h-full p-4 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border border-blue-500/30 relative animate-[spin_120s_linear_infinite] flex items-center justify-center">
                            {zodiacs.map((z, i) => (
                                <div
                                    key={z.key}
                                    className="absolute h-full flex flex-col items-center justify-start py-2 group"
                                    style={{ transform: `rotate(${i * 30}deg)` }}
                                >
                                    <div className="flex flex-col items-center gap-1" style={{ transform: `rotate(${-i * 30}deg)` }}>
                                        <span className="text-xl md:text-2xl group-hover:scale-150 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                                            {z.emoji}
                                        </span>
                                        <div className="absolute top-10 whitespace-nowrap bg-slate-900/90 border border-blue-500/30 px-3 py-1.5 rounded-xl text-[10px] font-bold text-blue-300 backdrop-blur-md z-50 shadow-2xl scale-110">
                                            {t[z.key]}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-0.5 mt-1">
                                        <div className="text-[6px] md:text-[7px] font-black text-blue-400/40 uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                                            {t[z.key].split(' ')[0]}
                                        </div>
                                        <div className="w-1 h-3 bg-blue-500/20 rounded-full" />
                                    </div>
                                </div>
                            ))}

                            <div className="absolute inset-[25%] rounded-full border border-blue-500/40" />
                            <div className="absolute inset-[40%] rounded-full border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.15)]" />
                        </div>

                        <div className="absolute inset-[38%] rounded-full bg-slate-950/80 backdrop-blur-xl shadow-2xl border border-white/10 flex items-center justify-center z-20 overflow-hidden">
                            <Star size={40} className="text-blue-400 animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
                        </div>

                        <div className="absolute inset-0 z-30 pointer-events-none">
                            <Compass className="absolute top-4 left-1/2 -translate-x-1/2 text-blue-300 opacity-30" size={24} />
                            <MapPin className="absolute bottom-4 left-1/2 -translate-x-1/2 text-blue-300 opacity-30" size={24} />
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest">
                        <Moon size={16} /> Western Astrology
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                        {t.westernDeepTitle}
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                                <Star size={24} />
                            </div>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                {t.westernDeepText1}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                                <Moon size={24} />
                            </div>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                {t.westernDeepText2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideWesternDeep;
