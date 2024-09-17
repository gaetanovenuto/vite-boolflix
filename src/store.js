import { reactive } from 'vue';
import axios from 'axios'

export const store = reactive({

    // DATA 
    apiKey: 'a05bb6b751accfd07827ee4677103b35', // Api Key personale DB Movie
    searchText: '', // Stringa vuota v-model per la ricerca
    movies: [], // Array vuota da riempire con i dati della chiamata API per i FILM
    series: [], // Array vuota da riempire con i dati della chiamata API per le SERIE TV
    languagesURL: 'https://flagsapi.com/', // URL Base API Bandiere
    imagesURL: 'https://image.tmdb.org/t/p/', // URL Base Poster Generator

    // METHODS 
    performSearch() {
        axios
          .get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: this.apiKey,
              query: this.searchText,
  
            }
          })
          .then((res) => {
          this.movies = res.data.results;

          console.log(res.data.results)
         }
        );
  
        axios
          .get('https://api.themoviedb.org/3/search/tv', {
            params: {
              api_key: this.apiKey,
              query: this.searchText,
  
            }
          })
          .then((res) => {
          this.series = res.data.results;
         }
        );
        }, // Funzione per ricercare all'interno del database inserendo qualcosa nell'input di ricerca
    getRealLang(lang) {

    if (lang == 'en') {
        return 'gb';
    }
    else if (lang == 'ja') {
            return 'jp';  
    }
    else if (lang == 'el') {
            return 'il';  
    }
    else if (lang == 'ko') {
            return 'kr';  
    }
    else if (lang == 'cs') {
            return 'cz';  
    }
    else if (lang == 'ta') {
            return 'th';  
    }
    else if (lang == 'hi') {
            return 'in';  
    }
    else if (lang == 'zh') {
            return 'cn';  
    }
    else if (lang == 'sq') {
            return 'lt';  
    }
    else if (lang == 'ur') {
            return 'pk';  
    }
    else {
        return lang;
    }
        }, // Funzione per far apparire la bandiera esatta a partire dal codice fornito dall'API DB Movie
    voteStars(vote) {
        
        return Math.ceil(vote / 2)
    }
});