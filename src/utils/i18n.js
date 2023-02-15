import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './usa.json';
import sp from './spain.json';
import br from './br.json';

i18n.use(initReactI18next).init({
    compatibilityJOSN:'v3',
    lng:'en',
    resources:{
        en:'en',
        br:'br',
        sp:'sp'
    },
    react:{
        useSuspense:false,
    },
    interpolation:{
        escapeValue:false,
    }
})

export default i18n;