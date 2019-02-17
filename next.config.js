class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

const withCSS = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withImages = require('next-images')
module.exports = withImages(withCSS(
    withPurgeCss(
    {
    purgeCss: {
        whitelist: () => ['expand-menu', 'is-expanding', 'sm:w-24' ,'sm:w-48', 'w-32', 'w-48', 'sm:w-16', "text-grey-darker"],
        whitelistPatterns: [/^react-datepicker/],
        extractors: [
            {
                extractor: TailwindExtractor,
                extensions: ['js', 'jsx', 'ts', 'tsx', 'svg', 'html'],
            }
        ]
    }
}
)
))
