
<template>
    <button
        :class="['inline-flex self-center justify-center border px-4 py-2  ring-offset-surface-0 focus:ring-2 ring-primary ring-offset-2 transition-all rounded-md font-bold focus:outline-hidden select-none',
            { 'bg-primary-500 ring-primary-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 border-primary-500 text-surface-button': variant === 'primary' },
            { 'bg-success-500 ring-success-200 hover:bg-success-600 hover:border-success-600 active:bg-success-700 active:border-success-700 border-success-500 text-surface-button': variant === 'success' },
            { 'bg-surface-card ring-primary-200 border-surface-border text-surface-900': variant === 'surface' },
            ]"
        @click="emit('click')">
        <span><slot></slot></span>
    </button>
</template>
    
    
<script setup lang="ts">
import { withDefaults } from "vue";
export interface Props {
    name?: string
    variant?: "primary" | "success" | "surface"
}

const props = withDefaults(defineProps<Props>(), {variant: "primary"})
const emit = defineEmits<{
    'click': []
}>()


</script>
    
<style></style>


