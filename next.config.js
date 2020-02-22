/* eslint-disable no-undef */
const withImages = require('next-images')

module.exports = withImages()

// module.exports = withImages({
//   esModule: true,
//   inlineImageLimit: 16384,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000,
//           name: '[name]-[name].[ext]'
//         }
//       }
//     })

//     return config
//   }
// })
