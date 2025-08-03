'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeScript() {
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        // Manually ensure the data-theme attribute is set on the HTML element
        const currentTheme = theme || resolvedTheme || 'light';
        console.log('Setting theme to:', currentTheme);
        
        // Set data-theme on the HTML element
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Also set the class for compatibility
        document.documentElement.className = currentTheme;
    }, [theme, resolvedTheme]);

    return null;
}

// Script to set initial theme on HTML element before hydration
export function InitialThemeScript() {
    const script = `
        (function() {
            try {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.className = theme;
            } catch (e) {
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.className = 'light';
            }
        })();
    `;

    return (
        <script
            dangerouslySetInnerHTML={{ __html: script }}
        />
    );
}
