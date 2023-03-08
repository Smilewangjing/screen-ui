import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'screen-ui',
    description: '大屏组件库',
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
            { text: '组件', link: '/component/icon', activeMatch: '/component/' }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [
                        { text: '安装', link: '/guide/installation' },
                        { text: '快速开始', link: '/guide/quickStart' }
                    ]
                }
            ],
            '/component/': [
                {
                    text: '基础组件',
                    items: [{ text: 'Icon', link: '/component/icon' }]
                }
            ]
        }
    }
});
