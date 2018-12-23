<template>
  <div class="host">
    <input
      :value="value"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :minlength="minlength"
      :maxlength="maxlength"
      :min="min"
      :max="max"
      :step="step"
      :size="size"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
    >
    <!-- 给input添加事件
    @change="`${(e) => _onChange(e)}`"
    -->
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  props: {
    name,
    value:{
      type:String,
      default:''
    },
    min:{},
    max:{},
    minlength:{},
    maxlength:{},
    size:{},
    step:{},
    autocomplete:{},
    autocorrect:{},
    autocapitalize:{},
    placeholder:{},
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    
  },
  mounted() {
    // createRenderRoot
    this.$el.classList.add("pending");
    
    // render
    this._onDisableChange()

    // updated
    const svg = this.$el.querySelector("#svg");
    this._clearNode(svg);
    const s = this.$el.getBoundingClientRect();
    svg.setAttribute("width", s.width);
    console.log('s.width :', s.width);
    svg.setAttribute("height", s.height);
    wired.rectangle(svg, 0, 0, s.width, s.height);
    this.$el.classList.remove('pending');
    if (typeof this._value !== 'undefined') {
      this.input.value = this._value;
      delete this._value;
    }
  },
  methods: {
    _onDisableChange() {
      if (this.disabled) {
        this.$el.classList.add("disabled");
        console.log('add')
      } else {
        this.$el.classList.remove("disabled");
        console.log('remove')
      }
    },
    _onChange(event) {
      console.log(13)
      event.stopPropagation();
      const newEvent = new CustomEvent(event.type, {
        bubbles: true,
        composed: true,
        cancelable: event.cancelable,
        detail: { sourceEvent: event }
      });
      dispatchEvent(newEvent);
    },
    _clearNode(node) {
      console.log(1)
      while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
    },
    
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




