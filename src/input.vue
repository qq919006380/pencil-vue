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
import { wired } from "./wired-lib.js";
export default {
  props: {
    name: {},
    value: {
      type: String,
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
      const s = this.$el.getBoundingClientRect();
      svg.setAttribute("width", s.width);
      console.log("s.width :", s.width);
      svg.setAttribute("height", s.height);
      wired.rectangle(svg, 0, 0, s.width, s.height);
      this.$el.classList.remove("pending");
      if (typeof this._value !== "undefined") {
        this.input.value = this._value;
        delete this._value;
      }
    },
    _clearNode(node) {
      console.log(1);
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
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
  font-family: sans-serif;
  width: 150px;
  outline: none;
}

.host.pending {
  opacity: 0;
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




