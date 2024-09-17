<script>

import axios from 'axios';
import { store } from '../store.js'

export default {

  
  data() {
    
    return { 
      store
    }
  },
  methods: {
    performSearch() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchText,

          }
        })
        .then((res) => {
        this.store.movies = res.data.results;
       }
      )
    }
  }
}
</script>

<template>
  <header>
    <div class="row navbar">
      <div class="general-navigation">
        <div class="row primary-navigation">
          <div class="col-2">
            <a href="https://www.netflix.com/browse">
              <img src="/logo/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png" alt="Netflix">
            </a>  
          </div>
          <div class="col-10">
            <ul class="nav-menu">
              <li class="nav-item">
                <a href="https://www.netflix.com/browse">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.netflix.com/browse/genre/83">
                  Serie TV
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.netflix.com/browse/genre/34399">
                  Film
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.netflix.com/latest">
                  Nuovi e popolari
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.netflix.com/browse/my-list">
                  La mia lista
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.netflix.com/browse/original-audio">
                  Sfoglia per lingua
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row secondary-navigation">
          <div class="nav-element">
            <input v-model="store.searchText" type="text" class="searchbox" id="searchBox">
              <button @click="performSearch()" class="searchbar" id="searchIcon">              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="MagnifyingGlassStandard" aria-hidden="true" class="search-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path>
                </svg>
              </button>
          </div>
          <div class="nav-element">
            <a href="https://www.netflix.com/Kids">
              Bambini
            </a>
          </div>
          <div class="nav-element">
            <button class="notifications-menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="BellStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>
            </button>
          </div>
          <div class="nav-element">
            <a href="#" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="false">
              <span class="profile-link" role="presentation">
                <img class="profile-icon" src="https://occ-0-3147-2582.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="">
              </span> 
              <span class="caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
              </span>       
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </header>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  background-color: black;
  text-align: center;
  padding: 0px 30px;

  .navbar {
    display: flex;
    justify-content: space-between;
  }

  .general-navigation {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .primary-navigation {

      a {
        img {
          height: 50px;      
        }
      }

    .nav-menu {
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      list-style-type: none;
      

      .nav-item {
        font-weight: 400;
        font-size: 15px;
        padding: 0 10px;
        a {
          text-decoration: none;
          color: white;

          &:hover {
          color: #aaaaaa;
          transition: color .2s;
        }
        }
      }
    }
    }

    .secondary-navigation {

      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-element {
        width: auto;
        padding: 0 5px;
      }

      * {
        margin: 0 3px;

        &:hover {
          color: #868686;
          transition: color .4s;
        }
      }

      .searchbar, .notifications-menu {
        background: none;
        border: none;
        color: white;
      }

      .searchbar {

        .searchbox {
          background-color: black;
          border: 1px solid white;
          border-radius: 5px;
          box-shadow: none;
          margin: 0 10px;

          &:focus {
            cursor: text;
          }
        }
      }

      a {
        text-decoration: none;
        color: white;
      } 
      
      
    }
  }

  
}
</style>
