import Tabs from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
}

// 导出组件
export default Tabs

