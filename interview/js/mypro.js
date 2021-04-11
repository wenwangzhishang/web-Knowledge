

function myPromise(excutor){
  let _this = this;
  _this.callbackQuenu =[]
  _this.status ="PENDING"
  _this.value =null;
  function resolve(params){
    console.log(params)
    if(_this.status === "PENDING"){
      _this.value = params
      console.log('resolve',params)
      _this.status = "FULFILLED"
      _this.callbackQuenu.map(item =>{
        console.log(item)
        setTimeout(function(){

          item.onResolved(params)
        })
      })
    }
  }
  function reject(reason){
    console.log(reason)

    if(_this.status === "PENDING"){
      console.log('执行 reject')
      _this.value = reason
      _this.status = "ONREJECT"
      _this.callbackQuenu.map(item =>{
        setTimeout(function(){

          item.onRejected(reason)
        })
      })
    }
  }
  try{
    excutor(resolve,reject)
  }catch(err){
    reject(err)
  }

}
myPromise.prototype.then=function(onResolved,onRejected){
  // let result = onResolve
  let _this = this;
  /**
   * 第一步
   */
  // _this.callbackQuenu.push({
  //   onResolve,
  //   onReject
  // })
  /**
   * 第二步 开始链式
   */
    console.log(typeof onResolved)
    onResolved=typeof onResolved ==='function' ? onResolved :(value)=>value
    onRejected=typeof onRejected ==='function' ? onRejected :(value)=>value
  return new myPromise(function(resolve,reject){
    // console.log('1',onResolved)
    // _this.callbackQuenu.push({
    //   onResolve,
    //   onReject
    // })
  //  typeof onResolve ==="function"? 
  console.log(_this.status)
    if(_this.status === "PENDING"){
    
      _this.callbackQuenu.push({
        onResolved,
        onRejected
      })
      console.log(_this.callbackQuenu)
    }else if(_this.status === "FULFILLED"){
      let result = onResolved(_this.value)
      // console.log(result)
      // console.log(result instanceof myPromise)
      if(result instanceof myPromise){
        result.then(res=>{
          resolve(res)
        })
      } else{
        resolve(result)
      }
      // onResolved(_this.value)
    }else{
      let result = onRejected(_this.value)
      // console.log(result)
      // console.log(result instanceof Promise)
      if(result instanceof myPromise){
        result.then(res=>{
          resolve(res)
        })
      } else{
        resolve(result)
      }
      // onRejected(_this.value)
    }

  })
  // onResolved = typeof onResolved === 'function' ? onResolved : value => value
  // onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
  // const seft = this

  // return new Promise((resolve, reject) => {
  //   function handle (callback) {
  //     try {
  //       const result = callback(seft.state)
  //       if (result instanceof Promise) {
  //         result.then(
  //           (res) => {
  //             resolve(res)
  //           },
  //           err => {
  //             reject(err)
  //           }
  //         )
  //       } else {
  //         resolve(result)
  //       }
  //     } catch (err) {
  //       reject(err)
  //     }
  //   }
  //   // 当是Promise状态为pending时候，将onResolved和onRejeactd存到数组中callbackQueues
  //   if (seft.status === "PENDING") {
  //     seft.callbackQueues.push({
  //       onResolved (value) {
  //         handle(onResolved)
  //       },
  //       onRejected (reason) {
  //         handle(onRejected)
  //       }
  //     })
  //   } else if (seft.status === "FULFILLED") {
  //     setTimeout(() => {
  //       handle(onResolved)
  //     })
  //   } else {
  //     setTimeout(() => {
  //       handle(onRejected)
  //     })
  //   }
  // })
 
}

