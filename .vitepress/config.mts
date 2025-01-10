import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Wine Project",
  description: "A VitePress Site",

  cleanUrls: true,

  // Set default language to US English.
  lang: "en-US",

  locales: {
    root: {
      label: "English",
      lang: "en",
      dir: "i18n/en",
    },
    fr: {
      label: "French",
      lang: "fr",
      dir: "i18n/fr",
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Explore", link: "/explore" },
      { text: "About", link: "/about" },
    ],

    sidebar: {
      "/explore/": { base: "/explore/", items: sidebarExplore() },
      "/about/": { base: "/about/", items: sidebarAbout() },
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/OpenWineProject" },
    ],

    footer: {
      copyright:
        "Copyright &copy; " + new Date().getFullYear() + " Open Wine Project.",
    },
  },

  mapsConfig: {
    apiKey: "Hello world!",
  },
});

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Open Projects",
      link: "/",
      items: [
        { text: "Cartography", link: "/europe" },
        { text: "Oenology", link: "/" },
        { text: "Ontology", link: "/americas" },
      ],
    },
    {
      text: "Community",
      link: "/community",
    },
    {
      text: "Organization",
      link: "/",
    },
    {
      text: "Contribute",
      link: "/community/contribute",
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
      text: "World Maps",
      link: "/",
      items: [
        { text: "Europe", link: "/europe" },
        { text: "Americas", link: "/americas" },
        { text: "Asia", link: "/asia" },
      ],
    },
    {
      text: "France",
      link: "/france",
      // TODO: What is causing this type check issue?
      // @ts-expect-error
      items: [
        { text: "Bordeaux", link: "/france/bordeaux" },
        { text: "Burgundy (Bourgogne)", link: "/france" },
        { text: "Champagne", link: "/france" },
        { text: "Languedoc-Roussillon", link: "/france" },
        { text: "Loire Valley", link: "/france" },
        { text: "The Rhône Valley", link: "/france" },
        { text: "Alsace", link: "/france" },
        { text: "Savoie and the Jura", link: "/france" },
        ,
      ],
    },
    {
      text: "United States",
      link: "/",
      base: "/explore/united-states",

      items: [
        {
          text: "California",
          link: "/",
          base: "/explore/united-states/california",
          collapsed: true,
          items: [
            {
              text: "North Coast",
              link: "/north-coast",
            },
            {
              text: "Central Coast",
              link: "/central-coast",
            },
            {
              text: "South Coast",
              link: "/south-coast",
            },
          ],
        },
        {
          text: "Washington",
          link: "/united-states/washington",
        },
      ],
    },
  ];
}
