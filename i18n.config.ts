import { de } from "./i18n/de";
import { en } from "./i18n/en";
import { es } from "./i18n/es";
import { fr } from "./i18n/fr";
import { it } from "./i18n/it";
import { nl } from "./i18n/nl";
import { pt } from "./i18n/pt";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: en,
    de: de,
    nl: nl,
    es: es,
    it: it,
    pt: pt,
    fr: fr,  
  }
}))
