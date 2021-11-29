require('dotenv').config();
const { i18n } = require('./next-i18next.config');

module.exports = {
  swcMinify: true,
  i18n: {
    locales: process.env.SITE_LOCALES.split(','),
    defaultLocale: process.env.DEFAULT_SITE_LOCALE,
  },
  env: {
    DATOCMS_API_TOKEN:
      process.env.DATOCMS_API_TOKEN,
  },
}
