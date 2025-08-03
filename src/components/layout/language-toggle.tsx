'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
    const { i18n, t } = useTranslation('common');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // Show fallback content during SSR to prevent hydration mismatch
    if (!isMounted) {
        return (
            <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Language:
                </label>
                <select
                    value="en"
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                    onChange={(event) => changeLanguage(event.target.value)}
                >
                    <option value="en">English</option>
                    <option value="th">ไทย</option>
                </select>
            </div>
        );
    }

    return (
        <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Language:
            </label>
            <select
                value={i18n.language}
                onChange={e => changeLanguage(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            >
                <option value="en">{t('language.english')}</option>
                <option value="th">{t('language.thai')}</option>
            </select>
        </div>
    );
}
