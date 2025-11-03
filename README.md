# WebAgency - Premium Website & Web App Solutions

A modern, high-performance website for selling websites and web applications. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design System**: Beautiful UI with advanced animations
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Performance Optimized**: Lighthouse scores 90+ across all metrics
- **SEO Ready**: Complete metadata, Open Graph, and schema markup
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Advanced Animations**: 5 custom text animations with reduced-motion support
- **Image Management**: Structured placeholder system for easy asset replacement

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS + Intersection Observer
- **Deployment**: Vercel-ready

## 🎨 Pages

- **Home**: Hero, services overview, case studies preview, process teaser, CTA
- **Services**: Service cards with features, pricing hints, CTA
- **Case Studies**: Filterable grid with metrics and detailed stories
- **Process**: Step-by-step methodology with deliverables
- **Pricing**: Tiered packages, add-ons, payment options
- **About**: Team, mission, values
- **Blog**: Articles with categories and search
- **Resources**: Free tools, templates, calculators
- **Contact**: Multi-field form with FAQ
- **Legal**: Privacy, Terms, Cookies

## 🎬 Animations

1. **SplitText**: Staggered word reveal with blur
2. **TypeWriter**: Looping headline morphing
3. **GradientText**: Animated gradient text
4. **FadeIn**: Scroll-triggered fade-in
5. **ScaleIn**: Scroll-triggered scale-in

All animations respect `prefers-reduced-motion`.

## 🖼️ Image Structure

Images are organized in `public/images/` with numbered page folders:

```
public/images/
  01-home/
    001-hero.svg
    002-secondary.svg
  02-services/
    001-hero.svg
    002-secondary.svg
  ...
```

Simply replace placeholder SVGs with your final images (keep filenames).

## 🛠️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Brand & Colors

Edit `tailwind.config.ts` and `app/globals.css` for colors, fonts, and design tokens.

### Content

- Update page content in `app/*/page.tsx`
- Modify header/footer in `components/Header.tsx` and `components/Footer.tsx`
- Replace images in `public/images/`

### SEO

- Edit `app/layout.tsx` for global metadata
- Update individual page metadata in each `page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Environment Variables

No required env vars for basic deployment. Optional:
- `NEXT_PUBLIC_GA_ID` - Google Analytics
- `NEXT_PUBLIC_FORM_ENDPOINT` - Form submission handler

## 📊 Performance

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🤝 Contributing

This is a commercial project. For customizations, contact the development team.

## 📄 License

Proprietary. All rights reserved.

## 📧 Contact

- Website: [webagency.com](https://webagency.com)
- Email: hello@webagency.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by WebAgency

