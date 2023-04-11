<script setup lang="ts">
  import { useAsset } from "~/composables/useAsset";

  const aboutUs = [
    {
      title: "Vision",
      desc: "We believe in regenerative futures. This means cultivating an economy that goes beyond sustaining the current state of our environment and aims to actively restore and regenerate ecosystems, communities, and the planet as a whole.",
    },
    {
      title: "Values",
      desc: "Collaboration, transparency, and education are at the core of our operations. Through open innovation initiatives, academic and community partnerships, we’re dedicated to engaging and empowering communities to be active participants in creating regenerative futures.",
    },
    {
      title: "Community",
      desc: "Community plays a vital role in achieving our vision. We are committed to involving stakeholder communities in our efforts to create regenerative systems and recognize the importance of social responsibility for progress.",
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
          <h1>About</h1>
          <p class="">
            EarthForm Labs is a purpose-driven organization. We’re guided by our
            mission, vision, values and community to do more than
            business-as-usual.
          </p>
        </div>
      </div>
    </div>
    <div
      class="h-[600px] sm:h-screen absolute top-0 left-0 right-0 bottom-0 landing-bg-image"
    />
  </div>
  <div class="container mx-auto px-4 py-10 sm:py-20 grid gap-8 sm:gap-16">
    <div class="grid gap-8 mission-bg-image rounded-xl px-10 py-10 text-white">
      <div class="grid grid-cols-none sm:grid-cols-2">
        <div class="grid gap-4">
          <h2>Mission</h2>
          <p>
            Our mission is to build and enable circular economy systems in
            Thailand to reduce waste and address the global climate crisis.
            We’re committed to regenerative design and production practices that
            tend to the well-being of people and the natural world.
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- about -->
      <div
        v-for="(item, index) in aboutUs"
        :key="index"
        class="rounded-2xl p-4 md:px-8 md:py-10 flex flex-col gap-6"
      >
        <p class="font-sans text-base sm:text-xl font-medium">
          {{ item.title }}
        </p>
        <p class="">
          {{ item.desc }}
        </p>
      </div>
    </div>
    <!-- sdg -->
    <div class="flex flex-wrap gap-6 justify-center pb-8">
      <div>
        <img
          src="~/assets/images/sdg/sdg-08.webp"
          alt=""
          width="100%"
          height="auto"
          class="rounded-xl max-w-[160px]"
        />
      </div>
      <div>
        <img
          src="~/assets/images/sdg/sdg-09.webp"
          alt=""
          width="100%"
          height="auto"
          class="rounded-xl max-w-[160px]"
        />
      </div>
      <div>
        <img
          src="~/assets/images/sdg/sdg-12.webp"
          alt=""
          width="100%"
          height="auto"
          class="rounded-xl max-w-[160px]"
        />
      </div>
      <div>
        <img
          src="~/assets/images/sdg/sdg-13.webp"
          alt=""
          width="100%"
          height="auto"
          class="rounded-xl max-w-[160px]"
        />
      </div>
    </div>
    <!-- team -->
    <div class="grid gap-8">
      <h2>Team</h2>
      <h3>Founders</h3>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
        <div class="w-full h-full grid gap-4">
          <img
            src="~/assets/images/team/nat.png"
            alt=""
            width="100%"
            height="100%"
            class="rounded-2xl max-h-[500px]"
          />
          <p>CEO, CIO</p>
        </div>
        <div class="w-full h-full grid gap-4">
          <img
            src="~/assets/images/team/nika.png"
            alt=""
            width="100%"
            height="100%"
            class="rounded-2xl max-h-[500px]"
          />
          <p>CEO, COO</p>
        </div>
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

  .mission-bg-image {
    background-image: url("~/assets/images/aerial-terrain-landscape-2.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .landing-bg-image {
    opacity: 0.1;
    background-image: url("~/assets/images/mushrooms.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
