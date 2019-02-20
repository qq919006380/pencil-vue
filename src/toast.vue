<template>
  <div class="wrapper pencil-toast" :class="toastClasses">
    <div class="toast host" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";

export default {
  name: "pencil-toast",
  props: {
    elevation: {
      type: String,
      default: "1"
    },
    autoClose: {
      type: [Boolean, Number],
      default: 2,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },

    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value >= 0);
      }
    }
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    updated() {
      const svg = this.$el.querySelector("#svg");
      // this._clearNode(svg);
      var s = this.$el.getBoundingClientRect();
      var elev = Math.min(Math.max(1, this.elevation), 5);
      var w = s.width + (elev - 1) * 2;
      var h = s.height + (elev - 1) * 2;
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      wired.rectangle(svg, 0, 0, s.width, s.height);
      for (var i = 1; i < elev; i++) {
        wired.line(
          svg,
          i * 2,
          s.height + i * 2,
          s.width + i * 2,
          s.height + i * 2
        ).style.opacity = (85 - i * 10) / 100;
        wired.line(
          svg,
          s.width + i * 2,
          s.height + i * 2,
          s.width + i * 2,
          i * 2
        ).style.opacity = (85 - i * 10) / 100;
        wired.line(
          svg,
          i * 2,
          s.height + i * 2,
          s.width + i * 2,
          s.height + i * 2
        ).style.opacity = (85 - i * 10) / 100;
        wired.line(
          svg,
          s.width + i * 2,
          s.height + i * 2,
          s.width + i * 2,
          i * 2
        ).style.opacity = (85 - i * 10) / 100;
      }
      this.$el.classList.remove("pending");
    },
    updateStyles() {
      this.$nextTick(() => {
        this.updated();
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy;
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function")
        this.closeButton.callback(this);
    }
  }
};
</script>

<style scoped lang='scss'>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(250, 250, 250, 0.75);
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
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  // color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
<style scoped>
.host {
  /* display: inline-block;
  position: relative;
  padding: 5px; */
}

.host.pending {
  opacity: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

svg {
  display: block;
}
svg >>> path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
</style>
