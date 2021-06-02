<template>
  <div>
    <div class="xxx">
      <Popover position="top">
        <template #content>弹出的内容</template>
        <button>top</button>
      </Popover>
    </div>

    <div class="xxx">
      <Popover position="bottom">
        <template #content>弹出的内容</template>
        <Button>bottom</Button>
      </Popover>
    </div>

    <div class="xxx">
      <Popover position="left">
        <template #content>弹出的内容</template>
        <Button>left</Button>
      </Popover>
    </div>

    <div class="xxx">
      <Popover position="right" trigger="hover">
        <template #content>弹出的内容</template>
        <Button>right</Button>
      </Popover>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.xxx {
  margin: 30px;
}
</style>