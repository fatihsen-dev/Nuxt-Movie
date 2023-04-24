<template>
   <Head>
      <Title>Movies - Nuxt Movie</Title>
   </Head>
   <div class="main">
      <div class="container">
         <h1>Movies</h1>
      </div>
   </div>
</template>

<script setup lang="ts"></script>

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
