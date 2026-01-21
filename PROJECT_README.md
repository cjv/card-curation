# Johnston's Cherokee Library

A curated, static website showcasing Cherokee history, language, and culture books—celebrating Cherokee voices and historically accurate scholarship.

## Features

✅ **Book Management**
- CSV-based book database for easy updates
- Categorized browsing (History, Language, Arts & Culture, Children's, Genealogy, Fiction)
- Tag-based filtering
- Book detail pages with purchase links
- Support for both in-print and out-of-print books

✅ **Design**
- Three Sisters color palette (corn, beans, squash)
- Custom typography (Crimson Pro + Work Sans)
- Fully responsive mobile design
- WCAG AA accessible (high contrast, semantic HTML, keyboard navigation)

✅ **Content Management**
- Simple CSV file editing for books
- Standard pages for About, Resources, Downloads
- Easy to customize and extend

✅ **Deployment**
- Static export ready for AWS S3 + CloudFront
- Fast loading, no server required
- Monthly CSV update workflow supported

## Project Structure

```
cherokee-library/
├── app/                      # Next.js 15 App Router pages
│   ├── layout.tsx            # Root layout with Header/Footer
│   ├── page.tsx              # Home page
│   ├── books/                # All books listing + detail pages
│   ├── categories/[category]/ # Category filtering pages
│   ├── about/                # About page
│   ├── resources/            # Resources guide
│   └── downloads/            # Downloads page
├── components/
│   ├── books/                # Book card, grid, detail components
│   ├── layout/               # Header, Footer
│   └── ui/                   # Reusable UI components (empty for now)
├── lib/
│   ├── types/                # TypeScript definitions
│   ├── books.ts              # Book data loading utilities
│   └── csv.ts                # CSV parsing utilities
├── data/
│   └── books.csv             # Book database (EDIT THIS!)
├── public/
│   └── covers/               # Book cover images (optional)
└── content/
    └── pages/                # Future: Markdown-based pages
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Add Books

Edit `data/books.csv` with your book collection. Format:

```csv
title,author,year,author_status,isbn,description,categories,tags,in_print,cover_url,...
```

- **categories**: Multiple categories separated by `|` (e.g., `History|Arts & Culture`)
- **tags**: Multiple tags separated by `|` (e.g., `traditional stories|anthropology`)
- **in_print**: `TRUE` or `FALSE`
- **author_status**: `Cherokee Nation`, `Eastern Band`, `UKB`, `Non-Cherokee`, or `Cherokee (unspecified)`

### 4. Customize Content

- **About Page**: Edit `app/about/page.tsx`
- **Resources**: Edit `app/resources/page.tsx`
- **Downloads**: Edit `app/downloads/page.tsx`
- **Site Title**: Edit `app/layout.tsx` metadata

### 5. Build for Production

```bash
npm run build
```

Static files are generated in the `out/` directory.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete AWS S3 + CloudFront deployment instructions.

### Quick Deploy to AWS

```bash
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Design System

### Colors (Three Sisters Palette)

- **Corn**: Yellow (`#f4d03f`) - Featured elements, accents
- **Bean**: Burgundy (`#8b2635`) - Primary navigation, CTAs
- **Squash**: Orange (`#e87722`) - Categories, secondary actions
- **Earth**: Brown (`#5d4e37`) - Text, grounding elements
- **Sage**: Green (`#87a878`) - Subtle accents
- **Cream**: Off-white (`#f8f4ed`) - Cards, backgrounds

### Typography

- **Headings**: Crimson Pro (serif)
- **Body**: Work Sans (sans-serif)

### Accessibility

- WCAG AA color contrast ratios
- Semantic HTML structure
- Keyboard navigation support
- Alt text for images
- Focus indicators

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Data**: CSV files with PapaParse
- **Deployment**: Static export for S3 + CloudFront

## Monthly Update Workflow

1. Update `data/books.csv` with new books
2. (Optional) Add cover images to `public/covers/`
3. Test locally: `npm run dev`
4. Build: `npm run build`
5. Deploy to S3: `aws s3 sync out/ s3://your-bucket-name --delete`
6. Invalidate CloudFront cache

## Future Enhancements

Consider adding:
- Search functionality
- Admin UI for CSV editing
- Markdown-based content pages
- Book cover image uploads
- Email newsletter signup
- Social sharing features

## License

Copyright © 2026 Johnston's Cherokee Library. All rights reserved.

---

Built with respect for Cherokee culture and heritage.
