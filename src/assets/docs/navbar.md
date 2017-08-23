Navbar
---
顶部选项卡。

## 引入

```js
import { Navbar, NavbarItem } from 'we-vue'
Vue.component(Navbar.name, Navbar)
Vue.component(NavbarItem.name, NavbarItem)
```

## 例子

```html
<template>
  <wv-navbar v-model="selected" @change="changed" fixed>
    <wv-navbar-item id="item1">选项1</wv-navbar-item>
    <wv-navbar-item id="item2">选项2</wv-navbar-item>
    <wv-navbar-item id="item3">选项3</wv-navbar-item>
  </wv-navbar>
</template>

<script>
export default {
  data () {
    return {
      selected: 'item1'
    }
  },

  methods: {
    changed (e) {
      console.log(e)
    }
  }
}
</script>
```

## API

- navbar

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| fixed  | Boolean  |  是否固定   |      |   false    |
| color  | String  |  选项卡字色   |      |   '#333'    |
| background-color  | String  |  选项卡背景色   |      |   '#fff'    |
| active-color  | String  |  激活的选项卡项字色   |      |   '#2196f3'    |
| disabled-color  | String  |  禁用的选项卡项字色   |      |   '#cfcfcf'    |
| line-width  | Number  |  询问衬级宽度   |      |   3    |

- navbar-item

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| id  | String  |  选项卡项 ID   |      |       |
| disabled  | Boolean  |  是否禁用   |      |   false    |

## Slots

- navbar

|   name   |   描述    |
| :----: | :-----: |
| -  | 一个或多个 navbar-item 组件  |

- navbar-item

|   name   |   描述    |
| :----: | :-----: |
| -  | 选项卡项内容  |
