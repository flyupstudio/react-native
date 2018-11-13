import { intl, locale } from './containers/LanguageProvider';

const messages = {
  ru: {},
  en: {},
};

const trans = (id, defaultValue) => {
  if (!messages[locale][id]) {
    messages[locale][id] = intl.formatMessage({
      id,
      defaultMessage: '',
    });
  }
  return messages[locale][id] || defaultValue;
};

export default trans;
