const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
console.log(path.resolve(__dirname, './dist'))

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
}
