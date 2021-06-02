<template>
  <div class="pencil_host pencil_tab" ref="host">
    <div class="pencil_tab_nav">
      <div
        v-for="(title, index) in titles"
        :ref="
          (el) => {
            if (modelValue === title) selectedItem = el;
          }
        "
        @click="active(title)"
        class="pencil_tab_title"
        :key="index"
      >
        {{ title }}
      </div>
      <svg id="pencil_nav_indicator" ref="indicator"></svg>
    </div>

    <component :is="current" :key="current.props.title"></component>
  </div>
</template>
<script>
import Tab from "../../Tab";
import { render } from "../../_util/util.js";
import { ref, onMounted, watchEffect, computed, onBeforeUnmount } from "vue";
import "../../_style/index.less";
export default {
  name: "Tabs",
  props: {
    modelValue: {
      type: String,
    },
  },
  setup(props, ctx) {
    const host = ref(null);
    const indicator = ref(null);
    const defaults = ctx.slots.default();
    let hostMap = null;
    let selectedItem = ref(null);
    defaults.forEach((val) => {
      if (val.type != Tab) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    let titles = defaults.map((val) => {
      return val.props.title;
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.modelValue);
    });

    onBeforeUnmount(() => {
      activeLine = () => {};
    });
    onMounted(() => {
      hostMap = new render(host.value);
      hostMap.setSvgStyle({
        fill:"rgba(0,0,0,0)"
      });
      hostMap.on("watchHost", (rough) => {
        line(rough);
        activeLine(rough);
      });

      watchEffect(
        () => {
          // 移动
          let {
            right,
            left,
            width,
            height,
          } = selectedItem.value.getBoundingClientRect();

          let hostleft = host.value.getBoundingClientRect().left;
          indicator.value.setAttributeNS(null, "width", width);
          indicator.value.setAttributeNS(null, "height", height);
          // indicator.value.setAttributeNS(null, "overflow", "overlay");
          indicator.value.style.top = top + "px";
          indicator.value.style.left = left - hostleft   + "px";
        },
        {
          flush: "post",
        }
      );
    });
    // 选中下划线
    let activeLine = (rough) => {
      var hostWidth = host.value.getBoundingClientRect().width;
      var height = selectedItem.value.getBoundingClientRect().height;
      const rc = rough.svg(indicator.value);
      var line = rc.line(0, height - 3, hostWidth, height - 3, {
        stroke: "#0087D2",
        strokeWidth: 2,
      });
      indicator.value.appendChild(line);
    };
    // 默认线
    function line(rough) {
      const rc = rough.svg(hostMap.svg);
      let headerDom = hostMap.$(".pencil_tab_nav").getBoundingClientRect();
      var line = rc.line(
        20,
        headerDom.height + 18,
        headerDom.width - 20,
        headerDom.height + 18,
        {
          stroke: "#999",
        }
      );
      hostMap.svg.appendChild(line);
    }
    function active(title) {
      ctx.emit("update:modelValue", title);
    }

    return { host, defaults, titles, active, selectedItem, indicator, current };
  },
};
</script>
<style lang="less" scoped>
.pencil_tab {
  padding: 20px;
  max-width: 800px;
  .pencil_tab_title {
    display: inline-block;
    margin-right: 10px;
    padding: 8px;
    cursor: pointer;
    position: relative;
  }

  svg#pencil_nav_indicator {
    transition: all 250ms;
    position: absolute;
    z-index: -1;
  }
}
</style>



