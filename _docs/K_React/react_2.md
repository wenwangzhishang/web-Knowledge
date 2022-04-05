---
title: React-Router
category: React
order: 2
---
[react-router中文学习](http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html)

1. Router 组件：包裹整个应用， 一个React 应用只需要使用一次
2、两种常用的Router Hashrouter 和BrowserRouter
3、Link 组件是入口，Route组件是出口
4、通过 props.history实现编程式导航
5、默认模糊搜索，添加exact 变精确路由。
 

默认路由
path=“/”

模糊匹配模式会导致路由切换的时候，默认路由会一直展示。

精确匹配  组件添加 exact 让其变成精确匹配
 <Route exact path="/" component=''/>
    

