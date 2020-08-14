import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

let options = {
  //loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
  loadPath: "http://localhost:8081/assets/{{ns}}/{{lng}}.json",
  crossDomain: true,
  requestOptions: {
    mode: "cors",
    credentials: "same-origin",
    cache: "default",
  },
  customHeaders: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "*/*",
  },
};

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: "en",
    backend: options,
    fallbackLng: "en",
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
