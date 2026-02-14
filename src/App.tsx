import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ChevronLeft, ChevronRight, Globe, Languages, MonitorPlay, Sparkles, Zap, ShieldCheck,
    Database, Monitor, Brain, CheckSquare, FileText, Volume2, Server, Terminal, Smartphone, Bug, GraduationCap, Hash
} from 'lucide-react'
import QRCode from 'react-qr-code'
import './index.css'

// --- Translations ---
const translations: any = {
    en: {
        role: "Senior Software Engineer | 20+ Years Experience",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'AI', icon: 'Brain' },
            { label: 'QA', icon: 'CheckSquare' }
        ],
        flagship: "Foreteller: AI Astrology Platform",
        projectDesc: "A specialized platform leveraging Llama-4 via Groq for deep astrological and numerological insights.",
        systemsTitle: "The Three Pillars of Insight",
        pythagorasTitle: "1. Pythagoras Square",
        pythagorasDesc: "Numerological 3x3 matrix calculating psychogram and energy levels from birth date.",
        westernTitle: "2. Western Astrology",
        westernDesc: "Detailed character traits based on solar position and elemental balance.",
        chineseTitle: "3. Chinese Zodiac",
        chineseDesc: "Deep-seated behavioral patterns and 12-year animal cycle archetypes.",
        capTitle: "Core Capabilities",
        capAnalysis: "Real-time AI Character Analysis",
        capPdf: "PDF Export with Source Birth Data",
        capAudio: "Audio Listening of Cosmic Advice",
        capLangs: "Native Multi-language Support",
        techTitle: "Technology Strategy",
        masterDegree: "Master's Degree in Computer Science",
        spokenLanguages: "EN | DE | RU | UA",
        techIcons: [
            { name: 'React', icon: 'Monitor' },
            { name: 'TypeScript', icon: 'ShieldCheck' },
            { name: '.NET', icon: 'Server' },
            { name: 'Node.js', icon: 'Terminal' },
            { name: 'SQL', icon: 'Database' },
            { name: 'Kafka', icon: 'Zap' },
            { name: 'Flutter', icon: 'Smartphone' },
            { name: 'QA', icon: 'Bug' }
        ],
        whyReact: "React 18: For rapid state updates and ecosystem support.",
        whyVite: "Vite: Ensuring sub-second dev cycles and optimized builds.",
        whyTS: "TypeScript: Industry-standard safety for large-scale logic.",
        whyMUI: "Material UI: For 'Cosmic Glass' aesthetic via glassmorphism.",
        demoTitle: "Interactive Simulation",
        thankYou: "Thank You!",
        questions: "Any Questions?",
        linkedin: "LinkedIn",
        portfolio: "Portfolio",
        liveSite: "Live Site",
        scanMe: "Scan Me"
    },
    de: {
        role: "Senior Software Engineer | 20+ Jahre Erfahrung",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'KI', icon: 'Brain' },
            { label: 'QA', icon: 'CheckSquare' }
        ],
        flagship: "Foreteller: KI-Astrologie-Plattform",
        projectDesc: "Eine spezialisierte Plattform, die Llama-4 über Groq für tiefe astrologische und numerologische Einblicke nutzt.",
        systemsTitle: "Die drei Säulen der Erkenntnis",
        pythagorasTitle: "1. Pythagoras-Quadrat",
        pythagorasDesc: "Numerologische 3x3-Matrix zur Berechnung von Psychogramm und Energieniveaus.",
        westernTitle: "2. Westliche Astrologie",
        westernDesc: "Detaillierte Charakterzüge basierend auf Sonnenstand und Elementbalance.",
        chineseTitle: "3. Chinesischer Tierkreis",
        chineseDesc: "Tief verwurzelte Verhaltensmuster und Archetypen des 12-Jahres-Zyklus.",
        capTitle: "Kernkompetenzen",
        capAnalysis: "KI-Charakteranalyse in Echtzeit",
        capPdf: "PDF-Export mit Geburtsdaten",
        capAudio: "Audio-Wiedergabe kosmetischer Ratschläge",
        capLangs: "Native Mehrsprachigkeit",
        techTitle: "Technologie-Strategie",
        masterDegree: "Master-Abschluss (Master of Science)",
        spokenLanguages: "EN | DE | RU | UA",
        techIcons: [
            { name: 'React', icon: 'Monitor' },
            { name: 'TypeScript', icon: 'ShieldCheck' },
            { name: '.NET', icon: 'Server' },
            { name: 'Node.js', icon: 'Terminal' },
            { name: 'SQL', icon: 'Database' },
            { name: 'Kafka', icon: 'Zap' },
            { name: 'Flutter', icon: 'Smartphone' },
            { name: 'QA', icon: 'Bug' }
        ],
        whyReact: "React 18: Für schnelle Status-Updates und Ökosystem-Support.",
        whyVite: "Vite: Für optimierte Builds und extrem schnelle Entwicklung.",
        whyTS: "TypeScript: Industriestandard für Sicherheit in großem Maßstab.",
        whyMUI: "Material UI: Für die 'Cosmic Glass'-Ästhetik via Glassmorphismus.",
        demoTitle: "Interaktive Simulation",
        thankYou: "Vielen Dank!",
        questions: "Haben Sie Fragen?",
        linkedin: "LinkedIn",
        portfolio: "Portfolio",
        liveSite: "Website",
        scanMe: "Scannen"
    },
    ru: {
        role: "Senior Software Engineer | 20+ лет опыта",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'AI / ИИ', icon: 'Brain' },
            { label: 'QA / Автоматизация', icon: 'CheckSquare' }
        ],
        flagship: "Foreteller: Астрологическая ИИ-платформа",
        projectDesc: "Специализированная платформа, использующая Llama-4 через Groq для глубокого анализа судьбы и характера.",
        systemsTitle: "Три столпа познания",
        pythagorasTitle: "1. Квадрат Пифагора",
        pythagorasDesc: "Нумерологическая матрица 3х3: расчет психотипа и энергии по дате рождения.",
        westernTitle: "2. Западная Астрология",
        westernDesc: "Детальные черты характера на основе положения солнца и баланса стихий.",
        chineseTitle: "3. Китайский Зодиак",
        chineseDesc: "Глубинные модели поведения и архетипы 12-летнего цикла животных.",
        capTitle: "Возможности проекта",
        capAnalysis: "ИИ-анализ характера в реальном времени",
        capPdf: "Экспорт в PDF с данными рождения",
        capAudio: "Прослушивание анализа (TTS)",
        capLangs: "Нативная поддержка нескольких языков",
        techTitle: "Технологическая стратегия",
        masterDegree: "Степень магистра (Master of Science)",
        spokenLanguages: "EN | DE | RU | UA",
        techIcons: [
            { name: 'React', icon: 'Monitor' },
            { name: 'TypeScript', icon: 'ShieldCheck' },
            { name: '.NET', icon: 'Server' },
            { name: 'Node.js', icon: 'Terminal' },
            { name: 'SQL', icon: 'Database' },
            { name: 'Kafka', icon: 'Zap' },
            { name: 'Flutter', icon: 'Smartphone' },
            { name: 'QA', icon: 'Bug' }
        ],
        whyReact: "React 18: Быстрое обновление состояния и экосистема.",
        whyVite: "Vite: Молниеносная разработка и оптимизированная сборка.",
        whyTS: "TypeScript: Промышленный стандарт безопасности кода.",
        whyMUI: "Material UI: Эстетика 'Cosmic Glass' через глассморфизм.",
        demoTitle: "Интерактивная симуляция",
        thankYou: "Спасибо за внимание!",
        questions: "Вопросы?",
        linkedin: "LinkedIn",
        portfolio: "Портфолио",
        liveSite: "Сайт",
        scanMe: "Сканируй"
    },
    ua: {
        role: "Senior Software Engineer | 20+ років досвіду",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'AI / ШІ', icon: 'Brain' },
            { label: 'QA / Автоматизація', icon: 'CheckSquare' }
        ],
        flagship: "Foreteller: Астрологічна ШІ-платформа",
        projectDesc: "Спеціалізована платформа, що використовує Llama-4 через Groq для глибокого аналізу характеру та долі.",
        systemsTitle: "Три Стовпи Пізнання",
        pythagorasTitle: "1. Квадрат Піфагора",
        pythagorasDesc: "Нумерологічна матриця 3х3: розрахунок психотипу та енергії за датою народження.",
        westernTitle: "2. Західна Астрологія",
        westernDesc: "Детальні риси характеру на основі положення сонця та стихій.",
        chineseTitle: "3. Китайський Зодіак",
        chineseDesc: "Глибинні моделі поведінки та архетипи 12-річного циклу тварин.",
        capTitle: "Можливості проекту",
        capAnalysis: "ШІ-аналіз характеру в реальному часі",
        capPdf: "Експорт у PDF з даними народження",
        capAudio: "Прослуховування аналізу голосом",
        capLangs: "Нативна підтримка декількох мов",
        techTitle: "Технологічна Стратегія",
        masterDegree: "Ступінь магістра (Master of Science)",
        spokenLanguages: "EN | DE | RU | UA",
        techIcons: [
            { name: 'React', icon: 'Monitor' },
            { name: 'TypeScript', icon: 'ShieldCheck' },
            { name: '.NET', icon: 'Server' },
            { name: 'Node.js', icon: 'Terminal' },
            { name: 'SQL', icon: 'Database' },
            { name: 'Kafka', icon: 'Zap' },
            { name: 'Flutter', icon: 'Smartphone' },
            { name: 'QA', icon: 'Bug' }
        ],
        whyReact: "React 18: Швидке оновлення стану та розвинена екосистема.",
        whyVite: "Vite: Забезпечення миттєвої розробки та оптимізації.",
        whyTS: "TypeScript: Стандарт безпеки для складної бізнес-логіки.",
        whyMUI: "Material UI: Естетика 'Cosmic Glass' через глассморфізм.",
        demoTitle: "Інтерактивна Симуляція",
        thankYou: "Дякую за увагу!",
        questions: "Запитання?",
        linkedin: "LinkedIn",
        portfolio: "Портфоліо",
        liveSite: "Сайт",
        scanMe: "Скануй"
    }
}

// Placeholder for user avatar
const UserAvatar = () => (
    <div className="w-40 h-40 rounded-full border-4 border-purple-500 overflow-hidden shadow-2xl mb-6 mx-auto relative group bg-gray-800 shrink-0">
        {/* User avatar - place 'avatar.jpg' in public folder */}
        <img src="/avatar.jpg" alt="Viktor Ralchenko" className="w-full h-full object-cover" />
    </div>
)

function App() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [demoStep, setDemoStep] = useState(0)
    const [lang, setLang] = useState<'en' | 'de' | 'ru' | 'ua'>('en')
    const iframeRef = useRef<HTMLIFrameElement>(null)

    // Translations
    const t = translations[lang]
    const totalSlides = 7

    // --- TRUE RANDOM DATA GENERATOR ---
    const generateRandomData = () => {
        const year = Math.floor(Math.random() * (2000 - 1970 + 1)) + 1970;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        const hour = Math.floor(Math.random() * 24);
        const minute = Math.floor(Math.random() * 60);
        const cities = [
            'Chernihiv, Ukraine', 'Kyiv, Ukraine', 'London, UK', 'New York, USA', 'Tokyo, Japan', 'Paris, France',
            'Berlin, Germany', 'Rome, Italy', 'Sydney, Australia', 'Madrid, Spain',
            'Toronto, Canada', 'Warsaw, Poland', 'Dubai, UAE', 'Seoul, South Korea'
        ];
        return {
            date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
            time: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
            place: cities[Math.floor(Math.random() * cities.length)],
            gender: Math.random() > 0.5 ? 'male' : 'female'
        };
    }

    const [simData, setSimData] = useState(generateRandomData());
    const [simStatus, setSimStatus] = useState('Initializing Simulation...')
    const [iframeLoaded, setIframeLoaded] = useState(false)

    useEffect(() => {
        if (currentSlide === 5) {
            setSimData(generateRandomData());
            setDemoStep(0);
            setIframeLoaded(false); // Force reload logic
        }
    }, [currentSlide])

    // --- Message API: Send commands to Foreteller ---
    useEffect(() => {
        if (currentSlide === 5 && iframeRef.current?.contentWindow && iframeLoaded) {
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
                `📅 Entering Birth Date: ${simData.date}`,
                `🕐 Set Birth Time: ${simData.time}`,
                `📍 Location: ${simData.place}`,
                `⚧ Profile: ${simData.gender.toUpperCase()}`,
                `✨ Launching AI Cosmic Analysis...`,
                `📜 Scrolling to view full report`,
                `⬆️ Returning to top content`,
                `📄 Generating Professional PDF Export`,
                `🇩🇪 Translating to GERMAN & Re-analyzing`,
                `🇪🇸 Translating to SPANISH & Re-analyzing`,
                `🇫🇷 Translating to FRENCH & Re-analyzing`,
                `🇺🇦 Translating to UKRAINIAN & Re-analyzing`
            ];

            const send = () => {
                const commandGroup = commands[demoStep];
                if (commandGroup) {
                    setSimStatus(statusMessages[demoStep]);
                    commandGroup.forEach(cmd => {
                        iframeRef.current!.contentWindow!.postMessage({
                            type: 'PRESENTATION_COMMAND',
                            ...cmd
                        }, '*');
                    });
                }
            };

            // Reset any previous state if moving to step 0
            if (demoStep === 0) {
                iframeRef.current!.contentWindow!.postMessage({
                    type: 'PRESENTATION_COMMAND',
                    action: 'SCROLL',
                    payload: { direction: 'up' }
                }, '*');
                const timer = setTimeout(send, 1000);
                return () => clearTimeout(timer);
            } else {
                send();
            }
        }
    }, [demoStep, currentSlide, simData, iframeLoaded])

    const nextSlide = () => {
        if (currentSlide === 5) {
            if (demoStep < 11) {
                setSimData(generateRandomData()) // Generate new data for each step
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
        if (currentSlide === 5) {
            if (demoStep > 0) {
                setSimData(generateRandomData()) // Generate new data for each step
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

            {/* Language Switcher */}
            <div className="absolute top-6 right-6 z-50 flex gap-2">
                {[
                    { code: 'en', label: 'EN' },
                    { code: 'de', label: 'DE' },
                    { code: 'ua', label: 'UA' },
                    { code: 'ru', label: 'RU' }
                ].map(l => (
                    <button
                        key={l.code}
                        onClick={() => setLang(l.code as any)}
                        className={`px-3 py-1 rounded border font-bold transition-all ${lang === l.code ? 'bg-purple-600 border-purple-600 text-white shadow-lg' : 'bg-transparent border-slate-600 text-slate-400 hover:text-white'}`}
                    >
                        {l.label}
                    </button>
                ))}
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Main Content Area - ABSOLUTE FULL SCREEN */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

                {/* TOP INDICATORS */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setCurrentSlide(i);
                                setDemoStep(0);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-500 hover:opacity-80 ${i === currentSlide
                                    ? 'w-12 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                                    : 'w-4 bg-slate-700'
                                }`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">

                    {/* Slide 0: Intro */}
                    {currentSlide === 0 && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex flex-col items-center justify-center p-4 text-center"
                        >
                            <UserAvatar />
                            {/* Master Degree Badge */}
                            <div className="flex items-center gap-2 mb-4 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                                <GraduationCap className="text-purple-400" size={20} />
                                <span className="text-purple-300 text-sm font-bold tracking-wider uppercase">{t.masterDegree}</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
                                Viktor Ralchenko
                            </h1>
                            <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide max-w-4xl">
                                {t.role}
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mb-12">
                                {t.introSkills.map((skill: any) => {
                                    const Icon = skill.icon === 'Database' ? Database :
                                        skill.icon === 'Monitor' ? Monitor :
                                            skill.icon === 'Brain' ? Brain : CheckSquare;
                                    return (
                                        <div key={skill.label} className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-purple-500 transition group">
                                            <Icon className="text-purple-400 group-hover:scale-110 transition" size={24} />
                                            <span className="text-gray-300 font-bold tracking-widest text-sm">{skill.label}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-wrap gap-12 justify-center">
                                <a href="https://linkedin.com/in/victoralchenko/" target="_blank" className="bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300">
                                    <QRCode value="https://linkedin.com/in/victoralchenko/" size={140} />
                                    <div className="text-black text-[10px] font-bold mt-2 uppercase tracking-widest">{t.linkedin}</div>
                                </a>
                                <a href="https://vralchenko-portfolio.vercel.app/en" target="_blank" className="bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300">
                                    <QRCode value="https://vralchenko-portfolio.vercel.app/en" size={140} />
                                    <div className="text-black text-[10px] font-bold mt-2 uppercase tracking-widest">{t.portfolio}</div>
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 1: Foreteller Overview */}
                    {currentSlide === 1 && (
                        <motion.div
                            key="project-overview"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-4xl w-full text-center space-y-8">
                                <div className="inline-block p-4 bg-purple-500/10 rounded-3xl border border-purple-500/30 mb-4 animate-bounce">
                                    <Sparkles size={64} className="text-purple-400" />
                                </div>
                                <h2 className="text-7xl font-black text-white">{t.flagship}</h2>
                                <p className="text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                                    {t.projectDesc}
                                </p>
                                <div className="pt-8 flex flex-col items-center">
                                    <a
                                        href="https://foreteller.vercel.app/"
                                        target="_blank"
                                        className="bg-white p-4 rounded-2xl shadow-2xl hover:scale-105 transition duration-300 ring-4 ring-purple-500/20 group block relative"
                                    >
                                        <QRCode value="https://foreteller.vercel.app/" size={140} />
                                        <div className="text-black text-[11px] font-black mt-2 uppercase tracking-widest">Foreteller</div>
                                        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 2: Inner Systems */}
                    {currentSlide === 2 && (
                        <motion.div
                            key="project-systems"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-6xl w-full">
                                <h2 className="text-5xl font-bold mb-16 text-center text-purple-400">{t.systemsTitle}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:border-amber-500/50 transition hover:bg-slate-900/60">
                                        <h3 className="text-3xl font-bold text-amber-400 mb-4">🎴 {t.pythagorasTitle}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.pythagorasDesc}</p>
                                    </div>
                                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition hover:bg-slate-900/60">
                                        <h3 className="text-3xl font-bold text-blue-400 mb-4">🪐 {t.westernTitle}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.westernDesc}</p>
                                    </div>
                                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:border-red-500/50 transition hover:bg-slate-900/60">
                                        <h3 className="text-3xl font-bold text-red-400 mb-4">🐉 {t.chineseTitle}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.chineseDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 3: Capabilities */}
                    {currentSlide === 3 && (
                        <motion.div
                            key="project-capabilities"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-5xl w-full">
                                <h2 className="text-6xl font-black mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    {t.capTitle}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: t.capAnalysis, sub: "Powered by Groq Llama-4", icon: <Brain />, color: "purple" },
                                        { title: t.capPdf, sub: "High-quality vector rendering", icon: <FileText />, color: "blue" },
                                        { title: t.capAudio, sub: "Interactive Speech Synthesis", icon: <Volume2 />, color: "green" },
                                        { title: t.capLangs, sub: "Fully localized experience", icon: <Languages />, color: "yellow" }
                                    ].map((cap, i) => (
                                        <div key={i} className="flex items-center gap-6 bg-slate-800/40 p-8 rounded-3xl border border-white/10">
                                            <div className={`p-5 rounded-2xl bg-white/5 text-white`}>
                                                {cap.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{cap.title}</h3>
                                                <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">{cap.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 4: Tech Strategy */}
                    {currentSlide === 4 && (
                        <motion.div
                            key="tech-strategy"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-6xl w-full">
                                <h2 className="text-5xl font-bold mb-16 text-center">{t.techTitle}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: "React 18", desc: t.whyReact, icon: <Languages />, color: "blue" },
                                        { title: "Vite", desc: t.whyVite, icon: <Zap />, color: "yellow" },
                                        { title: "TypeScript", desc: t.whyTS, icon: <ShieldCheck />, color: "indigo" },
                                        { title: "Material UI", desc: t.whyMUI, icon: <MonitorPlay />, color: "purple" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`p-3 rounded-xl bg-white/5 text-purple-400 group-hover:scale-110 transition`}>
                                                    {item.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                            </div>
                                            <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 5: Interactive Demo */}
                    {currentSlide === 5 && (
                        <motion.div
                            key="demo"
                            className="w-full h-full flex flex-col items-center justify-center relative p-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-full h-full relative">
                                <div className="w-full h-full bg-white relative">
                                    {/* Simulation Status HUD */}
                                    {iframeLoaded && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="absolute top-[100px] left-10 z-[70] bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl min-w-[280px]"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                                                </div>
                                                <div>
                                                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Simulation Status</div>
                                                    <div className="text-white font-medium text-sm tracking-tight">
                                                        <AnimatePresence mode="wait">
                                                            <motion.span
                                                                key={simStatus}
                                                                initial={{ opacity: 0, y: -5 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 5 }}
                                                                className="block"
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
                                        ref={iframeRef}
                                        src="https://foreteller.vercel.app/"
                                        className="w-full h-full border-none"
                                        title="Foreteller Demo"
                                        onLoad={() => setIframeLoaded(true)}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {/* Slide 6: Thank You */}
                    {currentSlide === 6 && (
                        <motion.div
                            key="thank-you"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex flex-col items-center justify-center p-4 text-center"
                        >
                            <h2 className="text-6xl md:text-9xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight py-2">
                                {t.thankYou}
                            </h2>
                            <p className="text-2xl md:text-4xl text-gray-400 mb-16 italic">{t.questions}</p>

                            <div className="flex flex-wrap gap-12 justify-center">
                                <a href="https://linkedin.com/in/victoralchenko/" target="_blank" className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300">
                                    <QRCode value="https://linkedin.com/in/victoralchenko/" size={120} />
                                    <div className="text-black text-xs font-bold mt-4 uppercase tracking-widest">{t.linkedin}</div>
                                </a>
                                <a href="https://vralchenko-portfolio.vercel.app/en" target="_blank" className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300">
                                    <QRCode value="https://vralchenko-portfolio.vercel.app/en" size={120} />
                                    <div className="text-black text-xs font-bold mt-4 uppercase tracking-widest">{t.portfolio}</div>
                                </a>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* SIDE NAVIGATION BUTTONS - CENTER LEFT/RIGHT */}
                {currentSlide > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-slate-800/80 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white transition shadow-2xl"
                    >
                        <ChevronLeft size={32} />
                    </button>
                )}

                {currentSlide < totalSlides - 1 && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-slate-800/80 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white transition shadow-2xl"
                    >
                        <ChevronRight size={32} />
                    </button>
                )}
            </div>
        </div >
    )
}

export default App
