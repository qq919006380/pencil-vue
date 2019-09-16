<template>
  <div class="host" :class="disabled?'disabled':''">
    <label class="inline">
      <div style="vertical-align:middle;" class="inline pr">
        <span class="inline pr">
          <input
            class="checkbox"
            ref="checkbox"
            type="checkbox"
            :disabled="disabled"
            v-model="currentValue"
            @change="change"
          />
        </span>
        <div class="overlay">
          <svg id="svg" />
        </div>
      </div>
      <div style="vertical-align:middle;" class="inline sp">
        <slot></slot>
      </div>
    </label>
  </div>
</template>
<script>
import tool from "./tool/tool.js";

import rough from "roughjs/dist/rough.umd";
export default {
  mounted() {
    this.host = this.$refs.checkbox;
    tool.watchDom(this.host, () => {
      this.r();
    });
  },
  methods: {
    change(event) {
      this.r();
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
    },
    r() {
      const host = this.host;
      var svg = this.$el.querySelector("#svg");
      tool.clearNode(svg);
      const s = host.getBoundingClientRect();
      const elev = Math.min(Math.max(0, this.elevation), 5);
      svg.setAttribute("width", s.width + 2);
      svg.setAttribute("height", s.height + 2);
      const rc = rough.svg(svg);
      let node = rc.rectangle(0.5, 0.5, s.width - 1, s.height - 1, {
        stroke: this.stroke,
        bowing: 1.5,
        roughness: 1.5,
        strokeWidth: 1.1
      });
      node.style.opacity = 0.8;

      let check = rc.linearPath([[-3, 8], [10, 21], [32, -2]], {
        strokeWidth: 2,
        // roughness: 2,
        bowing: 8,
        stroke: this.stroke
      });
      if (this.currentValue == true) {
        svg.appendChild(check);
      }
      svg.appendChild(node);
    }
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [],
      parent: null
    };
  }
};
</script>
<style lang="scss" scoped>
svg {
  overflow: visible;
}
.checkbox {
  visibility: hidden;
}
.host {
  display: block;
  font-family: inherit;
  outline: none;
  display: inline-block;
  white-space: nowrap;
}
.host.disabled {
  opacity: 0.6 !important;
  cursor: default;
  pointer-events: none;
}
.host.disabled svg {
  background: rgba(0, 0, 0, 0.07);
}
:host(:focus) >>> path {
  stroke-width: 1.5;
}
.pr {
  position: relative;
}
.inline {
  display: inline-block;
}
.checkbox {
  outline: none;
  border: none;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
}
.overlay {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.inline {
  display: inline-block;
  vertical-align: middle;
}
#checkPanel {
  cursor: pointer;
}
svg {
  display: block;
}
svg /deep/ path {
  stroke: var(--wired-checkbox-icon-color, currentColor);
  stroke-width: 0.7;
}
</style>