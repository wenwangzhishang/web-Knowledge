class Pub{
  constructor(name,dispatch){
    this.name = name
    this.dispatch = dispatch
  }
  public(param){
    console.log('pub',param)
    dispatch.pub([this.name],param)
  }
}

class subscriber{
  constructor(dispatch){
    this.dispatch = dispatch
  }
  sub(param){
    this.dispatch.order(param,this)
  }
}

class Dispatcher{
  constructor(){
    this.subList = {}
  }
  //订阅
  order(param,subs){
    if(!this.subList[param]){
      this.subList[param] = []
    }
    this.subList[param].push(subs)
  }
  //退订
  remove(){

  }
  pub(type,param){
    console.log('dispatch',type)
    this.subList[type].forEach(item =>{
      item.doUpdate(param)
    })
  }
}

class wxPub extends Pub{
  constructor (name,dispatch){
    super(dispatch)
    this.name = name
  }
  // public(param){
  //   // super.public(param)
  // }
}
let dispatch = new Dispatcher()

let wx = new wxPub('php',dispatch)

//订阅者
class reader extends subscriber{
  constructor(name,dispatch){
    super(dispatch)
    this.name = name
    // this.doUpdate(name,dispatch)
  }
  doUpdate(param){
    console.log(`${this.name}阅读了${param}`)
  }
}

let reader1 = new reader('jack',dispatch)

reader1.sub('php')

wx.public('发布了一个新闻')