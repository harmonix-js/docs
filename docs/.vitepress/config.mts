import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Harmonix',
  description: 'Next-gen Discord bot Framework',

  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Configuration', link: '/config/', activeMatch: '/config/' },
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
        text: 'Introduction',
        items: [
          { text: 'What is Harmonix?', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' }
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
