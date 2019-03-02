<template>
  <div class="host">
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <span style="position: relative;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  props: {},
  data() {
    return {
      offset: 14
    };
  },
  mounted() {
    this._layout();
  },
  methods: {
    _layout() {
      const svg = this.$el.querySelector("#svg");
      const host = this.$el;
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
    }
  }
};
</script>

<style scoped>
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

#container {
  position: relative;
  padding: 8px;
}
</style>
