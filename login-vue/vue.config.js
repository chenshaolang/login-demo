/*
 * @Author: your name
 * @Date: 2020-11-06 09:29:12
 * @LastEditTime: 2020-11-13 13:24:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-view/vue.config.js
 */
const path = require('path');
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  // 公共路径(必须有的)
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: path.resolve(__dirname, '../templates'),
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: process.env.NODE_ENV === 'production' ? '../static' : 'static',
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: false,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  // css相关配置(我暂时没用到)
  // css: {
  // 是否使用css分离插件 ExtractTextPlugin
  // extract: true,
  // 开启 CSS source maps?
  // sourceMap: false,
  // css预设器配置项
  // loaderOptions: {},
  // 启用 CSS modules for all css / pre-processor files.
  // modules: false
  // },
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: '0.0.0.0', // 匹配本机IP地址(默认是0.0.0.0)
    port: 8080, // 开发服务器运行端口号
    proxy: "http://127.0.0.1:5000",
    // proxy: "http://192.168.1.194:5000",
    // 注：目前本项目暂时没有写后台接口，没有跨域问题，暂时不配置proxy
  },
}
// https://cli.vuejs.org/zh/config/#publicpath 官方配置文档
// https://blog.csdn.net/qq_39045645/article/details/103252533
