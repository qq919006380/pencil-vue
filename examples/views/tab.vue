<template>
  <div class="box">
    <Tabs v-model="activeName">
      <Tab title="a">我是内容</Tab>
      <Tab title="b">ss</Tab>
      <Tab title="c">是一个大而全，生态周边很完善的框架"></Tab>
    </Tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
    };
  },
};
</script>
<style scoped>
.box {
  margin: 220px;
}
</style>