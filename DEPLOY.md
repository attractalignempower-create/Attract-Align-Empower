# Attract · Align · Empower — Hostinger Deployment Guide

## What's in this repository

```
/
├── index.html        ← Home page
├── about.html        ← About / My Story page
├── services.html     ← Services & Offerings page
├── contact.html      ← Contact page
├── 404.html          ← Custom 404 error page
├── .htaccess         ← Apache config (HTTPS, caching, security)
├── css/
│   └── style.css     ← All styles
└── js/
    └── main.js       ← Navigation, animations, form validation
```

---

## Before you go live — checklist

1. **Update your email address** in `contact.html`
   - Find `hello@attractalignempower.com` and replace with your real email.

2. **Add your photo** on the About page
   - Replace the placeholder box in `about.html` with:
     ```html
     <img src="images/your-photo.jpg" alt="[Your Name]" class="about-image" style="border-radius:12px; width:100%; object-fit:cover; aspect-ratio:4/5;" />
     ```
   - Upload your photo to the `images/` folder (recommended: 600×750 px, JPG or WebP).

3. **Update social media links**
   - Search all HTML files for `href="#"` inside `.social-link` anchors and replace with your real URLs.

4. **Update the copyright year & name**
   - Search for `2025 Attract · Align · Empower` in all HTML files.

5. **Enable HSTS** (after SSL is confirmed working)
   - In `.htaccess`, uncomment the `Strict-Transport-Security` header line.

6. **Add a favicon**
   - Create/export a favicon (32×32 ICO or PNG) and save it as `favicon.ico` in the root.
   - Add inside each `<head>`: `<link rel="icon" href="favicon.ico" />`

---

## How to deploy on Hostinger

### Option A — File Manager (easiest)

1. Log in to your **Hostinger control panel** (hPanel).
2. Go to **Files → File Manager**.
3. Navigate to `public_html/` (this is your website root).
4. Click **Upload** and upload all files, maintaining the same folder structure.
   - Upload `index.html`, `about.html`, `services.html`, `contact.html`, `404.html`, `.htaccess`
   - Upload the `css/` folder with `style.css` inside
   - Upload the `js/` folder with `main.js` inside
   - Upload the `images/` folder once you add your photos

### Option B — FTP (recommended for managing updates)

1. In hPanel, go to **Files → FTP Accounts** and note your FTP credentials.
2. Download a free FTP client like [FileZilla](https://filezilla-project.org/).
3. Connect using your host (usually your domain), username, and password (port 21).
4. Drag your project files from your computer to the `public_html/` folder on the right.

### Option C — Git deployment (advanced)

Hostinger Business and Cloud plans support Git auto-deploy.
1. In hPanel, go to **Advanced → Git**.
2. Connect this GitHub repository.
3. Set the deploy path to `public_html/`.
4. Click **Deploy** — Hostinger will pull the latest files automatically.

---

## Setting up SSL (HTTPS) on Hostinger

1. In hPanel, go to **Security → SSL**.
2. Click **Install** next to your domain (free Let's Encrypt certificate).
3. Wait ~1 minute for it to activate.
4. The `.htaccess` file already includes a rule to redirect HTTP → HTTPS automatically.

---

## Contact form — sending real emails

The contact form currently shows a success message on screen only (no email is actually sent — there's no server-side code). To receive emails from the form, choose one of these options:

### Option 1 — Formspree (free, no code needed)
1. Sign up at [formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/xxxxxabc`).
3. In `contact.html`, change the `<form>` tag to:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_CODE" method="POST" novalidate>
   ```
4. In `js/main.js`, update `showFormSuccess` to submit the form normally (or keep the JS validation and let Formspree handle the POST on success).

### Option 2 — Hostinger Email + PHP mailer
If your plan includes PHP, create a `send-mail.php` file and point the form action to it. Hostinger's documentation covers PHP mail setup.

---

## Performance tips

- The `.htaccess` enables **Gzip compression** and **browser caching** automatically.
- Images should be in **WebP** format where possible for smaller file sizes.
- Google Fonts are loaded from CDN — they will be cached by users' browsers.

---

## Need help?

- Hostinger Help Center: [support.hostinger.com](https://support.hostinger.com)
- FileZilla docs: [wiki.filezilla-project.org](https://wiki.filezilla-project.org)
