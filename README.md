# Rishu Thakur — Personal Portfolio Website

A responsive personal portfolio website built with plain HTML, CSS and JavaScript, showcasing education, skills, projects, and professional profile.

**Live site:** https://portfolio-one-opal-30.vercel.app/

## Features

- A separate HTML page per section: Home, About, Skills, Projects, Education, Achievements, Experience, Resume, Contact
- Responsive layout (mobile, tablet, desktop)
- Light/dark mode toggle with saved preference, shared across pages
- Sticky navigation with mobile hamburger menu and current-page highlighting
- Filterable project grid (All / AI-ML / Systems / Web)
- A project demo that runs real Python in-browser via PyScript/MicroPython (WebAssembly) — no backend server
- contact form that opens your email app
- No build step or dependencies — deploys as a static site

## Technologies Used

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Space Grotesk, Inter)

## Installation

```bash
git clone https://github.com/rishuthakur13/rishu-portfolio.git
cd rishu-portfolio
```

No dependencies to install — this is a static site.

## How to Run Locally

Open `index.html` directly in a browser, or serve it locally:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .
```

Then visit `http://localhost:3000`.

## Project Structure

```
.
├── index.html          # Home
├── about.html           # About
├── skills.html           # Skills
├── projects.html          # Projects (filterable grid)
├── hill-climbing.html      # Detail page for the Smart Frame Hospital project
├── hospital-app.html        # Live demo page (loads PyScript + the Python file below)
├── hospital_app.py            # Real Python — runs in-browser via PyScript/MicroPython
├── smart-frame-hospital.zip # Downloadable original Python source
├── education.html          # Education
├── achievements.html        # Achievements & certifications
├── experience.html           # Experience
├── resume.html                 # Resume download
├── contact.html                 # Contact links + form
├── style.css                     # Shared theme tokens, layout, components
├── script.js                      # Theme toggle, nav, project filter, contact form
├── resume.pdf                      # Your resume (add this file)
└── README.md
```

## Screenshots

_Add screenshots of your deployed site here, e.g.:_

```
![Home section](Screenshot_20260927_115747_Chrome.jpg)
![Projects section](screenshots/projects.png)
```

## GitHub Repository

`https://github.com/rishuthakur13/rishu-portfolio`

## Live Vercel Deployment

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Other** (static site) — no build command needed.
4. Deploy, then copy the live URL back into this README and the Resume section link.

## Author

**Rishu Thakur**
B.Tech Computer Science (AI/ML), Sandip University

## Contact / Social Links

- Email: travindra710@gmail.com
- LinkedIn: `linkedin.com/in/rishu-thakur-3899b743a`
- GitHub: `github.com/rishuthakur13`
