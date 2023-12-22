
<template>
    <textarea aria-label="text" 
        class="px-3 py-2 rounded border border-surface-border outline-0 focus:ring-[3px] ring-primary border-r-2 transition-shadow duration-150  focus:border-primary-500] w-full bg-surface-0"
        v-model="value"></textarea>
</template>
    
    
<script setup lang="ts">
import { ref, computed } from "vue";
export interface Props {
    modelValue?: string | undefined
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<{
    'update:modelValue': [value: string | undefined]
}>()

const value = computed({
    get() { return props.modelValue },
    set(newValue) { emit('update:modelValue', newValue) }
})

</script>
    
<style></style>


