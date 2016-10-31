<template>
  <div id="app">
    <gmap :lat="lat" :lng="lng" :api-key="gmapKey"></gmap>
  </div>
</template>

<script>
/* global document, navigator, alert */
/*eslint-disable */
import Gmap from './components/Gmap';
import LocalStore from './LocalStore';
let OGG = {lat: 7, lng: 40};

export default {
  name: 'app',
  data() {
    return {
      gmapKey: 'AIzaSyDdVmOggLuEPYN-m5_k5vAMA8JmmKB1iD0',
      lat: OGG.lat,
      lng: OGG.lng,
    };
  },
  computed: {},
  components: {
    Gmap,
  },
  watch: {
    lat: {
      handler: function(latP) {
        console.log('update center: ', latP, this);
        this.map.setCenter({ lat: latP, lng: this.lng });
      },
      deep: true,
    },
  },
};

navigator.geolocation.watchPosition(function (position) {
  console.log(position);
  console.log('LocalStore previous val: ', OGG);
  OGG.lat = position.coords.latitude;
  OGG.lng = position.coords.longitude;
  console.log('LocalStore now: ', OGG);
  // Gmap.updateCenter(position.coords.latitude, position.coords.longitude);
  },
  function (error) {
    alert(error);
  },
  {
    enableHighAccuracy: true,
    timeout: 7000,
  });


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
