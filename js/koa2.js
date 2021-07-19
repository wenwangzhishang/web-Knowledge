// /**
//  * 主要用来测试堆栈方法
//  * @returns 方法一
//  */

// function createApp(){     
//   return {    
//     use(fn){ 
//       if(!this.quenu){
//         this.quenu = []
//       }
//       this.quenu.push(fn)
//     },    
//     run(){
//       if(Array.isArray(this.quenu)){
//         let i =0
        
//         let exec = () =>{
//           i++
//           if(i <=10){
//             this.quenu[1](exec)
//           }
//           } 
//           exec()
//         }
     
//     }  
//   } 
// } 
// const app = createApp();


// app.use((next)=>{ 
//   setTimeout(function(){  
//    next() 
//   })   
//   console.log(new Date() ,'1')     
// })           
// app.use((next)=>{  
//   console.log(new Date() ,'2')  
//   next()              
// })   
// app.use((next)=>{   
//   console.log(new Date() ,'3')  
//   next()  
// })  
//  app.run()

/**
 *  参考：https://segmentfault.com/a/1190000018488597
 *  链式反向递归模型
 * @param {*} next 
 */
 
function test(next){
  console.log(next())
  next()
}  
let temp = []
temp.push(test)
let i =0
let fn = () =>{
  if(i<3){
    i++
    // console.log(fn)
    temp[0](fn)
  }
}
fn()