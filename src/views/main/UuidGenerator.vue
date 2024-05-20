
<template>
  <div class="m-auto mt-40">
    <section>
      <UuidVersionGenerator :uuid="valueGuuidV4" @click:refresh="valueGuuidV4 = uuidv4()"
        @click:copy="copyToClipboard(valueGuuidV4)">
        <AnchorHeading id="UUIDv4" class="text-2xl mb-5 text-center" text="Version 4 (random) UUID:" />
      </UuidVersionGenerator>
      <UuidVersionGenerator class="mt-14" :uuid="valueGuuidV1" @click:refresh="valueGuuidV1 = uuidv1()"
        @click:copy="copyToClipboard(valueGuuidV1)">
        <AnchorHeading id="UUIDv1" class="text-2xl mb-5 text-center" text="Version 1 (timestamp) UUID:" />
      </UuidVersionGenerator>
    </section>

    <div class="border-b-2 border-surface-200  my-32 w-2/6 mx-auto"> </div>

    <section class="max-w-4xl m-auto mb-28">
      <UuidGeneratorNamespace class="" />
      <UuidGeneratorValidate class="mt-10"></UuidGeneratorValidate>
      <FormCard class="mt-10 m-auto">
        <AnchorHeading id="Generate-Bulk" class="text-3xl text-center mb-10 mt-4" tag="h2" text="Generate Bulk" />
        <div class="mb-5">
          <div class="flex gap-5 md:gap-10 items-center" role="radiogroup" aria-labelledby="gc8Dz">
            <label id="gc8Dz">Type:</label>
            <FormRadio v-model="typetoGenerate" label="Uuid V1" value="V1" />
            <FormRadio v-model="typetoGenerate" label="Uuid V4" value="V4" />
          </div>
          <div class="flex gap-5 md:gap-10 my-5 items-center" role="radiogroup" aria-labelledby="dc8ev">
            <label id="dc8ev">Format:</label>
            <FormRadio label="plain text" value="plain-text" v-model="formateToGenrate" />
            <FormRadio label="JSON" value="json" v-model="formateToGenrate" />
            <FormRadio label="comma separated" value="comma-seperated" v-model="formateToGenrate" />
          </div>
          <div class="flex gap-5 md:gap-10 my-5 items-center" role="radiogroup" aria-labelledby="cMJ30">
            <label id="cMJ30">Encoding:</label>
            <FormRadio label="plain" value="plain" v-model="encodingToGenerate" />
            <FormRadio label="Base64" value="base64" v-model="encodingToGenerate" />
          </div>
        </div>
        <div class="my-2 flex gap-4 items-center mb-3" role="radiogroup">
          <div> How many GUIDs do you want?:</div>
          <FormInput id="ucl8g" v-model.number="amountoGenerate" @blur="setMaxAmount" type="number" class="w-32"
            placeholder="max 50000"></FormInput>

          <FormButton @click="generateIds"> Generate</FormButton>
        </div>
        <div class="relative ">
          <div class="absolute right-7 top-3">
            <FormButton v-if="generatedOutput.length >= 1" :variant="copyButtonVariant" @click="copyGeneratedIds"
              class="min-w-[12rem]">
              <transition enter-from-class="opacity-0" leave-to-class="opacity-0" mode="out-in"
                enter-active-class="transition duration-150" leave-active-class="transition duration-150">
                <template v-if="copyButtonVariant === 'primary'"><span>Copy to Clipboard</span></template>
                <template v-else><span>Copied</span></template>
              </transition>
            </FormButton>
          </div>
          <FormTextArea rows="10" v-model="generatedOutput" readonly />
        </div>
      </FormCard>
    </section>
  </div>
  <div class="bg-surface-card py-28 ">
    <UuidGeneratorFaq class="max-w-4xl mx-auto" />
  </div>
</template>
  
  
<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';

import FormRadio from "@/components/FormRadio.vue";
import FormTextArea from "@/components/FormTextArea.vue"
import FormButton from '@/components/FormButton.vue';
import FormInput from '@/components/FormInput.vue';
import UuidVersionGenerator from '@/views/main/UuidVersionGenerator.vue';
import FormCard from '@/components/FormCard.vue';
import UuidGeneratorNamespace from './UuidGeneratorNamespace.vue';
import UuidGeneratorValidate from './UuidGeneratorValidate.vue'
import UuidGeneratorFaq from './UuidGeneratorFaq.vue';
import AnchorHeading from '@/components/AnchorHeading.vue';
import { useHead } from '@unhead/vue';


const valueGuuidV1 = ref(import.meta.env.SSR ? "" : uuidv1())
const valueGuuidV4 = ref(import.meta.env.SSR ? "" : uuidv4())

const copyToClipboard = (string: string) => {
  navigator.clipboard.writeText(string);
}

const amountoGenerate = ref<number>(20)
const typetoGenerate = ref<'V1' | "V4" | "Guid">("V1")
const formateToGenrate = ref<'plain-text' | "json" | "comma-seperated">("plain-text")
const encodingToGenerate = ref<'plain' | "base64" | "base64Url">("plain")

const generatedOutput = ref("")
const setMaxAmount = () => {
  console.log("blur")
  if (amountoGenerate.value > 50000) amountoGenerate.value = 50000
}

const getIdType = () => {
  if (typetoGenerate.value === 'V1') return uuidv1
  if (typetoGenerate.value === 'V4') return uuidv4
  return () => "error"
}

const getEncoding = () => {
  if (encodingToGenerate.value === 'plain') return (string: string) => string
  if (encodingToGenerate.value === 'base64') return (string: string) => btoa(string)
  return (string: string) => atob(string)
}

const generateIds = () => {
  const type = getIdType()
  const encoding = getEncoding()
  const ids = []

  for (let i = 0; i < amountoGenerate.value; i++) {
    ids.push(encoding(type()))
  }

  if (formateToGenrate.value === 'plain-text') generatedOutput.value = ids.join('\n')
  else if (formateToGenrate.value === 'comma-seperated') generatedOutput.value = ids.join(',\n')
  else {
    generatedOutput.value = `[\n"${ids.join('",\n"')}"\n]`
  }
}

const copyButtonVariant = ref<'primary' | 'success'>('primary')
const copyGeneratedIds = () => {
  copyButtonVariant.value = 'success'
  setTimeout(function () {
    copyButtonVariant.value = 'primary'
  }, 1200)
}



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
  script: [{
    type: "application/ld+json", textContent: JSON.stringify([{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": metaUrl,
      "name": "GenerateUUID",
      "inLanguage": "en-US",
      "alternateName": ["UUID Generator"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "url": metaUrl,
      "name": "GenerateUUID",
      "applicationCategory": "DeveloperApplication",
      "browserRequirements": "Requires modern web browser",
      "operatingSystem": "All",
      "softwareHelp": "https://github.com/rathax/generateUuid",
      "featureList": "https://github.com/rathax/generateUuid/blob/main/README.md#key-features",
      "offers": {
        "@type": "Offer",
        "price": "0"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": ["Person", "Organization"],
      "@id": "https://generateuuid.net/about",
      "name": "RatHax",
      "email": "contact@generateuuid.net",
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
<style></style>
