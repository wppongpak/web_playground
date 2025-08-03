'use client';

import { useSession, signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LanguageToggle } from './language-toggle';
import { DaisyThemeToggle } from './daisy-theme-toggle';

export function Navigation() {
    const { data: session } = useSession();
    const { t } = useTranslation('common');
    const pathname = usePathname();

    // Show minimal navigation on auth pages (only toggles)
    if (pathname?.startsWith('/auth/')) {
        return (
            <div className="absolute top-4 right-4 flex items-center space-x-2 z-50">
                <LanguageToggle />
                <DaisyThemeToggle />
            </div>
        );
    }

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-xl font-bold text-gray-900 dark:text-white"
                        >
                            GraphQL Demo
                        </Link>

                        {session && (
                            <div className="flex space-x-4">
                                <Link
                                    href="/"
                                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {t('navigation.home')}
                                </Link>
                                {(session.user as any)?.role === 'admin' && (
                                    <Link
                                        href="/admin/users"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {t('navigation.userManagement')}
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center space-x-4">
                        <LanguageToggle />
                        <DaisyThemeToggle />

                        {session ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {t('auth.welcomeBack')},{' '}
                                    {session.user?.name}
                                </span>
                                <button
                                    onClick={() => signOut()}
                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {t('auth.signout')}
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {t('auth.signin')}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
