var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2


/**
* http://www.ruanyifeng.com/blog/2018/06/javascript-this.html
* JavaScript 语言之所以有this的设计，跟内存里面的数据结构有关系。
* JavaScript 允许在函数体内部，引用当前环境的其他变量。
* this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境
*
*
*
*
*  
 数是否在new中调用(new绑定)?如果是的话this绑定的是新创建的对象。
 数是否通过call、apply(显式绑定)或者硬绑定调用?如果是的话,this绑定的是 指定的对象。
 数是否在某个上下文对象中调用(隐式绑定)?如果是的话,this绑定的是那个上下文对象。
 果都不是的话,使用默认绑定。如果在严格模式下,就绑定到undefined,否则绑定到 全局对象。
 var bar = foo()

 对于 null 和 undefined 的绑定不会生效，会继续默认绑定
 所以对于要忽略this的情况，可以传入一个空对象ø，该对象通过Object.create(null)创建。这里不用{}的原因是，ø是真正意义上的空对象，它不创建Object.prototype委托，{}和普通对象一样，有原型链委托关系。

1. 这里传null的一种具体使用场景是函数柯里化的使用

箭头函数中显示绑定不会生效
我们看到箭头函数的this绑定只取决于外层（函数或全局）的作用域，对于前面的4种绑定规则是不会生效的。它也是作为this机制的一种替换，解决之前this绑定过程各种规则带来的复杂性。
* */