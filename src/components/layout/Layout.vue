<template>
  <TopBanner />
  <slot />
  <AppFooter />
</template>

<script>
import TopBanner from "../common/TopBanner.vue";
import AppFooter from "../common/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    TopBanner,
    AppFooter,
  },
};
</script>
