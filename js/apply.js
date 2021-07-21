

function myapply(context,arg){
  if(Array.isArray(arg)){
    throw('cuowu')
  }

  let inner = context
  for(let i =0 ; i<arg.legnth;i++){
    inner.push(arg[i])
  }
  delete context
  return inner

}

var array = ['a', 'b'];
var elements = [0, 1, 2];
let bb =['test'];
// [].push.apply(array, elements); // [] 这里可是是任意数组 但不能是Array
Array.prototype.push.apply(array, elements); // [] 这里可是是任意数组 但不能是Array
// console.log(bb.push.apply(null,array))
console.log(array); // ["a", "b", 0, 1, 2]
console.log([].concat.apply([],[[[1,2],3],[4,5,6],[7,8,9]]))
// function test(){
//   console.log(1)
// }

/**
 * 
 */



