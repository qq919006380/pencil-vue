<template>
  <div id="btn" class="host" :class="{disabled:disabled}" @click="$emit('click',$event.target)">
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
  </div>
</template>

<script>
import rough from "roughjs/dist/rough.umd";
import { wired } from "./wired-lib.js";
export default {
  name: "pc-button",
  props: {
    elevation: { type: [Number, String], default: 1 },
    disabled: { type: Boolean, default: false },
    stroke: { type: String, default: "#000" }
  },
  mounted() {
    this.$el.classList.remove("pending");
    // this.updated();
    this.r();
  },
  methods: {
    _clearNode(node) {
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
    },
    r() {
      const host = this.$el;
      const svg = this.$el.querySelector("#svg");
      this._clearNode(svg);
      const s = host.getBoundingClientRect();
      const elev = Math.min(Math.max(1, this.elevation), 5);
      svg.setAttribute("width", s.width + elev * 2);
      svg.setAttribute("height", s.height + elev * 2);
      const rc = rough.svg(svg);
      let node = rc.rectangle(1, 1, s.width, s.height, {
        stroke: this.stroke,
        bowing: 2 //曲线
        // roughness:2
      });
      svg.appendChild(node);
      // elevation
      for (var i = 0; i < elev; i++) {
        var elevation = rc.linearPath(
          [
            [s.width + i * 2, 0 + i * 2],
            [s.width + i * 2, s.height + i * 2],
            [s.width + i * 2, s.height + i * 2],
            [0 + i * 2, s.height + i * 2]
          ],
          {
            bowing: 2, //弯曲
            stroke: this.stroke
          }
        );
        elevation.style.opacity = 1 - i * 0.12;
        svg.appendChild(elevation);
      }
    }
  }
};
</script>

<style scoped>
.host {
  display: inline-block;
  font-family: inherit;
  cursor: pointer;
  padding: 8px 13px;
  position: relative;
  text-align: center;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  display: inline-flex;
  outline: none;
}
.host:active >>> path {
  transform: scale(0.97) translate(0.5%, 0.5%);
}
.host.disabled {
  opacity: 0.6 !important;
  background: rgba(0, 0, 0, 0.07);
  cursor: default;
  pointer-events: none;
}

.host:focus >>> path {
  stroke-width: 1.5;
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
  /* overflow: visible; */
  display: block;
}
svg >>> path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
  transition: transform 0.05s ease;
}
</style>

