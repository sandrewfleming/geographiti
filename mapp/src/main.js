import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.component("GmapMap", {
  /* ... */
});
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDR4_8aAYKK9EZq1BKryXpV95Bv65KgpwA",
    libraries: "places",
    autobindAllEvents: false // This is required if you use the Autocomplete plugin
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

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

new Vue({
  el: "#app",
  data() {
    return {
      currentLocation: { lat: 0, lng: 0 },
      searchAddressInput: ""
    };
  },
  mounted: function() {
    this.geolocation();
  },
  router,
  store,
  props: {
    source: String
  },
  methods: {
    geolocation: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  render: h => h(App)
}).$mount("#app");
