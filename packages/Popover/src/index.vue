<template>
  <teleport to="body">
    <div
      :class="'popover_position_' + position"
      class="pencil_host pencil_popover"
      ref="host"
      v-if="modalOpen"
    >
      <slot name="content"></slot>
    </div>
  </teleport>

  <div class="popover_contentWrapper" ref="contentWrapper">
    <slot></slot>
  </div>
</template>
<script>
import { render } from "../../_util/util.js";
import { onEvent } from "./onClick";
import { xy } from "./xy";
import { ref, onMounted, watchEffect, nextTick, onBeforeUnmount } from "vue";
import "../../_style/index.less";
export default {
  name: "Popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      },
    },
  },
  setup(props, ctx) {
    const host = ref(null);
    const contentWrapper = ref(null);
    let hostMap = null;
    let modalOpen = ref(false);
    let { addPopoverListeners, removePopoverListeners } = onEvent(
      contentWrapper,
      host,
      modalOpen,
      props
    );
    let { csys, positionContent } = xy(contentWrapper, host, props);
    watchEffect(() => {
      if (modalOpen.value) {
        nextTick(() => {
          hostMap = new render(host.value, csys());

          hostMap.setSvgStyle({
            bowing: 2,
          });
          positionContent();
        });
      }
    });
    onMounted(() => {
      addPopoverListeners();
    });
    onBeforeUnmount(() => {
      removePopoverListeners();
    });
    return { host, modalOpen, contentWrapper };
  },
};
</script>
<style lang="less">
.pencil_popover {
  z-index: 20;
  min-width: 1px;
  padding: 8px 13px;
  position: absolute;
  display: inline-block;

  &.popover_position_top {
    transform: translateY(-100%);
    margin-top: -10px;
  }
  &.popover_position_bottom {
    margin-top: 10px;
  }
  &.popover_position_left {
    transform: translateX(-100%);
    margin-left: -10px;
  }
  &.popover_position_right {
    margin-left: 10px;
  }
}
.popover_contentWrapper {
  display: inline-block;
}
</style>
