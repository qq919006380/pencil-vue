<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-popover class="popover">
      <template slot="content">弹出的内容</template>
      <pc-button>click激活</pc-button>
    </pc-popover>
    <pc-popover position="bottom" class="popover">
      <template slot="content">弹出的内容</template>
      <pc-button>不同方位</pc-button>
    </pc-popover>
    <pc-popover trigger="hover" class="popover">
      <template slot="content">弹出的内容</template>
      <pc-button>hover激活</pc-button>
    </pc-popover>
    <pre><code class="html">{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Popover from "../../../src/popover";
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
    "pc-popover": Popover,
    "pc-button": Button
  },
  data() {
    return {
      content: `
        <pc-popover class="popover">
          <template slot="content">弹出的内容</template>
          <pc-button>click激活</pc-button>
        </pc-popover>
        <pc-popover position="bottom" class="popover">
          <template slot="content">弹出的内容</template>
          <pc-button>不同方位</pc-button>
        </pc-popover>
        <pc-popover trigger="hover" class="popover">
          <template slot="content">弹出的内容</template>
          <pc-button>hover激活</pc-button>
        </pc-popover>
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
