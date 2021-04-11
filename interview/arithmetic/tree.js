class Node { // 定义节点
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
// 层序遍历结果的数组，生成层序遍历树
// 输入例 ['a','b','d',null,null,'e',null,null,'c',null,null] # 是 null
let arr =['a','b','d',null,null,'e',null,null,'c',null,null]
CreateTree(arr)
//    a
//  /   \
// b     d
// / \  / \
// #  # e  #
//     / \
//    #   c
//       / \
//      #   #
function CreateTree(arr) {
  let i = 0
  const head = new Node(arr[i++])
  let queue = [head]
  let next
  while (queue.length) {
    let node = queue.shift()
    next = arr[i++]
    if (!(next == null)) queue.push((node.left = new Node(next)))
    next = arr[i++]
    if (!(next == null)) queue.push((node.right = new Node(next)))
  }
  console.log(head)
  return head
}
// 或者用 for of 可以模拟队列
// function CreateTree(arr) {
//   let i = 0
//   const head = new Node(arr[i++])
//   let queue = [head]
//   let next
//   for (let node of queue) {
//     next = arr[i++]
//     if (!(next == null)) queue.push((node.left = new Node(next)))
//     next = arr[i++]
//     if (!(next == null)) queue.push((node.right = new Node(next)))
//   }
//   return head
// }
