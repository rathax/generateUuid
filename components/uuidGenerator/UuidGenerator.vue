
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
            <FormRadio v-model="typetoGenerate" label="Uuid V1" value="V1" id="dv8gfh"/>
            <FormRadio v-model="typetoGenerate" label="Uuid V4" value="V4" id="dcghdD"/>
          </div>
          <div class="flex gap-5 md:gap-10 my-5 items-center" role="radiogroup" aria-labelledby="dc8ev">
            <label id="dc8ev">Format:</label>
            <FormRadio label="plain text" value="plain-text" v-model="formateToGenrate" id="Clg7e" />
            <FormRadio label="JSON" value="json" v-model="formateToGenrate" id="dClo9g" />
            <FormRadio label="comma separated" value="comma-seperated" v-model="formateToGenrate" id="dclg8"  />
          </div>
          <div class="flex gap-5 md:gap-10 my-5 items-center" role="radiogroup" aria-labelledby="cMJ30">
            <label id="cMJ30">Encoding:</label>
            <FormRadio label="plain" value="plain" v-model="encodingToGenerate" id="dc8dl" />
            <FormRadio label="Base64" value="base64" v-model="encodingToGenerate"  id="vbasd2"/>
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
import UuidVersionGenerator from '@/components/uuidGenerator/UuidVersionGenerator.vue';
import FormCard from '@/components/FormCard.vue';
import UuidGeneratorNamespace from './UuidGeneratorNamespace.vue';
import UuidGeneratorValidate from './UuidGeneratorValidate.vue'
import UuidGeneratorFaq from './UuidGeneratorFaq.vue';
import AnchorHeading from '@/components/FormAnchorHeading.vue';
import { useHead } from '@unhead/vue';


const valueGuuidV1 = ref(uuidv1())
const valueGuuidV4 = ref(uuidv4())

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
  navigator.clipboard.writeText(generatedOutput.value);
  setTimeout(function () {
    copyButtonVariant.value = 'primary'
  }, 1200)
}

</script>
<style></style>
