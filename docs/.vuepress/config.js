module.exports = {
    // base: '/pencil-vue/', 
    title: 'pencil-vue',
    description: '一个手绘风格的UI框架',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
      logo: '/logo.png',
      repo: 'qq919006380/pencil-vue', // 添加 github 链接
      nav: [
        {text: '主页', link: '/'},
      ],
      sidebar: [
        {
          title: '入门',
          collapsable: false,
          children: [
            ['/install/','Hello World'],
            // ['/get-started/','快速上手'],
          ]
        },
        {
          title: '组件',
          children: [
            ['/components/button','button'],
            ['/components/input','input'],
            ['/components/card','card'],
            ['/components/checkbox','checkbox'],
            ['/components/tabs','tabs'],
            ['/components/popover','popover'],
            ['/components/toast','toast'],
          ]
        },
  
      ]
    }
  } 