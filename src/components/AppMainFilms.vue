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
        <AppSingleMovieCard />
    </ol>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
    ol {
      padding: 20px;
      margin: 0 auto;
    }

</style>