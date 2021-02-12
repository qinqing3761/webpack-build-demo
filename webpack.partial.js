const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        moment: {
          name: 'moment',
          test: /[\\/]node_modules[\\/]moment[\\/]/,
          priority: -6
        },
        angular: {
          name: 'angular',
          test: /[\\/]node_modules[\\/]@angular[\\/]/,
          priority: -9
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          name: 'default',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({
      // openAnalyzer: true,
      // reportFilename: path.join(__dirname, 'report.html')
      //  可以是`server`，`static`或`disabled`。
      //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
      //  在“静态”模式下，会生成带有报告的单个HTML文件。
      //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
      analyzerMode: 'static',
      //  将在“服务器”模式下使用的主机启动HTTP服务器。
      // analyzerHost: '127.0.0.1',
      //  将在“服务器”模式下使用的端口启动HTTP服务器。
      // analyzerPort: 8888,
      //  路径捆绑，将在`static`模式下生成的报告文件。
      //  相对于捆绑输出目录。
      // reportFilename: 'report.html',
      //  模块大小默认显示在报告中。
      //  应该是`stat`，`parsed`或者`gzip`中的一个。
      //  有关更多信息，请参见“定义”一节。
      // defaultSizes: 'parsed',
      //  在默认浏览器中自动打开报告
      // openAnalyzer: true,
      //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
      // generateStatsFile: false,
      //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
      //  相对于捆绑输出目录。
      // statsFilename: 'stats.json',
      //  stats.toJson（）方法的选项。
      //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
      //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
      // statsOptions: null,
      // logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
    }),
    new webpack.DefinePlugin({
      "VERSION": JSON.stringify("4711")
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      chunksSortMode: 'manual',
      chunks: ['styles', 'runtime', 'polyfills', 'scripts', 'vendors', 'main']      // 限定顺序，main.js必须在最后
    })
  ]
}