title: Dialog
---
对话框。

## 引入

```js
import { Dialog } from 'we-vue'
Vue.component(Dialog.name, Dialog)
```

## 例子

### 基本示例

```html
Dialog({
  title: '对话框标题',
  message: 'hello world',
  skin: 'ios'
},
function () {
  console.log('hello')
})
```

## API

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| skin  | String  |  皮肤样式   | 'ios','android'   |   'ios'    |
| title  | String  |  标题   |      |       |
| message  | String  |  对话框消息   |      |       |
| confirm-text  | String  |  确认按钮文字   |      | '确定'    |
| cacel-text  | String  |  取消按钮文字   |      | '取消'    |
| show-confirm-btn | Boolean | 显示确认按钮 |      | true |
| show-cacel-btn | Boolean | 显示取消按钮 |      | true |
