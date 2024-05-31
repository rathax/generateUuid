<template>
  <div>
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
  

