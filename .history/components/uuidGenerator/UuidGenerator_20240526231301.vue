
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
  setTimeout(function () {
    copyButtonVariant.value = 'primary'
  }, 1200)
}

</script>
<style></style>
