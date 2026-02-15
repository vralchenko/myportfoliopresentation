import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideBizLingoDemoProps {
    t: any;
    bizIframeLoaded: boolean;
    bizSimStarted: boolean;
    simStatus: string;
    bizIframeRef: React.RefObject<HTMLIFrameElement>;
    setBizIframeLoaded: (loaded: boolean) => void;
}

const SlideBizLingoDemo: React.FC<SlideBizLingoDemoProps> = ({
    t, bizIframeLoaded, bizSimStarted, simStatus, bizIframeRef, setBizIframeLoaded
}) => {
    return (
        <motion.div
            key="biz-demo"
            className="w-full h-full flex flex-col items-center justify-end relative p-0 bg-black pt-32 md:pt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-[95%] md:w-[85%] h-[calc(100%-120px)] md:h-[calc(100%-100px)] relative">
                <div className="w-full h-full bg-[#001B3D] relative rounded-t-[40px] overflow-hidden border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                    {bizIframeLoaded && bizSimStarted && (
                        <motion.div
                            drag
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-4 left-4 md:top-10 md:left-10 z-[110] bg-slate-800/90 backdrop-blur-2xl border border-white/40 rounded-2xl p-3 md:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-w-[200px] md:min-w-[300px] cursor-move active:cursor-grabbing group"
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 animate-pulse" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-[8px] md:text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">{t.simNotice}</div>
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
                        </motion.div>
                    )}

                    <iframe
                        ref={bizIframeRef}
                        src="https://biz-lingo-chi.vercel.app/"
                        className="w-full h-full border-none"
                        title="BizLingo Demo"
                        onLoad={() => setBizIframeLoaded(true)}
                        allow="clipboard-write"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default SlideBizLingoDemo;
