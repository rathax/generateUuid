<template>
  <div :data-theme="theme" class="bg-surface-ground text-surface-900 flex min-h-screen flex-col">
    <AppHeader @darkModeToggled="toggleDarkMode" :darkmode="theme === 'dark'" />
    <div class="grow">

      <NuxtPage />
    </div>

    <div class="p-10 m-0 sm:px-20 bg-surface-card border-t border-surface-border text-center h3">
      <nuxt-link to="/about" class="my-3 block">
        About
      </nuxt-link>
      <nuxt-link to="/privacy" class="my-3 block">
        Privacy Policy
      </nuxt-link>
      <nuxt-link to="/contact" class="my-3 block">
        Contact
      </nuxt-link>
      <a href="https://github.com/rathax/generateUuid" class="my-3 block" target="_blank" rel="nofollow">
        GitHub
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';


const getTheme = () => {
  return "dark"
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
  