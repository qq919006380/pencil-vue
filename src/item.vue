<template>
  <div class="host" :value="value" :text="text">
    <span>{{text}}</span>
  </div>
</template>

<script>
import { wired } from "./wired-lib.js";
export default {
  name: "pc-item",
  props: {
    text: {
      type: String
    },
    value: {
      type: String
    }
  },

  mounted() {
    //   connectedCallback
    this.$el._itemClickHandler = event => {
      this.$el._onClick(event);
    };
    this.$el.addEventListener("click", this.$el._itemClickHandler);
    // disconnectedCallback
    if (this._itemClickHandler) {
      this.$el.removeEventListener("click", this.$el._itemClickHandler);
      this.$el._itemClickHandler = null;
    }
  },
  methods: {
    _onClick(e) {
      const event = new CustomEvent("item-click", {
        bubbles: true,
        composed: true,
        detail: { text: this.text, value: this.value }
      });
      this.dispatchEvent(event);
    }
  }
};
</script>

<style>
.host {
  display: block;
  padding: 8px;
  font-family: inherit;
}
</style>
