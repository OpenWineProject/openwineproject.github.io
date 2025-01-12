// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

// Customizations
import "leaflet/dist/leaflet.css";
import MapComponent from "../../components/MapComponent.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    router.onAfterRouteChanged = (to) => {
      if (typeof window !== "undefined" && window.ga) {
        window.ga("set", "page", to);
        window.ga("send", "pageview");
      }
    };

    app.component("MapComponent", MapComponent);
  },
} satisfies Theme;
