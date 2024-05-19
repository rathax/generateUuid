
<template>
  <div :data-theme="theme" class="bg-surface-ground text-surface-900" style="min-height: 100vh; display: flex ; flex-direction: column">
    <PageHeader @darkModeToggled="toggleDarkMode" :darkmode="theme === 'dark'" />
    <div class="flex-grow">
      <div>
        <RouterView></RouterView>
      </div>
    </div>
    <div class="p-10 m-0 sm:px-20 bg-surface-card border-t border-surface-border text-center h3">
      <RouterLink to="/about" class="my-3 block">
        About
      </RouterLink >
      <RouterLink to="/privacy"  class="my-3 block">
        Privacy Policy
      </RouterLink >
      <RouterLink to="/contact"  class="my-3 block">
        Contact
      </RouterLink >
      <a href="https://github.com/rathax/generateUuid" class="my-3 block" target="_blank" rel="nofollow">
        GitHub
      </a>  
    </div>
  </div>
</template>


<script setup lang="ts">
import PageHeader from "./views/layout/PageHeader.vue";
import { ref } from "vue";
import { useHead,  } from '@unhead/vue'
useHead({
  htmlAttrs: {lang: "en"}
})

const getTheme = () => {
  if (import.meta.env.SSR) return "dark"
  return localStorage.getItem("theme") as 'dark' | 'light' ?? "dark"
}
const theme = ref<'dark' | 'light'>(getTheme())



const toggleDarkMode = () => {
  if (theme.value === 'light') {
    theme.value = 'dark'
    localStorage.setItem("theme", "dark");

  } else {
    theme.value = 'light'
    localStorage.setItem("theme", "light");

  }
}


</script>

<style>
.bgclip {
  clip-path: polygon(0px 0px, 5760px 0px, 5760px calc(100% - 352px), 0px 100%);
  background-color: rgb(16, 29, 45)
}
</style>