import I18n from 'react-native-i18n';
import zhCN from './locales/zh-CN';
import en from './locales/en';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';
I18n.translations = {
    'zh-CN': zhCN,
    'en': en,

    'zh-Hans-US': zhCN,
    'en-US': en,

    'zh-Hans-CN': zhCN,
    'zh-Hans': zhCN,
    'zh-hans': zhCN,

};

export default I18n;