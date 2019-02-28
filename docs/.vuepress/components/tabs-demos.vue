<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <pc-tabs :selected="selected">
      <pc-tabs-head>
        <pc-tabs-item name="Vue">Vue</pc-tabs-item>
        <pc-tabs-item name="React">React</pc-tabs-item>
        <pc-tabs-item name="Angular">Angular</pc-tabs-item>
        <pc-tabs-item name="Knockout">Knockout</pc-tabs-item>
      </pc-tabs-head>
      <pc-tabs-body>
        <pc-tabs-pane name="Vue">Vue content 1</pc-tabs-pane>
        <pc-tabs-pane name="React">React content 2</pc-tabs-pane>
        <pc-tabs-pane name="Angular">Angular content 3</pc-tabs-pane>
        <pc-tabs-pane name="Knockout">Knockout content 4</pc-tabs-pane>
      </pc-tabs-body>
    </pc-tabs>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsBody from "../../../src/tabs-body";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    "pc-tabs": Tabs,
    "pc-tabs-body": TabsBody,
    "pc-tabs-head": TabsHead,
    "pc-tabs-item": TabsItem,
    "pc-tabs-pane": TabsPane
  },
  data() {
    return {
      selected: "React",
      content: `
        data(){
            return:{
                selected: "React"
            }
        }
        
        <pc-tabs :selected="selected">
            <pc-tabs-head>
                <pc-tabs-item name="Vue">Vue</pc-tabs-item>
                <pc-tabs-item name="React">React</pc-tabs-item>
                <pc-tabs-item name="Angular">Angular</pc-tabs-item>
                <pc-tabs-item name="Knockout">Knockout</pc-tabs-item>
            </pc-tabs-head>
            <pc-tabs-body>
                <pc-tabs-pane name="Vue">Vue content 1</pc-tabs-pane>
                <pc-tabs-pane name="React">React content 2</pc-tabs-pane>
                <pc-tabs-pane name="Angular">Angular content 3</pc-tabs-pane>
                <pc-tabs-pane name="Knockout">Knockout content 4</pc-tabs-pane>
            </pc-tabs-body>
        </pc-tabs>
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
