
<template>
    <FormCard class="m-auto">
        <h2 class=" text-3xl font-bold text-center mb-14 mt-4">Namespaced UUIDs</h2>

        <div class="flex flex-col sm:flex-row gap-12 sm:gap-5 ">
            <FormInput id="dc84d" class="w-full" floating-label label="Name" v-model="name" />
            <FormInput id="xcl97d" class="w-full" :valid="nameSpacevalid" :validated="nameSpacevalid !== undefined" floating-label
                label="Namespace" v-model="nameSpace" />
        </div>
        <UuidVersionGenerator class="mt-14" :uuid="valueGuuidV3" @click:copy="copyToClipboard(valueGuuidV3)"
            @click:refresh="nameSpace = uuidv4()">
            <h3 class="text-2xl font-bold mb-5 text-center">Version 3 (namespace w/ MD5) UUID:</h3>
        </UuidVersionGenerator>
        <div class="text-base mt-3 text-center"> Note: Per the RFC, "If backward compatibility is not an issue, SHA-1
            Version 5 is preferred."</div>
        <UuidVersionGenerator class="mt-12" :uuid="valueGuuidV5" @click:refresh="nameSpace = uuidv4()"
            @click:copy="copyToClipboard(valueGuuidV5)">
            <h3 class="text-2xl font-bold mb-5 text-center">Version 5 (namespace w/ SHA-1) UUID:</h3>
        </UuidVersionGenerator>
    </FormCard>
</template>
    
    
<script setup lang="ts">
import { ref, watch } from 'vue';
import { v4 as uuidv4, v3 as uuidv3, v5 as uuidv5 } from 'uuid';
import { useI18n } from "vue-i18n";

import FormInput from '@/components/FormInput.vue';
import UuidVersionGenerator from '@/views/UuidVersionGenerator.vue';
import FormCard from '@/components/FormCard.vue';

const { t } = useI18n();

const name = ref("name")
const nameSpace = ref(uuidv4())
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