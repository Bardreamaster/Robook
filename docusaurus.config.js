// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robook',
  tagline: 'Robotics in SUSTech',
  url: 'https://bardreamaster.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bardreamaster', // Usually your GitHub org/user name.
  projectName: 'Robook', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: 'blog',
          blogTitle: '博客标题',
          blogDescription: '博客',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有文章',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          //remarkPlugins: [require('remark-math')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          // feedOptions: {
          //   type: '',
          //   title: '',
          //   description: '',
          //   copyright: '',
          //   language: 'zh',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Robook',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'handbook/intro_handbook',
            position: 'left',
            label: '机器人手册',
          },
          {
            type: 'doc',
            docId: 'resources/intro_res',
            position: 'left',
            label: '资源分享',
          },
          { 
            type: 'dropdown',
            to: '/blog', 
            label: '博客', 
            position: 'left',
            items: [
              {
                label: '所有文章',
                to: '/blog/',
              },
              {
                label: '标签',
                to: '/blog/tags',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'about/aboutRobook',
            position: 'left',
            label: '关于本站',
          },
          {
            href: 'https://github.com/bardreamaster/robook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: '机器人手册',
          //   items: [
          //     {
          //       label: '机器人手册',
          //       to: '/docs/handbook/intro_handbook',
          //     },
          //   ],
          // },
          // // {
          // //   title: 'Community',
          // //   items: [
          // //     {
          // //       label: 'Stack Overflow',
          // //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          // //     },
          // //     {
          // //       label: 'Discord',
          // //       href: 'https://discordapp.com/invite/docusaurus',
          // //     },
          // //     {
          // //       label: 'Twitter',
          // //       href: 'https://twitter.com/docusaurus',
          // //     },
          // //   ],
          // // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/bardreamaster/robook',
          //     },
          //   ],
          // },
          {
            html:` <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
            <span id="busuanzi_container_site_pv" style='display:none'>本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>`,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robook.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          //'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/oooxWHITE.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0, 63, 67)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/oooxWHITE.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/oooxWHITE.svg',
            color: 'rgb(0, 63, 67)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/oooxWHITE.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
