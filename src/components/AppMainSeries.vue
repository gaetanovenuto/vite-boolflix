<script>

import axios from 'axios';
import { store } from '../store.js'
import AppSingleSerieCard from './AppSingleSerieCard.vue'

export default {

  
  data() {
    return { 
        store,
        
    }
  },
  components: {
    AppSingleSerieCard
  },
  methods: {   
   
  }
}
</script>

<template>
  <main>
    <ol>
        <h1>Series</h1>
        <AppSingleSerieCard />
    </ol>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
  h1 {
      color: white;
  }
</style>