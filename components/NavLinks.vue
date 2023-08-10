<script setup lang="ts">
  const navList = ["Products", "Projects", "Work with us", "About"];

  const transformLinks: void = navList.forEach((nav) => {
    return nav.toLowerCase().replace(/\s/g, "-");
  });
</script>

<template>
  <nuxt-link
    v-for="(nav, index) in navList"
    :to="`/${nav.toLowerCase().replace(/\s/g, `-`)}`"
    :key="index"
    >{{ nav }}</nuxt-link
  >
</template>
