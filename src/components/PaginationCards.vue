<template>
  <div class="2xl:max-w-[1640px] container px-5 sm:px-0 sm:mx-auto">
    <div class="pt-[40px]">
      <SearchBanner />
    </div>
    <div class="sm:flex justify-between pt-10 pb-10 items-center">
      <p
        class="text-medium sm:text-xlarge text-darkblue font-bold font-[Cabin]"
      >
        Huis te koop
      </p>
      <div class="flex items-center text-darkblue text-xl font-normal">
        <p class="opacity-[0.65]">Sorteren op:</p>
        <select
          v-model="selected"
          class="custom-select px-2 w-[150px] font-[500] text-xl text-darkblue border-b-2 border-darkblue"
        >
          <option disabled value="">Relevantie</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </div>
    </div>
    <div>
      <vue-awesome-paginate
        :total-items="totalPages"
        :items-per-page="itemsPerPage"
        :max-pages-shown="maxPagesShown"
        :current-page="currentPage"
        :on-click="onClickHandler"
      />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 justify-between"
      >
        <div v-for="(slide, index) in displayedSlides" :key="index" class="">
          <div
            class="bg-white rounded-2xl sm:w-[100%] h-full flex flex-col justify-between relative"
          >
            <img
              :src="slide.image"
              :alt="'Image ' + (index + 1)"
              class="w-full sm:w-full h-full sm:h-[320px]"
            />
            <div
              class="bg-red px-4 py-1 rounded-[20px] absolute top-2 left-4"
            >
              <span class="text-white text-lg font-bold">NIEUW</span>
            </div>
            <div
              class="bg-blue w-fit px-4 py-[3px] rounded-[20px] absolute right-4 sm:right-3 top-[165px] sm:top-56 max-[400px]:top-[120px] xl:top-64 2xl:top-[270px]"
            >
              <span class="text-white font-bold text-small">{{
                slide.price
              }}</span>
            </div>
            <div
              class="bg-SteelBlueGray border-darkblue border-[1.5px] w-fit p-2 rounded-full absolute top-2 right-4 cursor-pointer"
              @click="toggleHeart(index)"
            >
              <img
                v-if="!isHeartClicked(index)"
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
                class="text-darkblue text-medium font-bold px-8 text-left py-5"
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
        </div>
      </div>
    </div>
    <div class="pagination-container flex justify-center py-20">
      <button
        :disabled="currentPage === 1"
        class="paginate-buttons cursor-pointer"
        @click="onClickHandler(currentPage - 1)"
      >
        <img src="/ArrowLeft.svg" alt="location" />
      </button>

      <div class="mx-6">
        <button
          v-for="page in totalPages"
          :key="page"
          class="mx-2 px-1"
          :class="{
            'paginate-buttons': true,
            'active-page': page === currentPage,
          }"
          @click="onClickHandler(page)"
        >
          {{ page }}
        </button>
      </div>

      <button
        :disabled="currentPage === totalPages"
        class="paginate-buttons cursor-pointer"
        @click="onClickHandler(currentPage + 1)"
      >
        <img src="/ArrowRight.svg" alt="location" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchBanner from "../components/SearchBanner.vue";
import image from "../assets/house1.png";
import image2 from "../assets/house2.webp";
import image3 from "../assets/house3.webp";
import image4 from "../assets/house4.webp";
import image5 from "../assets/house5.webp";

const slides = [
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
];

const currentPage = ref(1);
const selected = ref("");
const itemsPerPage = 9;
const totalPages = Math.ceil(slides.length / itemsPerPage);
const maxPagesShown = 5;
const clickedHearts = ref([]);

const onClickHandler = (page) => {
  currentPage.value = page;
  clickedHearts.value = [];
};

const displayedSlides = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return slides.slice(start, end);
});

const toggleHeart = (index) => {
  if (clickedHearts.value.includes(index)) {
    clickedHearts.value = clickedHearts.value.filter((item) => item !== index);
  } else {
    clickedHearts.value.push(index);
  }
};

const isHeartClicked = (index) => {
  return clickedHearts.value.includes(index);
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.active-page {
  color: #023047;
  font-weight: 900;
  border-bottom: 2px solid red;
}
</style>
