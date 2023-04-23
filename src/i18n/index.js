import { createI18n } from "vue-i18n"
import En from "./lang/en_US"
import HK from "./lang/zh_HK"
import CN from "./lang/zh_CN"

const I18n = createI18n({
    locale: 'en_US',
    messages: {
        en_US: En,
        zh_HK: HK,
        zh_CN: CN
    },
})


export default I18n