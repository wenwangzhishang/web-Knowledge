/**
 * 
 * @returns 方法一
 */

function createApp(){     
  return {    
    use(fn){ 
      if(!this.quenu){
        this.quenu = []
      }
      this.quenu.push(fn)
    },    
    run(){
      if(Array.isArray(this.quenu)){
        let i =0
        
        let exec = () =>{
          i++
          if(i <=this.quenu.length){
            this.quenu[i-1](exec)
          }
          } 
          exec()
        }
     
    }  
  } 
} 
const app = createApp();


app.use((next)=>{ 
  setTimeout(function(){  
   next() 
  })   
  console.log(new Date() ,'1')     
})           
app.use((next)=>{  
  console.log(new Date() ,'2')  
  // next()              
})   
app.use((next)=>{   
  console.log(new Date() ,'3')  
  next()  
})  
 app.run()
  