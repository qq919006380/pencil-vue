<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <wired-input value="data"></wired-input>
    <wired-input type="password"></wired-input>
    <wired-input placeholder="Enter name"></wired-input>
    <wired-input placeholder="Disabled" disabled></wired-input>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <hr>
    <h4>双向绑定</h4>
    <wired-input v-model="value"></wired-input><span>{{'数据：'+value}}</span>
    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>
    
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  components: {
    "wired-input": Input
  },
  data() {
    return {
      value: "1",
      content: `
    <wired-input value="sad"></wired-input>
    <wired-input type="password"></wired-input>
    <wired-input placeholder="Enter name"></wired-input>
    <wired-input placeholder="Disabled" disabled></wired-input>
    `
        .replace(/\t+| +/g, "")
        .trim(),
        content2:`
        data:{
          value: '1'
        }

        <wired-input v-model="value"></wired-input><span>{{'数据：'+value}}</span>
        `.replace(/\t+| +/g, "")
        .trim(),
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
