<template>
   <div class="main">
      <AppHeader />
      <slot />
      <AppFooter />
   </div>
</template>

<style lang="scss" scoped>
.main {
   height: 100%;
   display: flex;
   flex-direction: column;
   background-color: #0a0a0a;
   color: #fff;
}
</style>
