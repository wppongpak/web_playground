'use client';

import { usePathname } from 'next/navigation';
import { Navigation, DaisyThemeManager } from '@/components/layout';
import { ThemeDebug } from '@/components/test';

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith('/auth/');

    return (
        <>
            <DaisyThemeManager />
            <Navigation />
            {isAuthPage ? (
                children
            ) : (
                <main className="min-h-screen bg-base-100 text-base-content px-4 py-8">
                    {children}
                </main>
            )}
            <ThemeDebug />
        </>
    );
}
