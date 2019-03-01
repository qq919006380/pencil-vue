<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-button>默认按钮</pc-button>&nbsp;
    <pc-button elevation="3">elevation</pc-button>&nbsp;&nbsp;
    <pc-button disabled>disabled</pc-button>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
hljs.highlightCode = function() {
  let blocks = document.querySelectorAll("pre code");
  [].forEach.call(blocks, hljs.highlightBlock);
};
export default {
  mounted() {
    hljs.highlightCode();
  },
  components: {
    "pc-button": Button
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
