# M.D.F PMC Website

This is the official website for **M.D.F PMC** — a military simulation (milsim) group. The site is a single-page application built with React, TypeScript, and Express.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Key Files & What They Do](#key-files--what-they-do)
  - [Page Content (Text & Sections)](#page-content-text--sections)
  - [Images & Logo](#images--logo)
  - [Colours & Fonts](#colours--fonts)
  - [Page Title & Browser Tab](#page-title--browser-tab)
  - [Navigation Links](#navigation-links)
  - [Application & Handbook Links](#application--handbook-links)
  - [Operation Schedule](#operation-schedule)
- [Running the Website Locally](#running-the-website-locally)
- [Building for Production](#building-for-production)

---

## Project Structure

Here is a simplified overview of the folders and files you need to know about:

```
MDFSITE/
├── client/                     # Everything the visitor sees in their browser
│   ├── index.html              # Browser tab title, meta tags (SEO / social sharing)
│   ├── public/
│   │   ├── favicon.png         # The small icon shown in the browser tab
│   │   └── opengraph.jpg       # Preview image shown when sharing the link on social media
│   └── src/
│       ├── pages/
│       │   └── Home.tsx        # ⭐ MAIN PAGE — all visible sections live here
│       ├── index.css           # Colours, fonts, and visual theme
│       └── App.tsx             # Routing (which page loads at which URL)
├── attached_assets/            # Images used on the website (logo, hero, etc.)
├── server/
│   └── routes.ts               # Backend API routes (not needed for basic edits)
├── shared/
│   └── schema.ts               # Database table definitions (not needed for basic edits)
└── package.json                # Project dependencies and run commands
```

---

## Key Files & What They Do

### Page Content (Text & Sections)

**File:** `client/src/pages/Home.tsx`

This is the most important file for day-to-day edits. Every section of the website lives here:

| Section | What to look for in the file |
|---|---|
| Hero (top banner) | Search for `Hero Section` in a comment |
| About M.D.F | Search for `About Section` in a comment |
| What We Offer | Search for `Features / What We Offer` in a comment |
| Membership Requirements | Search for `Membership Requirements` in a comment |
| Operation Schedule | Search for `Operation Schedule` in a comment |
| Apply / Recruitment | Search for `Recruitment / Application Form` in a comment |
| Handbook | Search for `Handbook Section` in a comment |
| Footer | Search for `Simple Footer` in a comment |

To edit any text on the page, open `client/src/pages/Home.tsx` and find the relevant section using the comments above, then change the text between the HTML tags.

---

### Images & Logo

**Folder:** `attached_assets/`

All images displayed on the website are stored here. The files currently used are:

| Image | Used for |
|---|---|
| `MDFNEW_*.png` | M.D.F logo (navbar and hero) |
| `107410-*_orig_*.png` | Hero / banner background image |
| `security-detail_orig_*.png` | "Protection" card image |
| `showboat_orig_*.png` | "Interdiction" card image |
| `unknown_orig_*.png` | "Insertion" card image |

To **replace an image**, add the new image file to `attached_assets/`, then update the matching `import` line near the top of `client/src/pages/Home.tsx`.

Example — to change the hero image, find:
```tsx
import heroImg from "@assets/107410-20200628093536-1_orig_upscaled_1771880281933.png";
```
…and change the filename to your new file.

**Browser tab icon** → `client/public/favicon.png`  
**Social media preview image** → `client/public/opengraph.jpg`

---

### Colours & Fonts

**File:** `client/src/index.css`

- **Fonts** — near the top, `--font-sans` (body text) and `--font-heading` (headings) control the typefaces. The fonts are loaded from Google Fonts in `client/index.html`.
- **Colours** — inside the `:root, .dark { }` block you will find CSS variables like `--background`, `--foreground`, `--muted-foreground`, etc. Change these to adjust the colour scheme across the whole site.

---

### Page Title & Browser Tab

**File:** `client/index.html`

- The `<title>` tag controls what appears in the browser tab.
- The `og:title` and `og:description` meta tags control the title and description shown when the link is shared on social media (Discord, Twitter, etc.).

---

### Navigation Links

**File:** `client/src/pages/Home.tsx`

The navigation bar links are in the `Desktop Nav` section and the mobile menu. They use `href="#section-id"` to jump to sections on the same page. To add or rename a link, find the comment `{/* Desktop Nav */}` and edit the `<a>` tags there.

---

### Application & Handbook Links

**File:** `client/src/pages/Home.tsx`

- **Apply Now button** — search for `forms.gle` in the file to find the Google Form URL. Replace the URL inside `href="..."` with a new form link if the application form changes.
- **View Handbook button** — search for `docs.google.com` to find the Google Docs handbook link. Replace it with a new URL if the handbook moves.

---

### Operation Schedule

**File:** `client/src/pages/Home.tsx`

Search for `Operation Schedule` in the file. The three day/time boxes (Tuesday, Thursday, Sunday) are just regular text inside `<h4>` and `<p>` tags — edit them directly to change the schedule.

---

## Running the Website Locally

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install       # Install dependencies (only needed the first time)
npm run dev       # Start the development server
```

The site will be available at `http://localhost:5000`.

---

## Building for Production

```bash
npm run build     # Compiles the site into the dist/ folder
npm start         # Runs the compiled production build
```
