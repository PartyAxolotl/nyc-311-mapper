const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development', //(process.env.NODE_ENV),
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.s?[ac]ss/,
        use: [
          // MiniCssExtractPlugin.loader best for production
          'style-loader', // best for dev
          'css-loader', // resolve all css into single string
          'sass-loader' // transpile sass/scss into css
        ]  
      }
    ]

  },
    devServer: {
        historyApiFallback: true,
        // static: {
            // publicPath: 'build', localhost:8080/assets
            // directory: path.join(__dirname, 'build')
        // }
        // port: 8080,
        port: 8080,
        proxy: {
            '/party': 'http://localhost:3000/'
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ // install and require
            template: './index.html'
        }),
        new Dotenv()
    ],

}




// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.jsx',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     publicPath: '/',
//     filename: 'main.js',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//             ],
//             plugins: [
//               '@babel/plugin-proposal-class-properties',
//             ],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     compress: true,
//     port: 9000,
//     historyApiFallback: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       filename: 'index.html',
//       inject: 'body',
//     }),
//   ],
// };



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/index.jsx',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     publicPath: '/',
//     filename: 'main.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               sourceMap: true
//             }
//           },
//           {
//             loader: 'postcss-loader'
//           }
//         ]
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.jsx', '.js']
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './index.html',
//       filename: './index.html'
//     }),
//     new CopyPlugin({
//       patterns: [{ from: './style.css' }]
//     })
//   ],
//   devServer: {
//     historyApiFallback: true,
//     static: {
//       directory: path.join(__dirname, './dist')
//     },
//     proxy: {
//       '/api': 'http://localhost:3000'
//     }
//   }
// };

// // // Generated using webpack-cli https://github.com/webpack/webpack-cli

// // const path = require('path');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// // // const isProduction = process.env.NODE_ENV === 'production';

// // const stylesHandler = isProduction
// //   ? MiniCssExtractPlugin.loader
// //   : 'style-loader';

// // const config = {
// //   entry: './src/index.jsx',
// //   output: {
// //     path: path.resolve(__dirname, 'public')
// //   },
// //   devServer: {
// //     historyApiFallback: true,
// //     static: {
// //       directory: path.join(__dirname, './dist')
// //     },
// //     proxy: {
// //       '/api/**': 'http://localhost:3000',
// //       secure: false
// //     }
// //   },
// //   // devServer: {
// //   //   open: true,
// //   //   host: 'localhost',
// //   //   port: 8080,
// //   //   proxy: {
// //   //     '/api': 'http://localhost:3000'
// //   //   }
// //   // },
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       template: 'index.html'
// //     })

// //     // Add your plugins here
// //     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
// //   ],
// //   module: {
// //     rules: [
// //       {
// //         test: /\.(?:js|jsx)$/,
// //         exclude: /node_modules/,
// //         use: {
// //           loader: 'babel-loader',
// //           options: {
// //             presets: [
// //               ['@babel/preset-env', { targets: 'defaults' }],
// //               '@babel/preset-react'
// //             ]
// //           }
// //         }
// //       },
// //       {
// //         test: /\.s[ac]ss$/i,
// //         use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader']
// //       },
// //       {
// //         test: /\.css$/i,
// //         use: [stylesHandler, 'css-loader', 'postcss-loader']
// //       },
// //       {
// //         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
// //         type: 'asset'
// //       }

// //       // Add your rules for custom modules here
// //       // Learn more about loaders from https://webpack.js.org/loaders/
// //     ]
// //   },
// //   resolve: {
// //     extensions: ['.js', '.jsx']
// //   }
// // };

// // module.exports = () => {
// //   if (isProduction) {
// //     config.mode = 'production';

// //     config.plugins.push(new MiniCssExtractPlugin());
// //   } else {
// //     config.mode = 'development';
// //   }
// //   return config;
// // };
