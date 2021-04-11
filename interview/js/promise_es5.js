(function(window){
  function Promise(executor){
    let _this = this;
    _this.value =null;
    _this.reason =null;
    _this.status= "PENDING"
    _this.callbackQueues =[]

    function resolve(value){
      if(this.state ==="PENDING"){
        this.state ="ONFILLEND"
        this.value = value
        _this.callbackQueues.map((item)=>{
          item.onResolved()
        })
       
      }
    }
    function reject(value){
      if(this.state ==="PENDING"){
          this.state ="ONREJECT"
          this.value = value
          _this.callbackQueues.map((item)=>{
            item.onRejected()

           })
      }
    }

    try{
      executor(resolve,reject)
    }
    catch(err){
      reject(err)
    }
    
  }
  Promise.prototype.then=function(onResolved,onRejected){
    onResolved = typeof onResolved ==='function' ? onResolved :value =>value
    onRejected = typeof onRejected ==='function' ? onRejected :value =>{
      throw value
    }
    let _this = this;
    return new Promise((resolve,reject)=>{
      function handle (callback){
        try{
          let result =callback(_this.value)
          if (result instanceof Promise) {
            result.then(
              (res) => {
                resolve(res)
              },
              err => {
                reject(err)
              }
            )
          } else {
            resolve(result)
          }
        }catch(err){
          reject(err)
        }

      }
      if(_this.status===PENDING){ // 当是Promise状态为pending时候，将onResolved和onRejeactd存到数组中callbackQueues
            _this.callbackQueues.push({
                onResolved(value){
                   handle(onResolved)
                },
                onRejected(reason) {
                    handle(onRejected)
                }
             })
         }else if(_this.status===FULFILLED){
            setTimeout(()=>{
                handle(onResolved)
            })
         }else {
            setTimeout(()=>{
                handle(onRejected)
            })
         }
    })
  }
})(window)