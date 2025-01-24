import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const userLanguage = localStorage.getItem('language') || 'en';

i18n
   .use(Backend) // Loads translations from /public/locales
   .use(LanguageDetector) // Detects user language
   .use(initReactI18next) // Passes i18n instance to react-i18next
   .init({
      fallbackLng: "en",
      debug: true,
      lng: userLanguage,
      interpolation: {
         escapeValue: false // not needed for react as it escapes by default
      },
      backend: {
         loadPath: '/creative-portfolio/locales/{{lng}}/translation.json' // Correct path to load translation files
      }
   });

export default i18n;