---
title: Angular 框架讲解
category: Angular
order: 2
---

> Angular
    [架构概览](https://angular.cn/guide/architecture)  NgModule 为组件的上下文  
    组件元数据
    服务类的元数据(前后端交互数据)通过依赖注入的方式

> ng-router

> Angular 有很多种状态管理 ngrx 只是其中一种状态管理
> Angular有很多种脚手架工具，Angular Cli 只是其中一种。

> 生命周期

>rxjs 是Angular 的核心
    Observe 是rxjs 处理异步的。

[angular 配置不同的环境](https://angular.cn/cli/e2e),具体的配置主要体现在[angular.json](https://angular.cn/guide/workspace-config#alternate-build-configurations%E3%80%82),不同的环境主要配置在[env中]()

[Angular 如何解决代理跨域的问题](https://www.cnblogs.com/sghy/p/9111293.html)

[Angular 各种工具](https://angular.cn/resources?category=%E5%BC%80%E5%8F%91)

[Angular 依赖注入](https://angular.cn/guide/workspace-config#alternate-build-configurations%E3%80%82) 有两个层次

   1、 ModuleInjector 层次结构 —— 使用 @NgModule() 或 @Injectable() 注解在此层次结构中配置 ModuleInjector。

   2、 ElementInjector 层次结构 —— 在每个 DOM 元素上隐式创建。除非你在 @Directive() 或 @Component() 的 providers 属性中进行配置，否则默认情况下，ElementInjector 为空。

[参考手册](https://angular.cn/guide/architecture-modules)