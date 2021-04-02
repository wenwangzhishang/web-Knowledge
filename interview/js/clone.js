
/*
* 克隆数据 分为浅克隆和深度克隆
* 主要区别
*1、引用类型 浅克隆会改变原有数据
*2、深克隆是完全复刻
* 原理讲解：
* 浅克隆就是将栈内存中的引用复制一份，赋给一个新的变量，本质上两个指向堆内存中的同一地址，内容也相同，其中一个变化另一个内容也会变化。
* 深克隆就是创建一个新的空对象，开辟一块内存，然后将原对象中的数据全部复制过去，完全切断两个对象间的联系
*
* 原始值（栈数据stack）：Number，Boolean(false/true)，String，undefined，null
* 引用值（堆数据heap）：Array，Object，function ··· Date，RegExp
*/

function clone (origin, target){
   target = target || {} 
  for(let key in origin){
    // console.log(key)
    target[key]=origin[key]
  }
  // console.log(target)
  return target;
}
var obj = {
  name: 'abc',
  age: '18',
  sex: 'male',
  card: ['a', 'b', 'c'],
  book: {
    name: 'ccc',
    sbook: {
      name: 'aaa'
    }
  }
};
var newobj = {};
 
// clone(obj, newobj);


function deepClone(origin,target){
  let temp = target || {}
  let toStr = Object.prototype.toString
  let arrStr = "[object Array]"
  /**
  * 1、判断是否是对象 还是数组
  * toString(推荐), constructor,instanceof (后两个会涉及到父子域的小问题，虽然遇到的可能不是很大)
  * Object.prototype.toString.call([])
   */
    for(let key in origin){
      // 配套使用，起到一个过滤的作用，不把原型链上的数据弄出来
      if (origin.hasOwnProperty(key)) {
        if(origin[key] !== 'null' && typeof origin[key] =="object"){
          if (toStr.call(origin[key]) == arrStr) {
            temp[key] = [];
          } else {
            temp[key] = {};
          }
          deepClone(origin[key],temp[key])
        }else{
          temp[key] = origin[key]
        }
      }
    }
    // console.log(temp)
  return temp
}
// deepClone(obj, newobj)
let newA = deepClone(obj, newobj)
console.log(newA)


/**
1、判断数组和对象

1、数组对象的长度为>=0的数字，而object对象的长度为undefined
2、isNaN():如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。


使用Object.prototype.toString.call()将该变量转化为代表其类型的string

为什么能判断   需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为 thisArg。

通过isArray()判断

一个对象实例都可以通过 constrcutor 对象访问它的构造函数

使用instanceof可以用来判断一个变量是数组还是对象，原理如下：
var arr = new Array();
 
var arr = ['aa','bb','cc'];
 
var obj = { a: 'aa', b: 'bb', c: 'cc' };
 
console.log(arr instanceof Array); //true
 
console.log(arr instanceof Object); //true
 
console.log(obj instanceof Array); //false
 
console.log(obj instanceof Object); //true
 */