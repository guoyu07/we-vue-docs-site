title: 文档
---

欢迎使用 we-vue！

> **部分组件详细文档洞在整理之中，将不断完善。**

## 安装

使用 npm 安装是最佳使用方式。

``` bash
$ npm install we-vue --save
```

## 关于事件绑定

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：

```html
<my-component @click.native="handleClick">Click Me</my-component>
```

从易用性的角度出发，我们对 Button 组件进行了处理，使它可以监听 click 事件：

```html
<wv-button @click="handleButtonClick">Click Me</wv-button>
```

对于其他组件，还是需要添加 .native 修饰符。

## 特别声明
we-vue 参考了饿了么前端团队 mint-ui 项目的大量代码，可以说 we-vue 在一定程度上可以算是换上了 weui 皮肤的 mint-ui，此前本人也就版权等问题联系相关作者，并得到回复“mint-ui 使用 MIT 开源协议，可自由使用，但请注明版权”。由于代码作了很多调整，未及一一详细注明，为此在这里特别声明。感谢饿了么团队的优秀成果，以及他们所提供了 cooking-cli 肢手架工具为项目开发带来的便利。