<template>
  <div class="pencil_host pencil_input" ref="host">
    <input
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keydown="handleKeydown"
      v-model="modelValue"
    />
  </div>
</template>
<script>
import { render } from "../../_util/util.js";
import "../../_style/index.less";
import { ref, onMounted, watch } from "vue";
export default {
  name: "Input",
  emits: ["update:modelValue", "change", "focus", "blur", "keydown"],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, ctx) {
    const host = ref(null);
    let hostMap = null;
    onMounted(() => {
      hostMap = new render(host.value);
      hostMap.setSvgStyle({
        bowing: 2,
      });
    });
    const handleBlur = (event) => {
      ctx.emit("blur", event);
    };
    const handleFocus = (event) => {
      ctx.emit("focus", event);
    };

    const handleChange = (event) => {
      ctx.emit("change", event.target.value);
    };
    const handleKeydown = (e) => {
      ctx.emit("keydown", e);
    };

    return {
      host,
      handleBlur,
      handleFocus,
      handleChange,
      handleKeydown,
    };
  },
};
</script>
<style lang="less" scoped>
.pencil_input {
  display: inline-block;
  padding: 5px;
  width: 150px;
  & > input {
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
}
</style>
