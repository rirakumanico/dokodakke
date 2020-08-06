<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="primary"
      class="white--text"
    >
      <v-toolbar-title text="dokodakke">
        <span>dokodakke</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; 2020 nico</span>
    </v-footer>


  </v-app>
</template>
