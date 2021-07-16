---
title: 观察者模式
category: 设计模式
order: 1
---

> 简介
    观察者模式是一个强管理的模式，当一个事物发生改变。相对应得他的观察者也会接受这个信息。并作出改变
    

> 应用场景
场景一: 当观察的数据对象发生变化时, 自动调用相应函数。如：数据的双向绑定;
场景二: 每当调用对象里的某个方法时, 就会调用相应'访问'逻辑。


> 双向绑定
Object.defineProperty
使用 Object.defineProperty(obj, props, descriptor) 实现观察者模式, 其也是 vue 双向绑定 的核心, 示例如下(当改变 obj 中的 value 的时候, 自动调用相应相关函数):




