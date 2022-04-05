---
title: React 杂谈
category: React
order: 5
---

 
>React 项目自己配置webpack 
  [实现方案 整体思路讲解](https://www.jianshu.com/p/e396de262315)
  [项目实践](https://blog.csdn.net/yhn1121/article/details/97666490)
  1、需要设置babelrc
  2、配置对应的webpack.config.js 文件

> [从0-1 不用脚手架搭建 React + webpack](https://www.cnblogs.com/diligentYe/p/6548396.html)
  　　react是目前非常热门的前端框架，提倡组件化开发。所谓的组件，简单理解，就是一个独立的页面部件（包括页面模版，样式，逻辑等），它是一个独立的整体。

　　webpack，是一个模块打包工具，其主要功能，就是将浏览器端无法识别的代码，通过各种loader和plugin，生成浏览器可用的代码。比如，我们可以在浏览器端使用ES2015和JSX编码的文件。

　　在使用react进行组件化开发之前，我们首先需要配置一个我们可以使用的开发环境，下面，我们将一步步讲解，配置一个基本的开发环境。其中安装的文件都是当前最新版本。在开始之前，请先保证你已经安装了node。

1. 创建测试项目
　　为了可以让我们每一步都可以进行测试，了解其中都做了什么，我们提前编写我们的测试项目。大家可以先不用深入理解。（在我们以后的项目中，我们可能会用JSX文件和sass文件，在这里我们尽量真实且简单的还原项目）。

　　1）首先我们创建一个项目文件夹，名为test

　　2）在文件中添加index.jsx，hello.jsx, index.scss,  index.html

复制代码
`
  // index.scss

  $color: #f40;

  h1 {
      color: $color;
  }
`
`
  // hello.jsx
  module.exports = 'Hello React';
`

`
// index.jsx
// 引入react和react-dom模块
// 使用ES2015模块导入语法
import React from 'react';
import ReactDOM from 'react-dom';

// 引入自定义的hello.jsx
var text = require('./hello.jsx');

// 引入我们编写的sass文件
require('./index.scss');

// 编写一个简单的组件
class App extends React.Component {
    render(){
        return (
            <h1>{text}</h1>
        );
    }
};

// 创建一个组件实例，将组件挂载到文档结构中
ReactDOM.render(<App />, document.body);
`
`
// index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My test</title>
  </head>
  <body>
      <script type="text/javascript" src="bundle.js"></script> // bundle.js是由webpack自动生成的文件，文件名通过配置webpack设置
  </body>
</html>
`
　　以上是我们项目的基本结构。

　　为了方便项目文件的管理，我们使用npm，在项目根目录下使用npm init --yes，在根目录下生成一个package.json，管理项目依赖等。

2. 安装webpack
　　1）以命令行工具的形式使用webpack时，在全局安装webpack。

　　npm install webpack -g
　　2) 编写自己的构建脚本，或由项目指定需要依赖的webpack，本地安装，webpack只是构建工具的角色，应该安装在dev－dependencies中，但是，目前我们只使用命令行工具，这种安装方式，只是作为介绍，在之后的搭建过程中并不会用到。

　　npm install webpack --save-dev
 3. 配置基本的webpack
　　在项目根目录下添加webpack.config.js配置文件，它是一个Node.js模块格式的配置文件，直接导出一个配置对象。

`
  // 用于拼接路径
var path = require('path');

module.exports = {
    // 指定项目入口
    entry: path.resolve(__dirname, 'index.jsx'),

    // 对输出结果描述
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'build'),
        // 输出的文件名
        filename: 'bundle.js'
    },

    // 配置模块使用的加载器
    module: {
        loaders: [
        {
            // 假设我们拥有一个编译sass加载器
            // 匹配字符串
            test:/\.scss$/,
            // 使用的加载器，不可以省略加载器的后缀-loader
            loaders:['style-loader', 'css-loader', 'sass-loader']
        }
    }
}
`
4. babel，sass加载器
　　可以从我们的项目结构中发现，我们使用了.jsx文件和.scss文件，浏览器中无法正常使用这类文件，我们通过添加加载器，将进行解析，以便浏览器使用。

　　1）babel加载器

　　npm install babel-core babel-loader --save-dev
　　2）配置.babelrc文件

　　　　在项目根目录下创建一个.babelrc文件，存放一个对象，分别用presets字段存放规则，plugins字段存放插件，目前我们只用到ES2015和react规则

　　npm install babel-preset-es2015 babel-preset-react --save-dev // 添加规则
　　{
  　　"presets": ["react", "es2015"]
　　}
　　3) sass加载器

　　npm install node-sass style-loader css-loader sass-loader --save-dev
　　4) 配置webpack.config.js配置文件

`
// 模块部分更新为下面代码

    module: {
        loaders: [
        {
            test:/\.scss$/,
            loaders:['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test:/\.jsx?$/,
            loaders: ['babel-loader']
        }]
    },

`
　　此时即可正常加载.scss和.jsx文件。

5. 安装react和react-dom
 npm install react react-dom --save
 

　　到此，我们在项目根目录下执行webpack已经已经在根目录下生成一个bundle.js文件，我们可以正常在index.html文件文件引用，并且在浏览器中查看。





 

之后的内容，我们将会介绍webpack的插件的用法，以及webpack-dev-server配置方法。

1. html-webpack-plugin
　　我们可以发现我们index.html文件中，只是一个空的HTML结构和引入了生成的bundle.js文件，因此我们可以利用html-webpack-plugin插件来自动生成index.js文件。

　　1) 下载插件

　　npm install html-webpack-plugin --save-dev
　　2）配置webpack.config.js文件

　　首先在文件头部引入插件，然后在添加一个plugins字段，并在其中一个插件对象实例。

`
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
   plugins: [
        new HtmlWebpackPlugin({
            title: 'My test'
        })
    ]
}
`
　　此时我们删除index.html和bundle.js，webpack自动在build路径下创建这两个文件。

2. webpack-dev-server
　　我们可以使用webpack --wacth来监控代码，只要代码一修改，自动更新bundle.js，但是浏览器的网页还需要手动刷新。在开发工程中，非常的不方便。webpack-dev-server为我们解决了这个问题，它是一个小型服务器，在开发过程中可以实时刷新网页。

　　下面我们来安装配置webpack-dev-server。

　　1）全局安装webpack-dev-server

　　npm install webpack-dev-server -g
　　2）配置webpack-dev-server

`
// 添加devServer字段,其中字段变动比较大，配置时需要根据文档进行配置
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase:'./build/',
        port:'8086'   // 我电脑上默认的8080端口无法访问，所以设置port为8086
    },
`
　　3）设置运行快捷方式

　　在package.json中的scripts字段中添加下面一行，在命令行中输入npm run dev，直接启动webpack-dev-server，可以在指定端口进行访问。

1   "scripts": {
2     "dev": "webpack-dev-server"
3   },
3. 组件热加载（HMR）
　　我们在上述描述下，搭建的环境，每修改一次代码，页面都会整体刷新一次，我们更希望，页面局部刷新修改的组件。因此就有了组件热加载这个概念。我们可以直接安装babel-preset-react-hmre实现HMR。

　　npm install babel-preset-react-hmre --save-dev
.babelrc中的配置改为：

`
  {
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
`
并将启动命令改为：

"scripts": {
    "dev": "webpack-dev-server --hot"
  },
此时我们在命令行输入npm run dev，即可。

