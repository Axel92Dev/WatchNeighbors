<template>
  <div id="map" v-if="isNavigatorAvailable" ></div>
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
  props: ['apiKey', 'lat', 'lng'],
  data() {
    return {
      map: {}
    };
  },
  mounted() {
    // `this` points to the vm instance
    console.log('Mounted GMAP ', this.apiKey, this.lat, this.lng, this);
    GoogleMapsLoader.KEY = this.apiKey;
    GoogleMapsLoader.load((google) => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: this.lat, lng: this.lng }
      });S
    });
  },
  computed: {
    isNavigatorAvailable: () => {
      console.log('Hola navigator', navigator.geolocation);
      return navigator.geolocation;
    },
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
