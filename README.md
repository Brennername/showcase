# Daniel Remsburg - Engineering Portfolio &amp; Architecture Showcase

Personal portfolio and systems engineering showcase running on Angular and Node.js/Express, deployed on Heroku.

Live Site: [https://www.danielremsburg.com](https://www.danielremsburg.com)

---

## Architectural Highlights

- **Frontend**: Angular 17/18 Standalone Components with Signals, dependency injection (`inject()`), zero bloated NgModules.
- **Design System**: Mobile-first CSS architecture with CSS custom properties supporting dynamic Dark and Light theme toggling (`ThemeService`), high-contrast accessible typography, and smooth responsive drawer navigation.
- **Deployment**: Express.js static delivery pipeline with client-side SPA routing fallbacks, configured for Heroku Dyno execution.
- **SSL / TLS**: Automated Certificate Management (ACM) on Heroku backed by DNS CNAME routing (`*.herokudns.com`).

---

## Project Structure

```text
src/
├── app/
│   ├── features/
│   │   ├── about-me/      # Technical background, languages, frameworks, databases
│   │   ├── artwork/       # System architecture diagrams, schemas, and artwork
│   │   ├── contact/       # Direct channels (Email, LinkedIn, GitHub)
│   │   ├── core-dump/     # Computing outtakes & engineering parodies
│   │   ├── go-fund-me/    # UStudio Cloud Band Space (Ubuntu Studio + Ardour DAW)
│   │   ├── home/          # Hero introduction and core engineering pillars
│   │   └── projects/      # Curated enterprise & open-source projects
│   ├── layout/
│   │   ├── footer/        # Responsive footer with dynamic copyright
│   │   ├── header/        # Header with branding, mobile toggle & theme switch
│   │   ├── layout-container/ # Responsive flex grid shell
│   │   └── leftbar/       # Mobile drawer & desktop sidebar navigation
│   └── theme.service.ts   # Reactive signal-based dark/light theme provider
├── styles.scss            # Global style tokens, resets, and layout utilities
└── variables.scss         # Color palettes, typography, and elevation tokens
```

---

## Local Development

### Prerequisites
- Node.js (v18+)
- npm (v10+)

### Commands

```bash
# Install dependencies
npm install

# Run Angular development server
npm run startNG

# Build production bundle
npm run build

# Start production Express server locally
npm start
```
