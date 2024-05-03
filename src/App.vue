
<template>
  <!--       <div class="bgclip absolute h-[600px] w-full -z-1">  </div>
 -->
  <div :data-theme="theme" class="bg-surface-ground text-surface-900">
    <PageHeader @darkModeToggled="toggleDarkMode" :darkmode="theme === 'dark'" />
    <div class="">
      <div>
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PageHeader from "./views/layout/PageHeader.vue";
import { ref } from "vue";
const { t } = useI18n();

  

const theme = ref<'dark' | 'light'>(localStorage.getItem("theme") as 'dark' | 'light' ?? "dark")

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