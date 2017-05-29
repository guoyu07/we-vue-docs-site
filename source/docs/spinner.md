title: Spinner
---
加载动画。

## 引入

```js
import { Spinner } from 'we-vue'
Vue.component(Spinner.name, Spinner)
```

## 例子

```html
<wv-group>
  <wv-cell title="default">
    <wv-spinner type="default" slot="ft"></wv-spinner>
  </wv-cell>
</wv-group>
```

## API

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| type  | String  |  显示类型   |      |   'default'    |
| color  | String  |  颜色   |      |   '#ccc'    |
| size  | Number  |  尺寸，单位为 px   |      |   20    |
