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
export default {
  name: "pc-button",
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
        // 这个值必须匹配下列字符串中的一个
        var user_value = []; //用户输入的属性
        var a = ["stroke", "fill", "fillStyle",'hachureAngle','hachureGap','fillWeight']; //需要验证的属性
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
    this.$el.classList.remove("pending");
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
      const elev = Math.min(Math.max(0, this.elevation), 5);
      svg.setAttribute("width", s.width + elev * 2);
      svg.setAttribute("height", s.height + elev * 2);
      const rc = rough.svg(svg);
      let node = rc.rectangle(0.5, 0.5, s.width - 1, s.height - 1, {
        stroke: this.decoration.stroke,
        fill: this.decoration.fill,
        fillStyle: this.decoration.fillStyle,
        hachureAngle:this.decoration.hachureAngle,
        hachureGap:this.decoration.hachureGap,
        fillWeight:this.decoration.fillWeight,
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

