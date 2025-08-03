'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ThemeDebug() {
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        console.log('Current theme:', theme);
        console.log('Resolved theme:', resolvedTheme);
        console.log('HTML data-theme:', document.documentElement.getAttribute('data-theme'));
    }, [theme, resolvedTheme]);

    return (
        <div className="fixed bottom-4 left-4 bg-base-200 p-4 rounded-lg shadow-lg text-xs">
            <div>Theme: {theme}</div>
            <div>Resolved: {resolvedTheme}</div>
            <div>HTML attr: {typeof window !== 'undefined' ? document.documentElement.getAttribute('data-theme') : 'N/A'}</div>
        </div>
    );
}
