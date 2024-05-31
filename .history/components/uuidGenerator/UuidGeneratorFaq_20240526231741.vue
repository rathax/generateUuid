
<template>
    <section class="px-8 lg:px-0 transition-[padding] duration-200">
        <AnchorHeading class="h3" tag="h3" text="What is a UUID?" />
        <p class="paragraph">A UUID (Universally Unique Identifier) is a 128-bit identifier that is unique across both space
            and time. It is commonly used in software development for various purposes, such as uniquely identifying
            entities.</p>

        <AnchorHeading class="h3" tag="h3" text="How many versions of UUIDs are there and what are they used for?" />
        <p class="paragraph">There are five productive versions of UUIDs:
        <ul class="py-4">
            <li>Version 1: Based on timestamp and MAC address.</li>
            <li>Version 2: Similar to Version 1 with additional allocation for POSIX UID/GID.</li>
            <li>Version 3 ( deprecated ): Uses a namespace and a user-defined name hashed with MD5.</li>
            <li>Version 4: Generated randomly.</li>
            <li>Version 5: Similar to Version 3 but uses SHA-1 hashing.</li>
        </ul>
        The Version 4 is the most used UUID version because the UUIDs are randomly generated.
        </p>


    </section>
</template>
    
    
<script setup lang="ts">
import AnchorHeading from '@/components/FormAnchorHeading.vue';



</script>
<style></style>