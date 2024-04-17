<template>
  <div class="container mx-auto py-40">
    <div class="flex justify-between px-9 pb-10 items-center">
    <p class="text-5xl text-[#023047] font-bold">Laatste nieuws</p>
    <p class="text-[#023047] text-xl font-normal">Bekijk alle artikels</p>
    </div>
    <carousel :items-to-show="3" :itemsToScroll="3">
      <slide v-for="(slide, index) in slides" :key="index" class="">
        <div class="rounded-2xl w-[85%] h-full relative">
        <div class="bg-gradient-to-b from-gray-300 via-slate-700 to-black h-full absolute opacity-60 w-full"></div>
          <img :src="slide.image"   :alt="'Image ' + (index + 1)" class=" object-fill h-full"/>
          <div class="bg-[#034465] w-fit px-3 py-1 rounded-full absolute left-3 top-2">
          <span class="text-white">{{slide.date}}</span>
          </div>
          <p class="text-white text-2xl font-bold flex self-start items-start px-3 py-5 absolute bottom-0 shadow-lg">{{ slide.text }}</p>
        </div>
      </slide>
      <template #addons >
        <navigation />
        <pagination/>
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
      slides: [
        { "image": image, "text": "Belangrijke juridische overwegingen bij het kopen van vastgoed." , "date":"03.07.22"  },
        { "image": image6, "text": "Belangrijke juridische overwegingen bij het kopen van vastgoed." , "date":"03.07.22"  },
        { "image": image4, "text": "Belangrijke juridische overwegingen bij het kopen van vastgoed." , "date":"03.07.22"  },
        { "image": image2, "text": "Belangrijke juridische overwegingen bij het kopen van vastgoed." , "date":"03.07.22"  },
        { "image": image5, "text": "Belangrijke juridische overwegingen bij het kopen van vastgoed." , "date":"03.07.22"  },
        { "image": image3, "text": "Belangrijke juridische overwegingen bij het kopen van vastgoed." , "date":"03.07.22"  },
      ]
    };
  },
  methods: {
    toggleHeart(slide) {
      slide.heartClicked = !slide.heartClicked;
    }
  }
};
</script>

<style>
.carousel__pagination-button::after {
  width:0px;
  height:0px;
  }
.carousel__pagination-button {
  margin-top:20px;
  box-sizing: content-box;
  height: 5px;
  width: 5px;
  border-radius: 100%;
  background-color:#96a6af !important;
  margin-right:5px;
  margin-left:5px;
}
.carousel__pagination-button--active {
background-color:#023047 !important;
}
</style>
