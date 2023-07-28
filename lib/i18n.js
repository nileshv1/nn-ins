import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const supportedLanguages = ['en', 'fr']; // Add more locales if needed

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    supportedLngs: supportedLanguages,
    lng: 'fr', // Set the default language
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    debug: false, // Set to false in production
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  });

export default i18n;
