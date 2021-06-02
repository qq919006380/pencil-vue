## 基础用法
<Card header="卡片名称">
<div v-for="item in 3">列表内容{{ item }}</div>
</Card>

```html
<Card header="卡片名称">
<div v-for="item in 3">列表内容{{ item }}</div>
</Card>
```

## 配置模板标题
<cardDemo></cardDemo>

<script setup>
  import cardDemo from './demo/card-demo.vue'
</script>

<<< @/components/demo/card-demo.vue
