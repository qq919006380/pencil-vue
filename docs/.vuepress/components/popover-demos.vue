<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <wired-popover class="popover">
      <template slot="content">弹出的内容</template>
      <wired-button>click激活</wired-button>
    </wired-popover>
    <wired-popover position="bottom" class="popover">
      <template slot="content">弹出的内容</template>
      <wired-button>不同方位</wired-button>
    </wired-popover>
    <wired-popover trigger="hover" class="popover">
      <template slot="content">弹出的内容</template>
      <wired-button>hover激活</wired-button>
    </wired-popover>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Popover from "../../../src/popover";
export default {
  components: {
    "wired-popover": Popover,
    "wired-button": Button
  },
  data() {
    return {
      content: `
        <wired-popover class="popover">
          <template slot="content">弹出的内容</template>
          <wired-button>click激活</wired-button>
        </wired-popover>
        <wired-popover position="bottom" class="popover">
          <template slot="content">弹出的内容</template>
          <wired-button>不同方位</wired-button>
        </wired-popover>
        <wired-popover trigger="hover" class="popover">
          <template slot="content">弹出的内容</template>
          <wired-button>hover激活</wired-button>
        </wired-popover>
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
