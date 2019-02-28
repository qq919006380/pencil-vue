<template>
    <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'pencil-tabs-body',
    inject: ['eventBus'],
    created(){
    }
  }
</script>

<style>

</style>
