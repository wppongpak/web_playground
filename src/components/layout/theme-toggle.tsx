'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Available DaisyUI themes from tailwind.config.js
const daisyThemes = [
    'light',
    'dark', 
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
];

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme:
            </label>
            <select
                value={theme}
                onChange={e => setTheme(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            >
                {daisyThemes.map(themeName => (
                    <option key={themeName} value={themeName}>
                        {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}
