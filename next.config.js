class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

const withCSS = require('@zeit/next-css')
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