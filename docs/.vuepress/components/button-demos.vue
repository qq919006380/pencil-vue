<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <wired-button>默认按钮</wired-button>
    <wired-button elevation="3">elevation</wired-button>
    <wired-button disabled>disabled</wired-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "wired-button": Button,
  },
  data() {
    return {
      content: `
        <wired-button>默认按钮</wired-button>
        <wired-button elevation='3'>elevation</wired-button>
        <wired-button disabled>disabled</wired-button>
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
