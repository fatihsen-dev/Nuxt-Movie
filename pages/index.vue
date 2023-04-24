<script setup lans="ts"></script>

<template>
   <Head>
      <Title>Home - Nuxt Movie</Title>
   </Head>
   <div class="main">
      <div class="container">
         <h1>Home</h1>
      </div>
   </div>
</template>

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
      .images > img {
         height: 200px;
      }
   }
}
</style>
