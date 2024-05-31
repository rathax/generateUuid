
<template>
    <div class="flex items-center">
        <div class="relative inline-flex cursor-pointer select-none align-bottom " @click="handelWrapperclick" @keydown.space="handelWrapperclick" @keydown.enter="handelWrapperclick">
            <div role="radio" tabindex="0" ref="radioButton" :aria-labelledby="id + '-label'" :aria-checked="checked"
                :class="['border flex justify-center items-center rounded-full transition-all h-5 w-5', checked ? 'border-primary-500 bg-primary-500 focus:ring-3 ring-primary' : 'border-outline-300']">
                <div
                    :class="['w-[10px] h-[10px] duration-200 bg-surface-0  rounded-full scale1', { 'invisible scale0': !checked }]">
                </div>
            </div>
        </div>
        <label :class="['ml-2 cursor-pointer select-none']" 
             @click="handelWrapperclick" :id="id + '-label'">{{ label }}</label>
    </div>
</template>
    
    
<script setup lang="ts">
import { ref, computed } from "vue";
export interface Props {
    label?: string
    value?: string | boolean | number
    id: string,
    modelValue?: string | boolean | number
}

const props = withDefaults(defineProps<Props>(), {
})

const checked = computed(() => props.value === props.modelValue)

const emit = defineEmits<{
    'update:modelValue': [value: string | boolean | number]
}>()


const a11yName = (Math.random() + 1).toString(36).substring(7);
const radioButton = ref<HTMLDivElement>()

const handelWrapperclick = () => {
    radioButton.value?.focus()
    if (!props.value) return
    emit("update:modelValue", props.value)
}

</script>
    
<style>
.scale1 {
    transform: translateZ(0) scale(1.0, 1.0) backface-visibility
}

.scale0 {
    transform: translateZ(0) scale(0.1, 0.1)
}
</style>