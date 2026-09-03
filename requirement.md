# MEGAN THE RESTAURANT SHOPIFY WEBSITE

You are a **Senior Shopify Theme Architect, Full-Stack Developer, UI/UX Designer, and Technical Lead**.

Your task is to design and build a **production-ready, premium restaurant website for "Megan The Restaurant" using Shopify Online Store 2.0**.

The website must be elegant, modern, premium, highly responsive, fast, SEO-friendly, accessible, and easy for the restaurant owner to manage from Shopify Admin without requiring technical knowledge.

---

# 1. BUSINESS INFORMATION

## Restaurant

**Name:** Megan The Restaurant

**Business Manager:** Mr. Larry Derris Adam

**Address:**
1163 Central A
Johnston, Rhode Island
USA 02919

**Preferred Domain:**
MEGANTHERESTAURANT.COM

## Business Type

Premium restaurant / bar / café with:

* Dine-in
* Banquet facilities
* Catering services
* Private events
* Online reservations
* Menu
* Gallery
* Contact information

The website is primarily an **informational and reservation website**.

## IMPORTANT

There must be:

* NO shopping cart
* NO product checkout
* NO ecommerce flow
* NO fake Shopify product purchasing flow

Restaurant reservations must be handled through a proper reservation/booking mechanism.

---

# 2. PRIMARY OBJECTIVE

Create a website that feels like a **high-end American restaurant website**.

The visual experience should communicate:

* Premium
* Elegant
* Sophisticated
* Warm
* Modern
* Trustworthy
* Upscale dining
* Professional hospitality

The website should NOT look like a generic Shopify ecommerce store.

It should feel like a custom-designed restaurant website.

---

# 3. DESIGN INSPIRATION

Use the following websites as UX/layout inspiration:

1. [https://websitedemos.net/italian-restaurant-02/](https://websitedemos.net/italian-restaurant-02/)
2. [https://websitedemos.net/restaurant-04/](https://websitedemos.net/restaurant-04/)

Do NOT copy their design, content, branding, images, or code.

Use them only as inspiration for:

* Layout hierarchy
* Restaurant storytelling
* Navigation
* Menu presentation
* Reservation CTA
* Gallery
* About section
* Contact structure
* Overall hospitality experience

Create an original design for Megan The Restaurant.

---

# 4. TECHNOLOGY REQUIREMENTS

Use:

* Shopify Online Store 2.0
* Shopify Liquid
* JSON templates
* Shopify Sections
* Shopify Section Schema
* Shopify Theme Settings
* Shopify Metaobjects where appropriate
* HTML5
* CSS3
* Vanilla JavaScript

Avoid unnecessary frameworks.

DO NOT build:

* React frontend
* Next.js frontend
* Node.js backend
* Express backend
* MongoDB database
* Custom admin panel

Shopify should act as the CMS and hosting platform.

---

# 5. DEVELOPMENT REQUIREMENTS

The theme must be developed locally using:

* Shopify CLI
* VS Code
* Git
* GitHub

Development command:

```bash
shopify theme dev --store STORE_NAME
```

Production deployment:

```bash
shopify theme push --unpublished
```

After final approval:

```bash
shopify theme publish
```

The theme must be compatible with Shopify Online Store 2.0.

---

# 6. RESPONSIVE REQUIREMENTS

The website must be fully responsive.

Support:

* Desktop
* Laptop
* Tablet
* Mobile
* Small mobile devices

Primary breakpoints:

```text
1440px+
1200px
1024px
768px
576px
375px
```

Do not simply shrink desktop layouts.

Design mobile layouts intentionally.

The mobile experience must include:

* Mobile navigation
* Large readable typography
* Proper touch targets
* Responsive images
* Responsive buttons
* Proper spacing
* Sticky/accessible CTA where appropriate
* Fast loading

---

# 7. GLOBAL WEBSITE STRUCTURE

Create the following pages:

1. Home
2. About Us
3. Menu
4. Banquet Facilities
5. Gallery
6. Catering Services
7. Contact Us
8. Visiting Hours
9. Online Reservation
10. Menu Kit

---

# 8. HEADER

Create a premium restaurant header.

Desktop:

```text
LOGO

Home
About
Menu
Banquets
Catering
Gallery
Contact

[ BOOK A TABLE ]
```

Mobile:

```text
LOGO                         ☰
```

Mobile menu should open as a polished drawer/overlay.

Header requirements:

* Transparent header over hero where appropriate
* Sticky header after scrolling
* Smooth transition between transparent and solid states
* Premium typography
* Proper spacing
* Reservation CTA
* Accessible keyboard navigation
* ARIA labels
* Focus states

The restaurant logo must be configurable from Shopify Theme Customizer.

---

# 9. HOMEPAGE

Create the homepage using modular Shopify sections.

Recommended structure:

```text
HEADER
↓
HERO
↓
WELCOME / INTRO
↓
ABOUT
↓
SIGNATURE MENU
↓
BANQUET / EVENTS
↓
CATERING
↓
GALLERY
↓
TESTIMONIALS
↓
RESERVATION CTA
↓
VISITING HOURS
↓
LOCATION / MAP
↓
CONTACT
↓
FOOTER
```

---

# 10. HERO SECTION

Create a premium full-width hero.

Hero should contain:

* Large restaurant image/video
* Dark elegant overlay
* Restaurant name
* Short headline
* Supporting text
* Primary CTA
* Secondary CTA

Example structure:

```text
MEGAN THE RESTAURANT

Exceptional Food.
Memorable Moments.

Experience thoughtfully prepared food,
warm hospitality and unforgettable gatherings.

[ BOOK A TABLE ]
[ EXPLORE MENU ]
```

Do not hard-code the text.

Everything should be editable from Shopify Theme Customizer.

Hero settings should include:

* Desktop image
* Mobile image
* Optional video
* Heading
* Subheading
* Button text
* Button URL
* Secondary button
* Overlay opacity
* Text alignment
* Section height
* Enable/disable animation

---

# 11. ABOUT SECTION

Create a sophisticated restaurant introduction.

Content:

* Heading
* Description
* Image
* Optional secondary image
* CTA
* Small decorative element

Example:

```text
A PLACE TO GATHER

More Than Just A Meal

Megan The Restaurant brings together
exceptional food, welcoming hospitality
and an atmosphere designed for memorable moments.
```

All content must be editable.

---

# 12. MENU SECTION

Create a premium menu preview.

Display categories such as:

* Starters
* Main Course
* Seafood
* Steaks
* Pasta
* Desserts
* Drinks

Do NOT hard-code menu items.

Use Shopify Metaobjects.

Create a Menu Item Metaobject with:

```text
Name
Description
Price
Image
Category
Featured
Dietary Information
Display Order
Availability
```

Create a Menu Category structure.

The menu should support:

* Category filtering
* Featured items
* Images
* Prices
* Descriptions
* Dietary labels
* Mobile-friendly layout

Admin should be able to add/edit/delete menu items from Shopify Admin.

---

# 13. FULL MENU PAGE

Create a dedicated `/pages/menu` page.

Requirements:

* Premium menu layout
* Category navigation
* Menu items
* Prices
* Descriptions
* Optional images
* Dietary labels
* Responsive design

Do not use Shopify cart functionality.

---

# 14. MENU KIT

Create a dedicated Menu Kit page.

This section should support downloadable menu files.

Possible content:

```text
VIEW OUR MENU

Download our complete menu.

[ DOWNLOAD MENU PDF ]
```

The PDF URL must be configurable through Shopify Theme Settings or page content.

Allow future replacement of the PDF without code changes.

---

# 15. BANQUET FACILITIES

Create a dedicated Banquet Facilities page.

Include:

* Hero
* Introduction
* Venue images
* Capacity information
* Event types
* Features
* Amenities
* CTA
* Reservation/contact CTA

Possible event types:

* Weddings
* Corporate Events
* Birthday Parties
* Private Dining
* Anniversaries
* Celebrations
* Receptions

Do not invent specific capacities or facilities.

Create editable fields so the actual restaurant information can be entered later.

---

# 16. CATERING PAGE

Create a dedicated Catering Services page.

Sections:

```text
Hero
↓
Catering Introduction
↓
Catering Options
↓
Why Choose Us
↓
Gallery
↓
Request Catering CTA
↓
Contact
```

Possible CTA:

```text
PLAN YOUR NEXT EVENT

[ REQUEST CATERING ]
```

Create a catering inquiry form.

Fields:

* Name
* Email
* Phone
* Event Date
* Event Type
* Number of Guests
* Message

The form must validate input and provide success/error states.

---

# 17. GALLERY

Create a premium restaurant gallery.

Requirements:

* Responsive masonry/grid layout
* Lazy loading
* Lightbox
* Keyboard accessibility
* Mobile swipe-friendly experience
* Image alt text
* Optional captions

Images must be manageable through Shopify.

Do not hard-code image URLs.

Create a reusable Gallery section with blocks.

Each block should allow:

* Image
* Alt text
* Caption
* Optional link

---

# 18. RESERVATION PAGE

Create a dedicated reservation page.

IMPORTANT:

Do NOT implement reservations using:

* Shopify cart
* Shopify checkout
* Fake forms pretending to make reservations

Use a proper reservation service/app integration.

The architecture should allow integration with a reservation provider.

Reservation UI should support:

* Date
* Time
* Number of guests
* Name
* Email
* Phone
* Special requests

Display:

```text
BOOK YOUR TABLE

Reserve your table at Megan The Restaurant.

[ Reservation Widget ]
```

The reservation provider must be configurable.

If an external booking app is required, keep the theme integration modular so the booking app can be replaced later.

---

# 19. VISITING HOURS

Create a dedicated Visiting Hours section.

Example structure:

```text
VISIT US

Monday       Closed
Tuesday      5:00 PM – 10:00 PM
Wednesday    5:00 PM – 10:00 PM
Thursday     5:00 PM – 10:00 PM
Friday       5:00 PM – 11:00 PM
Saturday     5:00 PM – 11:00 PM
Sunday       Closed
```

IMPORTANT:

These are placeholders.

Do NOT assume these are the restaurant's actual hours.

Make all hours editable from Shopify Theme Customizer.

Support:

* Open/closed status
* Multiple time ranges per day
* Special hours
* Holiday notice

---

# 20. CONTACT PAGE

Create a professional Contact page.

Include:

```text
MEGAN THE RESTAURANT

1163 Central A
Johnston, Rhode Island
02919
USA
```

Include:

* Phone
* Email
* Address
* Google Maps
* Social media
* Opening hours
* Reservation CTA

All information must be configurable.

---

# 21. GOOGLE MAP

Add a location section.

Requirements:

* Google Maps embed OR configurable map URL
* Address
* "Get Directions" button
* Mobile responsive
* Lazy loading where possible

Do not expose private API keys in frontend code.

---

# 22. FOOTER

Create a premium footer.

Include:

```text
LOGO

Quick Links
Home
About
Menu
Banquets
Catering
Gallery
Contact

Contact
Address
Phone
Email

Opening Hours

Social Media

© Megan The Restaurant
All Rights Reserved
```

Social links must be editable through Theme Settings.

---

# 23. DESIGN SYSTEM

Create a reusable design system.

Use CSS variables.

Example:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-muted: ...;
  --color-accent: ...;
  --color-border: ...;

  --font-heading: ...;
  --font-body: ...;

  --container-width: 1280px;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --shadow-sm: ...;
  --shadow-md: ...;

  --spacing-xs: ...;
  --spacing-sm: ...;
  --spacing-md: ...;
  --spacing-lg: ...;
  --spacing-xl: ...;
}
```

Choose an elegant restaurant color palette.

Preferred visual direction:

* Deep dark tones
* Warm neutral tones
* Elegant accent color
* Off-white typography
* Subtle borders
* Premium imagery

Avoid excessive gradients.

Avoid overly flashy animations.

---

# 24. TYPOGRAPHY

Use premium typography.

Recommended approach:

* Elegant serif/display font for headings
* Clean sans-serif for body
* Strong hierarchy

Typography must remain readable on mobile.

Do not use too many font families.

---

# 25. ANIMATIONS

Use subtle animations only.

Include:

* Fade-up
* Fade-in
* Image reveal
* Button hover
* Navigation transitions
* Smooth scrolling
* Gallery transitions

Animations must:

* Be lightweight
* Not block page interaction
* Respect `prefers-reduced-motion`

Example:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 26. SHOPIFY THEME CUSTOMIZER

This is extremely important.

The restaurant owner must be able to modify content without touching code.

Theme settings should include:

## Branding

* Logo
* Favicon
* Restaurant name

## Colors

* Background
* Text
* Accent
* Buttons
* Borders

## Typography

* Heading font
* Body font
* Heading scale

## Contact

* Phone
* Email
* Address
* Map URL

## Social

* Instagram
* Facebook
* TikTok
* Other social profiles

## Reservation

* Reservation URL/embed
* Reservation button text

## General

* Enable animations
* Container width
* Button style

---

# 27. SHOPIFY METAOBJECTS

Use Metaobjects where structured content is needed.

Create:

## Menu Item

Fields:

```text
title
description
price
image
category
featured
dietary_info
sort_order
available
```

## Gallery Item

Fields:

```text
image
alt_text
caption
category
sort_order
```

## Testimonial

Fields:

```text
customer_name
review
rating
date
image
featured
```

Do not over-engineer Metaobjects.

Use them where they provide real value.

---

# 28. SHOPIFY SECTIONS

Create reusable sections.

Recommended:

```text
header.liquid
hero.liquid
about.liquid
menu-preview.liquid
menu-categories.liquid
menu-item.liquid
banquet.liquid
catering.liquid
gallery.liquid
testimonials.liquid
reservation.liquid
visiting-hours.liquid
contact.liquid
map.liquid
cta.liquid
footer.liquid
```

Every major section must have a valid Shopify schema.

---

# 29. SHOPIFY TEMPLATES

Create:

```text
templates/index.json

templates/page.about.json
templates/page.menu.json
templates/page.banquets.json
templates/page.catering.json
templates/page.gallery.json
templates/page.contact.json
templates/page.menu-kit.json
templates/page.reservation.json
```

The homepage must be assembled through JSON sections.

---

# 30. RECOMMENDED FOLDER STRUCTURE

Use:

```text
megan-restaurant-theme/
│
├── assets/
│   ├── base.css
│   ├── responsive.css
│   ├── theme.js
│   ├── animations.js
│   └── component-specific files
│
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
│
├── layout/
│   └── theme.liquid
│
├── sections/
│   ├── header.liquid
│   ├── hero.liquid
│   ├── about.liquid
│   ├── menu-preview.liquid
│   ├── menu-categories.liquid
│   ├── banquet.liquid
│   ├── catering.liquid
│   ├── gallery.liquid
│   ├── testimonials.liquid
│   ├── reservation.liquid
│   ├── visiting-hours.liquid
│   ├── contact.liquid
│   ├── map.liquid
│   ├── cta.liquid
│   └── footer.liquid
│
├── snippets/
│   ├── menu-item.liquid
│   ├── button.liquid
│   ├── icon.liquid
│   ├── image.liquid
│   └── responsive-image.liquid
│
├── templates/
│   ├── index.json
│   ├── page.about.json
│   ├── page.menu.json
│   ├── page.banquets.json
│   ├── page.catering.json
│   ├── page.gallery.json
│   ├── page.contact.json
│   ├── page.menu-kit.json
│   └── page.reservation.json
│
├── locales/
│   └── en.default.json
│
└── README.md
```

---

# 31. SEO

Implement proper SEO.

Include:

* Dynamic `<title>`
* Meta description
* Canonical URL
* Open Graph tags
* Twitter/X card
* Semantic HTML
* Proper heading hierarchy
* Image alt text
* Breadcrumb support
* Restaurant structured data

Implement JSON-LD for:

```text
Restaurant
LocalBusiness
WebSite
BreadcrumbList
```

Do not invent business information.

Use Shopify dynamic values wherever possible.

---

# 32. PERFORMANCE

Optimize for Core Web Vitals.

Requirements:

* Lazy load below-the-fold images
* Responsive image sizes
* Avoid unnecessarily large images
* Minimize JavaScript
* Avoid unnecessary third-party libraries
* Use Shopify CDN assets
* Avoid render-blocking scripts
* Use `defer` where appropriate
* Avoid layout shift
* Set image dimensions
* Optimize fonts

Target:

```text
Excellent Lighthouse Performance
Excellent Accessibility
Excellent SEO
Excellent Best Practices
```

---

# 33. ACCESSIBILITY

Follow WCAG principles.

Requirements:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* ARIA labels where needed
* Accessible forms
* Accessible navigation
* Proper contrast
* Image alt text
* Reduced motion support
* Screen-reader friendly buttons
* Accessible modal/lightbox

Do not use `<div>` elements as buttons unnecessarily.

---

# 34. SECURITY

Do not expose:

* API keys
* Private credentials
* Access tokens
* Secrets

Do not hard-code sensitive information into Liquid/JavaScript.

External integrations must use appropriate secure mechanisms.

---

# 35. FORMS

All forms must include:

* Client-side validation
* Required fields
* Email validation
* Phone validation
* Error messages
* Success state
* Accessible labels
* Spam protection where appropriate

Forms should not reload the entire page unnecessarily.

---

# 36. URL STRUCTURE

Use clean URLs.

Example:

```text
/
 /pages/about
 /pages/menu
 /pages/banquets
 /pages/catering
 /pages/gallery
 /pages/contact
 /pages/reservation
 /pages/menu-kit
```

Do not create unnecessary nested routes.

---

# 37. NAVIGATION

Primary navigation:

```text
Home
About
Menu
Banquets
Catering
Gallery
Contact
```

Primary CTA:

```text
Book a Table
```

Make navigation configurable.

---

# 38. CONTENT MANAGEMENT

The client must be able to modify:

* Hero
* About
* Menu
* Images
* Gallery
* Banquet information
* Catering information
* Testimonials
* Opening hours
* Contact information
* Social links
* Reservation link
* Menu PDF

WITHOUT modifying code.

---

# 39. NO FAKE DATA IN PRODUCTION

Use clearly marked placeholder content during development.

For example:

```text
[RESTAURANT PHONE]
[RESTAURANT EMAIL]
[ACTUAL OPENING HOURS]
[RESERVATION URL]
```

Do not invent:

* Phone numbers
* Email addresses
* Prices
* Opening hours
* Restaurant claims
* Capacity
* Reviews
* Awards
* Food items

Where real content is unavailable, create editable placeholder fields.

---

# 40. GALLERY IMAGE REQUIREMENT

The architecture must make it easy to replace all placeholder images with the restaurant's actual photos later.

Never embed important restaurant images directly into CSS.

Use Shopify image settings.

---

# 41. CODE QUALITY

Write production-quality code.

Requirements:

* Clean Liquid
* Reusable snippets
* Minimal duplication
* Meaningful variable names
* Comments only where useful
* No dead code
* No unnecessary dependencies
* No console errors
* No broken links
* No invalid Liquid syntax

Follow Shopify theme development best practices.

---

# 42. THEME CHECK

Before finalizing, run:

```bash
shopify theme check
```

Fix all possible errors and warnings.

Also verify:

```text
Liquid syntax
Schema validation
JSON templates
CSS
JavaScript
Accessibility
Broken links
Responsive behavior
```

---

# 43. TESTING CHECKLIST

Test on:

## Desktop

* Chrome
* Safari
* Firefox
* Edge

## Mobile

* iPhone
* Android

Test:

* Header
* Mobile menu
* Hero
* Buttons
* Menu
* Gallery
* Lightbox
* Reservation
* Forms
* Map
* Footer
* Navigation
* Scrolling
* Images
* Keyboard navigation

---

# 44. SHOPIFY ADMIN TEST

Verify that a non-technical restaurant owner can:

1. Change logo
2. Change hero image
3. Change hero heading
4. Change hero buttons
5. Add menu item
6. Edit menu item
7. Remove menu item
8. Change prices
9. Add gallery image
10. Change opening hours
11. Change contact details
12. Change social links
13. Change reservation URL
14. Upload new Menu PDF

without editing code.

---

# 45. GIT/GITHUB

Initialize Git:

```bash
git init
```

Create:

```text
main
development
```

Use meaningful commits:

```text
feat: create Shopify theme foundation
feat: build responsive header
feat: add homepage hero
feat: add restaurant about section
feat: add menu metaobject integration
feat: add banquet section
feat: add catering page
feat: add gallery
feat: add reservation integration
feat: add contact and map
feat: optimize SEO
perf: optimize images and assets
fix: mobile navigation
fix: responsive layout
```

---

# 46. DEVELOPMENT WORKFLOW

Follow this exact workflow.

## STEP 1

Initialize Shopify theme.

## STEP 2

Create theme architecture.

## STEP 3

Build global design system.

## STEP 4

Build header/footer.

## STEP 5

Build homepage.

## STEP 6

Build all inner pages.

## STEP 7

Implement Metaobjects.

## STEP 8

Implement reservation integration architecture.

## STEP 9

Implement forms.

## STEP 10

Implement SEO.

## STEP 11

Implement accessibility.

## STEP 12

Optimize performance.

## STEP 13

Run Theme Check.

## STEP 14

Test desktop/mobile.

## STEP 15

Push unpublished theme to Shopify.

## STEP 16

Prepare client preview.

## STEP 17

After approval, publish production theme.

---

# 47. DOMAIN

The production domain will be:

```text
MEGANTHERESTAURANT.COM
```

The domain should be connected to Shopify after the final store is ready.

Do not use the production domain during early development.

Use a Shopify development store such as:

```text
megan-restaurant-dev.myshopify.com
```

---

# 48. HOSTING

Do NOT configure:

* Hostinger
* cPanel
* Apache
* Nginx
* VPS
* AWS EC2

for the Shopify storefront.

Shopify will host the production storefront.

The custom theme is deployed directly to Shopify.

---

# 49. IMPORTANT ARCHITECTURAL RULE

The final system should look like:

```text
Developer Mac
      │
      ▼
VS Code
      │
      ▼
Shopify CLI
      │
      ▼
GitHub
      │
      ▼
Shopify Development Store
      │
      ├── Shopify Admin
      │      ├── Pages
      │      ├── Theme Editor
      │      ├── Metaobjects
      │      ├── Files
      │      └── Settings
      │
      ▼
Draft Theme
      │
      ▼
Client Approval
      │
      ▼
Production Theme
      │
      ▼
MEGANTHERESTAURANT.COM
```

---

# 50. DO NOT OVER-ENGINEER

This is a restaurant website, not an ecommerce SaaS application.

Do NOT create unnecessary:

* Backend servers
* Databases
* APIs
* Authentication
* Admin dashboards
* Microservices
* React applications

Use Shopify's native capabilities wherever possible.

Only use external services when genuinely necessary.

---

# 51. UI/UX QUALITY BAR

The final website should feel like a professionally designed restaurant brand.

Avoid:

* Generic Bootstrap-looking layouts
* Excessive cards
* Excessive rounded corners
* Cheap-looking gradients
* Excessive animations
* Crowded sections
* Huge blocks of text
* Poor mobile layouts
* Generic ecommerce UI
* Stock-dashboard styling

Prefer:

* Strong visual hierarchy
* Large restaurant photography
* Elegant typography
* Generous whitespace
* Sophisticated spacing
* Subtle animation
* Premium CTA buttons
* Clean grid systems
* High-quality imagery
* Strong storytelling

---

# 52. HOMEPAGE VISUAL HIERARCHY

Prioritize:

```text
Restaurant Identity
        ↓
Food & Atmosphere
        ↓
Story
        ↓
Menu
        ↓
Events / Banquets
        ↓
Catering
        ↓
Social Proof
        ↓
Reservation
        ↓
Location
```

The primary conversion goal is:

# BOOK A TABLE

The secondary goals are:

* View Menu
* Contact Restaurant
* Catering Inquiry
* Banquet Inquiry

---

# 53. IMPORTANT CTA RULE

Use consistent CTA labels.

Primary:

```text
BOOK A TABLE
```

Secondary:

```text
VIEW MENU
```

Additional:

```text
PLAN YOUR EVENT
REQUEST CATERING
CONTACT US
GET DIRECTIONS
```

---

# 54. FINAL DELIVERABLES

At completion, provide:

1. Complete Shopify theme
2. All Liquid files
3. All JSON templates
4. CSS
5. JavaScript
6. Shopify schemas
7. Metaobject definitions/documentation
8. SEO implementation
9. Accessibility implementation
10. Responsive implementation
11. README
12. Local development instructions
13. Shopify deployment instructions
14. GitHub setup instructions
15. Client content replacement instructions
16. Reservation integration instructions

---

# 55. README REQUIREMENTS

Create a comprehensive README containing:

```text
Project Overview

Technology Stack

Requirements

Shopify CLI Installation

Local Development

Shopify Store Connection

Theme Development

Theme Check

Git Workflow

Shopify Deployment

Publishing Theme

Domain Connection

Theme Customization

Metaobjects

Menu Management

Gallery Management

Reservation Integration

SEO

Performance

Troubleshooting
```

---

# 56. FINAL ACCEPTANCE CRITERIA

The project is considered complete only when:

* Website is fully responsive
* Homepage is production quality
* All requested pages exist
* Navigation works
* Mobile navigation works
* Menu is CMS-driven
* Gallery is CMS-driven
* Reservation system is properly integrated/configurable
* Forms work
* Map works
* Contact information is editable
* Opening hours are editable
* Social links are editable
* Menu PDF is configurable
* SEO is implemented
* Accessibility is implemented
* Performance is optimized
* No cart is present
* No checkout flow is present
* No unnecessary backend exists
* Shopify Theme Check passes
* No console errors
* No broken links
* Git repository is clean
* Theme can be pushed to Shopify
* Client can manage content from Shopify Admin

---

# 57. DEVELOPMENT INSTRUCTION TO THE AI

Do not attempt to build the entire project blindly in one step.

Work incrementally.

For every major implementation:

1. Explain what you are going to build.
2. Create the required files.
3. Implement the feature.
4. Check for syntax errors.
5. Check Shopify compatibility.
6. Check responsive behavior.
7. Check accessibility.
8. Continue to the next feature.

Before writing code, inspect the existing project structure.

If files already exist, modify them instead of unnecessarily recreating them.

Never overwrite working functionality without reason.

Do not introduce dependencies unless necessary.

When a requirement is ambiguous, create an editable Shopify setting rather than hard-coding assumptions.

---

# 58. START NOW

Start by:

1. Inspecting the current project.
2. Determining whether a Shopify theme already exists.
3. If no theme exists, initialize a Shopify Online Store 2.0 theme.
4. Create the folder architecture.
5. Build the global design system.
6. Build the header and footer.
7. Build the homepage foundation.
8. Then continue section-by-section.

Do NOT stop after creating a plan.

Actually implement the project.

At every stage, keep the implementation production-ready and Shopify-compatible.

The final result must be a **premium, original, maintainable Shopify restaurant website for Megan The Restaurant**, not a generic template.

### Mere hisaab se ek important change

**AI ko ek hi prompt mein पूरा project generate karne ke bajay**, is master prompt ke baad usko phases mein chalana better rahega:

**Phase 1:** Shopify theme foundation + design system
**Phase 2:** Header + Hero + Homepage
**Phase 3:** Menu Metaobjects + Menu page
**Phase 4:** Banquet + Catering
**Phase 5:** Gallery + Testimonials
**Phase 6:** Reservation + Contact + Map
**Phase 7:** SEO + Performance + Accessibility
**Phase 8:** Testing + Shopify deployment

Isse AI-generated code much more manageable rahega aur Shopify theme mein unnecessary complexity nahi aayegi.
