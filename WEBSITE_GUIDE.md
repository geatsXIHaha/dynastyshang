# Shang Dynasty Website - Complete Guide

## 📱 Website Features

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
✅ **Ancient Shang Theme** - Bronze, gold, and dark red color scheme
✅ **Navigation Menu** - Auto-transforms to dropdown hamburger on mobile
✅ **Multiple Pages** - Easy navigation between different sections
✅ **Information Only** - No database or login required
✅ **Smooth Animations** - Page transitions and hover effects

---

## 🗂️ Folder Structure

```
shangdynasty/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navigation.tsx     # Header & Navigation Menu
│   │   └── Navigation.css     # Navigation styling
│   │
│   ├── pages/                # Different page sections
│   │   ├── Home.tsx          # Homepage
│   │   ├── Home.css          # Homepage styling
│   │   ├── History.tsx       # History page
│   │   ├── Culture.tsx       # Culture page
│   │   ├── Gallery.tsx       # Gallery/Artifacts page
│   │   ├── Contact.tsx       # Contact page
│   │   └── Pages.css         # Common page styling
│   │
│   ├── App.tsx               # Main app routing logic
│   ├── App.css               # App-level styling
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
│
├── public/                   # Static files
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📝 How to Add a New Page

### Step 1: Create the Page File
Create a new file in `src/pages/` directory:

```typescript
// src/pages/YourNewPage.tsx
import './Pages.css'

const YourNewPage = () => {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Your Page Title</h1>
      </div>

      <div className="page-content">
        <section className="section">
          <h2>Section Title</h2>
          <p>Your content here...</p>
        </section>
      </div>
    </div>
  )
}

export default YourNewPage
```

### Step 2: Import in App.tsx
Add the import at the top:

```typescript
import YourNewPage from './pages/YourNewPage'
```

### Step 3: Add to Routing Logic
Add a new case in the `renderPage()` function in `App.tsx`:

```typescript
const renderPage = () => {
  switch (currentPage) {
    case 'home':
      return <Home />
    case 'history':
      return <History />
    case 'culture':
      return <Culture />
    case 'gallery':
      return <Gallery />
    case 'contact':
      return <Contact />
    case 'your-new-page':  // Add this
      return <YourNewPage />
    default:
      return <Home />
  }
}
```

### Step 4: Add Menu Item in Navigation.tsx
Update the `navItems` array in `src/components/Navigation.tsx`:

```typescript
const navItems: NavItem[] = [
  { label: '首页 (Home)', id: 'home' },
  { label: '历史 (History)', id: 'history' },
  { label: '文化 (Culture)', id: 'culture' },
  { label: '艺术 (Gallery)', id: 'gallery' },
  { label: '联系 (Contact)', id: 'contact' },
  { label: '新页面 (Your New Page)', id: 'your-new-page' },  // Add this
]
```

### Step 5: Match the IDs
Make sure the `id` in `Navigation.tsx` matches the `case` in `App.tsx`

---

## 🎨 Styling Available

The website uses a consistent ancient theme. You can use these CSS classes:

### Page Structure Classes
- `.page` - Main page container
- `.page-hero` - Top banner area
- `.page-content` - Main content area
- `.section` - Content sections

### Pre-made Grid Layouts
- `.rulers-grid` - Grid for ruler cards
- `.features-grid` - Grid for feature boxes
- `.gallery-grid` - Grid for gallery items
- `.contact-info` - Grid for contact information

### Component Classes
- `.timeline` - Timeline display
- `.timeline-item` - Individual timeline items
- `.ruler-card` - Ruler information card
- `.feature` - Feature box
- `.gallery-item` - Gallery item
- `.social-links` - Social media links

---

## 🎯 Color Theme

The ancient Shang dynasty theme uses:

```css
--primary-bronze: #8b7355    /* Main bronze color */
--primary-gold: #d4af37      /* Gold accents */
--primary-dark: #2d1810      /* Dark brown */
--primary-light: #f5e6d3     /* Light cream background */
--accent-red: #8b0000        /* Dark red accent */
```

Use these colors in your custom styles for consistency!

---

## 📱 Responsive Breakpoints

The website automatically adjusts for:
- **Desktop** (1200px+): Full horizontal menu
- **Tablet** (768px-1199px): Adjusted layout
- **Mobile** (480px-767px): Dropdown hamburger menu
- **Small Phone** (<480px): Compact layout

---

## 🚀 Running the Website

### Development
```bash
npm run dev
```
Open `http://localhost:5173` in your browser

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

---

## 📚 Styling Tips

### Use Semantic HTML
```tsx
<section className="section">
  <h2>Title</h2>
  <p>Content</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</section>
```

### Grid Layouts Example
```tsx
<div className="features-grid">
  <div className="feature">
    <h3>Feature Title</h3>
    <p>Feature description</p>
  </div>
  {/* More features */}
</div>
```

### Custom Styles
All pages already import `Pages.css`, which handles responsive design automatically!

---

## 🎭 Customization Ideas

1. **Add Hero Images**: Replace emoji placeholders in Gallery with actual images
2. **Add More Sections**: Create Timeline, History, or Events pages
3. **Modify Colors**: Change CSS variables in index.css
4. **Add Chinese Characters**: Pages already support both Chinese and English
5. **Enhance Content**: Add images, videos, or embed resources

---

## ❓ Common Questions

**Q: How do I make the dropdown menu wider?**
A: Edit `.nav-menu` width in `Navigation.css`

**Q: Can I add submenus?**
A: Yes! Modify the Navigation component to include nested menu items

**Q: How do I change font styles?**
A: Update the `font-family` in CSS. Currently using 'Georgia' for headings

**Q: Can I add external links to the menu?**
A: Yes, modify Navigation.tsx to handle external links differently

---

## 📞 Support

Your site is built with:
- **React 19.2** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Responsive styling

Enjoy building your Shang Dynasty website! 🏛️
