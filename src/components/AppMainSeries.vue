<script>

import axios from 'axios';
import { store }from '../store.js'

export default {

  
  data() {
    return { 
        store,
        fullUrl: 'https://api.themoviedb.org/3/search/movie'
    }
  },
  components: {
    
  },
  methods: {
    
   
  }
}
</script>

<template>
  <main>
    <ol>
        <h1>Series</h1>
      <li v-for="(serie, index) in store.series" :key="index">
        <img :src="store.imagesURL + 'w342' + serie.poster_path" :alt="serie.title">
        <ul>
          <li>
            Titolo: {{ serie.name }}
          </li>
          <li>
            Titolo originale: {{ serie.original_name }}
          </li>
          <li>
            <img :src="store.languagesURL + store.getRealLang(serie.original_language).toUpperCase() + '/shiny/24.png'" :alt="serie.original_language">
          </li>
          <li>
            Voto: {{ serie.vote_average || 'N/A' }}
            Voto: {{ store.voteStars(serie.vote_average) }}
          </li>
        </ul>
      </li>
    </ol>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>