import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Starter Journey',
  tagline: 'Your step-by-step guide to get started on Databricks',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://databricks-solutions.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/starter-journey/',

  // GitHub pages deployment config
  organizationName: 'databricks-solutions',
  projectName: 'starter-journey',

  onBrokenLinks: 'throw',

  plugins: [
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        searchResultLimits: 15,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/databricks-solutions/starter-journey/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/databricks-solutions/starter-journey/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      title: 'Starter Journey',
      logo: {
        alt: 'Starter Journey Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'left',
          label: 'Get Started',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/databricks-solutions/starter-journey',
          label: 'GitHub',
          position: 'right',
          className: 'navbar-item-github',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Get Started', to: '/docs/get-started'},
            {label: 'Blog', to: '/blog'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Databricks', href: 'https://www.databricks.com/'},
            {label: 'GitHub', href: 'https://github.com/databricks-solutions/starter-journey'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Databricks. Starter Journey - Get started on Databricks.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
