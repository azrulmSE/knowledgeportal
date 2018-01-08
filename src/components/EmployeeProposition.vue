<template>
    <div>
    <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs10 offset-xs1 child-flex>
        <v-card color="green lighten-2" dark>
          <v-card-title>
              EMPLOYEE VALUE PROPOSITION
          </v-card-title>
          <v-card-text style="text-align:justify;">
              One of our efforts to make Bank Islam a distinctive workplace of choice is through strengthening our core brand values.
              In doing so, we have established our Employee Value Proposition (EVP), which is a unique set of offerings that Bank Islam articulates to positively
              influence the most suitables talents and the internal target groups. EVP is what we actually offer, which is a contrary to what we aspire or created
              to offer.
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- <v-flex d-flex ms12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-text
            v-text="lorem.slice(0, 100)">
          </v-card-text>
        </v-card>
      </v-flex> -->
      <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-actions>
          <v-card-title>
              Working With Thought Leaders of Islamic Finance
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show" style="text-align:justify;">
           &emsp;&emsp;Working with Bank Islam means working with the best minds in the industry. We are the pioneer and acknowledged 
                leader of Islamic finance which continue to meet the needs for Shariah compliant financial solutions. It provides great opportunities for ideas sharing
                and knowledge development.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
            show: false
        })
    }
</script>
<style scoped>    
</style>

