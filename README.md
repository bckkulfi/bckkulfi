# Bombay Chowpaty Kulfi — Website

Official website for **Bombay Chowpaty Kulfi (BCK)**, Bangalore's authentic Bombay street kulfi brand, established 1999.

**Live URL:** https://bombaychowpatykulfi.com

---

## Tech Stack

- **React 18** + **Vite 5**
- **React Router v6** (client-side routing)
- **Pure CSS** (no UI framework — custom design system)
- **GitHub Pages** (hosting)
- **GoDaddy** (domain DNS)
- **GitHub Actions** (auto CI/CD)

---

## Project Structure

```
bck-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy on push to main
├── public/
│   ├── CNAME                   # Custom domain (bombaychowpatykulfi.com)
│   ├── 404.html                # SPA routing fix for GitHub Pages
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + .css   # Sticky navbar with mobile menu
│   │   └── Footer.jsx + .css   # Footer with links and contact
│   ├── pages/
│   │   ├── Home.jsx + .css     # Landing page with hero & CTAs
│   │   ├── About.jsx + .css    # Brand story, founder message
│   │   ├── Flavors.jsx + .css  # Full flavor list (regular + seasonal)
│   │   ├── Franchise.jsx + .css # Investment details + inquiry form
│   │   ├── Gallery.jsx + .css  # Visual gallery grid
│   │   └── Contact.jsx + .css  # Contact info + contact form
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # React entry point
│   └── index.css               # Global CSS design system
├── index.html                  # HTML entry with SEO meta tags
├── vite.config.js
└── package.json
```

---

## Local Development

### Prerequisites
- Node.js 18+ 
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/bck-website.git
cd bck-website

# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output goes to /dist folder
```

### Preview Production Build

```bash
npm run preview
```

---

## Deployment — GitHub Pages

### One-Time Setup (do this once)

#### 1. Create GitHub Repository

```bash
# Initialize git in project folder
git init
git add .
git commit -m "Initial commit: BCK website"

# Create repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/bck-website.git
git branch -M main
git push -u origin main
```

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

That's it! The workflow in `.github/workflows/deploy.yml` will automatically build and deploy every time you push to `main`.

#### 3. First Deploy

After pushing your code, go to:
- **Repository → Actions tab** to watch the deployment
- Deployment takes ~2-3 minutes

Your site will be live at: `https://YOUR_USERNAME.github.io/bck-website/`

---

## Custom Domain Setup (GoDaddy + GitHub Pages)

### Step 1: Add Domain in GitHub

1. Go to **Repository → Settings → Pages**
2. Under **Custom domain**, type: `bombaychowpatykulfi.com`
3. Click Save
4. Wait for DNS check (may show error initially — that's fine)

### Step 2: Configure GoDaddy DNS

1. Log into **GoDaddy** → **My Products** → **DNS** (next to your domain)
2. Delete any existing **A records** for `@`
3. Add these **4 A records** pointing to GitHub:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

4. Add a **CNAME record** for `www`:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

### Step 3: Enable HTTPS

1. Wait 24–48 hours for DNS to propagate
2. Go to **Repository → Settings → Pages**
3. Check **"Enforce HTTPS"** (appears once DNS is verified)

### Verify DNS Propagation

```bash
# Check if DNS is pointing correctly:
nslookup bombaychowpatykulfi.com
dig bombaychowpatykulfi.com
```

---

## Auto-Deploy Workflow

Every `git push` to `main` triggers:
1. GitHub Actions installs Node.js 20
2. Runs `npm ci` (clean install)
3. Runs `npm run build` (Vite build)
4. Deploys `/dist` to GitHub Pages

**No manual deploys needed** after initial setup.

---

## Adding Real Images

The Gallery page currently uses styled placeholder cards. To add real photos:

1. Add images to `/public/images/` folder
2. In `Gallery.jsx`, replace the `bg` color with an `img` path
3. Update `GalleryCard` component to use `<img src={item.img} alt={item.title} />`

For the hero and other sections, add images to `/public/images/` and reference them as `/images/filename.jpg` in CSS backgrounds.

---

## SEO Configuration

Meta tags are in `/index.html`:
- Update `og:image` with a real photo URL after adding images
- The `description` and `keywords` are already set
- Add Google Search Console verification meta tag if needed

---

## Updating Content

| What to update | File |
|----------------|------|
| Flavor list | `src/pages/Flavors.jsx` — edit `regularFlavors` or `seasonalFlavors` arrays |
| Franchise fees | `src/pages/Franchise.jsx` — edit investment amounts |
| Contact details | `src/pages/Contact.jsx` and `src/components/Footer.jsx` |
| Brand story | `src/pages/About.jsx` |
| Hero text | `src/pages/Home.jsx` |
| Colors/fonts | `src/index.css` (CSS variables at top) |

---

## Contact

**Bombay Chowpaty Kulfi**  
41/B HSIS Mosque Complex, Frazer Town, Bangalore, India  
📞 +91-9844119941 | +91-7892539163  
✉ bckkulfi@gmail.com
