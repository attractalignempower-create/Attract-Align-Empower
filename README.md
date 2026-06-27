# Attract Align Empower — Website Workflow

This repository hosts the static website for **attractalignempower.com**.

## Branch Strategy

- `main` → Production-ready code (live site source)
- `staging` → Safe testing branch for edits before merging to `main`

## Standard Update Workflow

1. Switch to `staging`.
2. Make your edits (HTML/CSS/JS/assets).
3. Commit changes to `staging`.
4. Test the website locally or via preview.
5. Open a Pull Request from `staging` → `main`.
6. Merge after confirming everything looks correct.
7. Deploy `main` branch contents to Hostinger.

## Pre-Merge Checklist

- [ ] `index.html` loads correctly
- [ ] Navigation links work
- [ ] Images and assets load (no broken paths)
- [ ] Mobile layout looks good
- [ ] Contact and social links are correct
- [ ] `robots.txt` contains the correct sitemap URL
- [ ] `sitemap.xml` includes the production domain

## Hostinger Deployment Checklist (Static Site)

1. In Hostinger hPanel, open **File Manager**.
2. Go to your domain root folder (usually `public_html`).
3. Upload repository files from `main` branch.
4. Ensure these files are at root:
   - `index.html`
   - `.htaccess`
   - `404.html`
   - `robots.txt`
   - `sitemap.xml`
5. Confirm domain points to the correct hosting plan/server.
6. Clear cache/CDN if enabled.
7. Open the live site and test key pages.

## Important SEO/Domain Files

- `robots.txt` → should reference: `https://attractalignempower.com/sitemap.xml`
- `sitemap.xml` → should use: `https://attractalignempower.com/`

## Rollback Plan (If Needed)

If a deployment causes issues:

1. Revert the latest merge commit on `main`, **or**
2. Re-upload the previous known-good files to Hostinger.

Always keep a local zip backup of the last stable deployment.

## Optional Next Improvements

- Enable branch protection on `main` (require PRs).
- Add GitHub Actions for HTML validation.
- Add Lighthouse checks for performance/accessibility.
