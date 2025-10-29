# Decap CMS Setup Guide for Flora Infusions

Decap CMS (formerly Netlify CMS) provides a Git-backed content management interface for managing products, ingredients, testimonials, and site settings.

## 📋 Prerequisites

- GitHub repository (public or private)
- GitHub OAuth application
- Node.js 18+

## 🔐 Step 1: Create GitHub OAuth Application

1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: Flora Infusions CMS
   - **Homepage URL**: `http://localhost:3000` (for development) or your production domain
   - **Authorization callback URL**: `http://localhost:3000/admin` (for development) or `https://yourdomain.com/admin` (production)
4. Copy the **Client ID** and **Client Secret**

## 🔧 Step 2: Set Environment Variables

1. Create a `.env.local` file from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your GitHub OAuth credentials:
   ```
   GITHUB_CLIENT_ID=your_client_id_here
   GITHUB_CLIENT_SECRET=your_client_secret_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## 🚀 Step 3: Access Decap CMS

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000/admin

3. Click "Login with GitHub"

4. Authorize the application when prompted

## 📝 Collections Overview

### Products
Manage your product catalog with the following fields:
- **ID**: Unique identifier
- **Name**: Product name
- **Description**: Product description
- **Category**: topical, oil, tincture, extract, or soap
- **Price**: Product price
- **Image**: Product image
- **Stock Status**: in stock, low stock, out of stock
- **Rating**: 0-5 stars
- **Reviews**: Number of reviews
- **Ingredients**: List of ingredient IDs
- **Benefits**: List of product benefits
- **Usage**: Usage instructions
- **Size**: Product size/quantity
- **Featured**: Display on home page
- **New**: Mark as new product

### Ingredients
Manage natural ingredients database:
- **ID**: Unique identifier
- **Name**: Ingredient name
- **Scientific Name**: Latin scientific name
- **Description**: Ingredient description
- **Category**: healing, detox, skin, or immune
- **Image**: Ingredient image
- **Origin**: Geographic origin
- **Properties**: List of properties/characteristics
- **Traditional Uses**: List of traditional uses

### Testimonials
Manage customer testimonials:
- **ID**: Unique identifier
- **Name**: Customer name
- **Role**: Customer role/title (e.g., "Wellness Enthusiast")
- **Content**: Testimonial text
- **Rating**: 1-5 stars
- **Product ID**: Associated product ID
- **Image**: Customer photo

### Settings
Manage site-wide settings:
- **Site Title**: Main site title
- **Site Description**: Meta description
- **Contact Email**: Support email
- **Contact Phone**: Support phone number

## 📁 Data Structure

Changes made in Decap CMS are saved as JSON files in the following directories:

```
lib/
├── products-data/       # Individual product JSON files
├── ingredients-data/    # Individual ingredient JSON files
├── testimonials-data/   # Individual testimonial JSON files
└── settings.json        # Site-wide settings
```

## 🔄 Integrating with Your Application

The data saved by Decap CMS can be consumed in your application. You'll need to:

1. Create import statements that read from the new data directories
2. Update data fetching logic to use Decap CMS data
3. Or maintain a hybrid approach where both static and CMS data are used

Example integration:
```typescript
import fs from 'fs';
import path from 'path';

export async function getProductsFromCMS() {
  const productsDir = path.join(process.cwd(), 'lib/products-data');
  const files = fs.readdirSync(productsDir);

  return files.map(file => {
    const content = fs.readFileSync(
      path.join(productsDir, file),
      'utf-8'
    );
    return JSON.parse(content);
  });
}
```

## 🚀 Deployment

### For Vercel/Netlify:
1. Add environment variables to your deployment platform:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
   - `NEXT_PUBLIC_SITE_URL` (your production domain)

2. Deploy your application normally - Decap CMS will work with your GitHub repository

### For Self-Hosted:
1. Set environment variables on your server
2. Ensure your server can access GitHub API
3. Configure the authorization callback URL in your GitHub OAuth app

## 🔒 Security Notes

- **Never commit** `.env.local` to version control
- Keep your GitHub Client Secret secure
- Use branch protection rules on your repository
- Consider enabling two-factor authentication on your GitHub account
- For production, use a custom domain with HTTPS

## 🐛 Troubleshooting

### "Failed to authenticate" error
- Verify GitHub Client ID and Secret are correct
- Check that authorization callback URL matches your site URL
- Ensure GitHub OAuth app is configured correctly

### Images not uploading
- Check that `public/images/uploads` directory exists and is writable
- Verify media folder path in `config.yml`
- Ensure proper Git permissions for the repository

### Changes not appearing
- Verify you're on the correct Git branch
- Check that files are being created in the correct directories
- Pull the latest changes from GitHub

## 📚 Resources

- [Decap CMS Documentation](https://decapcms.org/)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🎯 Next Steps

1. Configure GitHub OAuth credentials
2. Access the admin panel at `/admin`
3. Create or edit products, ingredients, and testimonials
4. Integrate CMS data with your application
5. Test the workflow on a staging environment before production
