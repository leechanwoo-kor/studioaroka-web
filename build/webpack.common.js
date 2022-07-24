// webpack.config.js
let path = require('path')
let paths = require('./paths')
let webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackPlugins = require('./webpack.plugin')

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

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
    // Where webpack looks to start building the bundle
    entry: {
        bundle: path.resolve(__dirname, '../src/main/vue/entry/index.js'),
    },
    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: 'js/build.[name].[contenthash].js',
        publicPath: ASSET_PATH,
        clean: true,
        assetModuleFilename: 'asset/[name][ext]'
    },
    resolve: {
        extensions: ['.js', '.vue', '.html', '.json', '.scss'],
        alias: {
            '@': resolve('../src/main/vue'),
            '@aroka': resolve('../src/main/vue/aroka'),
            '@image': resolve('../src/main/vue/assets/img'),
            '@font': resolve('../src/main/vue/assets/font'),
            '@styles': resolve('../src/main/vue/styles'),
            '@config': resolve('../src/main/vue/config/mode/config.' + mode.abbr + '.js'),
            '@const': resolve('../src/main/vue/util/const.' + (mode.con || 'local') + '.js'),
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
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        // options: {
                        //     additionalData: `
                        //         @import "@styles/_variables.scss";
                        //         @import "@styles/_mixin.scss";
                        //     `,
                        // },
                    },
                ]
            },
            {
                test: /\.css$/i,
                use: [{

                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: ""
                    },
                },
                    'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset',
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: 'Studio Aroka',
            filename: 'index.html',
            template: paths.src + '/main/vue/template.html',
            favicon: paths.src + '/main/vue/assets/favicon.png',
        }),
        new VueLoaderPlugin(),
        // This makes it possible for us to safely use env vars on our code
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
        // new BundleAnalyzerPlugin(),
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
    webpackConfig.plugins.push(...webpackPlugins)
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
        // module.exports.plugins = (module.exports.plugins || []).concat([
        //     new HtmlWebpackPlugin({
        //         title: 'Studio Aroka',
        //         filename: 'index.html',
        //         template: paths.src + '/main/vue/template.html',
        //         favicon: paths.src + '/main/vue/assets/favicon.png',
        //         inject: true,
        //         // chunks: ['aroka'],
        //         // minify: {
        //         //     removeComments: true,
        //         //     collapseWhitespace: true,
        //         //     removeAttributeQuotes: true,
        //         // }
        //     }),
        // ])

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
            // module.exports.plugins = (module.exports.plugins || []).concat([
            //     new HtmlWebpackPlugin({
            //         title: 'Studio Aroka',
            //         filename: 'index.html',
            //         template: paths.src + '/main/vue/template.html',
            //         favicon: paths.src + '/main/vue/assets/favicon.png',
            //         inject: true,
            //         // chunks: ['aroka'],
            //     }),
            // ])
            module.exports.devServer = {
                static: {
                    directory: path.resolve(__dirname, 'dist')
                },
                port: 9090,
                open: true,
                hot: true,
                compress: true,
                historyApiFallback: false,
                proxy: {
                    '/': {
                        target: 'https://studioaroka.com/',
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