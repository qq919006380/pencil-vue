import Card from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

// 导出组件
export default Card