<template>
  <div>
    <input
      id="txt"
      :name="`${name}`"
      :type="`${type}`"
      :placeholder="`${placeholder}`"
      :disabled="`${disabled}`"
      :required="`${required}`"
      :autocomplete="`${autocomplete}`"
      :autofocus="`${autofocus}`"
      :minlength="`${minlength}`"
      :maxlength="`${maxlength}`"
      :min="`${min}`"
      :max="`${max}`"
      :step="`${step}`"
      :readonly="`${readonly}`"
      :size="`${size}`"
      :autocapitalize="`${autocapitalize}`"
      :autocorrect="`${autocorrect}`"
    >
    <!-- 
    @change="`${(e) => _onChange(e)}`"
    -->
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
    min: {},
    max: {},
    minlength: {},
    maxlength: {},
    size:{},
    step: {},
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autocorrect: {
      type: String,
      default: ""
    },
    autocapitalize: {
      type: String,
      default: ""
    }
  },
  mounted() {
    console.log(1)
    this.$el.classList.add("pending");
    this._onDisableChange()
    // tabIndex = disabled ? -1 : (getAttribute('tabindex') || 0);

  },
  methods: {
    input() {
      console.log(1)
      console.log(this.$el)
      return shadowRoot.getElementById("txt");
    },

    get value() {
      console.log(1)
      const input = input;
      return (input && input.value) || "";
    },

    value(v) {
      console.log(1)
      if (shadowRoot) {
        const input = input;
        if (input) {
          input.value = v;
        }
      } else {
        _value = v;
      }
    },

    _onDisableChange() {
      console.log(18)
      if (this.disabled) {
        this.$el.classList.add("disabled");
      } else {
        this.$el.classList.remove("disabled");
      }
    },

    _onChange(event) {
      console.log(1)
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

    firstUpdated() {
      console.log(1)
      value = value || getAttribute("value") || "";
    },

    updated() {
      console.log(1)
      const svg = shadowRoot.getElementById("svg");
      _clearNode(svg);
      const s = getBoundingClientRect();
      svg.setAttribute("width", s.width);
      svg.setAttribute("height", s.height);
      wired.rectangle(svg, 0, 0, s.width, s.height);
      classList.remove("pending");
      if (typeof _value !== "undefined") {
        input.value = _value;
        // delete _value;
      }
    }
  }
};
</script>

<style scoped>
:host {
  display: inline-block;
  position: relative;
  padding: 5px;
  font-family: sans-serif;
  width: 150px;
  outline: none;
}

:host(.pending) {
  opacity: 0;
}

:host(.disabled) {
  opacity: 0.6 !important;
  cursor: default;
  pointer-events: none;
}

:host(.disabled) svg {
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

path {
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
