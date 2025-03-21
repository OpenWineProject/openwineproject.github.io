import { DefaultTheme, defineConfig } from 'vitepress'
import { Script } from 'vm'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Open Wine Project',
  description: 'A VitePress Site',

  // base: "/docs",

  cleanUrls: true,

  sitemap: {
    hostname: 'https://openwineproject.org'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-E3YR8PQHM6",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E3YR8PQHM6');`,
    ],    
  ],

  // Set default language to US English.
  lang: 'en-US',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      dir: 'i18n/en-US'
    },
    fr: {
      label: 'French',
      lang: 'fr',
      dir: 'i18n/fr-FR'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Explore', link: '/explore/' },
      { text: 'About', link: '/about/' }
    ],

    sidebar: {
      '/explore/': { base: '/explore/', items: sidebarExplore() },
      '/about/': { base: '/about/', items: sidebarAbout() }
    },

    externalLinkIcon: true,

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenWineProject' }
    ],

    footer: {
      message:
        'Released under the <a href="https://raw.githubusercontent.com/OpenWineProject/openwineproject.github.io/refs/heads/main/LICENSE" target="_blank">MIT License</a>.',
      copyright:
        'Copyright &copy; ' + new Date().getFullYear() + ' Open Wine Project.'
    }
  }

  // mapsConfig: {
  //   apiKey: "Hello world!",
  // },
})

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Open Projects',
      items: [
        { text: 'Cartography', link: '/projects/cartography' },
        { text: 'Oenology', link: '/projects/oenology' },
        { text: 'Ontology', link: '/projects/ontology' }
      ]
    },
    {
      text: 'Community',
      link: '#community'
    },
    {
      text: 'Contribute',
      link: '#contribute'
    }
  ]
}

/**
 *
 * @returns
 */
function sidebarExplore(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'United States',
      link: '/',
      base: '/explore/united-states',

      items: [
        {
          text: 'California',
          link: '/',
          base: '/explore/united-states/california'
          // collapsed: true,
          // items: [
          //   {
          //     text: "North Coast",
          //     link: "/north-coast",
          //   },
          //   {
          //     text: "Central Coast",
          //     link: "/central-coast",
          //   },
          //   {
          //     text: "South Coast",
          //     link: "/south-coast",
          //   },
          // ],
        }
      ]
    }
  ]
}
