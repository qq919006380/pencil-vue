<template>
  <div>
    <div>
      外面的flag：{{ flag }}
      <Button @click="on">切换</Button>
    </div>
    <Checkbox v-model="flag">x</Checkbox>
    <Checkbox v-model="flag">x</Checkbox>
    <Checkbox v-model="flag1">x</Checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      flag1:false
    };
  },
  methods: {
    on() {
      this.flag = !this.flag;
    },
  },
};
</script>