<template>
  <div
    class="pencil_host pencil_button"
    ref="host"
    :class="{ disabled: disabled }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { render } from "../../_util/util.js";
import "../../_style/index.less";
export default {
  name: "Button",
  props: {
    elevation: { type: [Number, String], default: 0 },
    disabled: { type: Boolean, default: false },
    type: {
      type: String,
      default: "default",
      validator: (val) => {
        return [
          "default",
          "primary",
          "info",
          "success",
          "warning",
          "error",
        ].includes(val);
      },
    },
  },

  setup(props) {
    const host = ref(null);
    let hostMap = null;
    var assignObj = {
      default: {},
      primary: {
        fillStyle:"hachure",
        fill: "#2d8cf0",
      },
      info: {
        fillStyle:"hachure",
        fill: "#2db7f5",
      },
      success: {
        fillStyle:"hachure",
        fill: "#19be6b",
      },
      warning: {
        fillStyle:"hachure",
        fill: "#ff9900",
      },
      error: {
        fillStyle:"hachure",
        fill: "#ed4014",
      },
    };
    onMounted(() => {
      let type = props.type || "default";
      hostMap = new render(host.value);
      hostMap.setSvgStyle(assignObj[type]);
      hostMap.on("watchHost", (rough) => {
        elevation(rough);
      });
    });
    function elevation(rough) {
      var elev = props.elevation;
      hostMap.svg.setAttributeNS(null, "width", hostMap.s.width + elev * 2);
      hostMap.svg.setAttributeNS(null, "height", hostMap.s.height + elev * 2);

      const rc = rough.svg(hostMap.svg);
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

    return { host };
  },
};
</script>



<style lang="less">
.pencil_button {
  min-width: 1px;
  display: inline-block;
  cursor: pointer;
  padding: 8px 13px;
  text-align: center;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  justify-content: center;
  flex-direction: column;
  outline: none;
  &:active path {
    transform: scale(0.97) translate(0.5%, 0.5%);
  }
  &:focus path {
    stroke-width: 1.5;
  }
}
</style>


