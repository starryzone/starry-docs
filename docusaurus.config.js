// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'starrybot documentation',
  tagline: 'Cosmos token gating made for you',
  url: 'https://docs.starrybot.xyz',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://starrybot.xyz/favicon.ico',
  organizationName: 'starryzone',
  projectName: 'starry-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/starryzone/starry-docs',
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
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'starrybot',
        logo: {
          alt: 'starrybot logo',
          src: 'https://starrybot.xyz/starrybot.png',
        },
        items: [
          {
            href: 'https://starrybot.xyz',
            label: 'Add the bot!',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect with humanity',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/BqjEhWzJKU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/starrystarrybot',
              },
            ],
          },
          {
            title: 'Moar',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@starrystarrybot',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
