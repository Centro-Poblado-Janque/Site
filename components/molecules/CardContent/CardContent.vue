<template>
   <div class="m-card-content pd-especial u-radius:3" v-if="document">
      <NuxtContent :document="article" />
   </div>
   <div class="m-card-content pd u-radius:3" v-else>
      <slot></slot>
   </div>
</template>

<script>
import './_card-content.scss'
export default {
   name: 'CardContent',
   props: {
      article: Object,
      document: Boolean,
   },
}
</script>
