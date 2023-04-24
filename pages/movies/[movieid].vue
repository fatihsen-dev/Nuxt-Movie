<template>
   <Head>
      <Title>Home - Nuxt Movie</Title>
   </Head>
   <div class="main">
      <div class="container">
         <div>
            <div>
               <h1>{{ movie.title }}</h1>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const { movieid } = route.params;
import { MovieType } from "@/types/movie";
import { ref } from "vue";

console.log(movieid);
let movie = ref<MovieType>();
const response: any = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${config.public.API_KEY}`);
if (response) {
   movie.value = response;
}
</script>

<style scoped lang="scss">
.main {
   flex: 1;

   & > .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 20px;
      h1 {
         font-weight: 500;
      }
   }
}
</style>
