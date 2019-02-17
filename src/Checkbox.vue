<template>
  <div id="container" class="host" :class="disabled?'disabled':''">
    <div id="container" @click="_toggleCheck">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked:{
      type: Boolean,
      default: false
    }
    
  },
  
  mounted() {
    this.$el.classList.add("pending");
    this.updated();
  },
  methods: {
    updated() {
      const svg = this.$el.querySelector("#svg");
      this._clearNode(svg);
      const s = { width: 24, height: 24 };
      svg.setAttribute("width", s.width);
      svg.setAttribute("height", s.height);
      wired.rectangle(svg, 0, 0, s.width, s.height);
      const checkpaths = [];
      checkpaths.push(
        wired.line(
          svg,
          s.width * 0.3,
          s.height * 0.4,
          s.width * 0.5,
          s.height * 0.7
        )
      );
      checkpaths.push(
        wired.line(svg, s.width * 0.5, s.height * 0.7, s.width + 5, -5)
      );
      checkpaths.forEach(d => {
        d.style.strokeWidth = 2.5;
      });
      if (this.checked) {
        checkpaths.forEach(d => {
          d.style.display = "";
        });
      } else {
        checkpaths.forEach(d => {
          d.style.display = "none";
        });
      }
      this.$el.classList.remove("pending");
    },

    _toggleCheck() {
      this.checked = !(this.checked || false);
      this.updated();
    },
    _clearNode(node) {
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
    }
  }
};
</script>

<style scoped>
.host {
  display: block;
  font-family: inherit;
  outline: none;
}

.host.disabled {
  opacity: 0.6 !important;
  cursor: default;
  pointer-events: none;
}

.host.disabled svg {
  background: rgba(0, 0, 0, 0.07);
}

.host.pending {
  opacity: 0;
}

:host(:focus) path {
  stroke-width: 1.5;
}

#container {
  display: inline-block;
  white-space: nowrap;
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
