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
    阻塞渲染的 CSS
    默认情况下，CSS 被视为阻塞渲染的资源（但不阻塞html的解析），这意味着浏览器将不会渲染任何已处理的内容，直至 CSSOM 构建完毕。请务必精简CSS，尽快提供它，并利用媒体类型和查询来解除对渲染的阻塞，以缩短首屏的时间。

    在渲染树构建中，要求同时具有 DOM 和 CSSOM 才能构建渲染树。这会给性能造成严重影响：HTML 和 CSS 都是阻塞渲染的资源。 HTML 显然是必需的，因为如果没有 DOM，就没有可渲染的内容，但 CSS 的必要性可能就不太明显。如果在 CSS 不阻塞渲染的情况下尝试渲染一个普通网页会怎样？

    默认情况下，CSS 被视为阻塞渲染的资源。
    我们可以通过媒体类型和媒体查询将一些 CSS 资源标记为不阻塞渲染。
    浏览器会下载所有 CSS 资源，无论阻塞还是不阻塞。
    没有 CSS 的网页实际上无法使用。所以浏览器将阻塞渲染，直至 DOM 和 CSSOM 全都准备就绪。

    CSS 是阻塞渲染的资源。需要将它尽早、尽快地下载到客户端，以便缩短首次渲染的时间。

    如果有一些 CSS 样式只在特定条件下（例如显示网页或将网页投影到大型显示器上时）使用，又该如何？如果这些资源不阻塞渲染，该有多好。

    可以通过 CSS“媒体类型”和“媒体查询”来解决这类情况：

    <link href="style.css" rel="stylesheet">
    <link href="print.css" rel="stylesheet" media="print">
    <link href="other.css" rel="stylesheet" media="(min-width: 40em)">

    媒体查询由媒体类型以及零个或多个检查特定媒体特征状况的表达式组成。例如，第一个样式表声明未提供任何媒体类型或查询，因此它适用于所有情况。也就是说它始终会阻塞渲染。第二个样式表则不然，它只在打印内容时适用---或许您想重新安排布局、更改字体等等，因此在网页首次加载时，该样式表不需要阻塞渲染。最后一个样式表声明提供了由浏览器执行的“媒体查询”：符合条件时，样式表会生效，浏览器将阻塞渲染，直至样式表下载并处理完毕。

    通过使用媒体查询，我们可以根据特定用例（比如显示或打印），也可以根据动态情况（比如屏幕方向变化、尺寸调整事件等）定制外观。声明样式表时，请密切注意媒体类型和查询，因为它们将严重影响关键渲染路径的性能。

    让我们考虑下面这些实例：

    <link href="style.css"    rel="stylesheet">
    <link href="style.css"    rel="stylesheet" media="all">
    <link href="portrait.css" rel="stylesheet" media="orientation:portrait">
    <link href="print.css"    rel="stylesheet" media="print">
    第一个声明阻塞渲染，适用于所有情况。
    第二个声明同样阻塞渲染：“all”是默认类型，和第一个声明实际上是等效的。
    第三个声明具有动态媒体查询，将在网页加载时计算。根据网页加载时设备的方向，portrait.css 可能阻塞渲染，也可能不阻塞渲染。
    最后一个声明只在打印网页时应用，因此网页在浏览器中加载时，不会阻塞渲染。
    最后，“阻塞渲染”仅是指浏览器是否需要暂停网页的首次渲染，直至该资源准备就绪。无论媒寻是否命中，浏览器都会下载上述所有的CSS样式表，只不过不阻塞渲染的资源对当前媒体不生效罢了。

  四、构建渲染树

  五、布局与绘制

  六、几点补充说明

  性能优化策略
基于上面介绍的浏览器渲染原理，DOM 和 CSSOM 结构构建顺序，初始化可以对页面渲染做些优化，提升页面性能。



JS优化： <script> 标签加上 defer属性 和 async属性 用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。

defer属性： 用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
async属性： HTML5新增属性，用于异步下载脚本文件，下载完毕立即解释执行代码。

参考：https://segmentfault.com/q/1010000000640869

CSS优化： <link> 标签的 rel属性 中的属性值设置为 preload 能够让你在你的HTML页面中可以指明哪些资源是在页面加载完成后即刻需要的,最优的配置加载顺序，提高渲染性能


重绘（Paint） 和重排(Layout)


总结
浏览器工作流程：构建DOM -> 构建CSSOM -> 构建渲染树 -> 布局 -> 绘制。
CSSOM会阻塞渲染，只有当CSSOM构建完毕后才会进入下一个阶段构建渲染树。
通常情况下DOM和CSSOM是并行构建的，但是当浏览器遇到一个不带defer或async属性的script标签时，DOM构建将暂停，如果此时又恰巧浏览器尚未完成CSSOM的下载和构建，由于JavaScript可以修改CSSOM，所以需要等CSSOM构建完毕后再执行JS，最后才重新DOM构建。



浏览器在做性能测试的时候 lighthouse  
以csdn 为例： 如果同时打开两个csdn 同源网站 会导致lighthouse 不能生成报告。


  参考：
  https://juejin.cn/post/6844903815758479374   
  https://www.cnblogs.com/JerryChan31/p/9631934.html
  https://www.cnblogs.com/kevin2chen/p/6938021.html

  https://developer.mozilla.org/zh-CN/docs/Web/API/Window/DOMContentLoaded_event





