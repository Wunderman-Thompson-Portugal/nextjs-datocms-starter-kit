const path = require('path')
path.resolve('./public/static/locales')

module.exports = {
  i18n: {
    defaultLocale: process.env.DEFAULT_SITE_LOCALE,
    locales: process.env.SITE_LOCALES.split(','),
    localePath: path.resolve('./public/static/locales')
  }
}