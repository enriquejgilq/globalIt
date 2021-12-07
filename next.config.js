// noinspection JSUnusedGlobalSymbols
const debug = process.env.NODE_ENV !== "production";
const path = require('path')

module.exports = {
    future: {
        webpack5: true,
    },
    env: {
        basePath: process.env.BASE_PATH || '',
    },
    basePath: process.env.BASE_PATH || '',
  i18n: {
        locales: ['en','es','pt','fr'],
        defaultLocale: 'en'
    },   
  }

