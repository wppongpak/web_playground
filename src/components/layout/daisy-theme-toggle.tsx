'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function DaisyThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Debug: Log theme changes
    useEffect(() => {
        if (mounted) {
            console.log('Theme changed to:', theme);
            console.log('HTML data-theme:', document.documentElement.getAttribute('data-theme'));
        }
    }, [theme, mounted]);

    if (!mounted) {
        return (
            <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse" />
        );
    }

    const availableThemes = [
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
    ];

    return (
        <div className="form-control">
            <select
                value={theme || 'light'}
                onChange={(e) => setTheme(e.target.value)}
                className="select select-bordered w-full max-w-xs"
                aria-label="Theme selector"
            >
                {availableThemes.map((themeName) => (
                    <option key={themeName} value={themeName} className="capitalize">
                        {themeName}
                    </option>
                ))}
            </select>
        </div>
    );
}
