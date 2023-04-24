<template>
   <div class="searchbox">
      <Combobox v-model="movies">
         <ComboboxInput placeholder="Search Movie..." @change="inputHandle" />
         <ComboboxOptions>
            <ComboboxOption v-for="movie in movies" :key="movie.id" :value="movie">
               <NuxtLink :to="'/movies/' + movie.id">
                  <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'https://placehold.co/40x80'" />
                  <div>
                     <p>{{ movie.title }}</p>
                     <div>
                        <span>{{ formatDate(movie.release_date) }}</span>
                        <span>{{ movie.popularity }}</span>
                     </div>
                  </div>
               </NuxtLink>
            </ComboboxOption>
            <li v-if="movies.length === 0"><span>Film not found</span></li>
         </ComboboxOptions>
      </Combobox>
   </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
import { ResultType, MovieType } from "@/types/movie";
import { ref } from "vue";
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from "@headlessui/vue";

let movies = ref<Array<MovieType>>([]);

const inputHandle = async (e: any) => {
   const response: ResultType = await $fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${config.public.API_KEY}&query=${e.target.value}`
   );
   if (response) {
      const firstFiveMovie = response.results.slice(0, 15);
      movies.value = firstFiveMovie;
   }
};
</script>

<style lang="scss" scoped>
.searchbox {
   position: relative;
   margin-left: 30px;

   input[type="text"] {
      background-color: #0a0a0a;
      border: none;
      color: #fff;
      font-size: 18px;
      padding: 4px 6px;
      font-weight: 300;
      border-radius: 3px;
      width: 300px;
      &::placeholder {
         color: #fff;
         opacity: 0.4;
         font-size: 16px;
      }
      &:focus {
         border-radius: 3px 3px 0 0;
      }
   }
   & > ul {
      position: absolute;
      background-color: #fff;
      color: #0a0a0a;
      width: 100%;
      padding: 10px;
      gap: 4px;
      display: flex;
      flex-direction: column;
      border-radius: 0 0 3px 3px;
      max-height: 500px;
      height: auto;
      overflow: auto;

      &::-webkit-scrollbar {
         width: 8px;
      }
      &::-webkit-scrollbar-track {
         background-color: #ddd;
      }
      &::-webkit-scrollbar-thumb {
         background: #00dc82;
      }

      & > li {
         border: none;
         background-color: transparent;
         text-align: start;
         font-size: 16px;
         width: 100%;
         padding: 4px;
         background-color: rgba($color: #00dc82, $alpha: 0.2);
         transition: 0.15s;
         border-bottom: 1px solid rgba($color: #00dc82, $alpha: 0.5);

         &:hover {
            background-color: rgba($color: #00dc82, $alpha: 0.3);
         }

         & > a {
            display: flex;
            gap: 6px;

            & > img {
               height: 50px;
               width: 35px;
               object-fit: cover;
            }
            & > div {
               flex: 1;
               display: flex;
               flex-direction: column;
               align-items: flex-start;
               justify-content: space-between;

               & > p {
                  font-size: 18px;
                  font-weight: 700;

                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  overflow: hidden;
               }
               & > div {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  font-size: 14px;
               }
            }
         }
      }
   }
}
</style>
