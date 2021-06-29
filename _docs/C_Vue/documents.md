---
title: Vue2 迁移到 Vue3 都有哪些变化
category: Vue
order: 1
---

根据Vue 的一整套方案 我们来逐步分析下

> Vue   
  先简单聊一下比较重大且根本性的变化---但是对于开发影响不是很大的变化    
  一、proxy  
  二、typescript  替换 flow
  三、 diff 算法的改变

  对开发相对来说比较大的已有的


  影响大且之前没有的 ---- composition API
  描述在Mixin中的一段话
  在 Vue 2 中，mixin 是将部分组件逻辑抽象成可重用块的主要工具。但是，他们有几个问题：

  Mixin 很容易发生冲突：因为每个 mixin 的 property 都被合并到同一个组件中，所以为了避免 property 名冲突，你仍然需要了解其他每个特性。

  可重用性是有限的：我们不能向 mixin 传递任何参数来改变它的逻辑，这降低了它们在抽象逻辑方面的灵活性。

  为了解决这些问题，我们添加了一种通过逻辑关注点组织代码的新方法：组合式 API。
  
  [非兼容的变更](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E5%85%A8%E5%B1%80-api)

  > [Teleport](https://v3.cn.vuejs.org/guide/teleport.html#%E4%B8%8E-vue-components-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)
  

  事件机制 [原有事件机制改变](https://v3.cn.vuejs.org/guide/migration/events-api.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5) 
  在 Vue 3 中，已经不可能使用这些 API 从组件内部监听组件自己发出的事件了，该用例暂没有迁移的方法。
  > [生命周期变动](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertracked)


  但是该 eventHub 模式可以被替换为实现了事件触发器接口的外部库，例如 mitt 或 tiny-emitter。

  > 2.X 语法
    2.x 版本中在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。
  
  > 3.X 语法

    3.x 版本中 v-if 总是优先于 v-for 生效。


  > [监听数组的变化](https://v3.cn.vuejs.org/guide/migration/watch.html#%E6%A6%82%E8%A7%88)
    当使用 watch 选项侦听数组时，只有在数组被替换时才会触发回调。换句话说，在数组改变时 watch 回调将不再被触发。要想在数组改变时触发 watch 回调，必须指定 deep 选项。

  > [响应性基础 API](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)

  >[watchEffect](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect)



  
> Vuex   

> Vue-Router   




参考：
[Vue 迁移指南](https://v3.cn.vuejs.org/guide/migration/introduction.html)
[Vuex 迁移指南](https://next.vuex.vuejs.org/zh/guide/migrating-to-4-0-from-3-x.html)
[Vue-router](https://next.router.vuejs.org/zh/guide/migration/index.html)
[Vue Cli](https://cli.vuejs.org/zh/guide/)