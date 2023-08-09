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
  <div class="h-[600px] sm:h-screen">
    <div
      class="container mx-auto pt-[120px] px-8 py-4 flex items-center relative z-10 h-full"
    >
      <div
        class="px-10 h-full max-h-[700px] rounded-2xl flex justify-center items-center gradient-bg text-white"
        :style="
          img ? `background-image: url(${img});` : `background-color: grey;`
        "
      >
        <div class="grid grid-cols-none sm:grid-cols-4">
          <div class="grid col-span-3 gap-4">
            <h1>{{ tagline }}</h1>
            <div>
              <p class="text-2xl mb-2 max-w-[60%]">{{ subtile }}</p>
              <p class="pr-0 sm:pr-20">
                {{ description }}
              </p>
              <v-btn v-if="email_cta" rounded flat>Stay updated</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
