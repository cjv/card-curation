# Card Curation Starter

A Next.js starter template for building static websites that curate links and resources around a topic. Perfect for book lists, resource directories, tool collections, or any curated content site.

## How It Works

### Data Flow

```
CSV File (data/items.csv)
        ↓
    Build Time
        ↓
  PapaParse reads CSV
        ↓
  Static HTML pages
        ↓
   Deploy anywhere
```

1. **CSV as Database**: All items are stored in `data/items.csv`. This flat-file approach means no database setup, easy version control, and simple content editing.

2. **Build-Time Generation**: When you run `npm run build`, Next.js reads the CSV and generates static HTML pages for every item and category. No server-side code runs at runtime.

3. **Static Output**: The build produces a folder of static files (`out/`) that can be hosted on any static hosting service (S3, Netlify, Vercel, GitHub Pages, etc.).

### Key Architecture Decisions

- **No runtime data fetching**: All data must exist in the CSV at build time
- **Static export**: Configured for `output: 'export'` in Next.js
- **CSV changes require rebuild**: Edit the CSV, then run `npm run build` to see changes

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static site
npm run build

# Preview production build
npm run start
```

## Customizing for Your Use Case

### 1. Define Your Data Model

Edit `lib/types/item.ts` to match your content:

```typescript
// Current fields - modify as needed
export interface Item {
  id: string;
  slug: string;
  title: string;
  creator: string;           // Author, maker, company, etc.
  year: number;
  creatorStatus: CreatorStatus;  // Verification level
  sku?: string;              // ISBN, product ID, etc.
  description: string;
  categories: Category[];
  tags: string[];
  available: boolean;        // In stock, active, etc.
  imageUrl?: string;
  links: {                   // Up to 8 external links
    link1?: string;
    link2?: string;
    // ...
  };
}
```

### 2. Update Categories

In `lib/types/item.ts`, replace the placeholder categories:

```typescript
export type Category =
  | 'Your Category 1'
  | 'Your Category 2'
  | 'Your Category 3';
```

Then update these files to match:
- `app/categories/[category]/page.tsx` - Update `slugToCategory` mapping
- `components/layout/Header.tsx` - Update navigation links
- `lib/items.ts` - Update `getAllCategories()` function

### 3. Customize the CSV Schema

Edit `data/items.csv` with your content. The CSV uses:
- Comma-separated values for fields
- Pipe (`|`) separation for array fields like categories and tags
- `TRUE`/`FALSE` for boolean fields

```csv
title,creator,year,creator_status,sku,description,categories,tags,available,image_url,link1_url,link2_url,...
"My Item",Creator Name,2024,Verified,ABC123,Description here,Category 1|Category 2,tag1|tag2,TRUE,/images/item.jpg,https://link1.com,https://link2.com,...
```

### 4. Update CSV Parsing

If you change the CSV columns, update `lib/csv.ts` to match your new schema:
- `parseCSVToItems()` - Maps CSV rows to Item objects
- `itemsToCSV()` - Converts Items back to CSV (if needed)

### 5. Customize the Design

The design system is defined in `app/globals.css`:

```css
:root {
  --primary-color: #8b2635;    /* Main brand color */
  --secondary-color: #e87722;  /* Accent color */
  --background: #f8f4ed;       /* Page background */
  /* ... customize as needed */
}
```

### 6. Update Site Content

- `app/layout.tsx` - Site title, metadata, fonts
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page
- `components/layout/Header.tsx` - Navigation and branding
- `components/layout/Footer.tsx` - Footer content

## Project Structure

```
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles & design tokens
│   ├── items/
│   │   ├── page.tsx                # All items listing
│   │   └── [slug]/page.tsx         # Individual item pages
│   └── categories/
│       └── [category]/page.tsx     # Category pages
├── components/
│   ├── items/
│   │   ├── ItemCard.tsx            # Card component
│   │   ├── ItemGrid.tsx            # Grid layout
│   │   └── ItemDetail.tsx          # Full item view
│   └── layout/
│       ├── Header.tsx              # Site header
│       └── Footer.tsx              # Site footer
├── data/
│   └── items.csv                   # Your content database
├── lib/
│   ├── items.ts                    # Data access functions
│   ├── csv.ts                      # CSV parsing utilities
│   └── types/
│       ├── index.ts                # Type exports
│       └── item.ts                 # Item type definitions
└── public/                         # Static assets (images, etc.)
```

## Data Access Functions

Use these functions from `lib/items.ts`:

```typescript
import { getAllItems, getItemBySlug, getItemsByCategory, searchItems } from '@/lib/items';

// Get all items
const items = await getAllItems();

// Get single item by slug
const item = await getItemBySlug('my-item-slug');

// Filter by category
const categoryItems = await getItemsByCategory('Category 1');

// Search items
const results = await searchItems('search query');
```

## Deployment

### Static Hosting (Recommended)

Build and deploy the `out/` folder to any static host:

```bash
npm run build
# Upload out/ folder to your host
```

**Popular options:**
- **Netlify**: Connect repo, set build command to `npm run build`, publish directory to `out`
- **Vercel**: Works automatically with Next.js
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3 + CloudFront**: Sync `out/` to S3 bucket

### AWS S3 Example

```bash
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Adding Content

1. Edit `data/items.csv` in any spreadsheet app or text editor
2. Run `npm run build` to regenerate the site
3. Deploy the updated `out/` folder

That's it. No database migrations, no API updates, no CMS configuration.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **PapaParse** - CSV parsing

## License

MIT
