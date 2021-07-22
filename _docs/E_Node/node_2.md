---
title: Koa 基础
category: Node
order: 2
---

> 洋葱模型

`
function test(next){
  next()
}
let newArr= [].push(test())

let fn = () =>{
  newArr[0](fn)
}
fn()

`
通过这个函数了解执行机制，看上去简单，但是实际原理值得深思。参考：test_study分支

