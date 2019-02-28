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

import Tabs from './tabs';
import TabsBody from './tabs-body';
import TabsHead from './tabs-head';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';

import plugin from "./plugin";
Vue.use(plugin);

Vue.component("pc-button", Button);
Vue.component("pc-input", Input);
Vue.component("pc-card", Card);
Vue.component("pc-checkbox", Checkbox);
Vue.component("pc-combo", Combo);
Vue.component("pc-item", Item);
Vue.component("pc-popover", Popover);
Vue.component("pc-toast", Toast);
Vue.component("test", Test);

Vue.component("g-tabs",Tabs)
Vue.component("g-tabs-body",TabsBody)
Vue.component("g-tabs-head",TabsHead)
Vue.component("g-tabs-item",TabsItem)
Vue.component("g-tabs-pane",TabsPane)

new Vue({
  el: "#app",
  data() {
    return {
      data: "默认值",
      checkbox: "1",
      selected: '1'
    };
  },
  mounted(){
    console.log(plugin)
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
