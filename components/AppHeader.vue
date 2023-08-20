<script setup lang="ts">
  const drawer = ref<boolean | null>(null);

  const toggleMenu = () => {
    drawer.value = !drawer.value;
    console.log(drawer.value);
  };

  watch(drawer, (newVal) => {
    if (newVal === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
</script>

<template>
  <div class="w-full absolute z-50">
    <div class="container m-auto flex items-center justify-between px-8 py-8">
      <nuxt-link to="/">
        <img
          src="~/assets/logos/earthform-logotype-v2.svg"
          alt="EarthForm"
          style="max-height: 40px"
          width="100%"
          height="100%"
        />
      </nuxt-link>
      <div class="items-center gap-4 text-ef-cobalt-blue hidden sm:flex">
        <NavLinks />
      </div>
      <div class="flex flex-col sm:hidden z-50">
        <v-icon
          size="large"
          color="ef-very-dark-blue"
          @click.stop="toggleMenu()"
        >
          <svg
            class="v-icon__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
          </svg>
        </v-icon>
      </div>
    </div>
  </div>
  <v-navigation-drawer
    class="border-w-0"
    v-model="drawer"
    theme="dark"
    temporary
  >
    <div class="navList bg-ef-very-dark-blue h-full">
      <nuxt-link to="/" class="mb-8">
        <img
          src="~/assets/logos/earthform-logotype-v2-white.svg"
          alt="EarthForm"
          style="max-height: 40px"
          ;
        />
      </nuxt-link>
      <NavLinks />
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
  .navList {
    padding: 32px 16px 16px 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 1.5rem;
  }

  .border-w-0 {
    border-right-width: 0px;
  }
</style>
