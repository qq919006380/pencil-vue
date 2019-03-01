<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-button @click="$toast('点击弹出提示', { position: 'top' })">上方弹出</pc-button>
    <pc-button @click="$toast('点击弹出提示', { position: 'bottom' })">下方弹出</pc-button>
    <pc-button @click="$toast('点击弹出提示', { position: 'middle' })">中间弹出</pc-button>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>
    <h3>设置关闭按钮</h3>
    <h4>预览</h4>
    <pc-button @click="autoClose">设置关闭时间</pc-button>
    <pc-button @click="onClickButton">上方弹出</pc-button>
    <h4>代码</h4>
    <pre><code class="html">{{content2}}</code></pre>
  </div>
</template>

<script>
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);
import Button from "../../../src/button";
import Toast from "../../../src/toast";
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
        <style>
          .pencil-toast {
            z-index: 30;
          }
        </style>
        <pc-button @click="$toast('点击弹出提示', { position: 'top' })">上方弹出</pc-button>
        <pc-button @click="$toast('点击弹出提示', { position: 'bottom' })">下方弹出</pc-button>
        <pc-button @click="$toast('点击弹出提示', { position: 'middle' })">中间弹出</pc-button>
    `
        .replace(/^ {8}/gm, "")
        .trim(),
      content2: `
        <style>
          .pencil-toast {
            z-index: 30;
          }
        </style>

        <pc-button @click="autoClose">设置关闭时间</pc-button>
        <pc-button @click="onClickButton">上方弹出</pc-button>

        methods: {
          autoClose() {
            this.$toast('3秒后关闭', { autoClose: 3 });
          },
          onClickButton() {
            this.$toast("点击弹出提示", {
              closeButton: {
                text: "确定",
                callback: () => {
                  this.date = new Date();
                  console.log("To do something..."); //To do something...
                }
              }
            });
          }
        }
    `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    autoClose() {
      this.$toast('3秒后关闭', { autoClose: 3 });
    },
    onClickButton() {
      this.$toast("点击弹出提示", {
        closeButton: {
          text: "确定",
          callback: () => {
            this.date = new Date();
            console.log("To do something...");
            //To do something...
          }
        }
      });
    }
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
.pencil-toast {
  z-index: 30;
}
</style>
