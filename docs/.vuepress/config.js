module.exports = {
  // base: '/pencil-vue/',
  title: "pencil-vue",
  description: "一个手绘风格的UI框架",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  themeConfig: {
    logo: "/logo.jpg",
    repo: "qq919006380/pencil-vue", // 添加 github 链接
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: [
          ["/install/", "Hello World"]
          // ['/get-started/','快速上手'],
        ]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          ["/components/button", "button"],
          ["/components/input", "input"],
          ["/components/card", "card"],
          ["/components/checkbox", "checkbox"],
          ["/components/tabs", "tabs"],
          ["/components/popover", "popover"],
          ["/components/toast", "toast"]
        ]
      },
      {
        title: "例子",
        // collapsable: false,
        children: [
          ["/demo/", "Demo"]
          // ['/get-started/','快速上手'],
        ]
      }
    ]
  }
};
