'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function DaisyThemeManager() {
    const { theme } = useTheme();

    useEffect(() => {
        // Ensure the HTML data-theme attribute is set for DaisyUI
        if (theme) {
            console.log('DaisyThemeManager: Setting data-theme to:', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme]);

    return null;
}
