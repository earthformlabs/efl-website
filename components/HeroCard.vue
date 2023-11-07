<script setup lang="ts">
  interface HeroProps {
    tagline?: string;
    taglineGrid?: number;
    subtile?: string;
    description?: string;
    img?: string;
    img_thumb?: string;
    email_cta?: boolean;
  }

  withDefaults(defineProps<HeroProps>(), {
    taglineGrid: 5,
    email_cta: false,
  });
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
          <div :class="`grid col-span-full md:col-span-${taglineGrid} gap-4`">
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
              <v-dialog width="540">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-if="email_cta"
                    flat
                    rounded
                    v-bind="props"
                    text="Stay updated"
                  />
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card>
                    <iframe
                      width="540"
                      height="487"
                      src="https://edc3d99f.sibforms.com/serve/MUIFAIjekNJsnK8vp7aNeU0PDtXkZ1hisFIIguZREXz3G1bgVcO2zHpCJ0fA7W62-Ffej3aoZP8xsSLTC0LK9fTuYa0gTvxd6PIITIQ68Pi8_7QLYqjR16NxPcYdlEZt2GB8B0wncYbeempsRTD2Bo0hLrMCq1nvOQlmCmH-aV25ZKzS88vmAUQjvIDTvU-dbKpuKOwFhisFgqq_"
                      frameborder="0"
                      scrolling="auto"
                      allowfullscreen
                      style="
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 100%;
                      "
                    ></iframe>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-img>
    </div>
  </div>
</template>
