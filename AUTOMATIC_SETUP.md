# 🚀 Automatic Decap CMS Setup

One-command setup for Decap CMS! Everything is automated.

## ⚡ Ultra-Quick Start (2 Steps)

### Step 1: Create GitHub OAuth App (2 minutes)

Go to: **https://github.com/settings/developers/new**

Create with these exact values:
- **Application name:** `Flora Infusions CMS`
- **Homepage URL:** `http://localhost:3000`
- **Authorization callback URL:** `http://localhost:3000/admin`

Copy your:
- ✅ **Client ID**
- ✅ **Client Secret**

### Step 2: Run Setup Command

```bash
npm run setup-cms
```

This script will:
1. ✓ Create `.env.local` file
2. ✓ Prompt for your GitHub credentials
3. ✓ Save credentials securely
4. ✓ Create all required directories
5. ✓ Generate sample data files
6. ✓ Verify complete setup

### Step 3: Start & Access CMS

```bash
npm run dev
```

Visit: **http://localhost:3000/admin**

Click **"Login with GitHub"** → Done! 🎉

## 🔄 What Gets Automated

### Files Created
- `.env.local` - Secure environment configuration
- `lib/products-data/` - Product storage
- `lib/ingredients-data/` - Ingredient storage
- `lib/testimonials-data/` - Testimonial storage
- `public/images/uploads/` - Image uploads
- Sample JSON files for each collection

### Configuration
- GitHub OAuth setup
- Decap CMS config
- API authentication endpoint
- Environment variables

### Verification
- All required files present
- All directories created
- Configuration validated

## 🔐 Environment Variables

After running `npm run setup-cms`, your `.env.local` will contain:

```bash
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

⚠️ **Never commit `.env.local` to Git!**

## 📁 Directory Structure Created

```
flora/
├── lib/
│   ├── products-data/          ← Product JSON files
│   ├── ingredients-data/       ← Ingredient JSON files
│   ├── testimonials-data/      ← Testimonial JSON files
│   └── settings.json           ← Site settings
├── public/
│   ├── admin/
│   │   ├── config.yml         ← Decap config
│   │   └── index.html         ← Admin interface
│   └── images/
│       └── uploads/           ← Image uploads
└── .env.local                 ← Your secrets (created by setup)
```

## ✨ Features Included

✅ **Complete CMS Interface** - Manage all content from `/admin`
✅ **Image Management** - Auto-optimize images on upload
✅ **Git Integration** - All changes tracked in version control
✅ **Team Collaboration** - Edit content with team members
✅ **Automatic Backups** - Every change in Git history
✅ **Sample Data** - Pre-populated with examples
✅ **Full Documentation** - Built-in help and guides

## 🛠️ Customization

### Change Admin URL
Edit `public/admin/config.yml`:
```yml
auth_endpoint: api/auth-custom
```

### Add More Collections
Edit `public/admin/config.yml`:
```yml
collections:
  - name: your-collection
    label: Your Collection
    folder: lib/your-collection-data
    ...
```

### Custom Styles
Edit `public/admin/index.html`:
```html
<script src="https://unpkg.com/decap-cms-custom-build@3.0.0"></script>
```

## 🚀 Production Deployment

### Vercel/Netlify Auto-Setup
1. Push code to GitHub
2. Connect repo to Vercel/Netlify
3. Add environment variables:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `NEXT_PUBLIC_SITE_URL` (your domain)
4. Deploy!
5. CMS works immediately at `/admin`

### Self-Hosted
1. Set environment variables on server
2. Update GitHub OAuth redirect URL:
   - Old: `http://localhost:3000/admin`
   - New: `https://yourdomain.com/admin`
3. Deploy normally
4. Access CMS at `https://yourdomain.com/admin`

## 🐛 Troubleshooting

### Setup Script Issues

**"Command not found"**
```bash
chmod +x scripts/setup-decap.js
npm run setup-cms
```

**"Permission denied"**
```bash
npm install  # Re-run install for scripts
npm run setup-cms
```

**"Cannot find .env.example"**
- Ensure you're in project root
- Check `.env.example` exists in root directory

### CMS Login Issues

**"Failed to authenticate"**
- Verify Client ID matches GitHub app
- Check Client Secret is correct
- Ensure callback URL is exactly: `http://localhost:3000/admin`

**"Page not found at /admin"**
- Check `public/admin/index.html` exists
- Check `public/admin/config.yml` exists
- Clear browser cache
- Restart dev server

### Data Not Saving

**"Changes not appearing in Git"**
- Verify GitHub token has repo write access
- Check branch protection rules aren't blocking
- Ensure `.env.local` has correct credentials

## 📚 Documentation

- **Quick Start:** See `DECAP_QUICKSTART.md`
- **Full Guide:** See `DECAP_CMS_SETUP.md`
- **Official Docs:** https://decapcms.org/

## 🎯 Next Steps After Setup

1. ✅ Run `npm run setup-cms`
2. ✅ Login to `/admin`
3. ✅ Create your first product
4. ✅ Upload product images
5. ✅ Add ingredients
6. ✅ Create testimonials
7. ✅ Integrate CMS data in your components
8. ✅ Deploy to production

## 💡 Pro Tips

- **Drafts:** Save as draft before publishing
- **Preview:** Preview changes before committing
- **History:** All changes in Git - never lose data
- **Collaboration:** Multiple editors work seamlessly
- **Rollback:** Revert changes via Git history
- **Branches:** Test changes on feature branches

## 🔒 Security

✓ GitHub OAuth - Industry standard authentication
✓ API authentication - Secure token exchange
✓ Environment variables - Keep secrets safe
✓ Git-backed - Complete audit trail
✓ No database - Data stored in version control

---

**Questions?** Check the documentation or GitHub issues!

**Ready?** Run `npm run setup-cms` now! 🌿
