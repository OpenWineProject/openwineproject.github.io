import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Wine Project",
  description: "A VitePress Site",

  cleanUrls: true,

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

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
      { text: "Explore", link: "/explore/" },
      { text: "Study", link: "/study" },
      { text: "About", link: "/about/" },
    ],

    sidebar: {
      "/explore/": { base: "/explore/", items: sidebarExplore() },
      "/study/": { base: "/sudy/", items: sidebarStudy() },
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
        {
          text: "Washington",
          link: "/united-states/washington",
        },
      ],
    },
  ];
}

function sidebarStudy(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Grapes",
      items: [
        { text: "Albarino", link: "/projects/cartography" },
        { text: "Oenology", link: "/projects/oenology" },
        { text: "Ontology", link: "/projects/ontology" },
      ],
    },
    {
      text: "Vocabulary",
      items: [{ text: "Method Chamaign" }],
    },
    {
      text: "Proccesses",
      items: [{ text: "Method Chamaign" }],
    },
  ];
}
