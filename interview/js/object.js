/**
* Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
 */
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

/**

* Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
 */

// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

/**

*Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
 */


/**
* Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

 */

// const object1 = {};

// Object.defineProperty(object1, 'property1', {
//   value: 42,
//   writable: false
// });

// object1.property1 = 77;
// // throws an error in strict mode

// console.log(object1.property1);
// // expected output: 42

/**
Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
 */



 


