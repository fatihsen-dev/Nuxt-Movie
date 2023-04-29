<template>
   <nav :class="moviePage ? 'movie-page' : null">
      <div class="container">
         <h1><NuxtLink to="/">Nuxt Movie</NuxtLink></h1>
         <SearchBox />
      </div>
   </nav>
</template>

<script setup lang="ts">
let moviePage = ref<string | string[]>();
const route = useRoute();
moviePage.value = route.params.movieid;

watch(route, (newVal: any, oldVal: any) => {
   console.log(route.params);
   moviePage.value = route.params.movieid;
});
</script>

<style lang="scss">
nav {
   background-color: transparent;
   position: sticky;
   width: 100%;
   top: 0;
   z-index: 99;
   height: 80px;
   display: flex;
   align-items: center;

   &.movie-page {
      background: rgba(4, 167, 119, 0.16);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(3.5px);
      -webkit-backdrop-filter: blur(3.5px);
   }

   & > .container {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
         color: #fff;
      }

      & > h1 {
         font-weight: 800;
         font-size: 28px;
      }
      .lists {
         display: flex;
         align-items: center;
         margin-left: auto;
         gap: 16px;
         font-size: 18px;

         & > li {
            font-weight: 700;
         }
      }
   }
}
@media (width <= 705px) {
   nav {
      height: auto;
      .container {
         flex-direction: column;
         gap: 10px;
      }
   }
}
</style>
