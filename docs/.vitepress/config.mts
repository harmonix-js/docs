import { defineConfig } from 'vitepress'

const pkg = await (await fetch('https://registry.npmjs.org/@harmonix-js%2fcore')).json()

export default defineConfig({
  title: 'Harmonix',
  description: 'Next-gen Discord bot Framework',

  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Get Started', link: '/getting-started/', activeMatch: '/getting-started/' },
      { text: 'Usage', link: '/usage/commands', activeMatch: '/usage/'},
      {
        text: pkg['dist-tags'].latest,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/harmonix-js/core/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/harmonix-js/core/blob/main/.github/contributing.md'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Introduction', link: '/getting-started/' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Configuration', link: '/getting-started/configuration' }
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Commands', link: '/usage/commands' },
          { text: 'Events', link: '/usage/events' },
          { text: 'Context Menus', link: '/usage/context-menus' },
          { text: 'Preconditions', link: '/usage/preconditions' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/A3rVnG4JGV' },
      { icon: 'github', link: 'https://github.com/harmonix-js/core' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Harmonix © 2024-present nethriis'
    }
  }
})
