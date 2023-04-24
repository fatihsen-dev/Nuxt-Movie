<template>
   <nav>
      <div class="container">
         <h1><NuxtLink to="/">Nuxt Movie</NuxtLink></h1>

         <ul class="lists">
            <li>
               <NuxtLink to="/movies">Movies</NuxtLink>
            </li>
         </ul>
         <SearchBox />
      </div>
   </nav>
</template>

<style lang="scss">
nav {
   background-color: #00dc82;
   color: #222;

   & > .container {
      padding: 10px 20px;
      display: flex;
      align-items: center;

      a {
         color: #222;
      }

      & > h1 {
         font-weight: 700;
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
</style>
