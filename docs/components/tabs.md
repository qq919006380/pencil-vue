## 基础用法
<Tabs v-model="activeName">
  <Tab title="推荐">推荐内容</Tab>
  <Tab title="关注">关注内容</Tab>
  <Tab title="热榜">热榜内容</Tab>
</Tabs>

<script>
  export default {
  data() {
    return {
      activeName: "推荐"
    }
  }
}
</script>

```html js
<Tabs v-model="activeName">
  <Tab title="推荐">推荐内容</Tab>
  <Tab title="关注">关注内容</Tab>
  <Tab title="热榜">热榜内容></Tab>
</Tabs>

<script>
  export default {
  data() {
    return {
      activeName: "推荐"
    }
  }
}
</script>
```

