module.exports = {
    title: 'pencil-vue',
    description: '一个手绘风格的UI框架',
    head: [["link", { rel: "icon", href: "/logo.jpg" }]],
    hmr: { overlay: false },
    themeConfig: {
        logo: "/logo.jpg",
        repo: "qq919006380/pencil-vue", // 添加 github 链接
        nav: [{ text: "Home", link: "/" }],
        sidebar: [
            {
                text: "入门",
                children: [
                    { link: "/install/", text: "Hello World" }
                ]
            },
            {
                text: "组件",
                children: [
                    { link: "/components/button", text: "按钮" },
                    { link: "/components/input", text: "输入框" },
                    { link: "/components/card", text: "卡片" },
                    { link: "/components/checkbox", text: "多选框" },
                    { link: "/components/tabs", text: "标签页" },
                    { link: "/components/popover", text: "弹出框" },
                    { link: "/components/toast", text: "消息提示" }
                ]
            },
            {
                text: "例子",
                children: [
                    { link: "/demo/", text: "例子" }
                ]
            }
        ]
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },

        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },

        // config: (md) => {
        //   // use more markdown-it plugins!
        //   md.use()
        // }
    }
}