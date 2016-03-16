/* eslint no-console: 0 */
/* eslint strict: 0 */

'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');

const koa = require('koa');
const serve = require('koa-static');

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

// 使用 webpack dev server，实现热加载等开发功能
if (isDeveloping) {
  let host = 'localhost';
  let port = 5001;

  // 处理 webpack 生产配置
  // 1.添加 webpack-dev-server 和 hot
  config.entry.bundle.unshift('webpack/hot/dev-server', `webpack-dev-server/client?http://${host}:${port}/`);
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  // 2.修改输出的文件名称
  config.output.chunkFilename = 'js/[name].js';
  config.output.filename = 'js/[name].js';

  // 3.移除__PRODUCTION__=true，移除单独提取样式文件，移除压缩代码
  config.plugins = config.plugins.slice(3);
  config.module.loaders[0].loaders = ['style', 'css', 'less'];

  // 4.添加 source-map
  config.devtool = ['source-map'];

  let compiler = webpack(config);
  let server = new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
  });
  server.listen(port, host, () => {
    console.log(`dev server start on http://${host}:${port}`);
  });
} else {
  let port = 5001;
  let server = koa();

  server.use(serve('./dist'));
  server.listen(port);
  console.log(`server start on ${port}`);
}
