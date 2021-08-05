---
title: 浅析angular
category: Angular
order: 1
---



> Angular

[angular 的service ](https://angular.cn/tutorial/toh-pt4)
组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。

注意，这个新的服务导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器。 它把这个类标记为依赖注入系统的参与者之一。HeroService 类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖。 目前它还没有依赖，但是很快就会有了。

[Angular 如何 请求数据的](https://angular.cn/tutorial/toh-pt6)

[路由器教程：英雄之旅](https://angular.cn/guide/router-tutorial-toh#router-tutorial-tour-of-heroes)
[路由器参考手册](https://angular.cn/guide/router-reference)
[路由功能](https://angular.cn/tutorial/toh-pt5) forRoot 的一些详解

[路由守卫](https://angular.cn/guide/router)
[路由守卫及子路由的介绍](https://angular.cn/guide/router-tutorial-toh#milestone-5-route-guards)

[canActivate](https://angular.cn/api/router/CanActivate#description) 类可以实现的接口

