# Internationalization (i18n) and Theme Features

This project now includes internationalization support with Thai and English languages, plus light/dark theme switching.

## 🌐 Internationalization (i18n)

### Supported Languages

- **English (en)** - Default language
- **Thai (th)** - ไทย

### Features

- Automatic language detection from browser/localStorage
- Manual language switching via dropdown
- Persistent language preference
- Fallback to English for missing translations

### Translation Files

- `src/lib/locales/en/common.json` - English translations
- `src/lib/locales/th/common.json` - Thai translations

### Usage in Components

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
    const { t, i18n } = useTranslation('common');

    return (
        <div>
            <h1>{t('title')}</h1>
            <button onClick={() => i18n.changeLanguage('th')}>
                Switch to Thai
            </button>
        </div>
    );
}
```

### Adding New Translations

1. Add new keys to both `en/common.json` and `th/common.json`
2. Use nested objects for organization:

```json
{
    "section": {
        "title": "Section Title",
        "description": "Section Description"
    }
}
```

3. Access nested translations: `t('section.title')`

## 🎨 Theme System

### Supported Themes

- **Light** - Default light theme
- **Dark** - Dark theme
- **System** - Follows system preference

### Features

- Automatic system theme detection
- Manual theme switching via dropdown
- Persistent theme preference
- Smooth transitions between themes
- Tailwind CSS dark mode classes

### Theme Classes

The theme system uses Tailwind's `dark:` prefix:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    Content that changes with theme
</div>
```

### Usage in Components

```tsx
import { useTheme } from 'next-themes';

function MyComponent() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme('dark')}>Switch to Dark Mode</button>
    );
}
```

## 🛠 Technical Implementation

### Libraries Used

- **react-i18next** - React integration for i18next
- **i18next** - Core internationalization library
- **i18next-browser-languagedetector** - Browser language detection
- **i18next-resources-to-backend** - Dynamic resource loading
- **next-themes** - Theme switching for Next.js

### Configuration Files

- `src/lib/i18n.ts` - i18next configuration
- `src/components/theme-provider.tsx` - Theme provider wrapper
- `src/components/language-toggle.tsx` - Language switcher component
- `src/components/theme-toggle.tsx` - Theme switcher component

### Provider Setup

Both providers are configured in the app layout:

```tsx
<ThemeProvider>
    <ApolloWrapper>
        <I18nProvider>{children}</I18nProvider>
    </ApolloWrapper>
</ThemeProvider>
```

## 🚀 Development

### Adding New Languages

1. Create new translation file: `src/lib/locales/[lang]/common.json`
2. Add language option to `LanguageToggle` component
3. Update language detection configuration if needed

### Adding New Themes

1. Extend theme options in `ThemeToggle` component
2. Add custom CSS variables in `globals.css` if needed
3. Update Tailwind configuration for custom colors

### Testing

- Test language switching in different browsers
- Verify theme persistence across page reloads
- Check system theme detection
- Test fallback translations for missing keys
