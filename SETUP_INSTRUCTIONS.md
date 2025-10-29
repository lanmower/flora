# 🌿 Flora Infusions - Complete Setup Guide

Welcome to Flora Infusions! This guide covers everything from initial setup to deploying with Decap CMS.

## 📋 Table of Contents

1. [Initial Setup](#initial-setup) - Get the project running
2. [Decap CMS Setup](#decap-cms-setup) - Configure content management
3. [Development Workflow](#development-workflow) - Work with content
4. [Deployment](#deployment) - Go live with your site

---

## 🚀 Initial Setup

### Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account

### 1. Install Dependencies

```bash
npm install
```

This will:
- ✓ Install all packages
- ✓ Run postinstall checks
- ✓ Create necessary directories

### 2. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

You'll see:
- ✓ Home page with featured products
- ✓ Products page with search and filters
- ✓ Ingredients page with details
- ✓ Navigation and footer

---

## 🎯 Decap CMS Setup

### One-Command Setup

**See:** [`AUTOMATIC_SETUP.md`](./AUTOMATIC_SETUP.md) - Everything automated!

### Quick Version (3 Steps)

#### Step 1: GitHub OAuth App

1. Go to: https://github.com/settings/developers/new
2. Create with these values:
   - **App name:** `Flora Infusions CMS`
   - **Homepage URL:** `http://localhost:3000`
   - **Callback URL:** `http://localhost:3000/admin`
3. Copy **Client ID** and **Client Secret**

#### Step 2: Run Setup Script

```bash
npm run setup-cms
```

The script will:
- Prompt for your GitHub credentials
- Create `.env.local` with secrets
- Set up all directories
- Generate sample data
- Verify everything works

#### Step 3: Access Admin Panel

```bash
npm run dev
```

Visit: http://localhost:3000/admin

Login with GitHub → Start managing content! 🎉

### Full Documentation

- **Auto Setup:** [`AUTOMATIC_SETUP.md`](./AUTOMATIC_SETUP.md)
- **Quick Start:** [`DECAP_QUICKSTART.md`](./DECAP_QUICKSTART.md)
- **Detailed Guide:** [`DECAP_CMS_SETUP.md`](./DECAP_CMS_SETUP.md)

---

## 💻 Development Workflow

### Project Structure

```
flora/
├── app/                          # Next.js app router
│   ├── page.tsx                 # Home page
│   ├── products/                # Product pages
│   ├── ingredients/             # Ingredients pages
│   └── api/auth/               # OAuth endpoint
├── components/                   # Reusable components
│   └── ui/                      # UI components
├── lib/                         # Data & utilities
│   ├── products.ts             # Products data
│   ├── ingredients.ts          # Ingredients data
│   ├── products-data/          # CMS products (JSON)
│   ├── ingredients-data/       # CMS ingredients (JSON)
│   ├── testimonials-data/      # CMS testimonials (JSON)
│   └── settings.json           # Site settings
├── public/
│   ├── admin/                  # Decap CMS interface
│   │   ├── config.yml         # CMS configuration
│   │   └── index.html         # Admin dashboard
│   └── images/                # Product & ingredient images
└── .env.local                 # Your secrets (not in Git!)
```

### Available Commands

```bash
npm run dev              # Start dev server
npm run build           # Build for production
npm start              # Start production server
npm run lint           # Lint code
npm run export         # Export static site
npm run setup-cms      # Configure Decap CMS
```

### Working with Content

#### Via Decap CMS (Recommended)

1. Visit http://localhost:3000/admin
2. Browse collections:
   - **Products** - Add/edit products
   - **Ingredients** - Manage ingredients
   - **Testimonials** - Add reviews
   - **Settings** - Update site info
3. Changes auto-save to Git!

#### Via Direct JSON Files

Products: `lib/products-data/*.json`
Ingredients: `lib/ingredients-data/*.json`
Testimonials: `lib/testimonials-data/*.json`

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Add Decap CMS"
   git push origin main
   ```

2. Connect repo to Vercel:
   - Go to https://vercel.com/new
   - Select your GitHub repo
   - Click Import

3. Add environment variables:
   - `GITHUB_CLIENT_ID` (from GitHub OAuth app)
   - `GITHUB_CLIENT_SECRET` (from GitHub OAuth app)
   - `NEXT_PUBLIC_SITE_URL` (your Vercel domain)

4. Deploy!

5. Update GitHub OAuth callback URL:
   - Old: `http://localhost:3000/admin`
   - New: `https://your-vercel-domain.vercel.app/admin`

6. CMS now works at: `https://your-domain.vercel.app/admin`

### Netlify

Same process as Vercel:

1. Connect GitHub repo to Netlify
2. Add environment variables
3. Update GitHub OAuth callback URL
4. Deploy!

### Self-Hosted

1. Deploy to your server (Docker, Ubuntu, etc.)
2. Set environment variables
3. Update GitHub OAuth callback URL
4. Restart application

---

## 🔐 Security Checklist

- [ ] `.env.local` is in `.gitignore`
- [ ] Never commit `.env.local`
- [ ] GitHub OAuth secrets saved securely
- [ ] Production uses HTTPS
- [ ] GitHub account has 2FA enabled
- [ ] OAuth app has strong secret
- [ ] Repository has branch protection

---

## ❓ Troubleshooting

### CMS Won't Load

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Restart dev server
npm run dev
```

### Can't Login to CMS

1. Verify GitHub Client ID is correct
2. Verify GitHub Client Secret is correct
3. Check callback URL is exactly: `http://localhost:3000/admin`
4. Clear browser cache and try again

### Environment Variables Not Working

1. Check `.env.local` exists in project root
2. Verify variables are set:
   ```bash
   echo $GITHUB_CLIENT_ID
   ```
3. Restart dev server after changing `.env.local`

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **AUTOMATIC_SETUP.md** | One-command automated setup |
| **DECAP_QUICKSTART.md** | 5-minute quick start |
| **DECAP_CMS_SETUP.md** | Comprehensive detailed guide |
| **SETUP_INSTRUCTIONS.md** | This file - overview |
| **CLAUDE.md** | Technical documentation |

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run setup-cms`
3. ✅ Start `npm run dev`
4. ✅ Visit http://localhost:3000/admin
5. ✅ Create your first product
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share with your team!

---

## 💡 Tips & Tricks

- **Mobile Admin:** CMS works on mobile/tablet too!
- **Offline Mode:** Draft changes offline, sync when online
- **Collaboration:** Multiple team members can edit simultaneously
- **Version Control:** Every change tracked in Git
- **Rollback:** Revert to any previous version via Git

---

## 🆘 Help & Support

- **Decap CMS Docs:** https://decapcms.org/
- **GitHub Issues:** Create an issue in this repo
- **Next.js Docs:** https://nextjs.org/docs

---

**Ready?** Start with `npm install` then `npm run setup-cms`! 🌿

