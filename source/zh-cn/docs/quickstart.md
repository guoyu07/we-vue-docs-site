title: 快速上手
---
本文将介绍如果在项目中使用 WeVue。

### 创建一个 vue.js 项目，我们使用 Vue 官方肢手架工具 vue-cli
```bash
npm install -g vue-cli
vue init webpack <your_projectname>
```

### 引入 WeVue

在入口文件 main.js 中编写如下内容：

```js
import Vue from 'vue'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import App from './App.vue'

Vue.use(WeVue)

new Vue({
  el: '#app',
  components: { App }
})
```
如此即完成了 WeVue 的引入，