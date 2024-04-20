<template>
  <div class="2xl:max-w-[1640px] container mx-auto sm:pt-40 py-10">
    <div
      class="sm:flex justify-between px-5 sm:px-4 pb-5 sm:pb-10 items-center"
    >
      <p
        class="text-[28px] sm:text-[44px] text-[#023047] font-bold font-[Cabin]"
      >
        Laatste nieuws
      </p>
      <p class="text-[#023047] text-[20px] font-normal underline cursor-pointer">
        Bekijk alle artikels
      </p>
    </div>
    <carousel :breakpoints="breakpoints">
      <slide
        v-for="(slide, index) in slides"
        :key="index"
        class=""
      >
        <div
          class="rounded-2xl w-[80%] xl:w-[400px] 2xl:w-[520px] h-full 2xl:h-[400px] relative cursor-pointer"
        >
          <div
            class="bg-gradient-to-b from-transparent via-transparent to-[#023047] h-full absolute opacity-110 w-full rounded-2xl lg:py-0 py-10"
          />
          <img
            :src="slide.image"
            :alt="'Image ' + (index + 1)"
            class="lg:object-fill h-full"
          >
          <div
            class="bg-[#034465] lg:w-fit px-4 pt-[7px] pb-1 rounded-[20px] absolute left-3 top-7"
          >
            <span class="text-white text-[18px] font-bold">{{
              slide.date
            }}</span>
          </div>
          <p
            class="text-white lg:text-[20px] xl:text-[28px] font-bold text-left px-4 lg:pl-3 py-5 absolute bottom-0 shadow-lg w-[90%]"
          >
            {{ slide.text }}
          </p>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import image2 from "../assets/house1.png";
import image5 from "../assets/house4.webp";
import image7 from "../assets/house6.webp";
export default {
  name: "NewsCardsCarousal",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        300: {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
        640: {
          itemsToShow: 2,
          itemsToScroll: 2,
          snapAlign: "start",
        },
        1100: {
          itemsToShow: 3,
          itemsToScroll: 4,
        },
      },
      slides: [
        {
          image: image5,
          text: "De huidige vastgoedmarkt: trends en prognoses.",
          date: "03.07.22",
        },
        {
          image: image7,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image2,
          text: "Het belang van een goede eerste indruk bij het bezichtigen van huizen.",
          date: "03.07.22",
        },
        {
          image: image5,
          text: "De huidige vastgoedmarkt: trends en prognoses.",
          date: "03.07.22",
        },
        {
          image: image2,
          text: "Het belang van een goede eerste indruk bij het bezichtigen van huizen.",
          date: "03.07.22",
        },
        {
          image: image7,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image5,
          text: "De huidige vastgoedmarkt: trends en prognoses.",
          date: "03.07.22",
        },
        {
          image: image2,
          text: "Het belang van een goede eerste indruk bij het bezichtigen van huizen.",
          date: "03.07.22",
        },
        {
          image: image7,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
      ],
    };
  },
  methods: {
    toggleHeart(slide) {
      slide.heartClicked = !slide.heartClicked;
    },
  },
};
</script>

<style>
.carousel__pagination-button::after {
  width: 0px;
  height: 0px;
}
.carousel__pagination-button {
  margin-top: 20px;
  box-sizing: content-box;
  height: 5px;
  width: 5px;
  border-radius: 100%;
  background-color: #96a6af !important;
  margin-right: 5px;
  margin-left: 5px;
}
.carousel__pagination-button--active {
  background-color: #023047 !important;
}
.carousel__next {
  top: 30%;
}
.carousel__prev {
  top: 30%;
}

@media screen and (max-width: 1099px) {
  .carousel__pagination-item {
    display: list-item !important;
  }
}
</style>
