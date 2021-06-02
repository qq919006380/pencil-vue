<template>
  <div
    v-show="visible"
    class="pencil_host pencil_Toast"
    :class="'pencil_' + position"
  >
    <div ref="host" class="pencil_content pencil_flex">
      <div v-if="!enableHtml">{{ message }}</div>
      <div v-else v-html="message"></div>
      <div v-if="showClose" class="pencil_close" @click.stop="close">关闭</div>
    </div>
  </div>
</template>
<script>
import { render } from "../../_util/util.js";
import { ref, onMounted, defineComponent, watchEffect } from "vue";
import "../../_style/index.less";
export default {
  props: {
    id: String,
    message: {
      type: [String, Object],
      default: "",
    },
    autoClose: {
      type: [Boolean, Number],
      default: 2.5,
      validator(value) {
        return value === false || typeof value === "number";
      },
    },
    onClose: {
      type: Function,
    },
    showClose: { type: Boolean, default: false },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value >= 0);
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
  },
  name: "Toast",
  setup(props) {
    const host = ref(null);
    let visible = ref(true);
    let hostMap = null;
    onMounted(() => {
      startTimer();
      hostMap = new render(host.value);
      hostMap.on("watchHost", (rough) => {
        props.showClose && line(rough);
      });
    });
    function line(rough) {
      const rc = rough.svg(hostMap.svg);
      let host = hostMap.host.getBoundingClientRect();
      let l = hostMap.$(".pencil_close").getBoundingClientRect();

      var line = rc.line(
        l.left - host.left - 5,
        10,
        l.left - host.left - 5,
        host.height - 10,
        {
          stroke: "#999",
          bowing: 1,
        }
      );
      hostMap.svg.appendChild(line);
    }
    watchEffect(() => {
      if (typeof props.onClose == "function" && visible.value == false) {
        props.onClose();
      }
    });
    var timer = null;
    function close() {
      visible.value = false;
      clearTimeout(timer);
      document.body.removeChild(document.getElementById(props.id));
    }
    function startTimer() {
      if (props.autoClose) {
        timer = setTimeout(() => {
          close();
        }, props.autoClose * 1000);
      }
    }
    return { host, visible, close };
  },
};
</script>
<style lang="less">
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.pencil_Toast {
  z-index: 20;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  .pencil_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    .pencil_close {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  &.pencil_top {
    top: 0;
    .pencil_content {
      animation: slide-down 300ms;
    }
  }
  &.pencil_bottom {
    bottom: 0;
    .pencil_content {
      animation: slide-up 300ms;
    }
  }
  &.pencil_middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .pencil_content {
      animation: fade-in 300ms;
    }
  }
}
</style>
