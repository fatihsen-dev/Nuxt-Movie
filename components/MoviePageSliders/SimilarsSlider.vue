<template>
   <Swiper
      v-if="similars"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="5"
      :loop="true"
      :effect="'cube'"
      :breakpoints="{ 300: { slidesPerView: 2 }, 500: { slidesPerView: 3 }, 600: { slidesPerView: 4 }, 900: { slidesPerView: 5 } }"
      :space-between="12"
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
      <SwiperSlide v-for="similar in similars" :key="similar.id">
         <NuxtLink :to="'/movies/' + similar.id">
            <img :src="'https://image.tmdb.org/t/p/original' + similar.poster_path" />
         </NuxtLink>
      </SwiperSlide>
   </Swiper>
</template>

<script setup lang="ts">
import { MovieType, ResultType } from "~/types/movie";
const config = useRuntimeConfig();
const { movieId } = defineProps(["movieId"]);
const similars = ref<MovieType[]>();
if (movieId) {
   const similarsResponse: ResultType = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${config.public.API_KEY}`
   );
   if (similarsResponse) {
      similars.value = similarsResponse.results.filter((s) => s.backdrop_path && s.poster_path);
   }
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
      border-radius: 10px;
      cursor: pointer;
      transition: 0.15s;

      &:hover {
         opacity: 0.7;
      }
   }
}
</style>
