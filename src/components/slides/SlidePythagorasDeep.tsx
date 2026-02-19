import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, Calculator, Play, RefreshCcw } from 'lucide-react';

interface SlidePythagorasDeepProps {
    t: any;
}

const SlidePythagorasDeep: React.FC<SlidePythagorasDeepProps> = ({ t }) => {
    const [hoveredDigit, setHoveredDigit] = useState<number | null>(null);
    const [animationState, setAnimationState] = useState<'idle' | 'calculating' | 'filling'>('idle');
    const [activeSourceIndex, setActiveSourceIndex] = useState<number | null>(null);
    const [matrixCounts, setMatrixCounts] = useState<Record<number, number>>({
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
    });

    // Full digit set: 1, 5, 0, 5, 1, 9, 8, 5 (date) + 3, 4 (34) + 7 + 3, 2 (32) + 5
    const calculationDigits = [1, 5, 0, 5, 1, 9, 8, 5, 3, 4, 7, 3, 2, 5];

    const startSimulation = async () => {
        setAnimationState('calculating');
        setMatrixCounts({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 });

        await new Promise(r => setTimeout(r, 1000));
        setAnimationState('filling');

        for (let i = 0; i < calculationDigits.length; i++) {
            const digit = calculationDigits[i];
            if (digit === 0) continue; // Numerology matrix usually skips zeros

            setActiveSourceIndex(i);
            await new Promise(r => setTimeout(r, 600));

            setMatrixCounts(prev => ({
                ...prev,
                [digit]: prev[digit] + 1
            }));

            await new Promise(r => setTimeout(r, 200));
        }

        setActiveSourceIndex(null);
        setAnimationState('idle');
    };

    return (
        <motion.div
            key="pythagoras-deep"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full h-full flex flex-col items-center justify-start md:justify-center p-8 pt-24 md:p-8 overflow-y-auto no-scrollbar"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-widest">
                        <Hash size={16} /> Numerology System
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                        {t.pythagorasDeepTitle}
                    </h2>

                    <div className="space-y-4">
                        {/* Stabilized Info Block */}
                        <div className="relative h-[300px] p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden">
                            <AnimatePresence mode="wait">
                                {hoveredDigit ? (
                                    <motion.div
                                        key={`details-${hoveredDigit}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-3"
                                    >
                                        <div className="text-amber-400 font-extrabold text-2xl drop-shadow-lg">№ {hoveredDigit}</div>
                                        <div className="text-xl text-gray-200 font-medium leading-relaxed bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10">
                                            {t[`py${hoveredDigit}`]}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default-info"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                                <Calculator size={20} />
                                            </div>
                                            <p className="text-lg text-gray-400 leading-relaxed italic">
                                                {t.pythagorasDeepText1}
                                            </p>
                                        </div>

                                        <div className="space-y-3 pt-4 border-t border-amber-500/10">
                                            <div className="space-y-1">
                                                <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
                                                    <span className="text-amber-500/50 font-bold uppercase tracking-tighter mr-2">Method:</span>
                                                    {t.pyCalculation}
                                                </p>
                                                <p className="text-[9px] md:text-[10px] text-amber-500/40 font-mono italic">
                                                    {t.pyAlgorithm}
                                                </p>
                                                <p className="text-[9px] md:text-[10px] text-gray-400 font-mono mt-1 opacity-80 border-l-2 border-amber-500/20 pl-2">
                                                    {t.pyExample}
                                                </p>
                                            </div>

                                            <div className="relative p-4 rounded-xl bg-black/40 border border-amber-500/10">
                                                <div className="text-amber-400/30 mb-2 text-[10px] uppercase font-bold tracking-widest">Calculated Components:</div>
                                                <div className="flex flex-wrap gap-2 items-center text-sm md:text-base font-mono">
                                                    {calculationDigits.map((d, i) => (
                                                        <div key={i} className="relative">
                                                            <span className={`transition-all duration-300 ${activeSourceIndex === i ? 'text-white scale-150 font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-amber-400/60'}`}>
                                                                {d}
                                                            </span>
                                                            {activeSourceIndex === i && (
                                                                <motion.div
                                                                    initial={{ x: 0, y: 0, opacity: 1, scale: 1.5 }}
                                                                    animate={{
                                                                        x: 450,
                                                                        y: -80,
                                                                        opacity: 0,
                                                                        scale: 0.5,
                                                                        rotate: 360
                                                                    }}
                                                                    transition={{ duration: 0.65, ease: "anticipate" }}
                                                                    className="absolute inset-0 text-white font-black z-[100] pointer-events-none"
                                                                >
                                                                    {d}
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={startSimulation}
                            disabled={animationState !== 'idle'}
                            className="group relative w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-black hover:bg-amber-500 hover:text-white transition-all disabled:opacity-50 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            {animationState === 'idle' ? (
                                <><Play size={20} fill="currentColor" /> RUN FULL SIMULATION</>
                            ) : (
                                <><RefreshCcw size={20} className="animate-spin" /> FILLING PSYCHOMATRIX...</>
                            )}
                        </button>
                    </div>
                </div>

                <div className="relative aspect-square max-w-[500px] mx-auto w-full group/matrix">
                    {/* Matrix Grid */}
                    <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-4 w-full h-full p-4 bg-[#0a0a0f]/80 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                            const count = matrixCounts[n];
                            // Repeated digits: 1 -> 11, 5 -> 5555 etc.
                            const displayValue = count > 0 ? Array(count).fill(n).join('') : n.toString();
                            const isFilled = count > 0;

                            return (
                                <motion.div
                                    key={n}
                                    onMouseEnter={() => setHoveredDigit(n)}
                                    onMouseLeave={() => setHoveredDigit(null)}
                                    className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-500 cursor-help ${hoveredDigit === n
                                        ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                                        : isFilled
                                            ? 'bg-amber-500/5 border-amber-500/20'
                                            : 'bg-white/[0.02] border-white/5'
                                        }`}
                                >
                                    <AnimatePresence mode="popLayout">
                                        <motion.span
                                            key={displayValue}
                                            initial={isFilled ? { scale: 1.5, filter: 'brightness(2)' } : false}
                                            animate={{ scale: 1, filter: 'brightness(1)' }}
                                            className={`font-black tracking-tighter transition-all duration-300 ${isFilled || hoveredDigit === n ? 'text-amber-400' : 'text-white/10'
                                                } ${displayValue.length > 4 ? 'text-xl md:text-2xl' :
                                                    displayValue.length > 2 ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'
                                                }`}
                                        >
                                            {displayValue}
                                        </motion.span>
                                    </AnimatePresence>

                                    <span className={`text-[10px] md:text-[11px] font-black text-center uppercase tracking-wider leading-tight pt-2 pointer-events-none transition-colors duration-500 ${isFilled || hoveredDigit === n ? 'text-amber-200' : 'text-slate-500'
                                        }`}>
                                        {t[`py${n}`].split(' & ')[0]}
                                        <br />
                                        {t[`py${n}`].split(' & ')[1] || ''}
                                    </span>

                                    {/* Slot Active Glow */}
                                    {activeSourceIndex !== null && calculationDigits[activeSourceIndex] === n && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 1, 0] }}
                                            className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-md"
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Background Glows */}
                    <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
                </div>
            </div>
        </motion.div>
    );
};

export default SlidePythagorasDeep;
