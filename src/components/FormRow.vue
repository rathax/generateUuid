
<template>
    <div class="flex flex-col gap-1">
        <slot></slot>
        <div :class="[variant === 'success' ? 'text-success-500' : 'text-error-500']" v-bind="attributes"
            class="after:content-['.'] after:invisible ml-2">{{
                message
            }}</div>
    </div>
</template>
    
    
<script setup lang="ts">
import { useAttrs, withDefaults } from "vue";
export interface Props {
    variant?: 'success' | 'error'
    message?: string
}
defineOptions({
    inheritAttrs: false
})

const attributes = useAttrs()

withDefaults(defineProps<Props>(), { variant: "error" })



</script>
    
<style></style>






