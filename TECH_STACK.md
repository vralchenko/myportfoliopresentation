# 🛠️ Presentation Technical Stack

This document outlines the engineering decisions and technologies used to build this interactive presentation environment.

---

### 💻 Core & UI (Frontend Architecture)
*   **React + TypeScript**: The backbone of the application, ensuring architectural stability and type-safe component development.
*   **Tailwind CSS**: Used to craft the premium **Glassmorphism** visual style (semi-transparent frosted glass, vibrant gradients, and backdrop blurs).
*   **Lucide React**: High-quality vector icons used for consistent and intuitive navigation across the deck.

### 🎭 Animation & Visual Effects (Motion Design)
*   **Framer Motion**: The primary engine for the presentation's "living" feel.
    *   **Orchestration**: Managing complex sequences, such as the digital "flight" of numbers into the Psychomatrix cells.
    *   **AnimatePresence**: Handling smooth transitions between slides and ensuring text descriptions fade in and out gracefully.
    *   **Smart Layouts**: Handling real-time resizing and hover effects without layout jumps.

### 🎶 Audio Engine (Sound Design)
*   **Custom Audio Manager**: A native React implementation using `useRef` and `useEffect` to manage global sound states and persistence across slides.
*   **Volume Cross-fading**: Programmatic implementation of **Fade-In/Fade-Out** logic, allowing music to transition smoothly when switching project sections.
*   **Dynamic Soundscapes**: Integration of stable Audio CDNs (SoundHelix) to deliver atmospheric ambient tracks without latency.

### 🤖 Interactive Simulations (Active Demo Logic)
*   **PostMessage API**: Used for cross-document communication. This allows the presentation platform to "pilot" the project applications inside `iframes` (autofilling forms, scrolling, and triggering state changes).
*   **Deterministic Simulation Generators**: Custom JavaScript algorithms that generate realistic, randomized data in real-time for variety during every demo session.

### 🌍 Infrastructure & Localization
*   **Context-based Translation System**: A custom-built localization engine supporting 4 languages (EN, DE, UA, RU) with instant hot-swapping.
*   **Vite**: For ultra-fast development builds and optimized production performance with hot module replacement (HMR).

---

> **Note**: This presentation is built not as a set of static slides, but as a **functional software environment** designed to demonstrate Senior-level engineering capabilities, UI/UX attention to detail, and modern AI integration patterns.
