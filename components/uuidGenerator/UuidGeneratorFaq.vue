<template>
    <section class="px-8 lg:px-0 transition-[padding] duration-200">
        <AnchorHeading class="h3" tag="h3" text="What is a UUID?" />
        <p class="paragraph">A UUID (Universally Unique Identifier) is a 128-bit identifier that is unique across both
            space
            and time. It is commonly used in software development for various purposes, such as uniquely identifying
            entities.</p>

        <AnchorHeading class="h3" tag="h3" text="How many versions of UUIDs are there and what are they used for?" />
        <p class="paragraph">There are seven productive versions of UUIDs:</p>
        <ul class="py-2">
            <li class="py-1"><b>Version 1:</b> Generated from a timestamp and MAC address. Implementations should
                utilize UUID version 7 over UUID version 1 and 6 if possible.</li>
            <li class="py-1"><b>Version 2:</b> Similar to Version 1 with additional allocation for POSIX UID/GID.</li>
            <li class="py-1"><b>Version 3:</b> ( deprecated ) Uses a namespace and a user-defined name hashed with MD5.
            </li>
            <li class="py-1"><b>Version 4:</b> Generated randomly.</li>
            <li class="py-1"><b>Version 5:</b> Similar to Version 3 but uses SHA-1 hashing.</li>
            <li class="py-1"><b>Version 6:</b> Similar to Version 1 but with a changed order so that sorting them will
                sort by creation time. Version 7 improves on v1 and v6 and should be used over those if possible.</li>
            <li class="py-1"><b>Version 7:</b> Generated from a timestamp and random data.</li>

        </ul>

        <AnchorHeading class="h3" tag="h3" text="How is a UUID structured?" />
        <p class="paragraph">A UUID is typically represented as 32 hexadecimal digits, displayed in five groups
            separated
            by hyphens:

            <span class="block my-6 text-center">
                <span class="block text-2xl tracking-wider"
                    style="font-family: monospace">550e8400-e29b-41d4-a716-446655440000</span>
                <span class="block text-2xl tracking-wider" style="font-family: monospace">xxxxxxxx-xxxx-<span
                        class="font-bold text-red-400">M</span>xxx-<span
                        class="font-bold text-red-400">N</span>xxx-xxxxxxxxxxxx</span>
            </span>

            the UUID version can be identified by looking at the 13th digit (M) of the Hexadecimal UUID string. If the
            digit
            M is 1 then the UUID is version 1, if M is 3 then the
            UUID is version-3, etc.
        </p>
        There is also a “variant” and the 17th (N) digit represents it in hexadecimal:
        <div class="flex justify-center py-4">
            <table class="table text-center table-bordered">
                <thead>
                    <tr>
                        <th class="px-3">Binary</th>
                        <th class="px-3">Hex Digit</th>
                        <th class="px-3">Variant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-monospace">0xxx</td>
                        <td>0 - 7</td>
                        <td>reserved (NCS backward compatible)</td>
                    </tr>
                    <tr>
                        <td class="text-monospace">10xx</td>
                        <td>8 - b</td>
                        <td>DCE 1.1, ISO/IEC 11578:1996</td>
                    </tr>
                    <tr>
                        <td class="text-monospace">110x</td>
                        <td>c - d</td>
                        <td>reserved (Microsoft GUID)</td>
                    </tr>
                    <tr>
                        <td class="text-monospace">1110</td>
                        <td>e</td>
                        <td>reserved (future use)</td>
                    </tr>
                    <tr>
                        <td class="text-monospace">1111</td>
                        <td>f</td>
                        <td>unknown / invalid. Must end with "0"</td>

                    </tr>
                </tbody>
            </table>
        </div>

        <AnchorHeading class="h3" tag="h3" text="When to use UUID version 1?" />
        <p class="paragraph">UUIDv1 is generated based on the current timestamp and node (usually the MAC
            address).
            It's suitable for scenarios where time-based ordering is important, such as in distributed systems. <a
                href="https://www.rfc-editor.org/rfc/rfc9562.html#section-5.7-4" target="_blank">Per the RFC</a>, UUIDv7
            improves on UUIDv1 and UUIDv6 and should be used over those if possible. You usually won't want UUIDv1 or
            UUIDv6. </p>
        <AnchorHeading class="h3" tag="h3" text="When to use UUID version 4?" />
        <p class="paragraph">UUIDv4 is generated using random or pseudo-random numbers. It's suitable for
            scenarios where uniqueness is more critical than time-based ordering. This is a good default choice.</p>

        <AnchorHeading class="h3" tag="h3" text="What is a namespace in UUID versions 3 and 5?" />
        <p class="paragraph">UUIDv3 and UUIDv5 involve hashing a namespace identifier and a name to create a UUID.
            The
            namespace provides a way to avoid collisions between different sets of names.</p>

        <AnchorHeading class="h3" tag="h3" text="When to use UUID version 6?"></AnchorHeading>
        <p class="paragraph">UUIDv6 is a field-compatible version of UUIDv1 and reordered for improved DB locality. It
            is expected that UUIDv6 will primarily be implemented in contexts where UUIDv1 is used. Systems that do not
            involve legacy UUIDv1 should use UUIDv7 instead.</p>

        <AnchorHeading class="h3" tag="h3" text="When to use UUID version 7?"></AnchorHeading>
        <p class="paragraph">UUIDv7 is timestamp base like UUIDv1. The core feature that sets UUIDv7 apart is its
            precise time-sortable property. For example,
            consider using version 7 if you are using UUIDs as database keys. Implementations should utilize UUIDv7 over
            UUIDv1 and UUIDv6 if possible.

        </p>

        <AnchorHeading class="h3" tag="h3" text="Can UUIDs be predicted or duplicated?" />
        <p class="paragraph">The probability of generating the same UUID is extremely low, especially for version 4
            UUIDs
            that use random numbers. However, it's not impossible, and precautions should be taken in critical
            applications.
            For instance, with UUID version 4, the chance of generating a duplicate is about 1 in 5.3x10^36.</p>

        <AnchorHeading class="h3" tag="h3" text="How can I validate a UUID?" />
        <p class="paragraph">Valid UUIDs adhere to the specified format. You can use regular expressions or this app to
            validate a UUID and determine its version.</p>

        <AnchorHeading class="h3" tag="h3" text="Can UUIDs be used as security tokens?" />
        <p class="paragraph">While UUIDs are not designed for cryptographic security, they can be used as identifiers.
            For
            security-sensitive applications, additional measures such as encryption should be considered.</p>

        <AnchorHeading class="h3" tag="h3"
            text="Is there a performance impact when using UUIDs as primary keys in databases?" />
        <p class="paragraph">While UUIDs may have a slightly higher storage overhead compared to sequential integers,
            modern databases are optimized to handle UUIDs efficiently. Considerations may vary based on the specific
            use case and database system. UUIDv7 was specifically designed to be used as primary keys in databases.</p>

        <AnchorHeading class="h3" tag="h3" text="What is the difference between UUID and GUID?" />
        <p class="paragraph">UUID (Universally Unique Identifier) and GUID (Globally Unique Identifier) are often used
            interchangeably. UUID is more commonly used in the context of open standards, while GUID is commonly
            associated
            with Microsoft
            technologies.</p>

        <AnchorHeading class="h3" tag="h3" text="Can UUIDs be used as primary keys in databases?" />
        <p class="paragraph">Yes, UUIDs can be used as primary keys. They provide advantages in distributed systems and
            scenarios where uniqueness across systems is crucial. However, they are larger and can, in certain
            environments, be less efficient than traditional incremental IDs.</p>

        <AnchorHeading class="h3" tag="h3"
            text="Can I use UUIDs in databases that do not support native UUID types?" />
        <p class="paragraph">Yes, you can store UUIDs as strings or binary data in databases that do not have native
            UUID
            support. Be sure to use a consistent format and handle conversions appropriately.</p>

        <AnchorHeading class="h3" tag="h3" text="How secure are UUIDs for sensitive data or cryptographic purposes?" />

        <p class="paragraph">While UUIDs are not intended for cryptographic security, they can be used as identifiers in
            secure systems. For cryptographic purposes, additional measures, such as proper key management, are
            recommended.
        </p>
        <AnchorHeading class="h3" tag="h3" text="Are there any common problems or mistakes in using UUIDs?" />
        <p class="paragraph">Common mistakes include assuming UUIDs are ordered or time-based, using UUIDs as security
            tokens, and inefficient storage or indexing in databases.</p>

        <AnchorHeading class="h3" tag="h3" text="How does a UUID version 1 timestamp work?" />
        <p class="paragraph">In UUID version 1, the timestamp is a 60-bit value representing the number of
            100-nanosecond
            intervals since midnight, October 15, 1582 UTC. This is combined with clock sequence and node (MAC address)
            information.</p>

        <AnchorHeading class="h3" tag="h3" text="Can I use UUIDs in URLs?" />
        <p class="paragraph">Yes, UUIDs can be used in URLs. Normally, UUIDs do not require special URL encoding as they
            consist of hexadecimal characters and hyphens, which are safe in URLs. UUIDs are not human-readable or
            memorable, which can be a downside in user-facing URLs. However, for machine-to-machine communication, this
            is
            not an issue.</p>

    </section>
</template>


<script setup lang="ts">
import AnchorHeading from '@/components/FormAnchorHeading.vue';



</script>
<style></style>