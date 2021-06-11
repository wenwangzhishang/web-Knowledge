---
title: 浏览器的渲染机制
category: 前端杂谈
order: 1
---

浏览器的内核是指支持浏览器运行的最核心的程序，分为两个部分的，一是渲染引擎，另一个是JS引擎。渲染引擎在不同的浏览器中也不是都相同的。目前市面上常见的浏览器内核可以分为这四种：Trident（IE）、Gecko（火狐）、Blink（Chrome、Opera）、Webkit（Safari）。

> 浏览器从输入url开始
  这里只做简述，如想详细了解可以参考我另一篇文章
    要点如下：
      浏览器根据 DNS 服务器得到域名的 IP 地址
      向这个 IP 的机器发送 HTTP 请求
      服务器收到、处理并返回 HTTP 请求
      浏览器得到返回内容
这里重点讲述 浏览器返回之后的内容 

其实就是一堆 HMTL 格式的字符串，因为只有 HTML 格式浏览器才能正确解析，这是 W3C 标准的要求。接下来就是浏览器的渲染过程。
  一、浏览器会解析三个东西：
    一是HTML/SVG/XHTML，HTML字符串描述了一个页面的结构，浏览器会把HTML结构字符串解析转换DOM树形结构

    二是CSS，解析CSS会产生CSS规则树，它和DOM结构比较像。

    三是Javascript脚本，等到Javascript 脚本文件加载后， 通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree。

  二、解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。
  Rendering Tree 渲染树并不等同于DOM树，渲染树只会包括需要显示的节点和这些节点的样式信息。  
  CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element（也就是每个Frame）。  
  然后，计算每个Frame 的位置，这又叫layout和reflow过程  

  三、最后通过调用操作系统Native GUI的API绘制


  二、 构建DOM
    浏览器会遵守一套步骤将HTML 文件转换为 DOM 树。宏观上，可以分为几个步骤：

  三、构建CSSOM

  四、构建渲染树

  五、布局与绘制

  六、几点补充说明

  性能优化策略
基于上面介绍的浏览器渲染原理，DOM 和 CSSOM 结构构建顺序，初始化可以对页面渲染做些优化，提升页面性能。

JS优化： <script> 标签加上 defer属性 和 async属性 用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。

defer属性： 用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
async属性： HTML5新增属性，用于异步下载脚本文件，下载完毕立即解释执行代码。


CSS优化： <link> 标签的 rel属性 中的属性值设置为 preload 能够让你在你的HTML页面中可以指明哪些资源是在页面加载完成后即刻需要的,最优的配置加载顺序，提高渲染性能


总结
浏览器工作流程：构建DOM -> 构建CSSOM -> 构建渲染树 -> 布局 -> 绘制。
CSSOM会阻塞渲染，只有当CSSOM构建完毕后才会进入下一个阶段构建渲染树。
通常情况下DOM和CSSOM是并行构建的，但是当浏览器遇到一个不带defer或async属性的script标签时，DOM构建将暂停，如果此时又恰巧浏览器尚未完成CSSOM的下载和构建，由于JavaScript可以修改CSSOM，所以需要等CSSOM构建完毕后再执行JS，最后才重新DOM构建。




  参考：
  https://juejin.cn/post/6844903815758479374   
  https://www.cnblogs.com/JerryChan31/p/9631934.html





