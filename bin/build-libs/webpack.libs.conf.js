
/* eslint-disable no-console,max-len */
let webpackProdConfig = require('../../common/webpack-config/webpack.libs.conf');
let baseConfig = require('./webpack.base.conf');
let merge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let projectConfig = require('../../config/config');
// whether to generate source map for production files.
// disabling this can speed up the build.
let prodConfig = webpackProdConfig();

let config = merge(baseConfig, prodConfig, {
    output: {
        filename: `${projectConfig.assetsPrefix}/libs/[name].js`,
        chunkFilename: `${projectConfig.assetsPrefix}/libs/[id].js`,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `${projectConfig.assetsPrefix}/libs/[name].css`,
            allChunks: true,
        }),
    ],
    
});

module.exports = config;
