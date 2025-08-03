# Tailwind CSS Theme Configuration

This project uses Tailwind CSS v4 with a comprehensive custom theme configuration. The theme is defined using CSS custom properties (CSS variables) and the new `@theme` directive.

## 🎨 Color System

### Primary Colors

- **Primary**: Blue-based color palette for main actions and branding
- **Secondary**: Gray-based color palette for secondary elements
- **Success**: Green-based palette for success states
- **Warning**: Amber-based palette for warning states
- **Error**: Red-based palette for error states

Each color has 10 shades (50-900) following the Tailwind convention.

### Usage Examples

```tsx
// Using in components
<div className="bg-primary-600 text-white">Primary Button</div>
<div className="bg-success-100 text-success-800 border border-success-200">Success Alert</div>
<div className="text-error-600">Error Message</div>
```

## 🔤 Typography

### Font Families

- **Sans**: Geist Sans (primary), with system fallbacks
- **Mono**: Geist Mono (code), with monospace fallbacks

### Font Scale

- `text-xs` (0.75rem)
- `text-sm` (0.875rem)
- `text-base` (1rem)
- `text-lg` (1.125rem)
- `text-xl` (1.25rem)
- `text-2xl` (1.5rem)
- `text-3xl` (1.875rem)
- `text-4xl` (2.25rem)
- `text-5xl` (3rem)
- `text-6xl` (3.75rem)

### Line Heights

- `leading-tight` (1.25)
- `leading-snug` (1.375)
- `leading-normal` (1.5)
- `leading-relaxed` (1.625)
- `leading-loose` (2)

## 📏 Spacing System

### Custom Spacing Scale

- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)

## 🔄 Border Radius

### Radius Scale

- `rounded-sm`: 0.25rem
- `rounded-md`: 0.375rem
- `rounded-lg`: 0.5rem
- `rounded-xl`: 0.75rem
- `rounded-2xl`: 1rem
- `rounded-3xl`: 1.5rem
- `rounded-full`: 9999px

## 🌊 Shadows

### Shadow Scale

- `shadow-sm`: Subtle shadow for minimal elevation
- `shadow-md`: Medium shadow for cards and panels
- `shadow-lg`: Large shadow for modals and dropdowns
- `shadow-xl`: Extra large shadow for prominent elements
- `shadow-2xl`: Maximum shadow for floating elements

## ⚡ Transitions

### Transition Durations

- `duration-fast`: 150ms - Quick interactions
- `duration-normal`: 250ms - Standard transitions
- `duration-slow`: 350ms - Slower, more noticeable transitions

All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` easing.

## 🌓 Dark Mode Support

The theme automatically adapts to dark mode preferences:

- Colors are inverted appropriately for dark backgrounds
- Background and foreground colors switch automatically
- All custom colors work in both light and dark modes

### Dark Mode Usage

```tsx
// Automatic dark mode support
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    Content that adapts to theme
</div>
```

## 🧩 Component Utilities

### Pre-built Component Styles

The theme includes pre-built component styles in `/src/lib/theme-config.ts`:

#### Button Styles

```tsx
import { Button } from '@/components/theme-showcase';

<Button variant="primary" size="md">Click me</Button>
<Button variant="success" size="lg">Success Action</Button>
<Button variant="outline" size="sm">Secondary Action</Button>
```

#### Card Styles

```tsx
import { Card } from '@/components/theme-showcase';

<Card padding="lg">
    <h3>Card Title</h3>
    <p>Card content goes here...</p>
</Card>;
```

## 🎯 Theme Customization

### Adding New Colors

1. Add CSS variables to `:root` in `globals.css`
2. Add corresponding `--color-*` variables in the `@theme` block
3. Update the theme config in `theme-config.ts`

Example:

```css
:root {
    --info-500: #3b82f6;
    --info-600: #2563eb;
}

@theme inline {
    --color-info-500: var(--info-500);
    --color-info-600: var(--info-600);
}
```

### Custom Components

Create reusable components using the theme utilities:

```tsx
export const Alert = ({ type, children }) => {
    const baseClasses = 'p-4 rounded-lg border';
    const typeClasses = {
        success: 'bg-success-50 border-success-200 text-success-800',
        warning: 'bg-warning-50 border-warning-200 text-warning-800',
        error: 'bg-error-50 border-error-200 text-error-800',
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]}`}>{children}</div>
    );
};
```

## 📱 Responsive Design

The theme works seamlessly with Tailwind's responsive prefixes:

```tsx
<div
    className="
    text-sm md:text-base lg:text-lg
    p-4 md:p-6 lg:p-8
    shadow-sm md:shadow-md lg:shadow-lg
"
>
    Responsive content
</div>
```

## 🔧 Development Tips

1. **Use the Theme Showcase**: Visit the home page to see all theme elements in action
2. **CSS Variables**: All theme values are available as CSS variables for custom styles
3. **Consistent Spacing**: Use the custom spacing scale for consistent layouts
4. **Color Consistency**: Stick to the defined color palette for brand consistency
5. **Dark Mode Testing**: Always test components in both light and dark modes

## 📦 File Structure

```
src/
├── app/
│   └── globals.css          # Theme CSS variables and @theme configuration
├── lib/
│   └── theme-config.ts      # JavaScript theme utilities and component styles
└── components/
    └── theme-showcase.tsx   # Theme demonstration component
```

## 🚀 Performance

- CSS variables enable runtime theme switching without JavaScript
- Minimal CSS bundle size with Tailwind's purging
- Optimized for both light and dark modes
- Smooth transitions without performance impact

---

**Note**: This theme configuration uses Tailwind CSS v4's new CSS-based configuration system. Make sure you're using Tailwind CSS v4 or later for full compatibility.
