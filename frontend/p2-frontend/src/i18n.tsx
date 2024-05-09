
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en.json'; // English translations
import translationES from './translations/es.json'; // Spanish translations

export default function initializeI18n() {
    i18n.use(initReactI18next).init({
        lng: 'en', // Default language
        fallbackLng: 'en',
        resources: {
            en: { translation: translationEN },
            es: { translation: translationES }
        },
    });
}

