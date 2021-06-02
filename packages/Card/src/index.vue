<template>
  <div class="pencil_host pencil_card" ref="host">
    <div v-if="$slots.header || header" class="pencil_card_header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="pencil_card_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { render } from "../../_util/util.js";
import "../../_style/index.less";
export default {
  name: "Card",
  props: {
    elevation: { type: [Number, String], default: 0 },
    header: String,
  },

  setup(props, c) {
    let hostMap = null;
    let data = reactive({
      host: "",
    });

    onMounted(() => {
      hostMap = reactive(new render(data.host));
      hostMap.setSvgStyle({
        hachureGap: 1,
        fill:"rgba(0,0,0,0)"
      });
      hostMap.on("watchHost", (rough) => {
        elevation(rough);
        (c.slots.header || props.header) && line(rough);
      });
    });
    function line(rough) {
      const rc = rough.svg(hostMap.svg);
      let headerDom = hostMap.$(".pencil_card_header").getBoundingClientRect();
      var line = rc.line(
        10,
        headerDom.height,
        headerDom.width-10,
        headerDom.height,{
          stroke: "#C0C0C0",
          bowing:1,
          roughness:1,
          strokeWidth:1
        }
      );
      hostMap.svg.appendChild(line);
    }
    function elevation(rough) {
      var elev = props.elevation;
      const rc = rough.svg(hostMap.svg);
      hostMap.svg.setAttributeNS(null, "width", hostMap.s.width + elev * 2);
      hostMap.svg.setAttributeNS(null, "height", hostMap.s.height + elev * 2);
      for (var i = 0; i <= elev; i++) {
        if (elev === 0) return;
        var elevation = rc.linearPath(
          [
            [hostMap.s.width + i * 2, 0 + i * 2],
            [hostMap.s.width + i * 2, hostMap.s.height + i * 2],
            [hostMap.s.width + i * 2, hostMap.s.height + i * 2],
            [0 + i * 2, hostMap.s.height + i * 2],
          ],
          {
            bowing: 2, //弯曲
            stroke: hostMap.decoration.stroke,
          }
        );
        elevation.style.opacity = 1 - i * 0.12;
        hostMap.svg.appendChild(elevation);
      }
    }

    return { ...toRefs(data) };
  },
};
</script>



<style lang="less" scoped>
.pencil_card {
  max-width: 480px;
  .pencil_card_header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pencil_card_content {
    padding: 20px;
  }
}
</style>

