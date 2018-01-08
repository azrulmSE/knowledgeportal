<template>
  <v-app id="app">
    <v-navigation-drawer
      fixed
      clipped
      temporary
      v-model="drawer"
      app
    >
    <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Knowledge Portal Links
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/" >Home</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <!-- <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action> -->
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="employeeproposition" >Employee Value Proposition</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <!-- <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action> -->
        </v-list-tile>
         <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="codeethics" >Code of Ethics</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <!-- <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action> -->
        </v-list-tile>
         <v-list-tile>
          <v-list-tile-action>
            <v-icon>contacts</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
               <router-link to="contact" active>Contact</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <!-- <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action> -->
        </v-list-tile>
         <v-list-tile>
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="signin" active>Sign In</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <!-- <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action> -->
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title row justify-center >Knowledge Portal</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
        >
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer clipped color="indigo" app>
      <span class="white--text">&copy; 2017 Copyright</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
<style scoped>
 li a {
    text-decoration: none;
    }
</style>
