import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface SlideCareerDemoProps {
    t: any;
    careerSimStarted: boolean;
    simStatus: string;
    careerIframeLoaded: boolean;
    setCareerIframeLoaded: (loaded: boolean) => void;
    careerIframeRef: React.RefObject<HTMLIFrameElement>;
}

const SlideCareerDemo: React.FC<SlideCareerDemoProps> = ({
    t, careerSimStarted, simStatus, careerIframeLoaded, setCareerIframeLoaded, careerIframeRef
}) => {
    return (
        <motion.div
            key="career-demo"
            className="w-full h-full flex flex-col items-center justify-center relative p-0 bg-black pt-32 md:pt-0"
        >
            <div className="w-[95%] md:w-[85%] h-[calc(100%-140px)] md:h-[calc(100%-100px)] relative">
                <div className="w-full h-full bg-[#0a0a0a] relative rounded-2xl overflow-hidden shadow-2xl mt-0 md:mt-12 border border-white/10">
                    {/* Simulation Status HUD */}
                    {careerSimStarted && (
                        <motion.div
                            drag
                            dragMomentum={false}
                            initial={{ opacity: 0, x: 20, y: 20 }}
                            animate={{ opacity: 1 }}
                            className="absolute top-4 left-4 md:top-10 md:left-10 z-[110] bg-slate-800/90 backdrop-blur-2xl border border-white/40 rounded-2xl p-3 md:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-w-[200px] md:min-w-[300px] cursor-move active:cursor-grabbing group"
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500 animate-pulse" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-[8px] md:text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em]">{t.careerSim}</div>
                                        <div className="w-3 h-1 md:w-4 bg-white/10 rounded-full"></div>
                                    </div>
                                    <div className="text-white font-semibold text-xs md:text-base leading-tight">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={simStatus}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 10 }}
                                                className="block text-xs md:text-sm"
                                            >
                                                {simStatus}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -left-2 w-4 h-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Briefcase size={12} />
                            </div>
                        </motion.div>
                    )}
                    <iframe
                        ref={careerIframeRef}
                        src="https://ai-career-coach-production-f43f.up.railway.app/"
                        className="w-full h-full border-none"
                        title="AI Career Coach Demo"
                        onLoad={() => setCareerIframeLoaded(true)}
                        allow="clipboard-write"
                    />
                    {!careerIframeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                                <div className="text-purple-400 font-bold tracking-widest text-xs uppercase">{t.connecting}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SlideCareerDemo;
