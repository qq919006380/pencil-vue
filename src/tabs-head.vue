<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line">
      <div class="overlay">
        <svg id="svg" />
      </div>
    </div>
    <svg id="longLine_svg"/>

    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
import tool from "./tool/tool.js";
import rough from "roughjs/dist/rough.umd";
export default {
  name: "pc-tabs-head",
  inject: ["eventBus"],
  data() {
    return {
      knobradius: 10
    };
  },

  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.updateLinePosition(vm);
    });
    this.host = this.$refs.line;
    tool.watchDom(this.host, () => {
      console.log("ww");
      this.r();
    });
  },
  methods: {
    updateLinePosition(selectedVm) {
      let { width, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    },
    r() {
      const host = this.host;
      var svg = this.$el.querySelector("#svg");
      tool.clearNode(svg);
      const s = host.getBoundingClientRect();

      svg.setAttribute("width", s.width + 2);
      svg.setAttribute("height", s.height + 2);
      const rc = rough.svg(svg);
      let node = rc.line(0, 2, s.width, 2, {
        // strokeWidth:5,
        // roughness :5,
        bowing: 5
      });
      svg.appendChild(node);
    },
    longLine_svg_r(){
      var host=this.$refs.head
      var svg = this.$el.querySelector("#longLine_svg");
      const s = host.getBoundingClientRect();
      svg.setAttribute("width", s.width + 2);
      svg.setAttribute("height", s.height + 2);
      const rc = rough.svg(svg);
      let node = rc.line(0, 2, s.width, 2, {
        // strokeWidth:5,
        // roughness :5,
        // bowing: 5
      });
      svg.appendChild(node);
    },
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
    border-bottom: 1px solid $blue;
    transition: all 350ms;
    > .overlay {
      display: inline-block;
      position: absolute;
      top: -15px;
      left: 0;
      margin: 0;
      padding: 0;
    }
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
