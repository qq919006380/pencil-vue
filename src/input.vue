<template>
  <div class="host" :class="disabled?'disabled':''">
    <input
      :value="value"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    >
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
  </div>
</template>

<script>
import rough from "roughjs/dist/rough.umd";
import tool from "./tool.js";
export default {
  name: "pc-input",
  props: {
    name: {},
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    stroke: {
      type: String,
      default: "#000"
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
      tool.clearNode(svg);
      const s = host.getBoundingClientRect();
      const elev = Math.min(Math.max(0, this.elevation), 5);
      svg.setAttribute("width", s.width + 2);
      svg.setAttribute("height", s.height + 2);
      const rc = rough.svg(svg);
      let node = rc.rectangle(0.5, 0.5, s.width - 1, s.height - 1, {
        stroke: this.stroke,
        bowing: 2,
        strokeWidth: 1.1
      });
      node.style.opacity = 0.8;
      svg.appendChild(node);
    }
  }
};
</script>

<style scoped>
.host {
  display: inline-block;
  position: relative;
  padding: 5px;
  font-family: sans-serif;
  width: 150px;
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
input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}
</style>




