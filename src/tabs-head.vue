<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <!-- <div class="host">
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
    </div>-->
    <pc-line color="#b0b0b3" style="width:100%"></pc-line>
    <div class="line" ref="line">
      <pc-line color="blue"></pc-line>
    </div>
    
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
import { wired } from "./wired-lib.js";
import Line from "./line";
export default {
  name: "pencil-tabs-head",
  inject: ["eventBus"],
  data() {
    return {
      knobradius: 10
    };
  },
  components: {
    "pc-line": Line
  },
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.updateLinePosition(vm);
    });
    // if (!this.$el.resizeHandler) {
    //   this.$el.resizeHandler = this._debounce(
    //     this.firstUpdated.bind(this.$el),
    //     200,
    //     false,
    //     this.$el
    //   );
    //   window.addEventListener("resize", this.$el.resizeHandler);
    // }
    // this.firstUpdated();
  },
  methods: {
    updateLinePosition(selectedVm) {
      let { width, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    }
    //  _clearNode(node) {
    //   while (node.hasChildNodes()) {
    //     node.removeChild(node.lastChild);
    //   }
    // },
    // firstUpdated() {
    //   const svg = this.$el.querySelector("#svg");
    //   this._clearNode(svg);
    //   const s = this.$el.getBoundingClientRect();
    //   svg.setAttribute("width", s.width);
    //   svg.setAttribute("height", s.height);
    //   let radius = this.knobradius || 10;
    //   this._barWidth = s.width - 2 * radius;
    //   this._bar = wired.line(
    //     svg,
    //     radius,
    //     s.height / 2,
    //     s.width - radius,
    //     s.height / 2
    //   );
    //   this._bar.classList.add("bar");
    //   this._knobGroup = wired._svgNode("g");
    //   svg.appendChild(this._knobGroup);
    //   this._knob = wired.ellipse(
    //     this._knobGroup,
    //     radius,
    //     s.height / 2,
    //     radius * 2,
    //     radius * 2
    //   );
    //   this._knobAttached = false;
    // },
    // _debounce(func, wait, immediate, context) {
    //   let timeout = 0;
    //   return () => {
    //     const args = arguments;
    //     const later = () => {
    //       timeout = 0;
    //       if (!immediate) {
    //         func.apply(context, args);
    //       }
    //     };
    //     const callNow = immediate && !timeout;
    //     clearTimeout(timeout);
    //     timeout = window.setTimeout(later, wait);
    //     if (callNow) {
    //       func.apply(context, args);
    //     }
    //   };
    // },
  }
};
</script>
<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    // border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
