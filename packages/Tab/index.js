import Tab from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}

// 导出组件
export default Tab

