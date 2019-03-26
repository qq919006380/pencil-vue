<template>
  <div class="host" :class="disabled?'disabled':''" @click="_toggleCheck">
    <label class="inline">
      <div style="vertical-align:middle;" class="inline pr">
        <input type="checkbox" class="checkbox">
        <div class="overlay">
          <svg id="svg"></svg>
        </div>
      </div>
      <div style="vertical-align:middle;" class="inline sp">
        <slot></slot>
      </div>
    </label>
  </div>
</template>
<style scoped>
.pr {
  position: relative;
}
.inline {
  display: inline-block;
}
.checkbox {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
}
.overlay {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background: pink;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<script>
import rough from "roughjs/dist/rough.umd";
import tool from "./tool.js";
export default {
  name: "pc-checkbox",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cc: this.checked,
      host: undefined
    };
  },
  mounted() {
    this.host = this.$el.querySelector(".checkbox");
    tool.watchDom(this.host, () => {
      this.r();
    });
  },
  methods: {
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
      svg.appendChild(node);
    },
    toggleCheck() {
      var svg = this.$el.querySelector("#svg");
      const rc = rough.svg(svg);
      let check = rc.rectangle(0.5, 0.5, 10, 10, {
        stroke: this.stroke,
        bowing: 1.5,
        roughness: 1.5,
        strokeWidth: 1.1
      });
      svg.appendChild(check);
    },

    _toggleCheck() {
      this.cc = !(this.cc || false);
      this.toggleCheck();
      this.r();
    }
  }
};
</script>

<style scoped>
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

.checkbox {
  outline: none;
  border: none;
  /* visibility: hidden; */
}
.overlay {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
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

svg >>> path {
  stroke: var(--wired-checkbox-icon-color, currentColor);
  stroke-width: 0.7;
}
</style>
