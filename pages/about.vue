
<template>
    <div class="mx-auto flex flex-col items-center max-w-[48rem]">


        <section class="px-8 lg:px-0 transition-[padding] duration-200 my-10">
            <h2 class="text-3xl font-bold text-center">About</h2>
            <p class="paragraph text-center mt-10 text-xl">Hello, my name is ratHax, and I'm a Swiss software engineer with a master’s degree in computer science that loves to write web apps like this one in his free time.
            </p>
            <p class="paragraph text-center mt-10 text-xl"> This simple UUID Generator was made as a portfolio site and runs
                completely inside the browser and does not need a backend and should stay online permanently without Ads.
            </p>
            <p class="paragraph text-center mt-10 text-xl">
                Are you curious about this app, its tech stack, our privacy policies, or anything else? Do you have any
                feedback, leave me an email at <a href="mailto: rathaxdev@gmail.com"
                    class="font-bold">rathaxdev@gmail.com</a> or visit the <a
                    href="https://github.com/rathax/generateUuid" target="_blank">GitHub Project.</a>
            </p>
        </section>
    </div>
</template>
      
      
<script setup lang="ts">1
import { useHead } from "#imports";
import defaultJsonLd from "~/utils/defaultJsonLd";

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
        type: "application/ld+json", innerHTML: JSON.stringify([...defaultJsonLd
        ])
    }]
})
</script>
    
  
