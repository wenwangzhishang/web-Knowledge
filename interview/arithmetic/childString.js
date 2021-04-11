function longChildString(s){
  let tempArr =s.split('');
  console.log(tempArr)
  let max =0;

  for(let i =0;i<tempArr.length;i++){
    for(let j =0;j<tempArr.length;j++){
      let  forTemp = tempArr.slice(i,j)
      if(forTemp.length >max){
        console.log('执行的',forTemp)
        if(unique(forTemp)){

          max = forTemp.length
          console.log('res',max)
        }
      }
      
    }
  }

  //判断是否唯一
  function unique(a){
    let temp = Array.from(new Set(a))
    console.log('union',temp)
    if(temp.length == a.length){
      return true
    }else {
      return false
    }

  }
  console.log(max)

}
longChildString('laijinxianzxcvbnm')