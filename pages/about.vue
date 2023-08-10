<script setup lang="ts">
  useSeoMeta({
    title: "EarthForm - About Us",
    ogTitle: "EarthForm - About Us",
    description:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogDescription:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogImage: "https://earthformlabs.com/ef-logo-square.png",
  });

  const herocardData = {
    tagline: "About",
    subtile:
      "EarthForm believes that responsible design should be the standard.",
    description:
      "We’re on a mission to change the way we design and produce materials for a better world. ",
    img: "/images/mushzoom-gradient.png",
  };
</script>

<template>
  <div class="pale-yellow-bg">
    <HeroCard v-bind="herocardData" />
    <div
      class="container mx-auto px-4 sm:px-20 py-10 sm:py-20 grid gap-8 sm:gap-16"
    >
      <div class="grid gap-20">
        <div>
          <p class="mb-4">
            The materials in our everyday lives have long faced environmental
            and social challenges stemming from a lack of supply-chain
            transparency and the extractive and toxic processes in conventional
            production.
          </p>
          <p class="mb-4">
            At EarthForm, we take inspiration from the systems in our natural
            world to serve as an endless source of wisdom in creating a more
            livable planet and abundant society for all. By mimicking and
            collaborating with nature’s creative, efficient and adaptable
            processes, we’re cultivating regenerative futures, where design,
            function, and sustainability converge.
          </p>
          <p class="mb-4">
            Our process applies science, design and engineering to transform
            waste, such as coffee grinds, fruit peels, and agricultural
            by-products, to build circular economy systems, create value, reduce
            waste, pollution and tackle the climate crisis.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap gap-6 justify-center pb-8">
        <v-img
          src="/images/sdg/sdg-09.png"
          alt="SDG 9"
          width="100%"
          height="auto"
          max-width="160px"
          class="rounded-xl"
        />
        <v-img
          src="/images/sdg/sdg-12.png"
          alt="SDG 12"
          width="100%"
          height="100%"
          max-width="160px"
          class="rounded-xl"
        />
        <v-img
          src="/images/sdg/sdg-13.png"
          alt="SDG 13"
          width="100%"
          height="100%"
          max-width="160px"
          class="rounded-xl"
        />
        <v-img
          src="/images/sdg/sdg-14.png"
          alt="SDG 14"
          width="100%"
          height="100%"
          max-width="160px"
          class="rounded-xl"
        />
        <v-img
          src="/images/sdg/sdg-15.png"
          alt="SDG 15"
          width="100%"
          height="100%"
          max-width="160px"
          class="rounded-xl"
        />
      </div>
      <div class="grid gap-8">
        <h2 class="cobalt-blue">Team</h2>
        <div>
          <h3 class="mb-4">Founders</h3>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
            <div class="w-full h-full grid gap-4">
              <img
                src="~/assets/images/team/nat.png"
                alt="Nat (Huad)"
                width="100%"
                height="100%"
                class="rounded-2xl max-h-[500px] w-full h-full"
              />
              <div>
                <nuxt-link
                  to="https://www.linkedin.com/in/nathakits/"
                  target="_blank"
                  rel="noopener"
                >
                  <p class="text-sm sm:text-xs font-bold">Nathakit Sae-Tan</p>
                </nuxt-link>
                <p class="text-sm sm:text-xs">CO-CEO | Bangkok</p>
                <p class="text-sm sm:text-xs">Innovation Lead</p>
              </div>
            </div>
            <div class="w-full h-full grid gap-4">
              <img
                src="~/assets/images/team/nika.png"
                alt="Nika"
                width="100%"
                height="100%"
                class="rounded-2xl max-h-[500px] w-full h-full"
              />
              <div>
                <p class="text-sm sm:text-xs font-bold">Nika Hedrick</p>
                <p class="text-sm sm:text-xs">CO-CEO | San Francisco</p>
                <p class="text-sm sm:text-xs">Business Development</p>
              </div>
            </div>
            <div class="w-full h-full grid gap-4">
              <img
                src="~/assets/images/team/gino.png"
                alt="Gino"
                width="100%"
                height="100%"
                class="rounded-2xl max-h-[500px] w-full h-full"
              />
              <div>
                <p class="text-sm sm:text-xs font-bold">Makhawee Sukawatano</p>
                <p class="text-sm sm:text-xs pb-4">Chief Product Officer</p>
              </div>
            </div>
            <div class="w-full h-full grid gap-4">
              <img
                src="~/assets/images/team/anya.png"
                alt="Anya"
                width="100%"
                height="100%"
                class="rounded-2xl max-h-[500px] w-full h-full"
              />
              <div>
                <p class="text-sm sm:text-xs font-bold">Anya Muangkote</p>
                <p class="text-sm sm:text-xs pb-4">Chief Design Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="grid gap-8">
        <h2 class="cobalt-blue">Advisors</h2>
        <div>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
            <div class="w-full h-full grid gap-4">
              <div>
                <nuxt-link
                  to="https://www.linkedin.com/in/nathakits/"
                  target="_blank"
                  rel="noopener"
                >
                  <p class="text-sm sm:text-xs font-bold">
                    Proffessor Dr. Nungnit Wattanavichean, PhD
                  </p>
                </nuxt-link>
                <p class="text-sm sm:text-xs pb-4">Scientific Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
