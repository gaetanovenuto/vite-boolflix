<script>

import axios from 'axios';
import { store }from '../store.js'


export default {

  
  data() {
    return { 
        store,
        
    }
  },
  components: {
    
  },
  methods: {   
   
  }
}
</script>

<template>
    <div class="row flex-wrap w-100">
        <h1 :class="store.movies != '' ? '' : 'd-none' ">Movies</h1>
        <li v-for="(movie, index) in store.movies" :key="index" class="col-2 card-container">
            <img :src="store.imagesURL + 'w342' + movie.poster_path" :alt="movie.title" class="poster-path">
            <ul class="general-info">
                <li class="info-title">
                    <strong>Titolo:</strong> {{ movie.title }}
                </li>
                <li class="info-original">
                    <strong>Titolo originale:</strong> {{ movie.original_title }}
                </li>
                <li class="flag">
                    <img :src="store.languagesURL + store.getRealLang(movie.original_language).toUpperCase() + '/shiny/24.png'" :alt="movie.original_language">
                </li>
                <li class="valutation">
                    <svg
                        v-for="(star, index) in 5" :key="index" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" :class="index <= store.voteStars(movie.vote_average) - 1 ? 'bi-star-fill' : 'bi-star' " viewBox="0 0 16 16">
                        <path v-if="index <= store.voteStars(movie.vote_average) - 1" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        <path v-else d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>
                </li>
                <p class="overview">
                    {{ movie.overview }}
                </p>
            </ul>
        </li>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
    * {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }


    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }


    ::-webkit-scrollbar-thumb {
        background: #888; 
    }


    ::-webkit-scrollbar-thumb:hover {
        background: #a89a9a; 
    }

    h1 {
        color: white;
    }

    .card-container { 
        padding: 25px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        position: relative;
        gap: 50px;
        margin-bottom: 50px;
        cursor: pointer;
        

        &:hover .poster-path {
            filter: brightness(0.3);
            
        }

        &:hover .general-info {
            opacity: 1;
        }

        .poster-path {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 10px;   
        }

        .general-info {
            width: 85%;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.7); 
            color: white;
            text-align: center;
            transition: opacity 0.3s ease-in-out; 
            padding: 0;
            margin: 0 auto;


            li {
                padding-top: 10px;
            }

            .overview {
                font-size: 14px;
                text-align: center;
                width: 80%;
                padding-top: 15px;
                max-height: 150px;
                overflow-y: auto;
            }
        }
    }
</style>