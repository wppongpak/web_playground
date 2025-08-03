'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

// Theme management component for DaisyUI integration
export function ThemeScript() {
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        // Wait for next-themes to be ready
        if (theme) {
            const currentTheme = theme === 'system' ? resolvedTheme || 'light' : theme;
            console.log('ThemeScript: Updating theme to:', currentTheme);
            
            // Set data-theme on the HTML element for DaisyUI
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
    }, [theme, resolvedTheme]);

    // Also listen for theme changes from next-themes
    useEffect(() => {
        const handleThemeChange = () => {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                console.log('ThemeScript: Storage change detected:', storedTheme);
                document.documentElement.setAttribute('data-theme', storedTheme);
            }
        };

        // Listen for localStorage changes (theme updates)
        window.addEventListener('storage', handleThemeChange);
        
        return () => {
            window.removeEventListener('storage', handleThemeChange);
        };
    }, []);

    return null;
}

// Script to set initial theme on HTML element before hydration
export function InitialThemeScript() {
    const script = `
        (function() {
            try {
                // Get theme from localStorage (next-themes uses 'theme' key by default)
                var theme = localStorage.getItem('theme') || 'light';
                console.log('InitialThemeScript: Setting initial theme to:', theme);
                
                // Set data-theme attribute for DaisyUI
                document.documentElement.setAttribute('data-theme', theme);
                
                // Also set the theme in a data attribute so next-themes can read it
                document.documentElement.setAttribute('data-theme-initial', theme);
            } catch (e) {
                console.error('InitialThemeScript error:', e);
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.setAttribute('data-theme-initial', 'light');
            }
        })();
    `;

    return (
        <script
            dangerouslySetInnerHTML={{ __html: script }}
        />
    );
}
