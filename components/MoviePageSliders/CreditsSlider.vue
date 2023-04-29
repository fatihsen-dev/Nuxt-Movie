<template>
   <Swiper
      v-if="credits"
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
      <SwiperSlide v-for="credit in credits" :key="credit.id">
         <div class="person">
            <img :src="'https://image.tmdb.org/t/p/original' + credit.profile_path" />
            <span>{{ credit.name }}</span>
            <p>{{ credit.known_for_department }}</p>
         </div>
      </SwiperSlide>
   </Swiper>
</template>

<script setup lang="ts">
import { CreditType, CreditsType } from "~/types/credits";
const config = useRuntimeConfig();
const { movieId } = defineProps(["movieId"]);
const credits = ref<CreditType[]>();
if (movieId) {
   const creditsResponse: CreditsType = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${config.public.API_KEY}`
   );
   if (creditsResponse) {
      credits.value = creditsResponse.cast.filter((cast) => cast.profile_path);
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

   .person {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      background-color: #191919;
      height: 100%;
      padding: 20px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.15s;

      &:hover {
         background-color: rgba($color: #191919, $alpha: 0.8);
      }

      img {
         height: 100px;
         width: 100px;
         object-fit: cover;
         border-radius: 99%;
         cursor: pointer;
         transition: 0.15s;
      }

      span {
         color: #04a777;
         text-align: center;
         font-weight: 700;
      }
      p {
         color: rgba(255, 255, 255, 0.4);
         font-weight: 300;
      }
   }
}
</style>
