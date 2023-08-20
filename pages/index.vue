<script setup lang="ts">
  const herocardData = {
    tagline: "Design-Focused, Impact-Driven",
    subtile:
      "Inspired by nature, we’re designing and producing the next generation of materials for a healthy planet.",
    img: "/images/aerial-terrain-gradient.webp",
    img_thumb: "/images/thumb/aerial-terrain-gradient.webp",
    email_cta: true,
  };
</script>

<template>
  <div class="pale-yellow-bg">
    <HeroCard v-bind="herocardData" />
    <div
      class="container mx-auto px-4 sm:px-20 py-10 sm:py-20 grid gap-8 sm:gap-16"
    >
      <div class="grid gap-8">
        <div class="grid grid-cols-none sm:grid-cols-2">
          <h2 class="text-ef-cobalt-blue">
            “The materials we interact with on a daily basis matter.”
          </h2>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2">
          <p class="text-ef-very-dark-blue">
            How we design and the materials we choose for our everyday products
            determine the present and future outcomes of human and non-human
            life and overall planetary health.
          </p>
        </div>
        <div class="w-full rounded-lg">
          <v-img
            contain
            :src="'/images/solar-punk.webp'"
            class="rounded-2xl"
            alt="Solar punk image"
          />
        </div>
      </div>
      <div>
        <div class="grid grid-cols-none sm:grid-cols-2 mb-6">
          <h2 class="text-ef-cobalt-blue">Mycelium to Biomaterials</h2>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2">
          <p class="text-ef-very-dark-blue">
            At EarthForm, we harness the technology of mycelium to develop
            compostable, non-toxic, and high-performance biomaterials for
            lifestyle, interior design, merchandising and packaging products. We
            envision a world surrounded by materials conducive to life on Earth.
          </p>
        </div>
      </div>
      <div class="grid gap-6">
        <v-img
          src="/images/mycel-1.webp"
          cover
          class="rounded-xl"
          max-height="300px"
          alt="Mycelium image"
        />
        <div class="grid grid-cols-none sm:grid-cols-2 gap-4">
          <v-img
            src="/images/mycel-2.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Mycelium image"
          />
          <v-img
            src="/images/mycel-3.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Mycelium image"
          />
        </div>
      </div>
      <div class="grid gap-8">
        <h2 class="text-ef-cobalt-blue">Responsibly Sourced Byproducts</h2>
        <p class="font-normal text-ef-very-dark-blue" cover>
          Our raw materials are sourced locally in Thailand.
        </p>
        <nuxt-link
          to="/products#responsibly-sourced-byproducts"
          class="text-ef-cobalt-blue flex gap-2"
        >
          <span>Learn more</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13.0002H16.17L11.29 17.8802C10.9 18.2702 10.9 18.9102 11.29 19.3002C11.68 19.6902 12.31 19.6902 12.7 19.3002L19.29 12.7102C19.3827 12.6177 19.4563 12.5078 19.5064 12.3868C19.5566 12.2659 19.5824 12.1362 19.5824 12.0052C19.5824 11.8743 19.5566 11.7446 19.5064 11.6236C19.4563 11.5026 19.3827 11.3927 19.29 11.3002L12.71 4.70022C12.6174 4.60764 12.5075 4.5342 12.3865 4.4841C12.2656 4.43399 12.1359 4.4082 12.005 4.4082C11.8741 4.4082 11.7444 4.43399 11.6235 4.4841C11.5025 4.5342 11.3926 4.60764 11.3 4.70022C11.2074 4.79281 11.134 4.90272 11.0839 5.02368C11.0338 5.14464 11.008 5.27429 11.008 5.40522C11.008 5.53615 11.0338 5.6658 11.0839 5.78677C11.134 5.90773 11.2074 6.01764 11.3 6.11022L16.17 11.0002H5C4.45 11.0002 4 11.4502 4 12.0002C4 12.5502 4.45 13.0002 5 13.0002Z"
              fill="currentColor"
            />
          </svg>
        </nuxt-link>
        <div class="grid grid-cols-none sm:grid-cols-3 gap-4">
          <v-img
            src="/images/rawmat-rice.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - rice"
          />
          <v-img
            src="/images/rawmat-construction.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - constructio waste"
          />
          <v-img
            src="/images/rawmat-stem.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - agricultural waste"
          />
        </div>
      </div>
    </div>
  </div>
</template>
