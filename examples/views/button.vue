<template>
  <div>
    <Button>button</Button>
    <Button type="default">default</Button>
    <Button type="primary">primary</Button>
    <Button type="info">info</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="error">error</Button>
  </div>
  <div>
    <Button elevation="1">elevation1</Button>
    <Button elevation="2">elevation2</Button>
    <Button :elevation="3">elevation3</Button>
    <Button elevation="4">elevation4</Button>
    <Button elevation="5">elevation5</Button>
  </div>
  <br />
  <div>
    <Button disabled>disabled</Button>
  </div>
  <br />
  <div>
    <Button
      @click="$toast('点击弹出提示', { position: 'top', autoClose: false })"
      >toast，不关闭</Button
    >
  </div>
  <br />
  <div>
    <Button
      @click="$toast('点击弹出提示', { position: 'middle', autoClose: 20 })"
      >middle,20秒关闭</Button
    >
  </div>
  <br />
  <div>
    <Button @click="$toast('aa', { position: 'bottom',showClose: true })">bottom</Button>
  </div>
  <br />
  <div>
    <Button @click="on">关闭事件</Button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    on() {
      this.$toast(
        "<h1 class='x'>我是带事件的,带html</h1> <div>s</div> <div style='color:pink'>s</div>",
        {
          showClose: true,
          enableHtml: true,
          onClose: this.closeEvent,
        }
      );
    },
    closeEvent() {
      console.log("关闭了");
    },
  },
};
</script>
<style scoped lang='less'>
.x {
  color: aqua;
}
</style>

