<template>
  <div class="container">
    <pc-button elevation="5" class="btn" :decoration="config" @click="go"><h3>快速上手 →</h3></pc-button>
    <hr>
    <pc-card class="card c1">
      <h2>简明优先</h2>
      <p>用法简单,构建声明式UI框架</p>
    </pc-card>
    <pc-card class="card c2">
      <h2>Vue 驱动</h2>
      <p>享用 Vue + webpack 开发环境</p>
    </pc-card>
    <pc-card class="card">
      <h2>源码易读</h2>
      <p>源码简单通俗，容易理解看懂</p>
    </pc-card>
    <div class="footer">MIT Licensed | Copyright © 2018-present Mrlgm</div>
  </div>
</template>

<script>
import Card from "../../../src/card";
import Button from "../../../src/button";
export default {
  components: {
    "pc-card": Card,
    "pc-button": Button
  },
  mounted() {
    // console.log(this.$page.frontmatter);
  },
  data() {
    return {
      link: "/install/",
      config: {
        stroke: "#309286", //边框颜色
        fill: "rgba(197,236,190,0.8)", //填充的颜色
        fillStyle: "hachure", //填充的样式
        hachureAngle: 45,
        hachureGap: 18,
        fillWeight: 5
      }
    };
  },
  methods: {
    go({ link = "" }) {
      if (/^http/.test(this.link)) {
        window.open(this.link);
      } else {
        this.$router.push(this.link);
      }
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.btn {
  display: inline-block;
  margin: 25px 0;
  padding: 10px 35px;
  font-weight: bold;
  color: #4e6e8e;
  /* background: #f2ffff; */
}
.btn:hover {
  background: rgba(197,236,190,0.2);
}

.card {
  text-align: left;
  display: inline-block;
  padding: 13px;
  margin: 30px;
  color: rgba(72, 110, 142, 0.5);
  line-height: 1.7px;
}
.card h2,
.card p {
  color: #4e6e8e;
}
@media (max-width: 970px) {
  .card {
    display: block;
  }
}
.footer {
  margin-top: 1rem;
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}
</style>
