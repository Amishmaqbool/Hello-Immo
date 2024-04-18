<script setup>
import CarouselCards from "../components/CarouselCards.vue";
import TopBanner from "../components/common/TopBanner.vue";
import SignupNewsletter from "../components/SignupNewsletter.vue";
import MortageLoan from "../components/MortageLoan.vue";
import HeroSection from "../components/HeroSection.vue";
import NewsCardsCarousal from "../components/NewsCardsCarousal.vue";
import Layout from "../components/layout/Layout.vue";
</script>

<template>
  <div>
    <Layout>
      <div class="">
        <HeroSection />
      </div>
      <div class="bg-[#F4F4F4] 2xl:mt-[-30px]">
        <CarouselCards />
      </div>
      <MortageLoan />
      <NewsCardsCarousal />
      <SignupNewsletter />
    </Layout>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
