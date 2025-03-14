
<template>
  <component :is="tag" class="font-bold  hover:cursor-pointer group" :id="id">
    <RouterLink :to="{hash: '#' + id}"> <span
        class="transition-all duration-200 opacity-0 group-hover:opacity-100 inline-block before:content-['#'] before:mr-1 -ml-4 text-green-500 font-semibold"></span>{{ text }}</RouterLink>
  </component>
</template>
    
    
<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  text: string
  id?: string
  tag?: "h1" | "h2" | "h3"
}

const props = withDefaults(defineProps<Props>(), { tag: "h2" })

function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
  return str;
}

const id = computed(() => props.id ?? slugify(props.text))

</script>
    
<style></style>


