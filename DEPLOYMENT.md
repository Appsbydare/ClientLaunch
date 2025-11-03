# Deployment Instructions

## Step 1: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to verify everything works.

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `webagency-site`)
3. **Do not** initialize with README (we already have one)

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard

1. Go to [Vercel](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `.` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Click "Deploy"

### Option B: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to link your GitHub repo and deploy.

## Step 5: Environment Variables (Optional)

If you add analytics or form integrations, set these in Vercel:

- `NEXT_PUBLIC_GA_ID` - Google Analytics Measurement ID
- `NEXT_PUBLIC_FORM_ENDPOINT` - Form submission endpoint
- Any other API keys

Go to: Project Settings → Environment Variables

## Step 6: Custom Domain

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## Step 7: Monitoring & Analytics

### Vercel Analytics

Enable in Project Settings → Analytics

### Google Analytics

1. Get your GA4 Measurement ID
2. Add to environment variables: `NEXT_PUBLIC_GA_ID`
3. Update `app/layout.tsx` to include GA script

### Performance Monitoring

Vercel automatically tracks:
- Core Web Vitals
- Build times
- Function performance

## Step 8: Continuous Deployment

Every push to `main` will automatically deploy to Vercel.

For preview deployments:
- Push to any branch
- Create a pull request
- Vercel will create a preview URL

## Image Replacement

To replace placeholder images:

1. Add your images to `public/images/[page-folder]/`
2. Keep the same filenames (e.g., `001-hero.svg` → `001-hero.webp`)
3. Commit and push
4. Vercel will automatically redeploy

## Build & Performance Tips

- Lighthouse score targets: 90+ performance, 95+ accessibility
- Test mobile performance before going live
- Compress images before uploading
- Use WebP format for best results

## Troubleshooting

### Build Fails

Check:
- `npm run build` locally
- Node version (16+ required)
- Missing environment variables

### Images Not Loading

Verify:
- Files are in `public/images/`
- Filenames match exactly
- Image paths are correct in components

### Slow Performance

- Optimize images (use WebP, compress)
- Check Vercel analytics for bottlenecks
- Enable Vercel Image Optimization

## Support

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Deployment Issues](https://vercel.com/support)

---

**Ready to Deploy?** Follow the steps above in order, and your site will be live in minutes!

