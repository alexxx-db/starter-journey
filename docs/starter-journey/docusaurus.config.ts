import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Starter Journey',
  tagline: 'Accelerate your first Databricks MVP',
  favicon: 'img/icon.ico',

  url: 'https://github.com',
  baseUrl: '/starter-journey/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // let's try a push
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'databricks-solutions', // Usually your GitHub org/user name.
  projectName: 'starter-journey', // Usually your repo name.
  deploymentBranch: 'github-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    async (context, options) => {
      return {
        name: "docusaurus-plugin-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [
            require('tailwindcss'),
            require('autoprefixer'),
          ];
          return postcssOptions;
        },
      }
    },
    //'docusaurus-plugin-image-zoom',
    //'docusaurus-lunr-search'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          // routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Starter Journey',
      logo: {
        alt: 'Databricks Logo',
        src: 'img/databricks.ico',
      },
      items: [
        {
          href: 'https://github.com/databricks-solutions/starter-journey',
          position: 'right',

          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }

      ],
    },
    footer: {
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Databricks Shared Technical Services (STS). Docs built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
    zoom: {
      selector: 'article img',
      background: {
        light: '#F8FAFC',
        dark: '#F8FAFC',
      },
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
