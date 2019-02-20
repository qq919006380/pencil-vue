<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <wired-card>
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </wired-card>
    <wired-card elevation="5">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel! Deleniti hic ipsum enim quo praesentium? Ab minus odio id aut, mollitia distinctio sit iure quas illum nulla similique labore!</p>
    </wired-card>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>

    <hr>
    <h3>样式</h3>
    <wired-card class="card c1">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </wired-card>
    <wired-card class="card c2">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </wired-card>
    <wired-card class="card">
      <h4>lorem</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
    </wired-card>
    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script>
import Card from "../../../src/card";
export default {
  components: {
    "wired-card": Card
  },
  data() {
    return {
      content: `
        <wired-card>
            <h4>lorem</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </wired-card>
        <wired-card elevation=5>
            <h4>lorem</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vel! Deleniti hic ipsum enim quo praesentium? Ab minus odio id aut, mollitia distinctio sit iure quas illum nulla similique labore!</p>
        </wired-card>
    `
        .replace(/^ {8}/gm, "")
        .trim(),

      content2: `
        <wired-card class="card c1">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </wired-card>
        <wired-card class="card c2">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </wired-card>
        <wired-card class="card">
          <h4>lorem</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deleniti soluta, dolorem doloribus debitis beatae optio voluptatibus, perspiciatis voluptatem sit sed. Quam id natus repudiandae sit eaque ratione rem hic?</p>
        </wired-card>
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

<style>
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
