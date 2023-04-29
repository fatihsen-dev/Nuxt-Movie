<template>
   <Head v-if="movie">
      <Title>{{ movie.title }} - Nuxt Movie</Title>
   </Head>
   <div class="main">
      <div v-if="movie" class="container">
         <div class="informations">
            <div class="poster">
               <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="" />
            </div>
            <div class="info">
               <h2>{{ movie.title }}</h2>
               <p>{{ movie.overview }}</p>
               <div class="genres">
                  <a
                     v-for="genre in movie.genres"
                     target="_blank"
                     :href="'https://www.imdb.com/search/title/?title_type=feature&genres=' + genre.name"
                  >
                     #{{ genre.name }}
                  </a>
               </div>
               <div class="speak-popularity-vote">
                  <div class="speak">
                     <span>SPEAK</span>
                     <p>{{ movie.spoken_languages[0].name }}</p>
                  </div>
                  <div class="popularity">
                     <span>POPULARITY</span>
                     <p>{{ movie.popularity }}</p>
                  </div>
                  <div class="vote">
                     <span>VOTE</span>
                     <p>{{ movie.vote_count }}</p>
                  </div>
               </div>
               <button><span>Watch The Movie</span></button>
            </div>
         </div>
         <div class="subtitle">
            <p>You won't believe your eyes! Watch our trailer and catch the excitement!</p>
            <hr />
         </div>
         <div class="sliders">
            <Slider :movieId="movie.id" />
         </div>
         <div class="similars">
            <p>Similars</p>
            <SimilarsSlider :movieId="movie.id" />
         </div>
         <div class="similars">
            <p>Credits</p>
            <CreditsSlider :movieId="movie.id" />
         </div>
      </div>
      <footer>
         <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="white"
               />
            </svg>
            2023 Tüm hakları saklıdır. Made with
            <a target="_blank" href="https://www.fatihsen.dev">LEOS</a>.
         </div>
      </footer>
   </div>
</template>

<script setup lang="ts">
import Slider from "~/components/MoviePageSliders/VideosImagesSlider.vue";
import SimilarsSlider from "~/components/MoviePageSliders/SimilarsSlider.vue";
import CreditsSlider from "~/components/MoviePageSliders/CreditsSlider.vue";

import { MovieType } from "~/types/movie";

const config = useRuntimeConfig();
const route = useRoute();
const { movieid } = route.params;

let movie = ref<MovieType & { spoken_languages: Array<{ name: string }>; imdb_id: string; genres: Array<{ id: string; name: string }> }>();
const movieResponse: any = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${config.public.API_KEY}`);
if (movieResponse) {
   movie.value = movieResponse;
}
</script>

<style scoped lang="scss">
.main {
   flex: 1;
   margin-top: 20px;

   & > .container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
      flex-direction: column;
      padding: 20px;
      gap: 10px;
      max-width: 900px;

      & > .informations {
         width: 100%;
         display: flex;
         gap: 30px;

         & > div {
            max-height: 400px;
            margin-bottom: 40px;
            &.poster {
               height: 100%;
               & > img {
                  flex: 1;
                  height: 100%;
                  border-radius: 8px;
               }
            }
            &.info {
               flex: 1;
               display: flex;
               flex-direction: column;
               gap: 10px;

               & > h2 {
                  font-size: 30px;
               }
               & > p {
                  font-size: 16px;
                  color: rgba($color: #fff, $alpha: 0.7);

                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
               }
               & > .genres {
                  display: flex;
                  gap: 8px;
                  margin: 8px 0;

                  & > a {
                     padding: 4px 10px;
                     border-radius: 4px;
                     background-color: #191919;
                     font-size: 14px;
                     color: #04a777;
                     cursor: pointer;
                     transition: 0.15s;
                     user-select: none;

                     &:hover {
                        background-color: rgba($color: #191919, $alpha: 0.8);
                     }
                  }
               }
               & > .speak-popularity-vote {
                  display: grid;
                  background-color: #202020;
                  padding: 16px;
                  border-radius: 6px;
                  gap: 10px;
                  margin-right: auto;
                  grid-template-columns: repeat(3, 100px);

                  & > div {
                     flex: 1;
                     background-color: #191919;
                     padding: 10px;
                     border-radius: 6px;
                     display: flex;
                     flex-direction: column;
                     gap: 8px;

                     & > span {
                        font-size: 10px;
                        color: #04a777;
                        font-weight: 600;
                     }
                     & > p {
                        color: #fff;
                        font-size: 16px;
                        font-weight: 500;
                     }
                  }
               }
               & > button {
                  all: unset;
                  background-color: #04a777;
                  color: #111;
                  margin-right: auto;
                  padding: 8px 18px;
                  border-radius: 10px;
                  margin-top: 10px;
                  font-weight: 500;
                  cursor: pointer;
                  transition: 0.15s;

                  &:hover {
                     background-color: rgba($color: #04a777, $alpha: 0.9);
                  }
               }
            }
         }
      }
      .subtitle {
         margin: 0 auto;
         display: flex;
         flex-direction: column;
         gap: 4px;
         margin-bottom: 30px;
         margin-top: 10px;

         & > p {
            color: #04a777;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 14px;
            text-align: center;
         }
         & > hr {
            border: 1px solid #333;
            border-radius: 2px;
            max-width: 300px;
            width: 100%;
            margin: 0 auto;
         }
      }

      & > .sliders {
         width: 100%;
      }
      & > .images {
         width: 100%;
         max-height: 600px;
         display: flex;
         gap: 10px;

         & > div {
            &:nth-of-type(1) {
               flex: 0.4;
            }
            &:nth-of-type(2) {
               flex: 1;
               position: relative;
               width: 200px;
            }
            & > img {
               width: 100%;
               height: 100%;
               border-radius: 2px;
               object-fit: cover;
            }
         }
      }

      & > .similars {
         max-height: 300px;
         width: 100%;
         display: flex;
         flex-direction: column;
         gap: 10px;
         margin-top: 30px;

         & > p {
            font-size: 30px;
            font-weight: 500;
         }
      }
   }
   & > footer {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
         padding: 20px;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 4px;
         color: rgba($color: #fff, $alpha: 0.7);

         & > a {
            color: #04a777;
            font-weight: 500;
            text-decoration: underline;
         }
      }
   }
}

@media (width <= 705px) {
   .informations {
      flex-direction: column;
      gap: 0 !important;

      & > .poster {
         width: 100%;

         & > img {
            width: 100%;
            object-fit: cover;
         }
      }
      & > .info {
         & > .speak-popularity-vote {
            width: 100%;
            grid-template-columns: repeat(3, 1fr) !important;
         }
         & > button {
            width: 100% !important;
            padding: 10px 0 !important;
            display: flex !important;
            justify-content: center;
            & > span {
               margin: auto;
            }
         }
      }
   }
   footer {
      font-size: 14px;
   }
}
</style>
