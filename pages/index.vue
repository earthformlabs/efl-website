<script setup lang="ts">
  import { useAsset } from "~/composables/useAsset";

  const data = [
    {
      title: "Closed-Loop Systems",
      icon: "icons/closed-loop.svg",
    },
    {
      title: "Meaningful Jobs",
      icon: "icons/jobs.svg",
    },
    {
      title: "Climate Action",
      icon: "icons/climate.svg",
    },
  ];
</script>

<template>
  <div class="gradient-bg h-[600px] sm:h-screen">
    <div
      class="container mx-auto pt-16 px-8 py-4 flex items-center text-white relative z-10 h-full"
    >
      <div class="grid grid-cols-none sm:grid-cols-2">
        <div class="grid gap-4">
          <h1>Systems change, not climate change</h1>
          <div>
            <p class="text-2xl mb-2">Grow better materials with nature</p>
            <p class="">
              Join us in revolutionizing the way we design and produce everyday
              materials to build regenerative futures.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-screen absolute top-0 left-0 right-0 bottom-0 backgroundImage"
    />
  </div>
  <div class="container mx-auto px-4 py-10 grid gap-10">
    <div class="grid gap-8">
      <div class="grid grid-cols-none sm:grid-cols-2">
        <h2>
          We’re transforming underutilized by-products into high-value
          biomaterials
        </h2>
      </div>
      <img
        src="https://place-hold.it/600x400"
        alt=""
        width="100%"
        class="aspect-video rounded-2xl"
      />
    </div>
    <div class="grid grid-cols-none sm:grid-cols-2">
      <h2>
        A holistic approach to nature-inspired innovation and value creation for
        people and the planet.
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="gradient-bg rounded-2xl px-6 py-10 text-white grid gap-6"
      >
        <img :src="useAsset(item.icon)" alt="" width="auto" height="100%" />
        <p class="font-sans text-base sm:text-xl font-medium">
          {{ item.title }}
        </p>
      </div>
    </div>
    <div class="grid gap-8">
      <h2>Manifesto</h2>
      <img
        src="https://place-hold.it/600x400"
        alt=""
        width="100%"
        class="aspect-video rounded-2xl"
      />
      <div class="grid grid-cols-none sm:grid-cols-2">
        <p class="font-sans text-base sm:text-xl font-medium">
          The health and well-being of the planet and all its inhabitants are
          connected and interdependent. Nurturing and restoring ecosystems and
          communities is essential to creating a regenerative future.
        </p>
        <p>
          We recognize that the impacts of climate change are not felt equally
          across all communities and acknowledge the importance of social
          responsibility in our efforts to achieve our vision. We aim to build
          systems that sustain themselves and create value, health, and
          well-being for all stakeholders. Our work is an ongoing process, and
          we’re committed to transparency and accountability as we strive to
          create a better world.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .gradient-bg {
    background: linear-gradient(
      134.98deg,
      #060227 0%,
      #2c3e4b 52.6%,
      #617451 100%
    );
  }
  .backgroundImage {
    opacity: 0.1;
    background-image: url("~/assets/images/aerial-terrian-landscape.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
