# Megan The Restaurant — Shopify Theme

Premium Shopify Online Store 2.0 theme for Megan The Restaurant, Johnston, Rhode Island.

---

## Technology Stack

- Shopify Online Store 2.0
- Shopify Liquid
- JSON Templates
- Vanilla JavaScript (ES6+)
- CSS3 with custom properties
- No frameworks, no build tools required

---

## Requirements

- [Shopify CLI v3+](https://shopify.dev/docs/themes/tools/cli)
- Node.js 18+
- A Shopify development store

---

## Local Development

### 1. Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### 2. Authenticate

```bash
shopify auth login --store YOUR-STORE.myshopify.com
```

### 3. Start dev server

```bash
cd megan-restaurant-theme
shopify theme dev --store YOUR-STORE.myshopify.com
```

---

## Theme Check

```bash
shopify theme check
```

---

## Deploy to Shopify

```bash
# Push as unpublished draft
shopify theme push --unpublished --store YOUR-STORE.myshopify.com

# After client approval, publish
shopify theme publish --store YOUR-STORE.myshopify.com
```

---

## Git Workflow

```bash
git init
git checkout -b main
git checkout -b development

# Feature branches
git checkout -b feat/hero-section
git add .
git commit -m "feat: add homepage hero section"
git push origin feat/hero-section
```

---

## Theme Customization (No Code Required)

All content is editable from **Shopify Admin → Online Store → Customize**.

### Branding
- Logo: Theme Settings → Branding → Logo
- Restaurant name: Theme Settings → Branding → Restaurant name

### Colors
- Theme Settings → Colors

### Contact Info
- Theme Settings → Contact (address, phone, email, map URL)

### Opening Hours
- Theme Settings → Opening Hours (each day individually)

### Social Media
- Theme Settings → Social Media

### Reservation
- Theme Settings → Reservation → Reservation URL or Embed Code
- Compatible with: OpenTable, Resy, SevenRooms, Yelp Reservations, etc.

### Menu PDF
- Upload PDF to Shopify Admin → Content → Files
- Copy the file URL
- Paste into Theme Settings → Menu PDF → Menu PDF URL

---

## Metaobjects Setup

### Menu Item Metaobject

In Shopify Admin → Content → Metaobjects → Add definition:

**Type:** `menu_item`

| Field | Type | Key |
|-------|------|-----|
| Title | Single line text | `title` |
| Description | Multi-line text | `description` |
| Price | Single line text | `price` |
| Image | File (image) | `image` |
| Category | Single line text | `category` |
| Featured | True/False | `featured` |
| Dietary Info | Single line text | `dietary_info` |
| Sort Order | Integer | `sort_order` |
| Available | True/False | `available` |

Category values (use exactly): `starters`, `mains`, `seafood`, `steaks`, `pasta`, `desserts`, `drinks`

---

## Pages to Create in Shopify Admin

Go to **Shopify Admin → Online Store → Pages** and create:

| Page Title | Handle (URL) | Template |
|-----------|-------------|----------|
| About Us | `about` | `page.about` |
| Menu | `menu` | `page.menu` |
| Banquet Facilities | `banquets` | `page.banquets` |
| Catering Services | `catering` | `page.catering` |
| Gallery | `gallery` | `page.gallery` |
| Contact Us | `contact` | `page.contact` |
| Online Reservation | `reservation` | `page.reservation` |
| Menu Kit | `menu-kit` | `page.menu-kit` |

---

## Navigation Menus

Create in **Shopify Admin → Online Store → Navigation**:

### Main Menu (`main-menu`)
- Home → `/`
- About → `/pages/about`
- Menu → `/pages/menu`
- Banquets → `/pages/banquets`
- Catering → `/pages/catering`
- Gallery → `/pages/gallery`
- Contact → `/pages/contact`

### Footer Menu (`footer`)
- Home → `/`
- About → `/pages/about`
- Menu → `/pages/menu`
- Banquets → `/pages/banquets`
- Catering → `/pages/catering`
- Gallery → `/pages/gallery`
- Contact → `/pages/contact`
- Reservation → `/pages/reservation`

---

## Reservation Integration

The theme supports any reservation provider via:

1. **Direct URL** — Theme Settings → Reservation → Reservation URL  
   (Opens booking page in new tab)

2. **Embed Code** — Theme Settings → Reservation → Reservation embed code  
   (Paste iframe/widget code from your provider)

Compatible providers: OpenTable, Resy, SevenRooms, Yelp Reservations, Tock, and more.

---

## Domain Connection

After final approval:

1. Purchase domain `MEGANTHERESTAURANT.COM`
2. In Shopify Admin → Settings → Domains → Connect existing domain
3. Update DNS records as instructed by Shopify

---

## SEO

- Dynamic `<title>` and meta description per page
- Open Graph and Twitter Card tags
- JSON-LD structured data (Restaurant, LocalBusiness)
- Semantic HTML5
- Image alt text on all images
- Canonical URLs

---

## Performance

- Lazy loading on all below-fold images
- Responsive images with srcset
- Deferred JavaScript
- Google Fonts via preconnect
- No unnecessary third-party libraries
- Shopify CDN for all assets

---

## Accessibility

- WCAG 2.1 AA compliant structure
- Keyboard navigation throughout
- ARIA labels on interactive elements
- Visible focus states
- Skip to main content link
- Reduced motion support
- Screen reader friendly

---

## Content Replacement Checklist

Before going live, replace all placeholder content:

- [ ] Upload restaurant logo
- [ ] Add hero images (desktop + mobile)
- [ ] Update phone number in Theme Settings → Contact
- [ ] Update email in Theme Settings → Contact
- [ ] Add Google Maps embed URL
- [ ] Update opening hours in Theme Settings → Opening Hours
- [ ] Add social media URLs in Theme Settings → Social Media
- [ ] Configure reservation URL or embed code
- [ ] Upload menu PDF and add URL
- [ ] Add gallery images via Gallery section blocks
- [ ] Add menu items via Metaobjects
- [ ] Replace placeholder testimonials with real reviews
- [ ] Update banquet capacity information
- [ ] Add catering option details

---

## Troubleshooting

**Theme not loading locally:**
```bash
shopify theme dev --store YOUR-STORE.myshopify.com --live-reload full-page
```

**Metaobject items not showing:**
Ensure the metaobject type is exactly `menu_item` and items are set to `available: true`.

**Map not showing:**
Add a Google Maps embed URL (not API key) in Theme Settings → Contact → Map URL.
Get embed URL from: maps.google.com → Share → Embed a map → Copy HTML → extract `src` value.
