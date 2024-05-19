
<template>
    <FormCard class="m-auto">
        <AnchorHeading id="Validate-UUID" class="text-3xl text-center mb-14 mt-4" tag="h2" text="Decode UUID" />

        <FormRow :message="errorMessage" :variant="IsValid === true ? 'success' : 'error'" class="text-xl">
            <div class="flex gap-5">
                <FormInput id="dLciz" class="w-full" floating-label label="UUID" v-model="uuid" :valid="IsValid" />
                <FormButton @click="validateInput">Decode</FormButton>
            </div>
        </FormRow>
        <Transition name="fade">
            <div class="grid grid-cols-[1fr_2fr] text-lg gap-y-4  gap-x-2 mt-4	items-center mx-2" v-if="touched">
                <div>Single Integer Value</div>
                <div>{{ intValue }}</div>
                <div>Version</div>
                <div>{{ uuidVersion }}</div>
                <div>Variant</div>
                <div> {{ variant }}</div>
                <div>Time (UUIDv1)</div>
                <div>{{ uuidTimestamp }}</div>
            </div>
        </Transition>

    </FormCard>
</template>
    
    
<script setup lang="ts">
import { computed, ref, } from 'vue';
import { validate, version } from 'uuid';

import FormInput from '@/components/FormInput.vue';
import FormCard from '@/components/FormCard.vue';
import FormButton from '@/components/FormButton.vue';
import FormRow from '@/components/FormRow.vue';
import AnchorHeading from '@/components/AnchorHeading.vue';

const uuid = ref<string>("")

const IsValid = ref<boolean | undefined>(true)
const touched = ref(false)

const intValue = ref("-")
const uuidVersion = ref("-")
const uuidTimestamp = ref<string | Date>("-")
const variant = ref<string>("-")

const errorMessage = computed(() => {
    if (!touched.value) return undefined
    if (IsValid.value === false) return `This is a not a Valid UUID`
    else return `This is a valid version ${uuidVersion.value} UUID.`
})

const validateInput = () => {
    touched.value = true
    IsValid.value = validate(uuid.value || "")
    intValue.value = "-"
    uuidVersion.value = "-"
    uuidTimestamp.value = "-"
    variant.value = "-"

    intValue.value = toBigInt(uuid.value)
    uuidVersion.value = IsValid.value ? version(uuid.value).toString() : "-"
    uuidTimestamp.value = uuidVersion.value === "1" ? get_date_obj(uuid.value) : "-"
    const variantHax = "0x" + uuid.value[19]
    if (!uuid.value[19]) variant.value = "-"
    else if (variantHax <= "0x7") variant.value = "reserved (NCS backward compatible)"
    else if (variantHax <= "0xb") variant.value = "DCE 1.1, ISO/IEC 11578:1996"
    else if (variantHax <= "0xd") variant.value = "reserved (Microsoft GUID)"
    else if (variantHax <= "0xe") variant.value = "reserved (future use)"
    else if (variantHax <= "0xf") variant.value = 'unknown / invalid. Must end with "0"'
}

function toBigInt(uuid: string) {
    try {
        return BigInt("0x" + uuid.replace(/-/g, "")).toString()
    } catch {
        return "-"
    }
}

function get_time_int(uuid_str: string) {
    var uuid_arr = uuid_str.split('-'),
        time_str = [
            uuid_arr[2].substring(1),
            uuid_arr[1],
            uuid_arr[0]
        ].join('');
    return parseInt(time_str, 16);
};
function get_date_obj(uuid_str: string) {
    var int_time = get_time_int(uuid_str) - 122192928000000000,
        int_millisec = Math.floor(int_time / 10000);
    return new Date(int_millisec);
};


</script>
<style></style>