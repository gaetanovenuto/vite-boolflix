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
        <AppSingleSerieCard />
    </ol>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
    ol {
      padding: 0;
      margin: 0 auto;
    }
</style>