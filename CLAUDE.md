# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Johnston's Cherokee Library is a static Next.js website showcasing Cherokee history, language, and culture books. The site uses a CSV-based book database for easy content management and is designed for static export to AWS S3 + CloudFront.

## Development Commands

```bash
# Development
npm install              # Install dependencies
npm run dev              # Start dev server at http://localhost:3000

# Production
npm run build            # Build static site to out/ directory
npm run start            # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
```

## Architecture

### Data Flow
- **CSV → TypeScript**: Books are stored in `data/books.csv` and parsed at build time using PapaParse
- **Static Generation**: All pages are pre-rendered at build time using Next.js App Router's `generateStaticParams()`
- **No Runtime Data**: The CSV is read only during build - no database or API calls at runtime

### Key Files

**Data Layer**
- `data/books.csv` - Single source of truth for all book data
- `lib/csv.ts` - CSV parsing with PapaParse (`parseCSVToBooks`, `booksToCSV`)
- `lib/books.ts` - Data access functions (`getAllBooks`, `getBookById`, `getBooksByCategory`, etc.)
- `lib/types/book.ts` - TypeScript type definitions for `Book`, `Category`, `AuthorStatus`

**App Router Pages** (Next.js 15)
- `app/page.tsx` - Home page with featured books
- `app/books/page.tsx` - All books listing
- `app/books/[id]/page.tsx` - Individual book detail pages (dynamic routes)
- `app/categories/[category]/page.tsx` - Category filtering pages
- Category slugs map to display names via `slugToCategory` object

**Components**
- `components/books/BookCard.tsx` - Individual book card display
- `components/books/BookGrid.tsx` - Responsive grid layout for book lists
- `components/books/BookDetail.tsx` - Full book information display with purchase links
- `components/layout/Header.tsx` - Site header with navigation
- `components/layout/Footer.tsx` - Site footer

### CSV Schema

The CSV uses pipe-separated (`|`) values for array fields:

```csv
title,author,year,author_status,isbn,description,categories,tags,in_print,cover_url,abeBooks_url,alibris_url,thriftbooks_url,betterworldbooks_url,amazon_url,bookshop_url,powells_url,ebay_url
```

**Key Fields:**
- `categories` - Pipe-separated list: `History|Arts & Culture`
- `tags` - Pipe-separated list: `traditional stories|anthropology`
- `in_print` - Must be `TRUE` or `FALSE` (case-insensitive)
- `author_status` - One of: `Cherokee Nation`, `Eastern Band`, `UKB`, `Non-Cherokee`, `Cherokee (unspecified)`

### Categories

Six predefined categories (defined in `lib/types/book.ts`):
- History
- Language
- Arts & Culture
- Children's
- Genealogy
- Fiction

**To add a new category:**
1. Update the `Category` type in `lib/types/book.ts`
2. Add slug mapping in `app/categories/[category]/page.tsx` (`slugToCategory` object)
3. Update navigation in `components/layout/Header.tsx`
4. Update `getAllCategories()` in `lib/books.ts`

### Design System

**Three Sisters Color Palette** (defined in `app/globals.css`):
- Corn: `--corn-yellow` (#f4d03f) - Featured elements, accents
- Bean: `--bean-burgundy` (#8b2635) - Primary navigation, CTAs
- Squash: `--squash-orange` (#e87722) - Categories, secondary actions
- Earth: `--earth-brown` (#5d4e37) - Text, grounding elements
- Sage: `--sage-green` (#87a878) - Subtle accents
- Cream: `--cream` (#f8f4ed) - Cards, backgrounds

**Typography:**
- Headings: Crimson Pro (serif) - `font-serif` class
- Body: Work Sans (sans-serif) - default

**Accessibility:** WCAG AA compliant with semantic HTML, keyboard navigation, and high contrast ratios.

### Static Export Configuration

`next.config.ts` is configured for static export:
```typescript
{
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

This means:
- No Next.js Image optimization (images must be optimized before upload)
- All pages must be statically generated
- No server-side rendering or API routes
- Trailing slashes added to all URLs for S3 compatibility

### Deployment

The site is deployed to AWS S3 + CloudFront:

```bash
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

See `DEPLOYMENT.md` for detailed AWS setup instructions.

## Common Development Patterns

### Adding Books
Edit `data/books.csv` directly. The build process reads this file and generates static pages for each book automatically via `generateStaticParams()`.

### Filtering Books
Use the utility functions in `lib/books.ts`:
- `getBooksByCategory(category)` - Filter by category
- `getBooksByTag(tag)` - Filter by tag
- `searchBooks(query)` - Search title, author, tags

### Component Patterns
- All pages use async Server Components (Next.js App Router default)
- Use `@/` path alias for imports (configured in TypeScript)
- Book components accept `Book` type from `lib/types`

### Styling
- Tailwind CSS v4 with custom theme colors
- Use semantic color classes: `text-bean`, `bg-cream`, `text-earth`
- Font classes: `font-serif` for headings, default for body

## Important Notes

- **No dynamic data**: All data must be in CSV at build time
- **Book IDs**: Auto-generated as `book-1`, `book-2`, etc. based on CSV row order
- **Image paths**: Cover images should be in `public/covers/` and referenced as `/covers/filename.jpg`
- **Category slugs**: Use lowercase with hyphens (e.g., `arts-culture` for "Arts & Culture")
- **CSV changes**: Require a full rebuild (`npm run build`) to take effect
