<script setup lang="ts">
  useSeoMeta({
    title: "EarthForm - Products",
    ogTitle: "EarthForm - Products",
    description:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogDescription:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogImage: "https://earthformlabs.com/ef-logo-square.png",
  });

  const herocardData = {
    tagline: "Growing Materials for Resilient & Regenerative Futures",
    subtile:
      "EarthForm is stewarding the process of building adaptive societies with biomaterials.",
    img: "/images/mushroom-gradient.webp",
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
          <h2 class="cobalt-blue">What is Mycelium?</h2>
        </div>

        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <div>
            <p class="very-dark-blue mb-4">
              Mycelium are a network of thread-like structures called hyphae -
              they are the root structures of fungi.
            </p>
            <p class="very-dark-blue">
              By allowing mycelium to grow and bind together organic waste
              substrate, such as agricultural byproducts or food waste, into a
              solid structure, mycelium composite is created.
            </p>
          </div>
          <v-img :src="'/images/mushroom.webp'" class="rounded-2xl" />
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <v-img :src="'/images/mycelium-roots.webp'" class="rounded-2xl" />
          <div>
            <p class="very-dark-blue mb-4">
              Not all composites are created equal, it’s a class of materials
              and the outputs are determined by the ingredients, microstructure
              and processing conditions.
            </p>
            <p class="very-dark-blue">
              Our proprietary formulas are engineered to produce properties that
              result in high-performing for the functions of our products. It’s
              design, driven by nature and empowered by science. 
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="cobalt-blue mb-6">Process: Bio-Circular-Green</h2>
        <div class="grid grid-cols-none sm:grid-cols-2">
          <p class="very-dark-blue">
            At EarthForm, we harness the technology of mycelium to develop
            compostable, non-toxic, and high-performing biomaterials for
            lifestyle, interior design, merchandising and packaging products. We
            envision a world surrounded by materials conducive to life on Earth.
          </p>
        </div>
      </div>
      <div class="grid gap-6">
        <div class="grid grid-cols-none sm:grid-cols-3 gap-4">
          <v-img src="/images/rawmat-rice.webp" cover class="rounded-xl" />
          <v-img src="/images/rawmat-egg.webp" cover class="rounded-xl" />
          <v-img src="/images/rawmat-coffee.webp" cover class="rounded-xl" />
        </div>
        <p class="font-bold cobalt-blue">
          Construction Waste • Agricultural Waste • Food Waste
        </p>
      </div>
      <div class="py-4">
        <v-img
          src="/images/process-diagram.webp"
          cover
          class="rounded-xl mx-auto w-full h-full"
          max-width="80%"
        />
      </div>
      <div class="grid gap-8">
        <h2 class="cobalt-blue">Responsibly Sourced Byproducts</h2>
        <div class="grid grid-cols-none sm:grid-cols-2">
          <p class="font-normal very-dark-blue" cover>
            We collaborate with a network of local farmers and food waste
            suppliers near our laboratory in Nakorn Pathom, just outside of
            Bangkok, Thailand. EarthForm is committed to supply-chain
            transparency and fair trade practices to ensure quality and
            responsible sourcing. 
          </p>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-4 gap-4">
          <v-img
            src="/images/rawmat-rice.webp"
            cover
            class="rounded-xl"
            max-height="300px"
          />
          <v-img
            src="/images/rawmat-wood.webp"
            cover
            class="rounded-xl"
            max-height="300px"
          />
          <v-img
            src="/images/rawmat-stem.webp"
            cover
            class="rounded-xl"
            max-height="300px"
          />
          <v-img
            src="/images/rawmat-cotton.webp"
            cover
            class="rounded-xl"
            max-height="300px"
          />
        </div>
        <div>
          <p class="font-bold cobalt-blue">Rice Husks</p>
          <p class="font-bold cobalt-blue">Sawdust</p>
          <p class="font-bold cobalt-blue">Water Hyacinth (Invasive Species)</p>
          <p class="font-bold cobalt-blue">
            Cellulose-based (Paper Cup, Textiles Waste)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
