// // console.log('start 观察者模式')
// //主函数
// class main{
//   counter =0
//   observerList =[]
//   constructor(param){
//     console.log(this.counter)
//     let _this = this
//    setInterval(function(){
//      _this.counter ++ 
//     //  _this.notify(_this.counter)
//    },1000)
//   }
//   addObserver = function (obs){
//     // obs.apply()
//     console.log(obs)
//     this.observerList.push(obs)
//   }
//   notify(){
//     this.observerList.forEach(item =>{
//       // item.update(this.counter)
//     })
//   }
// }
// let exmain = new main()
// //观察者
// class observer{
//   constructor(){
//     console.log('我是观察者1')
//   }
//   update(info){
//     console.log(info)
//   }
// }
// let observer1 = new observer()
// exmain.addObserver(observer1)
// // console.log('end 观察者模式')



// 通用观察者模式
class Observer {
  constructor(){
    this.observerList = []
  }
  addSub(obs){
    this.observerList.push(obs)
  }
  removeSub(){
    this.observerList = []
  }
  notify(){
    this.observerList.forEach(item =>{
      item.update(this)
    })
  }
  update(ob){
    console.log(ob)
  }
}

class teacher extends Observer {
  constructor(name){
    super()
    this.name = name
  }
  update(param){
    
    console.log('teacher',param.name,this.name)
  }
}
let  teacher1 = new teacher('语文')

class student extends Observer{
  constructor(name){
    super()
    this.name = name
  }
  update(){

  }
  submitHome(){
    console.log(this)
    this.notify(this)
  }
}
let student1 = new student('张三')
let student2 = new student('李四')
student1.addSub(teacher1)
student2.addSub(teacher1)
student1.submitHome()
student2.submitHome()


