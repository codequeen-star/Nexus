# Nexus Design System

A comprehensive guide to the UI theme, typography, colors, and responsive grid used throughout the Nexus application.

## Table of Contents

- [Color System](#color-system)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components & Utilities](#components--utilities)
- [Responsive Design](#responsive-design)
- [Best Practices](#best-practices)

---

## Color System

The color system uses semantic color palettes for consistent visual language across the application.

### Brand Colors

#### Primary (Blue)
Main brand color used for primary actions and interactive elements.

```
primary-50:  #EFF6FF  (lightest)
primary-100: #DBEAFE
primary-200: #BFDBFE
primary-300: #93C5FD
primary-400: #60A5FA
primary-500: #3B82F6  (base)
primary-600: #2563EB  (interactive)
primary-700: #1D4ED8
primary-800: #1E40AF
primary-900: #1E3A8A
primary-950: #172554  (darkest)
```

**Usage:**
- Primary buttons and links: `primary-600`
- Hover states: `primary-700`
- Backgrounds/highlights: `primary-50` or `primary-100`
- Text on light backgrounds: `primary-900`

#### Secondary (Teal)
Complementary brand color for secondary actions and highlights.

```
secondary-50:  #F0FDFA
secondary-100: #CCFBF1
secondary-200: #99F6E4
secondary-300: #5EEAD4
secondary-400: #2DD4BF
secondary-500: #14B8A6  (base)
secondary-600: #0D9488  (interactive)
secondary-700: #0F766E
secondary-800: #115E59
secondary-900: #134E4A
secondary-950: #042F2E
```

**Usage:**
- Secondary buttons: `secondary-600`
- Accents and badges: `secondary-500`
- Background highlights: `secondary-50`

#### Accent (Amber)
Used for highlighting, warnings, and calls to attention.

```
accent-50:  #FFFBEB
accent-100: #FEF3C7
accent-200: #FDE68A
accent-300: #FCD34D
accent-400: #FBBF24
accent-500: #F59E0B  (base)
accent-600: #D97706  (interactive)
accent-700: #B45309
```

**Usage:**
- Featured elements: `accent-500`
- Hover states: `accent-600`
- Background highlights: `accent-50`

### Semantic Colors

#### Success (Green)
Indicates successful actions and positive states.

```
success-50:  #F0FDF4
success-100: #DCFCE7
success-300: #86EFAC
success-500: #22C55E  (base)
success-700: #15803D  (text)
```

#### Warning (Amber)
Indicates cautions and warnings.

```
warning-50:  #FFFBEB
warning-400: #FBBF24
warning-500: #F59E0B  (base)
warning-700: #B45309
```

#### Error (Red)
Indicates errors and destructive actions.

```
error-50:  #FEF2F2
error-100: #FEE2E2
error-500: #EF4444  (base)
error-700: #B91C1C
```

### Neutral (Grayscale)
Used for text, borders, and backgrounds.

```
neutral-25:  #FAFAFA (almost white)
neutral-50:  #F9FAFB
neutral-100: #F3F4F6
neutral-200: #E5E7EB (borders)
neutral-300: #D1D5DB
neutral-400: #9CA3AF
neutral-500: #6B7280 (secondary text)
neutral-600: #4B5563
neutral-700: #374151
neutral-800: #1F2937
neutral-900: #111827 (primary text)
neutral-950: #030712 (darkest)
```

**Usage:**
- Primary text: `neutral-900`
- Secondary text: `neutral-600`
- Disabled text: `neutral-400`
- Borders: `neutral-200`
- Light backgrounds: `neutral-50` or `neutral-100`

---

## Typography

The typography system provides consistent sizing, weights, and line heights across all text elements.

### Font Family

- **Primary:** Inter (with variable font support)
- **Monospace:** Consolas, Courier New (for code blocks)

### Type Scales

#### Display Sizes
For large, attention-grabbing headings.

```
Display Large:   3.5rem (56px) - font-weight: 700
Display Medium:  3rem (48px)   - font-weight: 700
Display Small:   2.25rem (36px) - font-weight: 700
```

**Usage:**
```html
<h1 class="text-display-lg">Main Page Title</h1>
<h2 class="text-display-md">Section Title</h2>
<h3 class="text-display-sm">Subsection</h3>
```

#### Heading Sizes
For section and component headings.

```
Heading Large:   2rem (32px) - font-weight: 700
Heading Medium:  1.5rem (24px) - font-weight: 700
Heading Small:   1.25rem (20px) - font-weight: 600
Heading XSmall:  1.125rem (18px) - font-weight: 600
```

**Usage:**
```html
<h2 class="text-heading-lg">Card Title</h2>
<h3 class="text-heading-md">Section Heading</h3>
<h4 class="text-heading-sm">Subsection</h4>
```

#### Body Text
For body copy and general content.

```
Body Large:   1.125rem (18px) - font-weight: 400 - line-height: 1.6
Body Medium:  1rem (16px)     - font-weight: 400 - line-height: 1.6
Body Small:   0.875rem (14px) - font-weight: 400 - line-height: 1.5
Body XSmall:  0.75rem (12px)  - font-weight: 400 - line-height: 1.5
```

**Usage:**
```html
<p class="text-body-md">Default paragraph text</p>
<p class="text-body-sm">Small helper text</p>
<p class="text-body-xs">Meta information</p>
```

#### Label Sizes
For form labels, badges, and captions.

```
Label Large:   1rem (16px)       - font-weight: 600 - line-height: 1.5
Label Medium:  0.875rem (14px)   - font-weight: 600 - line-height: 1.4
Label Small:   0.75rem (12px)    - font-weight: 600 - line-height: 1.3
```

**Usage:**
```html
<label class="text-label-md">Form Field Label</label>
<span class="text-label-sm">CAPTION TEXT</span>
```

### Font Weights

- `font-light` (300) - For lighter, less prominent text
- `font-normal` (400) - Default body text
- `font-medium` (500) - Emphasized body text
- `font-semibold` (600) - Labels, buttons, secondary headings
- `font-bold` (700) - Headings, strong emphasis
- `font-extrabold` (800) - Display sizes

### Responsive Typography

The system scales typography automatically on smaller screens. Mobile devices get smaller type sizes:

```
Mobile (< 640px):
- h1 → text-heading-sm
- h2 → text-heading-xs
- body → text-body-sm
```

Use responsive utilities:
```html
<!-- Scales from small to large -->
<h1 class="text-responsive-heading">Responsive Heading</h1>
<p class="text-responsive-lg">Responsive paragraph</p>
```

---

## Spacing & Layout

### Spacing Scale

Consistent 4px-based spacing:

```
0   = 0px      (none)
1   = 4px
2   = 8px      (xs)
3   = 12px
4   = 16px     (sm)
5   = 20px
6   = 24px     (md)
7   = 28px
8   = 32px     (lg)
9   = 36px
10  = 40px     (xl)
12  = 48px
16  = 64px
20  = 80px
24  = 96px
```

**Usage:**
```html
<!-- Padding -->
<div class="p-6">Padded container</div>
<div class="px-4 py-6">Horizontal and vertical padding</div>

<!-- Margin -->
<div class="mb-4">Bottom margin</div>
<div class="m-auto">Center with auto margins</div>

<!-- Gaps (flex/grid) -->
<div class="flex gap-4">Flex items with 4px gap</div>
<div class="grid grid-cols-2 gap-6">Grid with 6px gap</div>
```

### Container Utilities

Pre-configured container widths for consistent layouts:

```
container-fluid    - Full width with horizontal padding
container-tight    - Max 768px width (md breakpoint)
container-wide     - Max 1280px width (xl breakpoint)
container-full     - Max 1536px width (2xl breakpoint)
```

**Usage:**
```html
<div class="container-wide">
  <h1>Page content</h1>
</div>
```

### Responsive Section Padding

```
section-padding     - Standard vertical padding (py-6 md:py-12)
section-padding-lg  - Large vertical padding (py-12 md:py-20)
```

---

## Components & Utilities

### Grid Utilities

Pre-configured responsive grids:

```
grid-auto   - Auto-fit columns (min-width: 250px)
grid-2      - 1 column on mobile, 2 on desktop
grid-3      - 1 column on mobile, 3 on desktop (md+)
grid-4      - 1 column on mobile, 4 on desktop (lg+)
```

**Usage:**
```html
<!-- Auto-fill grid -->
<div class="grid-auto">
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
</div>

<!-- Responsive 2-column -->
<div class="grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Flexbox Utilities

```
flex-center      - Centered flex container (items-center justify-center)
flex-between     - Space-between flex layout
flex-col-center  - Centered column layout
```

**Usage:**
```html
<div class="flex-center">
  <span>Centered content</span>
</div>
```

### Card Components

```
card-base       - Standard card with border and subtle shadow
card-elevated   - Card with more prominent shadow
```

**Usage:**
```html
<div class="card-base p-6">
  <h3 class="text-heading-sm mb-2">Card Title</h3>
  <p class="text-body-sm text-neutral-600">Content here</p>
</div>
```

### Badge Component

```
badge-base  - Base badge styling
```

**Usage:**
```html
<span class="badge-base bg-primary-50 text-primary-700">Label</span>
<span class="badge-base bg-success-50 text-success-700">Success</span>
```

### Text Utilities

```
text-truncate       - Single line truncation
text-line-clamp-2   - Truncate to 2 lines
text-line-clamp-3   - Truncate to 3 lines
```

### State Utilities

```
state-disabled  - Opacity 50%, no pointer events
state-loading   - Opacity 70%, wait cursor
```

### Visibility Utilities

```
hide-xs / show-xs   - Hide/show on extra small screens
hide-sm / show-sm   - Hide/show on small screens
hide-md / show-md   - Hide/show on medium screens
```

---

## Responsive Design

### Breakpoints

```
xs    = 320px   (mobile)
sm    = 640px   (small)
md    = 768px   (medium tablet)
lg    = 1024px  (large tablet / small desktop)
xl    = 1280px  (desktop)
2xl   = 1536px  (large desktop)
```

### Responsive Patterns

**Mobile-first approach:**
```html
<!-- Base styles for mobile, then add larger screens -->
<div class="text-body-sm md:text-body-md lg:text-body-lg">
  Responsive text
</div>

<!-- Grid that scales -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Container Queries Pattern

Use Tailwind's responsive prefixes to adapt layouts:

```html
<div class="px-4 md:px-8 py-6 md:py-12">
  <!-- Responsive padding -->
</div>

<div class="w-full md:w-2/3 lg:w-3/4">
  <!-- Responsive width -->
</div>
```

---

## Best Practices

### 1. Use Semantic Colors
Always use semantic color names, not specific hex values:

```html
<!-- ✅ Good -->
<button class="bg-primary-600 text-white">Submit</button>
<p class="text-error-700">Error message</p>
<span class="bg-success-50 text-success-700">Success</span>

<!-- ❌ Avoid -->
<button class="bg-blue-500 text-white">Submit</button>
```

### 2. Consistent Typography
Use the predefined type scales, not arbitrary sizes:

```html
<!-- ✅ Good -->
<h1 class="text-heading-lg">Page Title</h1>
<p class="text-body-md">Paragraph text</p>

<!-- ❌ Avoid -->
<h1 class="text-3xl">Page Title</h1>
<p class="text-base">Paragraph text</p>
```

### 3. Use Spacing Scale
Stick to the 4px-based spacing scale:

```html
<!-- ✅ Good -->
<div class="mb-6 p-4 gap-4">Content</div>

<!-- ❌ Avoid -->
<div class="mb-7 p-5 gap-3">Content</div>
```

### 4. Responsive First
Always design mobile-first, then add larger screen enhancements:

```html
<!-- ✅ Good -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Items
</div>

<!-- ❌ Avoid -->
<div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  Items
</div>
```

### 5. Component Consistency
Use predefined component utilities instead of custom combinations:

```html
<!-- ✅ Good -->
<div class="card-base p-6">
  <h3 class="text-heading-sm mb-2">Title</h3>
</div>

<!-- ❌ Avoid -->
<div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
  <h3 style="font-size: 20px; margin-bottom: 8px;">Title</h3>
</div>
```

### 6. Accessibility
Always maintain sufficient contrast and focus states:

```html
<!-- ✅ Good -->
<button class="focus-ring bg-primary-600 text-white">
  Click me
</button>

<!-- ✅ Good color contrast -->
<p class="text-neutral-900">High contrast text</p>
```

### 7. Naming Conventions
Use descriptive class names and avoid magic numbers:

```html
<!-- ✅ Good -->
<section class="section-padding bg-neutral-50">
  <div class="container-wide">
    <h2 class="text-heading-lg mb-6">Section Title</h2>
  </div>
</section>

<!-- ❌ Avoid -->
<section class="py-12 px-8 bg-gray-100">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-4xl mb-12">Section Title</h2>
  </div>
</section>
```

---

## Typography Examples

### Headings
```html
<h1 class="text-display-lg">Display Large (56px)</h1>
<h2 class="text-display-md">Display Medium (48px)</h2>
<h3 class="text-display-sm">Display Small (36px)</h3>

<h2 class="text-heading-lg">Heading Large (32px)</h2>
<h3 class="text-heading-md">Heading Medium (24px)</h3>
<h4 class="text-heading-sm">Heading Small (20px)</h4>
<h5 class="text-heading-xs">Heading XSmall (18px)</h5>
```

### Body Text
```html
<p class="text-body-lg">Body Large (18px)</p>
<p class="text-body-md">Body Medium (16px)</p>
<p class="text-body-sm">Body Small (14px)</p>
<p class="text-body-xs">Body XSmall (12px)</p>
```

### Labels & Captions
```html
<label class="text-label-lg">Label Large (16px)</label>
<label class="text-label-md">Label Medium (14px)</label>
<label class="text-label-sm">Label Small (12px)</label>
```

---

## Color Combinations

### Recommended Text/Background Combinations

| Background | Text Color | Use Case |
|-----------|-----------|----------|
| `primary-50` | `primary-900` | Light backgrounds for primary content |
| `primary-600` | `white` | Primary buttons and CTAs |
| `secondary-50` | `secondary-900` | Secondary content backgrounds |
| `success-50` | `success-700` | Success states and confirmations |
| `error-50` | `error-700` | Error states and warnings |
| `neutral-900` | `white` | Dark backgrounds and text inverts |
| `white` | `neutral-900` | Default light backgrounds |
| `neutral-100` | `neutral-900` | Subtle alternative backgrounds |

---

## Animation Classes

```
animate-fade-in   - Fade in over 300ms
animate-fade-out  - Fade out over 300ms
animate-slide-in  - Slide in from top over 300ms
animate-slide-out - Slide out to top over 300ms
animate-bounce-light - Subtle bounce effect
```

**Usage:**
```html
<div class="animate-fade-in">Content fades in</div>
<div class="animate-slide-in">Content slides in</div>
```

---

## Shadow System

```
shadow-xs  - Subtle shadow for elevation
shadow-sm  - Light shadow for cards
shadow-md  - Medium shadow for dropdowns
shadow-lg  - Prominent shadow for modals
shadow-xl  - Large shadow for emphasis
shadow-2xl - Maximum shadow depth
```

---

## Border Radius

```
rounded-xs    = 0.25rem (4px)
rounded-sm    = 0.375rem (6px)
rounded-base  = 0.5rem (8px) - Default
rounded-md    = 0.75rem (12px)
rounded-lg    = 1rem (16px)
rounded-xl    = 1.25rem (20px)
rounded-2xl   = 1.5rem (24px)
rounded-full  = 9999px (circular)
```

---

This design system ensures visual consistency, improves maintainability, and accelerates development across the Nexus application.
