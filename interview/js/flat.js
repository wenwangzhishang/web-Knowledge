/**

** 数组扁平化
多维数组转 1维数组
1、es6 方法
2、字符串 转
3、递归
4、reduce 方法
 */


let arr = [[2, [3, [4, 5]]],1, [2, [3, [4, 5]]], 6,8];
let str = JSON.stringify(arr);
// console.log(str)
//  arr.flat();
// console.log(arr)

// let arr1= str.replace(/(\[\]))/g, '').split(',');
// console.log(arr1)
function reduceArr (arr){
  let temp =[]
  arr.reduce((pre,curr)=>{
    console.log(pre)
    console.log(curr)
    //  Array.isArray(pre) ? reduceArr(pre) : temp.push(pre)
  })
}
// reduceArr(arr)
// console.log(reduceArr(arr))
function muchReduceArr(arr){
 
  return arr.reduce((pre,cur,index,ar)=>{
  console.log(pre,cur,index ,ar)

  return pre.concat(Array.isArray(cur)?muchReduceArr(cur):cur)
},)
    

}
console.log(muchReduceArr(arr))

// function flatten(ary) {
// return ary.reduce((pre, cur) => {
// return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
// })
// }
// let ary = [1, 2, [3, 4], [5, [6, 7]]]
// console.log(flatten(ary))

// while (ary.some(Array.isArray)) {
// ary = [].concat(...ary);
// }