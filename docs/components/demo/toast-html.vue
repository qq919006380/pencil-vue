<template>
  <Button @click="openHTML">使用HTML片段</Button>
</template>

<script>
export default {
  methods: {
    openHTML() {
      this.$toast("<strong>这是 <i>HTML</i> 片段</strong>", {
        enableHtml: true,
      });
    },
  },
};
</script>