# Deployment Guide - Johnston's Cherokee Library

## Building for Production

The site is configured as a static Next.js export, perfect for hosting on AWS S3 + CloudFront.

### Build the Site

```bash
npm run build
```

This creates a static site in the `out` directory.

## AWS Deployment (S3 + CloudFront)

### Step 1: Create an S3 Bucket

1. Go to AWS S3 Console
2. Create a new bucket (e.g., `cherokee-library`)
3. Disable "Block all public access"
4. Enable Static Website Hosting:
   - Index document: `index.html`
   - Error document: `404.html`

### Step 2: Configure Bucket Policy

Add this bucket policy (replace `your-bucket-name`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### Step 3: Upload Files

```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

Or use the AWS Console to drag and drop the `out` folder contents.

### Step 4: Create CloudFront Distribution

1. Go to CloudFront Console
2. Create Distribution
3. Origin Domain: Select your S3 bucket
4. Origin Path: leave blank
5. Viewer Protocol Policy: Redirect HTTP to HTTPS
6. Default Root Object: `index.html`
7. Custom Error Pages:
   - 403: `/404.html` (return 404)
   - 404: `/404.html` (return 404)

### Step 5: Configure Custom Domain (Optional)

1. In CloudFront, add Alternate Domain Names (CNAMEs)
2. Add SSL certificate from AWS Certificate Manager
3. Update DNS records to point to CloudFront distribution

## Updating Content

### Adding Books

1. Edit `data/books.csv`
2. Add your book data following the CSV format
3. Rebuild and redeploy:

```bash
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Editing Pages

1. Edit content in `app/about/page.tsx`, `app/resources/page.tsx`, etc.
2. Rebuild and redeploy

## CSV Format

```csv
title,author,year,author_status,isbn,description,categories,tags,in_print,cover_url,abeBooks_url,alibris_url,thriftbooks_url,betterworldbooks_url,amazon_url,bookshop_url,powells_url,ebay_url
```

- **categories**: Use pipe separator (|) for multiple categories: `History|Arts & Culture`
- **tags**: Use pipe separator (|) for multiple tags: `traditional stories|anthropology`
- **in_print**: `TRUE` or `FALSE`

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Environment

- Node.js 18+ recommended
- Next.js 15 with static export
- Tailwind CSS for styling
