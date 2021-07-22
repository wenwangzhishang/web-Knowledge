---
title: new、 bind 、call 、apply
category: JS 
order: 4
---
> [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

 1、 创建一个空的简单JavaScript对象（即{}）；

 2、 链接该对象（设置该对象的constructor）到另一个对象 ；

 3、 将步骤1新创建的对象作为this的上下文 ；

 4、 如果该函数没有返回对象，则返回this。

> [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

  1、传入一个目标函数值，如果使用new 运算符构造绑定函数 则忽略该值

  2、当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。

  3、如果 bind 函数的参数列表为空，或者thisArg是null或undefined，执行作用域的 this 将被视为新函数的 thisArg。

  4、返回一个原函数的拷贝，并拥有指定的 this 值和初始参数

> call
> [apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

  1、当没有传入指定的绑定对象，默认指向全局（传null 和undefined 是一样的），如果传入了绑定传入对象.

  2、判断传入的第二个参数是不是数组，如果不是数组抛出异常.

  3、对传入的数组进行展开，并当做参数赋值给绑定对象。
  
  4、返回函数的执行结果




