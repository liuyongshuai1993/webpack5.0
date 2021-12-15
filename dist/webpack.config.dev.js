"use strict";

/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2021-12-14 10:14:52
 * @LastEditors: 刘永帅
 * @LastEditTime: 2021-12-15 10:26:48
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './src/index.js',
  //入口
  output: {
    filename: 'bundle.js',
    // 出口文件名
    path: path.resolve(__dirname, './dist'),
    // 输出路径  必须式绝对路径
    clean: true,
    //清理打包文件夹
    assetModuleFilename: 'images/[contenthash][ext]' // 设置资源路径文件名

  },
  mode: 'development',
  devtool: 'inline-source-map',
  // 提示出报错位置
  devServer: {
    // webpack-dev-server
    "static": './dist'
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/i,
      type: 'asset/resource',
      generator: {
        // 优先级 高于output中assetModuleFilename
        filename: 'images/[contenthash][ext]'
      }
    }, {
      test: /\.(svg)$/i,
      // 导出一个资源的 data URI
      type: 'asset/inline'
    }, {
      test: /\.(txt)$/i,
      // 导出一个资源的 data URI
      type: 'asset/source'
    }, {
      test: /\.png$/i,
      // 通用选择 根据资源大小
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 * 1024 // 4kb

        }
      }
    }, {
      test: /\.(css|less)$/i,
      // 链式 从后至前；链式调用；链式的每一个loader都可以对我们的源进行转换  逆序的
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/source'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    // 定义模板
    filename: 'app.html',
    // 输出文件
    inject: 'body' // 指定文件打包位置

  }), new MiniCssExtractPlugin({
    filename: 'styles/build.css'
  })],
  // 优化配置中
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()]
  }
};