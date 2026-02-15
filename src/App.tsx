import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import { translations } from './translations'
import { generateRandomData, generateBizLingoData, generateCareerCoachData } from './utils/dataGenerators'
import LanguageSwitcher from './components/LanguageSwitcher'
import TopNavigation from './components/TopNavigation'
import SideNavigation from './components/SideNavigation'
import SlideIntro from './components/slides/SlideIntro'
import SlideCareerOverview from './components/slides/SlideCareerOverview'
import SlideCareerFeatures from './components/slides/SlideCareerFeatures'
import SlideCareerCaps from './components/slides/SlideCareerCaps'
import SlideCareerTech from './components/slides/SlideCareerTech'
import SlideCareerDemo from './components/slides/SlideCareerDemo'
import SlideForetellerOverview from './components/slides/SlideForetellerOverview'
import SlideInnerSystems from './components/slides/SlideInnerSystems'
import SlideCapabilities from './components/slides/SlideCapabilities'
import SlideTechStrategy from './components/slides/SlideTechStrategy'
import SlideInteractiveDemo from './components/slides/SlideInteractiveDemo'
import SlideBizLingoOverview from './components/slides/SlideBizLingoOverview'
import SlideBizLingoFeatures from './components/slides/SlideBizLingoFeatures'
import SlideBizLingoFlow from './components/slides/SlideBizLingoFlow'
import SlideBizLingoTech from './components/slides/SlideBizLingoTech'
import SlideBizLingoDemo from './components/slides/SlideBizLingoDemo'
import SlideThankYou from './components/slides/SlideThankYou'

function App() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [demoStep, setDemoStep] = useState(0)
    const [lang, setLang] = useState<'en' | 'de' | 'ru' | 'ua'>('en')
    const iframeRef = useRef<HTMLIFrameElement>(null)

    // Translations
    const t = translations[lang]
    const totalSlides = 17

    const [simData, setSimData] = useState(generateRandomData());
    const [bizSimData, setBizSimData] = useState<any>(generateBizLingoData());
    const [careerData, setCareerData] = useState(generateCareerCoachData());
    const [simStatus, setSimStatus] = useState('Initializing Simulation...')
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const [bizIframeLoaded, setBizIframeLoaded] = useState(false)
    const [bizSimStarted, setBizSimStarted] = useState(false)
    const bizIframeRef = useRef<HTMLIFrameElement>(null)
    const careerIframeRef = useRef<HTMLIFrameElement>(null)
    const [careerIframeLoaded, setCareerIframeLoaded] = useState(false)
    const [careerSimStarted, setCareerSimStarted] = useState(false)

    useEffect(() => {
        if (currentSlide === 5) {
            setCareerData(generateCareerCoachData());
            setDemoStep(0);
            setCareerIframeLoaded(false);
            setCareerSimStarted(false);
        }
        if (currentSlide === 10) {
            setSimData(generateRandomData());
            setDemoStep(0);
            setIframeLoaded(false);
        }
        if (currentSlide === 15) {
            setBizSimData(generateBizLingoData()); // Reset data
            setDemoStep(0);
            setBizIframeLoaded(false);
            setBizSimStarted(false);
            if (bizIframeRef.current?.contentWindow) {
                bizIframeRef.current.contentWindow.postMessage({
                    type: 'PRESENTATION_COMMAND',
                    action: 'RESET_PROGRESS',
                }, '*');
            }
        }
    }, [currentSlide])

    // --- Message API: Send commands to Foreteller ---
    useEffect(() => {
        if (currentSlide === 5 && careerIframeRef.current?.contentWindow && careerIframeLoaded) {
            const commands = [
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'job-url-input' } }, { action: 'FILL_FIELD', payload: { name: 'jobUrl', value: careerData.jobUrl } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'resume-upload-label' } }, { action: 'CLICK', payload: { name: 'resume-upload-input' } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'analyze-button' } }, { action: 'SUBMIT' }],
                [{ action: 'SCROLL', payload: { direction: 'down', value: 300 } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'download-pdf-button' } }, { action: 'GENERATE_PDF' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'download-cover-button' } }, { action: 'GENERATE_COVER' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'download-cv-button' } }, { action: 'GENERATE_CV' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'copy-button' } }, { action: 'CLICK', payload: { name: 'copy-button' } }]
            ];

            const statusMessages = [
                `${t.careerStatus1} ${careerData.jobUrl.split('/').pop()}`,
                t.careerStatus2,
                t.careerStatus3,
                t.careerStatus4,
                t.careerStatus5,
                t.careerStatus6,
                t.careerStatus7,
                t.careerStatus8
            ];

            const send = async () => {
                const commandGroup = commands[demoStep];
                if (commandGroup) {
                    setSimStatus(statusMessages[demoStep]);
                    const typingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
                    typingSound.volume = 0.3;

                    for (const cmd of commandGroup) {
                        if (cmd.action === 'FILL_FIELD' && 'value' in (cmd.payload || {})) {
                            const text = (cmd.payload as any).value as string;
                            for (let i = 1; i <= text.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50));
                                typingSound.currentTime = 0;
                                typingSound.play().catch(() => { });
                                careerIframeRef.current!.contentWindow!.postMessage({ type: 'PRESENTATION_COMMAND', action: 'FILL_FIELD', payload: { ...(cmd.payload as any), value: text.substring(0, i) } }, '*');
                            }
                        } else {
                            careerIframeRef.current!.contentWindow!.postMessage({ type: 'PRESENTATION_COMMAND', ...cmd }, '*');
                        }
                    }
                }
            };

            if (demoStep === 0) {
                const timer = setTimeout(() => {
                    setCareerSimStarted(true);
                    send();
                }, 4000);
                return () => clearTimeout(timer);
            } else {
                send();
            }
        }

        if (currentSlide === 10 && iframeRef.current?.contentWindow && iframeLoaded) {
            const commands = [
                // Steps 1-5: Forms
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'date' } }, { action: 'FILL_FIELD', payload: { name: 'date', value: simData.date } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'time' } }, { action: 'FILL_FIELD', payload: { name: 'time', value: simData.time } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'place' } }, { action: 'FILL_FIELD', payload: { name: 'place', value: simData.place } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'gender' } }, { action: 'FILL_FIELD', payload: { name: 'gender', value: simData.gender } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'submit' } }, { action: 'SUBMIT' }],
                // Steps 6-8: Content interaction
                [{ action: 'SCROLL', payload: { direction: 'down', value: 2500 } }],
                [{ action: 'SCROLL', payload: { direction: 'up' } }],
                [{ action: 'DOWNLOAD_PDF' }],
                // Multi-Language with Auto-Analysis
                [{ action: 'SET_LANGUAGE', payload: { lang: 'de' } }, { action: 'SUBMIT' }],
                [{ action: 'SET_LANGUAGE', payload: { lang: 'es' } }, { action: 'SUBMIT' }],
                [{ action: 'SET_LANGUAGE', payload: { lang: 'fr' } }, { action: 'SUBMIT' }],
                [{ action: 'SET_LANGUAGE', payload: { lang: 'uk' } }, { action: 'SUBMIT' }]
            ];

            const statusMessages = [
                `${t.foretellerStatus1} ${simData.date}`,
                `${t.foretellerStatus2} ${simData.time}`,
                `${t.foretellerStatus3} ${simData.place}`,
                `${t.foretellerStatus4} ${simData.gender.toUpperCase()}`,
                t.foretellerStatus5,
                t.foretellerStatus6,
                t.foretellerStatus7,
                t.foretellerStatus8,
                t.foretellerStatus9,
                t.foretellerStatus10,
                t.foretellerStatus11,
                t.foretellerStatus12
            ];

            const send = async () => {
                const commandGroup = commands[demoStep];
                if (commandGroup) {
                    setSimStatus(statusMessages[demoStep]);

                    const typingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
                    typingSound.volume = 0.3;

                    for (const cmd of commandGroup) {
                        if (cmd.action === 'FILL_FIELD' && 'value' in (cmd.payload || {})) {
                            const text = (cmd.payload as any).value as string;
                            for (let i = 1; i <= text.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 60 + Math.random() * 60));

                                // Play sound
                                typingSound.currentTime = 0;
                                typingSound.play().catch(() => { });

                                iframeRef.current!.contentWindow!.postMessage({
                                    type: 'PRESENTATION_COMMAND',
                                    action: 'FILL_FIELD',
                                    payload: { ...(cmd.payload as any), value: text.substring(0, i) }
                                }, '*');
                            }
                        } else {
                            iframeRef.current!.contentWindow!.postMessage({
                                type: 'PRESENTATION_COMMAND',
                                ...cmd
                            }, '*');
                        }
                    }
                }
            };

            if (demoStep === 0) {
                iframeRef.current!.contentWindow!.postMessage({
                    type: 'PRESENTATION_COMMAND',
                    action: 'SCROLL',
                    payload: { direction: 'up' }
                }, '*');
                const timer = setTimeout(send, 1000); // Wait 1s for safe load
                return () => clearTimeout(timer);
            } else {
                send();
            }
        }

        if (currentSlide === 15 && bizIframeRef.current?.contentWindow && bizIframeLoaded) {
            const commands = [
                // Phrase 1: Exact Match (Steps 0-3)
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p1.exact } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'check' } }, { action: 'SUBMIT' }], // Check
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'speaker' } }, { action: 'TOGGLE_AUDIO' }], // Audio
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'next' } }, { action: 'NEXT' }, { action: 'WAIT', payload: { duration: 1000 } }], // Transition

                // Phrase 2: Semantic Match Pattern (Steps 4-7)
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p2.approx } }], // Synonyms
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'check' } }, { action: 'SUBMIT' }], // Check
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'speaker' } }, { action: 'TOGGLE_AUDIO' }], // Audio
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'next' } }, { action: 'NEXT' }, { action: 'WAIT', payload: { duration: 1000 } }], // Transition

                // Phrase 3: Semantic Match Pattern (Steps 8-11)
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p3.approx } }], // Synonyms
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'check' } }, { action: 'SUBMIT' }], // Check
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'speaker' } }, { action: 'TOGGLE_AUDIO' }], // Audio
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'next' } }, { action: 'NEXT' }] // Finish
            ];

            const statusMessages = [
                `${t.bizStatus1} "${bizSimData.p1.source}"`,
                t.bizStatus2,
                t.bizStatus14, // Audio
                t.bizStatus11, // Transition

                `${t.bizStatus5} "${bizSimData.p2.source}"`,
                t.bizStatus6, // AI Semantic Analysis
                t.bizStatus14, // Audio
                t.bizStatus11, // Transition

                `${t.bizStatus12} "${bizSimData.p3.source}"`,
                t.bizStatus6, // AI Semantic Analysis
                t.bizStatus14, // Audio
                t.bizStatus15  // Finish
            ];

            const send = async () => {
                const commandGroup = commands[demoStep];
                if (commandGroup) {
                    setSimStatus(statusMessages[demoStep] || ""); // Safe fallback

                    const typingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
                    typingSound.volume = 0.3;

                    for (const cmd of commandGroup) {
                        if (cmd.action === 'WAIT') {
                            await new Promise(resolve => setTimeout(resolve, (cmd.payload as any).duration));
                        } else if (cmd.action === 'FILL_FIELD' && 'value' in (cmd.payload || {})) {
                            const text = (cmd.payload as any).value as string;
                            // Simulate human typing
                            for (let i = 1; i <= text.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 60 + Math.random() * 60));

                                // Play sound
                                typingSound.currentTime = 0;
                                typingSound.play().catch(() => { });

                                bizIframeRef.current!.contentWindow!.postMessage({
                                    type: 'PRESENTATION_COMMAND',
                                    action: 'FILL_FIELD',
                                    payload: { ...(cmd.payload as any), value: text.substring(0, i) }
                                }, '*');
                            }
                        } else {
                            bizIframeRef.current!.contentWindow!.postMessage({
                                type: 'PRESENTATION_COMMAND',
                                ...cmd
                            }, '*');
                        }
                    }
                }

                // Auto-advance to final slide after BizLingo simulation finishes
                if (demoStep === 11) {
                    setTimeout(() => {
                        setCurrentSlide(16);
                        setDemoStep(0);
                    }, 3000); // Give user time to see the "Finish" message
                }
            };

            if (demoStep === 0) {
                const timer = setTimeout(() => {
                    setBizSimStarted(true);
                    send();
                }, 4500); // Increased initial delay for better user orientation
                return () => clearTimeout(timer);
            } else {
                send();
            }
        }
    }, [demoStep, currentSlide, simData, bizSimData, iframeLoaded, bizIframeLoaded, careerIframeLoaded])

    const nextSlide = () => {
        if (currentSlide === 5) {
            if (demoStep < 7) {
                setDemoStep(prev => prev + 1)
                return
            }
        }
        if (currentSlide === 10) {
            if (demoStep < 11) {
                setSimData(generateRandomData())
                setDemoStep(prev => prev + 1)
                return
            }
        }
        if (currentSlide === 15) {
            if (demoStep < 11) {
                setDemoStep(prev => prev + 1)
                return
            }
        }
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(curr => {
                const next = curr + 1;
                setDemoStep(0);
                return next;
            })
        }
    }

    const prevSlide = () => {
        if (currentSlide === 5 || currentSlide === 10 || currentSlide === 15) {
            if (demoStep > 0) {
                if (currentSlide === 10) setSimData(generateRandomData())
                setDemoStep(prev => prev - 1)
                return
            }
        }
        if (currentSlide > 0) {
            setCurrentSlide(curr => {
                const prev = curr - 1;
                setDemoStep(0);
                return prev;
            })
        }
    }

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide()
            if (e.key === 'ArrowLeft') prevSlide()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentSlide, demoStep])

    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#0f0f13] text-white overflow-hidden font-sans selection:bg-purple-500 selection:text-white flex flex-col">

            <LanguageSwitcher lang={lang} setLang={setLang} />

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Main Content Area - ABSOLUTE FULL SCREEN */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

                <TopNavigation
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    setDemoStep={setDemoStep}
                    t={t}
                />

                <AnimatePresence mode="wait">
                    {currentSlide === 0 && <SlideIntro t={t} />}
                    {currentSlide === 1 && <SlideCareerOverview t={t} />}
                    {currentSlide === 2 && <SlideCareerFeatures t={t} />}
                    {currentSlide === 3 && <SlideCareerCaps t={t} />}
                    {currentSlide === 4 && <SlideCareerTech t={t} />}
                    {currentSlide === 5 && (
                        <SlideCareerDemo
                            t={t}
                            careerSimStarted={careerSimStarted}
                            simStatus={simStatus}
                            careerIframeLoaded={careerIframeLoaded}
                            setCareerIframeLoaded={setCareerIframeLoaded}
                            careerIframeRef={careerIframeRef}
                        />
                    )}
                    {currentSlide === 6 && <SlideForetellerOverview t={t} />}
                    {currentSlide === 7 && <SlideInnerSystems t={t} />}
                    {currentSlide === 8 && <SlideCapabilities t={t} />}
                    {currentSlide === 9 && <SlideTechStrategy t={t} />}
                    {currentSlide === 10 && (
                        <SlideInteractiveDemo
                            t={t}
                            iframeLoaded={iframeLoaded}
                            setIframeLoaded={setIframeLoaded}
                            simStatus={simStatus}
                            iframeRef={iframeRef}
                        />
                    )}
                    {currentSlide === 11 && <SlideBizLingoOverview t={t} />}
                    {currentSlide === 12 && <SlideBizLingoFeatures t={t} />}
                    {currentSlide === 13 && <SlideBizLingoFlow t={t} />}
                    {currentSlide === 14 && <SlideBizLingoTech t={t} />}
                    {currentSlide === 15 && (
                        <SlideBizLingoDemo
                            t={t}
                            bizIframeLoaded={bizIframeLoaded}
                            bizSimStarted={bizSimStarted}
                            simStatus={simStatus}
                            bizIframeRef={bizIframeRef}
                            setBizIframeLoaded={setBizIframeLoaded}
                        />
                    )}
                    {currentSlide === 16 && <SlideThankYou t={t} />}
                </AnimatePresence>

                <SideNavigation
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                />
            </div>
        </div>
    )
}

export default App
