// let arr=[1,1,2,1,3,4,5,4]

// let a =function(arr){
//   let obj={}
//   for(let key of arr){
//     obj[key]= 0;
//   }
//   console.log(obj)
//   let temp =[]
//   for(let j in obj){
//     temp.push(j)
//   }
//  console.log(Object.keys(obj))
//   // console.log(temp)
//   let temp

// }
// a(arr)


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// // expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // expected output: Array [1, "b"]
// console.log(iterator1.next().value);

/**
*every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
 */
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// expected output: true

/**
*filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
 */

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
/**
*find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 */
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// expected output: 12

/**
*flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
 */

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

/**
*forEach() 方法对数组的每个元素执行一次给定的函数。
 */


 /**
 Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

 */

 console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

/**
*indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 */

 /**
 Array.isArray() 用于确定传递的值是否是一个 Array。
  */

  /**
  join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
   */

/**
*  keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
 */

 /**
 *lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
  */

/**

*map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
 */


/**
*Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

 Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。
 */

/**
* pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
 */
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

/**
* reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 */

 /**
 *reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
  */

  /**
  *
  reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
   */

   /**
   shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
    */

    /**
    slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
     */


/**
some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
 */

/**
* sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
 */

/**

splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
 */

/**
*toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
 */

/**
toString() 返回一个字符串，表示指定的数组及其元素。
 */

/**
*unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
 */

/**
values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
 */