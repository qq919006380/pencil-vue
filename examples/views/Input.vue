<template>
  <div>
    <input v-model="text" type="text" />
    <Input v-model="text" @focus="focus"></Input>
    <Input v-model="text"></Input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "xx",
    };
  },
  methods: {
    focus(){
        console.log(2);
    }
  },
};
</script>
