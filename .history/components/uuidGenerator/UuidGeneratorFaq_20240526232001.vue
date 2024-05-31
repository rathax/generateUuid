
<template>
    <section class="px-8 lg:px-0 transition-[padding] duration-200">
    

        <p class="paragraph">There are five productive versions of UUIDs:
   
        The Version 4 is the most used UUID version because the UUIDs are randomly generated.
        </p>
        <ul class="py-4">
            <li>Version 1: Based on timestamp and MAC address.</li>
            <li>Version 2: Similar to Version 1 with additional allocation for POSIX UID/GID.</li>
            <li>Version 3 ( deprecated ): Uses a namespace and a user-defined name hashed with MD5.</li>
            <li>Version 4: Generated randomly.</li>
            <li>Version 5: Similar to Version 3 but uses SHA-1 hashing.</li>
        </ul>

    </section>
</template>
    
    
<script setup lang="ts">
import AnchorHeading from '@/components/FormAnchorHeading.vue';



</script>
<style></style>