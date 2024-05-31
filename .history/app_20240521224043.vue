<template>
  <div :data-theme="theme" class="bg-surface-ground text-surface-900" style="min-height: 100vh; display: flex ; flex-direction: column">
    <AppHeader @darkModeToggled="toggleDarkMode" :darkmode="theme === 'dark'" />

    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';


export interface Props {
  darkmode?: boolean
}

withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  'darkModeToggled': [value?: boolean]
}>()
</script>
  

