<template>
   <Swiper
      v-if="movies"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="8"
      :loop="true"
      :effect="'cube'"
      :space-between="10"
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
         <NuxtLink :to="'/movies/' + movie.id">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" />
         </NuxtLink>
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
   width: 100%;
   position: relative;
   display: flex;
   align-items: center;
   user-select: none;

   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 2px;
      cursor: pointer;
      transition: 0.15s;

      &:hover {
         opacity: 0.5;
      }
   }
}
</style>
