<template>
   <section class="post-view-section">
      <header class="post-view-head ly-relative">
         <slot name="header"> </slot>
      </header>

      <div class="post-view-main">
         <div class="l-section">
            <slot name="links"></slot>
         </div>
         <div class=" l-section ly-grid l-section ly-grid-10 gap">
            <slot> </slot>
         </div>
      </div>

      <aside class="post-view-footer">
         <div class=" l-section ly-grid">
            <slot name="footer"> </slot>
         </div>
      </aside>
   </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.post-view {
   &-head {
      height: 60vh;
      background-color: #343333;
      transition: all 0.1s ease-in-out;
   }
   &-main {
      margin-top: 3rem;
      margin-bottom: 3rem;
   }
   &-footer {
      width: 100%;
   }
}
</style>
