function Promise(fn){
  let _this =this;
  //成功回调
  let value =null;
  let status ='pendding'
  let callBackArr =[]

  function resolve(value){
    if(this.status =='pending'){
      setTimeout(function(){
        _this.resolve.forEach(function(callback){
          callback(value)
        })
      },0)
    }
  }
  function reject(err){
    if(this.status =='pending'){
      setTimeout(function(){
        _this.callBackArr.forEach(function(callback){
          callback(value)
        })
      },0)
    }
  }
  this.then =function(){
    return new Promise(function(){

    })

  }
  fn(resolve)
}