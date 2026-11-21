# Inky Pinky — Official Character Website 🩷

A playful, responsive Next.js single-page website for **Pinky (Inky Pinky)**, the adorable fluffy bright-pink 3D animated kitten.

## Features
- **Primary Color Palette** matched directly to Pinky's bright-pink fur (`#FF5CA8`), deep collar pink (`#E62884`), soft pastel blush (`#FFD6E9` / `#FFF4F9`), and golden paw pendant (`#F5B73B`).
- **Live Reel Preview** featuring Pinky playing and dancing with play/pause and audio controls.
- **Character Profile & Consistency Bible** detailing Pinky's appearance, personality traits, 3D visual style, and consistency rules.
- **Social Links**:
  - **Facebook**: Live link to [fb.com/inkypinkycat](https://fb.com/inkypinkycat)
  - **YouTube, Instagram & TikTok**: Interactive "Upcoming Soon!" modal with quick redirect to Facebook.
- **Netlify-Ready Static Export**: Pre-configured with `output: "export"` in `next.config.ts` and `netlify.toml`.

## Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Netlify
1. Push this repository to GitHub (or drag-and-drop the `out/` folder after running `npm run build`).
2. Connect the repository in Netlify — `netlify.toml` automatically sets:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
