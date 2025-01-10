// maps.d.ts
import "vitepress";

declare module "vitepress" {
  export interface SiteData {
    mapsConfig?: {
      apiKey: string;
      mapDefaults: {
        lat: number;
        lng: number;
        zoom: number;
      };
    };
  }
}
