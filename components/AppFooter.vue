<script setup lang="ts">
  import { useAsset } from "~/composables/useAsset";

  const socialIcons = [
    {
      label: "EarthForm Instagram",
      icon: "/icons/instagram.svg",
      link: "instagram.com/earthformlabs",
    },
    {
      label: "EarthForm LinkedIn",
      icon: "/icons/linkedin.svg",
      link: "linkedin.com/company/earthform-labs",
    },
    // {
    //   icon: "/icons/twitter.svg",
    //   link: "twitter.com/earthformlabs",
    // },
  ];

  const getFullYear = () => {
    return new Date().getFullYear();
  };
</script>

<template>
  <div class="w-full bg-ef-mauve">
    <div
      class="container m-auto grid grid-cols-0 sm:grid-cols-8 gap-8 justify-between px-8 py-16 text-white"
    >
      <div class="sm:col-span-5 grid gap-8">
        <nuxt-link to="/">
          <h3 class="text-2xl pb-3">EarthForm</h3>
          <p class="pb-2 text-sm">
            EarthForm is a biotechnology startup on a mission to change the way
            we design and produce materials by transforming underutilized waste
            into high-value biomaterials.
          </p>
          <p class="pb-2">Bangkok, Thailand</p>
          <p class="font-thin text-xs">
            © Copyright EarthForm {{ getFullYear() }}
          </p>
        </nuxt-link>
        <div class="flex gap-4">
          <nuxt-link
            v-for="(icons, index) in socialIcons"
            :key="index"
            :to="`https://www.${icons.link}`"
            :aria-label="icons.label"
            target="_blank"
            rel="noopener"
          >
            <img
              :src="icons.icon"
              width="100%"
              height="100%"
              alt="Social icons"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="sm:col-span-3 flex flex-col gap-4 sm:items-end">
        <NavLinks />
      </div>
    </div>
  </div>
</template>

<style></style>
