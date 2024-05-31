
<template>
    <FormCard class="m-auto">
        <AnchorHeading id="Namespaced-UUIDs" class="text-3xl mb-14 mt-4 text-center"  text="Namespaced UUIDs" />

        <div class="flex flex-col sm:flex-row gap-12 sm:gap-5 ">
            <FormInput id="dc84d" class="w-full" floating-label label="Name" v-model="name" />
            <FormInput id="xcl97d" class="w-full" :valid="nameSpacevalid" :validated="nameSpacevalid !== undefined" floating-label
                label="Namespace" v-model="nameSpace" />
        </div>
        <UuidVersionGenerator class="mt-14" :uuid="valueGuuidV3" @click:copy="copyToClipboard(valueGuuidV3)"
            @click:refresh="nameSpace = uuidv4()">
            <AnchorHeading id="UUIDv3" class="text-2xl  mb-5 text-center" tag="h3" text="Version 3 (namespace w/ MD5) UUID:" />
        </UuidVersionGenerator>
        <div class="text-base mt-3 text-center"> Note: Per the RFC, "If backward compatibility is not an issue, SHA-1
            Version 5 is preferred."</div>
        <UuidVersionGenerator class="mt-12" :uuid="valueGuuidV5" @click:refresh="nameSpace = uuidv4()"
            @click:copy="copyToClipboard(valueGuuidV5)">
            <AnchorHeading id="UUIDv5" class="text-2xl  mb-5 text-center" tag="h3" text="Version 5 (namespace w/ SHA-1) UUID:" />
        </UuidVersionGenerator>
    </FormCard>
</template>
    
    
<script setup lang="ts">
import { ref, watch } from 'vue';
import { v4 as uuidv4, v3 as uuidv3, v5 as uuidv5 } from 'uuid';

import FormInput from '@/components/FormInput.vue';
import UuidVersionGenerator from '@/components/uuidGenerator/UuidVersionGenerator.vue';
import FormCard from '@/components/FormCard.vue';
import { useRouter } from "vue-router"
import AnchorHeading from '@/components/AnchorHeading.vue';

const router = useRouter()

const name = ref("name")
const nameSpace = ref(import.meta.env.SSR ? "" : uuidv4())
const nameSpacevalid = ref<boolean | undefined>(undefined)
const valueGuuidV3 = ref("")
const valueGuuidV5 = ref("")


watch([name, nameSpace], ([newName, newNameSpace],) => {
    nameSpacevalid.value = undefined
    try {
        valueGuuidV3.value = uuidv3(newName, newNameSpace)
        valueGuuidV5.value = uuidv5(newName, newNameSpace)

    } catch {
        nameSpacevalid.value = false
        valueGuuidV3.value = "Invalid Namespace UUID"
        valueGuuidV5.value = "Invalid Namespace UUID"
    }

}, { immediate: true })

const copyToClipboard = (string: string) => {
    navigator.clipboard.writeText(string);
}

</script>
<style></style>