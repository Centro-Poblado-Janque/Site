<template>
   <div :class="[$style.switchContainer]" class="ly-flex l-center">
      <div :class="[$style.switch]">
         <input type="checkbox" id="theme__toggle" :class="$style.checkbox" v-model="checked" />
         <label for="theme__toggle" :class="$style['switch__dot']">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 18.6667C16.5773 18.6667 18.6667 16.5773 18.6667 14C18.6667 11.4227 16.5773 9.33333 14 9.33333C11.4227 9.33333 9.33333 11.4227 9.33333 14C9.33333 16.5773 11.4227 18.6667 14 18.6667ZM14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
                  fill="currentColor"
               />
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8333 0H15.1667V4.73887C14.7845 4.69121 14.3951 4.66667 14 4.66667C13.6048 4.66667 13.2155 4.69121 12.8333 4.73887V0ZM8.27668 6.62688L4.92535 3.27554L3.27544 4.92547L6.62678 8.27681C7.10583 7.66054 7.66043 7.10593 8.27668 6.62688ZM4.73887 12.8333H0V15.1667H4.73887C4.69121 14.7845 4.66667 14.3951 4.66667 14C4.66667 13.6048 4.69121 13.2155 4.73887 12.8333ZM6.62678 19.7232L3.27543 23.0746L4.92535 24.7245L8.27668 21.3731C7.66043 20.8941 7.10583 20.3394 6.62678 19.7232ZM12.8333 23.2611V28H15.1667V23.2611C14.7845 23.3088 14.3951 23.3333 14 23.3333C13.6048 23.3333 13.2155 23.3088 12.8333 23.2611ZM19.7232 21.3732L23.0744 24.7245L24.7244 23.0746L21.3731 19.7233C20.8941 20.3396 20.3394 20.8942 19.7232 21.3732ZM23.2611 15.1667H28V12.8333H23.2611C23.3088 13.2155 23.3333 13.6048 23.3333 14C23.3333 14.3951 23.3088 14.7845 23.2611 15.1667ZM21.3731 8.27668L24.7244 4.92547L23.0744 3.27556L19.7232 6.62678C20.3394 7.10583 20.8941 7.66043 21.3731 8.27668Z"
                  fill="currentColor"
               />
            </svg>
         </label>
      </div>
   </div>
</template>

<script>
export default {
   name: 'ThemeButton',
   data() {
      return {
         checked: false,
         getTheme: '',
      }
   },
   head() {
      return {
         htmlAttrs: {
            'data-theme': this.getContext(),
         },
      }
   },
   mounted() {
      this.getContext()
   },
   methods: {
      getContext() {
         if (this.checked) {
            return 'dark'
         } else {
            return 'light'
         }
      },
   },
}
</script>

<style lang="scss" module>
@import '~/assets/scss/customs/settings';
.switchContainer {
   height: 30px;
   width: 40px;
}
.switch {
   svg {
      width: 26px;
      margin-bottom: -38px;
   }
}
.switch__dot {
   cursor: pointer;
   display: inline-flex;
   height: 100%;
   color: var(--bg-primary);
   align-items: center;
   //position: absolute;
   transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
   background-color: transparent;
}
.checkbox {
   display: none;
   /*   &:checked ~ .switch__dot {
      left: 4px;
   } */
}
</style>
