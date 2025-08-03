'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider
            attribute="data-theme"
            defaultTheme="light"
            themes={[
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
            ]}
            enableSystem={false}
            disableTransitionOnChange={false}
            storageKey="theme"
            forcedTheme={undefined}
        >
            {children}
        </NextThemesProvider>
    );
}
