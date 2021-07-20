let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
/**
 * 已知最初父节点 
 * 转成tree 问题
 * 方法一：递归
 */
function getChidren (arr, result,pid){
  for(let i of arr){
    if(i.pid ===pid){
      let temp = {...i,child:[]}
      result.push(temp)
      getChidren(arr,temp.child,i.id)
    }
  }
  console.log(result)
}
// getChidren(arr,[],0)


/**
 * 方法2
 * 先转成 map （拿出所有的id）
 * 在通过查找pid  （将所有对应的id 装进子对象中）
 * 本质上是将所有的子集 装进入。在找出头
 * 主要思路也是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储。
 */
// function getChild (arr){
//   let result =[]
//   let treeMap ={}
//   for(let items of arr){
//     treeMap[items.id] = {...items,children:[]}
//   }
//   console.log(treeMap)
//   for (let j of arr){
//     let pid = j.pid
//     let tree = treeMap[j.id]
//     if(pid === 0 ){
//       result[pid] = tree
//     }else{
      
//       treeMap[pid].children.push(tree)
//     }

//   }
//   console.log(result)
//   return result
// }
// getChild(arr)

/**
 * 未知首个父节点
 */

//  let arr = [ 
//   { id: 1, name: '部门1', pid: 0 }, 
//   { id: 2, name: '部门2', pid: 1 }, 
//   { id: 3, name: '部门3', pid: 1 }, 
//   { id: 4, name: '部门4', pid: 3 }, 
//   { id: 5, name: '部门5', pid: 4 }, 
//   { id: 6, name: '部门6', pid: 1 }, 
//   { id: 7, name: '部门7', pid: 6 }, 
//   { id: 8, name: '部门8', pid: 9 }, 
//  ] 

// function totree(data) { 
//   data.forEach(item => { 
//     data.forEach(item1 => { 
//       if (item.id == item1.pid) { 
//         item1.status = true 
//         if (!item.children) { 
//           item.children = [] 
//         } 
//         item.children.push(item1) 
//       } 
//     }) 
//   }) 
//   return data.filter(item => !item.status) 
// }
// console.log(totree(arr))

function arrToTree (items){
  let result =[]
  let map = new Map()
  for (let item of items){
    let children = []
    if(item.pid === 0){
      result.push({...item,children})
    } else {
      let arr = map.get(item.pid)
      console.log('arr',arr)
      arr&& arr.push({...item,children})
    }
    map.set(item.id,children)
  }
  return result
}
console.log(arrToTree(arr))

function nest (pid,arr){
    return arr.filter(item => item.pid ===pid).map(item => ({...item,children:nest(item.id,arr)}))
}

// console.log(nest(0,arr))


// let listToTree = (list) =>{
//   const info = list.reduce(map,node) =>{
//     map[node.id] = node, node.children= [],map
//   }

// }

