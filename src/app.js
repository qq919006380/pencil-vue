import Vue from "vue";

import Button from "./button";
import Input from "./input";
import Card from "./card";
import Checkbox from "./checkbox";
import Combo from "./combo";
import Item from "./item";
import Popover from "./popover";
import Toast from "./toast";
import Test from "./test";

import Tabs from "./tabs";
import TabsBody from "./tabs-body";
import TabsHead from "./tabs-head";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";

import plugin from "./plugin";
Vue.use(plugin);

// import cardr from "./card-r";
// Vue.component("pc-cardr", cardr);

Vue.component("pc-button", Button);
Vue.component("pc-input", Input);
Vue.component("pc-card", Card);
Vue.component("pc-checkbox", Checkbox);
Vue.component("pc-combo", Combo);
Vue.component("pc-item", Item);
Vue.component("pc-popover", Popover);
Vue.component("pc-toast", Toast);
Vue.component("pc-toast", Toast);
Vue.component("test", Test);

Vue.component("pc-tabs", Tabs);
Vue.component("pc-tabs-body", TabsBody);
Vue.component("pc-tabs-head", TabsHead);
Vue.component("pc-tabs-item", TabsItem);
Vue.component("pc-tabs-pane", TabsPane);

new Vue({
  el: "#app",
  data() {
    return {
      singin:false,
      data: "默认值",
      checkbox: "1",
      selected: "1",
      config: {
        stroke: "#d8cbbb", //边框颜色
        fill: "#621295", //填充的颜色
        fillStyle: "hachure", //填充的样式
        hachureAngle: -45,
        hachureGap: 10,
        fillWeight: 1
      },
      config1: {
        stroke: "#560764", //边框颜色
        fill: "#ffaaaa", //填充的颜色
        fillStyle: "solid", //填充的样式
        hachureAngle: 45,
        hachureGap: 5,
        fillWeight: 2
      },
      config2: {
        stroke: "#fcd307", //边框颜色
        fill: "#1c1259", //填充的颜色
        fillStyle: "zigzag", //填充的样式
        hachureAngle: -45,
        hachureGap: 5,
        fillWeight: 2
      },
      config3: {
        stroke: "#b7fbff", //边框颜色
        fill: "#fff6be", //填充的颜色
        fillStyle: "cross-hatch", //填充的样式
        hachureAngle: -45,
        hachureGap: 5,
        fillWeight: 2
      },
      config4: {
        stroke: "#b7fbff", //边框颜色
        fill: "#c6cbef", //填充的颜色
        fillStyle: "dots", //填充的样式
        hachureAngle: -45,
        hachureGap: 5,
        fillWeight: 2
      },
      config5: {
        stroke: "#fdffdc", //边框颜色
        fill: "#b4e9e2", //填充的颜色
        fillStyle: "sunburst", //填充的样式
        hachureAngle: -45,
        hachureGap: 10,
        fillWeight: 1
      },
      config6: {
        stroke: "#5d3a3a", //边框颜色
        fill: "#a6e3e9", //填充的颜色
        fillStyle: "dashed", //填充的样式
        hachureAngle: -45,
        hachureGap: 10,
        fillWeight: 2
      },

    };
  },
  methods: {
    
    on() {
      this.$toast("点击弹出提示");
    },
    on1() {
      this.$toast("点击弹出提示", { position: "top" });
    },
    on2() {
      this.$toast("点击弹出提示asdasd", { position: "bottom" });
    },
    on3() {
      this.$toast("点击弹出提示asdasd", { position: "middle" });
    },
    on4() {
      this.$toast("点击弹出提示asdasd", { autoClose: false });
    },
    on5() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          }
        }
      });
    }
  }
});
