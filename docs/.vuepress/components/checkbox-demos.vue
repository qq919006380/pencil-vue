<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-checkbox>Checkbox label-1</pc-checkbox><br>
    <pc-checkbox checked>Checkbox label-2</pc-checkbox><br>
    <pc-checkbox disabled>Checkbox label-3</pc-checkbox><br>
    <pc-checkbox style="color:red">Checkbox label-4</pc-checkbox><br>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>
  </div>
</template>
<script>
import Checkbox from "../../../src/checkbox";
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
    "pc-checkbox": Checkbox
  },
  data() {
    return {
      content: `
        <pc-checkbox>Checkbox label-1</pc-checkbox>
        <pc-checkbox checked>Checkbox label-2</pc-checkbox>
        <pc-checkbox disabled>Checkbox label-3</pc-checkbox>
        <pc-checkbox style="color:red">Checkbox label-4</pc-checkbox>
    `
        .replace(/^ {8}/gm, "")
        .trim(),
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
