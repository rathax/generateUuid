
<template>
    <div class="mx-auto flex flex-col items-center max-w-[48rem]">


        <section class="px-8 lg:px-0 transition-[padding] duration-200 my-10">
            <h1 class="text-3xl font-bold text-center">Contact</h1>
            <p class="paragraph text-center mt-10 text-xl"> If you want to reach me, leave me an email at <a href= "mailto: contact@generateuuid.net" class="font-bold">contact@generateuuid.net</a>.
            </p>
        </section>
    </div>
</template>
      
<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import RefreshIcon from "@/assets/refresh-icon.svg?component"
import CheckIcon from "@/assets/check-icon.svg?component"
import AnchorHeading from "@/components/AnchorHeading.vue";
import { useHead } from "@unhead/vue";


const metaDescription = "If you want to reach me, leave me an email at contact@generateuuid.net"
const metaTitle = "Generateuuid - Contact"
const metaUrl = "https://generateuuid.net/contact"
useHead({
  title: metaTitle,
  htmlAttrs: { lang: "en" },
  meta: [
    {
      property: 'og:title',
      content: metaTitle,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: "website",
    },
    {
      property: 'og:url',
      content: metaUrl,
    },
    {
      property: 'og:image',
      content: 'https://generateuuid.net/socialmedia.jpg',
    },
    {
      name: 'twitter:title',
      content: metaTitle,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
    {
      name: 'twitter:url',
      content: metaUrl,
    },
    {
      name: 'twitter:image',
      content: 'https://generateuuid.net/socialmedia.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'keywords',
      content: 'generateuuid contact, generateuuid.net contact'
    },
  ],
  link: [{ rel: "canonical", href: metaUrl }],
})



</script>
    
  
  