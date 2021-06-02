<template>
  <Card>
    <template #header>
      <div>标题一</div>
      <div>
        <Button>按钮</Button>
      </div>
    </template>
    <div v-for="item in list">{{ item }}</div>
  </Card>
  <br />
  <Card>
    <template #header>
      <div>标题一</div>
    </template>
    <div v-for="item in list">{{ item }}</div>
  </Card>

  <br />
  <Card>
    <div v-for="item in list">{{ item }}</div>
  </Card>

  <br />
  <Card header="标题二" elevation="5" class="color" style="background:pink">
    <div v-for="item in list">{{ item }}</div>
  </Card>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";

export default {
  setup() {
    let data = reactive({
      list: ["列表一", "列表二", "列表三"],
    });
    var z = ref("z");

    return {
      ...toRefs(data),
      z,
    };
  },
};
</script>
<style lang="less" scoped>
.color{
  color: #00ffff;
}
  
</style>