---
title: Vite 基础
category: Vite
order: 1
---

> [Vite 的构建原理](https://cn.vitejs.dev/guide/why.html#slow-server-start)

  1、在说Vite 之前我觉得有必要先介绍下webpack的由来。
    早期 Webpack 刚出来的时候，是为了解决低版本浏览器不支持 ESM 模块化的问题，将各个分散的 JavaScript 模块合并成一个文件，同时将多个 JavaScript 脚本文件合并成一个文件，减少 HTTP 请求的数量，有助于提升页面首次访问的速度。后期 Webpack 乘胜追击，引入了 Loader、Plugin 机制，提供了各种构建相关的能力（babel转义、css合并、代码压缩），取代了同期的 Browserify、Gulp。
    [Webpack 解决了什么问题](https://blog.csdn.net/W_ill/article/details/109447225)

    看完估计大部分人的想法是 ，，，fuck ！！！，搞了那么久的webpack原来只是一个解决问题的临时方案。现在是否要回归正途呢。es module 在浏览器端已经成熟了。孩子养大了。（老版本 ie11及一下不支持）
    ![image-20210630114855509](/Users/jacklin/Library/Application Support/typora-user-images/image-20210630114855509.png)



Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。

  第一次构建的时候，会有一个文件缓存
  Vite 会将预构建的依赖缓存到 node_modules/.vite。它根据几个源来决定是否需要重新运行预构建步骤:

  package.json 中的 dependencies 列表
  包管理器的 lockfile，例如 package-lock.json, yarn.lock，或者 pnpm-lock.yaml
  可能在 vite.config.js 相关字段中配置过的
  只有在上述其中一项发生更改时，才需要重新运行预构建。

  如果出于某些原因，你想要强制 Vite 重新构建依赖，你可以用 --force 命令行选项启动开发服务器，或者手动删除 node_modules/.vite 目录。

    jacklin@192 vu3_vite % npm run dev   

    @0.0.0 dev /Users/jacklin/shimao_jack/my/vu3_vite   
    vite   

    Pre-bundling dependencies:   
    vue
    @vue/runtime-core
    vue-router
    (this will be run only when your dependencies or config have changed)

    vite v2.3.8 dev server running at:

    > Local: http://localhost:3000/
    > Network: use `--host` to expose

  

  ready in 441ms.

[@vue/compiler-sfc] <script setup> is still an experimental proposal.
Follow its status at https://github.com/vuejs/rfcs/pull/227.




[@vue/compiler-sfc] When using experimental features,
it is recommended to pin your vue dependencies to exact versions to avoid breakage.

参考文档：
[Vite 官方中文文档](https://cn.vitejs.dev/guide/why.html#slow-updates)





