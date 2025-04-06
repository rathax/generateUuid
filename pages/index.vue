
<template>
  <UuidGenerator></UuidGenerator>

</template>
    
    
<script setup lang="ts">
import defaultJsonLd from '~/utils/defaultJsonLd';

const metaDescription = "Generate unique UUIDs. Version 7 now supported. Whether you need single or bulk UUIDs or tool offers timestamp extraction and more."
const metaTitle = "Generate UUID Tool - Online UUID Generator for developers"
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
      name: 'description',
      content: metaDescription
    },
    {
      name: 'keywords',
      content: 'UUIDv7, version 7, uuid 7, generate uuid online, generate uuid, uuid generator, uuid customization, online uuid tool, free uuid generator, generate uuid net'
    },
  ],
  link: [{ rel: "canonical", href: metaUrl }],
  script: [{
    type: "application/ld+json", innerHTML: JSON.stringify([
    ...defaultJsonLd,
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "url": "https://generateuuid.net",
      "name": "UUID Generator",
      "applicationCategory": "DeveloperApplication",
      "browserRequirements": "Requires modern web browser",
      "operatingSystem": "All",
      "softwareHelp": "https://github.com/rathax/generateUuid",
      "featureList": "https://github.com/rathax/generateUuid/blob/main/README.md#key-features",
      "image": "https://generateuuid.net/originalIcon512.png",
      "offers": {
        "@type": "Offer",
        "price": "0"
      }
    },
    ])
  }]
})

</script>
    
<style></style>





