<template>
  <div>selected {{ selected }}</div>

  <div
    v-for="(title, index) in list"
    :ref="
      (el) => {
        if (title === selected) (selectedItem = el), test(el);
      }
    "
    @click="select(title)"
    :key="index"
  >
    {{ title }}
  </div>
</template>
<script>
import { onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    modelValue: {
      type: String,
    },
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    let list = ref(["vue", "react", "angular"]);
    const selectedItem = ref(null);

    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect();
         console.log(width);
         console.log(selectedItem.value);
        },
        {
          flush: "post",
        }
      );
    });

    const select = (title) => {
      context.emit("update:selected", title);
    };
    const test = (el) => {
      // console.log(selectedItem.value);
      // console.log(el);
    };
    return { list, select, selectedItem, test };
  },
};
</script>