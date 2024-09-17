<script>

import axios from 'axios';
import AppMainFilms from './AppMainFilms.vue'
import AppMainSeries from './AppMainSeries.vue'
import { store }from '../store.js'

export default {

  
  data() {
    return { 
        store,
    }
  },
  components: {
    AppMainFilms,
    AppMainSeries
  },
  methods: {
    
   
  }
}
</script>

<template>
  <main>
    <AppMainFilms />
    <AppMainSeries />
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>