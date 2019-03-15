<template>
  <div>
    <div class="container">
      <pc-tabs :selected="selected">
        <pc-tabs-head>
          <pc-tabs-item name="login">登录</pc-tabs-item>
          <pc-tabs-item name="registered">注册</pc-tabs-item>
        </pc-tabs-head>
        <pc-tabs-body>
          <pc-tabs-pane name="login">
            <div class="input">用户：
              <pc-input v-model="user" placeholder="请输入用户名"></pc-input>
            </div>
            <div class="input">密码：
              <pc-input v-model="password" type="password" placeholder="请输入密码"></pc-input>
            </div>
            <div class="input">
              <pc-button class="btn" @click="login">登录</pc-button>
              <pc-popover trigger="hover" position="right" class="popover">
                <template slot="content">不是自己的电脑上不要勾选此项</template>
                <pc-checkbox>记住我</pc-checkbox>
              </pc-popover>
            </div>
            <pc-card class="lorem">
              <h2>Lorem</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos facilis fuga dignissimos reiciendis obcaecati optio. Quidem, fuga. Nihil ducimus minima nobis debitis enim ipsa quia impedit laudantium perferendis minus!
            </pc-card>
          </pc-tabs-pane>
          <pc-tabs-pane name="registered">
            <div class="input">用户：
              <pc-input placeholder="请输入用户名"></pc-input>
            </div>
            <div class="input">密码：
              <pc-input type="password" placeholder="请输入密码"></pc-input>
            </div>
            <div class="input"><pc-button class="btn">注册</pc-button></div>
          </pc-tabs-pane>
        </pc-tabs-body>
      </pc-tabs>
    </div>
    <pc-card class="container2"></pc-card>
  </div>
</template>

<script>
import Button from "../../../src/button";
import Card from "../../../src/card";
import Checkbox from "../../../src/checkbox";
import Input from "../../../src/input";
import Popover from "../../../src/popover";
import Tabs from "../../../src/tabs";
import TabsBody from "../../../src/tabs-body";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
import Toast from "../../../src/toast";

import Vue from "vue";
import plugin from "../../../src/plugin.js";
Vue.use(plugin);
export default {
  data() {
    return {
      selected: "login",
      user: "",
      password: ""
    };
  },
  components: {
    "pc-button": Button,
    "pc-card": Card,
    "pc-checkbox": Checkbox,
    "pc-input": Input,
    "pc-popover": Popover,

    "pc-tabs": Tabs,
    "pc-tabs-body": TabsBody,
    "pc-tabs-head": TabsHead,
    "pc-tabs-item": TabsItem,
    "pc-tabs-pane": TabsPane,

    "pc-toast": Toast
  },
  methods: {
    login() {
      if (this.user === "" || this.password === "") {
        this.$toast("<strong style='color:#ef5541;'>表单不能为空</strong>", {
          position: "top",
          enableHtml: true
        });
      } else {
        this.$toast(`<strong style='color:#41bc58;'>登录成功，你好 ${this.user} !</strong>`, {
          position: "top",
          enableHtml: true
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 500px;
  height: 500px;
}
.container2 {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 80px;
  z-index: -10;
}

.input {
  margin: 16px;
}
.input .btn {
  margin-right: 50px;
}
.lorem {
  margin-top: 50px;
}
</style>
<style>
.pencil-toast {
  z-index: 300;
}
</style>

