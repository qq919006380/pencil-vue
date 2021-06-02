<template>
  <div class="pencil_tab_content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tab",
};
</script>
<style lang="less" scoped>
.pencil_tab_content {
  padding: 20px;
}
</style>
