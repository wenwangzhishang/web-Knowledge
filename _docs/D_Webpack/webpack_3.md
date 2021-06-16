---
title: 前端如何利用Webpack进行代码分析和优化
category: Webpack
order: 3
---


> 一、1. 执行以下命令安装  
 npm install webpack-bundle-analyzer --save-dev

> vue.config.js 配置
  chainWebpack: config => {

      // 查看打包文件体积大小

      config

        .plugin('webpack-bundle-analyzer')

        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

  }

> 3. 在package.json文件中 在 build 后面加上一个 --report
   "build": "vue-cli-service build --report"


优化的方向和思想
1、查看完代码分析，我们大概知道了。打包文件的大小是否合理。
   
运行打包后，我们打开http://127.0.0.1:8888之后 就会看到一个可视化的 文件占比



