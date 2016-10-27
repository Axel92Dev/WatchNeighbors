<template>
  <div id="map" v-if="isNavigatorAvailable"></div>
  <div id="noPosition" v-else>Cannot find position</div>
 
</template>


<script>
/*eslint-disable */
//   let marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
import GoogleMapsLoader from 'google-maps';
export default {
  name: 'gmap',
  props: ['apiKey', 'center', 'lat', 'lng'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js Ap, keep waiting and it will transform!',
      map: {}
    };
  },
  mounted() {
    // `this` points to the vm instance
    GoogleMapsLoader.KEY = this.apiKey;
    console.log(this.apiKey, this.lat, this.lng, this);
    GoogleMapsLoader.load((google) => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: this.lat, lng: this.lng }
      });
    });
  },
  computed: {
    isNavigatorAvailable: () => {
      return navigator.geolocation;
    },
    updateCenter() {
      console.log('update center: ', this.lat, this.lng, this);
      this.map.setCenter(this.lat, this.lng);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
          height: 100%; 
  width: 100%; 
  position:absolute; 
  top: 0; 
  left: 0; 
  z-index: 0; /* Set z-index to 0 as it will be on a layer below the contact form */
       }

</style>
