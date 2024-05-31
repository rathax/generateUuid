
<template>
  <div class="mx-auto flex flex-col items-center max-w-[48rem]">
    <slot></slot>
    <div
      class="flex flex-col sm:flex-row w-full justify-between items-center text-center px-4 md:px-8 py-3 border border-surface-border transition-all appearance-none rounded-md focus:outline-none focus:outline-offset-0  bg-surface-card shadow-sm shadow-surface-100 ">
      <div class=" text-2xl">
        <ClientOnly>
          <span :class="[{'text-transparent': !uuid }]">{{uuid ?? "00000000-0000-0000-0000-000000000000"}} </span>
        </ClientOnly>
      </div>
      <div class="flex gap-4 mt-4 sm:mt-0 l px-5 sm:px-0 w-full sm:w-auto">
        <FormButton @click="handleRefresh" class="flex justify-center w-full sm:w-auto " aria-label="refresh UUID">
          <RefreshIcon class="fill-surface-0 w-6 h-6" :class="{ 'animate-[spin_500ms_ease-in-out_forwards] ': spin }">
          </RefreshIcon>
        </FormButton>
        <FormButton @click="handleCopyButtonClick" class="flex justify-center w-full sm:w-auto min-w-[5rem]"
          aria-label="copy content">

          <transition enter-from-class="opacity-0" leave-to-class="opacity-0" mode="out-in"
            enter-active-class="transition duration-150" leave-active-class="transition duration-150 ">
            <template v-if="!showCopyCheck"> <span> Copy </span></template>
            <template v-else> <span>
                <CheckIcon class="h-full w-6 fill-surface-0"></CheckIcon>
              </span></template>
          </transition>
        </FormButton>
      </div>
    </div>
  </div>
</template>
    
    
<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import RefreshIcon from "@/assets/refresh-icon.svg?component"
import CheckIcon from "@/assets/check-icon.svg?component"

import FormButton from "@/components/FormButton.vue";
export interface Props {
  uuid?: string | undefined
}

const props = withDefaults(defineProps<Props>(), {})

const spin = ref(false)
const handleRefresh = async () => {
  spin.value = true
  emit('click:refresh')
  setTimeout(() => {
    spin.value = false
  }, 500)
}

const emit = defineEmits<{
  'click:copy': [val?: any]
  'click:refresh': [val?: any]
}>()

const showCopyCheck = ref(false)
const handleCopyButtonClick = () => {
  emit('click:copy')
  showCopyCheck.value = true
  setTimeout(function () {
    showCopyCheck.value = false
  }, 1200)
}




</script>
  

