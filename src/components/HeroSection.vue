<template>
  <div class="bg-white">
    <div>
      <Navbar />
    </div>
    <div class="lg:flex items-center gap-20 2xl:justify-between mt-20 2xl:mt-0">
      <div
        class="2xl:max-w-[700px] px-5 container sm:mx-auto lg:pl-20 2xl:pl-10"
      >
        <h1
          class="text-[40px] sm:text-[56px] text-[#023047] helvatica-Bold leading-[60px] 2xl:w-[85%]"
        >
          Wij helpen je een thuis vinden én financieren
        </h1>
        <p class="text-[#023047] text-[20px] pt-2 2xl:w-[720px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <div
          class="bg-[#F4F4F4] rounded-[20px] py-[40px] px-[32px] mt-[55px] mb-10 2xl:mb-0"
        >
          <ToggleSwitch />
          <div class="pt-5">
            <select
              class="custom-select rounded-[30px] border-[1.5px] border-[#023047] px-5 py-3 w-full font-[500] text-[20px] text-[#023047]"
              v-model="selected"
            >
              <option disabled value="">Gemeente of postcode</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>

            <div class="sm:flex gap-x-[32px] items-center pt-8">
              <select
                class="custom-select rounded-[30px] border-[1.5px] border-[#023047] px-5 py-3 w-full font-[500] text-[20px] text-[#023047]"
                v-model="selected2"
              >
                <option disabled value="">Type</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <select
                class="custom-select rounded-[30px] border-[1.5px] sm:mt-0 mt-5 border-[#023047] px-5 py-3 w-full font-[500] text-[20px] text-[#023047]"
                v-model="selected3"
              >
                <option disabled value="">Prijis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <p
                class="text-[20px] text-[#023047] w-full sm:mt-0 mt-5 sm:text-left text-center"
              >
                Meer filters
              </p>
            </div>

            <div class="flex justify-center sm:justify-start">
              <button
                class="bg-[#034465] text-white font-medium text-[22px] rounded-[25px] px-5 py-2 mt-8 flex gap-4 items-center"
              >
                Zoek pand
                <img src="/Search.svg" alt="MortageFamily" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="image-correction lg:mt-[-295px] xl:mt-[-200px] 2xl:mt-[-90px] lg:block hidden w-[940px]">
        <img
          class="bg-transparent lg:max-w-lg xl:max-w-2xl 2xl:max-w-full 2xl:h-auto h-[800px]"
          src="/LuxuryHouse.webp"
          alt="LuxuryHouse"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from "./ToggleSwitch.vue";
import Navbar from "./Navbar.vue";
import { ref } from "vue";

const selected = ref("");
const selected2 = ref("");
const selected3 = ref("");
</script>
