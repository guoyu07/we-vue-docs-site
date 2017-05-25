title: Indicator
---
加载提示。

## 引入

```js
import { Indicator } from 'we-vue'
```

## 例子

### 显示提示层

```js
Indicator.open('Loading');
```

### 关闭提示层

```js
Indicator.close();
```

## API

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| text  | String  |  提示文字   |      |       |
| spinner  | String  |  spinner 类型   |      |   'default'    |
