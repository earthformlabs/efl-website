<script setup lang="ts">
  useSeoMeta({
    title: "EarthForm - Technology",
    ogTitle: "EarthForm - Technology",
    description:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogDescription:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogImage: "https://earthformlabs.com/ef-logo-square.png",
  });

  const herocardData = {
    tagline: "Materials Innovation for Regenerative Futures",
    taglineGrid: 4,
    subtile:
      "We believe in the untapped potential of mycelium to help shape the built environment.",
    img: "/images/mushroom-gradient.webp",
    img_thumb: "/images/thumb/mushroom-gradient.webp",
  };
</script>

<template>
  <div class="pale-yellow-bg">
    <HeroCard v-bind="herocardData" />
    <div
      class="container mx-auto px-4 sm:px-20 py-10 sm:py-20 grid gap-8 sm:gap-16"
    >
      <div class="grid gap-8">
        <div class="grid grid-cols-none lg:grid-cols-2">
          <h2 class="text-ef-cobalt-blue" id="what-is-mycelium">
            What is Mycelium?
          </h2>
        </div>
        <div class="grid grid-cols-none lg:grid-cols-2 gap-8">
          <div>
            <p class="text-ef-very-dark-blue mb-4">
              Mycelium is a network of thread-like structures called hyphae -
              they are the root structures of fungi.
            </p>
            <p class="text-ef-very-dark-blue">
              EarthForm engineers a class of mycelium-based composites with
              unique formulas and processing conditions to create
              high-performance biomaterials for interior design, merchandising,
              construction, and art.
            </p>
          </div>
          <div>
            <p class="text-ef-very-dark-blue">
              It’s design, driven by nature and empowered by science.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <v-img
            cover
            :src="'/images/mushroom.webp'"
            class="rounded-2xl"
            alt="Mushrooms"
            width="100%"
            max-height="300px"
          />
          <v-img
            cover
            :src="'/images/mycelium-roots.webp'"
            class="rounded-2xl"
            alt="Mushrooms roots"
            width="100%"
            max-height="300px"
          />
        </div>
      </div>
      <div>
        <h2 class="text-ef-cobalt-blue mb-6 w-full sm:w-4/5">
          <div>Facilitating Thailand's Bio-Circular-Green</div>
          <div>(BCG) strategy for climate action.</div>
        </h2>
        <div class="grid grid-cols-none lg:grid-cols-2">
          <p class="text-ef-very-dark-blue">
            Impact at EarthForm is holistic, not just in product but in process
            and infrastructure as well.
          </p>
        </div>
      </div>
      <div class="grid gap-6">
        <div class="grid grid-cols-none sm:grid-cols-3 gap-4">
          <v-img
            src="/images/rawmat-rice.webp"
            cover
            class="rounded-xl"
            alt="Raw material - rice"
          />
          <v-img
            src="/images/rawmat-egg.webp"
            cover
            class="rounded-xl"
            alt="Raw mateiral - egg shells"
          />
          <v-img
            src="/images/rawmat-coffee.webp"
            cover
            class="rounded-xl"
            alt="Raw mateiral - coffee grounds"
          />
        </div>
        <p class="font-bold text-ef-cobalt-blue">
          Construction Waste • Agricultural Waste • Food Waste
        </p>
      </div>
      <div class="py-4">
        <v-img
          src="/images/process-diagram.webp"
          cover
          class="rounded-xl mx-auto w-full h-full"
          max-width="80%"
          alt="Process diagram"
        />
      </div>
      <div class="grid gap-8">
        <h2 class="text-ef-cobalt-blue">
          <div>Community-based economic</div>
          <div>development helps us scale.</div>
        </h2>
        <div class="grid grid-cols-none sm:grid-cols-2">
          <p class="font-normal text-ef-very-dark-blue" cover>
            We’re cultivating a network of local farmers and waste suppliers to
            create resiliency in our supply chain. In addition to transparency,
            EarthForm is committed to streamlining raw material access for
            future innovators.
          </p>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-4 gap-4">
          <v-img
            src="/images/rawmat-rice.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - rice"
          />
          <v-img
            src="/images/rawmat-wood.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - wood"
          />
          <v-img
            src="/images/rawmat-stem.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - agricultural waste"
          />
          <v-img
            src="/images/rawmat-cotton.webp"
            cover
            class="rounded-xl"
            max-height="300px"
            alt="Raw material - cotton"
          />
        </div>
        <div>
          <p class="font-bold text-ef-cobalt-blue">Rice Husks</p>
          <p class="font-bold text-ef-cobalt-blue">Sawdust</p>
          <p class="font-bold text-ef-cobalt-blue">
            Water Hyacinth (Invasive Species)
          </p>
          <p class="font-bold text-ef-cobalt-blue">
            Cellulose-based (Paper Cup, Textiles Waste)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    scroll-margin-top: 32px;
  }
</style>
