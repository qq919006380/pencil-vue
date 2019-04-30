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
import rough from "roughjs/dist/rough.umd";
import tool from "./tool/tool.js";
export default {
  name: "pc-card",
  props: {
    elevation: { type: [Number, String], default: 0 },
    disabled: { type: Boolean, default: false },
    decoration: {
      type: Object,
      default() {
        return {
          stroke: "",
          fill: "",
          fillStyle: ""
        };
      },
      validator: function(value) {
        var user_value = []; //用户输入的属性
        var a = [
          "stroke",
          "fill",
          "fillStyle",
          "hachureAngle",
          "hachureGap",
          "fillWeight"
        ]; //需要验证的属性
        var result = true; //返回的值
        for (var x in value) {
          user_value.push(x);
        }
        // 检查属性
        user_value.forEach(e => {
          if (a.indexOf(e) === -1) {
            result = false;
          }
        });
        // 检查属性类型
        return result;
      }
    }
  },
  mounted() {
    tool.watchDom(this.$el, () => {
      this.r();
    });
  },
  methods: {
    r() {
      const host = this.$el;
      const svg = this.$el.querySelector("#svg");
      tool.clearNode(svg)
      const s = host.getBoundingClientRect();
      const elev = Math.min(Math.max(0, this.elevation), 5);
      svg.setAttribute("width", s.width + elev * 2);
      svg.setAttribute("height", s.height + elev * 2);
      const rc = rough.svg(svg);
      let node = rc.rectangle(0.5, 0.5, s.width - 1, s.height - 1, {
        stroke: this.decoration.stroke,
        fill: this.decoration.fill,
        fillStyle: this.decoration.fillStyle,
        hachureAngle: this.decoration.hachureAngle,
        hachureGap: this.decoration.hachureGap,
        fillWeight: this.decoration.fillWeight,
        bowing: 2
      });
      node.style.opacity = 0.8;
      svg.appendChild(node);
      // elevation
      for (var i = 0; i <= elev; i++) {
        if (elev === 0) return;
        var elevation = rc.linearPath(
          [
            [s.width + i * 2, 0 + i * 2],
            [s.width + i * 2, s.height + i * 2],
            [s.width + i * 2, s.height + i * 2],
            [0 + i * 2, s.height + i * 2]
          ],
          {
            bowing: 2, //弯曲
            stroke: this.decoration.stroke
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
  position: relative;
  padding: 5px;
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