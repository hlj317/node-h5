let webpack = require('webpack');
let path = require('path');
let LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
let getEntry = require('./get-entry');
let autoprefixer = require('autoprefixer');

let baseConfigFunc = (entryPrefix) => {
    let publicPath = '/';
    let entries = getEntry(entryPrefix);
    // 过滤service
    let argv;
    let filter;
    try {
        argv = JSON.parse(process.env.npm_config_argv).original;
        argv.forEach((item, index) => {
            if (item.indexOf('--') === 0) {
                filter = item.replace('--', '');
            }
        });
    } catch (ex) {
        argv = process.argv;
    }

    if (filter) {
        let regStr = toString.call(filter) === '[object Array]' ? filter.join('|') : filter;
        let regExp = new RegExp(regStr);
        for (let item in entries) {
            if (entries.hasOwnProperty(item) && !regExp.test(item)) {
                delete entries[item];
            }
        }
    }

    console.log(`要打包的基础库:\n${Object.keys(entries).join('\n')}`);

    return {
        entry: entries,
        output: {
            path: `${__dirname}/../../`, // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
            publicPath, // 模板、样式、脚本、图片等资源对应的server上的路径
        },
        resolve: {
            modules: [
                path.resolve('./'),
                'node_modules',
            ],
            // 支持ES2015 import
            mainFields: ['jsnext:main', 'main'],
            extensions: ['.js'],
        },
        module: {
            rules: [ // 加载器，关于各个加载器的参数配置，可自行搜索之。
                {
                    test: /\.html|\.xtpl$/,
                    loader: '@fe-tool/xtpl-loader',
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    // exclude: /node_modules/,
                    options: {
                        babelrc: false,
                        presets: [
                            'stage-3',
                            [
                                'es2015',
                                {
                                    modules: false,
                                },
                            ],
                        ],
                        plugins: [
                            'lodash',
                            [
                                'transform-runtime', {
                                    helpers: false,
                                    polyfill: false,
                                    regenerator: true,
                                    moduleName: 'babel-runtime',
                                },
                            ],
                            'transform-es2015-template-literals',
                            'transform-es2015-literals',
                            'transform-es2015-function-name',
                            'transform-es2015-arrow-functions',
                            'transform-es2015-block-scoped-functions',
                            'transform-es2015-classes',
                            'transform-es2015-object-super',
                            'transform-es2015-shorthand-properties',
                            'transform-es2015-computed-properties',
                            'transform-es2015-for-of',
                            'transform-es2015-sticky-regex',
                            'transform-es2015-unicode-regex',
                            'check-es2015-constants',
                            'transform-es2015-spread',
                            'transform-es2015-parameters',
                            'transform-es2015-destructuring',
                            'transform-es2015-block-scoping',
                            'transform-es2015-typeof-symbol', [
                                'transform-regenerator', {
                                    async: false,
                                    asyncGenerators: false,
                                },
                            ],
                        ],
                    },
                },
            ],
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer({
                            browsers: ['android >= 4.0', 'ios_saf >= 7.0'],
                            remove: false,
                        }),
                    ],
                },
            }),
            new LodashModuleReplacementPlugin({
                collections: true,
            }),
        ],
    };
};

module.exports = baseConfigFunc;
