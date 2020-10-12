const { merge } = require('webpack-merge')
const common = require('./webpack.config.common');

module.exports = merge(common, {
    entry: [
        'react-hot-loader/patch',
        './src/index.jsx'
    ],
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
})
