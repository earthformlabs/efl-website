<script setup lang="ts">
  const navList = ["Product", "Projects", "Work with us", "About"];
</script>

<template>
  <nuxt-link
    class="nav-links"
    v-for="(nav, index) in navList"
    :to="`/${nav.toLowerCase().replace(/\s/g, `-`)}`"
    :key="index"
    >{{ nav }}</nuxt-link
  >
</template>

<style scoped>
  a.nav-links {
    padding: 4px 8px;
    border: 1px solid transparent;
  }
  a.nav-links.router-link-active {
    border: 1px solid currentColor;
    border-radius: 9999px;
  }
  a.nav-links:hover:not(.router-link-active) {
    border: 1px solid lightgrey;
    border-radius: 9999px;
  }
</style>
