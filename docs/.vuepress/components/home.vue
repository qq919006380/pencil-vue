<template>
  <div class="container">
    <pc-button elevation="4" class="btn" @click="go">起步 →</pc-button>
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
    console.log(this.$page.frontmatter);
  },
  data() {
    return {
      link: "/install/"
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
  padding: 10px 50px;
  /* background: rgb(230, 254, 243) */
}
.footer {
  margin-top: 1rem;
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}

/* card */
.card {
  text-align: left;
  display: inline-block;
  /* width: calc(29% -1px); */
  padding: 13px;
  margin: 30px;
  color: #4e6e8e;
  line-height: 1.7px
}
.c1 {
  /* background: rgb(230, 254, 243); */
}
.c2 {
  /* background: rgb(230, 254, 243); */
}
</style>
