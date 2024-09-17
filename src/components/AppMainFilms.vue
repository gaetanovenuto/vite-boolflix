<script>

import axios from 'axios';
import { store } from '../store.js'
import AppSingleMovieCard from './AppSingleMovieCard.vue'

export default {

  
  data() {
    return { 
        store,
        
    }
  },
  components: {
    AppSingleMovieCard
  },
  methods: {   
   
  }
}
</script>

<template>
    <ol>
        <h1>Movies</h1>
        <AppSingleMovieCard />
    </ol>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
    h1 {
        color: white;
    }

</style>