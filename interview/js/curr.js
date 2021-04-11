// function createcurr(func,args){
//   let currArgs= func.length;
//   let args = args ||[]
//   return function(){
//     _args = Array.prototype.slice.call(arguments)
//     args.push(..._args)
//     if(_args.length < currArgs){
//       return createcurr(this,func,args)
//     }
//   }

// }
/**
 * js 柯里化
 */
function curring(){
  let args =Array.prototype.slice.call(arguments)
  let temp =0
  return function(){
    let newArgs = args.concat(Array.prototype.slice.call(arguments))
    
    newArgs.map(item=>{
      console.log(item)
      console.log('sum',temp)
       temp=temp +item
    })
    return temp
  }
}
// let curr0 =curring(1,2)
// console.log(curr0(2))
// function addCurr(fn,args){
//   let tempargs = Array.prototype.slice.call(args)

//   return function(){

//     let _args =tempargs.concat(Array.prototype.slice.call(arguments)) 
//     fn.apply(this,_args)
//   }
// }
// let addhttps =  addCurr(function(){
//   let temp = Array.prototype.slice.call(arguments)
//   // console.log('back',temp)
//   return 'test'


// },1)
// addhttps()
// 支持多参数传递
// function progressCurrying(fn, args) {
//   console.log(fn)
//   var _this = this
//   var len = fn.length;
//   var args = args || [];

//   return function() {
//       var _args = Array.prototype.slice.call(arguments);
//       Array.prototype.push.apply(args, _args);
//       // console.log(_args)
//       // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
//       if (_args.length < len) {
//           return progressCurrying.call(_this, fn, _args);
//       }

//       // 参数收集完毕，则执行fn
//       return fn.apply(this, _args);
//   }
// }
// let addhttps =  progressCurrying(function(){

//   console.log('fa', Array.prototype.slice.call(arguments))

// })

// // addhttps('5556')
// addhttps('55561','tes')

function makeScheduleFetch(concurrency) {
  let  len=concurrency
  let i =1
  let AllUrl =[]
  return function(){
    let _args = Array.prototype.slice.call(arguments)
      i++

    AllUrl=AllUrl.concat(Array.prototype.slice.call(arguments))
    console.log(AllUrl)
    if(len <i){
      console.log('执行两次了')
      return ''
    }else{
      console.log(1)
      return 
    }
  }   
} 
const scheduleFetch = makeScheduleFetch(2)   
// 最多同时有两个并发请求 
scheduleFetch('<https://www.toutiao.com/>') 
scheduleFetch('<https://www.douyin.com/>') 
scheduleFetch('<https://www.tiktok.com/>')




