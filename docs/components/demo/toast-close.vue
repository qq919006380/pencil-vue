<template>
  <Button @click="open">打开弹出</Button>
</template>

<script>
export default {
  methods: {
    open() {
      this.$toast("这是一个需要手动关闭的消息框！", {
        enableHtml: true,
        autoClose: false,
        showClose: true,
        onClose: () => {
          alert("消息框关闭了！");
        },
      });
    },
  },
};
</script>