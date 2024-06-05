
<template>
  <div class="mx-auto flex flex-col items-center max-w-[48rem]">


    <section class="px-8 lg:px-0 transition-[padding] duration-200 my-10">
      <h2 class="text-3xl font-bold text-center">Contact</h2>
      <p class="paragraph text-center mt-10 text-xl"> If you want to reach me, leave me an email at <a
          href="mailto: rathaxdev@gmail.com" class="font-bold">rathaxdev@gmail.com</a>.
      </p>
    </section>
  </div>
</template>
      
<script setup lang="ts">
import { useHead } from "@unhead/vue";
import defaultJsonLd from "~/utils/defaultJsonLd";


const metaDescription = "If you want to reach me, leave me an email at rathaxdev@gmail.com"
const metaTitle = "Generate UUID - Contact"
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
    {
      name: 'description',
      content: metaDescription,
    },
  ],
  link: [{ rel: "canonical", href: metaUrl }],
  script: [{
    type: "application/ld+json", innerHTML: JSON.stringify([...defaultJsonLd
    ])
  }]
})



</script>
    
  
  