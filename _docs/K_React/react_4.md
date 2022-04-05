---
title: React-HOOKS
category: React
order: 4
---

 
[HOOKS 简介](https://react.docschina.org/docs/hooks-intro.html)

个人观点：如果懂Vue 的同学，可以去看些nextTick  和Vue3 componsition API refs方法 可能会有助于对hooks的理解。

要点：
1、16.8 版本出现的新特性（只有该版本以后的 才能支持），hook 是向下兼容的。
2、

解决了哪些问题
1、组件之间复用状态逻辑很难
2、让组件可以拆分成更小的颗粒度。
3、hooks 可以让你在非class 情况下使用更多的React 特性 （函数式组件 和class 组件）

用法：
1、如何生成一个hooks   useState
   通过useState 的顺序记录。

2、使用  [useEffect](https://react.docschina.org/docs/hooks-reference.html#useeffect)
 `
  import React, { useState, useEffect } from 'react';
  function Example() {
    const [count, setCount] = useState(0);  // 数组解构

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
 `

  当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。（我们会在使用 Effect Hook 中跟 class 组件的生命周期方法做更详细的对比。）

  该方法有点类似 Vue 的nextTick

  可以用来代替生命周期函数（在生命周期做的事情，一般统称为副作用） 
  componentDidMount
  componentDidUpdate 

  异步的 跟渲染页面不冲突。
 3、usecontext 父子组件在hooks 中如何传值

 4、useReducer 和usecontext 结合使用能够达到Redux 的效果
    userContext 实现了存储 state  提供了Provider 方法
    useReduces  action 实现复杂逻辑的传递
  


 
使用规则
1、只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2、只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，
    
> [State Hook](https://react.docschina.org/docs/hooks-state.html)
  类比，单个组件中的状态管理  vue3 componsition API refs


