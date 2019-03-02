<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-card>
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </pc-card>
    <pc-card elevation="5">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel! Deleniti hic ipsum enim quo praesentium? Ab minus odio id aut, mollitia distinctio sit iure quas illum nulla similique labore!</p>
    </pc-card>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>

    <hr>
    <h3>样式</h3>
    <pc-card class="card c1">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </pc-card>
    <pc-card class="card c2">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </pc-card>
    <pc-card class="card">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </pc-card>
    <h4>代码</h4>
    <pre><code class="html">{{content2}}</code></pre>
  </div>
</template>

<script>
import Card from "../../../src/card";
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
    "pc-card": Card
  },
  data() {
    return {
      content: `
        <pc-card>
            <h4>lorem</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </pc-card>
        <pc-card elevation=5>
            <h4>lorem</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel! Deleniti hic ipsum enim quo praesentium? Ab minus odio id aut, mollitia distinctio sit iure quas illum nulla similique labore!</p>
        </pc-card>
    `
        .replace(/^ {8}/gm, "")
        .trim(),

      content2: `
        <pc-card class="card c1">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </pc-card>
        <pc-card class="card c2">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </pc-card>
        <pc-card class="card">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </pc-card>
        <style>
            .card {
                display: inline-block;
                width: 29%;
                margin: 0 2px;
            }
            .c1 {
                background: pink;
            }
            .c2 {
                background: bisque;
            }
        </style>

    
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

/* card */
.card {
  display: inline-block;
  width: 29%;
  margin: 0 2px;
}
.c1 {
  background: pink;
}
.c2 {
  background: bisque;
}
</style>
