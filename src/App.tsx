import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ChevronLeft, ChevronRight, Globe, Languages, MonitorPlay, Sparkles, Zap, ShieldCheck,
    Database, Monitor, Brain, CheckSquare, FileText, Volume2, Server, Terminal, Smartphone, GraduationCap, Hash, Briefcase
} from 'lucide-react'
import QRCode from 'react-qr-code'
import './index.css'

// --- Translations ---
const translations: any = {
    en: {
        name: "Viktor Ralchenko",
        navIntro: "INTRO",
        navCareer: "CAREER COACH",
        navForeteller: "FORETELLER",
        navBizLingo: "BIZLINGO",
        navFinish: "FINISH",
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
        linkedin: "LinkedIn Profile",
        portfolio: "Portfolio",
        liveSite: "Live Site",
        scanMe: "Scan Me",
        flagship2: "BizLingo AI: Professional English",
        projectDesc2: "An intelligent application utilizing local neural networks to evaluate semantic depth of translations with real-world communication flexibility.",
        featuresTitle2: "✨ Key Features",
        feat1Title2: "Semantic AI Validation",
        feat1Desc2: "Uses local Llama-3.2-1B to analyze semantics; confirms synonyms and explains context.",
        feat2Title2: "Two-Level Verification",
        feat2Desc2: "Instant string comparison with master target, engaging AI only if no direct match is found.",
        feat3Title2: "Universal Storage & Flow",
        feat3Desc2: "Cross-platform progress via shared_preferences and smart flow with auto-advance for exact matches.",
        techTitle2: "🛠 Tech Stack",
        whyFlutter2: "Flutter & Dart: The core application engine for high-performance cross-platform UI.",
        whyWebLLM2: "WebLLM (MLC-AI): Runs neural networks directly in the browser without external APIs.",
        whyTTS2: "Flutter TTS: High-quality synthesis for auditory learning and pronunciation practice.",
        whySharedPrefs2: "SharedPreferences: Persistent local storage for streaks and learned phrases.",
        demoTitle2: "Interactive Experience",
        flagship3: "AI Career Coach 🤖💼",
        projectDesc3: "A professional tool designed to analyze the alignment between a resume and job requirements using deep AI comparison.",
        featuresTitle3: "🚀 Key Features",
        feat1Title3: "Smart Resume Analysis",
        feat1Desc3: "Deep comparison of PDF resumes with job descriptions directly from any URL.",
        feat2Title3: "Interview Roadmap",
        feat2Desc3: "Automatically generates technical questions and answers based on identified skill gaps.",
        feat3Title3: "PDF Export & SSE",
        feat3Desc3: "Real-time streaming responses and professional color-coded PDF report generation.",
        techTitle3: "🛠 Modern AI Stack",
        whyNext3: "Next.js 16: Bleeding-edge performance with Turbopack and App Router.",
        whyGroq3: "Groq (Llama 3.1): Ultra-fast inference for deep semantic matching.",
        whyPuppeteer3: "Puppeteer: Automated web scraping for job data and PDF generation.",
        whyRender3: "Render: Scalable Dockerized hosting for the complete platform.",
        openToWork: "Open to New Challenges",
        hiringNotice: "I am currently looking for a team where 20+ years of experience meets cutting-edge AI innovation. Let's build the future together!",
        badgeSSE: "Real-time SSE",
        badgeBuffering: "Smart Buffering",
        simNotice: "Live Training",
        simActive: "Simulation Active",
        careerStatusMessage: "Action Required: Click to Upload Resume",
        careerStatus1: "🔗 Entering LinkedIn Job URL:",
        careerStatus2: "📂 Action Required: Please Click to Upload Resume",
        careerStatus3: "🧠 AI Analyzing .NET Role Alignment...",
        careerStatus4: "📜 Reviewing Deep Semantic Matching",
        careerStatus5: "📊 Generating Analytics PDF Report",
        careerStatus6: "✍️ Drafting Personal Cover Letter",
        careerStatus7: "💼 Tailoring CV for specific role",
        careerStatus8: "📋 Copying Detailed Analysis to Clipboard",
        foretellerStatus1: "📅 Entering Birth Date:",
        foretellerStatus2: "🕐 Setting Birth Time:",
        foretellerStatus3: "📍 Location:",
        foretellerStatus4: "⚧ Profile:",
        foretellerStatus5: "✨ Starting Cosmic AI Analysis...",
        foretellerStatus6: "📜 Scrolling to view full report",
        foretellerStatus7: "⬆️ Returning to top content",
        foretellerStatus8: "📄 Generating Professional PDF Export",
        foretellerStatus9: "🇩🇪 Translating to GERMAN & Re-analyzing",
        foretellerStatus10: "🇪🇸 Translating to SPANISH & Re-analyzing",
        foretellerStatus11: "🇫🇷 Translating to FRENCH & Re-analyzing",
        foretellerStatus12: "🇺🇦 Translating to UKRAINIAN & Re-analyzing",
        bizStatus1: "🔤 Phrase 1:",
        bizStatus2: "✅ Exact Match - Perfect ROI",
        bizStatus3: "🔊 Listening to Native Pronunciation",
        bizStatus4: "➡️ Next Phrase",
        bizStatus5: "🔤 Phrase 2:",
        bizStatus6: "🤖 AI Semantic Analysis (Accepting Synonym)...",
        bizStatus7: "⚙️ AI is thinking (Local WebLLM Inference)...",
        bizStatus8: "📜 Reviewing Semantic Feedback",
        bizStatus9: "✍️ Entering Precise Business Terminology",
        bizStatus10: "✅ Exact Match Confirmed",
        bizStatus11: "➡️ Next Phrase",
        bizStatus12: "🔤 Phrase 3:",
        bizStatus13: "✅ Exact Match Confirmed",
        bizStatus14: "🔊 Final Pronunciation Practice",
        bizStatus15: "🏁 Completing Training Session"
    },
    de: {
        name: "Viktor Ralchenko",
        navIntro: "INTRO",
        navCareer: "KARRIERE-COACH",
        navForeteller: "WAHRSAGER",
        navBizLingo: "BUSINESS-SPRACHEN",
        navFinish: "FINISH",
        role: "Senior Software Engineer | 20+ Jahre Erfahrung",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'KI', icon: 'Brain' },
            { label: 'QA', icon: 'CheckSquare' }
        ],
        flagship: "Wahrsager: KI-Astrologie-Plattform",
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
        linkedin: "LinkedIn Profil",
        portfolio: "Portfolio",
        liveSite: "Website",
        scanMe: "Scannen",
        flagship2: "BizLingo: Business-Sprachen",
        projectDesc2: "Eine Flutter-App zum Erlernen von Business-Vokabeln mit lokaler KI-Semantik-Validierung.",
        featuresTitle2: "Intelligentes Lernsystem",
        feat1Title2: "1. Semantische KI-Validierung",
        feat1Desc2: "Nutzt Llama-3.2-1B über WebLLM, um die Bedeutung Ihrer Übersetzung zu verstehen.",
        feat2Title2: "2. Hybrid-Verifizierung",
        feat2Desc2: "Kombiniert sofortigen String-Abgleich mit tiefer neuronaler Analyse für Synonyme.",
        feat3Title2: "3. Sprache & Ausdauer",
        feat3Desc2: "Integrierte TTS für Ausspracheübungen und plattformübergreifende Synchronisierung.",
        techTitle2: "Multi-Plattform-Strategie",
        whyFlutter2: "Flutter: Hochleistungs-UI mit einer einzigen Codebasis für Web und Android.",
        whyWebLLM2: "WebLLM: Sichere, lokale Ausführung neuronaler Netze direkt im Browser.",
        whyTTS2: "Flutter TTS: Reales Hörtraining ohne Abhängigkeit von externen APIs.",
        whySharedPrefs2: "SharedPreferences: Lokale Speicherung von Lernfortschritten und Serien.",
        demoTitle2: "Interaktive Erfahrung",
        flagship3: "KI Karriere-Coach 🤖💼",
        projectDesc3: "Ein Tool zur KI-basierten Analyse von Lebensläufen und Jobanforderungen zur optimalen Vorbereitung.",
        featuresTitle3: "🚀 Hauptfunktionen",
        feat1Title3: "Intelligente Analyse",
        feat1Desc3: "Tiefgehender Vergleich von PDF-Lebensläufen mit Stellenbeschreibungen per URL.",
        feat2Title3: "Interview-Roadmap",
        feat2Desc3: "Generiert automatisch technische Fragen basierend auf identifizierten Wissenslücken.",
        feat3Title3: "PDF-Export & Streaming",
        feat3Desc3: "Echtzeit-Antworten (SSE) und professionelle, farblich gekennzeichnete PDF-Reports.",
        techTitle3: "🛠 KI-Technologie-Stack",
        whyNext3: "Next.js 16: Maximale Geschwindigkeit mit Turbopack und modernen App-Router.",
        whyGroq3: "Groq (Llama 3.1): Extrem schnelles semantisches Matching.",
        whyPuppeteer3: "Puppeteer: Automatisiertes Web-Scraping und PDF-Erstellung.",
        whyRender3: "Render: Skalierbares Docker-Hosting für die gesamte Plattform.",
        openToWork: "Offen für neue Herausforderungen",
        hiringNotice: "Ich suche derzeit nach einem Team, in dem 20+ Jahre Erfahrung auf modernste KI-Innovation treffen. Lassen Sie uns gemeinsam die Zukunft gestalten!",
        badgeSSE: "Echtzeit-SSE",
        badgeBuffering: "Intelligente Pufferung",
        simNotice: "Live-Training",
        simActive: "Simulation Aktiv",
        careerSim: "Karriere-Simulation",
        connecting: "Verbindung zur KI-Engine...",
        careerStatusMessage: "Aktion erforderlich: Klicken zum Hochladen",
        careerStatus1: "🔗 Eingabe der LinkedIn Job-URL:",
        careerStatus2: "📂 Aktion erforderlich: Lebenslauf hochladen",
        careerStatus3: "🧠 KI analysiert .NET Rollenanpassung...",
        careerStatus4: "📜 Überprüfung des semantischen Abgleichs",
        careerStatus5: "📊 Erstellung des PDF-Berichts",
        careerStatus6: "✍️ Entwurf eines persönlichen Anschreibens",
        careerStatus7: "💼 Anpassung des Lebenslaufs an die Rolle",
        careerStatus8: "📋 Analysebericht in die Zwischenablage kopieren",
        foretellerStatus1: "📅 Eingabe des Geburtsdatums:",
        foretellerStatus2: "🕐 Einstellen der Geburtszeit:",
        foretellerStatus3: "📍 Standort:",
        foretellerStatus4: "⚧ Profil:",
        foretellerStatus5: "✨ Start der kosmischen KI-Analyse...",
        foretellerStatus6: "📜 Scrollen zum vollständigen Bericht",
        foretellerStatus7: "⬆️ Zurück nach oben",
        foretellerStatus8: "📄 Erstellung des PDF-Exports",
        foretellerStatus9: "🇩🇪 Übersetzung ins DEUTSCHE...",
        foretellerStatus10: "🇪🇸 Übersetzung ins SPANISCHE...",
        foretellerStatus11: "🇫🇷 Übersetzung ins FRANZÖSISCHE...",
        foretellerStatus12: "🇺🇦 Übersetzung ins UKRAINISCHE...",
        bizStatus1: "🔤 Satz 1:",
        bizStatus2: "✅ Exakte Übereinstimmung - Perfekt",
        bizStatus3: "🔊 Hören der nativen Aussprache",
        bizStatus4: "➡️ Nächster Satz",
        bizStatus5: "🔤 Satz 2:",
        bizStatus6: "🤖 Semantische KI-Analyse...",
        bizStatus7: "⚙️ KI denkt nach (Lokales WebLLM)...",
        bizStatus8: "📜 Überprüfung des Feedbacks",
        bizStatus9: "✍️ Eingabe präziser Fachbegriffe",
        bizStatus10: "✅ Exakte Übereinstimmung bestätigt",
        bizStatus11: "➡️ Nächster Satz",
        bizStatus12: "🔤 Satz 3:",
        bizStatus13: "✅ Exakte Übereinstimmung bestätigt",
        bizStatus14: "🔊 Abschließendes Aussprachetraining",
        bizStatus15: "🏁 Trainingssitzung abgeschlossen"
    },
    ru: {
        name: "Виктор Ральченко",
        navIntro: "ИНТРО",
        navCareer: "КАРЬЕРНЫЙ КОУЧ",
        navForeteller: "ПРЕДСКАЗАТЕЛЬ",
        navBizLingo: "БИЗНЕС-ЯЗЫКИ",
        navFinish: "ФИНИШ",
        role: "Senior Software Engineer | 20+ лет опыта",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'AI / ИИ', icon: 'Brain' },
            { label: 'QA / Автоматизация', icon: 'CheckSquare' }
        ],
        flagship: "Предсказатель: Астрологическая ИИ-платформа",
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
        linkedin: "Профиль LinkedIn",
        portfolio: "Портфолио",
        liveSite: "Сайт",
        scanMe: "Сканируй",
        flagship2: "BizLingo: Бизнес-английский",
        projectDesc2: "Интеллектуальное Flutter-приложение для изучения бизнес-лексики с локальной ИИ-валидацией.",
        featuresTitle2: "Система умного обучения",
        feat1Title2: "1. Семантическая ИИ-проверка",
        feat1Desc2: "Использует Llama-3.2-1B через WebLLM для анализа смысла перевода и синонимов.",
        feat2Title2: "2. Гибридная верификация",
        feat2Desc2: "Мгновенное текстовое сравнение и глубокий анализ ИИ для сложных фраз.",
        feat3Title2: "3. Голос и Прогресс",
        feat3Desc2: "Встроенный TTS для тренировки произношения и сохранение серии занятий.",
        techTitle2: "Мультиплатформенный стек",
        whyFlutter2: "Flutter: Высокопроизводительный UI с единым кодом для Web и Android.",
        whyWebLLM2: "WebLLM: Приватное выполнение нейросети прямо в браузере без внешних API.",
        whyTTS2: "Flutter TTS: Обучение на слух в реальном времени с нулевыми затратами.",
        whySharedPrefs2: "SharedPreferences: Локальное хранилище для истории изучения и достижений.",
        demoTitle2: "Интерактивная тренировка",
        flagship3: "ИИ Карьерный Коуч 🤖💼",
        projectDesc3: "Профессиональный инструмент для анализа соответствия резюме требованиям вакансии с помощью ИИ.",
        featuresTitle3: "🚀 Ключевые функции",
        feat1Title3: "Умный анализ",
        feat1Desc3: "Глубокое сравнение PDF-резюме с описанием вакансии напрямую по ссылке.",
        feat2Title3: "Дорожная карта интервью",
        feat2Desc3: "Автоматическая генерация технических вопросов на основе выявленных пробелов в навыках.",
        feat3Title3: "Экспорт в PDF и SSE",
        feat3Desc3: "Стриминг ответов в реальном времени и генерация стильных PDF-отчетов.",
        techTitle3: "🛠 Современный ИИ-стек",
        whyNext3: "Next.js 16: Максимальная производительность с Turbopack и App Router.",
        whyGroq3: "Groq (Llama 3.1): Мгновенная семантическая проверка через API.",
        whyPuppeteer3: "Puppeteer: Автоматический парсинг вакансий и генерация PDF.",
        whyRender3: "Render: Масштабируемый Docker-хостинг для всей платформы.",
        openToWork: "Открыт для новых вызовов",
        hiringNotice: "В данный момент я ищу команду, где мой 20-летний опыт встретится с инновациями в сфере ИИ. Давайте создавать будущее вместе!",
        badgeSSE: "SSE в реальном времени",
        badgeBuffering: "Умная буферизация",
        simNotice: "Живое обучение",
        simActive: "Симуляция активна",
        careerSim: "Симуляция карьеры",
        connecting: "Подключение к ИИ-движку...",
        careerStatusMessage: "Нужное действие: Нажмите для загрузки",
        careerStatus1: "🔗 Ввод URL вакансии LinkedIn:",
        careerStatus2: "📂 Действие: Нажмите для загрузки резюме",
        careerStatus3: "🧠 ИИ анализирует соответствие роли .NET...",
        careerStatus4: "📜 Глубокая семантическая проверка...",
        careerStatus5: "📊 Генерация аналитического PDF-отчета...",
        careerStatus6: "✍️ Составление сопроводительного письма...",
        careerStatus7: "💼 Адаптация CV под конкретную роль...",
        careerStatus8: "📋 Копирование детального анализа в буфер",
        foretellerStatus1: "📅 Ввод даты рождения:",
        foretellerStatus2: "🕐 Установка времени рождения:",
        foretellerStatus3: "📍 Местоположение:",
        foretellerStatus4: "⚧ Профиль:",
        foretellerStatus5: "✨ Запуск ИИ-анализа судьбы...",
        foretellerStatus6: "📜 Прокрутка отчета...",
        foretellerStatus7: "⬆️ Возврат в начало...",
        foretellerStatus8: "📄 Экспорт в профессиональный PDF...",
        foretellerStatus9: "🇩🇪 Перевод на НЕМЕЦКИЙ...",
        foretellerStatus10: "🇪🇸 Перевод на ИСПАНСКИЙ...",
        foretellerStatus11: "🇫🇷 Перевод на ФРАНЦУЗСКИЙ...",
        foretellerStatus12: "🇺🇦 Перевод на УКРАИНСКИЙ...",
        bizStatus1: "🔤 Фраза 1:",
        bizStatus2: "✅ Точное совпадение",
        bizStatus3: "🔊 Прослушивание произношения",
        bizStatus4: "➡️ Следующая фраза",
        bizStatus5: "🔤 Фраза 2:",
        bizStatus6: "🤖 Семантический анализ ИИ...",
        bizStatus7: "⚙️ ИИ думает (Локальная нейросеть)...",
        bizStatus8: "📜 Проверка обратной связи",
        bizStatus9: "✍️ Ввод точной бизнес-лексики",
        bizStatus10: "✅ Точное совпадение подтверждено",
        bizStatus11: "➡️ Следующая фраза",
        bizStatus12: "🔤 Фраза 3:",
        bizStatus13: "✅ Точное совпадение подтверждено",
        bizStatus14: "🔊 Финальная тренировка произношения",
        bizStatus15: "🏁 Сессия завершена"
    },
    ua: {
        name: "Віктор Ральченко",
        navIntro: "ІНТРО",
        navCareer: "КАР'ЄРНИЙ КОУЧ",
        navForeteller: "ПРОВІСНИК",
        navBizLingo: "БІЗНЕС-МОВИ",
        navFinish: "ФІНІШ",
        role: "Senior Software Engineer | 20+ років досвіду",
        introSkills: [
            { label: 'BACKEND', icon: 'Database' },
            { label: 'FRONTEND', icon: 'Monitor' },
            { label: 'AI / ШІ', icon: 'Brain' },
            { label: 'QA / Автоматизація', icon: 'CheckSquare' }
        ],
        flagship: "Провісник: Астрологічна ШІ-платформа",
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
        linkedin: "Профіль LinkedIn",
        portfolio: "Портфоліо",
        liveSite: "Сайт",
        scanMe: "Скануй",
        flagship2: "BizLingo: Бізнес-англійська",
        projectDesc2: "Інтелектуальний Flutter-додаток для вивчення бізнес-лексики з локальною ШІ-валідацією.",
        featuresTitle2: "Система розумного навчання",
        feat1Title2: "1. Семантична ШІ-перевірка",
        feat1Desc2: "Використовує Llama-3.2-1B через WebLLM для аналізу змісту перекладу та синонімів.",
        feat2Title2: "2. Гібридна верифікація",
        feat2Desc2: "Миттєве текстове порівняння та глибокий аналіз ШІ для складних фраз.",
        feat3Title2: "3. Голос та Прогрес",
        feat3Desc2: "Вбудований TTS для тренування вимови та збереження серії занять.",
        techTitle2: "Мультиплатформний стек",
        whyFlutter2: "Flutter: Високопродуктивний UI з єдиним кодом для Web та Android.",
        whyWebLLM2: "WebLLM: Приватне виконання нейромережі прямо у браузері без зовнішніх API.",
        whyTTS2: "Flutter TTS: Навчання на слух у реальному часі з нульовими витратами.",
        whySharedPrefs2: "SharedPreferences: Локальне сховище для історії вивчення та досягнень.",
        demoTitle2: "Інтерактивне тренування",
        flagship3: "ШІ Кар'єрний Коуч 🤖💼",
        projectDesc3: "Професійний інструмент для аналізу відповідності резюме вимогам вакансії за допомогою ШІ.",
        featuresTitle3: "🚀 Ключові функції",
        feat1Title3: "Розумний аналіз",
        feat1Desc3: "Глибоке порівняння PDF-резюме з описом вакансії напряму за посиланням.",
        feat2Title3: "Дорожня карта інтерв'ю",
        feat2Desc3: "Автоматична генерація технічних питань на основі виявлених прогалин у навичках.",
        feat3Title3: "Експорт у PDF та SSE",
        feat3Desc3: "Стрімінг відповідей у реальному часі та генерація стильних PDF-звітів.",
        techTitle3: "🛠 Сучасний ШІ-стек",
        whyNext3: "Next.js 16: Максимальна продуктивність з Turbopack та App Router.",
        whyGroq3: "Groq (Llama 3.1): Миттєва семантична перевірка через API.",
        whyPuppeteer3: "Puppeteer: Автоматичний парсинг вакансій та генерація PDF.",
        whyRender3: "Render: Масштабований Docker-хостинг для всієї платформи.",
        openToWork: "Відкритий для нових викликів",
        hiringNotice: "Наразі я шукаю команду, де мій 20-річний досвід зустрінеться з інноваціями у сфері ШІ. Давайте створювати майбутнє разом!",
        badgeSSE: "SSE в реальному часі",
        badgeBuffering: "Розумна буферизація",
        simNotice: "Живе навчання",
        simActive: "Симуляція активна",
        careerSim: "Симуляція кар'єри",
        connecting: "Підключення до ШІ-двигуна...",
        careerStatusMessage: "Потрібна дія: Натисніть для завантаження",
        careerStatus1: "🔗 Введення URL вакансії LinkedIn:",
        careerStatus2: "📂 Дія: Натисніть для завантаження резюме",
        careerStatus3: "🧠 ШІ аналізує відповідність ролі .NET...",
        careerStatus4: "📜 Перегляд глибокого семантичного зіставлення",
        careerStatus5: "📊 Генерація аналітичного PDF-звіту",
        careerStatus6: "✍️ Складання персонального супровідного листа",
        careerStatus7: "💼 Адаптація резюме під конкретну роль",
        careerStatus8: "📋 Копіювання детального аналізу в буфер",
        foretellerStatus1: "📅 Введення дати народження:",
        foretellerStatus2: "🕐 Встановлення часу народження:",
        foretellerStatus3: "📍 Місцезнаходження:",
        foretellerStatus4: "⚧ Профіль:",
        foretellerStatus5: "✨ Запуск космічного аналізу ШІ...",
        foretellerStatus6: "📜 Прокрутка для перегляду повного звіту",
        foretellerStatus7: "⬆️ Повернення до верхнього вмісту",
        foretellerStatus8: "📄 Генерація професійного PDF-експорту",
        foretellerStatus9: "🇩🇪 Переклад на НІМЕЦЬКУ та повторний аналіз",
        foretellerStatus10: "🇪🇸 Переклад на ІСПАНСЬКУ та повторний аналіз",
        foretellerStatus11: "🇫🇷 Переклад на ФРАНЦУЗЬКУ та повторний аналіз",
        foretellerStatus12: "🇺🇦 Переклад на УКРАЇНСЬКУ та повторний аналіз"
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
    const totalSlides = 17

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

    const generateBizLingoData = () => {
        return {
            p1: {
                source: "Использование машинного обучения поможет нам предсказывать поведение пользователей.",
                exact: "Using machine learning will help us predict user behavior."
            },
            p2: {
                source: "Интеграция ИИ в наш рабочий процесс позволит автоматизировать рутинные задачи кодирования.",
                approx: "Integration AI in our work process will let us to automate routine tasks of coding.",
                exact: "Integrating AI into our workflow will automate routine coding tasks."
            },
            p3: {
                source: "Нам следует изучить возможности больших языковых моделей для улучшения поддержки клиентов.",
                exact: "We should explore LLM capabilities to improve customer support."
            }
        };
    }

    const generateCareerCoachData = () => {
        const jobs = [
            'https://www.linkedin.com/jobs/view/4372746415',
            'https://www.linkedin.com/jobs/view/4323227240',
            'https://www.linkedin.com/jobs/view/4365572854',
            'https://www.linkedin.com/jobs/view/4326454749'
        ];
        return {
            jobUrl: jobs[Math.floor(Math.random() * jobs.length)]
        };
    }

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
            setBizSimData(generateBizLingoData());
            setDemoStep(0);
            setBizIframeLoaded(false);
            setBizSimStarted(false);
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
                    typingSound.volume = 0.6;

                    for (const cmd of commandGroup) {
                        if (cmd.action === 'FILL_FIELD' && 'value' in (cmd.payload || {})) {
                            const text = (cmd.payload as any).value as string;
                            for (let i = 1; i <= text.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 20 + Math.random() * 30));
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
                    typingSound.volume = 0.6;

                    for (const cmd of commandGroup) {
                        if (cmd.action === 'FILL_FIELD' && 'value' in (cmd.payload || {})) {
                            const text = (cmd.payload as any).value as string;
                            for (let i = 1; i <= text.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 40));

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
                const timer = setTimeout(send, 3000); // Wait 3s for safe load
                return () => clearTimeout(timer);
            } else {
                send();
            }
        }

        if (currentSlide === 15 && bizIframeRef.current?.contentWindow && bizIframeLoaded) {
            const commands = [
                // Phrase 1: Exact Match
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p1.exact } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'check' } }, { action: 'SUBMIT' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'speaker' } }, { action: 'TOGGLE_AUDIO' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'next' } }, { action: 'NEXT' }],
                // Phrase 2: Approx -> Exact
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p2.approx } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'check' } }, { action: 'SUBMIT' }],
                [{ action: 'SCROLL', payload: { direction: 'down', value: 300 } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'speaker' } }, { action: 'TOGGLE_AUDIO' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p2.exact } }],
                [{ action: 'SUBMIT' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'next' } }, { action: 'NEXT' }],
                // Phrase 3: Exact Match
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'input' } }, { action: 'FILL_FIELD', payload: { name: 'input', value: bizSimData.p3.exact } }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'check' } }, { action: 'SUBMIT' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'speaker' } }, { action: 'TOGGLE_AUDIO' }],
                [{ action: 'HIGHLIGHT_FIELD', payload: { name: 'next' } }, { action: 'NEXT' }]
            ];

            const statusMessages = [
                `${t.bizStatus1} "${bizSimData.p1.source}"`,
                t.bizStatus2,
                t.bizStatus3,
                t.bizStatus4,
                `${t.bizStatus5} "${bizSimData.p2.source}"`,
                t.bizStatus6,
                t.bizStatus7,
                t.bizStatus8,
                t.bizStatus9,
                t.bizStatus10,
                t.bizStatus11,
                `${t.bizStatus12} "${bizSimData.p3.source}"`,
                t.bizStatus13,
                t.bizStatus14,
                t.bizStatus15
            ];

            const send = async () => {
                const commandGroup = commands[demoStep];
                if (commandGroup) {
                    setSimStatus(statusMessages[demoStep]);

                    const typingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
                    typingSound.volume = 0.6;

                    for (const cmd of commandGroup) {
                        if (cmd.action === 'FILL_FIELD' && 'value' in (cmd.payload || {})) {
                            const text = (cmd.payload as any).value as string;
                            // Simulate human typing
                            for (let i = 1; i <= text.length; i++) {
                                await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 50));

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
            };

            if (demoStep === 0) {
                const timer = setTimeout(() => {
                    setBizSimStarted(true);
                    send();
                }, 1000); // Now instant with Groq AI
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
            if (demoStep < 12) {
                setSimData(generateRandomData())
                setDemoStep(prev => prev + 1)
                return
            }
        }
        if (currentSlide === 15) {
            if (demoStep < 14) {
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

                {/* TOP INDICATORS - GROUPED BY PROJECT */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-8 z-50 items-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/5 shadow-2xl">
                    {[
                        { label: t.navIntro, range: [0, 0] },
                        { label: t.navCareer, range: [1, 5] },
                        { label: t.navForeteller, range: [6, 10] },
                        { label: t.navBizLingo, range: [11, 15] },
                        { label: t.navFinish, range: [16, 16] }
                    ].map((group) => (
                        <div key={group.label} className="flex flex-col items-center gap-2">
                            <span className={`text-[8px] font-black tracking-[0.2em] transition-colors ${currentSlide >= group.range[0] && currentSlide <= group.range[1]
                                ? 'text-purple-400'
                                : 'text-slate-600'
                                }`}>
                                {group.label}
                            </span>
                            <div className="flex gap-1.5">
                                {Array.from({ length: group.range[1] - group.range[0] + 1 }).map((_, idx) => {
                                    const slideIdx = group.range[0] + idx;
                                    const isActive = slideIdx === currentSlide;
                                    return (
                                        <button
                                            key={slideIdx}
                                            onClick={() => {
                                                setCurrentSlide(slideIdx);
                                                setDemoStep(0);
                                            }}
                                            className={`h-1.5 rounded-full transition-all duration-500 hover:opacity-80 ${isActive
                                                ? 'w-6 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                                                : 'w-2 bg-slate-700'
                                                }`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
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

                            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl px-4">
                                {t.name}
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

                    {/* Slide 1: AI Career Coach Overview */}
                    {currentSlide === 1 && (
                        <motion.div
                            key="career-overview"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-6xl flex flex-col md:flex-row items-center gap-16">
                                <div className="flex-1 text-left">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-4 bg-purple-500 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                                            <Briefcase className="text-white" size={40} />
                                        </div>
                                        <h2 className="text-6xl font-black tracking-tight">{t.flagship3}</h2>
                                    </div>
                                    <p className="text-3xl text-gray-300 leading-relaxed font-light mb-10">
                                        {t.projectDesc3}
                                    </p>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://ai-career-coach-production-f43f.up.railway.app/"
                                            target="_blank"
                                            className="bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center hover:scale-105 transition duration-300 group"
                                        >
                                            <QRCode value="https://ai-career-coach-production-f43f.up.railway.app/" size={140} />
                                            <div className="text-black text-[10px] font-bold mt-2 uppercase tracking-widest">{t.navCareer}</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex-1 relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop"
                                            alt="Career Coach UI"
                                            className="w-full h-auto opacity-80 group-hover:scale-105 transition duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 2: AI Career Coach Features */}
                    {currentSlide === 2 && (
                        <motion.div
                            key="career-features"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-6xl w-full">
                                <h2 className="text-5xl font-black mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                                    {t.featuresTitle3}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition shadow-xl">
                                        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                                            <Brain size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{t.feat1Title3}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat1Desc3}</p>
                                    </div>
                                    <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition shadow-xl">
                                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                                            <Sparkles size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{t.feat2Title3}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat2Desc3}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 3: AI Career Coach Capabilities */}
                    {currentSlide === 3 && (
                        <motion.div
                            key="career-caps"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-5xl w-full text-center">
                                <h2 className="text-6xl font-black mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                                    {t.feat3Title3}
                                </h2>
                                <div className="bg-slate-800/20 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition duration-500">
                                        <FileText size={160} />
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center mb-8 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                                            <Zap size={48} />
                                        </div>
                                        <p className="text-3xl text-gray-200 font-light leading-snug max-w-2xl mb-8">
                                            {t.feat3Desc3}
                                        </p>
                                        <div className="flex gap-4">
                                            <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase">{t.badgeSSE}</span>
                                            <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase">{t.badgeBuffering}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 4: AI Career Coach Tech Stack */}
                    {currentSlide === 4 && (
                        <motion.div
                            key="career-tech"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-6xl w-full">
                                <h2 className="text-5xl font-black mb-16 text-center">{t.techTitle3}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Next.js 16", desc: t.whyNext3, icon: <Monitor />, color: "black" },
                                        { title: "Groq Llama 3.1", desc: t.whyGroq3, icon: <Brain />, color: "orange" },
                                        { title: "Puppeteer", desc: t.whyPuppeteer3, icon: <Terminal />, color: "green" },
                                        { title: "Render (Docker)", desc: t.whyRender3, icon: <Server />, color: "blue" }
                                    ].map((tech, i) => (
                                        <div key={i} className="flex gap-6 bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 hover:bg-slate-900/80 transition group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                                                {tech.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold text-white mb-2">{tech.title}</h4>
                                                <p className="text-gray-400 leading-relaxed text-sm">{tech.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 5: AI Career Coach Demo */}
                    {currentSlide === 5 && (
                        <motion.div
                            key="career-demo"
                            className="w-full h-full flex flex-col items-center justify-center relative p-0 bg-black"
                        >
                            <div className="w-[85%] h-[calc(100%-100px)] relative">
                                <div className="w-full h-full bg-[#0a0a0a] relative rounded-2xl overflow-hidden shadow-2xl mt-12 border border-white/10">
                                    {/* Simulation Status HUD */}
                                    {careerSimStarted && (
                                        <motion.div
                                            drag
                                            dragMomentum={false}
                                            initial={{ opacity: 0, x: 20, y: 20 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute top-10 left-10 z-[110] bg-slate-800/90 backdrop-blur-2xl border border-white/40 rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-w-[300px] cursor-move active:cursor-grabbing group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em]">{t.careerSim}</div>
                                                        <div className="w-4 h-1 bg-white/10 rounded-full"></div>
                                                    </div>
                                                    <div className="text-white font-semibold text-base leading-tight">
                                                        <AnimatePresence mode="wait">
                                                            <motion.span
                                                                key={simStatus}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: 10 }}
                                                                className="block text-sm"
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
                    )}

                    {/* Slide 6: Foreteller Overview */}
                    {currentSlide === 6 && (
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
                                        <div className="text-black text-[11px] font-black mt-2 uppercase tracking-widest">{t.navForeteller}</div>
                                        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 7: Inner Systems */}
                    {currentSlide === 7 && (
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

                    {/* Slide 8: Capabilities */}
                    {currentSlide === 8 && (
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

                    {/* Slide 9: Tech Strategy */}
                    {currentSlide === 9 && (
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

                    {/* Slide 10: Interactive Demo */}
                    {currentSlide === 10 && (
                        <motion.div
                            key="demo"
                            className="w-full h-full flex flex-col items-center justify-center relative p-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-[85%] h-[calc(100%-100px)] relative">
                                <div className="w-full h-full bg-white relative rounded-2xl overflow-hidden shadow-2xl mt-12">
                                    {/* Simulation Status HUD */}
                                    {iframeLoaded && (
                                        <motion.div
                                            drag
                                            dragMomentum={false}
                                            initial={{ opacity: 0, x: 20, y: 20 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute top-10 left-10 z-[110] bg-slate-800/90 backdrop-blur-2xl border border-white/40 rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-w-[300px] cursor-move active:cursor-grabbing group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em]">{t.simActive}</div>
                                                        <div className="w-4 h-1 bg-white/10 rounded-full"></div>
                                                    </div>
                                                    <div className="text-white font-semibold text-base leading-tight">
                                                        <AnimatePresence mode="wait">
                                                            <motion.span
                                                                key={simStatus}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: 10 }}
                                                                className="block"
                                                            >
                                                                {simStatus}
                                                            </motion.span>
                                                        </AnimatePresence>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute -top-2 -left-2 w-4 h-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Zap size={12} />
                                            </div>
                                        </motion.div>
                                    )}

                                    <iframe
                                        ref={iframeRef}
                                        src="https://foreteller.vercel.app/"
                                        className="w-full h-full border-none"
                                        title="Foreteller Demo"
                                        onLoad={() => setIframeLoaded(true)}
                                        allow="clipboard-write"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 11: BizLingo Overview */}
                    {currentSlide === 11 && (
                        <motion.div
                            key="biz-overview"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-4xl w-full text-center space-y-8">
                                <div className="inline-block p-4 bg-blue-500/10 rounded-3xl border border-blue-500/30 mb-4 animate-pulse">
                                    <Smartphone size={64} className="text-blue-400" />
                                </div>
                                <h2 className="text-7xl font-black text-white">{t.flagship2}</h2>
                                <p className="text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                                    {t.projectDesc2}
                                </p>
                                <div className="pt-8 flex flex-col items-center">
                                    <a
                                        href="https://biz-lingo-chi.vercel.app/"
                                        target="_blank"
                                        className="bg-white p-4 rounded-2xl shadow-2xl hover:scale-105 transition duration-300 ring-4 ring-blue-500/20 group block relative"
                                    >
                                        <QRCode value="https://biz-lingo-chi.vercel.app/" size={140} />
                                        <div className="text-black text-[11px] font-black mt-2 uppercase tracking-widest">{t.navBizLingo}</div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 12: BizLingo AI Features */}
                    {currentSlide === 12 && (
                        <motion.div
                            key="biz-features"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-5xl w-full">
                                <h2 className="text-5xl font-bold mb-16 text-center text-blue-400">{t.featuresTitle2}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
                                        <h3 className="text-3xl font-bold text-blue-400 mb-4">🧠 {t.feat1Title2}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat1Desc2}</p>
                                    </div>
                                    <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
                                        <h3 className="text-3xl font-bold text-cyan-400 mb-4">⚖️ {t.feat2Title2}</h3>
                                        <p className="text-xl text-gray-400 leading-relaxed">{t.feat2Desc2}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Slide 13: BizLingo Smart Flow */}
                    {currentSlide === 13 && (
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
                    )}

                    {/* Slide 14: BizLingo Tech Stack */}
                    {currentSlide === 14 && (
                        <motion.div
                            key="biz-tech"
                            className="w-full h-full flex flex-col items-center justify-center p-8"
                        >
                            <div className="max-w-6xl w-full">
                                <h2 className="text-5xl font-bold mb-16 text-center">{t.techTitle2}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Flutter", desc: t.whyFlutter2, icon: <Smartphone />, color: "blue" },
                                        { title: "Groq AI", desc: t.whyWebLLM2, icon: <Brain />, color: "purple" },
                                        { title: "Flutter TTS", desc: t.whyTTS2, icon: <Volume2 />, color: "yellow" },
                                        { title: "SharedPreferences", desc: t.whySharedPrefs2, icon: <Hash />, color: "green" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 transition">
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

                    {/* Slide 15: BizLingo Demo */}
                    {currentSlide === 15 && (
                        <motion.div
                            key="biz-demo"
                            className="w-full h-full flex flex-col items-center justify-end relative p-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-[85%] h-[calc(100%-100px)] relative">
                                <div className="w-full h-full bg-[#001B3D] relative rounded-t-[40px] overflow-hidden border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                                    {bizIframeLoaded && bizSimStarted && (
                                        <motion.div
                                            drag
                                            dragMomentum={false}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="absolute top-10 left-10 z-[110] bg-slate-800/90 backdrop-blur-2xl border border-white/40 rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] min-w-[300px] cursor-move active:cursor-grabbing group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">{t.simNotice}</div>
                                                        <div className="w-4 h-1 bg-white/10 rounded-full"></div>
                                                    </div>
                                                    <div className="text-white font-semibold text-base leading-tight">
                                                        <AnimatePresence mode="wait">
                                                            <motion.span
                                                                key={simStatus}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: 10 }}
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
                    )}

                    {/* Slide 16: Thank You */}
                    {currentSlide === 16 && (
                        <motion.div
                            key="thank-you"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex flex-col items-center justify-center p-4 text-center"
                        >
                            <h2 className="text-6xl md:text-9xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight py-2 leading-none">
                                {t.thankYou}
                            </h2>
                            <p className="text-2xl md:text-4xl text-gray-400 mb-8 italic">{t.questions}</p>

                            <div className="mb-12 flex flex-col items-center">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full mb-6 flex items-center gap-3"
                                >
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                                    <span className="text-emerald-400 font-black tracking-widest uppercase text-sm">{t.openToWork}</span>
                                </motion.div>
                                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
                                    {t.hiringNotice}
                                </p>
                            </div>

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
                        className="absolute left-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full bg-slate-800/80 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white transition shadow-2xl"
                    >
                        <ChevronLeft size={32} />
                    </button>
                )}

                {currentSlide < totalSlides - 1 && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-8 top-1/2 -translate-y-1/2 z-[100] p-4 rounded-full bg-slate-800/80 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white transition shadow-2xl"
                    >
                        <ChevronRight size={32} />
                    </button>
                )}
            </div>
        </div >
    )
}

export default App
