
<template>
    <div class="mx-auto flex flex-col items-center max-w-[48rem]">


        <section class="px-8 lg:px-0 transition-[padding] duration-200 my-10">
            <h2 class="text-3xl font-bold text-center">About</h2>
            <p class="paragraph text-center mt-10 text-xl"> This simple UUID Generator was made as a portfolio site and runs
                completely inside the browser and does not need a backend and should stay online permanently without Ads.
            </p>
            <p class="paragraph text-center mt-10 text-xl">
                Are you curious about this app, its tech stack, our privacy policies, or anything else? Do you have any
                feedback, leave me an email at <a href="mailto: rathaxdev@gmail.com"
                    class="font-bold">rathaxdev@gmail.com</a> or visit the <a
                    href="https://github.com/rathax/generateUuid" target="_blank">GitHub Project.</a>
            </p>
            <div class="flex justify-center mt-10">
                <div class="flex flex-col gap-5">
                    <img width="200" src="/rathax.jpg" alt="RatHax" />
                </div>
            </div>
        </section>
    </div>
</template>
      
      
<script setup lang="ts">
import { useHead } from "@unhead/vue";

const metaDescription = "Do you have any feedback, leave me an email at rathaxdev@gmail.com"
const metaTitle = "Generateuuid - About"
const metaUrl = "https://generateuuid.net/about"
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
            content: 'generateuuid about, generateuuid.net about, uuidgenerator'
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
            "name": "Generate UUID - About",
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
    
  
