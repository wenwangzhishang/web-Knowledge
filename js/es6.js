/**
 * 参考地址 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

/**
 * es6 proxy
 */
const handler = {
  get: function(obj, prop) {
      return prop in obj ? obj[prop] : 37;
  }
};
let a ={
  'aa':1
}
const p = new Proxy(a,handler)
/**
 * 如果handler 不穿
 */
const d = new Proxy(a,{})
// console.log(p)
// console.log(d)

/**
 *  Set and  WeakSet
 */

let b = new Set()
// console.log(b)
let c = new WeakSet()
// console.log(c)

const map = new Map([
  ['name', '张三','test1'],
  ['title', 'Author','tes3']
]);
// console.log(map)
map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
// console.log(map.get('name'))
// console.log(map.get('title'))

// function test(a){
//   console.log(a)
//   let sum = a
//   let fn = function(b){
//     sum  += b 
//     return fn
//   }
//   fn.toString = function(){
//     return sum
//   }
//   return fn
// }
function test(a){
  console.log(a)
  let sum = a
  let fn = function(b){
    sum  += b 
    return fn
  }
  fn.toString = function(){
    return sum
  }
  return fn
}

/**
 * 洋葱模型
 */
 function test1(a){
  console.log(a)
  let sum = a
  let fn = function(b){
    sum  += b 
    return fn
  }
  return fn
}



console.log(test1(1)(2)(3))