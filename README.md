# MANI — Developer Portfolio

A responsive, dark-mode developer portfolio built with React and Vite.

## Features
- Responsive navigation and mobile menu
- Hero, About, Skills, Projects, Resume, and Contact sections
- Project cards with configurable repository/demo links
- Dark navy and violet visual theme
- Contact section opens the visitor's email application
- Lightweight setup with Vite

## Run locally

Install [Node.js](https://nodejs.org/) first.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Customize before publishing

Open `src/App.jsx` and update:
- `PROFILE.email`
- `PROFILE.linkedin`
- `PROFILE.github`
- project `github` and `demo` links
- any project details or technologies that do not match your implementation

To enable the Resume buttons, add your real resume PDF as `public/resume.pdf`.

## Build for deployment

```bash
npm run build
npm run preview
```

You can deploy the generated `dist` folder to Vercel, Netlify, or another static hosting provider.

## Important
The project cards are prepared for your stated projects. Replace placeholder repository/demo URLs with real links, and only list technologies and features you have actually implemented.
