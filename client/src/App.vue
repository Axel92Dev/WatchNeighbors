<template>
  <div id="app">
    <gmap :center="storedCenter" :lat="lat" :lng="lng" :api-key="gmapKey"></gmap>
  </div>
</template>

<script>
/* global document, navigator, alert */
import Gmap from './components/Gmap';
import LocalStore from './LocalStore';

console.log(LocalStore);

export default {
  name: 'app',
  data() {
    return {
      gmapKey: 'AIzaSyDdVmOggLuEPYN-m5_k5vAMA8JmmKB1iD0',
      storedCenter: LocalStore.storedCenter,
      lat: LocalStore.lat,
      lng: LocalStore.lng,
    };
  },
  computed: {},
  components: {
    Gmap,
  },
};

navigator.geolocation.watchPosition(position =>
  LocalStore.updateStoredCenter.call(LocalStore, position),
  (error) => {
    alert(error);
  }, {
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
