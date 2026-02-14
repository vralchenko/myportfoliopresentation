# Interactive Portfolio Presentation 🚀

A high-performance, visually stunning interactive presentation built with **React 18**, **Vite**, and **Framer Motion**. This project serves as a dynamic portfolio showcasing flagship applications with live simulations.

## ✨ Key Features

-   **Dual-Project Presentation**: Showcases both **Foreteller** (AI Astrology) and **BizLingo AI** (Business English Learning).
-   **Live Site Simulations**: Uses an iframe-based messaging API to simulate user interactions (form filling, scrolling, analysis) directly within the slides.
-   **Multi-language Support**: Fully localized in **English**, **German**, **Russian**, and **Ukrainian**.
-   **Premium Aesthetics**: Modern UI with glassmorphism, vibrant gradients, and smooth micro-animations.
-   **Responsive Navigation**: Supports keyboard arrows, side buttons, and top progress indicators.

## 🛠 Tech Stack

-   **Framework**: [React 18](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **PDF/QR**: `react-qr-code`

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vralchenko/MyPortfolioPresentation.git
    cd MyPortfolioPresentation
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## 🔌 API Integration (Simulations)

The presentation interacts with hosted applications via `window.postMessage`. To enable simulations, the target site must listen for `PRESENTATION_COMMAND` messages.

### Supported Commands:
- `FILL_FIELD`: Autofills input fields.
- `HIGHLIGHT_FIELD`: Focuses and highlights specific UI elements.
- `SUBMIT`: Triggers form submission.
- `SCROLL`: Animates page scrolling.
- `SET_LANGUAGE`: Synchronizes site language with presentation.

---
© 2025-2026 Viktor Ralchenko. Licensed under MIT.
