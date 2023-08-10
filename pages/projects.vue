<script setup lang="ts">
  useSeoMeta({
    title: "EarthForm - Projects",
    ogTitle: "EarthForm - Projects",
    description:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogDescription:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogImage: "https://earthformlabs.com/ef-logo-square.png",
  });

  const herocardData = {
    tagline: "Projects",
    subtile:
      "We’re collaborating with partners to improve accessibility and visibility for biodesigners, and communicating the potential of mycelium through art & storytelling.",
    img: "/images/petri-gradient.png",
  };
</script>

<template>
  <div class="pale-yellow-bg">
    <HeroCard v-bind="herocardData" />
    <div
      class="container mx-auto px-4 sm:px-20 py-10 sm:py-20 grid gap-8 sm:gap-16"
    >
      <div class="grid gap-20">
        <div class="grid grid-cols-none sm:grid-cols-6 gap-8">
          <v-img
            contain
            :src="'/images/regen-futures.svg'"
            class="rounded-2xl mx-auto w-full col-span-5 sm:col-span-2"
            max-width="180px"
          />
          <p class="very-dark-blue mb-4 col-span-4">
            <strong>Regenerative Futures</strong> is a workshop and speaker
            panel series on building regenerative futures in our society. From
            hands-on biomaterials workshops to talks on impact investing,
            sustainable fashion, and regenerative organizations, the topics span
            from business and lifestyle to design and DIY.
          </p>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-6 gap-8">
          <v-img
            contain
            :src="'/images/regen-districts.svg'"
            class="rounded-2xl mx-auto w-full col-span-5 sm:col-span-2"
            max-width="200px"
          />
          <p class="very-dark-blue mb-4 col-span-4">
            <strong>Regen Districts</strong> is a nonprofit building a network
            of local creatives and businesses to showcase the possibilities of
            biodesign through art. The project aims to educate the public,
            improve accessibility to biomass, and catalog biomaterials for open
            innovation.
          </p>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-6 gap-8">
          <v-img
            contain
            :src="'/images/ctrl+r.svg'"
            class="rounded-2xl mx-auto w-full col-span-5 sm:col-span-2"
            max-width="160px"
          />
          <p class="very-dark-blue mb-4 col-span-4">
            <strong>Ctrl+R</strong> is an interdisciplinary artist collective on
            a mission to foster dialogue around circular and regenerative
            design. The collective explores how design and making can
            effectively respond to global ecological challenges, supporting
            restorative and regenerative futures.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
