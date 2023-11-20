// const { loaderByName, addBeforeLoader } = require('@craco/craco');
module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            // console.log(webpackConfig);

            // webpackConfig.resolve.extensions.push('.html');

            // const htmlLoader = {
            //     loader: require.resolve('html-loader'),
            //     test: /\.html$/
            // };

            // addBeforeLoader(webpackConfig, loaderByName('file-loader'), htmlLoader);

            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                    content: './src/filters/simple.js',
                    // C:\projects\HappyTeacher\happyteacher\src\filters\simple.js
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                resolve: {
                    ...webpackConfig.resolve,
                    fallback: {
                        "path": require.resolve("path-browserify"), 
                        'fs': false,
                        "util": false,
                        "url": false,
                        "aws-sdk": false,
                        "child_process": false,
                        "stream": false,
                        "assert": false,
                        "os": false,
                        "http": false,
                        "https": false,
                        "crypto": false,
                        "querystring": false,
                        "zlib": false,
                        "buffer": false
                    }
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                }
            }
        },
    }
 }