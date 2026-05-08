# Ruya — Stories Beneath the Skin
### A Literary Magazine Website · React + Tailwind CSS

---

## 🚀 How to Run

### Prerequisites
- **Node.js** v18 or higher → download from https://nodejs.org
- **npm** (comes with Node.js)

### Steps

**1. Extract the zip file** into a folder of your choice.

**2. Open your terminal** (Command Prompt, PowerShell, or Terminal on Mac/Linux).

**3. Navigate into the project folder:**
```bash
cd ruya-magazine
```

**4. Install dependencies** (first time only):
```bash
npm install
```

**5. Start the development server:**
```bash
npm run dev
```

**6. Open your browser** and visit:
```
http://localhost:5173
```

---

## 📦 Build for Production

To generate an optimized production build:
```bash
npm run build
```
Output will be in the `/dist` folder. You can then deploy it to Vercel, Netlify, or any static host.

To preview the production build locally:
```bash
npm run preview
```

---

## 🗂 Project Structure

```
ruya-magazine/
├── index.html                  ← Entry HTML (includes Google Fonts)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                ← React root
    ├── App.jsx                 ← All sections assembled
    ├── index.css               ← Tailwind + global styles
    ├── components/
    │   └── Navbar.jsx          ← Fixed navbar with smooth scroll
    └── sections/
        ├── Hero.jsx            ← "The Writer" dark collage hero
        ├── Intro.jsx           ← "Echoes of the Unsaid" cream section
        ├── About.jsx           ← Dark burgundy About Us
        ├── FeaturedWriter.jsx  ← Aina Amir feature section
        ├── Gallery.jsx         ← Paginated issue gallery (9 issues, 3 per page)
        ├── Contact.jsx         ← Contact + FAQ + Social links
        └── Footer.jsx          ← "Our Promise to you" + signature
```

---

## 🎨 Design System

| Token        | Value        | Usage                     |
|--------------|--------------|---------------------------|
| `cream`      | `#F4EDE0`    | Light section backgrounds |
| `burgundy`   | `#6B1A1A`    | Accents, headings, CTAs   |
| `charcoal`   | `#1A0C0C`    | Dark section backgrounds  |
| `gold`       | `#C9A96E`    | Highlights, decorative    |
| `warm-white` | `#FAF5EC`    | Footer / Contact bg       |

**Fonts (Google Fonts):**
- `Cormorant Garamond` — Display / headings
- `EB Garamond` — Body text
- `Dancing Script` — Logo signature

---

## 🔧 Customisation

- **Replace images**: Swap Unsplash URLs in each section file with your own.
- **Add real content**: Edit issue data in `src/sections/Gallery.jsx` (the `ISSUES` array).
- **Change colours**: Edit `tailwind.config.js` under `theme.extend.colors`.
- **Add pages/routing**: Install `react-router-dom` and wrap `App.jsx` with a `<Router>`.

---

*Ruya — where dreams, confessions, and whispered traces are captured in words.*
