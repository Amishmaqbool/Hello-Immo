<template>
  <div  class="container mx-auto">
    <carousel :items-to-show="3" :itemsToScroll="3">
      <slide class="bg-red-400 h-[300px] rounded-lg" v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  </template>
  
  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  
  export default {
    name: "CarouselCards",
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  };
  </script>
  <style scoped>
  .carousel__slide {
    margin: 20px;
  }
  .carousel__prev {

}

.carousel__next {
  position: absolute !important;
  right: -22px !important;
}
.carousel__prev ,.carousel__prev--disabled{
  position: absolute !important;
 left: -22px !important;
}
  </style>