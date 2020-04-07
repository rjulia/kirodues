import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './translations/es.json';
import en from './translations/en.json';

const resources = {
  'es': {
    translations: es
  },
  'en': {
    translations: en
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // we init with resources
    resources: resources,
    lng: "es",
    keySeparator: '.',
    fallbackLng: ['es', 'en'],
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
      formatSeparator: '.',
    },
    react: {
      wait: true,
    },
  });

export default i18n;