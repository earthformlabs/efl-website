<script setup lang="ts">
  const navList = ["Product", "Projects", "About"];
</script>

<template>
  <nuxt-link
    v-for="(nav, index) in navList"
    :to="`/${nav.toLowerCase()}`"
    :key="index"
    >{{ nav }}</nuxt-link
  >
  <v-btn rounded flat variant="outlined" to="/work-with-us">Work with us</v-btn>
</template>
