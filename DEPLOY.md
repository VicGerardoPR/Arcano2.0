# Arcano Intelligence Rebranding - Vercel Deployment Guide

## 1. Environment Variables
Create a `.env.local` file in the root directory and add your HuggingFace API Key.

```env
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
```

## 2. Local Development
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open `http://localhost:3000`

## 3. Deployment to Vercel
1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. In the Vercel Dashboard, go to **Settings > Environment Variables**.
4. Add `HUGGINGFACE_API_KEY` with your secret key.
5. Deploy!

## 4. Performance & SEO Highlights
- **Next.js 14 App Router**: Optimized for speed and Core Web Vitals.
- **Dynamic Metadata**: Automatic OpenGraph tags and semantic HTML for better SEO.
- **Responsive Design**: Mobile-first approach with Tailwind CSS.
- **Glassmorphism & Framer Motion**: Premium aesthetic with smooth transitions and persistent visual identity (reusing the original Logo and Video).
