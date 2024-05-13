import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Harmonix',
  description: 'Next-gen Discord bot Framework',

  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Get Started', link: '/getting-started/', activeMatch: '/getting-started/' },
      { text: 'Configuration', link: '/getting-started/', activeMatch: '/config/' },
      {
        text: '0.0.1',
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
