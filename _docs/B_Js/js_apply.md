---
title:  bind 、call 、apply
category: JS 
order: 4
---
> bind
> call
> [apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

  1、当没有传入指定的绑定对象，默认指向全局（传null 和undefined 是一样的），如果传入了绑定传入对象
  2、判断传入的第二个参数是不是数组，如果不是数组抛出异常
  3、对传入的数组进行展开，并当做参数赋值给绑定对象。
  4、返回函数的执行结果




