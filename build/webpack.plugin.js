let paths = require('./paths')

const PrerenderSPAPlugin = require('prerender-spa-plugin-next')

module.exports = [
    new PrerenderSPAPlugin({
        staticDir: paths.build,
        routes: [
            "/",
            "/about",
            "/policy",
            "/term",
        ],
    }),
];