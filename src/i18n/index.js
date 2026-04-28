import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: (window.location.pathname.includes('/zh/')) ? 'zh' : 'en', //default
        resources: {
        }, // Load default year resources
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });
export default i18n