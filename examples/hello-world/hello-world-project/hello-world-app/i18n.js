import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          salesPortal: {
            privacyNotice: 'Privacy Notice'
          }
        }
      },
      pt: {
        translation: {
          salesPortal: {
            text1: 'Test.'
          }
        }
      } 
    }
  });

export default i18n;
