module.exports = {
    base: '/wired-vue/', 
    title: 'vue组件',
    description: '一个简单的UI框架',
    themeConfig: {
      nav: [
        {text: '主页', link: '/'},
        {text: '文档', link: '/guide/'},
      ],
      sidebar: [
        {
          title: '入门',
          children: [
            ['/install/','安装'],
            ['/get-started/','快速上手'],
          ]
        },
        {
          title: '组件',
          children: [
            ['/components/button','button'],
            ['/components/input','input'],
          ]
        },
  
      ]
    }
  } 