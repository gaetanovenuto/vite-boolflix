<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js'

export default {
  data() {
    return { 
      store
    }
  },
  // 2) Dichiarazione del componente
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";


</style>
