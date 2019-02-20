<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-button>默认按钮</pc-button>
    <pc-button elevation="3">elevation</pc-button>
    <pc-button disabled>disabled</pc-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "pc-button": Button,
  },
  data() {
    return {
      content: `
        <pc-button>默认按钮</pc-button>
        <pc-button elevation='3'>elevation</pc-button>
        <pc-button disabled>disabled</pc-button>
    `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style>
.Preview {
  padding: 20px;
}
.code {
  font-weight: bold;
}
</style>
