# Product Requirements Document: SubhChandra Education

**Version:** 1.0 | **Owner:** Ashish Kumar, MaaJanki Web Tech | **Stack:** Next.js, Node.js, Express.js, MongoDB

---

## 1. Overview

SubhChandra Education is an education guidance platform. It helps students and parents discover online and offline degree programs, understand career paths, learn about financial aid (scholarships and the Bihar Student Credit Card scheme), and book counselling with experts.

The platform is an **information and guidance service**. It does not award degrees; it works with partner institutions and states this clearly on every relevant page.

**Reference:** the structure and feature set of pujaeducation.com (city pages, program listings, counselling, credit card guidance, gallery, FAQs). SubhChandra must have **its own original copy, imagery, logo and visual design**. Text, photos and graphics from the reference site must not be copied.

## 2. Goals and Success Metrics

| Goal | Metric | Target (6 months) |
|---|---|---|
| Generate qualified leads | Counselling requests per month | 500+ |
| Build organic traffic | Monthly organic sessions | 20,000+ |
| Lead quality | Lead-to-call-connected rate | 60%+ |
| Performance | Lighthouse (mobile) | 90+ across all four categories |
| Engagement | Avg. pages per session | 3+ |

## 3. Target Users

1. **Class 12 / graduate students** choosing a degree (primary).
2. **Parents** comparing courses, costs and financing.
3. **Working professionals** seeking online or distance degrees.
4. **Students in Tier-2/3 cities** (Bihar, Uttar Pradesh and nearby), mostly on mobile, many preferring Hindi.

## 4. Brand and Visual Direction (different from reference)

- **Name:** SubhChandra Education. **Tagline (draft):** "Right course. Right career."
- **Palette:**
  - Primary: Deep Teal `#0F5C63`
  - Accent: Saffron Amber `#F59E0B`
  - Secondary: Soft Mint `#E6F4F1`
  - Text: Ink `#12262A`; Background: `#FAFCFC`; Success `#16A34A`; Error `#DC2626`
- **Typography:** Poppins (headings), Inter (body); Noto Sans Devanagari for Hindi.
- **Style:** clean cards, rounded 12px corners, generous whitespace, mobile-first.
- **Logo:** original wordmark with a crescent-moon motif (new asset, to be designed).
- **Language:** English at launch; Hindi toggle in Phase 2.

## 5. Information Architecture

```
/                       Home
/about                  About us
/programs               All degree programs (filter + search)
/programs/[slug]        Program detail (BCA, MBA, BTech, etc.)
/universities           Partner institutions (info only)
/universities/[slug]    Institution detail
/careers                Career guidance hub
/careers/[slug]         Career article
/financial-aid          Scholarships and student credit card hub
/financial-aid/bihar-student-credit-card
/counselling            Book counselling (phone / office visit / video)
/locations/[city]       City pages (e.g., Meerut, Moradabad, Aligarh)
/gallery                Events, seminars, behind the scenes
/blog, /blog/[slug]     Articles
/faq                    FAQs
/contact                Contact and enquiry
/admin                  Admin dashboard (protected)
/privacy, /terms, /disclaimer
```

## 6. Functional Requirements

### 6.1 Home page
- Hero with headline, search ("Find a course") and primary CTA "Book Free Counselling".
- Trust strip: students guided, partner institutions, years of experience (admin-editable numbers).
- Featured programs grid (UG / PG tabs).
- "How it works" in 3 steps: Explore, Talk to an expert, Apply.
- Financial aid highlight block.
- City presence cards.
- Testimonials carousel, gallery preview, FAQ preview.
- Sticky "Request Callback" button on mobile; WhatsApp floating button.

### 6.2 Programs
- Listing page with filters: level (UG/PG/Diploma), mode (online/offline), stream, duration; keyword search; pagination.
- Detail page: overview, eligibility, duration, syllabus highlights, career options, approximate fee range, partner institutions, FAQs, CTA form.
- Programs at launch: BCA, MCA, BBA, MBA, BTech, MTech, BCom, MCom, BSc, MSc, BA (JMC), BFA, BLIS, MLIS, BSc Nursing, GNM, BHMCT.
- Disclaimer on each page: SubhChandra provides information and guidance and does not itself offer degrees.

### 6.3 Financial aid
- Hub explaining scholarships and education loans in original, plain-language copy.
- Dedicated Bihar Student Credit Card page: purpose, who can apply, documents, step-by-step process, FAQs, and a link to the official government portal. Content must be verified against official sources before publishing and reviewed periodically.

### 6.4 Counselling booking
- Form fields: name, mobile (OTP optional), email, city, class/qualification, interested program, preferred mode (telephonic / office visit / video call), preferred date and time slot, message.
- Validation on client (Zod) and server (express-validator); spam protection (rate limit plus honeypot/CAPTCHA).
- Confirmation screen, confirmation email, and notification to admin (email and optional WhatsApp).

### 6.5 City pages
- Template-driven pages for each city with local intro, office address, map, programs popular locally, and local enquiry form. Admin can add new cities without code.

### 6.6 Gallery
- Categories (Events, Seminars, Behind the Scenes), image grid with lightbox, video embeds. Uploads via admin (Cloudinary).

### 6.7 Blog and careers
- Markdown/rich-text articles with categories, tags, author, SEO fields, related posts.

### 6.8 FAQ and Contact
- Accordion FAQs grouped by topic with FAQ schema markup.
- Contact page with form, phone, email, address, embedded map.

### 6.9 Admin dashboard
- Secure login (JWT in httpOnly cookie), roles: Super Admin, Editor, Counsellor.
- CRUD for programs, institutions, cities, blog, FAQs, gallery, testimonials, site settings.
- Lead management: list, search, filter by status/city/program, assign to counsellor, status flow (New, Contacted, Counselled, Converted, Closed), notes, CSV export.
- Analytics cards: leads per day, top programs, top cities.

## 7. Data Models (MongoDB / Mongoose)

- **User:** name, email, passwordHash, role, isActive
- **Program:** title, slug, level, stream, mode[], duration, eligibility, overview, syllabus[], careers[], feeRange, institutions[], faqs[], seo, isFeatured, isPublished
- **Institution:** name, slug, logo, location, about, programs[], isPublished
- **City:** name, slug, state, address, mapUrl, phone, intro, isPublished
- **Lead:** name, phone, email, city, qualification, program, mode, preferredSlot, message, source (page/UTM), status, assignedTo, notes[], createdAt
- **Post:** title, slug, content, category, tags[], author, coverImage, seo, status, publishedAt
- **Faq:** question, answer, topic, order
- **GalleryItem:** type, url, caption, category, order
- **Testimonial:** name, role, quote, photo, isPublished
- **Setting:** key, value (stats, contact info, social links)

## 8. API (Express, REST, prefix `/api`)

| Area | Endpoints |
|---|---|
| Auth | `POST /auth/login`, `POST /auth/logout`, `GET /auth/me` |
| Public content | `GET /programs`, `GET /programs/:slug`, `GET /institutions`, `GET /cities/:slug`, `GET /posts`, `GET /posts/:slug`, `GET /faqs`, `GET /gallery`, `GET /testimonials`, `GET /settings/public` |
| Leads | `POST /leads` (public, rate-limited) |
| Admin (auth) | CRUD under `/admin/{programs,institutions,cities,posts,faqs,gallery,testimonials,settings,users}`; `GET/PATCH /admin/leads`, `GET /admin/leads/export`, `GET /admin/stats` |
| Media | `POST /admin/upload` |

## 9. Non-Functional Requirements

- **Performance:** LCP under 2.5s on 4G mobile; image optimisation via `next/image`; ISR for content pages.
- **SEO:** SSR/ISR, unique titles and meta, canonical URLs, sitemap.xml, robots.txt, Open Graph, JSON-LD (Organization, FAQPage, Course, BreadcrumbList), clean slugs.
- **Security:** helmet, CORS allowlist, rate limiting, input validation and sanitisation, bcrypt, secure cookies, HTTPS, secrets in environment variables.
- **Accessibility:** WCAG 2.1 AA, keyboard navigation, colour contrast checked on the new palette.
- **Privacy and compliance:** consent checkbox on forms, privacy policy aligned with India's DPDP Act, minimal data retention.
- **Reliability:** daily MongoDB backups, error logging, uptime monitoring.
- **Scalability:** stateless API, indexed queries (slug, status, createdAt).

## 10. Technical Architecture

- **Frontend:** Next.js (App Router), Tailwind CSS, React Hook Form + Zod, SWR, Framer Motion.
- **Backend:** Node.js + Express REST API, Mongoose ODM.
- **Database:** MongoDB Atlas.
- **Media:** Cloudinary. **Email:** Nodemailer (SMTP).
- **Hosting:** Vercel (client), VPS/Render/Railway (API), Atlas (DB).
- **Repo layout:** monorepo with `client/` and `server/` (already scaffolded).

## 11. Content and Legal Guidelines

- All copy, images and icons must be original or properly licensed.
- No claim of offering degrees; show partner-institution disclaimer.
- Fee, eligibility and scheme details must be verified and dated ("Last updated").
- Testimonials and statistics only with real, consented data.

## 12. Release Plan

| Phase | Scope | Duration |
|---|---|---|
| 0 | Design system, wireframes, content plan | 1 week |
| 1 (MVP) | Home, programs, counselling form, FAQ, contact, admin for programs and leads | 4 weeks |
| 2 | Financial aid pages, city pages, blog, gallery, testimonials, Hindi toggle | 3 weeks |
| 3 | Analytics dashboard, WhatsApp/SMS notifications, institution pages, A/B tests | 3 weeks |

## 13. Risks

| Risk | Mitigation |
|---|---|
| Copyright issues from copying reference content | Original copy, images and design; legal review |
| Outdated scheme/fee data | Source verification, "last updated" dates, review cadence |
| Spam leads | Rate limiting, CAPTCHA, OTP verification |
| Low organic ranking | Strong content plan, schema, city and program landing pages |

## 14. Open Questions

1. Final logo and brand assets?
2. Which institutions are confirmed partners at launch?
3. Hindi at launch or Phase 2?
4. Office addresses and phone numbers per city?
5. Lead notifications: email only or WhatsApp too?
