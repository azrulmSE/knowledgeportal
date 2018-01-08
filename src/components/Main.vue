<template>
  <div>
    <v-layout>
    <v-flex xs10 offset-xs1>
      <v-card>
        <v-card-media 
        :src="getImgUrl('bank_islam.jpg')" 
        height="200px">
        </v-card-media>
        <!-- <v-parallax 
        src="./../../static/img/bank_islam.jpg"
        ></v-parallax> -->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Bank Islam</h3>
            <div style="text-align:justify">&emsp;&emsp;Bank Islam is the first Shariah based banking institution in Malaysia and South East Asia; and has been playing the leading role in the development of the nation’s Islamic banking industry. In fact, it has provided technical
                            assistance in the setting up of several Islamic institutions in the Asian region such as Indonesia, Thailand and Sri Lanka. Incorporated in 1983, it was originally established with the sole purpose of assisting with the financial
                            needs of the Muslim population of Malaysia. Since then, Bank Islam has extended its services to the wider, non-Muslim, population fulfilling its “Banking-for-All” principle.
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    },
    methods: {
        getImgUrl (img) {
            // return require('../assets/img/' + img)
            return require('./../../static/img/' + img)
        }
    }
  }
</script>

<style>

</style>
