<template>
   <h1 v-if="isPrincipal" class="a-title-p">{{ text }}</h1>
   <h2 v-else-if="isLink" class="a-title">
      <NuxtLink :to="path">{{ text }}</NuxtLink>
   </h2>
   <h2 v-else :class="['a-title', big_text && 'big-text', center && 'text-center']">{{ text }}</h2>
</template>

<script>
export default {
   props: {
      isPrincipal: {
         type: Boolean,
         default: false,
      },
      isLink: {
         type: Boolean,
         default: false,
      },
      path: Object,
      text: {
         type: String,
         default: 'Type title',
      },
      big_text: { type: String },
      center: String,
   },
}
</script>
