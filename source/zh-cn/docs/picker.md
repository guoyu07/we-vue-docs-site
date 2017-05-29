title: Picker
---
选择器。

## 引入

```js
import { Picker } from 'we-vue'
Vue.component(Picker.name, Picker)
```

## 例子

### 基本示例

```html
<template>
  <div class="page">
    <wv-group>
      <wv-cell title="单列选择器" :value="pickerValue1" is-link @click.native="pickerVisible1 = true"></wv-cell>
      <wv-cell title="多列选择器" :value="pickerValue1" is-link @click.native="pickerVisible2 = true"></wv-cell>
    </wv-group>

    <wv-picker v-model="pickerVisible1" :slots="slots1"></wv-picker>
    <wv-picker v-model="pickerVisible2" :slots="slots2"></wv-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pickerValue1: '',
        pickerValue2: '',
        pickerVisible1: false,
        pickerVisible2: false,
        slots1: [
          {
            values: [
              '汽车票',
              '飞机票',
              '火车票',
              '轮船票',
              '其它'
            ],
            defaultIndex: 2
          }
        ],
        slots2: [
          {
            values: [
              '汽车票',
              '飞机票',
              '火车票',
              '轮船票',
              '其它'
            ],
            defaultIndex: 2
          },
          {
            values: [
              '汽车票',
              '飞机票',
              '火车票',
              '轮船票',
              '其它'
            ],
            defaultIndex: 2
          }
        ]
      }
    },

    methods: {
    }
  }
</script>

<style scoped lang="scss">
</style>

```

## API

- picker

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| confirm-text  | String  |  默认按钮文字   |      |   '确定'    |
| cancel-text  | String  |  取消按钮文字   |      |   '取消'    |
| slots  | Array  |  待选数据   |      |       |
| value-kay  | String  |  当前选中项 key   |      |       |

- picker-slot

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| values  | Array  |  默认按钮文字   |      |   '确定'    |
| value  | Object  |  当前选中数据   |      |       |
| value-kay  | String  |  当前选中项 key   |      |       |
