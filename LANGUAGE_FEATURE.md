# Language Feature Implementation

## Overview
Your Shang Dynasty website now includes a complete language switching feature with support for English and Chinese. The default language is Chinese.

## How It Works

### 1. **Language Provider & Context** (`src/context/LanguageContext.tsx`)
- Creates a React Context for managing language state
- Stores translations for all UI elements
- Provides a `t()` function for accessing translations using dot notation (e.g., `t('nav.home')`)
- Defaults to Chinese ('cn')

### 2. **Language Hook** (`src/hooks/useLanguage.ts`)
- Exports the `useLanguage` hook for use in components
- Provides: `language`, `setLanguage()`, and `t()` function

### 3. **Updated Components**

#### Navigation Bar (`src/components/Navigation.tsx`)
- Added a language switcher button showing "中文" or "EN"
- Dynamic nav labels that update based on selected language
- Logo updates with language selection

#### Pages
- **Home** (`src/pages/Home.tsx`) - Fully translated
- **History** (`src/pages/History.tsx`) - Title translated
- **Culture** (`src/pages/Culture.tsx`) - Title translated
- **Gallery** (`src/pages/Gallery.tsx`) - Title translated
- **Contact** (`src/pages/Contact.tsx`) - Title translated

#### App Component (`src/App.tsx`)
- Wraps entire app with `LanguageProvider`
- Ensures all components have access to language context

## Usage in Components

To use the language feature in any component:

```typescript
import { useLanguage } from '../hooks/useLanguage'

export function MyComponent() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <button onClick={() => setLanguage(language === 'cn' ? 'en' : 'cn')}>
        Toggle Language
      </button>
    </div>
  )
}
```

## Translation Keys Structure

**Navigation:**
- `nav.home` - Home
- `nav.history` - History
- `nav.culture` - Culture
- `nav.gallery` - Gallery
- `nav.contact` - Contact
- `nav.logo` - Logo text

**Home Page:**
- `home.title` - Welcome title
- `home.aboutTitle` - About section title
- `home.keyFeaturesTitle` - Features section title
- etc.

**Other Pages:**
- `history.title`, `culture.title`, `gallery.title`, `contact.title`

## Adding More Translations

To add new translations, update `src/context/LanguageContext.tsx`:

1. Add the key to the `translations` object under both `cn` and `en`
2. Use `t('path.to.key')` in your component

Example:
```typescript
const translations = {
  cn: {
    nav: { ... },
    myFeature: {
      title: '我的功能',
      description: '功能描述'
    }
  },
  en: {
    nav: { ... },
    myFeature: {
      title: 'My Feature',
      description: 'Feature description'
    }
  }
}
```

## Language Persistence (Optional)

To persist the language choice, update `src/context/LanguageContext.tsx`:

```typescript
// Get saved language or default to 'cn'
const [language, setLanguage] = useState<Language>(() => {
  return (localStorage.getItem('language') as Language) || 'cn'
})

// Save when language changes
const handleSetLanguage = (lang: Language) => {
  localStorage.setItem('language', lang)
  setLanguage(lang)
}
```

## Styling

Language switcher styling is in `src/components/Navigation.css`:
- `.language-switcher` - Container
- `.lang-btn` - Button styling
- `.lang-btn.active` - Active language button state
