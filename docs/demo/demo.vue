<template  >
  <Tabs v-model="activeName">
    <Tab title="登录">
      <div>
        账号：
        <Input v-model="user"></Input>
      </div>
      <br />
      <div>
        密码：
        <Input v-model="password"></Input>
      </div>
      <br />
      <Button @click="login" class="btn">登录</Button>
      <Popover position="right" trigger="hover">
        <template #content>不是自己的电脑不要勾选此选项</template>
        <Checkbox v-model="checked">记住我</Checkbox>
      </Popover>

      <br />
      <br />
      <Card>
        <div v-for="item in 3">
          <a>列表内容{{ item }}</a>
        </div>
      </Card>
    </Tab>
    <Tab title="注册">
      <div>
        账号：
        <Input v-model="user"></Input>
      </div>
      <br />
      <div>
        密码：
        <Input v-model="password"></Input>
      </div>
      <br />
      <div>
        手机：
        <Input v-model="phone"></Input>
      </div>
      <br />
      <Button class="btn">注册</Button>
    </Tab>
  </Tabs>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      phone: "",
      activeName: "登录",
    };
  },
  methods: {
    login() {
      let message;
      if (this.user && this.password) {
        message = "<strong class='success'>登录成功</strong>";
      } else {
        message = "<strong class='error'>表单内容不能为空</strong>";
      }

      this.$toast(message, {
        enableHtml: true,
        showClose: true,
      });
    },
  },
};
</script>
<style >
.btn {
  margin-right: 45px;
}
.error {
  color: #ef5541;
}
.success {
  color: #41bc58;
}
</style>