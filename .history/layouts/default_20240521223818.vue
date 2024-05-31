<template>
    <div>
      <AppHeader />
      <slot />
    </div>
  </template>


<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>