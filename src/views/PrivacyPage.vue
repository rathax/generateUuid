
<template>
  <div class="mx-auto flex flex-col items-center max-w-[48rem]">


    <section class="px-8 lg:px-0 transition-[padding] duration-200 my-10">
      <h2 class="text-3xl font-bold text-center">Privacy Policy</h2>

      <AnchorHeading class="h3" tag="h2" text="Introduction" />
      <p class="paragraph">Welcome to generateuuid (“us”, “we”, or “our”). This Privacy Policy explains how we collect,
        use, disclose, and
        protect your information when you visit our website generateuuid.net (the "Site"). By using the Site, you agree to
        the terms of this Privacy Policy.</p>

      <AnchorHeading class="h3" tag="h2" text="Information We Collect" />
      <p class="paragraph">We only collect email addresses from visitors through contact forms on our Site. This
        information is collected solely for communication purposes.</p>

      <AnchorHeading class="h3" tag="h2" text="How We Use Your Information" />
      <p class="paragraph">The email addresses collected are used exclusively for responding to inquiries and
        communicating with you about our services or other matters related to our Site.</p>

      <AnchorHeading class="h3" tag="h2" text="Information Sharing and Disclosure" />
      <p class="paragraph">We do not share, sell, or otherwise disclose your email address to any third parties.</p>

      <AnchorHeading class="h3" tag="h2" text="Security of Your Information" />
      <p class="paragraph">We implement standard security measures to protect the email addresses we collect. However,
        please be aware that no method of electronic transmission or storage is 100% secure, and we cannot guarantee
        absolute security.</p>

      <AnchorHeading class="h3" tag="h2" text="Links To Other Sites" />
      <p class="paragraph">This Site may contain links to other sites that are not operated by us. If you click on a third
        party link, you will be directed to that third party’s site. We advise you to review the Privacy Policy of every
        site you visit.
        <br>
        We have no control over, and assume no responsibility for the content, privacy policies or practices of any third
        party sites or services.
      </p>

      <AnchorHeading class="h3" tag="h2" text="Children's Privacy" />
      <p class="paragraph">We do not specifically address anyone under the age of 13. We do not knowingly collect personal
        information from children under 13. If we become aware that a child under 13 has provided us with personal
        information, we will take steps to delete such information from our records.</p>

      <AnchorHeading class="h3" tag="h2" text="Contact Us" />
      <p class="paragraph">If you have any questions or concerns about this Privacy Policy or our data practices, please
        contact us at support@generateuuid.net.</p>

      <AnchorHeading class="h3" tag="h2" text="Changes to This Privacy Policy" />
      <p class="paragraph">We may update this Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <AnchorHeading class="h3" tag="h2" text="Your Consent" />
      <p class="paragraph">By using our Site, you consent to our Privacy Policy.</p>
    </section>
  </div>
</template>
      
      
<script setup lang="ts">
import AnchorHeading from "@/components/AnchorHeading.vue";
import { useHead } from "@unhead/vue";


const metaDescription = "Privacy policy for generateuuid.net"
const metaTitle = "Generateuuid - privacy"
const metaUrl = "https://generateuuid.net/privacy"
useHead({
  title: metaTitle,
  htmlAttrs: { lang: "en" },
  meta: [
    {
      property: 'og:title',
      content: metaTitle,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: "website",
    },
    {
      property: 'og:url',
      content: metaUrl,
    },
    {
      property: 'og:image',
      content: 'https://generateuuid.net/socialmedia.jpg',
    },
    {
      name: 'twitter:title',
      content: metaTitle,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
    {
      name: 'twitter:url',
      content: metaUrl,
    },
    {
      name: 'twitter:image',
      content: 'https://generateuuid.net/socialmedia.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'keywords',
      content: 'generateuuid privacy, generateuuid.net privacy, uuidgenerator privacy policy'
    },
    {
      name: 'description',
      content: metaDescription,
    },
  ],
  link: [{ rel: "canonical", href: metaUrl }],
  script: [{
    type: "application/ld+json", textContent: JSON.stringify([{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": metaUrl,
      "name": "GenerateUUID - Privacy",
      "inLanguage": "en-US",
    },
    ])
  }]
})


</script>
    
