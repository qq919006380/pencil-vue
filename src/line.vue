<template>
  <div class="line">
    <div class="overlay">
      <svg id="svg">asd</svg>
    </div>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  name: "pencil-line",
  props: {
    elevation: { type: [Number, String], default: 5 },
    color: { type:String, default: 'rgb(0, 0, 0)' }
  },
  data() {
    return {
      knobradius: 10
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.firstUpdated();
    });
    if (!this.$el.resizeHandler) {
      this.$el.resizeHandler = this._debounce(
        this.firstUpdated.bind(this.$el),
        200,
        false,
        this.$el
      );
      window.addEventListener("resize", this.$el.resizeHandler);
    }
  },
  methods: {
    _clearNode(node) {
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
    },
    firstUpdated() {
      const svg = this.$el.querySelector("#svg");
      this._clearNode(svg);
      const s = this.$el.getBoundingClientRect();
      const elev = Math.min(Math.max(1, this.elevation), 5);
      console.log(elev);
      const w = s.width + (elev - 1) * 2;
      const h = s.height + (elev - 1) * 2;
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      let radius = this.knobradius || 10;
      this._barWidth = s.width - 2 * radius;
      for (var i = 1; i < elev; i++) {
        this._bar = wired.line(
          svg,
          radius,
          s.height / 2,
          s.width - radius,
          s.height / 2
        );
      }

      this._bar.classList.add("bar");

      this._bar.style.stroke=this.color
      console.log(this._bar)
      this._knobGroup = wired._svgNode("g");
      svg.appendChild(this._knobGroup);
      this._knob = wired.ellipse(
        this._knobGroup,
        radius,
        s.height / 2,
        radius * 2,
        radius * 2
      );
      this._knobAttached = false;
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
    
  }
};
</script>

<style scoped>
.line {
  display: block;
  height: 1.5px;
  outline: none;
  box-sizing: border-box;
}
.line .overlay {
  pointer-events: none;
}

.line svg {
  display: block;
}
.line svg >>> .bar {
  /* stroke: var(--wired-slider-bar-color, rgb(0, 0, 0)); */
}
.line svg >>> path {
  stroke-width: 0.7;
  fill: transparent;
}
</style>
