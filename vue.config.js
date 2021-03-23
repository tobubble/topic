
// module.exports = {
//     configureWebpack: {
//         resolve: {
//             alias: {
//                 "assets": ' @/assets',
//             }
//         }
//     }
// }

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'components': '@/components',
        }
      }
    },
  }