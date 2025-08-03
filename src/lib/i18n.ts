import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n.use(
    resourcesToBackend(
        (language: string, namespace: string) =>
            import(`./locales/${language}/${namespace}.json`)
    )
)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en', // default language
        fallbackLng: 'en',
        debug: false, // Turn off debug to reduce console noise

        ns: ['common'],
        defaultNS: 'common',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        detection: {
            order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;
