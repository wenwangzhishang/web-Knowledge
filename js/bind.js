/**
 * bind 主要涉及到this指向的问题。
 *
 * 1.默认绑定

独立函数调用时， this 指向全局对象，如果使用严格模式，那么全局对象无法使用默认绑定， this 绑定至 undefined 并抛错（TypeError: this is undefined）

2.隐式绑定

当函数作为引用属性被添加到对象中，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象

3.显示绑定

运用apply call 方法，在调用函数时候绑定this，也就是指定调用的函数的this值

4.new绑定

就是使用new操作符的时候的this绑定

上述四条规则优先级由上到下依次递增。
由于js多样的绑定规则，带来了 绑定隐式丢失问题， 即函数中的 this 丢失绑定对象，即它会应用第 1 条的 默认绑定 规则，从而将 this 绑定到全局对象或者 undefined 上。

 Function.prototype.bind() 函数
 bind() 方法创建一个新的函数， 当这个新函数被调用时其this置为提供的值，其参数列表前几项置为创建时指定的参数序列。

 */

 /**
  * 参考
  * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  */

let a ={
  a: 1
};
// console.log(this)
function jacktest(b,c){
  console.log(this)
  console.log(this.a+b+c)
}
// jacktest(1,2)

let jack2 = jacktest.bind(a,1,2)
jack2()
console.log(jack2)

jack2(3,4)


/**
 * 创建函数的时候 this指向全局
 * 当执行绑定函数时，this指向与形参在bind方法执行时已经确定了，无法改变。
 */
