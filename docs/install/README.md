# Hello World
::: warning 注意
请确保你的 Node.js 版本 >= 8。
:::
## 安装

```bash
npm install pencil-vue -S
```

## 引入全部组件

```javascript
import pencil from "pencil-vue";
import "pencil-vue/dist/index.css";
Vue.use(pencil);
```

## 按需引入部分组件

```javascript
import Vue from "vue";
import { Button } from "pencil-vue";
import "pencil-vue/dist/index.css";

new Vue({
  el: "#app",
  components: {
    "pc-button": Button
  }
});
```
