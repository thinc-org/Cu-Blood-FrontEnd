const NextI18Next = require('next-i18next')

const options = {
    // otherLanguages: ['th'],
    lng: 'th'
    // fallbackLng: 'th'
}

module.exports = new NextI18Next(options);