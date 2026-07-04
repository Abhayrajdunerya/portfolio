---
version: "1.0"
name: "JS Mastery Dark Tech"
description: "Dark-only, tech-brand system for jsmastery.com. Deep navy-to-black layered surfaces (--d100 → --d700 style stack), a cyan→blue gradient reserved for accenting single keywords inside otherwise-white headings, and a warm yellow→amber gradient reserved for the primary CTA. GeistSans is the only typeface; hierarchy comes from size/weight alone. Course and feature cards use flat-colored icon illustrations (blue, green, violet, indigo, pink) as the one place the palette gets playful — everything else stays disciplined navy/white/blue."
verified_against:
  - "https://jsmastery.com/ (homepage screenshot, 2026-07-04)"
  - "https://jsmastery.com/all-courses (screenshot, 2026-07-04)"
source_note: "This file supersedes an auto-extraction from design-extractor.com. Corrections from manual screenshot review are called out explicitly in 'Corrections from auto-extraction' below — read that section before trusting any single value."
colors:
  brand-blue: "#2fa4ff"
  cyan-blue-accent: "#51baff"
  amber-gold-cta: "#ffa929"
  bright-yellow-cta: "#ffe61c"
  hot-pink: "#eb367f"
  success-green: "#22c55e"
  vivid-green: "#4ade80"
  violet-accent: "#8b5cf6"
  indigo-accent: "#6366f1"
  deep-space-black: "#020013"
  dark-navy-200: "#090b1d"
  dark-navy-300: "#11142b"
  dark-navy-400: "#171a34"
  dark-navy-500: "#22274a"
  dark-navy-600: "#2a304d"
  dark-navy-700: "#2c3157"
  pure-white: "#ffffff"
  muted-lavender: "#d9dff2"
  slate-blue: "#c2cde7"
  border-gray: "#e5e7eb"
typography:
  hero-headline: { fontFamily: "GeistSans", fontSize: "48px", fontWeight: "700", lineHeight: "56px" }
  section-heading-xl: { fontFamily: "GeistSans", fontSize: "40px", fontWeight: "700", lineHeight: "50px", letterSpacing: "-2px" }
  section-heading-lg: { fontFamily: "GeistSans", fontSize: "36px", fontWeight: "700", lineHeight: "40px" }
  card-heading: { fontFamily: "GeistSans", fontSize: "28px", fontWeight: "700", lineHeight: "32px" }
  subheading: { fontFamily: "GeistSans", fontSize: "24px", fontWeight: "700", lineHeight: "32px" }
  body-large: { fontFamily: "GeistSans", fontSize: "18px", fontWeight: "400", lineHeight: "28px" }
  body-large-semibold: { fontFamily: "GeistSans", fontSize: "18px", fontWeight: "600", lineHeight: "28px" }
  body-regular: { fontFamily: "GeistSans", fontSize: "16px", fontWeight: "400", lineHeight: "24px" }
  body-semibold: { fontFamily: "GeistSans", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }
  caption: { fontFamily: "GeistSans", fontSize: "14px", fontWeight: "400", lineHeight: "20px" }
rounded: { sm: "4px", md: "6px", lg: "8px", xl: "10px", 2xl: "14px", 3xl: "20px", 4xl: "32px", pill: "9999px" }
spacing: { xs: "4px", sm: "8px", md-sm: "12px", md: "16px", md-lg: "20px", lg: "24px", xl: "32px", 2xl: "40px", 3xl: "48px", 4xl: "64px", 5xl: "80px", 6xl: "96px" }
---

## Corrections from auto-extraction

The uploaded `design-extractor.com` output was directionally right on color/type/radius tokens but wrong or incomplete on a few things that matter for building this correctly. Fixed here:

1. **The hero headline is not gradient text.** In both the homepage ("Join 1,000,000+ Developers Around The Globe") and `/all-courses` ("Courses That Take You From Learning to Doing"), the bulk of the headline is plain `pure-white`. The cyan→blue gradient is a **keyword-highlight technique**, applied via `background-clip: text` to one or two specific words inside a heading — not the whole string. Confirmed instances: "Learning" (amber-gold) and "Doing" (success-green) inside the `/all-courses` headline are colored solid, not gradient-cyan as the original palette implied; "EVERYTHING", "Member", "Instructor", and "JS Mastery" (in "What Devs Say About JS Mastery") get the cyan→blue gradient treatment. **Rule for agents: never gradient a full headline. Pick 1–2 words that carry the meaning and accent those.**
2. **Two accent colors were missing entirely**: `success-green` (#22c55e, used on the "Just Dropped" badge and the word "Doing") and a rotating icon-accent set (`violet-accent` #8b5cf6, `indigo-accent` #6366f1) used across the feature-card icon squares in the "Become a Member" grid. Added to the palette above.
3. **Feature/benefit icon cards are the one intentionally playful spot in the palette.** Each card in the "Learn Why Not Just What to Code" / "Structured Full Stack Roadmap" grid gets a different flat accent (green, purple, blue, pink, indigo, amber) behind a simple line icon. This isn't a semantic system (green ≠ success everywhere) — it's a rotation for visual variety in a single grid. Don't reuse those hues as global semantic colors elsewhere.
4. **Badge system observed but not in the original extraction**: course cards carry a small top-right pill badge — `success-green` bg for "Just Dropped", `brand-blue` bg for "Updating", neutral `dark-navy-500`/gray for "Coming soon" (on the waitlist cards). These are status badges, not decoration.
5. **Login button is outlined/ghost, not filled** — pill-shaped border in `dark-navy-600`/`slate-blue`, transparent background, sitting next to two plain text nav links. The original extraction didn't distinguish this from the filled CTA style.
6. **Checkmarks in the hero bullet list use a filled cyan-blue circle**, not a plain checkmark glyph — small circle badge with a white check, ~20px.
7. **Primary CTA gradient direction**: top-to-bottom (yellow at top, amber at bottom), applied to a pill button, generally paired with a soft outer glow (visible clearly on the pricing-card CTA). The original extraction had the right two colors but no direction/glow note.
8. **Radius and spacing scales extracted correctly** — visually consistent with an 8/10px control radius, 14–20px card radius, and pill buttons throughout. No changes made there.

## Overview

JS Mastery is a **dark-only** developer-education brand. There is no light theme in production — every surface in both crawled pages sits on the `deep-space-black` → `dark-navy-500` stack. The brand voice is confident-but-plain: bold white sans-serif type, a single restrained gradient reserved for emphasis, and a warm amber CTA that's the only "hot" color allowed to dominate a component. Illustration accents (course icons, feature icons) are where the palette gets to have fun; everything structural (nav, text, borders, buttons) stays disciplined.

**Signature traits:**
- **Single-family type hierarchy.** GeistSans only, hierarchy built purely from size (14–48px) and weight (400/600/700) — never a second font, never italics for hierarchy.
- **Gradient as punctuation, not paint.** Both the cyan→blue heading gradient and the yellow→amber CTA gradient are used sparingly and deliberately: one keyword per heading, one button per section. If most of a component is gradient, that's off-brand.
- **Soft, generous rounding.** Radius scale runs from 4px (inputs) to full pill (9999px) on every button, badge, and the login link. No sharp corners appear anywhere in either page.
- **Layered-navy depth via background alone**, not shadow. Sections and cards separate from each other by stepping through `deep-space-black → dark-navy-200 → dark-navy-300 → dark-navy-400 → dark-navy-500`, not by drop shadows (see Elevation).

## Colors

### Primary Brand
- **Brand Blue** `#2fa4ff` — heading-gradient end, "View All Courses" solid button, secondary link color. Role: primary.
- **Amber Gold CTA** `#ffa929` — primary CTA gradient end (bottom). Role: accent.
- **Bright Yellow CTA** `#ffe61c` — primary CTA gradient start (top). Role: accent.

### Accent (keyword highlights + icon rotation)
- **Cyan Blue Accent** `#51baff` — heading-gradient start, hero checklist icons, highlighted numbers/stats.
- **Hot Pink** `#eb367f` — decorative accent: quote marks in the testimonial pull-quote, portfolio/briefcase icon glow, destructive/error semantic if you need one.
- **Success Green** `#22c55e` — "Just Dropped" badge, "Doing" keyword highlight, one feature-icon square.
- **Vivid Green** `#4ade80` — lightbulb icon fill ("Learn Why, Not Just What to Code").
- **Violet Accent** `#8b5cf6` / **Indigo Accent** `#6366f1` — feature-icon rotation (roadmap, Discord-style icon).

### Text Scale
- **Pure White** `#ffffff` — primary headings and body text on dark backgrounds.
- **Muted Lavender** `#d9dff2` — secondary text, nav links.
- **Slate Blue** `#c2cde7` — body copy, list items, supporting/testimonial text.

### Borders
- **Dark Navy 600** `#2a304d` — subtle borders/dividers (card outlines at rest).
- **Dark Navy 700** `#2c3157` — visible borders on dark surfaces (inputs, login pill outline).
- **Border Gray** `#e5e7eb` — Tailwind default; not observed in dark UI, keep only as a light-mode fallback.

### Surfaces (background stepping)
| Token | Hex | Usage |
|---|---|---|
| Deep Space Black | `#020013` | Page background, deepest surface |
| Dark Navy 200 | `#090b1d` | Course cards, testimonial cards, secondary surface |
| Dark Navy 300 | `#11142b` | Elevated surface / alternating section background |
| Dark Navy 400 | `#171a34` | Card and panel surfaces |
| Dark Navy 500 | `#22274a` | Hover states, elevated panels |

## Typography

GeistSans throughout, weights 400/600/700, sizes 14–48px. Full stack: `GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`.

| Role | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Hero headline (h1) | 48px | 700 | 56px | normal |
| Section heading, tight tracking (h2, large) | 40px | 700 | 50px | -2px |
| Section heading (h2) | 36px | 700 | 40px | normal |
| Card / sub-section heading | 28px | 700 | 32px | normal |
| Subheading / feature title | 24px | 700 | 32px | normal |
| Body large | 18px | 400 | 28px | normal |
| Body large, emphasized | 18px | 600 | 28px | normal |
| Body regular / nav links | 16px | 400 | 24px | normal |
| Button label / nav item | 16px | 600 | 24px | normal |
| Caption / metadata | 14px | 400 | 20px | normal |

**Gradient text rule:** apply `background: linear-gradient(90deg, #51baff, #2fa4ff); background-clip: text; color: transparent;` only to the specific word(s) that should draw the eye — never the full heading string. See `.text-gradient-heading` in `globals.css`.

## Layout

- **Breakpoints**: mobile (≤640px, single column, stacked hero), tablet (≥768px), desktop (≥1024px, two-column hero, 2-col card grids), wide (≥1440px, wider gutters, no new columns observed — content max-width caps out rather than adding columns).
- **Hero**: two-column on desktop — headline + bullet list + CTA on the left, embedded video player on the right. Stacks to a single column on mobile with the video below the copy.
- **Course/feature grids**: consistently 2 columns on desktop for course cards (not 3 or 4) — cards are wide and content-dense rather than small tiles. Testimonials switch to 3 columns. Feature/benefit cards in "Become a Member" run 2 columns with one wide center card breaking the grid to hold the "JSM Pro Circle" callout.
- **Section rhythm**: alternating background steps (black → navy-200/300 → black) mark section boundaries instead of dividers or heavy spacing changes.
- **Spacing** follows a 4px base grid: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px` (xs → 6xl). Section vertical padding sits in the 64–96px range; card internal padding in the 16–24px range.

## Elevation & Depth

No drop-shadow evidence in either screenshot for standard cards — depth reads through background-color stepping, not shadow. The one exception: the **pricing card** and **primary CTA button** carry a soft colored glow (amber, low-opacity, large blur radius) behind them — this is the single elevation flourish in the whole system, reserved for the highest-priority conversion elements. Everything else stays flat. Use `--glow-cta` / `--glow-ring` from `globals.css` sparingly — one glow per screen, same rule as the gradient text.

## Shapes

| Token | Value | Role |
|---|---|---|
| sm | 4px | Small controls |
| md | 6px | Small controls |
| lg | 8px | Standard controls (inputs, small buttons) |
| xl | 10px | Standard controls |
| 2xl | 14px | Cards |
| 3xl | 20px | Cards, larger panels |
| 4xl | 32px | Large surfaces (pricing card container) |
| pill | 9999px | All buttons, badges, the login link |

Never mix a sharp corner into this system — every interactive element observed uses at least `lg` (8px), and every button/badge uses `pill`.

## Components (observed patterns)

- **Primary CTA button**: pill, yellow→amber vertical gradient, dark navy text, arrow icon, soft amber glow. e.g. "Join JS Mastery Pro", "Subscribe to JS Mastery".
- **Secondary button**: pill, solid `brand-blue` fill, white text, no glow. e.g. "View All Courses".
- **Ghost/outline button**: pill, transparent fill, `dark-navy-600` border, `muted-lavender` text. e.g. "Login to your account".
- **Course card**: `dark-navy-200` surface, `2xl` radius, top-right status badge (pill), colorful flat icon illustration, `card-heading` title, `body-regular` description in `slate-blue`, `brand-blue` "Check it now →" link at the bottom.
- **Badge**: small pill, `caption` size, colored fill matched to status (green = Just Dropped, blue = Updating, neutral = Coming soon).
- **Testimonial card**: `dark-navy-200` surface, 5-star row in amber, avatar + name + role, quote in `slate-blue`.
- **Feature/benefit card**: `dark-navy-300`/`400` surface, large flat-colored icon square (rotates through the accent set), `subheading` title, no description in most instances.
- **Pricing card**: `4xl` radius container, amber glow behind it, large white price, strikethrough original price beside it, plan toggle (Quarterly/Yearly pill switch), discount confirmation row with a checkmark, primary CTA button.
- **FAQ row**: `dark-navy-200` surface, `pill`-adjacent (`2xl`) radius, accordion-style single-line question, chevron affordance.

## Known implementation patterns

- **Gradient border with transparent interior** (used on the pricing card outline): absolutely-positioned `::before` pseudo-element, `padding: 1px`, gradient background, `mask-composite: exclude` (`-webkit-mask-composite: xor`) against a `content-box`/`padding-box` mask pair — implemented as `.card-glow-border` in `globals.css`.
- **Gradient text**: `background-clip: text` + `color: transparent` on an inline `<span>` wrapping only the accented word(s) — implemented as `.text-gradient-heading` in `globals.css`.
- Both patterns should be applied narrowly (one word, one card) per the restraint rule above — this is a brand where the gradient is the exception, not the default state of a component.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Gradient one keyword per heading, max | Gradient a full headline or paragraph |
| Use the amber CTA gradient for exactly one primary action per screen | Use the amber gradient on more than one button in the same view |
| Step background color (black → navy-200 → navy-300…) to separate sections/cards | Add drop shadows to ordinary cards — this system is flat by design |
| Use `pill` radius on every button and badge | Mix sharp and rounded corners in the same view |
| Keep icon-accent colors (green/violet/indigo/pink) confined to illustration squares | Promote an icon-accent color to a global semantic color (e.g. don't make violet mean "info" sitewide) |
| Maintain WCAG AA contrast for body text (`slate-blue`/`muted-lavender` on navy surfaces both pass) | Drop text below `slate-blue`-level contrast on dark-navy backgrounds |

## Agent Prompt Guide

1. Start every new component from the `globals.css` tokens — `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border` — before reaching for a raw hex value.
2. For a headline, default to plain `text-foreground`; only wrap the single most important word in `.text-gradient-heading`.
3. For any primary action button, use `.btn-cta-gradient`; for a secondary action in the same view, use `.btn-secondary-pill` — never both gradient buttons in one view.
4. For cards (course, testimonial, FAQ, feature), start from `.card-surface` and adjust radius token (`2xl` default, `3xl`/`4xl` for larger panels) rather than inventing new radii.
5. Reach for the icon-accent set (`brand-violet`, `brand-indigo`, `brand-success-green`, `brand-vivid-green`, `brand-hot-pink`) only inside icon/illustration squares in a feature grid — keep the rest of the UI on the navy/blue/white palette.
6. Respect the flat-by-default elevation model: no shadow unless the component is a top-priority conversion element (pricing, primary CTA), and even then, one glow per screen.
