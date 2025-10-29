#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n🌿 Flora Infusions - Post-install Setup\n');

// Create directories
const dirs = [
  'lib/products-data',
  'lib/ingredients-data',
  'lib/testimonials-data',
  'public/images/uploads',
  'public/admin'
];

console.log('📁 Creating directories...');
dirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});
console.log('✓ Directories created\n');

// Ensure .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), '.env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('📝 Creating .env.local...');
  const envContent = fs.readFileSync(envExamplePath, 'utf-8');
  fs.writeFileSync(envPath, envContent);
  console.log('✓ .env.local created\n');
}

// Ensure admin files exist
const adminConfigPath = path.join(process.cwd(), 'public/admin/config.yml');
const adminIndexPath = path.join(process.cwd(), 'public/admin/index.html');

if (!fs.existsSync(adminConfigPath)) {
  console.log('⚠️  Admin config not found. Run: npm run setup-cms\n');
}

if (!fs.existsSync(adminIndexPath)) {
  console.log('⚠️  Admin interface not found. Run: npm run setup-cms\n');
}

console.log('✓ Post-install setup complete\n');
console.log('📖 Next: Run "npm run setup-cms" to configure Decap CMS\n');
