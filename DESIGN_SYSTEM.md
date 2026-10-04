# Design System: SubhChandra Education

## Mission
Deliver an implementation-ready, token-driven, accessible (WCAG 2.2 AA) UI design system for **SubhChandra Education** ("Right course. Right career."). The system translates guidance, course discovery, and counselling into a trustworthy, high-converting, and visually premium experience across mobile and desktop.

---

## 1. Brand Foundations & Visual Direction

- **Brand:** SubhChandra Education
- **Tagline:** "Right course. Right career."
- **Positioning:** Educational guidance and counselling platform connecting students with UGC-recognized universities and financial aid (including Bihar Student Credit Card).
- **Core Principle:** Original design, clean cards with rounded 12px corners, deep teal & saffron amber palette, zero generic templates, generous whitespace, mobile-first responsiveness.

---

## 2. Design Tokens

### 2.1 Color Tokens
| Token | Hex Value | Semantic Role |
|---|---|---|
| `--color-primary-50` | `#E6F4F1` | Soft mint tint, badge backgrounds, light highlights |
| `--color-primary-100` | `#C2E4DD` | Subtle borders, light input hover |
| `--color-primary-200` | `#9DD3C8` | Secondary borders, divider lines |
| `--color-primary-500` | `#1B7F88` | Active states, hover states on dark elements |
| `--color-primary-700` | `#0F5C63` | **Primary Brand Teal** (Headers, buttons, icons, accents) |
| `--color-primary-800` | `#0C494F` | Deep header tone, dark hover states |
| `--color-primary-900` | `#0A3F44` | Dark mode / Footer / Hero backdrop |
| `--color-accent-400` | `#FBBF24` | Warm golden hover |
| `--color-accent-500` | `#F59E0B` | **Saffron Amber Accent** (CTA badges, star ratings, alert highlights) |
| `--color-accent-600` | `#D97706` | Accent button active / hover |
| `--color-ink` | `#12262A` | Primary text (high contrast, WCAG AAA against light surface) |
| `--color-ink-light` | `#3D5A60` | Secondary / description text |
| `--color-surface` | `#FAFCFC` | Application background |
| `--color-surface-card` | `#FFFFFF` | Card & modal background |
| `--color-surface-muted` | `#F1F6F6` | Table rows, secondary containers |
| `--color-success` | `#16A34A` | Verification badges, success notifications |
| `--color-danger` | `#DC2626` | Error states, validation alerts |

### 2.2 Typography Scale
- **Headings Font:** `Poppins`, system-ui, sans-serif
- **Body Font:** `Inter`, system-ui, sans-serif
- **Scale:**
  - `text-xs`: 12px / line-height 16px (Badges, fine print)
  - `text-sm`: 14px / line-height 20px (Captions, helper text, nav links)
  - `text-base`: 16px / line-height 24px (Body text, input fields)
  - `text-lg`: 18px / line-height 28px (Lead paragraphs, card titles)
  - `text-xl`: 20px / line-height 28px (Section subheaders, modal titles)
  - `text-2xl`: 24px / line-height 32px (Section headings)
  - `text-3xl`: 30px / line-height 36px (Major titles)
  - `text-4xl`: 36px / line-height 44px (Hero headline)

### 2.3 Spacing & Radius
- **Corner Radius:**
  - `rounded-sm`: 4px (Chips, tags)
  - `rounded-md`: 8px (Form inputs, secondary buttons)
  - `rounded-card`: 12px (Program cards, modal dialogs, testimonial containers)
  - `rounded-lg`: 16px (Feature cards, hero banners)
  - `rounded-full`: 9999px (Pills, circular action buttons, avatar badges)
- **Shadows:**
  - `shadow-sm`: `0 1px 2px 0 rgba(18, 38, 42, 0.05)`
  - `shadow-card`: `0 4px 12px -2px rgba(15, 92, 99, 0.08), 0 2px 6px -1px rgba(18, 38, 42, 0.04)`
  - `shadow-hover`: `0 12px 24px -4px rgba(15, 92, 99, 0.15), 0 4px 10px -2px rgba(18, 38, 42, 0.06)`

---

## 3. Component Architecture & Rules

### 3.1 Button Component
- **Variants:**
  - `primary`: Background `--color-primary-700`, text `#ffffff`. Hover: `--color-primary-800`.
  - `accent`: Background `--color-accent-500`, text `--color-ink` (WCAG AA contrast). Hover: `--color-accent-600`.
  - `outline`: Border 1.5px `--color-primary-700`, text `--color-primary-700`, background transparent. Hover: `--color-primary-50`.
  - `ghost`: Transparent background, text `--color-primary-700`. Hover: `--color-primary-50`.
- **States Required:**
  - `default`: Normal appearance.
  - `hover`: Scale 1.02 or background brightness shift (300ms transition).
  - `focus-visible`: `outline-none ring-2 ring-primary-700 ring-offset-2`.
  - `active`: Scale 0.98.
  - `disabled`: Opacity 50%, cursor `not-allowed`, pointer events disabled.
  - `loading`: Spinner indicator replaces icon; button text intact or "Processing...".
- **Touch Target:** Minimum 44x44px clickable area on mobile screens.

### 3.2 Form Input & Lead Forms
- **Anatomy:**
  - Label (`text-sm font-medium text-ink`) with required asterisk (`text-danger`).
  - Input field (`h-11 px-3.5 rounded-md border border-gray-200 bg-white text-ink text-base`).
  - Focus state: `border-primary-700 ring-2 ring-primary-100`.
  - Error state: `border-danger ring-1 ring-danger`, error message in `text-xs text-danger flex items-center gap-1`.
  - Spam prevention: Hidden honeypot field (`website`) positioned off-screen.

### 3.3 Program Cards
- **Anatomy:**
  - Degree badge (e.g. "UG Degree", "3 Years", "Online / Offline")
  - Program title (e.g., "BCA - Bachelor of Computer Applications")
  - Eligibility snippet (e.g., "10+2 with Math/CS or equivalent")
  - Specialization / Career highlights
  - Fee indicator range
  - Actions: "View Details" (Link) & "Free Counselling" (CTA button)
  - Hover animation: Subtle elevation (`shadow-hover`), translateY(-4px).

### 3.4 Navigation & Header
- **Top Notification Bar:** Contact helpline number, WhatsApp link, Bihar Student Credit Card advisory.
- **Main Header:**
  - SubhChandra Logo (Wordmark + Crescent motif)
  - Navigation links: Programs (Mega Menu/Dropdown), Financial Aid (Scholarships & Credit Card), Locations, About Us, FAQs, Contact.
  - CTA Button: "Book Free Counselling" (Accent Saffron Amber).
  - Mobile: Hamburger menu drawer with slide-in animation.
- **Mobile Sticky Bar:** Quick "Call Now" and "Apply / Enquiry" fixed at screen bottom.

---

## 4. Accessibility Standards (WCAG 2.2 AA)

1. **Contrast Ratio:** Text on Teal background must be `#ffffff` (minimum 8:1 contrast). Text on Accent Amber (`#F59E0B`) must be dark ink `#12262A` (minimum 4.6:1 contrast).
2. **Keyboard Navigation:** All interactive elements must have visible `:focus-visible` styles with a 2px offset ring.
3. **Screen Readers:** All icon-only buttons must have `aria-label`. All modal overlays must trap focus and close on `Escape`.
4. **Form Labels:** Every `<input>`, `<select>`, and `<textarea>` must have an associated `<label>` element with matching `id` and `htmlFor`.

---

## 5. QA Checklist
- [ ] Responsive testing across 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop).
- [ ] Keyboard tab navigation passes all headers, forms, cards, and modal dialogs.
- [ ] No color alone conveys state (icons + text accompany validation errors).
- [ ] Contrast checks verified with axe-core / Lighthouse.
- [ ] Touch targets >= 44px on mobile devices.
- [ ] Fast performance: Zero layout shift (CLS < 0.1), LCP under 2.5s.
