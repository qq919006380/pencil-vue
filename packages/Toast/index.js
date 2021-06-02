import createToast from './src/toast.js'

// 导出组件
export default createToast.install = app => {
  app.config.globalProperties.$toast = createToast
}

