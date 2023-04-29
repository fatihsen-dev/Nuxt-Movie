<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
   <button @click="swiper.slidePrev()"><Icon name="material-symbols:arrow-circle-left-outline-rounded" /></button>
   <button @click="swiper.slideNext()"><Icon name="material-symbols:arrow-circle-right-outline-rounded" /></button>
</template>

<style lang="scss">
button {
   position: absolute;
   z-index: 10;
   cursor: pointer;
   display: flex;
   width: 60px;
   height: 60px;
   background-color: transparent;
   border: none;
   color: rgba($color: #00dc82, $alpha: 0.5);

   & > svg {
      width: inherit;
      height: inherit;
   }

   &:nth-of-type(1) {
      left: 20px;
   }
   &:nth-of-type(2) {
      right: 20px;
   }
}
@media (width <= 705px) {
   button {
      width: 40px;
      height: 40px;
   }
}
</style>
