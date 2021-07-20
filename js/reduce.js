/**
 * 数字千分化
 */

let numb= 1323456.13454
// console.log(numb.toLocaleString())


function splitArr(num){
  let arr=numb.toString().split('.')
  let arr1 = arr[0];
  let temp =[]
  arr1.split('').reduceRight((c,v,i)=>{
    // console.log(i)
    console.log(c)
    if(i%3 === 0 && i !=arr1.length-1){
      temp.push(',')
      temp.push(v)
    }else{
      temp.push(v)
    }
   
  },[])
  console.log(temp.reverse().join(''))
  if(arr.length>1){
    let arr2 = arr[1];
  }



  console.log(arr)
}
splitArr(numb)