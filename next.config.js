class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

const withCSS = require('@zeit/next-css')
<<<<<<< HEAD
const withPurgeCss = require('next-purgecss')
module.exports = withCSS(withPurgeCss(
    {
    purgeCss: {
        extractors: [
            {
                extractor: TailwindExtractor,
                extensions: ['js', 'jsx', 'ts', 'tsx', 'svg', 'html'],
            }
        ]
    }
}
))
=======
module.exports = withCSS({
    // async exportPathMap() {
    //   return {
    //     '/u/abt': { page: 'u/abt' },
    //     '/': { page: '/' },
    //     '/contact': { page: '/contact' },
    //     '/register': { page: '/register' },
    //     '/about': { page: '/about' },
    //   }
    // },
})
>>>>>>> b581b3f92cfe20c185818b5269c9d1044692f672
