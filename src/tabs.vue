<template>
   <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
 import Vue from 'vue'
  export default {
    name: 'pc-tabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      checkChildren () {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
        }
      },
      selectTab () {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'pc-tabs-head') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'pc-tabs-item'
                && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted () {
      this.checkChildren();
      this.selectTab();
    }
  }
</script>

<style>
</style>
