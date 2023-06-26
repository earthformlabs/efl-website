<script setup lang="ts">
  useSeoMeta({
    title: "EarthForm",
    ogTitle: "EarthForm",
    description:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogDescription:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogImage: "https://earthformlabs.com/ef-logo-square.png",
  });
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <ContactBanner />
    <AppFooter />
  </div>
</template>
