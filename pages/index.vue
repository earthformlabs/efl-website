<script setup lang="ts">
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
    "PACKAGING",
    "FASHION",
    "ARCHITECTURE",
    "CONSTRUCTION",
    "INTERIOR DESIGN",
    "VISUAL MERCHANDISING",
  ];

  const herocardData = {
    tagline: "Design-Focused, Impact-Driven",
    subtile:
      "Inspired by nature, we’re designing and producing the next generation of materials for a healthy planet.",
    img: "/images/aerial-terrain-gradient.png",
    email_cta: true,
  };
</script>

<template>
  <div class="pale-yellow-bg">
    <HeroCard v-bind="herocardData" />
    <div class="container mx-auto px-4 py-10 sm:py-20 grid gap-8 sm:gap-16">
      <div class="grid gap-8">
        <div class="grid grid-cols-none sm:grid-cols-2">
          <h2 class="cobalt-blue">
            “The materials we interact with on a daily basis matter.”
          </h2>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2">
          <p class="very-dark-blue">
            How we design and the materials we choose for our everyday products
            determine the present and future outcomes of human and non-human
            life and overall planetary health.
          </p>
        </div>
        <div class="w-full rounded-lg">
          <v-img contain :src="'/images/solar-punk.png'" class="rounded-2xl" />
        </div>
      </div>
      <div class="grid grid-cols-none sm:grid-cols-2">
        <h2 class="cobalt-blue">Mycelium to Biomaterials</h2>
      </div>
      <div class="grid grid-cols-none sm:grid-cols-2">
        <p class="very-dark-blue">
          At EarthForm, we harness the technology of mycelium to develop
          compostable, non-toxic, and high-performance biomaterials for
          lifestyle, interior design, merchandising and packaging products. We
          envision a world surrounded by materials conducive to life on Earth.
        </p>
      </div>
      <div class="grid gap-6">
        <v-img
          src="/images/mycel-1.png"
          cover
          class="rounded-xl"
          max-height="300px"
        />
        <div class="grid grid-cols-none sm:grid-cols-2 gap-4">
          <v-img
            src="/images/mycel-2.png"
            cover
            class="rounded-xl"
            max-height="300px"
          />
          <v-img
            src="/images/mycel-3.png"
            cover
            class="rounded-xl"
            max-height="300px"
          />
        </div>
      </div>
      <div class="grid gap-8">
        <h2 class="cobalt-blue">Responsibly Sourced Byproducts</h2>
        <p class="font-normal very-dark-blue" cover>
          Our raw materials are sourced locally in Thailand.
        </p>
        <nuxt-link
          to="/products#responsibly-sourced-byproducts"
          class="cobalt-blue"
          >Learn more</nuxt-link
        >
        <div class="grid grid-cols-none sm:grid-cols-3 gap-4">
          <v-img
            src="/images/rawmat-rice.png"
            cover
            class="rounded-xl"
            max-height="300px"
          />
          <v-img
            src="/images/rawmat-construction.png"
            cover
            class="rounded-xl"
            max-height="300px"
          />
          <v-img
            src="/images/rawmat-stem.png"
            cover
            class="rounded-xl"
            max-height="300px"
          />
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

  .darken-bg {
    filter: brightness(70%);
    background: linear-gradient(
      134.98deg,
      #060227 0%,
      #2c3e4b 52.6%,
      #617451 100%
    );
  }
</style>
