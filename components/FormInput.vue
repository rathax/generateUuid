
<template>
    <div class="flex flex-col">
        <div :data-focus="dataFocused" :class="['relative px-3 py-3 border transition-all appearance-none rounded-md data-focus:ring-3 ring-primary border-surface-border bg-surface-0',
            { 'data-focus:border-primary-500 hover:border-primary-500 ': !validated },
            { 'data-focus:border-error-500 hover:border-error-500 border-error-500 ring-error-200': validated && valid === false },
            { 'data-focus:border-success-500 hover:border-success-500 border-success-500': validated && valid === true },
        ]" @click="inputRef?.focus()">
            <input v-bind="{ ...attributes, ...props }" v-model="value" ref="inputRef" :id="id + '-input'"
                :aria-labelledby="id + '-label'" class="w-full bg-transparent focus:ring-0 focus:outline-hidden"
                @focus="isFocused = true" @blur="isFocused = false">
            <label :data-label-active="dataLabelActive" :id="id + '-label'" v-if="label" :class="[
                'absolute top-1/2 data-label-active:-top-[0.85rem] data-label-active:text-sm transition-all ease-in-out  data-[label-active]:leading-[0px] leading-[0px] text-surface-500 select-text',
                floatingLabel ? 'data-label-active:text-2xl left-3' : 'data-label-active:text-base left-0'
            ]">{{ label }}</label>
        </div>
    </div>

    <!--<span class="block relative">
        <input v-bind="{ ...$attrs, ...props, ...attributes }" v-model="value"
            class="peer px-3 py-2 border border-muted transition-all appearance-none rounded-md focus:outline-hidden focus:outline-offset-0 focus:ring-[3px] ring-primary-100 focus:border-primary-500 hover:border-primary-500">
        <label
            class="absolute top-1/2 peer-focus:-top-3 peer-focus:text-sm transition-all left-2 peer-focus:leading-[0px] leading-[0px] text-muted-500">
            {{ attributes }} </label>
    </span> -->
</template>
    
    
<script setup lang="ts">
import { ref, computed, useAttrs, } from "vue";

export interface Props {
    modelValue?: string | number
    validated?: boolean
    valid?: boolean | undefined,
    placeholder?: string
    type?: "number" | "text"
    floatingLabel?: boolean
    label?: string
    id: string
}
const inputRef = ref<HTMLInputElement | null>(null)
const { class: classes, ...attributes } = useAttrs()
const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<{
    'update:modelValue': [value: string | number | undefined]
}>()

const isFocused = ref<true | false>()
const dataFocused = computed(() => {
    return isFocused.value || undefined
})
const dataLabelActive = computed(() => {
    if (props.modelValue) return true
    if (props.floatingLabel) {
        return isFocused.value || undefined
    }
    return true
})

const value = computed({
    get() { return props.modelValue },
    set(newValue) { emit('update:modelValue', newValue) }
})

</script>
    
<style></style>


