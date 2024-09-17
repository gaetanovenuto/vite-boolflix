<script>

import axios from 'axios';
import AppHeader from './AppHeader.vue'
import { store }from '../store.js'

export default {

  
  data() {
    return { 
        store,
        fullUrl: 'https://api.themoviedb.org/3/search/movie'
    }
  },
  components: {
    AppHeader
  },
  methods: {
    getFlag(language) {
        const changedLangs = {
            
        }
    }
   
  }
}
</script>

<template>
  <main>
    <ol>
      <li v-for="(movie, index) in store.movies" :key="index">
        <ul>
          <li>
            Titolo: {{ movie.title }}
          </li>
          <li>
            Titolo originale: {{ movie.original_title }}
          </li>
          <li>
            <img :src="store.languagesURL + movie.original_language.toUpperCase() + '/shiny/64.png'">
            Lingua: {{ movie.original_language }}
          </li>
          <li>
            Voto: VOTO
          </li>
        </ul>
      </li>
    </ol>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>