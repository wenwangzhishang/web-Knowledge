let arr =[1,2,3]
// arr.forEach(item =>{
//   item*2
// })
// console.log(arr)

// let arr2 = arr.map( item =>{
// // console.log(arr)

//   return 2
// })
// // console.log(arr)
// console.log(arr2)

var array = ['a', 'b'];
var elements = [0, 1, 2];
[].push.apply(array, elements);

console.info(array); // ["a", "b", 0, 1, 2]

  return 2
})
// console.log(arr)
console.log(arr2)

// let arrtest= [].apply(arr,null)
// console.log(arrtest)
/**
 *   关于apply 的用法
 *  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */

var array = ['a', 'b'];
var elements = [0, 1, 2];
[].push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
