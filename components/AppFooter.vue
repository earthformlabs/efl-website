<script setup lang="ts">
  import { useAsset } from "~/composables/useAsset";

  const socialIcons = [
    {
      icon: "icons/twitter.svg",
      link: "twitter/earthformlabs",
    },
    {
      icon: "icons/linkedin.svg",
      link: "linkedin/earthformlabs",
    },
    {
      icon: "icons/instagram.svg",
      link: "instagram/earthformlabs",
    },
  ];
</script>

<template>
  <div class="w-full bg-ef-mauve">
    <div
      class="container m-auto flex flex-wrap gap-8 justify-between px-8 py-16 text-white"
    >
      <div class="grid gap-8">
        <nuxt-link to="/">
          <h3 class="text-2xl">EarthForm Labs</h3>
          <p class="font-thin">The Biomaterials Company</p>
        </nuxt-link>
        <div class="flex gap-4">
          <nuxt-link
            v-for="(icons, index) in socialIcons"
            :key="index"
            :to="`https://${icons.link}`"
          >
            <img :src="useAsset(icons.icon)" />
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <NavLinks />
      </div>
    </div>
  </div>
</template>
