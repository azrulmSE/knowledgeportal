<template>
    <div>
    <v-container fluid grid-list-md>
    <v-layout row wrap justify-space-around>
      <v-flex xs12 sm10 md11>
        <v-card>
          <v-card-title dark>
              EMPLOYEE VALUE PROPOSITION
          </v-card-title>
          <v-card-text style="text-align:justify;">
              One of our efforts to make Celex a distinctive workplace of choice is through strengthening our core brand values.
              In doing so, we have established our Employee Value Proposition (EVP), which is a unique set of offerings that Celex articulates to positively
              influence the most suitables talents and the internal target groups. EVP is what we actually offer, which is a contrary to what we aspire or created
              to offer.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout justify-center wrap>
      <v-flex xs12 sm5 md6>
      <v-card color="blue lighten-2">
        <v-card-actions>
          <v-card-title>
              Working With Thought Leaders of Islamic Finance
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show1" style="text-align:justify;">
            <v-divider></v-divider>
           &emsp;&emsp;Working with Celex means working with the best minds in the industry. We are the pioneer and acknowledged 
                leader of Islamic finance which continue to meet the needs for Shariah compliant financial solutions. It provides great opportunities for ideas sharing
                and knowledge development.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-flex  d-flex xs12 sm5 m6>
      <v-card color="blue lighten-2">
        <v-card-actions>
          <v-card-title>
              Maximising Potential
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show2" style="text-align:justify;">
           &emsp;&emsp;We bring out the best in our people through lifelong and multi-faceted learning approach. We provide a platform
                which allows employee to explore, develop and fulfill their ambitions, both personally and professionally. We go beyond the norm to create a holistic 
                development for our people. 
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    </v-layout>

    <v-layout justify-center wrap>
      <v-flex  d-flex xs12 sm5 md6>
      <v-card color="blue lighten-2">
        <v-card-actions>
          <v-card-title>
              Beyond Work and Life
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show3 = !show3">
            <v-icon>{{ show3 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show3" style="text-align:justify;">
           &emsp;&emsp;We believed in balanced approach to work and life, allowing our employees to grow and benefit both professionally and 
                spiritually. As we grow our businesses, we believe in giving back to the society through various initiatives as it would enables the community to develop further.
                We also recognize the importance of contributing back to the ecosystem we operate in.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-flex  d-flex xs12 sm5 m6>
      <v-card color="blue lighten-2">
        <v-card-actions>
          <v-card-title>
              Living The Universally Accepted Good Values
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show4 = !show4">
            <v-icon>{{ show4 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show4" style="text-align:justify;">
           &emsp;&emsp;At Celex, we believe in living the universally accepted good values. You will discover a workplace that thrives on professionalism,
                integrity, mutual respect and care for each other. We also believe in being inclusive in propagating and practicing these goods values. 
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
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            mode: true
        })
    }
</script>
<style scoped>    
</style>

