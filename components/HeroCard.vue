<script setup lang="ts">
  defineProps<{
    tagline?: string;
    subtile?: string;
    description?: string;
    img?: string;
    img_thumb?: string;
    email_cta?: boolean;
  }>();
</script>

<template>
  <div class="h-[650px]">
    <div
      class="container mx-auto pt-[120px] px-8 py-4 flex items-center relative z-10 h-full"
    >
      <v-img
        cover
        class="px-6 lg:px-32 h-full sm:max-h-[350px] md:max-h-[450px] lg:max-h-[650px] rounded-2xl flex justify-center items-center gradient-bg text-white"
        :src="img"
        :lazy-src="img_thumb"
        alt="Hero card image"
      >
        <div class="grid sm:grid-cols-6">
          <div class="grid col-span-full md:col-span-5 gap-4">
            <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl">{{ tagline }}</h1>
          </div>
          <div class="grid col-span-full md:col-span-4 lg:col-span-3">
            <div>
              <p class="text-lg font-normal sm:font-medium mb-4 max-w-[100%]">
                {{ subtile }}
              </p>
              <p class="pr-0 sm:pr-20 sm:">
                {{ description }}
              </p>
              <v-btn v-if="email_cta" rounded flat>Stay updated</v-btn>
            </div>
          </div>
        </div>
      </v-img>
    </div>
  </div>
</template>
