console.log('start 观察者模式')

//主函数
class main{
  counter =0
  observerList =[]
  constructor(param){
    console.log(this.counter)
    let _this = this
   setInterval(function(){
     _this.counter ++ 
    //  _this.notify(_this.counter)
   },1000)

    
  }
  addObserver = function (obs){
    // obs.apply()
    console.log(obs)
    this.observerList.push(obs)

  }
  notify(param){
    this.observerList.forEach(item =>{
      // console.log(item)
      item.update(this.counter)
    })
    // console.log('curr',param)
  }

}

console.log(main.notify)

let exmain = new main()
//观察者
class observer{
  constructor(){
    console.log('我是观察者1')
  }
  update(info){
    console.log(info)
  }
}

let observer1 = new observer()
exmain.addObserver(observer1)



// setInterval(function(exmain){
  
  // exmain(counter++)
// },3000)