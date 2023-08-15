<script setup lang="ts">
  defineProps<{
    tagline?: string;
    subtile?: string;
    description?: string;
    img?: string;
    email_cta?: boolean;
  }>();
</script>

<template>
  <div class="h-[700px]">
    <div
      class="container mx-auto pt-[120px] px-8 py-4 flex items-center relative z-10 h-full"
    >
      <v-img
        cover
        class="px-6 lg:px-32 h-full sm:max-h-[400px] md:max-h-[500px] lg:max-h-[700px] rounded-2xl flex justify-center items-center gradient-bg text-white"
        :src="img"
        :lazy-src="img"
      >
        <div class="grid sm:grid-cols-6">
          <div class="grid col-span-full md:col-span-5 gap-4">
            <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl">{{ tagline }}</h1>
          </div>
          <div class="grid col-span-full md:col-span-4 lg:col-span-3">
            <div>
              <p class="text-lg sm:text-2xl mb-4 max-w-[100%]">{{ subtile }}</p>
              <p class="pr-0 sm:pr-20 sm:">
                {{ description }}
              </p>
              <!-- <v-btn v-if="email_cta" rounded flat>Stay updated</v-btn> -->
            </div>
          </div>
        </div>
      </v-img>
    </div>
  </div>
</template>
