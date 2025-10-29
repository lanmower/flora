# Claude - Technical Documentation

## Project Overview
Next.js v0.1.0 flora application - Herbal products e-commerce site

## Architecture

### Data Layer (lib/)
- types.ts - Core TypeScript interfaces (Product, Ingredient)
- ingredients.ts - Ingredients data and properties
- products.ts - Core product catalog
- additional-products.ts - Extended product offerings
- queries.ts - Data fetching functions and metadata
- data.ts - Re-export module for backward compatibility

### Application Structure (app/)
- page.tsx - Home page routing (imports HomePage component)
- layout.tsx - Root layout with providers
- components/HomePage.tsx - Main landing page component
- ingredients/ - Ingredients pages and components
- products/ - Product pages and components

### UI Components (components/ui/)
- shadcn/ui component library with customizations
- Large components (200+ lines) identified for future splitting:
  - chart.tsx (366 lines)
  - carousel.tsx (263 lines)
  - menubar.tsx (237 lines)
  - context-menu.tsx (201 lines)
  - dropdown-menu.tsx (201 lines)

## Key Technical Decisions

### Module Splitting Strategy
- Split files by logical function rather than arbitrary line counts
- Maintain backward compatibility through re-exports
- Keep related data and functions together
- Separate concerns: types, data, queries, and UI

### Import Resolution
- Fixed circular imports by updating to specific package exports
- Use relative imports for local modules
- Re-export pattern for clean external APIs

### File Size Guidelines
- Target: <200 lines per file
- Exceptions: Data files with structured content
- Focus on function complexity over line count

## Development Workflow
1. Always check existing implementations before creating new files
2. Maintain clean, DRY, generalized architecture
3. Continuous reorganization for simplicity
4. Ground all changes in real-world execution testing
5. Update documentation in real-time (CLAUDE.md, TODO.md, CHANGELOG.md)

## Current Status
- ✅ All frontend pages fully functional (Home, Products, Ingredients, Product detail)
- ✅ All data types and properties properly implemented
- ✅ Circular imports resolved
- ✅ Console logs removed
- ✅ Null safety checks added throughout
- ✅ Product and ingredient data complete with Unsplash images
- ✅ Decap CMS v3.8.4 integrated with GitHub backend
- ✅ Automated setup scripts created
- ✅ Complete documentation written
- 🔄 Large UI components identified for future splitting

## Decap CMS Integration
Decap CMS has been integrated for headless content management:
- Backend: GitHub with OAuth authentication
- Collections: Products, Ingredients, Testimonials, Settings
- Image handling: Automatic uploads to public/images/uploads
- Setup command: `npm run setup-cms`

To initialize CMS:
1. Create GitHub OAuth app at https://github.com/settings/developers/new
2. Run `npm run setup-cms` and enter credentials
3. Access at http://localhost:3000/admin/index.html

## Recent Changes (This Session)
- Fixed ingredient property handling (changed from non-existent benefits to properties)
- Added null safety for traditionalUses and icon rendering
- Integrated decap-cms-app@3.8.4 with --legacy-peer-deps
- Created OAuth authentication endpoint (app/api/auth/route.ts)
- Configured Decap CMS with complete schema
- Added automated setup and postinstall scripts
- Created 5 comprehensive documentation files for CMS setup
- Fixed config.yml to remove open_authoring conflict
