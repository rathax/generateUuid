
<template>
    <div class="px-5 sm:px-20 h-16 bg-surface-card border-b border-surface-border">
      <div class="flex divide-x py-3 items-center h-full font-semibold max-w-4xl m-auto">
        <div class="flex justify-between w-full items-center">
          <router-link to="/">
            <h1 class="text-2xl">Generate UUIDs</h1>
          </router-link>
          <div class="flex items-center gap-4">
            <FormButton @click="emit('darkModeToggled')" class="!p-1" variant="surface"
              :aria-label="darkmode ? 'switch to dark mode' : 'switch to light mode'">
              <transition enter-from-class="opacity-0" leave-to-class="opacity-0" mode="out-in"
                enter-active-class="transition duration-200" leave-active-class="transition duration-200 ">
                <DarkModeIcon v-if="!darkmode" class="w-10 h-full fill-surface-900" />
                <LightModeIcon v-else class="w-10 h-full fill-surface-900" />
              </transition>
            </FormButton>
            <a href="https://github.com/rathax/generateUuid" target="_blank" rel="nofollow">
              <FormButton class="!py-1" variant="surface" aria-label="GitHub">
                <div class="flex items-center tracking-wider">
                  <GitHubIcon class="inline mr-2 w-4 h-full " />GitHub
                </div>
              </FormButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script setup lang="ts">
  import FormButton from '@/components/FormButton.vue';
  import DarkModeIcon from "@/assets/darkmode.svg"
  import LightModeIcon from "@/assets/lightmode.svg"
  import GitHubIcon from "@/assets/github.svg"
  
  export interface Props {
    darkmode?: boolean
  }
  
  withDefaults(defineProps<Props>(), {})
  
  const emit = defineEmits<{
    'darkModeToggled': [value?: boolean]
  }>()
  </script>
    