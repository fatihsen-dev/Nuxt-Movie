<template>
   <div class="main">
      <AppHeader />
      <slot />
   </div>
</template>

<style lang="scss" scoped>
.main {
   height: 100%;
   display: flex;
   flex-direction: column;
   background-color: #0a0a0a;
   color: #fff;
   overflow: auto;
}
</style>
