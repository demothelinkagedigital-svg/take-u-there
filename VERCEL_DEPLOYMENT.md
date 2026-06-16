# Vercel Deployment Guide

## Quick Start

### Prerequisites

- GitHub account with your repository
- Vercel account (free tier sufficient)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository and click "Import"

### Step 2: Configure (Optional)

Vercel automatically detects:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

All settings are already configured in:

- `package.json` (scripts)
- `vercel.json` (deployment config)
- `.nvmrc` (Node version)

### Step 3: Deploy

Click "Deploy" and wait ~2-3 minutes for completion.

## After Deployment

### Access Your Site

- **Production URL**: `https://your-project.vercel.app`
- **Custom Domain**: Configure in Vercel settings

### Environment Variables

No environment variables needed for this SPA. All content is static.

### Monitoring

1. **Vercel Analytics** (free):
   - Web Vitals
   - Performance metrics
   - Error tracking

2. **Check Build** in Vercel Dashboard:
   - Deployment logs
   - Build time
   - Asset sizes

## Performance Tips

### Optimize Further (Optional)

#### Add Image Optimization

Replace image imports with Next Image (if upgrading to Next.js):

```tsx
import Image from "next/image";
<Image src={hero} alt="..." priority />;
```

#### Add Analytics

Google Analytics:

```tsx
import ReactGA from "react-ga4";
ReactGA.initialize("G-XXXXXXXXXX");
```

#### Add Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-05-08</lastmod>
  </url>
  <!-- Add more URLs -->
</urlset>
```

### Monitor Bundle Size

Vercel shows size per deployment. Target:

- Main JS: < 100KB gzip
- CSS: < 15KB gzip
- Images: Optimize via tools like TinyPNG

## Troubleshooting

### "Build failed"

Check build logs in Vercel dashboard. Usually:

1. Missing dependencies → Run `npm install` locally first
2. Type errors → Run `npm run build` locally to test
3. Import errors → Check file paths (case-sensitive on Linux)

### "Page not found" after deploy

This is normal! Vercel uses `vercel.json` rewrites:

- All routes automatically fallback to `index.html`
- React Router handles the routing client-side

### Slow page loads

1. Check WebVitals in Vercel Analytics
2. Verify image optimization (logos are ~400KB)
3. Consider lazy loading components for non-critical pages

## Rollback

If you need to revert:

1. Go to Vercel Dashboard → Project → Deployments
2. Find the previous working deployment
3. Click "..." → "Redeploy"

## Next Deployments

### Automatic (Recommended)

Every push to main branch auto-deploys:

1. Merge PR to main
2. GitHub → Vercel webhook triggers
3. Build runs automatically
4. Live in 2-3 minutes

### Manual

Vercel Dashboard → "Redeploy" button

## Custom Domain

1. In Vercel: Settings → Domains
2. Add your domain (e.g., takeuthere.com)
3. Follow DNS setup instructions
4. Point DNS to Vercel nameservers

DNS usually propagates in 24-48 hours.

## Scaling (Future)

If you add backend features:

- Use Vercel API Routes (`/api/*`)
- Database: Connect Supabase, Neon, or PlanetScale
- Authentication: Add Auth0 or Supabase Auth
- All in same Vercel project!

## Support

- **Vercel Docs**: https://vercel.com/docs
- **React Router**: https://reactrouter.com
- **Issue with deployment?** Check Vercel build logs first
