# M.D.F PMC Website

This is the official website for **M.D.F PMC** — a military simulation (milsim) group. The site is a static HTML site with minimal JavaScript.

---

## Project Structure

```
MDFSITE/
├── public/                     # Everything served to visitors
│   ├── index.html              # ⭐ MAIN PAGE — all visible sections
│   ├── donate.html             # Donations page
│   ├── 404.html                # Not-found page
│   ├── style.css               # All styles (colours, fonts, layout)
│   ├── main.js                 # Minimal JS (navbar scroll, mobile menu)
│   ├── favicon.png             # Browser tab icon
│   ├── opengraph.png           # Social media preview image
│   └── assets/                 # Images (logo, hero, cards)
│       ├── logo.png
│       ├── hero.png
│       ├── security.png
│       ├── boat.png
│       └── heli.png
├── attached_assets/            # Original source images
├── package.json                # Just the serve script
└── .github/workflows/deploy.yml
```

---

## Editing Content

All page content is in plain HTML files inside `public/`. Open them in any text editor to change text, links, or images.

### Key sections in `public/index.html`

| Section | How to find it |
|---|---|
| Hero (top banner) | Search for `Hero Section` comment |
| About M.D.F | Search for `About Section` comment |
| What We Offer | Search for `What We Offer` comment |
| Requirements | Search for `Requirements` comment |
| Recruitment | Search for `Recruitment` comment |
| Handbook | Search for `Handbook` comment |
| Community | Search for `Community` comment |
| Footer | Search for `Footer` comment |

### Colours & Fonts

Edit CSS variables at the top of `public/style.css` inside the `:root` block.

### Images

Replace files in `public/assets/` to update images. Update `src` attributes in the HTML if filenames change.

---

## Running Locally

```bash
npx serve public
```

The site will be available at `http://localhost:3000`.

---

## Deploying

Push to `main` — the GitHub Actions workflow will pull the latest code on the VPS and start `npx serve public`.
