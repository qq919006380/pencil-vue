<template>
  <div class="popover" ref="popover">
    <!-- popover弹出层 -->
    <div
      ref="contentWrapper"
      class="content-wrapper host"
      v-if="visible"
      :class="{[`position-${position}`]:true}"
    >
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
      <span style="position: relative;">
        <slot name="content" :close="close"></slot>
      </span>
    </div>
    <span id="triggerWrapper" ref="triggerWrapper" :style="{'display':'inline-block'}">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  name: "pencil-popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      visible: false,
      offset: 14,
      _dirty: false
    };
  },
  mounted() {
    this.addPopoverListeners();
    this.$nextTick(function() {
      var triggerWrapper = this.$el.querySelector("#triggerWrapper");
      triggerWrapper.style.width =
        this.$slots.default[1].elm.clientWidth + "px";
        console.log(this.$slots.default[1].elm)
      triggerWrapper.style.height =
        this.$slots.default[1].elm.clientHeight + "px";
    });
  },
  beforeDestroy() {
    this.putBackContent();
    this.removePopoverListeners();
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  methods: {
    _clearNode(node) {
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
    },

    _layout(p) {
      const svg = p.querySelector("#svg");
      const host = p;
      var s = host.getBoundingClientRect();
      var w = s.width;
      var h = s.height;

      switch (this.position) {
        case "left":
        case "right":
          w = w + this.offset;
          break;
        default:
          h = h + this.offset;
          break;
      }

      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      var points = [];
      switch (this.position) {
        case "top":
          points = [
            [2, 2],
            [w - 2, 2],
            [w - 2, h - this.offset],
            [w / 2 + 8, h - this.offset],
            [w / 2, h - this.offset + 8],
            [w / 2 - 8, h - this.offset],
            [0, h - this.offset]
          ];
          break;
        case "left":
          points = [
            [2, 2],
            [w - this.offset, 2],
            [w - this.offset, h / 2 - 8],
            [w - this.offset + 8, h / 2],
            [w - this.offset, h / 2 + 8],
            [w - this.offset, h],
            [2, h - 2]
          ];
          break;
        case "right":
          points = [
            [this.offset, 2],
            [w - 2, 2],
            [w - 2, h - 2],
            [this.offset, h - 2],
            [this.offset, h / 2 + 8],
            [this.offset - 8, h / 2],
            [this.offset, h / 2 - 8]
          ];
          svg.style.transform = "translateX(" + -this.offset + "px)";
          break;
        default:
          points = [
            [2, this.offset],
            [0, h - 2],
            [w - 2, h - 2],
            [w - 2, this.offset],
            [w / 2 + 8, this.offset],
            [w / 2, this.offset - 8],
            [w / 2 - 8, this.offset]
          ];
          svg.style.transform = "translateY(" + -this.offset + "px)";
          break;
      }
      wired.polygon(svg, points);
      this._dirty = false;
    },
    addPopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.onClick);
      } else {
        this.$refs.popover.addEventListener("mouseenter", this.open);
        this.$refs.popover.addEventListener("mouseleave", this.close);
      }
    },
    removePopoverListeners() {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener("mouseenter", this.open);
        this.$refs.popover.removeEventListener("mouseleave", this.close);
      }
    },
    putBackContent() {
      const { contentWrapper, popover } = this.$refs;
      if (!contentWrapper) {
        return;
      }
      popover.appendChild(contentWrapper);
    },
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      this._layout(contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  // position: relative;
}
.content-wrapper {
  position: absolute;
  // border: 1px solid $border-color;
  border-radius: $border-radius;
  // filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  // &::after {
  //   content: "";
  //   display: block;
  //   border: 10px solid transparent;
  //   width: 0;
  //   height: 0;
  //   position: absolute;
  // }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>
<style scoped >
.host {
  display: block;
  position: absolute;
  outline: none;
  z-index: 1002;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  font-family: inherit;
  font-size: 9pt;
  line-height: 1;
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
.host >>> path {
  stroke-width: 0.7;
  stroke: var(--wired-tooltip-border-color, currentColor);
  fill: var(--wired-tooltip-background, rgba(255, 255, 255, 0.9));
}
</style>