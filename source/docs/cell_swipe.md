title: CellSwipe
---
左滑唤出按钮的列表项。

## 引入

```js
import { CellSwipe } from 'we-vue'
import { CellSwipeButton } from 'we-vue'
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(CellSwipeButton.name, CellSwipeButton)
```
> **cell-swipe 只能在 group 中使用。cell-swipe-button 仅与 cell-swipe 结合使用**

## 例子

```html
<wv-group title="向左滑动呼出按钮">
  <wv-cell-swipe title="标题文字" :value="true">
    <wv-cell-swipe-button type="warn" slot="right" @click="deleteClicked">删除</wv-cell-swipe-button>
    <wv-cell-swipe-button type="default" slot="right" @click="readClicked">查看</wv-cell-swipe-button>
  </wv-cell-swipe>
</wv-group>

<script>
  export default {
    data () {
      return {}
    },

    methods: {
      deleteClicked () {
        console.log('delete')
      },

      readClicked () {
        console.log('read')
      }
    }
  }
</script>
```


## API

- cell-swipe

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| title  | String  |  标题，即左侧label   |      |       |
| value  | String  |  内容，即左侧文字   |      |       |
| to  | String  |  跳转目标，与 is-link 配合使用   |      |       |
| is-link | Boolean | 是否为链接 |      | false |

- cell-swipe-button

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| type  | String  |  按钮类型   |      |   'default'    |


## Slots

- cell-swipe

|   name   |   描述    |
| :----: | :-----: |
| right  | 右侧位  |

- cell-swipe-button

|   name   |   描述    |
| :----: | :-----: |
| -  | 按钮文字位  |