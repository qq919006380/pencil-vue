<template>
  <div class="host">
    <div>
      <slot></slot>
    </div>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  props: {
    elevation: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    if (!this.$el.resizeHandler) {
      this.$el.resizeHandler = this._debounce(
        this.updated.bind(this.$el),
        200,
        false,
        this.$el
      );
      window.addEventListener("resize", this.$el.resizeHandler);
    }

    if (this.resizeHandler) {
        console.log('removeEventListener')
      window.removeEventListener("resize", this.resizeHandler);
      delete this.resizeHandler;
    }

    this.updated()
  },
  methods: {
    _clearNode(node) {
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
    },
    _debounce(func, wait, immediate, context) {
      let timeout = 0;
      return () => {
        const args = arguments;
        const later = () => {
          timeout = 0;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    },
    updated() {
      const svg = this.$el.querySelector("#svg");
      this._clearNode(svg);
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
    }
  }
};
</script>

<style scoped>
.host {
  display: inline-block;
  position: relative;
  padding: 5px;
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