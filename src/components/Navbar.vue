<template>
  <div :class="{'2xl:max-w-[1640px] container px-5 sm:px-0 sm:mx-auto': true, 'pt-[30px]': !isSearchPage, 'py-[20px]': isSearchPage}">
    <nav>
      <div class="xl:flex justify-between">
        <div class="flex justify-between xl:gap-[18px] items-center">
          <a href="/">
            <img src="/Logo.svg" alt="" class="sm:w-auto w-[200px]" />
          </a>
          <div class="z-50 flex gap-2 items-center">
            <div class="sm:block hidden">
              <ToggleSwitch />
            </div>
            <div class="xl:hidden">
              <button @click="toggleMobileMenu" class="p-2">
                <img class="h-6 w-6" src="/menu.png" alt="Menu" />
              </button>
            </div>
          </div>
        </div>

        <div class="z-50 xl:block hidden">
          <div class="flex items-center gap-4 2xl:gap-[43px]">
            <p class="font-medium text-[22px] text-[#023047] cursor-pointer">
              Panden te koop
            </p>
            <p class="font-medium text-[22px] text-[#023047] cursor-pointer">
              Hypotheeklening
            </p>
            <div class="px-7 py-3 flex items-center gap-3 rounded-full cursor-pointer bg-[#034465]">
              <p class="font-semibold text-[22px] text-white">Contacteer ons</p>
              <img src="/ArrowRightWhite.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div
      class="fixed inset-y-0 left-0 z-40 w-64 transform bg-white overflow-auto transition-transform duration-300 ease-in-out"
      :class="{
        '-translate-x-full': !isMobileMenuOpen,
        'translate-x-0': isMobileMenuOpen,
      }"
    >
      <button @click="toggleMobileMenu" class="absolute top-0 right-0 p-4">
        <img class="h-6 w-6" src="/CloseIcon.svg" alt="Close" />
      </button>
      <ul class="mt-10 space-y-4">
        <div class="px-5">
          <img src="/Logo.svg" alt="" />
        </div>
        <li>
          <a href="#" class="block px-4 py-2 text-lg font-medium text-[#023047]"
            >Panden te koop</a
          >
        </li>
        <li>
          <a href="#" class="block px-4 py-2 text-lg font-medium text-[#023047]"
            >Hypotheeklening</a
          >
        </li>
        <li>
          <a href="#" class="block px-4 py-2 text-lg font-medium text-[#023047]"
            >Contacteer ons</a
          >
        </li>
        <li>
          <a href="#" class="block px-4 py-2 text-lg font-medium text-[#023047]"
            >Nieuws</a
          >
        </li>
        <li>
          <a href="#" class="block px-4 py-2 text-lg font-medium text-[#023047]"
            >Over ons</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-lg font-medium text-[#023047] flex gap-2 items-center"
          >
            <img src="/FeatherUser.svg" width="20" height="20" alt="stars" />
            Inloggen
          </a>
        </li>
        <div class="md:flex p-4 items-center">
          <h1 class="text-[20px] text-[#023047] font-bold opacity-70">4,8</h1>
          <p class="text-[#023047] font-normal opacity-70 sm:pt-0 pt-2">
            (Google reviews)
          </p>
          <div class="md:pl-4 sm:pt-0 pt-2">
            <img src="/BannerStars.svg" width="50" height="30" alt="stars" />
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router"; // Import useRoute from vue-router
import ToggleSwitch from "./ToggleSwitch.vue";

export default {
  name: "Navbar",
  components: {
    ToggleSwitch,
  },
  setup() {
    const isMobileMenuOpen = ref(false);
    const route = useRoute(); // Get the current route
    const isSearchPage = computed(() => route.path === '/search'); // Check if it's the search page

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "visible";
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      isSearchPage
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #fff;
}

.dropdown {
  transition: transform 0.3s ease-in-out;
}
</style>
