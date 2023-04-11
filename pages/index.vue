<script setup lang="ts">
  import { useAsset } from "~/composables/useAsset";

  const approach = [
    {
      title: "Closed-Loop Systems",
      icon: "closed-loop.svg",
    },
    {
      title: "Meaningful Jobs",
      icon: "jobs.svg",
    },
    {
      title: "Climate Action",
      icon: "climate.svg",
    },
  ];

  const impactList = [
    "PACKING",
    "FASHION",
    "ARCHITECTURE",
    "CONSTRUCTION",
    "IMTERIOR DESIGN",
    "VISUAL MERCHANDISING",
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
      class="h-[600px] sm:h-screen absolute top-0 left-0 right-0 bottom-0 missionImage-bg"
    />
  </div>
  <div class="container mx-auto px-4 py-10 sm:py-20 grid gap-8 sm:gap-16">
    <div class="grid gap-8">
      <div class="grid grid-cols-none sm:grid-cols-2">
        <h2>
          We’re transforming underutilized by-products into high-value
          biomaterials.
        </h2>
      </div>
      <div class="w-full h-full">
        <img
          src="~/assets/images/biomaterials-steps.webp"
          alt=""
          width="100%"
          height="100%"
          class="rounded-2xl max-h-[400px]"
          loading="lazy"
        />
      </div>
    </div>
    <div class="grid grid-cols-none sm:grid-cols-2">
      <h2>
        A holistic approach to nature-inspired innovation and value creation for
        people and the planet.
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="(item, index) in approach"
        :key="index"
        class="gradient-bg rounded-2xl px-8 py-10 text-white grid gap-6"
      >
        <img :src="`/icons/${item.icon}`" loading="lazy" />
        <p class="font-sans text-base sm:text-xl font-medium">
          {{ item.title }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-none sm:grid-cols-12 gap-4">
      <div
        class="sm:col-span-7 rounded-xl impact-left-bg text-white p-6 grid gap-10"
      >
        <h3 class="font-bold">
          Broad impact across multiple industries and applications.
        </h3>
        <div>
          <p
            v-for="(impact, index) in impactList"
            :key="index"
            class="font-bold"
          >
            {{ impact }}
          </p>
        </div>
      </div>
      <div class="sm:col-span-5 rounded-xl impact-right-bg p-6 min-h-[200px]" />
    </div>
    <div class="grid gap-8">
      <h2>Manifesto</h2>
      <div class="w-full h-full">
        <img
          src="~/assets/images/rainforest-landscape.webp"
          alt=""
          width="100%"
          height="100%"
          class="rounded-2xl max-h-[500px]"
          loading="lazy"
        />
      </div>
      <div class="grid grid-cols-none sm:grid-cols-2 gap-4">
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

  .introImage-bg {
    background-image: url("~/assets/images/biomaterials-steps.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .impact-left-bg {
    background-image: url("~/assets/images/biomat-texture.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .impact-right-bg {
    background-image: url("~/assets/images/biomat-chair.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .missionImage-bg {
    opacity: 0.1;
    background-image: url("~/assets/images/aerial-terrian-landscape.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
