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
        <h1>Films</h1>
        <li v-for="(movie, index) in store.movies" :key="index">
            <img :src="store.imagesURL + 'w342' + movie.poster_path" :alt="movie.title">
            <ul>
                <li>
                    Titolo: {{ movie.title }}
                </li>
            <li>
                Titolo originale: {{ movie.original_title }}
            </li>
            <li>
                <img :src="store.languagesURL + store.getRealLang(movie.original_language).toUpperCase() + '/shiny/24.png'" :alt="movie.original_language">
            </li>
            <li>
                Voto: {{ movie.vote_average || 'N/A' }}
                Voto: {{ store.voteStars(movie.vote_average) }}
            </li>
            </ul>
        </li>
    </ol>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>