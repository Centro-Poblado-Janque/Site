<template>
   <MainContent class="post-main p-page">
      <SocialMediaSEO
         :title="notices.title"
         :description="notices.description"
         :url="'blog/' + notices.slug"
      />
      <ViewSlug>
         <template #header>
            <img
               :src="context + '/resources/img/' + notices.img"
               :alt="notices.slug"
               class="img-background"
            />
            <div class="l-section">
               <ArticleHeaderInfo :info="notices" />
            </div>
         </template>
         <template #links>
            <div class="redirect_links ">
               <NuxtLink to="/"><FontAwesomeIcon :icon="faHome"/></NuxtLink>
               <NuxtLink class="after" :to="`./../noticias`">Noticias</NuxtLink>
               <NuxtLink class="after" :to="'/blog/' + notices.slug">{{ notices.title }}</NuxtLink>
            </div>
         </template>
         <template>
            <section class="notice-post grid--col-7">
               <CardContent :article="notices" :document="true" />
            </section>
            <section class="grid--col-3">
               <CardContent class="_s-author ly-flex">
                  <img
                     class="avatar-model"
                     :src="
                        notices.avatar
                           ? context + '/resources/img/' + notices.avatar
                           : context + '/error_favicon.svg'
                     "
                     :alt="notices.alt"
                  />
                  <span class="author-dates">
                     <p class="blog-author">{{ notices.author }}</p>
                     <a
                        class="blog-contact"
                        :href="
                           notices.twitter
                              ? 'https://twitter.com/' + notices.twitter
                              : 'https://web.facebook.com/' + notices.facebook
                        "
                        rel="noopeper"
                        target="_blank"
                     >
                        <FontAwesomeIcon
                           :icon="notices.twitter ? faTwitter : faFacebook"
                           class="blue-color"
                        />
                        {{ notices.twitter ? notices.twitter : notices.author }}
                     </a>
                  </span>
               </CardContent>
               <DisplayList class="ly-sticky" :list="id" :property="['id', 'text']" />
            </section>
            <div id="disqus_thread" class="disqus-comment grid--col-10 pd-especial discus"></div>
         </template>
      </ViewSlug>
   </MainContent>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
export default {
   components: {
      ViewSlug: () => import('@/components/templates/BlogTemplate/ViewSlug.vue'),
      CardContent: () => import('@/components/molecules/CardContent/CardContent.vue'),
      DisplayList: () => import('@/components/molecules/DisplayList/Display.vue'),
      ArticleHeaderInfo: () => import('@/components/organisms/Sections/ArticleHeaderInfo.vue'),
      FontAwesomeIcon,
   },
   head() {
      return {
         title: this.notices.title,
         script: [{ src: this.context + '/disqus.js' }],
      }
   },
   async asyncData({ $content, params }) {
      const notices = await $content('notices', params.slug).fetch()
      return { notices, id: notices.toc }
   },
   data: () => ({
      faHome,
      faTwitter,
      faClock,
      faCalendar,
      faFacebook,
      context: '',
   }),
   created() {
      this.context = process.env.baseURL
   },
}
</script>
<style lang="scss">
.post-main {
   width: 100%;
}
.img-background {
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   object-fit: cover;
   filter: brightness(0.5);
   width: 100%;
   height: 100%;
}
.redirect_links {
   position: relative;
   padding: 0.5rem;
   margin-bottom: 1rem;
   a {
      color: var(--grey-200);
      &::after {
         display: none;
      }
   }
   .after::before {
      content: '\2192';
      font-family: Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif;
      color: #a9a9a9;
      display: inline-block;
      margin: 0 9px 0 7px;
   }
}
.post-metadates {
   color: var(--dark-light-100);
   position: absolute;
   padding: 0.5rem;
   bottom: 10%;
   .article-title {
      font-family: var(--blog-title-font);
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--blog-title-color-white);
      margin-bottom: 1rem;
   }
   .svg-icon {
      width: 0.9rem;
      height: 0.9rem;
      fill: var(--dark-light-100);
      margin-right: 4px;
   }
   .current-time {
      padding-left: 10px;
   }
}
.notice-post {
   h2 {
      line-height: 1.7rem;
      font-size: 1.5rem;
      padding: 1rem 0.5rem;
      font-weight: bold;
      &:nth-child(1) {
         padding-top: 0;
         padding-bottom: calc(5px + 1rem);
      }
   }
   @media screen and (min-width: 1024px) {
      h2 {
         font-size: 1.8rem;
      }
   }
}
.avatar-model {
   border-radius: 50%;
   width: 3rem;
   height: 3rem;
   object-fit: cover;
   object-position: 50% 50%;
   margin-right: 1rem;
}
.author-dates {
   text-align: center;
   line-height: 1.5rem;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   p {
      padding: 0;
   }
   .blog-author {
      text-transform: capitalize;
      font-weight: bold;
      color: var(--blue-depth);
   }
   .blog-contact {
      font-size: 0.85rem;
      color: #17808b;
      i {
         padding-right: 4px;
         color: var(--blue-depth-200);
      }
   }
}
.blue-color {
   color: var(--blue-depth-200);
}
.disqus-comment {
   border-radius: 3px;
   border: 1px solid #8c858144;
}
._s-author {
   margin-bottom: 1.5rem;
}
</style>
