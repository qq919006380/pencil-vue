<template>
  <div class="pencil_host pencil_checkbox" ref="host" :class="{ disabled: disabled }">
    <input
      @change="$emit('update:modelValue', $event.target.checked)"
      type="checkbox"
      v-model="modelValue"
    />
  </div>
  <div class="pencil_content">
    <slot></slot>
  </div>
</template>
<script>
import { render } from "../../_util/util.js";
import { ref, onMounted, watch } from "vue";
import "../../_style/index.less";
export default {
  name: "Checkbox",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
    },
    disabled: { type: Boolean, default: false },
  },
  setup(props, ctx) {
    const host = ref(null);
    let hostMap = null;

    onMounted(() => {
      hostMap = new render(host.value);

      hostMap.on("watchHost", (rough) => {
        if (props.modelValue) addTick(rough);
      });
    });

    watch(
      () => props.modelValue,
      (count) => {
        if (count) {
          addTick(hostMap.rough);
        } else {
          hostMap.svg.removeChild(hostMap.svg.lastChild);
        }
      }
    );

    function change(e) {
      ctx.emit("update:modelValue", e.target.checked);
    }

    function addTick(rough) {
      const rc = rough.svg(hostMap.svg);
      var v = rc.linearPath(
        [
          [-3, 12],
          [10, 21],
          [27, 0],
        ],
        {
          strokeWidth: 2,
        }
      );

      hostMap.svg.appendChild(v);
    }
    return { change, host };
  },
};
</script>
<style lang="less">
.pencil_checkbox {
  display: inline-block;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  margin-right: 5px;
  input[type="checkbox"] {
    outline: none;
    border: none;
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    opacity: 0;
  }
}
.pencil_content {
  display: inline-block;
  margin-right: 10px;
}
</style>
