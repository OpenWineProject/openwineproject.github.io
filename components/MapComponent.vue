<template>
    <div class="map-container">
        <div ref="mapContainer" class="map" id="avas"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useData } from "vitepress";
import * as L from 'leaflet';

export default defineComponent({
  name: "MapComponent",
  props: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    zoom: {
      type: Number,
      default: 13,
    },
    src: {
      type: String
    }
  },
  setup(props) {
    const { site } = useData();
    const mapContainer = ref();

    onMounted(() => {
      const map = L.map(mapContainer.value as unknown as HTMLElement, {
        scrollWheelZoom: false,
      }).setView(
        [props.lat, props.lng],
        props.zoom,
      );

      const attribution = 'Map <a href="/credits#maps">credits</a>.';

      const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution
      }).addTo(map);    

      const OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
          maxZoom: 17,
          attribution
      });  

      const Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution   
      });

      const Esri_WorldPhysical = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 8,
          attribution
      });    

      const baseMaps = {
          "Default": baseLayer,
          "Topography": OpenTopoMap,
          "Sattelite": Esri_WorldImagery,
          "Terrain": Esri_WorldPhysical
      };

      const layerControl = L.control.layers(baseMaps).addTo(map);

      map.on('click', function(e) {
          console.log(e.latlng.lat,e.latlng.lng);
      });


      fetch(props.src)
          .then(response => response.json())
          .then(geojsonFeature => {
              var avas = L.geoJSON(geojsonFeature, {
                  style: function (feature) {
                      return {color: 'purple', weight: .75};
                  }
              }).bindTooltip(function (layer) {
                  return "<b>Name: </b>" + layer.feature.properties.name + "<br><b>Date Created: </b>" + layer.feature.properties.created;
              }).addTo(map);
              
              layerControl.addOverlay(avas, "AVA's").addTo(map);
          });      
    });



    return { mapContainer };
  },
});

    // var map = L.map('avas', {
    //         center: [36.48, -118.66],
    //         zoom: 6,
    //         scrollWheelZoom: false,
    //         fullscreenControl: {
    //             pseudoFullscreen: true
    //         }
    //     });

</script>


<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}

.map {
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>