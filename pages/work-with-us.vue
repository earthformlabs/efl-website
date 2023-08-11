<script setup lang="ts">
  useSeoMeta({
    title: "EarthForm - Work with us",
    ogTitle: "EarthForm - Work with us",
    description:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogDescription:
      "Transforming underutilized by-products and invasive plant species into high-value biomaterials.",
    ogImage: "https://earthformlabs.com/ef-logo-square.png",
  });
  const herocardData = {
    tagline: "Elevate Your Business",
    subtile:
      "EarthForm meets you where you are to build a better world together. Contact us for a discovery call today.",
    img: "/images/lab-gradient.webp",
  };
</script>

<template>
  <div class="pale-yellow-bg">
    <HeroCard v-bind="herocardData" />
    <div
      class="container mx-auto px-4 sm:px-20 py-10 sm:py-20 grid gap-8 sm:gap-16"
    >
      <div class="grid gap-8">
        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <p class="very-dark-blue mb-4">
            We engage with a variety of clients ranging from consumer brands,
            manufacturers, and museums to integrate sustainable, circular design
            principles into products, experiences and events.
          </p>
        </div>
        <v-img
          cover
          :src="'/images/showroom.webp'"
          class="rounded-2xl"
          max-height="500px"
        />
        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <p class="very-dark-blue mb-4">
            EarthForm helps you stand out in the market, foster customer
            loyalty, and contribute to a greener future - all while achieving
            your business objectives. 
          </p>
        </div>
      </div>
      <div class="grid gap-6">
        <div class="grid grid-cols-none sm:grid-cols-3 gap-4">
          <v-card class="card-gradient">
            <div
              class="flex flex-col justify-center items-center gap-4 h-full max-h-[250px] p-4"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1246_173)">
                  <path
                    d="M13.4306 0L11.841 1.66121L1.66121 11.841L0 13.4306L16.6075 30.0358L5.05526 41.588L4.9097 42.3112L2.38207 55.0187L1.66121 58.4104L5.05526 57.6896L17.7627 55.1619L18.4836 55.0164L30.0358 43.4641L46.5694 60L48.159 58.3388L58.3388 48.159L60 46.5694L43.4641 30.0358L54.8731 18.6268C55.757 17.7463 56.4582 16.6999 56.9368 15.5478C57.4153 14.3956 57.6616 13.1603 57.6616 11.9127C57.6616 10.6651 57.4153 9.42975 56.9368 8.27757C56.4582 7.12539 55.757 6.07903 54.8731 5.19851C53.9943 4.31043 52.9488 3.60452 51.7967 3.12122C50.6446 2.63792 49.4084 2.38674 48.159 2.38207C46.9092 2.38644 45.6725 2.63747 44.52 3.12078C43.3674 3.60409 42.3216 4.31016 41.4425 5.19851L30.0358 16.6075L13.4306 0ZM13.4306 6.57091L17.906 11.1179L14.5119 14.5142L17.8343 17.8343L21.2284 14.4403L26.7134 19.9276L19.856 26.7873L6.49929 13.4306L13.4306 6.57091ZM48.1567 6.85972C49.3581 6.85972 50.578 7.40036 51.6223 8.44699C53.7087 10.5333 53.7087 13.2227 51.6223 15.3067L50.109 16.8224L43.247 9.96265L44.7649 8.44699C45.8115 7.40036 46.9575 6.85972 48.1567 6.85972ZM40.0008 13.2134L46.8582 20.0732L18.9179 48.0111C17.3886 45.0752 14.9928 42.681 12.0559 41.1537L40.0008 13.2134ZM40.2156 33.2843L45.703 38.7716L42.2373 42.2373L45.5597 45.5597L49.0254 42.094L53.4291 46.4977L46.4977 53.4291L33.2843 40.2156L40.2156 33.2843ZM9.09854 44.8365C11.8687 46.0007 14.072 48.2048 15.2351 50.9754L7.58058 52.491L9.09854 44.8365Z"
                    fill="#0E3EA4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1246_173">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="font-bold cobalt-blue">Bespoke</p>
            </div>
          </v-card>
          <v-card class="card-gradient">
            <div
              class="flex flex-col justify-center items-center gap-4 h-full max-h-[250px] p-4"
            >
              <svg
                width="64"
                height="60"
                viewBox="0 0 64 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.37 58.125C37.37 59.1604 36.5334 60 35.5015 60C34.4697 60 33.633 59.1604 33.633 58.125V54.3737C33.633 46.0905 26.9402 39.3746 18.685 39.3746C10.4282 39.3746 3.737 46.0891 3.737 54.3737V58.125C3.737 59.1604 2.90035 60 1.8685 60C0.836651 60 0 59.1604 0 58.125V54.3737C0 44.018 8.36405 35.6246 18.685 35.6246C29.0043 35.6246 37.37 44.0191 37.37 54.3737V58.125ZM34.5552 34.1173C33.8066 34.8301 32.6237 34.7991 31.9135 34.0478C31.2032 33.2966 31.234 32.11 31.9827 31.3973C35.4302 28.1143 39.9935 26.2502 44.8444 26.2502C55.1633 26.2502 63.5294 34.6443 63.5294 44.9961V48.7499C63.5294 49.7853 62.6928 50.6249 61.6609 50.6249C60.6291 50.6249 59.7924 49.7853 59.7924 48.7499V44.9961C59.7924 36.7146 53.0995 30.0003 44.8444 30.0003C40.9606 30.0003 37.3153 31.4894 34.5556 34.1174L34.5552 34.1173ZM18.6847 30.0002C13.0091 30.0002 8.40794 25.383 8.40794 19.6876C8.40794 13.9923 13.0091 9.37507 18.6847 9.37507C24.3602 9.37507 28.9615 13.9923 28.9615 19.6876C28.9615 25.383 24.3602 30.0002 18.6847 30.0002ZM18.6847 26.2502C22.2966 26.2502 25.2244 23.3121 25.2244 19.6876C25.2244 16.0632 22.2966 13.1251 18.6847 13.1251C15.0728 13.1251 12.1449 16.0632 12.1449 19.6876C12.1449 23.3121 15.0728 26.2502 18.6847 26.2502ZM44.8437 20.6251C39.1682 20.6251 34.567 16.0079 34.567 10.3126C34.567 4.61725 39.1682 0 44.8437 0C50.5193 0 55.1205 4.61725 55.1205 10.3126C55.1205 16.0079 50.5193 20.6251 44.8437 20.6251ZM44.8437 16.8751C48.4556 16.8751 51.3835 13.937 51.3835 10.3126C51.3835 6.68812 48.4556 3.75003 44.8437 3.75003C41.2318 3.75003 38.304 6.68812 38.304 10.3126C38.304 13.937 41.2318 16.8751 44.8437 16.8751Z"
                  fill="#0E3EA4"
                />
              </svg>

              <p class="font-bold cobalt-blue">Partnerships</p>
            </div>
          </v-card>
          <v-card class="card-gradient">
            <div
              class="flex flex-col justify-center items-center gap-4 h-full max-h-[250px] p-4"
            >
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6667 58H12.1667C9.73552 58 7.40394 57.0342 5.68485 55.3151C3.96577 53.5961 3 51.2645 3 48.8333V45.7778H33.5556V51.8889C33.5556 53.5097 34.1994 55.064 35.3455 56.2101C36.4915 57.3562 38.0459 58 39.6667 58ZM39.6667 58C41.2874 58 42.8418 57.3562 43.9879 56.2101C45.1339 55.064 45.7778 53.5097 45.7778 51.8889V9.11111C45.7778 7.90245 46.1362 6.72093 46.8077 5.71596C47.4792 4.711 48.4336 3.92772 49.5503 3.46518C50.6669 3.00265 51.8957 2.88163 53.0811 3.11743C54.2665 3.35322 55.3554 3.93525 56.2101 4.78991C57.0647 5.64456 57.6468 6.73346 57.8826 7.9189C58.1184 9.10433 57.9974 10.3331 57.5348 11.4497C57.0723 12.5664 56.289 13.5208 55.284 14.1923C54.2791 14.8638 53.0975 15.2222 51.8889 15.2222H45.7778M51.8889 3H18.2778C15.8466 3 13.515 3.96577 11.796 5.68486C10.0769 7.40394 9.11111 9.73552 9.11111 12.1667V45.7778M21.3333 15.2222H33.5556M21.3333 27.4444H33.5556"
                  stroke="#0E3EA4"
                  stroke-width="4.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="font-bold cobalt-blue">White-Label Designs</p>
            </div>
          </v-card>
        </div>
      </div>
      <div class="grid gap-8">
        <div class="grid grid-cols-none sm:grid-cols-2">
          <div>
            <h3 class="cobalt-blue mb-4">Responsibly Sourced Byproducts</h3>
            <p class="cobalt-blue">
              We engage in bespoke partnerships with brands, meticulously
              designing and producing mycelium-based products tailored precisely
              to their unique requirements.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <div>
            <h3 class="cobalt-blue mb-4">Partnerships</h3>
            <p class="cobalt-blue">
              Through collaborative alliances, we partner with clients to
              co-create and manufacture co-branded mycelium products, aligning
              design expertise and brand identities.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-none sm:grid-cols-2 gap-8">
          <div>
            <h3 class="cobalt-blue mb-4">White-Label Designs</h3>
            <p class="cobalt-blue">
              Our studio offers design solutions, enabling clients to
              manufacture their own branded products while benefiting from our
              expert biodesigners.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-gradient {
    background: linear-gradient(#8fade9 100%, #ffffff 0%);
  }
</style>
