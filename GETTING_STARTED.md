# Getting Started with Johnston's Cherokee Library

Congratulations! Your Cherokee book recommendation website is ready. Here's what's been built for you:

## ✅ What's Complete

### 1. **Core Features**
- ✅ Book database with 2 sample books
- ✅ CSV-based book management
- ✅ Category browsing (6 categories)
- ✅ Book detail pages with purchase links
- ✅ Responsive grid layout
- ✅ Mobile-friendly design

### 2. **Pages Created**
- ✅ Home page with featured books
- ✅ All books listing
- ✅ Individual book detail pages
- ✅ Category pages (History, Language, Arts & Culture, Children's, Genealogy, Fiction)
- ✅ About page (needs your personal info)
- ✅ Resources page (placeholder content)
- ✅ Downloads page (placeholder content)

### 3. **Design**
- ✅ Three Sisters color palette (corn yellow, bean burgundy, squash orange)
- ✅ Custom fonts (Crimson Pro for headings, Work Sans for body)
- ✅ WCAG AA accessibility compliant
- ✅ Professional, warm aesthetic

### 4. **Deployment Ready**
- ✅ Static export configured
- ✅ AWS S3 + CloudFront deployment guide
- ✅ Build tested successfully

## 🚀 Next Steps

### Step 1: Customize Your Content (Required)

#### Edit the About Page
Open `app/about/page.tsx` and add:
- Your name and credentials
- Your connection to Cherokee culture
- Why you created this library

#### Add Your Books
Edit `data/books.csv`:
1. Use the template in `data/books-template.csv` as a guide
2. Add your book recommendations
3. Include purchase links for both new and used sources

### Step 2: Test Locally

The dev server is running at [http://localhost:3000](http://localhost:3000)

Browse your site and verify:
- [ ] Books display correctly
- [ ] Categories work
- [ ] Book detail pages show all information
- [ ] Purchase links are correct
- [ ] Mobile view looks good

### Step 3: Optional Customizations

#### Add Book Cover Images
1. Save images to `public/covers/`
2. Add the image path to the `cover_url` column in CSV
3. Example: `/covers/myths-of-cherokee.jpg`

#### Customize Resources Page
Edit `app/resources/page.tsx` to add your own:
- Genealogy guides
- Language learning tips
- Arts and culture resources

#### Customize Downloads Page
Edit `app/downloads/page.tsx` to add:
- PDF guides
- Reading lists
- Research materials

### Step 4: Deploy to AWS

Follow the instructions in [DEPLOYMENT.md](./DEPLOYMENT.md):

1. Create S3 bucket
2. Enable static website hosting
3. Build the site: `npm run build`
4. Upload to S3: `aws s3 sync out/ s3://your-bucket-name`
5. Create CloudFront distribution
6. (Optional) Add custom domain

## 📚 Managing Your Library

### Adding New Books

1. Edit `data/books.csv`
2. Add a new row with book information
3. Categories: Use `|` to separate multiple: `History|Language`
4. Tags: Use `|` to separate: `traditional stories|anthropology`
5. In print: `TRUE` or `FALSE`
6. Rebuild: `npm run build`
7. Deploy: `aws s3 sync out/ s3://your-bucket`

### Monthly Updates

Recommended workflow:
1. Update CSV with new books on the 1st of each month
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy to AWS

## 🎨 Design Customization

### Colors
Edit `app/globals.css` to change the Three Sisters palette:
- Corn colors: `--corn-yellow`, `--corn-light`, `--corn-dark`
- Bean colors: `--bean-burgundy`, `--bean-light`, `--bean-dark`
- Squash colors: `--squash-orange`, `--squash-light`, `--squash-dark`

### Fonts
Already using:
- **Crimson Pro** (serif, for headings)
- **Work Sans** (sans-serif, for body)

To change fonts, edit the Google Fonts import in `app/globals.css`

## 📖 Important Files

| File | Purpose |
|------|---------|
| `data/books.csv` | **YOUR BOOK DATABASE** - Edit this! |
| `app/about/page.tsx` | About page content |
| `app/resources/page.tsx` | Resources guide |
| `app/layout.tsx` | Site title and metadata |
| `app/globals.css` | Colors and fonts |
| `DEPLOYMENT.md` | AWS deployment instructions |

## ❓ Common Questions

### How do I add more categories?
1. Edit `lib/types/book.ts` - add to `Category` type
2. Edit `components/layout/Header.tsx` - add to categories array
3. Edit `app/categories/[category]/page.tsx` - add to `slugToCategory`
4. Add books with the new category in CSV

### How do I change the site name?
Edit `app/layout.tsx` - change the `title` in metadata

### How do I add social media links?
Edit `components/layout/Footer.tsx` - add links in the "Connect" section

### The site isn't showing my changes
1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

## 🆘 Need Help?

- **Build errors**: Check the terminal output
- **Styling issues**: Inspect with browser dev tools
- **CSV not loading**: Verify CSV format matches template
- **Deployment issues**: Review [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📝 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build static site
npm run lint     # Check code quality
```

---

**Your site is running at:** [http://localhost:3000](http://localhost:3000)

Start by customizing the About page and adding your books to `data/books.csv`!
