
function debounce(fn,delay){
  let timer;
  return function (){
    
    let timer =setTimeout(function(){
      console.log(1)
      console.log(2)
      fn.apply(this)
    })

  }

}