<script setup>
import CarouselCards from "./components/CarouselCards.vue";
import TopBanner from "./components/TopBanner.vue";
import SignupNewsletter from "./components/SignupNewsletter.vue";
import Footer from "./components/Footer.vue";
import MortageLoan from "./components/MortageLoan.vue";
import HeroSection from "./components/HeroSection.vue";
import NewsCardsCarousal from "./components/NewsCardsCarousal.vue";
</script>

<template>
  <div>
    <div class="lg:block hidden">
      <TopBanner />
    </div>
    <div class="">
      <HeroSection />
    </div>
    <div class="bg-[#F4F4F4] 2xl:mt-[-30px]">
      <CarouselCards />
    </div>
    <MortageLoan />
    <div class="bg-[#F4F4F4]">
      <NewsCardsCarousal />
    </div>
    <SignupNewsletter />
    <Footer />
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
