class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

const withCSS = require('@zeit/next-css')
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
