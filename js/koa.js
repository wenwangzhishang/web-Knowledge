/**
 * 
 * @returns 方法一
 */

function createApp(){     
  return {    
    use(fn){ 
        if (!this.queue) {       
            this.queue = [];     
        }                       
        this.queue.push(fn);  
    },    
    run(){
      if (Array.isArray(this.queue)) {
          let i = 0; 
          const exec = () => {  
          i++;      
          if (i <= this.queue.length) { 
            this.queue[i - 1](exec);
            }  
          };     
          exec();  
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
     next()              
      })   
app.use((next)=>{   
    console.log(new Date() ,'3')  
     next()  
    })  
 app.run()
  