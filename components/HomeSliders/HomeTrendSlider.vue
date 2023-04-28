<template>
   <Swiper
      v-if="movies"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cube'"
      :autoplay="{
         delay: 5000,
         disableOnInteraction: true,
      }"
      :creative-effect="{
         prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
         },
         next: {
            translate: ['100%', 0, 0],
         },
      }"
   >
      <SwiperSlide v-for="movie in movies" :key="movie.id">
         <div class="informations">
            <div class="container">
               <h1 v-if="movie.title">{{ movie.title }}</h1>
               <h1 v-if="!movie.title">{{ movie.name }}</h1>
               <h1 v-if="!movie.title && !movie.name">{{ movie.original_title }}</h1>
               <p>{{ movie.overview }}</p>
               <NuxtLink :to="'/movies/' + movie.id">Experience joy of movies! </NuxtLink>
            </div>
         </div>
         <img :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path" alt="" />
      </SwiperSlide>
   </Swiper>
</template>

<script setup lang="ts">
import { MovieType } from "~/types/movie";
const config = useRuntimeConfig();

type configuredMovieType = MovieType & { name: string };

const movies = ref<configuredMovieType[]>();

const imagesResponse: { page: number; results: configuredMovieType[]; total_pages: number; total_results: number } = await $fetch(
   `https://api.themoviedb.org/3/trending/all/day?api_key=${config.public.API_KEY}`
);
if (imagesResponse) {
   movies.value = imagesResponse.results;
}
</script>

<style scoped lang="scss">
.swiper {
   height: 100%;
   position: relative;
   display: flex;
   align-items: center;

   * {
      box-sizing: border-box;
   }

   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 2px;
   }
   .informations {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      padding: 20px;
      background: rgb(0, 0, 0);
      background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2049194677871149) 100%);

      .container {
         padding: 0 20px;
         position: relative;
         z-index: 20;
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         gap: 20px;

         & > h1 {
            font-size: 44px;
            font-weight: 600;
            margin-right: auto;
            border-radius: 2px;
         }
         & > p {
            font-size: 24px;
            color: rgba($color: #fff, $alpha: 0.6);
            border-radius: 2px;
            max-width: 800px;
         }

         & > a {
            all: unset;
            margin-top: 20px;
            background-color: #04a777;
            margin-right: auto;
            border-radius: 16px;
            padding: 14px 30px;
            color: #eee;
            font-weight: 600;
            transition: 0.15s;
            cursor: pointer;

            &:hover {
               background-color: rgba($color: #04a777, $alpha: 0.7);
            }
         }
      }
   }
}
</style>
