---
title: React基础
category: React
order: 1
---



> React 的基本语法
  1、jsx 语法 核心点 一切都是函数。  

  2、组件首字母必须大写（会自动获取props）（建议从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名。）

      问题： 关于props 是如何定义的，如果定义了多个传值会怎么样？

  核心：所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
  3、[组件的函数化State 生命周期](https://react.docschina.org/docs/state-and-lifecycle.html)
    1、关于 setState() 你应该了解三件事 （这个设计思想应该是 微信小程序借鉴了过来）
      不要直接修改 State   
      State 的更新可能是异步的  
      State 的更新会被合并    
    2、[state 和props 的区别](https://react.docschina.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)
  4、[事件机制](https://react.docschina.org/docs/handling-events.html)
    1、不同点   
      在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault


    

