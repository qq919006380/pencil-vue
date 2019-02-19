module.exports = {
    base: '/wired-vue/', 
    title: 'wired-vue',
    description: '一个简单的UI框架',
    themeConfig: {
      repo: 'qq919006380/wired-vue', // 添加 github 链接
      nav: [
        {text: '主页', link: '/'},
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
            ['/components/card','card'],
            ['/components/checkbox','checkbox'],
            ['/components/popover','popover'],
          ]
        },
  
      ]
    }
  } 