<template  >
  <div v-if="flag" class="wrapper position-top">
    <div class="toast">盒子</div>
  </div>
  <Button @click="on">出来</Button>
</template>
<script>
import { nextTick, ref } from "vue";
export default {
  setup(props) {
    let flag = ref(false);
    function on() {
      flag.value = true;
    }
    return { on, flag };
  },
};
</script>
<style lang='less'>
@keyframes down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  border: solid 1px;
  .toast {
    animation: down 300ms;
  }
}
</style>
