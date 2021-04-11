/**
**
* 隐式绑定
*
*
*
 */

let bind = function(context,...args){
  let context = context || window
  let fnSymbol = Symbol('fn')
  context[fnSymbol] =this
  context[fnSymbol](...args)
  delete context[fnSymbol]
 }

 