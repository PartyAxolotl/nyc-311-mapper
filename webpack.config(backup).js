// const path = require('path');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// ​
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, '/dist'),
//         filename: 'index_bundle.js'
//     },
// ​
//     mode: 'development',
// ​
//     module: {
//         rules: [
//             {
//                 test: /\.(?:js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: [
//                             ['@babel/preset-env', { targets: 'defaults' }],
//                             '@babel/preset-react',
//                         ],
//                     }
//                 },
// ​
//             },
//             {
//                 test: /\.css$/i,
//                 exclude: /node_modules/,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ]
//     },
//     plugins: [
//         new htmlWebpackPlugin({
//             template: './src/index.html'
//         })
//     ],
//     devServer: {
//         port: 8080,
//         proxy: {
//             '/': 'http://localhost:3000/'
//         },
//         hot: true,
//         allowedHosts: 'auto'
//     }
// }
// Collapse



















// Message Ryan Hastings



