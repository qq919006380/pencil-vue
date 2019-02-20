<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-checkbox id="cbox">Checkbox label-1</pc-checkbox>
    <pc-checkbox id="cbox" checked>Checkbox label-2</pc-checkbox>
    <pc-checkbox id="cbox" disabled>Checkbox label-3</pc-checkbox>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Checkbox from "../../../src/checkbox";
export default {
  components: {
    "pc-checkbox": Checkbox
  },
  data() {
    return {
      checked1: true,
      checked2: true,
      content: `
    <pc-checkbox id="cbox">Checkbox label-1</pc-checkbox>
    <pc-checkbox id="cbox" checked>Checkbox label-2</pc-checkbox>
    <pc-checkbox id="cbox" disabled>Checkbox label-3</pc-checkbox>
    `
        .replace(/\t+| +/g, "")
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
