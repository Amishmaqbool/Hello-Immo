<template>
  <div class="2xl:max-w-[1640px] container mx-auto sm:pb-28 sm:pt-40 py-10">
    <div
      class="sm:flex justify-between px-5 sm:px-4 pb-5 sm:pb-10 items-center"
    >
      <p
        class="text-[28px] sm:text-[44px] text-darkblue font-bold font-[Cabin]"
      >
        Laatst toegevoegde panden
      </p>
      <p
        class="text-darkblue text-[20px] font-normal underline cursor-pointer"
      >
        Bekijk alle panden
      </p>
    </div>
    <carousel :breakpoints="breakpoints">
      <slide v-for="(slide, index) in slides" :key="index" class="">
        <div
          class="bg-white rounded-2xl mx-2 w-[90%] sm:w-[510px] h-full flex flex-col justify-between relative"
        >
          <img
            :src="slide.image"
            :alt="'Image ' + (index + 1)"
            class="w-full sm:w-[520px] h-full sm:h-[320px]"
          />
          <div
            class="bg-red px-4 py-1 rounded-[20px] absolute top-2 left-4"
          >
            <span class="text-white text-[18px] font-bold">NIEUW</span>
          </div>
          <div
            class="bg-blue w-fit px-4 py-[3px] rounded-[20px] absolute right-3 top-56 max-[400px]:top-40 xl:top-64 2xl:top-[270px]"
          >
            <span class="text-white font-bold text-[22px]">{{
              slide.price
            }}</span>
          </div>
          <div
            class="bg-SteelBlueGray border-darkblue border-[1.5px] w-fit p-2 rounded-full absolute top-2 right-4 cursor-pointer"
            @click="toggleHeart(slide)"
          >
            <img
              v-if="!slide.heartClicked"
              src="../assets/heart-outline.svg"
              alt="heart"
              class="h-[30px] w-[30px]"
            />
            <img
              v-else
              src="../assets/heart-outlineRed.svg"
              alt="heart"
              class="h-[30px] w-[30px] block"
            />
          </div>
          <div>
            <p
              class="text-darkblue text-[28px] font-bold px-8 text-left pt-5 pb-3"
            >
              {{ slide.text }}
            </p>
          </div>
          <div class="flex max-xl:flex-col gap-8 px-8 pb-6">
            <div class="flex gap-2">
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
              />
            </div>
            <div class="flex gap-2 items-center">
              <img
                src="../assets/bedicon.svg"
                alt="location"
                class="h-full w-[20px]"
              />
              <p class="text-gray-400 text-xl font-normal">
                {{ slide.bed }}
              </p>
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
import image from "../assets/house1.png";
import image2 from "../assets/house2.webp";
import image3 from "../assets/house3.webp";
import image4 from "../assets/house4.webp";
import image5 from "../assets/house5.webp";

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
          image: image2,
          text: "Huis te koop Antwerpen - Zuid",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image,
          text: "Huis te koop Beerse",
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
          text: "Huis te koop Antwerpen - Zuid",
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
          text: "Huis te koop Beerse",
          location: "Vissersstraat 4",
          scale: "220m<sub>2</sub>",
          bed: "3",
          price: "€ 345.500",
          heartClicked: false,
        },
        {
          image: image2,
          text: "Huis te koop Antwerpen - Zuid",
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
          text: "Huis te koop Beerse",
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
.carousel__next {
  top: 30%;
}
.carousel__prev {
  top: 30%;
}

.carousel__pagination-item {
  display: none;
}

.carousel__pagination-item:nth-child(1),
.carousel__pagination-item:nth-child(5),
.carousel__pagination-item:nth-child(9) {
  display: list-item;
}

@media screen and (max-width: 600px) {
  .carousel__pagination-item {
    display: list-item !important;
  }
}
</style>
