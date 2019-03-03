import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import json from "./mapstyle.json";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#546E7A",
    secondary: "#546E7A",
    accent: "#546E7A",
    error: "#FFD740",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  data: {
    json,
    drawer: true
  },
  props: {
    source: String
  },
  methods: {},
  render: h => h(App)
}).$mount("#app"),
  Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDR4_8aAYKK9EZq1BKryXpV95Bv65KgpwA",
      libraries: "places" // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
      // v: '3.26',
    }

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
  });
