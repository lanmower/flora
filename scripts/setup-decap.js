#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

async function main() {
  console.log('\n🌿 Flora Infusions - Decap CMS Setup\n');
  console.log('This script will set up Decap CMS for your project.\n');

  // Step 1: Check .env.local
  const envPath = path.join(process.cwd(), '.env.local');
  const envExamplePath = path.join(process.cwd(), '.env.example');

  if (!fs.existsSync(envPath)) {
    console.log('📝 Creating .env.local file...');
    const envContent = fs.readFileSync(envExamplePath, 'utf-8');
    fs.writeFileSync(envPath, envContent);
    console.log('✓ .env.local created\n');
  } else {
    console.log('✓ .env.local already exists\n');
  }

  // Step 2: Get GitHub OAuth credentials
  console.log('🔐 GitHub OAuth Configuration\n');
  console.log('You need to create a GitHub OAuth app:');
  console.log('1. Go to: https://github.com/settings/developers/new');
  console.log('2. Fill in:');
  console.log('   - Application name: Flora Infusions CMS');
  console.log('   - Homepage URL: http://localhost:3000');
  console.log('   - Authorization callback URL: http://localhost:3000/admin\n');

  const proceed = await question('Do you have your GitHub OAuth credentials? (y/n): ');
  if (proceed.toLowerCase() !== 'y') {
    console.log('\n📖 Please create the OAuth app first, then run this script again.\n');
    rl.close();
    return;
  }

  const clientId = await question('GitHub Client ID: ');
  const clientSecret = await question('GitHub Client Secret: ');
  const siteUrl = await question('Site URL (default: http://localhost:3000): ') || 'http://localhost:3000';

  // Step 3: Update .env.local
  console.log('\n💾 Saving credentials to .env.local...');
  let envContent = fs.readFileSync(envPath, 'utf-8');
  envContent = envContent.replace(/GITHUB_CLIENT_ID=.*/g, `GITHUB_CLIENT_ID=${clientId}`);
  envContent = envContent.replace(/GITHUB_CLIENT_SECRET=.*/g, `GITHUB_CLIENT_SECRET=${clientSecret}`);
  envContent = envContent.replace(/NEXT_PUBLIC_SITE_URL=.*/g, `NEXT_PUBLIC_SITE_URL=${siteUrl}`);
  fs.writeFileSync(envPath, envContent);
  console.log('✓ Credentials saved\n');

  // Step 4: Create directories
  console.log('📁 Creating data directories...');
  const dirs = [
    'lib/products-data',
    'lib/ingredients-data',
    'lib/testimonials-data',
    'public/images/uploads'
  ];

  dirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✓ Created ${dir}`);
    }
  });
  console.log();

  // Step 5: Create sample data files
  console.log('📝 Creating sample data files...');
  createSampleData();
  console.log();

  // Step 6: Verify setup
  console.log('✓ Verifying setup...\n');
  verifySetup();

  console.log('✅ Decap CMS setup complete!\n');
  console.log('📚 Next steps:');
  console.log('1. Start the dev server: npm run dev');
  console.log('2. Visit: http://localhost:3000/admin');
  console.log('3. Click "Login with GitHub"');
  console.log('4. Start managing your content!\n');
  console.log('📖 For more help, see DECAP_QUICKSTART.md\n');

  rl.close();
}

function createSampleData() {
  const sampleProduct = {
    id: 'sample-product',
    name: 'Sample Product',
    description: 'This is a sample product created during setup',
    category: 'topical',
    price: 49.99,
    image: '/images/sample.jpg',
    stockStatus: 'in stock',
    rating: 5,
    reviews: 0,
    ingredients: ['cannabis-comfrey'],
    benefits: ['Sample benefit 1', 'Sample benefit 2'],
    usage: 'Apply as needed',
    size: '50ml',
    featured: true,
    new: false
  };

  const productsDir = path.join(process.cwd(), 'lib/products-data');
  const samplePath = path.join(productsDir, 'sample-product.json');

  if (!fs.existsSync(samplePath)) {
    fs.writeFileSync(samplePath, JSON.stringify(sampleProduct, null, 2));
    console.log('✓ Created sample product');
  }

  const sampleIngredient = {
    id: 'sample-ingredient',
    name: 'Sample Ingredient',
    scientificName: 'Sample officinale',
    description: 'This is a sample ingredient',
    category: 'healing',
    image: '/images/sample.jpg',
    origin: 'Sample Origin',
    properties: ['property-1', 'property-2'],
    traditionalUses: ['Traditional use 1', 'Traditional use 2']
  };

  const ingredientsDir = path.join(process.cwd(), 'lib/ingredients-data');
  const ingredientPath = path.join(ingredientsDir, 'sample-ingredient.json');

  if (!fs.existsSync(ingredientPath)) {
    fs.writeFileSync(ingredientPath, JSON.stringify(sampleIngredient, null, 2));
    console.log('✓ Created sample ingredient');
  }

  const sampleTestimonial = {
    id: 'sample-testimonial',
    name: 'Sample Customer',
    role: 'Sample Role',
    content: 'This is a sample testimonial created during setup.',
    rating: 5,
    product: 'sample-product',
    image: '/images/sample.jpg'
  };

  const testimonialsDir = path.join(process.cwd(), 'lib/testimonials-data');
  const testimonialPath = path.join(testimonialsDir, 'sample-testimonial.json');

  if (!fs.existsSync(testimonialPath)) {
    fs.writeFileSync(testimonialPath, JSON.stringify(sampleTestimonial, null, 2));
    console.log('✓ Created sample testimonial');
  }
}

function verifySetup() {
  const checks = [
    { file: '.env.local', name: 'Environment config' },
    { file: 'public/admin/config.yml', name: 'Decap config' },
    { file: 'public/admin/index.html', name: 'Admin interface' },
    { file: 'app/api/auth/route.ts', name: 'OAuth endpoint' },
    { dir: 'lib/products-data', name: 'Products directory' },
    { dir: 'lib/ingredients-data', name: 'Ingredients directory' },
    { dir: 'lib/testimonials-data', name: 'Testimonials directory' }
  ];

  let allGood = true;
  checks.forEach(check => {
    const fullPath = path.join(process.cwd(), check.file || check.dir);
    const exists = fs.existsSync(fullPath);
    const status = exists ? '✓' : '✗';
    console.log(`${status} ${check.name}`);
    if (!exists) allGood = false;
  });

  if (!allGood) {
    console.log('\n⚠️  Some files are missing. Please check the setup.\n');
  }
}

main().catch(console.error);
