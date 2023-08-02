<script setup lang="ts">
  import { useAsset } from "~/composables/useAsset";

  const socialIcons = [
    {
      icon: "/icons/instagram.svg",
      link: "instagram.com/earthformlabs",
    },
    {
      icon: "/icons/linkedin.svg",
      link: "linkedin.com/company/earthform-labs",
    },
    {
      icon: "/icons/twitter.svg",
      link: "twitter.com/earthformlabs",
    },
  ];

  const getFullYear = () => {
    return new Date().getFullYear();
  };
</script>

<template>
  <div class="w-full bg-ef-mauve">
    <div
      class="container m-auto flex flex-wrap gap-8 justify-between px-8 py-16 text-white"
    >
      <div class="grid gap-8">
        <nuxt-link to="/">
          <h3 class="text-2xl">EarthForm</h3>
          <p class="font-thin text-xs">
            © Copyright EarthForm {{ getFullYear() }}
          </p>
        </nuxt-link>
        <div class="flex gap-4">
          <nuxt-link
            v-for="(icons, index) in socialIcons"
            :key="index"
            :to="`https://www.${icons.link}`"
            target="_blank"
            rel="noopener"
          >
            <img :src="icons.icon" />
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <NavLinks />
      </div>
    </div>
  </div>
</template>
