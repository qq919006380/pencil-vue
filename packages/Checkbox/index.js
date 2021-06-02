import Checkbox from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}

// 导出组件
export default Checkbox

