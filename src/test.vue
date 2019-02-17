<template>
  <div>
    test:
    <input type="text" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    
  }
};
</script>

<style>
</style>
