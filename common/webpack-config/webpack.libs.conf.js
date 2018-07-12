let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// whether to generate source map for production files.
// disabling this can speed up the build.
const PERCENTAGE = 100;
let prodConfig = () => {
    let config = {
        mode: 'production',
        devtool: false,
        bail: true,
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract(
                        {
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        minimize: true,
                                    },
                                }, {
                                    loader: 'postcss-loader',
                                    options: {
                                        plugins: () => [require('autoprefixer')()],
                                    },
                                }, {
                                    loader: 'less-loader',
                                },
                            ],
                        }
                    ),
                },
            ],
        },
        plugins: [
            // http://vuejs.github.io/vue-loader/workflow/production.html
            new webpack.HashedModuleIdsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
            }),
            new webpack.ProgressPlugin(((percentage, msg) => {
                let _perInt = parseInt(percentage * PERCENTAGE);
                if (_perInt % 10 === 0) {
                    console.log(`当前进度: ${parseInt(percentage * PERCENTAGE)}%`, msg);
                }
            })),
        ],
    };
    return config;
};

module.exports = prodConfig;
