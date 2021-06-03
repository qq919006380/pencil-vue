<script setup>
  import sponsorship from './sponsorship.vue'
</script>

# Hello World

## 前言

- pencil-vue 的代码尚未完全完工，**请不要在生产环境中使用本 UI 框架，** 欢迎讨论交流。
- 在使用 pencil-vue 之前，我们已默认你用 Vue 做过项目并且掌握[Vue 组件](https://cn.vuejs.org/v2/guide/components.html)和[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)
- 如果你觉得不错<sponsorship>可以请我喝一杯咖啡</sponsorship>

## 安装

::: warning 注意

- 请确保你的 Node.js 版本 >= 12。
  :::

```bash
npm i pencil-vue
```

## 注册组件

```javascript{3,6}
import { createApp } from 'vue'
import App from './App.vue'
import pencil from "pencil-vue";

var app = createApp(App)
app.use(pencil);
app.mount('#app')
```

## 直接使用
```html
<Button>注册成功</Button>
```
<Button>注册成功</Button>
