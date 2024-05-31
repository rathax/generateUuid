
<template>
    <UuidGenerator></UuidGenerator>
</template>
    
    
<script setup lang="ts">
const metaDescription = "Generate unique UUIDs. Whether you need single or bulk UUIDs. This tool offers timestamp extraction, QR code generation, and more."
const metaTitle = "Generateuuid - Online UUID Generator for developers"
const metaUrl = "https://generateuuid.net/"

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
      content: 'generate uuid online, generate uuid, uuid generator, bulk uuid generation, uuid customization, online uuid tool, add free uuid generator, generate uuid net'
    },
  ],
  link: [{ rel: "canonical", href: metaUrl }],
})

</script>
    
<style></style>






