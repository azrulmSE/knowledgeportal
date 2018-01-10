<template>
  <!-- <div> -->
<v-layout row justify-space-around>
    <v-flex xs12 sm10 md10>
      <v-card>
                <gmap-map
            :center="center"
            :zoom="17"
            :options={fullscreenControl:false,zoomControl:false,streetViewControl:false}
            style="width: 100%; height: 300px;"
        >
            <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" style="align-text:center;">Contact Us</h3>
            <div>
              Celex Media Sdn Bhd <br>
              2-1 Incubator 2,<br> Technology Park Malaysia,<br> Bukit Jalil,<br> 57000 Kuala Lumpur,<br> Federal Territory of Kuala Lumpur <br>
              www.celex.com.my <br>
              Phone No.: 603-8996-3033

            </div>
          </div>
        </v-card-title>
        
      </v-card>
    </v-flex>
  </v-layout>
  <!-- </div> -->
</template>

<script>
export default {
    data () {
      return {
        center: {lat: 3.046893, lng:101.691382},
        markers: [{
          position: {lat: 3.046893, lng: 101.691382}
        }]
      }
    }
}
</script>

<style>

</style>
