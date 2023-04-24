<template>
   <footer>
      <div class="container">
         <span>Fatih Şen</span>
         <ul class="links">
            <li>
               <a target="_blank" href="https://github.com/fatihsen-dev">
                  <Icon size="24" name="uil:github" />
               </a>
            </li>
            <li>
               <a target="_blank" href="https://www.instagram.com/dev_leos/">
                  <Icon size="24" name="mdi:instagram" />
               </a>
            </li>
            <li>
               <a target="_blank" href="https://codepen.io/fatihsen-dev">
                  <Icon size="24" name="mdi:codepen" />
               </a>
            </li>
         </ul>
      </div>
   </footer>
</template>

<style lang="scss">
footer {
   background-color: #080808;
   color: #fff;

   & > .container {
      padding: 16px 20px;
      display: flex;
      align-items: center;
      & > span {
         font-size: 16px;
         font-weight: 200;
      }
      & > .links {
         display: flex;
         margin-left: auto;
         gap: 14px;

         li {
            transition: 0.15s;
            padding: 4px;
            &:hover {
               transform: scale(1.2);
            }
            a {
               color: #fff;
            }
         }
      }
   }
}
</style>
