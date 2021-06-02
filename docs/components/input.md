## 基础用法
请输入：<Input v-model="data"></Input>

``` html
请输入：<Input v-model="data"></Input>
```

## 支持双向绑定
text：<Input v-model="text"></Input>   
text：{{text}}

<script>
  export default {
  data() {
    return {
      text: "输入的值"
    }
  }
}
</script>


```html js
<Input v-model="text"></Input>
<script>
export default {
  data() {
    return {
      text: "输入的值"
    }
  }
}
</script>
```