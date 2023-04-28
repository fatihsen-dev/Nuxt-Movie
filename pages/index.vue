<script setup lans="ts"></script>

<template>
   <Head>
      <Title>Home - Nuxt Movie</Title>
   </Head>
   <div class="main">
      <div class="container">
         <HomeTrendSlider />
      </div>
      <div>
         <TendsSlider />
      </div>
   </div>
</template>

<style scoped lang="scss">
.main {
   flex: 1;
   height: 800px;

   & > .container {
      display: flex;
      justify-content: center;
      height: calc(100% + 80px);
      position: relative;
      top: -80px;
      width: 100%;
      max-width: none;
      h1 {
         font-weight: 500;
      }
      .images > img {
         height: 200px;
      }
   }
}
</style>
