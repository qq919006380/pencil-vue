import Vue from "vue";

import Button from "./button";
import Input from "./input";
import Card from "./card";
import Checkbox from "./checkbox";
import Combo from "./combo";
import Item from "./item";
import Popover from './popover';
import Test from './test';

Vue.component("wired-button", Button);
Vue.component("wired-input", Input);
Vue.component("wired-card", Card);
Vue.component("wired-checkbox", Checkbox);
Vue.component("wired-combo", Combo);
Vue.component("wired-item", Item);
Vue.component("wired-popover", Popover);
Vue.component("test", Test);

new Vue({
  el: "#app",
  data(){
    return{
      data:"默认值",
      checkbox:"1"
    }
  },
  methods: {
    on(e) {
      console.log(e);
    }
  }
});
