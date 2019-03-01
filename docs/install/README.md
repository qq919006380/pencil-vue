# Hello World

## 安装

```bash
npm install pencil-vue
```

## 快速上手

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

## 完整组件列表和引入方式

注意：以下例子以局部组件的方式引入同样有效。

```javascript
import Vue from "vue";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Popover,
  Toast,
  Tabs,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Plugin
} from "pencil-vue";
import "pencil-vue/dist/index.css";
Vue.use(Plugin);
Vue.component("pc-button", Button);
Vue.component("pc-card", Card);
Vue.component("pc-checkbox", Checkbox);
Vue.component("pc-input", Input);
Vue.component("pc-popover", Popover);
Vue.component("pc-toast", Toast);
Vue.component("pc-tabs", Tabs);
Vue.component("pc-tabs-body", TabsBody);
Vue.component("pc-tabs-head", TabsHead);
Vue.component("pc-tabs-item", TabsItem);
Vue.component("pc-tabs-pane", TabsPane);
```
