<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-input value="data"></pc-input>
    <pc-input type="password"></pc-input>
    <pc-input placeholder="Enter name"></pc-input>
    <pc-input placeholder="Disabled" disabled></pc-input>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>
    
    <hr>
    <h4>双向绑定</h4>
    <pc-input v-model="value"></pc-input><span>{{'数据：'+value}}</span>
    <h4>代码</h4>
    <pre><code class="html">{{content2}}</code></pre>
    
  </div>
</template>

<script>
import Input from "../../../src/input";
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
    "pc-input": Input
  },
  data() {
    return {
      value: "1",
      content: `
        <pc-input value="data"></pc-input>
        <pc-input type="password"></pc-input>
        <pc-input placeholder="Enter name"></pc-input>
        <pc-input placeholder="Disabled" disabled></pc-input>
    `
        .replace(/^ {8}/gm, "")
        .trim(),
        content2:`
        data:{
          value: '1'
        }

        <pc-input v-model="value"></pc-input><span>{{'数据：'+value}}</span>
        `.replace(/^ {8}/gm, "")
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
