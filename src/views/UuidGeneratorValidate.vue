
<template>
    <FormCard class="m-auto">
        <h2 class=" text-3xl font-bold text-center mb-14 mt-4">Validate UUID</h2>

        <FormRow :message="errorMessage" :variant="IsValid === true ? 'success' : 'error'" class="text-xl">
            <div class="flex gap-5"> 
                <FormInput id="dLciz" :error-message="errorMessage" class="w-full" floating-label label="UUID" v-model="uuid"
                    :valid="IsValid" />
                <FormButton @click="validateInput">Validate</FormButton>
            </div>
        </FormRow>
    </FormCard>
</template>
    
    
<script setup lang="ts">
import { computed, ref,  } from 'vue';
import { validate, version } from 'uuid';
import { useI18n } from "vue-i18n";

import FormInput from '@/components/FormInput.vue';
import FormCard from '@/components/FormCard.vue';
import FormButton from '@/components/FormButton.vue';
import FormRow from '@/components/FormRow.vue';

const { t } = useI18n();

const uuid = ref(undefined)
const uuidVersion = ref<undefined | number>(undefined)

const IsValid = ref<boolean | undefined>(true)
const touched = ref(false)
const errorMessage = computed(() => {
    if (!touched.value) return undefined
    if (IsValid.value === false) return  `This is a not a Valid UUID`
    else return `This is a valid version ${uuidVersion.value} UUID.`
})

const validateInput = () => {
    touched.value = true;
    IsValid.value = validate(uuid.value || "")
    uuidVersion.value = version(uuid.value || "")
}

</script>
<style></style>