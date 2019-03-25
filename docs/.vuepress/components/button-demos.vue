<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-button>默认按钮</pc-button>&nbsp;
    <pc-button elevation="3">elevation</pc-button>&nbsp;&nbsp;
    <pc-button disabled>disabled</pc-button>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>

    <h3>可配置</h3>
    <h4>预览</h4>
    <pc-button :decoration="config">默认按钮</pc-button>&nbsp;
    <pc-button :decoration="config" elevation="3">elevation</pc-button>&nbsp;&nbsp;
    <pc-button :decoration="config">disabled</pc-button>
    <h4>代码</h4>
    <pre><code class="html">{{cf_content}}</code></pre>
    <pre><code class="javascript">{{cf_content2}}</code></pre>
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
      config: {
        stroke: "#f17e7e", //边框颜色
        fill: "#7fe7cc", //填充颜色
        fillStyle: "hachure", //填充的样式
        hachureAngle: -45,
        hachureGap: 10,
        fillWeight: 1 //线的粗细
      },
      content: `
        <pc-button>默认按钮</pc-button>
        <pc-button elevation='3'>elevation</pc-button>
        <pc-button disabled>disabled</pc-button>
    `
        .replace(/^ {8}/gm, "")
        .trim(),
      cf_content: `
        <pc-button :decoration="config">默认按钮</pc-button>;
        <pc-button :decoration="config" elevation="3">elevation</pc-button>;
        <pc-button :decoration="config">disabled</pc-button>`
        .replace(/^ {8}/gm, "")
        .trim(),
      cf_content2: `
          data:{
            config: {
              stroke: "blue", //边框颜色
              fill: "blue", //填充内容
              fillStyle: "hachure", //填充的样式
              hachureAngle: -45, 
              hachureGap: 10,
              fillWeight: 1,//线的粗细
            }
          }
        `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style scoped>
.Preview {
  padding: 20px;
}
.code {
  font-weight: bold;
}
</style>
