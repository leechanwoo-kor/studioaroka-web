// webpack.config.js
let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')


/** 1. Initialize */
let modeOri = process.env.NODE_ENV || 'dev'
let modeMap = {
    "dev": { name: "development", abbr: "dev" },
    "development": { name: "development", abbr: "dev" },
    "prod": { name: "production", abbr: "prod" },
    "production": { name: "production", abbr: "prod" },
    "hot": { name: "development", abbr: "dev" }
}
let mode = modeMap[modeOri.toLowerCase()] || modeMap['dev']
console.log("BUILD MODE: ", modeOri, mode)

// 1.2 webpack config
let webpackConfig = {
    name: "arokaConfig",
    entry: {
        aroka: resolve("/src/main/vue/entry/main.js"),
    },
    output: {
        path: resolve("/dist"),
        filename: 'build.[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.html', '.json', '.scss'],
        alias: {
            '@': resolve('src/main/vue'),
            '@aroka': resolve('src/main/vue/aroka'),
            '@image': resolve('src/main/vue/assets/img'),
            '@font': resolve('src/main/vue/assets/font'),
            '@styles': resolve('src/main/vue/styles'),
            '@config': resolve('src/main/vue/config/mode/config.' + mode.abbr + '.js'),
            '@const': resolve('src/main/vue/util/const.' + (mode.con || 'local') + '.js'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: `
                                @import "@styles/_variables.scss";
                                @import "@styles/_mixin.scss";
                            `,
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
                use: 'file-loader?name=[name].[ext]',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
}

/** 2. Configuration */
// 2.1 Webpack config :: for default(dev)
module.exports = webpackConfig;

// 2.2 set define plugin
(function () {

    // 1) default value
    module.exports.mode = 'development';

    // 2) value by mode
    if (mode === 'prod') {
        module.exports.mode = 'production';
    } else if (mode === 'hot') {

    } else {

    }

    // 3) set to system
    // module.exports.plugins = (module.exports.plugins || []).concat([
    //     new webpack.DefinePlugin(define),
    // ])
})();

// 2.3 other setting
(function () {
    // 1) prod
    if (process.env.NODE_ENV === 'prod') {
        // 1-1) set devtool
        module.exports.devtool = false; //(none)
        // 1-2) add extra plugin
        module.exports.plugins = (module.exports.plugins || []).concat([
            new HtmlWebpackPlugin({
                template: resolve('/src/main/vue/index.html'),
                filename: 'index.html',
                favicon: resolve('/src/main/vue/assets/favicon.png'),
                inject: true,
                chunks: ['aroka'],
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                }
            }),
        ])

        module.exports.optimization = {
            minimize: true,
            minimizer: [
                new TerserWebpackPlugin()
            ],
        }
    }
    // 2) hot (webpack-dev-server)
    else {
        if (process.env.NODE_ENV === 'hot') {
            // 2-1) set devtool
            module.exports.devtool = 'inline-source-map'
            // 2-2) add extra plugin
            module.exports.plugins = (module.exports.plugins || []).concat([
                new HtmlWebpackPlugin({
                    template: resolve('/src/main/vue/index.html'),
                    filename: 'index.html',
                    favicon: resolve('/src/main/vue/assets/favicon.png'),
                    inject: true,
                    chunks: ['aroka'],
                }),
            ])
            module.exports.devServer = {
                historyApiFallback: true,
                port: 9090,
                // publicPath: '/dist/',
                proxy: {
                    '/api/': {
                        target: '백엔드주소',
                        changeOrigin: true,
                    }
                },
                // ...,
            }
        }
    }
})();

console.log("ENV_NODE :", process.env.NODE_ENV)
console.log("DEVTOOL :", module.exports.devtool)

/** Local function */
function resolve(dir) { return path.join(__dirname, '.', dir) }