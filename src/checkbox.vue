<template>
  <div class="host" :class="disabled?'disabled':''">
    <label class="inline">
      <div style="vertical-align:middle;" class="inline pr">
        <span class="inline pr">
          <input
            v-if="group"
            type="checkbox"
            :disabled="disabled"
            :value="label"
            v-model="model"
            @change="change"
            class="checkbox"
          >
          <input
            class="checkbox"
            v-else
            type="checkbox"
            :disabled="disabled"
            :checked="currentValue"
            @change="change"
          >
        </span>
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
<script>
import { findComponentUpward } from "./tool/assist.js";

import Emitter from "./tool/emitter.js";
import tool from "./tool/tool.js";

import rough from "roughjs/dist/rough.umd";
export default {
  mixins: [Emitter],
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw "Value should be trueValue or falseValue.";
      }
    }
  },

  mounted() {
    this.host = this.$el.querySelector(".checkbox");
    tool.watchDom(this.host, () => {
      this.r();
    });
    this.parent = findComponentUpward(this, "iCheckboxGroup");

    if (this.parent) {
      this.group = true;
    }

    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  },
  methods: {
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    },

    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked;
      this.currentValue = checked;

      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("input", value);

      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit("on-change", value);
        this.dispatch("iFormItem", "on-form-change", value);
      }
      this.r();
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
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [],
      group: false,
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