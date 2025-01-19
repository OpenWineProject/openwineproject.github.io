import { DefaultTheme, defineConfig } from "vitepress";
import { Script } from "vm";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Wine Project",
  description: "A VitePress Site",

  cleanUrls: true,

  sitemap: {
    hostname: "https://openwineproject.org",
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'G-422248986', 'auto');
        ga('send', 'pageview');
    `,
    ],
  ],

  // Set default language to US English.
  lang: "en-US",

  locales: {
    root: {
      label: "English",
      lang: "en",
      dir: "i18n/en-US",
    },
    //   fr: {
    //     label: "French",
    //     lang: "fr",
    //     dir: "i18n/fr",
    //   },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Explore", link: "/explore/" },
      { text: "About", link: "/about/" },
    ],

    sidebar: {
      "/explore/": { base: "/explore/", items: sidebarExplore() },
      "/about/": { base: "/about/", items: sidebarAbout() },
    },

    externalLinkIcon: true,

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/OpenWineProject" },
    ],

    footer: {
      message:
        'Released under the <a href="https://raw.githubusercontent.com/OpenWineProject/openwineproject.github.io/refs/heads/main/LICENSE" target="_blank">MIT License</a>.',
      copyright:
        "Copyright &copy; " + new Date().getFullYear() + " Open Wine Project.",
    },
  },

  // mapsConfig: {
  //   apiKey: "Hello world!",
  // },
});

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Open Projects",
      items: [
        { text: "Cartography", link: "/projects/cartography" },
        { text: "Oenology", link: "/projects/oenology" },
        { text: "Ontology", link: "/projects/ontology" },
      ],
    },
    {
      text: "Community",
      link: "#community",
    },
    {
      text: "Contribute",
      link: "#contribute",
    },
  ];
}

/**
 *
 * @returns
 */
function sidebarExplore(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "United States",
      link: "/",
      base: "/explore/united-states",

      items: [
        {
          text: "California",
          link: "/",
          base: "/explore/united-states/california",
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
        },
      ],
    },
  ];
}
