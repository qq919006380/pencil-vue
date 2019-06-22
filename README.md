### [pencil-vue 官网](https://qq919006380.github.io/pencil-vue/)

# pencil-vue

- 这是一个手绘风格的 ui 框架。
- 本 UI 框架是基于 Vue 2 实现的。
- 使用了重构、设计模式、单向数据流等技术概念。
- 注意：本 UI 框架的代码尚未完全完工,请不要在生产环境中使用本 UI 框架,欢迎讨论交流，如果你觉得还不错，请 Star。

### 安装

`npm i pencil-vue -S`

### 使用

```javascript
import Vue from "vue";
import { button } from "pencil-vue";
import "pencil-vue/dist/index.css";

new Vue({
  el: "#app",
  components: {
    "pc-button": Button
  }
});
```

---

![demo](https://i.loli.net/2019/03/19/5c90dee1e0cb8.jpg)




