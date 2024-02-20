import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yunchuan",
  description: "A VitePress Site",
  base: "/myBlog/", // github库的名字
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前端物语', 
        items: [
        { text: 'JavaScript', link: '/markdown-examples' },
        { text: 'Vue', link: '/markdown-examples' },
        { text: 'React', link: '/markdown-examples' },
        { text: 'TypeScript', link: '/markdown-examples' },
        ]
      },
      { text: 'workflow', 
        items: [
        { text: '编程规范', link: '/markdown-examples' },
        { text: 'Dayjs使用技巧', link: '/markdown-examples' },
        { text: 'Sass', link: '/markdown-examples' },
        { text: 'Eslint配置', link: '/markdown-examples' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: "copyright@ 2024 yunchaun"
    },
    logo: "/orange.svg", // 配置logo位置，public目录
    search: {
      provider: 'local'
    },
  }
})
