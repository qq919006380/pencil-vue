import Popover from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Popover.install = function (Vue) {
  Vue.component(Popover.name, Popover)
}

// 导出组件
export default Popover

