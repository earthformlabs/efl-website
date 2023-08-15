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
            we design and produce materials by transforming underutilized food
            waste into high-value biomaterials. With a core focus on leveraging
            the technology of mycelium, EarthForm specializes in developing
            circular and non-toxic home, interior design and merchandising
            products for consumer brands, exhibitions and events.
          </p>
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
      <div class="sm:col-span-3 flex flex-col gap-4 sm:items-end">
        <NavLinks />
      </div>
    </div>
  </div>
</template>

<style></style>
