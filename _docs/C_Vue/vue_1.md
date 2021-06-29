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

  [新特性](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7)

  这里主要强调一下， 单文件组合式API 语法糖，这个特性目前在实验阶段，但是用起来确实很舒适。

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
  [setup 生命周期对照](https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html)   
  [首先需要了解的是响应式API对应的生命周期钩子](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E5%9C%A8-setup-%E5%86%85%E6%B3%A8%E5%86%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)   

  setup 的生命周期跟 Vue 的生命周期 会有差异。如 
    1.setup 的钩子函数 写几次就执行几次。
    2、Vue 的钩子函数是无论写几次。只执行最后一次。

      mounted(){
        console.log('mo')
      },
      mounted(){
        console.log('mo1')
      },
      updated(){
        console.log('up')
      },
      updated(){
        console.log('up2')
      }    

      打印结果
      unmounted!
      HelloWorld.vue:27 mounted!
      HelloWorld.vue:30 mounted2!
      HelloWorld.vue:65 mo1   

  > [！！！创建自定义组件实例的时候，propsData 改变](https://v3.cn.vuejs.org/guide/migration/props-data.html#%E6%A6%82%E8%BF%B0)  

  > [！！！自定义组件时，插槽统一了](https://v3.cn.vuejs.org/guide/migration/slots-unification.html#%E6%A6%82%E8%A7%88)
    





  >[watchEffect](https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect)

  >[函数式组件](https://v3.cn.vuejs.org/guide/migration/functional-components.html#%E6%A6%82%E8%A7%88)



  
> Vuex   

> Vue-Router   




参考：
[Vue 迁移指南](https://v3.cn.vuejs.org/guide/migration/introduction.html)
[Vuex 迁移指南](https://next.vuex.vuejs.org/zh/guide/migrating-to-4-0-from-3-x.html)
[Vue-router](https://next.router.vuejs.org/zh/guide/migration/index.html)
[Vue Cli](https://cli.vuejs.org/zh/guide/)