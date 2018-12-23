<template>
  <div id="btn" class="host" :class="{disabled:disabled}">
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  props: {
    elevation: { type: [Number, String], default: 1 },
    disabled: { type: Boolean, default: false }
  },
  mounted() {
    this.$el.classList.add("pending");
    this.connectedCallback();
    // this.tabIndex = this.disabled ? -1 : (this.getAttribute('tabindex') || 0);
  },
  methods: {
    connectedCallback() {
      setTimeout(() => this.updated());
      this.$el.addEventListener("click", () => {
        console.log(123);
      });

      this.$el.setAttribute("role", "button");
      this.$el.setAttribute("aria-label", this.$slots.default[0].text);
    },
    updated() {
      const svg = this.$el.querySelector("#svg");
      this._clearNode(svg);
      const s = this.$el.getBoundingClientRect();
      const elev = Math.min(Math.max(1, this.elevation), 5);
      const w = s.width + (elev - 1) * 2;
      const h = s.height + (elev - 1) * 2;
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
        ).style.opacity = (75 - i * 10) / 100;
        wired.line(
          svg,
          s.width + i * 2,
          s.height + i * 2,
          s.width + i * 2,
          i * 2
        ).style.opacity = (75 - i * 10) / 100;
        wired.line(
          svg,
          i * 2,
          s.height + i * 2,
          s.width + i * 2,
          s.height + i * 2
        ).style.opacity = (75 - i * 10) / 100;
        wired.line(
          svg,
          s.width + i * 2,
          s.height + i * 2,
          s.width + i * 2,
          i * 2
        ).style.opacity = (75 - i * 10) / 100;
      }
      this.$el.classList.remove("pending");
    },
    // =============================================
    _clearNode(node) {
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
        console.log("node", node);
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
  padding: 8px 10px;
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
.host.pending {
  opacity: 0;
}
.host:active >>> path {
  transform: scale(0.97) translate(1.5%, 1.5%);
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
  display: block;
}
svg >>> path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
  transition: transform 0.05s ease;
}
</style>

