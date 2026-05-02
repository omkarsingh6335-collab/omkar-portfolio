# Omkar Singh — Portfolio Website

A modern, animated portfolio website built with vanilla HTML, Tailwind CSS, and GSAP. Fully static and ready for GitHub Pages.

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **Tailwind CSS** (CDN) — Utility-first styling
- **GSAP 3.12** + ScrollTrigger — Scroll animations, typed text, counters, parallax
- **Google Fonts** — Inter + Playfair Display

## Project Structure

```
Omkar-Portfolio/
├── index.html
├── .gitignore
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── images/
    │   └── profile.png
    └── documents/
        └── Omkar-Singh-CV.pdf
```

## Features

- Loading screen with progress bar
- Typing role animation
- Scroll-triggered section reveals
- Animated stat counters
- Skill bars that fill on scroll
- Glassmorphism cards with hover effects
- Cursor glow follow (desktop)
- Floating particles in hero
- Magnetic buttons
- Parallax background shapes
- Responsive mobile menu with animated hamburger
- Auto-hiding navbar on scroll
- Fully responsive (mobile-first)

## Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g. `omkar-portfolio`)
3. Set it to **Public**
4. Do **not** initialize with a README (we already have one)
5. Click **Create repository**

### Step 2 — Push the Code

Open a terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit — portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/omkar-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set the branch to **main** and folder to **/ (root)**
5. Click **Save**

### Step 4 — Access Your Site

After a minute or two, your site will be live at:

```
https://YOUR_USERNAME.github.io/omkar-portfolio/
```

GitHub will show the live URL on the Pages settings page once deployment completes.

## Local Preview

Just open `index.html` in any browser — no build step or server required.

## License

This project is for personal use.
