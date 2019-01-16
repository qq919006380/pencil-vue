<template>
  <div>
    <wired-button>默认按钮</wired-button>
    <wired-button elevation="5">elevation</wired-button>
    <wired-button disabled>disabled</wired-button>
      <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  data() {
    return {
      content: `
    <wired-button>默认按钮</wired-button>
    <wired-button elevation='5'>elevation</wired-button>
    <wired-button disabled>disabled</wired-button>
    ` .replace(/\t+| +/g, "").trim()
    };
  },
  components: {
    "wired-button": Button
  }
};
</script>

<style>
wired-button{
    color: pink
}
</style>
