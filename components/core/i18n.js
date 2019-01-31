const NextI18Next = require('next-i18next')

const options = {
    otherLanguages: ['en'],
    defaultLanguage: 'th',
    // lng: 'th',
    localeSubpaths: true,
    serverLanguageDetection: false,
    // fallbackLng: 'en'
}

module.exports = new NextI18Next(options);