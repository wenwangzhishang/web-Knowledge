---
title: xhr 和 fetch请求方式的比较
category: 前端杂谈
order: 4
---

>  XMLHttpRequest对象 ———— xhr 类请求 
    现代浏览器，最开始与服务器交换数据，都是通过XMLHttpRequest对象。它可以使用JSON、XML、HTML和text文本等格式发送和接收数据。
    优点：

    不重新加载页面的情况下更新网页  
    在页面已加载后从服务器请求/接收数据  
    在后台向服务器发送数据。

    缺点：  
    使用起来也比较繁琐，需要设置很多值。  
    早期的IE浏览器有自己的实现，这样需要写兼容代码。  

    ajax请求



    jquery


    axios 封装库


>  fetch 
  Fetch API提供了一个 JavaScript 接口，用于访问和操作HTTP管道的部分，例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。
  fetch 是底层API，代替XHR，可以轻松处理各种格式，非文本化格式。可以很容易的被其他技术使用，例如Service Workers。但是想要很好的使用fetch，需要做一些封装处理。


  1. fetch的语法简洁，更语义化
  2. 基于promise，支持async/await
  3. 同构方便，使用isomorphic-fetch

  Fetch的缺点：

  1. fetch只对网络错误报错，http状态码错误不报错
  2. fetch不支持abort，无法终止
  3. fetch不支持超时控制，使用setTimeout和Promise.reject实现的超时控制不能阻止请求过程继续在后台运行，造成了流量的浪费
  4. fetch没有原生检测请求进度的方式，XHR可以
  5. 默认情况下fetch不发送cookie，除非手动配置

参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch



