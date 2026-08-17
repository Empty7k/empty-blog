# Empty's Brain
> A personal digital archive and blog infused with nostalgic Web 2.0 aesthetics.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black&style=flat-square)
![NodeJS](https://img.shields.io/badge/Node.js-Runtime-339933?logo=nodedotjs&logoColor=white&style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?logo=html5&logoColor=white&style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?logo=css3&logoColor=white&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=flat-square)

---

## 🌌 Project Vision & Concept

**Empty's Brain** is a personal digital space deeply inspired by early 2000s/2010s web culture, Web 2.0, Frutiger Aero, and the charming chaos of classic Neocities pages. 

Moving away from the hyper-minimalist, sanitized corporate web templates of today, this project prioritizes personality, custom aesthetic expression, and retro-futuristic charm. It serves as a creative portfolio, a media showcase, and a personal journal—all wrapped in glossy gel buttons, tactile interfaces, and nostalgic layouts that make browsing feel like an exploration.

---

## ✨ Key Features & UI Highlights

- **Authentic Era-Aesthetics:** Combines Frutiger Aero glassmorphism with Web 2.0 gradients and drop shadows.
- **Glossy Navigation:** Custom-built, tactile "jelly" purple navigation buttons featuring complex linear gradients, inner highlights, and interactive active/pressed states.
- **Dynamic Marquee Tickers:** Hardware-accelerated CSS marquee banners providing a nostalgic but performant site status feed.
- **Glassmorphic Panels:** Content is wrapped in frosted glass (`backdrop-filter`) containers to ensure text remains highly legible against customized, dynamic background images.
- **Categorized Showcases:** Dedicated sections for personal favorites, music playlists, poetry (Fernando Pessoa), media reviews (Cobra Kai), and image galleries.
- **Fluid & Responsive:** Modern implementation using CSS Flexbox, Grid, and `clamp()` typography to maintain visual integrity across all devices.

---

## 🚀 Getting Started & Local Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/yourusername/empty-blog.git
   cd empty-blog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when you make changes.

### Building for Production
To create an optimized production build:
```bash
npm run build
```

---

## 📂 Project Structure

```text
empty-blog/
├── public/                     # Publicly accessible static assets
│   ├── images/                 # Custom UI imagery and retro GIFs
│   ├── favicon.ico             # App icon
│   └── index.html              # Main HTML template entry point
├── src/                        # Application Source Code
│   ├── components/             # Reusable UI components
│   │   ├── Header.js           # Navbar, logo, and marquee ticker
│   │   └── Footer.js           # Web 2.0 validation badges
│   ├── images/                 # Bundled visual assets
│   ├── pages/                  # Route-level views (Home, Music, Gallery, etc.)
│   ├── App.css                 # Global styles, variables, and Frutiger Aero CSS
│   ├── App.js                  # Main layout wrapper and routing configuration
│   └── index.js                # React DOM render entry point
├── package.json                # Project metadata and npm scripts
└── README.md                   # This documentation file
```

---

## 🛠 Tech Stack & Architecture

### Frontend Layer
- **Framework:** React 19 (Single Page Application via Create React App)
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Vanilla CSS3 (Custom Properties, Flexbox, Keyframes, Backdrop Filters)
- **Typography:** Google Fonts (Inter, Press Start 2P, Cormorant Garamond)

### Build Tools & Runtime
- **Runtime:** Node.js
- **Testing:** React Testing Library (`@testing-library/react`, `jest-dom`)
- **Linting:** ESLint (`eslint-config-react-app`)
- **Bundler:** Webpack (under the hood via `react-scripts`)
