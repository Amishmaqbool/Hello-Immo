<template>
  <div class="2xl:max-w-[1640px] container mx-auto sm:py-40 py-10">
    <div class="sm:flex justify-between px-5 sm:px-9 sm:pb-10 items-center">
      <p class="text-[28px] sm:text-5xl text-[#023047] font-bold">Laatst toegevoegde panden</p>
      <p class="text-[#023047] text-xl font-normal">Bekijk alle panden</p>
    </div>
    <carousel :items-to-show="3" :itemsToScroll="3" :breakpoints="breakpoints">
      <slide v-for="(slide, index) in slides" :key="index" class="">
        <div class="bg-white rounded-2xl w-[95%] relative">
          <img
            :src="slide.image"
            :alt="'Image ' + (index + 1)"
            class="w-full sm:w-[520px] h-full sm:h-[320px]"
          />
          <div
            class="bg-[#d10909] w-fit px-3 py-1 rounded-full absolute top-2 left-4"
          >
            <span class="text-white">NIEUW</span>
          </div>
          <div
            class="bg-[#034465] w-fit px-3 py-1 rounded-full absolute right-3 top-36 xl:top-44 2xl:top-56"
          >
            <span class="text-white">{{ slide.price }}</span>
          </div>
          <div
            class="bg-[#96a6af] border-[#023047] w-fit p-2 rounded-full absolute top-2 right-4"
            @click="toggleHeart(slide)"
          >
            <img
              src="../assets/hearticon.svg"
              alt="heart"
              class="h-[14px] w-[14px]"
              :class="{ 'bg-red-500': slide.heartClicked }"
            />
          </div>
          <div>
            <p
              class="text-[#023047] text-3xl font-bold 2xl:text-center text-left py-5 px-8"
            >
              {{ slide.text }}
            </p>
          </div>
          <div class="flex max-xl:flex-col xl:justify-between px-8 pb-6">
            <div class="flex gap-2 items-center">
              <img
                src="../assets/locationicon.svg"
                alt="location"
                class="h-full w-[14px]"
              />
              <p class="text-gray-400 text-xl font-normal">
                {{ slide.location }}
              </p>
            </div>
            <div class="flex gap-2 items-center">
              <img
                src="../assets/ruler.svg"
                alt="location"
                class="h-full w-[15px]"
              />
              <p
                class="text-gray-400 text-xl font-normal"
                v-html="slide.scale"
              ></p>
            </div>
            <div class="flex gap-2 items-center">
              <img
                src="../assets/bedicon.svg"
                alt="location"
                class="h-full w-[20px]"
              />
              <p class="text-gray-400 text-xl font-normal">{{ slide.bed }}</p>
            </div>
          </div>
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
import image from "../assets/image.png";
import image2 from "../assets/image2webp.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";

export default {
  name: "CarouselCards",
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
					snapAlign: "center"
				},
				600: {
					itemsToShow: 2,
					snapAlign: "start"
				},
				// 1024 and up
				1024: {
					itemsToShow: 3,
					snapAlign: "start"
				}
			},
      slides: [
        {
          image: image,
          text: "Huis to koop Westmalle",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image3,
          text: "Huis to koop Westmalle",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image2,
          text: "Huis to koop Westmalle",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image4,
          text: "Huis to koop Westmalle",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image5,
          text: "Huis to koop Westmalle",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image,
          text: "Huis to koop Westmalle",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
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
