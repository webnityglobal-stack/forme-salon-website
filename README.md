# FORME — Unisex Hair & Care Studio

Distinct editorial-style salon frontend built with React, Vite and Tailwind CSS v4.

## Three pages
- Studio (Home): bold editorial hero, service preview, studio philosophy, artists, CTA
- Services: complete service menu with interactive category filters
- Book a slot: responsive appointment request form and studio details

## Run
```bash
npm install
npm run dev
```
Open the Local URL printed in the terminal.

## Production build
```bash
npm run build
npm run preview
```

## Customise
- Brand colours / typography: `src/index.css`
- Services and team: `src/data.js`
- Phone, location and opening hours: `src/components/Footer.jsx` and `src/pages/Book.jsx`

Images use remote Unsplash URLs. Replace with your salon's own images before production.
The booking form is a frontend demo; connect a backend or form provider to receive submissions.
