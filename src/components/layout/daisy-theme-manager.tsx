'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function DaisyThemeManager() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // Function to update the HTML data-theme attribute
        const updateHtmlTheme = (themeName: string) => {
            console.log('Updating HTML data-theme to:', themeName);
            document.documentElement.setAttribute('data-theme', themeName);
        };

        // Set theme on mount and whenever it changes
        if (theme) {
            updateHtmlTheme(theme);
        }

        // Listen for theme changes and update HTML attribute
        const handleThemeChange = () => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            updateHtmlTheme(currentTheme);
        };

        // Listen for storage changes (in case theme is changed in another tab)
        window.addEventListener('storage', handleThemeChange);

        return () => {
            window.removeEventListener('storage', handleThemeChange);
        };
    }, [theme]);

    // Force update HTML theme when component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme !== theme) {
            setTheme(savedTheme);
        }
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, [theme, setTheme]);

    return null;
}
