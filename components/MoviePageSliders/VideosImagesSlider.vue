<template>
   <Swiper
      v-if="videos && images"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cube'"
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
      <SwiperSlide v-for="video in videos" :key="video.id">
         <iframe
            :src="'https://www.youtube.com/embed/' + video.key"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
         >
         </iframe>
      </SwiperSlide>
      <SwiperSlide v-for="(image, index) in images" :key="index">
         <img :src="'https://image.tmdb.org/t/p/original' + image.file_path" />
      </SwiperSlide>

      <SwiperControls v-if="videos?.length + images?.length > 1" />
   </Swiper>
</template>

<script setup lang="ts">
import { VideosType, VideoType } from "@/types/video";
import { ImagesType, ImageType } from "@/types/image";
const config = useRuntimeConfig();
const { movieId } = defineProps(["movieId"]);
const videos = ref<VideoType[]>();
const images = ref<ImageType[]>();
if (movieId) {
   const videosResponse: VideosType = await $fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${config.public.API_KEY}`);
   if (videosResponse) {
      videos.value = videosResponse.results.filter((video, index) => video.site === "YouTube" && index < 2);
   }
   const imagesResponse: ImagesType = await $fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${config.public.API_KEY}`);
   if (imagesResponse) {
      images.value = imagesResponse.backdrops;
   }
}
</script>

<style scoped lang="scss">
.swiper {
   height: 100%;
   position: relative;
   display: flex;
   align-items: center;

   iframe,
   img {
      height: 100%;
      width: 100%;
   }
}
</style>
