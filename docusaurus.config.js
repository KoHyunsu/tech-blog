// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '고봉밥.com',
  tagline: `든든한 한 끼 같은 지식을 모아봅니다`,
  favicon: 'img/gobongbap.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KoHyunsu', // Usually your GitHub org/user name.
  projectName: 'tech-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KoHyunsu/tech-blog/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KoHyunsu/tech-blog/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '고봉밥.com',
        logo: {
          alt: '',
          src: 'img/gobongbap.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'webSidebar',
            position: 'left',
            label: '웹',
          },
          {
            type: 'docSidebar',
            sidebarId: 'infraSidebar',
            position: 'left',
            label: '인프라',
          },
          {
            type: 'docSidebar',
            sidebarId: 'algoSidebar',
            position: 'left',
            label: '알고리즘',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cultureSidebar',
            position: 'left',
            label: '개발문화',
          },
          {to: '/blog', label: '소식', position: 'left'},
          {
            href: 'https://github.com/KoHyunsu',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Service',
            items: [
              {
                label: '구름전자',
                to: '/docs/intro',
              },
              {
                label: '우도땅콩아이스크림 TV',
                to: 'https://www.youtube.com/@udo_peanut_icecream/videos',
              },
            ],
          },
          {
            title: 'Organization',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Hyunsu Ko, Built with Docusaurus.`,
        
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
