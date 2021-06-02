// 导入button组件
import Button from './Button'
import Card from './Card';
import Input from './Input'
import Checkbox from './Checkbox'
import Tabs from './Tabs';
import Tab from './Tab';
import Popover from './Popover';
import Toast from './Toast';


// 组件列表
const components = [
  Button, Input, Card, Checkbox, Tabs, Tab, Popover
]
const plugins = [
  Toast
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => Vue.component(component.name, component))
  plugins.forEach(plugin => Vue.use(plugin))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}