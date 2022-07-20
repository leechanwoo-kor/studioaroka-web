// webpack.config.js
let path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

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
let isNotProduction = process.env.NODE_ENV !== 'prod'
console.log("BUILD MODE: ", modeOri, mode)

// 1.2 webpack config
let webpackConfig = {
    mode: "none",
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
            '@image': resolve('src/main/vue/asset/img'),
            '@font': resolve('src/main/vue/asset/font'),
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
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
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
    plugins:
        [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin(
                {
                    template: resolve('/src/main/vue/index.html'),
                }
            ),
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            }),
        ],
}

/** 2. Configuration */
// 2.1 Webpack config :: for default(dev)
module.exports = webpackConfig;

/** Local function */
function resolve(dir) { return path.join(__dirname, '.', dir) }