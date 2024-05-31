<template>
  <div :data-theme="theme" class="bg-surface-ground text-surface-900" style="min-height: 100vh; display: flex ; flex-direction: column">
    <AppHeader @darkModeToggled="toggleDarkMode" :darkmode="theme === 'dark'" />
    <NuxtPage />
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
  