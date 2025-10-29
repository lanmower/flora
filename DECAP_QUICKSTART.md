# 🌿 Flora Infusions - Decap CMS Quick Start

## ⚡ 5-Minute Setup

### 1. Create GitHub OAuth App
- Visit: https://github.com/settings/developers/new
- Fill in:
  - App name: `Flora Infusions CMS`
  - Homepage URL: `http://localhost:3000`
  - Callback URL: `http://localhost:3000/admin`
- Copy the **Client ID** and **Client Secret**

### 2. Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
```
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start Server
```bash
npm run dev
```

### 4. Access CMS
Visit: http://localhost:3000/admin

Click **"Login with GitHub"** and authorize!

## 📚 What You Can Manage

✅ **Products** - Add/edit/delete products with images, prices, ingredients
✅ **Ingredients** - Manage ingredient database with properties & uses
✅ **Testimonials** - Add customer reviews and ratings
✅ **Settings** - Update site title, contact info, descriptions

## 📂 Where Data is Stored

```
lib/
├── products-data/          # Product JSON files
├── ingredients-data/       # Ingredient JSON files
├── testimonials-data/      # Testimonial JSON files
└── settings.json          # Site settings
```

All changes are saved to your Git repository automatically!

## 🚀 Production Deployment

### Vercel/Netlify:
1. Add environment variables in dashboard:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `NEXT_PUBLIC_SITE_URL` (your domain)
2. Deploy normally

### Self-Hosted:
1. Set environment variables on server
2. Update GitHub OAuth app callback URL to your production domain
3. Deploy with proper Git access

## 🔒 Security Checklist

- [ ] GitHub OAuth app created
- [ ] `.env.local` in `.gitignore` (don't commit!)
- [ ] Client secret saved securely
- [ ] Production domain uses HTTPS
- [ ] GitHub account has 2FA enabled

## ❓ Troubleshooting

**Can't login?**
- Verify Client ID/Secret are correct
- Check callback URL matches exactly
- Clear browser cache and try again

**Images won't upload?**
- Create `public/images/uploads` directory
- Check Git write permissions
- Verify media folder path in config.yml

**Changes not visible?**
- Pull latest changes from GitHub
- Clear Next.js cache: `rm -rf .next`
- Restart dev server

## 📖 Full Documentation

See `DECAP_CMS_SETUP.md` for comprehensive setup guide and advanced configuration.

## 💡 Tips

- Use **Markdown** for text fields
- Images auto-optimize before upload
- All changes tracked in Git history
- Collaborate with team via GitHub branches
- Preview changes before publishing

---

**Ready?** Go to http://localhost:3000/admin and start managing content! 🎉
