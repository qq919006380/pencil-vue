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
import plugin from "./plugin";
import { SSL_OP_NO_SSLv3 } from "constants";
Vue.use(plugin);

Vue.component("wired-button", Button);
Vue.component("wired-input", Input);
Vue.component("wired-card", Card);
Vue.component("wired-checkbox", Checkbox);
Vue.component("wired-combo", Combo);
Vue.component("wired-item", Item);
Vue.component("wired-popover", Popover);
Vue.component("wired-toast", Toast);
Vue.component("test", Test);

new Vue({
  el: "#app",
  data() {
    return {
      data: "默认值",
      checkbox: "1"
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
    on4() {this.$toast("点击弹出提示asdasd", { autoClose: false });},
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
