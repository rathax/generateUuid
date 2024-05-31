
<template>
    <div class="mx-auto flex flex-col items-center max-w-[48rem]">


        <section class="px-8 lg:px-0 transition-[padding] duration-200 my-10">
            <h2 class="text-3xl font-bold text-center">Contact</h2>
            <p class="paragraph text-center mt-10 text-xl"> If you want to reach me, leave me an email at <a href= "mailto: rathaxdev@gmail.com" class="font-bold">rathaxdev@gmail.com</a>.
            </p>
        </section>
    </div>
</template>
      
<script setup lang="ts">
import { useHead } from "@unhead/vue";


const metaDescription = "If you want to reach me, leave me an email at rathaxdev@gmail.com"
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
    {
            name: 'description',
            content: metaDescription,
    },
  ],
  link: [{ rel: "canonical", href: metaUrl }],
  script: [{
        type: "application/ld+json", textContent: JSON.stringify([{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": metaUrl,
            "name": "GenerateUUID - Contact",
            "inLanguage": "en-US"
            },
        {
            "@context": "https://schema.org",
            "@type": ["Person", "Organization"],
            "@id": "https://generateuuid.net/about",
            "name": "RatHax",
            "email": "rathaxdev@gmail.com",
            "image": {
                "@type": "ImageObject",
                "inLanguage": "en-US",
                "@id": "https://generateuuid.net/#/schema/person/image/",
                "url": "https://generateuuid.net/rathax.jpg",
                "contentUrl": "https://generateuuid.net/rathax.jpg",
                "width": 435,
                "height": 843,
                "caption": "RatHax"
            },
            "logo": { "@id": "https://generateuuid.net/#/schema/person/image/" },
            "sameAs": [
                "https://generateuuid.net",
                "https://x.com/godlikeplayer1",
                "https://www.reddit.com/user/godlikeplayer2",
                "https://github.com/rathax"
            ]
        }
        ])
    }]
})



</script>
    
  
  