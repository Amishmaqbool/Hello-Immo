<template>
  <div class="2xl:max-w-[1640px] container mx-auto sm:py-40 py-10">
    <div class="sm:flex justify-between px-5 sm:px-9 sm:pb-10 items-center">
      <p class="text-[28px] sm:text-5xl text-[#023047] font-bold">
        Laatste nieuws
      </p>
      <p class="text-[#023047] text-xl font-normal">Bekijk alle artikels</p>
    </div>
    <carousel :items-to-show="3" :itemsToScroll="3" :breakpoints="breakpoints">
      <slide v-for="(slide, index) in slides" :key="index" class="">
        <div class="rounded-2xl w-[85%] h-full relative">
          <div
            class="bg-gradient-to-b from-gray-300 via-slate-700 to-black h-full absolute opacity-60 w-full rounded-2xl lg:py-0 py-10"
          ></div>
          <img
            :src="slide.image"
            :alt="'Image ' + (index + 1)"
            class="lg:object-fill h-full"
          />
          <div
            class="bg-[#034465] lg:w-fit px-3 py-1 rounded-full absolute left-3 top-5"
          >
            <span class="text-white">{{ slide.date }}</span>
          </div>
          <p
            class="text-white lg:text-2xl font-bold text-left lg:pl-3 py-5 absolute bottom-0 shadow-lg"
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
import image from "../assets/european.png";
import image2 from "../assets/image2webp.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image.png";
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
        // 700px and up
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        600: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
      slides: [
        {
          image: image,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image6,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image4,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image2,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image5,
          text: "Belangrijke juridische overwegingen bij het kopen van vastgoed.",
          date: "03.07.22",
        },
        {
          image: image3,
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
</style>
